import React, { useEffect, useState } from 'react'

export default function Time(): React.JSX.Element {

const [liveTime, setLiveTime] = useState<string>(new Date().toLocaleTimeString());

useEffect(() => {
  setInterval(setCurrentTime, 1000);
})

function setCurrentTime(): void {
  setLiveTime(new Date().toLocaleTimeString());
}

  return (
    <div className="time">
    {liveTime}
    </div>
  )
}