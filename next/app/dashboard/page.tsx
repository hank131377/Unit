'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Prop {
  body: string
  id: number
  title: string
  userId: number
}

const Dashborad = () => {
  const [data, setData] = useState<Array<Prop>>([])
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(res.data)
    }
    getData()
  }, [])
  return (
    <div>
      {data.map((v, i) => {
        return <div key={v.id}>{v.title}</div>
      })}
    </div>
  )
}

export default Dashborad
