import React, { useEffect, useReducer } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
// import DarkSwitch from './DarkSwitch';
import Router, { useRouter } from 'next/router';
const Slider = ({mode,isPC, handleToggleMode,handleToggleNavbar}) => {

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';
    document.body.style.color = mode === 'dark' ? 'white' : 'black';
  }, [mode]); 

  const router=useRouter();

  return (
    <>
       <div className="ml-7 fs-8">

        <div className="my-2 mt-3 " style={{minmarginTop:'10px'}}>
        <Link href="/" onClick={handleToggleNavbar}>
          <div className={`pt-1 px-2 mt-1 mb-2 ${mode=='light' ? 'hover:bg-gray-200':''} ${mode=='dark' ? 'hover:bg-gray-900':''} mr-8`} style={{borderRadius:'8px'}}>
            <div className='mr-5 px-1 pb-0.5'>
            <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
<svg className=""
xmlns="http://www.w3.org/2000/svg" style={{height:'27px',width:'27px',marginBottom:'5px',marginRight:'12px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
</svg>
            </span>
            Home
            </div>
          </div>
          </Link>
          <hr className="mr-8" style={{ backgroundColor: 'white' }} />
        </div>

  
        <div className="my-2" style={{minmarginTop:'10px'}}>

<div className="my-2" style={{minmarginTop:'10px'}}>
<Link href="/Components/About" onClick={handleToggleNavbar}>
<div className={`pt-1 px-2 mt-1 mb-2 ${mode=='light' ? 'hover:bg-gray-200':''} ${mode=='dark' ? 'hover:bg-gray-900':''} mr-8`} style={{borderRadius:'8px'}}>
  <div className={`mr-5 px-1 ${isPC=='PC'?'pb-0.75':'pt-0.75'}`}>
  <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
<span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0px' }}>
<svg className="w-7 h-7 rotate-[180deg]" style={{height:'27px',width:'27px',marginBottom:'5px',marginRight:'12px'}}
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="12" />  <line x1="12" y1="16" x2="12.01" y2="16" />
</svg>
</span></span>
  About Us
  </div>
</div>
</Link>
<hr className="mr-8" style={{ backgroundColor: 'white' }} />
</div>

</div>
        
{/* dark Mode Button */}

        <div className="my-2 prevent-select" onClick={handleToggleMode} style={{cursor: 'pointer',minmarginTop:'10px',minWidth:'246px',maxWidth:'30%'}} >
        {/* <Link href="/Components/About"> */}
          <div className={`pt-1 px-2 mt-1 mb-2 ${mode=='light' ? 'text-light bg-gray-800 hover:bg-gray-700':'text-dark bg-gray-200 hover:bg-gray-300'} mr-8`} onClick={handleToggleNavbar} style={{borderRadius:'8px'}}>
            <div className={`mr-5 px-1 ${isPC=='PC'?'pb-0.5':'pt-0.75'}`}>
            <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
<span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0px' }}>
{mode=='light'?  (
   <svg className="w-6 h-6"
   xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  style={{height:'25px',width:'25px',paddingTop:isPC=='PC'?'2px':'0.2px',marginBottom:'4px',marginRight:'12px',marginLeft:'3px'}}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
 ):(
  <svg className="w-6 h-6"
  xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  style={{height:'25px',width:'25px',paddingTop:'0px',marginBottom:'4px',marginRight:'12px',marginLeft:'3px'}}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
  </svg>
)}
  </span></span>
      {mode=='light'?'Dark':'Light'} Mode
</div>
</div>
          {/* </Link> */}
          <hr className="mr-8" style={{ backgroundColor: 'white' }} />
        </div>

      </div> 
    </>
  );
};

export default Slider;