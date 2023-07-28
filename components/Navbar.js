import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { useStateContext } from '../context/StateContext'
import { BsSearch, BsFillPersonFill, BsHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import { FaSquareFacebook, FaTwitterSquare } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
  const [openMenu, setOpenMenu] = useState()
  const [isMenu, setisMenu] = useState(false)
  const [open, setOpen] = useState()
  const [isResponsiveclose, setResponsiveclose] = useState(false)

  const { showCart, setShowCart, totalQuantities } = useStateContext()

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false)
    setResponsiveclose(isResponsiveclose === false ? true : false)
  }
  let boxClass = ['main-menu menu-right menuq1']
  if (isMenu) {
    boxClass.push('menuq2')
  } else {
    boxClass.push('')
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false)
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false)
  }
  let boxClassSubMenu = ['sub__menus']
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active')
  } else {
    boxClassSubMenu.push('')
  }
  return (
    <div>
      <div className="hidden md:flex  justify-around items-center py-5 bg-blue-800">
        <div className="">
          <img
            className="w-[100%] h-[20%] object-contain"
            src="/logo.png"
            alt="/"
          />
        </div>
        <div className="flex space-x-5">
          <div onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            <Link href="/">
              <div className="flex justify-center items-center">
                <p className=" cursor-pointer font-semibold pr-2 text-white text-2xl ">
                  Mobiles
                </p>{' '}
                <FiChevronDown className="text-white text-3xl font-bold" />
              </div>
            </Link>
            <ul className={boxClassSubMenu.join(' ')}>
              <div className=" bg-gray-100  space-y-2 text-left flex flex-col pb-4  justify-center pl-4 my-2  ">
                <li className="flex  space-x-3 items-center ">
                  <Link href="/abhishekhams">Abhishekams</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/archanas">Archanas</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/homams">Homams</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/other-poojas">Other Pujas</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/pushpanjalis">Pushpanjalis</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/poojas-for-children">Pujas for Children</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/poojas-for-family">Pujas for Family</Link>
                </li>
              </div>
            </ul>
          </div>
          <div onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            <Link href="/">
              <div className="flex justify-center items-center">
                <p className=" cursor-pointer font-semibold pr-2 text-white text-2xl ">
                  Tablets
                </p>{' '}
                <FiChevronDown className="text-white text-3xl font-bold" />
              </div>
            </Link>
            <ul className={boxClassSubMenu.join(' ')}>
              <div className=" bg-gray-100  space-y-2 text-left flex flex-col pb-4  justify-center pl-4 my-2  ">
                <li className="flex  space-x-3 items-center ">
                  <Link href="/temple-services">Temple Services</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/community-services">Community Services</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/volunteer-opportunities">Volunteer Servics</Link>
                </li>
              </div>
            </ul>
          </div>
          <div onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            <Link href="/">
              <div className="flex justify-center items-center">
                <p className=" cursor-pointer font-semibold pr-2 text-white text-2xl ">
                  MacBooks
                </p>{' '}
                <FiChevronDown className="text-white text-3xl font-bold" />
              </div>
            </Link>
            <ul className={boxClassSubMenu.join(' ')}>
              <div className=" bg-gray-100  space-y-2 text-left flex flex-col pb-4  justify-center pl-4 my-2  ">
                <li className="flex  space-x-3 items-center ">
                  <Link href="/temple-services">Temple Services</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/community-services">Community Services</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/volunteer-opportunities">Volunteer Servics</Link>
                </li>
              </div>
            </ul>
          </div>
          <div onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            <Link href="/">
              <div className="flex justify-center items-center">
                <p className=" cursor-pointer font-semibold pr-2 text-white text-2xl ">
                  Accessories
                </p>{' '}
                <FiChevronDown className="text-white text-3xl font-bold" />
              </div>
            </Link>
            <ul className={boxClassSubMenu.join(' ')}>
              <div className=" bg-gray-100  space-y-2 text-left flex flex-col pb-4  justify-center pl-4 my-2  ">
                <li className="flex  space-x-3 items-center ">
                  <Link href="/temple-services">Temple Services</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/community-services">Community Services</Link>
                </li>
                <li className="flex  space-x-3 items-center my-4">
                  <Link href="/volunteer-opportunities">Volunteer Servics</Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex space-x-3 items-center justify-center">
          <div>
            <BsSearch className="text-3xl font-bold text-gray-100" />
          </div>
          <div>
            <BsFillPersonFill className="text-3xl font-bold text-gray-100" />
          </div>
          <div>
            <BsHeart className="text-3xl font-bold text-gray-100" />
          </div>
          <div className="relative text-4xl  cursor-pointer">
          <Link href="/cart">
            <AiOutlineShoppingCart className="text-3xl font-bold text-gray-100" />
            <span className="absolute top-0 right-[-4px] flex text-xs w-5 h-5 font-semibold text-white justify-center items-center rounded-full bg-red-700 ">
              {totalQuantities}
            </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="block md:hidden ">
        {/* <div className="h-[50px] bg-blue-700 justify-center space-x-3 text-white flex items-center ">
          <Link href="https://facebook.com">
            <div className="cursor-pointer items-center justify-center">
              <FaSquareFacebook className="text-2xl hover:text-red-600" />
            </div>
          </Link>
          <Link href="https://twitter.com">
            <div className="cursor-pointer items-center justify-center">
              <FaTwitterSquare className="text-2xl hover:text-red-600" />
            </div>
          </Link>
          <Link href="https://instagram.com">
            <div className="cursor-pointer items-center justify-center">
              <TiSocialInstagram className="text-2xl hover:text-red-600" />
            </div>
          </Link>
        </div> */}

        
        {/* <div className="flex  justify-around bg-blue-700 text-white ">
          <Link href="/">
            <Image
              width={200}
              height={200}
              className="py-2"
              src="/logo.png"
              alt="/"
            />
          </Link>
        </div> */}


        <div className="flex spa hover:text-red-600ce-x-3 items-center  px-4 py-2 bg-blue-800 text-white ">
          <BsSearch className="text-red-600 text-2xl" />
          {/* <p className="">Search For Products</p> */}
          <Link href="/mobile-search">
            <input
              placeholder="Search For Products"
              type="text"
              className="outline-none text-white bg-blue-800"
            />
          </Link>
        </div>

        <div className="flex justify-between px-2  lg:px-5 items-center bg-gray-100 text-blue-700 ">
          <div>
            {/* <GiHamburgerMenu className=" text-2xl" /> */}
            {open ? (
              <AiOutlineClose
                onClick={() => setOpen(false)}
                className="cursor-pointer text-2xl md:hidden"
              />
            ) : (
              <div className="space-x-2 flex items-center">
                <AiOutlineMenu
                  className="cursor-pointer text-2xl md:hidden"
                  onClick={() => setOpen(true)}
                />
                <p className="font-bold">MENU</p>
              </div>
            )}
          </div>
          <div className="  rounded-3xl relative pl-8 pr-3 py-2 flex justify-center items-center space-x-3">
            <PiShoppingCartSimpleFill
              onClick={() => router.push('/cart')}
              className="cursor-pointer relative text-2xl"
            />
            <span className="absolute top-0 right-0 flex text-xs w-5 h-5 font-semibold text-white justify-center items-center rounded-full bg-red-700">
              {totalQuantities}
            </span>
          </div>
        </div>
        {open && (
          <div className="bg-gray-200 space-y-2 z-20 text-left flex flex-col justify-center  py-2 ">
            <ul
              className={`  shadow-md   rounded-xl left-0 w-full  transition-all duration-500 ease-in `}
            >
              <li
                className=" flex border-b  pl-4 py-2 w-full border-gray-200  font-semibold space-x-3 items-center  "
                onClick={() => setOpen(false)}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className=" flex  border-b  pl-4 py-2 w-full border-gray-200 space-x-3 font-semibold items-center  "
                onClick={() => setOpen(false)}
              >
                <Link href="/category/?category=${LEHENGA}">Phones</Link>
              </li>
              <li
                className=" flex border-b  pl-4 py-2 w-full border-gray-200  space-x-3 font-semibold items-center  "
                onClick={() => setOpen(false)}
              >
                <Link href="/category/?category=${FLARED}">Laptops</Link>
              </li>
              <li
                className=" flex border-b  pl-4 py-2 w-full border-gray-200  space-x-3 font-semibold items-center  "
                onClick={() => setOpen(false)}
              >
                <Link href="/">Watches</Link>
              </li>
              <li
                className=" flex   pl-4 py-2  space-x-3 font-semibold items-center  "
                onClick={() => setOpen(false)}
              >
                <Link href="">Wishlist</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default Navbar
