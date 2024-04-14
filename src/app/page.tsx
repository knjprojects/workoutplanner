"use client"
import React,{useState, useEffect} from "react";
import Users from "@/components/Users";
import Image from "next/image";

export default function Home() {
  const [message, setMessage]:any = useState('');
  
  const fetchData = async () => {
    try {
        const response:any = await fetch('/api/init');
        if (response.ok) {
          const message:any = await response.text()
          //const object=parseJSONString(data)
          //setMessage(map['dog']);
          setMessage(message);
        } else {
        }
      } catch (error) {
        console.log(error)
      }
      
  };
  useEffect(()=>{
    fetchData();
  })
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex flex-col items-center">
        {
          message? <div> <Users /></div>
          : 
          <p>No database initialized yet</p>
        }
       
        {/*<button onClick={()=>{}} />*/}
        
      </div>
    </main>
  );
}
