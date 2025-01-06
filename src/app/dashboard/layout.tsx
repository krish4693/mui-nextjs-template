import React, { Children } from 'react'

const layout = ({children,}:Readonly<{
    children:React.ReactNode
}>) => {
  return (
    <div>{children}</div>
  )
}

export default layout