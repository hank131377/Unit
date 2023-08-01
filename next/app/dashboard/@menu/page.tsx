import React from 'react'

const getData = async()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('getData')
    },2000)
  })
}


const Menu = async () => {
  const data = await getData()
  console.log(data)
  return (
    <div>Menu</div>
  )
}

export default Menu