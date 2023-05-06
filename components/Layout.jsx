import React from 'react'
import Head from 'next/head'
export default function Layout ({ children, title = 'Daria Portfolio' }) {
  return (
    <>
        <Head>
        <title>{title}</title>
        <meta name="description" content="Personal Portfolio by Daria Paach" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <main>
        {children}
      </main>
    </>
    
  )
}

