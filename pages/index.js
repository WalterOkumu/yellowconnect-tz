import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Lead from '../components/Lead'
import PacoteList from '../components/PacoteList'
import Testimonials from '../components/Testimonial'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yellow Connect</title>
        <meta name="description" content="Yellow Connect Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='pb-10'>
        <div className="bg-[#FBED04] md:h-screen px-10 pb-4">
          <Header />
          <Hero />
        </div>
        <PacoteList />
        <Lead />
        <Testimonials />
      </main>

    </div>
  )
}
