import axios from 'axios'
import React from 'react'
import Image from 'next/image'

interface Prop {
  url: string
}

const getPic = async () => {
  const pic = await fetch(
    'https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json',
    {
      next: {
        revalidate: 5,
      },
    }
  )
  const data = await pic.json()
  return data
}

const page = async () => {
  const pic = await getPic()
  return (
    <>
      <Image
        src={pic.url}
        alt="pic"
        width={pic.size.width}
        height={pic.size.height}
      />
    </>
  )
}

export default page
