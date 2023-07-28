import Image from 'next/image'
import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { urlFor } from '../utils/client'
import { useStateContext } from '@/context/StateContext'
import Link from 'next/link'
import { BASE_URL } from '@/utils'
import { MdAddShoppingCart } from 'react-icons/md'

function Products({ site }) {
  const {
    description,
    postedBy,
    name,
    slug,
    image,
    price,
    _id,
    likes,
    priceone,
    category,
  } = site

  const { incQty, decQty, qty, onAdd, totalPrice } = useStateContext()

  const router = useRouter()
  return (
    <div className="w-[50%] md:w-[15%] px-2 md:px-4 pt-8">
      <div className="flex flex-col relative px-3 py-2  h-full justify-center  rounded-md border border-gray-300 cursor-pointer hover:bg-gray-100 hover:border-gray-200 bg-white">
        <p className="truncate line-clamp-1 ">{category}</p>
        <p className="truncate line-clamp-1 font-bold text-lg text-blue-700 ">
          {name}
        </p>
        <Link href={`${BASE_URL}/detail/${_id}`}>
          <img
            className="object-contain   w-[300px] bg-gray-900"
            src={urlFor(image && image[0])}
            alt={name}
          />
        </Link>

        {/* <div className="absolute top-4 text-sm md:text-lg px-1 py-3 right-3  flex  font-semibold text-white justify-center items-center rounded-full bg-red-700">
          -4%
        </div> */}
        <div className="mt-2 h-auto">
          <div className="justify-around py-1 items-center flex">
            <div>
              <div className=" font-semibold text-lg md:text-lg text-red-600">
                Ksh {price}
              </div>
              <div className="line-through  text-sm md:text-lg ">
                Ksh{priceone}
              </div>
            </div>

            <div>
              <div
                onClick={() => onAdd(site, qty)}
                className="cursor-pointer"
              >
                <MdAddShoppingCart className="font-bold text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
