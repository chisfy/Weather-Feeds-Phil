import React from 'react'

export default function Time() {
  return (
    <>
    {new Date().toLocaleTimeString()}
    </>
  )
}