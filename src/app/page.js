import Image from 'next/image'
import { name } from './globals'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/usr_logo.webp"/>
    </Head>
    <div className="navbar">
      <div className="navbar-start">
        <div></div>
      </div>
      <div className="navbar-center">
        <h1 className="font-mono text-4xl">
          { name }
        </h1>
      </div>
      <div className="navbar-end gap-3">
      </div>
    </div>
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/sonny.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">The world's first general purpose humanoid.</h1>
          <p className="py-6">Meet NS-5: Your Ultimate Home Helper. From cleaning and cooking to organizing and entertainment, NS-5 is your personal assistant for a seamless and efficient household. Embrace the future of smart living with NS-5!</p>
          <div className='flex flex-row items-center gap-3'>
            <button className="btn btn-primary">Buy now</button>
            <p className='text-xl '>$69,420</p>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src="/usr_logo.webp" className='h-20'/>
        <p>{ name }<br/>superintelligence for the masses</p>
      </div> 
      <div>
        <span className="footer-title">Services</span> 
        <a className="link link-hover">Branding</a> 
        <a className="link link-hover">Design</a> 
        <a className="link link-hover">Marketing</a> 
        <a className="link link-hover">Advertisement</a>
      </div> 
      <div>
        <span className="footer-title">Company</span> 
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Jobs</a> 
        <a className="link link-hover">Press kit</a>
      </div> 
      <div>
        <span className="footer-title">Legal</span> 
        <a className="link link-hover">Terms of use</a> 
        <a className="link link-hover">Privacy policy</a> 
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
    </>
  )
}
