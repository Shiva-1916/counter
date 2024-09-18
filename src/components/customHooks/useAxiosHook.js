import axios from "axios"
import { useEffect, useState } from "react"

const useAxios=(url='')=>{
    const [data,setData]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const dataFecth=async ()=>{
            try{
                let response=await axios('https://dummyjson.com/recipes')
                if(response.status==200){
                    setData(response.data)
                }
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }
            
        }

        dataFecth()
    },[url])

    return [data,error,loading]
}