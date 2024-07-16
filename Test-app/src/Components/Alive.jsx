import { useEffect } from "react"
import axios from 'axios'

export default function Alive(){

  useEffect(()=>{
     const pingServer = async()=> {
       try{
        await axios.get('http://localhost:5000/api/ping')
        console.log("Server Pinged ")

       }catch(err){
        console.log("Failed to ping server", err)
       }
    }

    pingServer()
    
    const interval = setInterval(pingServer, 5 * 60 * 1000)
    
    return ()=> clearInterval(interval)
  },[])
  


  return null
}