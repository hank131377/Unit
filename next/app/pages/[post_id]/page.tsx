import React from 'react'

interface Prop {
    params:{
    post_id:string
    }
}

export const generateMetadata = ({params}:Prop)=>{
  const {post_id} = params
  return {
    title:`page${post_id}`,
    description:'pageParams'
  }
}

const page:React.FC<Prop> = ({params}) => {
   const {post_id} = params
  return (
    <div>page{post_id}</div>
  )
}

export default page