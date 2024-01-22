import React from 'react'

export default function Time(): React.JSX.Element {

const time: string = new Date().toLocaleTimeString()

  return (
    <div className="time">
    {time}
    </div>
  )
}