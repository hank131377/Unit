import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'

import './app.scss'

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const PUNLIC_KEY = process.env.REACT_APP_EMAILJS_PUNLIC_KEY

type Inputs = {
  name: string
  email: string
  message: string
  asd: string
  SERVICE_ID: string
  TEMPLATE_ID: string
  PUNLIC_KEY: string
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUNLIC_KEY) return
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        form_name: data.name,
        to_name: 'kai',
        form_email: data.email,
        to_email: 'hank1313_net@yahoo.com.tw',
        message: data.message,
      },
      PUNLIC_KEY
    )
  }
  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) =>
  //     console.log(value, name, type)
  //   )
  //   return () => subscription.unsubscribe()
  // }, [watch])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <span>Name：</span>
        </label>
        <input {...register('name', { required: true })} id="name" />
        {errors.name && (
          <span style={{ color: 'red' }}>This field is required</span>
        )}
        <br />
        <label htmlFor="email">
          <span>Email：</span>
        </label>
        <input {...register('email', { required: true })} id="email" />
        {errors.email && (
          <span style={{ color: 'red' }}>This field is required</span>
        )}
        <label htmlFor="message">
          <br />
          <span>Message：</span>
        </label>
        <textarea {...register('message', { required: true })} id="message" />
        {errors.message && (
          <span style={{ color: 'red' }}>This field is required</span>
        )}
        <button type="submit" className="btn">
          送出
        </button>
      </form>
    </div>
  )
}

export default App
