import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const QueryAjax = () => {
  const [pokeNum, setPoekNum] = useState<number>(1)
  const timeToDate = (time: number) => {
    let t = new Date(time)
    return t.toDateString()
  }
  const totalAxiosData = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/`)
    return res.data.results.length
  }
  totalAxiosData()
  const axiosData = async (prop: { queryKey: any }) => {
    const { queryKey } = prop
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-form/${queryKey[1]}/`
    )
    return res.data
  }

  const { data, isSuccess, isError, dataUpdatedAt, error, isLoading } =
    useQuery(['pokeApi', pokeNum], axiosData, {
      refetchOnWindowFocus: false,
    })

  return (
    <div className="ans" style={{ color: isSuccess ? 'green' : 'red' }}>
      {timeToDate(dataUpdatedAt)}
      <br />
      {error instanceof Error ? error.message : 'Ajax success'}
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '30rem' }}>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary fs-1 m-3"
              onClick={() => {
                pokeNum == 1 ? setPoekNum(1010) : setPoekNum(pokeNum - 1)
              }}
            >
              prev
            </button>
            <button
              className="btn btn-primary fs-1 m-3"
              onClick={() => {
                pokeNum == 1010 ? setPoekNum(1) : setPoekNum(pokeNum + 1)
              }}
            >
              next
            </button>
          </div>

          {!isLoading ? (
            <>
              <p className="fs-5">{data?.pokemon?.name}</p>
              <img
                src={data?.sprites?.front_shiny}
                className="card-img-top"
                alt="..."
              />
            </>
          ) : (
            ''
          )}

          <div className="card-body"></div>
        </div>
      </div>
    </div>
  )
}

export default QueryAjax
