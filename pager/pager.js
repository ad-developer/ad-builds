/***
 * Pager
 * 
 * Setting 
 *  root, 
 *  opt {
 *        recordsPerPage: 25,
 *        pageControl: true,
 *        options: [25,50,100,150,200]     
 *      }
 *  Events (root)
 *  pager.change
 *      data: {
 *              selectedPage: 1,
 *              recordsPerPage: 25
 *             }
 *  pager.records.change
 *      data: {...}
 * 
 *  Public methods 
 *      set(selectedPage, totalNumber)
 *      clear()
 *      show()
 *      hide()  
 */
class ADPager {

    constructor(root, ...args){
        this.root_ = root;
        this.init(...args);
    }

    init(opt){
        // Set pager
        // Initial page size 
        // is 25 if not set 
        this.recordsPerPage_ = 25;

        // Settings 
        if(opt.recordsPerPage){
            this.recordsPerPage_ = opt.recordsPerPage;
        }
        const event = 'pager.change';

        // Button handlers 
        this.buttonHandlers_ = {
            first: ()=>{
               this.emit(event, {pageSelected: 1})
               this.closeOpt_();
            },
            last: ()=>{
                const totalPageCount = Math.ceil( this.totalNumber_ / this.recordsPerPage_);
                this.emit(event, {pageSelected: totalPageCount});
                this.closeOpt_();
            },
            prev:()=>{
                this.emit(event, {pageSelected: this.selectedPage_ - 1})
            },
            next:()=>{
                this.emit(event, {pageSelected: this.selectedPage_ + 1})
            }
        };

        // Render pager 
        // Pager will be rendered in the hidden state first
        this.renderPager_()

        // Options list button
        this.selectorBtn_ = this.root_.querySelector('[ad-selector]');
        this.selectorBtn_
            .addEventListener('click', e => this.optHandler_(e));
        
            // Option list 
        this.optionList_ = this.root_.querySelector('[ad-opt]');  
       
        

        // Set page control 
        if(opt && opt.pageControl){
            const pageControl =
                this.addPageControl_(opt);
            // Wire event
            pageControl.addEventListener('change',e=>{
                this.recordsPerPage_ = e.target.value;
                this.emit('pager.records.change', {recordsPerPage: this.recordsPerPage_});
            });
        }
    }
    
    set(selectedPage, totalNumber){
        
        const checkNumber = (selectedPage - 1) * this.recordsPerPage_;
        if(checkNumber > totalNumber){
            throw 'seselectedPage number exceeds the total amount of records calculated based on the records per pages and the total number of records';
        }

        this.selectedPage_ = selectedPage;
        this.totalNumber_ = totalNumber;
        // Set range message in the format 1 - 50 of 256
        const rangeMessage = this.generateRangeMessage_(selectedPage, totalNumber);
        this.root_.querySelector('[ad-selector-cur]')
            .innerHTML = rangeMessage;

        let listenHandlers = [];
        let unlistenHandlers = [];
        
        // Set listen buttons 
        if(selectedPage == 1){
            listenHandlers.push('last','next');
            unlistenHandlers.push('first', 'prev');
        }
        
        const totalPageCount = Math.ceil( totalNumber / this.recordsPerPage_);
        if(totalPageCount == selectedPage){
            listenHandlers.push('first', 'prev');
            unlistenHandlers.push('last','next');
        }

        // Set unlisten buttons 
        
        if(selectedPage != 1 && totalPageCount != selectedPage){
            listenHandlers.push('first', 'prev', 'last','next');
        }

        listenHandlers.forEach(el=>{
            const btn = this.root_.querySelector(`[ad-pager-button=${el}]`);
            btn.addEventListener('click', this.buttonHandlers_[el]);
            btn.classList.remove('ad-pager--disabled');
        });

        unlistenHandlers.forEach(el=>{
            const btn = this.root_.querySelector(`[ad-pager-button=${el}]`);
            btn.removeEventListener('click', this.buttonHandlers_[el]);
            btn.classList.add('ad-pager--disabled');
        });
    }

    show(){
        this.root_.classList.remove('ad-pager--hidden')
    }

    hide(){
        this.root_.classList.add('ad-pager--hidden')
    }

    buttonHandler_(e){
        let handler = e.currentTarget.getAttribute('ad-pager-button');
        handler = this.buttonHandlers_[handler];
        if(handler){
            handler();
        }
    }

    optHandler_(e){
        e.stopPropagation();
        const el = e.currentTarget;
        const state = el.getAttribute('ad-selector');
        
        if(state === 'hide'){
            this.openOpt_();
        } else {
            this.closeOpt_();
        }
    }

    openOpt_(){
        this.selectorBtn_.setAttribute('ad-selector', '');
        this.optionList_.classList.add('ad-pager-selector__options--show');
        document.body.addEventListener('click', e=>{
            this.handleBodyClick_(e);
        });
    }   

    closeOpt_(){
        this.selectorBtn_.setAttribute('ad-selector', 'hide');
        this.optionList_.classList.remove('ad-pager-selector__options--show');
        document.body.removeEventListener('click', e=>{
            this.handleBodyClick_(e);
        });
    }

    recordsPerPage(recNumber){

    }

    renderPager_(){
        let fixture = '<div class="ad-pager"><div class="ad-pager-selector" ad-selector="hide"><div><span ad-selector-cur></span></div></div><div class="ad-pager-selector__options" ad-opt><div class="ad-selector-option" ad-pager-button="first">First</div><div class="ad-selector-option" ad-opt-last ad-pager-button="last">Last</div></div><div class="ad-pager-button" ad-pager-button="prev"> <svg><path d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"/></svg> </div><div class="ad-pager-button" ad-pager-button="next"> <svg><path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"/></svg></div></div>';
        fixture = this.createElement(fixture);
        this.root_.appendChild(fixture);
    }

    addPageControl_(opt){
        let fixture = '<div class="ad-selector-page-control"><select ad-page-control></select><span>records per page</span></div>';
        fixture = this.createElement(fixture);
        this.root_.querySelector('[ad-opt]')
            .appendChild(fixture);
        const list = fixture.querySelector('[ad-page-control]');
        opt.options
            .forEach(el=>{
                const option = document.createElement('option');
                option.setAttribute('value', el);
                option.innerHTML = el;
                list.appendChild(option);
            });
         
        list.value = this.recordsPerPage_;
             
        return list;    
    }

    generateRangeMessage_(selectedPage, totalNumber){
        let fromPage = selectedPage;
        let toPage = this.recordsPerPage_ * selectedPage;

        if(fromPage > 1){
            fromPage = 1 + (fromPage - 1) * this.recordsPerPage_;
        } 

        const totalPageCount = Math.ceil( totalNumber / this.recordsPerPage_);
        if(selectedPage == totalPageCount){
            toPage = totalNumber;
        }
        
        return `${fromPage} - ${toPage} of ${totalNumber}`;
    }

    /**
     * @private
     * @param {!Event} ev - event
     */
    handleBodyClick_(ev){
        if(this.isElementContainer_(ev.target)){
            return;
        }
        this.closeOpt_();
    }

    /**
     * @private
     * @param {!Element} element - html element
     */  
    isElementContainer_(element){
        return this.optionList_ === element ||
        this.optionList_.contains(element);
    }

    emit(evtType, evtData, shouldBubble = false) {
        const  evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
        });
    
    this.root_.dispatchEvent(evt);
    }

    createElement(html) {
    const el = document.createElement('div');
    el.innerHTML = html;
    return el.firstChild;
    }
}