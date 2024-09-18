export const counterHook=(value, operation)=>{
    switch (operation){
        case 'INC': return value+1
        case 'DEC': return value>0?value-1:value
        case 'RESET':return 0
        default: return value
    }
    
}