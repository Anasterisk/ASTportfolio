import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Main from './components/Main.jsx'
import Header from './components/Header';
import Footer from './components/Footer';
import { themeChange } from 'theme-change'
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    themeChange(false)
  },[])
  const [toggle, setToggle] = useState(true)

  let x =null
  let conground = toggle?'invisible':null
  let backtoggle = toggle?'opacity-0':'opacity-50'
  let foretoggle = toggle?'translate-x-full':null
  let maintoggle = toggle?'opacity-100':'opacity-50'
  let container = `fixed inset-0 w-full h-full ${conground}`
  let background = `inset-0 w-full h-full duration-500 ease-out transition-all absolute bg-gray-900 ${backtoggle}`
  let foreground = `absolute duration-700 ease-out transition-all w-64 h-full bg-red-600 right-0 top-0 ${foretoggle}`

  let closeButton = `w-10 h-10 text-gray-600 cursor-pointer flex items-center justify-center absolute top-0 right-0 mt-5 mr-5 hover:text-gray-200`
  
  let foregroundButton = `cursor-pointer px-5 py-2 text-sm border text-gray-500 hover:bg-gray-100 rounded border-gray-300 absolute top-0 left-0 hover:ease-in duration-200`
  
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div onClick={()=>setToggle(!toggle)} class={`${foregroundButton}`}>Menu</div> 
      <div class={`${maintoggle}`}>
        <Main/>
      </div>
      <div class={`${container}`}>
          <div class={`${background}`}>
      </div>
        <div class={`${foreground}`}>
          <div onClick={()=>setToggle(!toggle)} class={`${closeButton}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div> 
       
        <div class='relative top-1/3 '>
          <Header/>
        </div>
        </div>
      <div class={`absolute duration-700 ease-out transition-all h-20 w-full bg-orange-700 bottom-0 ${foretoggle}`}> 
        <div class='absolute right-0'>
          <Footer/> 
        </div>

        <div class='dropdown top-1' >
        <select data-choose-theme class='m-2.5 rounded btn-sm  btn-outline hover:btn-primary'>
          <option value="synth">Default</option>
          <option value="cyberpunk">Yellow</option>
          <option value="dark">Dark</option>
        </select>
        </div>

      </div>
     
    </div>
    </div>
  );
}

export default App;
