export const sendToLocalStorageHook=(key,val)=>{
    if(key && val){
        localStorage.setItem(key,val)
        return true
    }
    return false
}