"use client";

import React from 'react'

import {usePathname} from 'next/navigation'


const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname()
  return (
    <div>navbar{pathname}</div>
  )
}

export default navbar