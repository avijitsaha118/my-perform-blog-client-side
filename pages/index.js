import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Clients from './Clients'
import Contact from './Contact'
import HomePage from './HomePage'
import Projects from './Projects'
import SelectedItem from './SelectedItem'
import Services from './Services'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Developer-Perform-Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Services></Services>
      <Projects></Projects>
      <SelectedItem></SelectedItem>
      <Clients></Clients>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
