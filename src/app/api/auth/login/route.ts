import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function GET(Request:any) {

  
}

 export async function HEAD(Request:any) {}
// export async function POST(Request) {}
 export async function PUT(Request:any) {}
 export async function DELETE(Request:any) {}
export  async function POST(req:any, res:any/*req: NextApiRequest, res: NextApiResponse*/) {
  // Handle the POST request
  //res.status(200).json('looks like it works?');
  const { username, password } = req.body;
  console.log('Getting '+username.toString() +' and' + password.toString()+ 'in the api route ')

 /* const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);*/

  /*const response = await fetch('https://workoutplannerbackend.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData//.toString(),//--<notice the .toString(0 so flask can convert it)
  });

  const {data}:any = await response.json();

  if (response.status === 200) {
    // Handle successful form submission
    return NextResponse.json(data, { status: 200 })
  } else {
    // Handle form submission error
    return NextResponse.json('', { status: 500 })
  }*/
  
}
