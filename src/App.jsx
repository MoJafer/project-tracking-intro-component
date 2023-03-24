import { useState } from "react"
import logo from './assets/images/logo.svg'
import devicesImage from './assets/images/illustration-devices.svg'
import hamburgerIcon from './assets/images/icon-hamburger.svg'
import closeIcon from './assets/images/icon-close.svg'
import { menu } from "./consts"

function App() {

  const [activeMobileMenu, setactiveMobileMenu] = useState(false)

  return (
    <div className="h-screen overflow-x-hidden md:flex md:flex-row-reverse relative">

      <div className="absolute left-20 top-10 right-20 z-50 flex flex-row justify-between">
        <img src={logo} alt="logo" className="w-[30px] animate-pulse hover:animate-none" />
        <img src={activeMobileMenu ? closeIcon : hamburgerIcon} alt="hamburger-icon" className="w-[30px] md:hidden cursor-pointer" onClick={() => setactiveMobileMenu(prev => !prev)} />
      </div>

      <div className="md:h-full h-[75%] w-full md:w-1/2 relative">
        <div className="md:w-full max-md:float-right w-1/2 md:h-3/6 h-[100%] p-20 bg-[#edf2f7] rounded-bl-[80px]">

          <div className={`menu md:desktop-menu flex-col text-veryDarkBlue font-bold ${activeMobileMenu ? 'flex items-center max-md:mobile-menu' : 'hidden'}`}>
            {menu.map((m, index) => (
              <a key={m.id} href={m.link} className="hover:underline underline-offset-8 md:mr-5 max-md:mb-4">{m.title.toUpperCase()}</a>
            ))}
            <a href="#!" className="md:ml-10 hover:underline text-grayishBlue max-md:border-t-2 max-md:w-full max-md:text-center max-md:pt-5">LOGIN</a>
          </div>

        </div>
        <img src={devicesImage} alt="alt" className="absolute top-[30%] right-[-10%]" />

      </div>


      <div className="md:h-full flex flex-col md:p-20 p-5 w-full md:w-1/2">

        <div className="md:h-full flex flex-col md:justify-center max-md:items-start">

          <div>
            <p className="text-grayishBlue "><span className=" bg-veryDarkBlue text-white mr-2 px-2 rounded-full">NEW</span> MONDGRAPH DASHBOARD</p>
            <h1 className="font-bold text-veryDarkBlue text-5xl my-5">POWERFUL INSIGHTS INTO YOUR TEAM</h1>
            <p className="text-darkGrayishBlue">Project planning and time tracking for agile teams</p>
          </div>

          <div className="flex flex-row items-center mt-10">
            <a href="#!" className="mr-3 bg-primary px-5 py-3 rounded-lg text-lightGrayishBlue font-bold hover:opacity-90">SCHEDULE A DEMO</a>
            <a href="#!" className="text-grayishBlue">TO SEE A PREVIEW</a>
          </div>

        </div>

      </div>


    </div>
  )
}

export default App
