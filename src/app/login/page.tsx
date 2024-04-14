"use client"
import React,{useState} from 'react'
import {useRouter} from 'next/navigation'
type Props = {}

const Login = (props: Props) => {
    const router=useRouter()
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body:formData, //{'username':username,'password':password}
    });
    /* const data=await response.json();
    if (response.status === 200) {
        router.push('/dashboard')
      // Handle successful form submission
      console.log('Form submitted successfully');
    } else {
      // Handle form submission error
      console.error('Error submitting form');
    }*/
  };
  return (
    <div>
        <form action={'https://workoutplannerbackend.onrender.com/login'} method='POST' > {/*onSubmit={handleSubmit}>*/}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Login