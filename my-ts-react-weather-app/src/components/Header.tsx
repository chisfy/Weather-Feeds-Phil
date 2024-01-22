import React from 'react'
import Logo from './Logo.tsx'
import Time from './Time.tsx'

export default function Header(): React.JSX.Element {
  return (
    <header className="logo-position">
        <Logo />
        <div className='vertical-line'> 
        </div>
        <Time />
    </header>
  )
}
