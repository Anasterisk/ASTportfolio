import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Main from './components/Main.jsx'
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  const [toggle, setToggle] = useState(true)

  let x =null
  let conground = toggle?'invisible':null
  let backtoggle = toggle?'opacity-0':'opacity-50'
  let foretoggle = toggle?'translate-x-full':null
  let container = `fixed inset-0 w-full h-full ${conground}`
  let background = `inset-0 w-full h-full duration-500 ease-out transition-all absolute bg-gray-900 ${backtoggle}`
  let foreground = `absolute duration-500 ease-out transition-all w-64 h-full bg-red-500 right-0 top-0 ${foretoggle}`

  let closeButton = `w-10 h-10 text-gray-600 cursor-pointer flex items-center justify-center absolute top-0 right-0 mt-5 mr-5`
  let foregroundButton = `cursor-pointer px-5 py-2 text-sm border text-gray-500 hover:bg-gray-100 rounded border-gray-300 absolute top-0 left-0`
  
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div onClick={()=>setToggle(!toggle)} class={`${foregroundButton}`}>Toggle</div>
      <div class={`${container}`}>
          <div class={`${background}`}>
      <Main/>
      </div>
        <div class={`${foreground}`}>
          <div onClick={()=>setToggle(!toggle)} class={`${closeButton}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div> 
        <div>
          <Header/>
        </div>
        </div>
      <div class={`absolute duration-500 ease-out transition-all h-20 w-full bg-orange-700 bottom-0 ${foretoggle}`}> 
        <Footer/>
      </div>
     
    </div>
    </div>
  );
}

export default App;
