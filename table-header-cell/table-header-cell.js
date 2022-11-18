class ADTableHeaderCell extends ADComponent {
    
    static attachTo(root, ...args) {
        const instance = new ADTableHeaderCell(root, ...args);
        // Attach instance to the root
        root.ad = root.ad || {};
        root.ad['TABLE_CELL'] = instance;
        return instance;
      }
      
      constructor(root){
        super(root);
      }

      init(){
        this.id_ = this.root_.getAttribute('ad-id');
        this.listen('click', ()=>this.select_())
        
        this.header_ = document.querySelector('[ad-table-header]');
        this.header_ .addEventListener('click',e=>this.clear_(e));
        
        this.iconUp_ = this.root_.querySelector('ad-table-header-arrow-up');
        this.iconDown_ = this.root_.querySelector('ad-table-header-arrow-down');
    }

      setState(direction){
        this.direction_ = direction;
        this.select_(true);
      }

      select_(setSate){
        // emit tablecell.change
        // and pass id, name, direction
        const direction = this.direction_;
        this.root_.classList.add('class-header');
        if(this.direction_ == 'asc'){
            this.iconUp_.classList.remove('class-show');
            this.iconDown_.classList.add('class-show');
            this.direction_ = 'desc';
        } else {
            this.iconUp_.classList.add('class-show');
            this.iconDown_.classList.remove('class-show');
            this.direction_ = 'asc';
        }
        if(!setSate){
            this.emit('tablecell.change', {id: this.id_, direction: direction }, false, this.header_);
        }
      }

      clear_(e){
        if(e.detail.id != this.id_){
            this.root_.classList.remove('class-header');
            this.iconUp_.classList.remove('class-show');
            this.iconDown_.classList.remove('class-show');
            this.direction_ = 'asc';
        }
      }
} 