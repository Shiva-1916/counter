import { useEffect, useState } from "react"

export const useNetworkStatus=()=>{
    const [isOnline,setOnline]=useState(true)

    const updateNetwork=()=>{
        setOnline(navigator.onLine)
    }




    useEffect(()=>{
        updateNetwork()

        window.addEventListener('online',updateNetwork)
        window.addEventListener('offline',updateNetwork)

        return()=>{
            
            window.removeEventListener('offline',updateNetwork)
            window.removeEventListener('online',updateNetwork)
        }
    },[])

    return {isOnline}
}