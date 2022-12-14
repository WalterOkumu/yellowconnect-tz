import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import PacoteList from '../components/PacoteList'

export default function Home() {
  return (
    <div>
        <div className="pt-8 md:h-screen px-10 bg-no-repeat bg-cover bg-center bg-[url('/background-hero-mobile.png')] xl:bg-[url('/background-hero.png')]">
          <Header />
          <Hero />
        </div>
        <About />
        <PacoteList />
        <ContactForm />
        <Footer />
        {/*<Lead />
        <Testimonials />*/}
    </div>
  )
}
