import React from "react"
import Header from "@/components/header"
function DashboardLayout({children} : Readonly<{children  : React.ReactNode}>) {
  return (
    <div>
         <Header />
        <section className="dashboard-page">{children}</section>
    </div>
   
  )
}

export default DashboardLayout

