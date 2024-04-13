"use client"
import React,{useState,useEffect} from 'react'

type Props = {}

const CallApiRoute = (props: Props) => {
    const [message, setMessage]:any = useState(null);
    const [emailResponse,setEmailResponse]:any=useState({})

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch('/api/flaskresponse');
            if (response.ok) {
              const map = await response.json()
              //const object=parseJSONString(data)
              //setMessage(map['dog']);
              setMessage(map);
            } else {
            }
          } catch (error) {
           
          }
          
      };
      
  
      fetchData();
    }, []);
    /*const testEmail = async () => {
        try {
            const response = await fetch('/api/send');
            if (response.ok) {
              const { data, error } = await response.json()
              //const object=parseJSONString(data)
              setEmailResponse(data);
              console.log(data)
            } else {
            }
          } catch (error) {
           
          }
          
      };*/
    return (
      <div>
        <p>Below i am trying to render a messsage response from my flaskreponse/route.ts file</p>
        {message?<p>{message}</p> : <></>}
        
        {emailResponse?
        <p>{emailResponse.toString()} </p>: <p>No response from resen email test</p>
        }
       {/* <button onClick={()=>testEmail()}>Test Email</button>}*/}
        
      </div>
    );
  }
export default CallApiRoute