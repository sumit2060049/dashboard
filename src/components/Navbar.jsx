import React,{useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';//we are also using some dummy data.
import {Cart,Chat,Notification,UserProfile} from '.'; //we also need to import few components.from components.
import { useStateContext } from '../contexts/ContextProvider';

const NavButton =({title,customFunc,icon,color,dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">

  <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">  {/* the reason why we couldn't have taken this code down only because other nav button won't do the same action ans this one. */}
  <span style={{background:dotColor}}
  className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
  </span>
  {icon}
  </button>

  </TooltipComponent>
)
//const handleClick=({})=>({})


const Navbar = () => {
  const { activeMenu,setActiveMenu,isClicked,setIsClicked,
  handleClick,screenSize,setScreenSize,currentColor} = useStateContext();//getting the active menu state

    useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    handleResize();//to initially find out the inner width
    return () => window.removeEventListener('resize',handleResize);

    },[]);

    useEffect(() => {
      if(screenSize <=900){
        setActiveMenu(false);//for sidebar
      }else{
        setActiveMenu(true);
      }
    },[screenSize]);


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
    <NavButton title="Menu" customFunc={() =>   //self closing component you can pass some props to it.
    setActiveMenu((prevActiveMenu) =>
    !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu/>}/>

    <div className='flex'>
    <NavButton 
    title="Cart" 
    customFunc={() => handleClick('cart')} 
    color={currentColor} 
    icon={<FiShoppingCart/>}/>

    <NavButton 
    title="Chat" 
    dotColor="#03C9D7"
    customFunc={() => handleClick('chat')} 
    color={currentColor} 
    icon={<BsChatLeft/>}/>

    <NavButton 
    title="Notifications" 
    dotColor="03C9D7"
    customFunc={() => handleClick('notification')} 
    color={currentColor}
    icon={<RiNotification3Line/>}
    />
    <TooltipComponent 
    content="profile" 
    position='BottomCenter'>

    <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
    onClick={() => handleClick('userProfile')}>
    <img className='rounded-full w-8 h-8' src={avatar}/>
    <p>
      <span className='text-gray-400 text-14'>Hi,</span>{``}
      <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
    </p>

    <MdKeyboardArrowDown 
    className='text-gray-400 text-14'/>

    </div>

    </TooltipComponent>
    {isClicked.cart && (<Cart />)} {/* if we click on cart we want to render cart component. */}
    {isClicked.chat && (<Chat />)}
    {isClicked.notification && (<Notification />)}
    {isClicked.userProfile && (<UserProfile />)}

    </div>

    </div>
  )
}

export default Navbar