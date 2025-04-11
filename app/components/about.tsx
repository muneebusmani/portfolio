import Image from 'next/image'
import React, { JSX } from 'react'

const About = (): JSX.Element => {
  return (
    <section id='about' className=" max-w-7xl mx-auto px-6 py-12  min-h-screen flex flex-col md:flex-row items-center justify-around gap-5">
      <section id='text' className="flex flex-col justify-center text-left animate-fade-in-up space-y-4">
        <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_0_0.3rem_#ffffff40] transform transition duration-500 hover:scale-105 hover:text-indigo-400">
          Hi, I&rsquo;m Muneeb
        </h1>
        <h3 className="text-lg text-gray-300 leading-relaxed space-y-2">
          I am a <span className="font-semibold text-white bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">fullstack developer</span><br />
          with <span className="font-semibold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">over 4 years of experience</span><br />
          working with <span className="font-semibold text-white bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent">MERN stack</span>, <span className="font-semibold text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Laravel</span>, and <span className="font-semibold text-white bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">Next.js</span>.
        </h3>
      </section>

      <section id='avatar' className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-600 to-red-500 blur-2xl opacity-30 z-0"></div>
        <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-xl">
          <Image
            src="/1744281426319.png"
            alt="Avatar"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </section>
    </section>
  )
}

export default About;
