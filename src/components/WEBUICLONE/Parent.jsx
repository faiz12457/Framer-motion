import React from 'react'

function Parent({children,className=""}) {
  return (
    <div className={`w-[95%] mx-auto ${className}`} >{children}</div>
  )
}

export default Parent