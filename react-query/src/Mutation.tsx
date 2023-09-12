import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const fetchData = async () => {
  const res = await fetch('http://localhost:3001/data')
  const data = await res.json()
  return data
}

const createPost = async () => {
  const res = await fetch('http://localhost:3001/data', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id: crypto.randomUUID(),
    }),
  })
  const data = await res.json()
  return data
}

const Mutation = () => {
  const { data, isLoading, isSuccess } = useQuery(['data'], fetchData)
  const queryClient = useQueryClient()
  const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['data'])
    },
  })
  console.log(data)

  const clickAction = () => {
    mutate()
  }
  return (
    <div>
      <button onClick={clickAction}>addData</button>
    </div>
  )
}

export default Mutation
