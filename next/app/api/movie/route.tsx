import { NextResponse } from "next/server";
import axios from "axios";

const url = 'https://api.themoviedb.org/3/tv/top_rated';
const key = `Bearer ${process.env.ACCESS_TOKEN}`

const GET = async () =>{
    try{
        const { data } = await axios.get(url,{
            headers:{
                Authorization:key
            }
        })
        return NextResponse.json(data)
    }
    catch{
        return NextResponse.json('取得失敗')
    }
}