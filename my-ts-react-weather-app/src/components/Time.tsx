import React from 'react'

export default function Time(): React.JSX.Element {
  return (
    <>
    <hr></hr>
    {new Date().toLocaleTimeString()}
    </>
  )
}