import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Navbar = () => {
  const [ nav, setNav] = useState(false)
  const handleNav= () =>{
  setNav(!nav)}
  return (
  <div className='w-full h-[90px] bg-gray-900'>
<div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center'>
 <div >
  <h1 className='text-indigo-300 text-3xl font-bold items-center p-5'> DOFI</h1>

</div>

<div className='hidden md:flex'>
  <ul className='flex   items-center text-white  '>
    <li>Platforms</li>
    <li>Developers</li>
    <li>Community</li>
    <li>About Us</li>

  <button> USE DOFI</button>
  </ul>
  </div>
<div  onClick={handleNav}  className='md:hidden block'>
 {nav ?  <MenuIcon size={30} className=' text-white'/> : <CloseOutlinedIcon size={30} className=' text-white'/> }
</div>


<div className={nav ?   w-full  bg-black text-white absolute top-[90px] left-0 flex justify-center p-4 items-center : ' absolute left-[-100%]' }>
  <ul className='p-4 '>
    <li className='text-3xl'>Platforms</li>
    <li className='text-3xl'>Developers</li>
    <li className='text-3xl'>Community</li>
    <li className='text-3xl'>About Us</li>
    <button className='m-8' > USE DOFI</button>
  

  </ul>
  </div></div>
  </div>
  )
}

export default Navbar
