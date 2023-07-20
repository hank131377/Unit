import axios from 'axios'
import { NextResponse } from 'next/server'


const url = 'https://jsonplaceholder.typicode.com/posts'

export const GET = async ()=>{
    try{
        const { data } = await axios.get(url)
        return NextResponse.json(data)
    }
    catch{
        return NextResponse.json('取得失敗')
    }
}

export const POST = async(req:any)=>{
    const { userId, title, body } = await req.json()
    try{
        const param = JSON.stringify({
            userId,title,body
        })
        const { data }=await axios.post(url,param,{
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            }
        })
  
       return NextResponse.json(data)
    }
    catch{

    }
}

