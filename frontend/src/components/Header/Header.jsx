import {useEffect, useRef} from "react";

import userImg from "../../assets/images/happy.png"
import logo from "../../assets/images/logo.png";
import {NavLink, Link} from "react-router-dom"
import {BiMenu} from "react-icons/bi"

const navLinks = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/doctor",
    display: "Find a Doctor"
  }, {
    path: "/services",
    display: "Services"
  }, {
    path: "/contact",
    display: "Contact"
  },
];
const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)


  const handleStickyHeader = () => {
    window.addEventListener('scroll', ()=> {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classListen.add('sticky_header')
      } else {
        headerRef.current.classListen.remove('sticky_header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
  return (
    <head className="header  sticky top-0 z-50  flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* input logo here */}

          <div>
            <img src={logo} alt="" />
          </div>

          {/* Menu bar */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) => <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                   : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{link.display}</NavLink>
                </li>)
              }
            </ul>
          </div>

          {/* Nav right */}

        <div className="flex items-center gap-4">
              <div className="hidden">
                <Link to='/'>
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">

                  <img src={userImg} className="w-full rounded-full" alt="" />
                  </figure>
                </Link>
              </div>

              <Link to='/login'>
              <button className='transition duration-300 capitalize bg-blue-400 p-2 text-base
  lg:text-2xl font-normal rounded-lg text-white hover:bg-pink-400'>Login</button>
              </Link>
              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6bh-6 cursor-pointer"/>
              </span>
        </div>
        </div>
      </div>
    </head>
  );
};

export default Header;
