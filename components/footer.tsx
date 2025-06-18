import React from 'react'

function Footer() {
    const date =  new Date();
    const year = date.getFullYear()  
    
  return (
    <footer className='grid text-black dark:bg-gray-800 dark:text-white'>
        <span className='text-sm '>
            Der Website-Baukasten von Wix bietet eine Komplettlösung inkl. robuster Infrastruktur, Business-Funktionen, fortschrittlicher SEO und Marketing-Tools–auch ohne Programmierkenntnisse.
        </span>
        <span className='text-md'>
           {`© ${year}  arvandmarket.com, Inc`}  
        </span>
    </footer>
  )
}

export default Footer