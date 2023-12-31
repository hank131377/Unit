import React from 'react'
import ReactDOM from 'react-dom/client'
import Ajax from './Ajax'
import QueryAjax from './QueryAjax'
import Mutation from './Mutation'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './all.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      {/* <Ajax /> */}
      {/* <QueryAjax /> */}
      <Mutation />
      <ReactQueryDevtools />
    </React.StrictMode>
  </QueryClientProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
