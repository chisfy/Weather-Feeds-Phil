import React from 'react'

export default function Time() {
  return (
    <>
    <hr></hr>
    {new Date().toLocaleTimeString()}
    </>
  )
}