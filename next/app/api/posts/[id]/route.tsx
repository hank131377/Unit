import axios from 'axios'
import { NextResponse } from 'next/server'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const GET = async(_:any,{params}:any)=>{
    const { id } = params
    try{
        const { data } = await axios.get(`${url}/${id}`)
        return NextResponse.json(data)
    }
    catch{
        return NextResponse.json('取得失敗')
    }
}

export const PUT = async(_:any,{params}:any)=>{
    const { id } = params
    try{
        const { data } = await axios.put(`${url}/${id}`,
        {
            userId: new Date().getDate(),
            title:"medhod",
            body:"PUT"
        })
        return NextResponse.json(data)
    }
    catch{
        return NextResponse.json('更新失敗')
    }
}

export const PATCH = async(_:any,{params}:any)=>{
    const { id } = params
    try{
        const { data } = await axios.put(`${url}/${id}`,
        {
            userId: new Date().getDate(),
            title:"medhod",
            body:"PATCH"
        })
        return NextResponse.json(data)
    }
    catch{
        return NextResponse.json('部分更新失敗')
    }
}

export const DELETE = async(_:any,{params}:any)=>{
    const { id } = params
    try{
        const { data } = await axios.delete(`${url}/${id}`)
        return NextResponse.json(data)
    }
    catch{
        return NextResponse.json('刪除失敗')
    }
}