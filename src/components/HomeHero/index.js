import React from 'react'
import Image from 'next/image'
import FooterSimple from '../FooterSimple'

export const HomeHero = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">

<div className="absolute top-0 left-0 right-0 bottom-0 z-0 h-screen">
          <video
            autoPlay
            loop
            muted
            className="w-full object-cover h-full"
          >
            <source src="/v1.mp4" type="video/mp4" />
            Seu navegador não oferece suporte a vídeo.
          </video>
        </div>

 

    <div className="z-10 max-w-5xl w-full items-center justify-between text-md lg:flex">
      <div className="flex mx-auto">
        <nav className="flex flex-row font-mono mx-auto text-center items-center">
          <ul
            className="list-none flex flex-row space-x-6 text-white"
            data-aos="zoom-down"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            <li className="py-2">
              <a
                href="https://t.me/PsycatSolana"
                target="_blank"
                className="text-maincolor"
              >
                Telegram
              </a>
            </li>
            <li className="py-2">
              <a
                href="https://x.com/PsycatSolana"
                target="_blank"
                className="text-maincolor "
              >
                Twitter
              </a>
            </li>
            <li className="py-2">
              <a
                href="https://pump.fun/"
                target="_blank"
                className="text-maincolor "
              >
                Buy now on Pump.fun
              </a>
            </li>

            {/* <li className="bg-orange-500 px-4 py-2 rounded-lg"><a href="#" className="text-white">Trade now on Pump.fun</a></li> */}
          </ul>
        </nav>
      </div>
    </div>

    <div className="relative flex flex-col place-items-center pt-36  lg:pt-36 ">
    
    
    <div class="table-cell text-center align-middle">
  <div class="top font-mono">Psycat </div>
  <div class="bottom font-mono"   data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000">Just a raver cat </div>
</div>

 
      <a
        href="https://pump.fun/"
        className="font-mono text-xl rounded-lg mt-2 px-8 py-4 border bg-black border-white text-white "
        data-aos="zoom-in"
        data-aos-delay="1200"
        data-aos-duration="1000"
      >
        Get High with us on Pump.fun
      </a>

      <FooterSimple />
    </div>

   
  </main>
  )
}
