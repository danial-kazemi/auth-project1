import React from "react"

const LoginLayout = ({children} : Readonly<{children: React.ReactNode}>) => {
  return (
    <section className="login-page">{children}</section>
  )
}

export default LoginLayout