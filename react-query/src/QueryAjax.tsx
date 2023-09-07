import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const QueryAjax = () => {
  const timeToDate = (time: number) => {
    let t = new Date(time)
    console.log(t, t.toDateString())
    return t.toDateString()
  }
  const axiosData = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/1/')
    return res.data
  }
  axiosData()
  const { data, isSuccess, isError, dataUpdatedAt, error } = useQuery(
    'pokeApi',
    axiosData,
    {
      refetchOnWindowFocus: false,
    }
  )

  return (
    <div className="ans" style={{ color: isSuccess ? 'green' : 'red' }}>
      {timeToDate(dataUpdatedAt)}
      <br />
      {error instanceof Error ? error.message : 'Ajax success'}
    </div>
  )
}

export default QueryAjax
