import React from 'react'
import {Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import {RiLinkedinFill} from "react-icons/ri"
import { AiFillYoutube,AiFillGithub,AiOutlineInstagram, AiFillInstagram } from 'react-icons/ai';


const socialLink = [
  {
    path:"https://www.youtube.com/",
    icon:<AiFillYoutube className='group-hover:text-while w-4 h-5'/>,
  },
  {
    path:"https://github.com/",
    icon:<AiFillGithub className='group-hover:text-while w-4 h-5'/>,
  },
  {
    path:"https://www.instagram.com/",
    icon:<AiOutlineInstagram className='group-hover:text-while w-4 h-5'/>,
  },

  {
    path:"https://www.linkedin.com/feed/",
    icon:<RiLinkedinFill className='group-hover:text-while w-4 h-5'/>,
  },
];


const quickLinks01 = [
  {
    path:"/home",
    display:"Home",
  },
  {
    path:"/",
    display:"About Us",

  },
  {
    path:"/services",
    display:"Services",
  },

  {
  path:"/",
  display:"Blog",
  },
];

const quickLinks02 = [
  {
    path:"/doctors",
    display:"doctors",
  },
  {
    path:"/book",
    display:"Request an Appointment",

  },
  {
    path:"https://healersquad.netlify.app/",
    display:"Find a Location",
  },

//   {
//   path:"/",
//   display:"Get a Opinion",
//   },
  ]
const quickLinks03 = [
  // {
  //   path:" /",
  //   display:"Donate",
  // },
  {
    path:"/contact",
    display:"Contact Us",

  },
];
  const Footer=() =>{
    const year = new Date().getFullYear();


  
  return (
    <footer className='pb-16 pt-10'>
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]' >
        <div>
          <img src={logo} alt="" />
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>
              Copyright © {year} developed by <b>BelieversGen</b> all rights reserved. </p>
          <div className='flex items-center'>
            {socialLink.map((link,index)=>(
              <Link 
                to= {link.path} 
                key={index}
                className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
                justify-center group hover:bg-primaryColor hover:border-none mr-2'
                >
              {link.icon}

            </Link>
            ))}
          </div>
       </div>


        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Quick Links 
          </h2>
          <ul> 
            {quickLinks01.map((item,index) => (
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            I want to:
          </h2>
          <ul> 
            {quickLinks02.map((item,index) => (
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Support
          </h2>
          <ul> 
            {quickLinks03.map((item,index) => (
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>
    </footer>
  )
};

export default Footer
