import React from 'react'

export default function Time(): React.JSX.Element {

const time: string = new Date().toLocaleTimeString()

  return (
    <div className="time-position">
    <div className='line'>
    <div className='vertical-line'> 
    </div>
    </div>
    <div className="time">
    {time}
    </div>
    </div>
  )
}