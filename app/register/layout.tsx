import React from "react"
import Footer from "@/components/footer"
import Header from "@/components/header"
function RegisterLayout ({children} : Readonly<{children:React.ReactNode}>) {
  return (
    <section className="register-page h-lvh grid grid-row-12 dark:bg-gray-900 text-black dark:text-white">
      <Header />
      {children}      
      <Footer />
    </section>
  )
}

export default RegisterLayout
