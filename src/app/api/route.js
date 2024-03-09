import { dbConnect } from "../../../lib/db-connect"

export async  function GET(){
    await dbConnect()
    return new Response("hello world")
}