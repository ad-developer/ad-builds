
class ADStorage {

    static GetVersion(){
        return "ADStorage V1.0";
    }

    // Supported command 
    // add {key, val}
    // get {key}
    // remove {key}
    // clear 
    localStorageAction(command, key, val){
        if(command === 'add'){
            localStorage.setItem(key, val);
        }

        if(command === 'get'){
            return localStorage.getItem(key);
        }

        if(command === 'remove'){
            localStorage.removeItem(key);
        }

        if(command === 'clear'){
            localStorage.clear();
        }
    }   

     // Supported command 
    // add {key, val}
    // get {key}
    // remove {key}
    // clear 
    sessionStorageAction(command, key, val){
        if(command === 'add'){
            sessionStorage.setItem(key, val);
        }

        if(command === 'get'){
            return sessionStorage.getItem(key);
        }

        if(command === 'remove'){
            sessionStorage.removeItem(key);
        }

        if(command === 'clear'){
            sessionStorage.clear();
        }
    }   

}


//export {ADStorage};