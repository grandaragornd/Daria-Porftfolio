import Head from 'next/head'
import Image from 'next/image'
import Layout from 'components/Layout'
import Header from 'components/Header'
import NavBar from 'components/NavBar'
import Who from 'components/Who'
import Art from 'components/Art'


export default function Home() {
  return (
    <>
      <NavBar />
     <Layout title='Daria Portfolio'>
      <Header />
      <Who />
      <Art />
     </Layout>
    </>
  )
}
