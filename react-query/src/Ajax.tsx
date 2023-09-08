import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Ajax = () => {
  const [data, setData] = useState<object>({})
  const [ajaxMessage, setAjaxMessage] = useState<string>()
  const [AjaxRes, setAjaxRes] = useState<boolean>(false)
  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon-form/1/')
        if (res.status !== 200) throw new Error('Ajax fail')
        setData(res.data)
        setAjaxMessage('Ajax success')
        setAjaxRes(true)
      } catch (error: any) {
        setAjaxMessage(error.message)
      }
    }
    axiosData()
  }, [])

  return (
    <div className="ans" style={{ color: AjaxRes ? 'green' : 'red' }}>
      <p>{ajaxMessage}</p>
      <div></div>
    </div>
  )
}

export default Ajax
