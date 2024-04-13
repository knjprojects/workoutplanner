import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // we will use params to access the data passed to the dynamic route
  /*const user = "ratos" //params.user;
  const map=`{dog:'body'}`;
  const message= `Welcome to my Next application, user: ${user}`
  return NextResponse.json(map);*/
    //return new Response(`map:${map},user:${user}`).json;
    try {
        const response = await fetch('https://your-flask-app.onrender.com/your-endpoint')
        const data = await response.json()
        return NextResponse.json(data)
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data from the Flask server.' })
      }
  
}

 export async function HEAD(Request:any) {}
// export async function POST(Request) {}
 export async function PUT(Request:any) {}
 export async function DELETE(Request:any) {}
export  async function POST(Request:any/*req: NextApiRequest, res: NextApiResponse*/) {
  // Handle the POST request
  //res.status(200).json('looks like it works?');
}
