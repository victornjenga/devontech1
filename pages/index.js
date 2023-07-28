import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { BASE_URL } from '../utils'
import Products from '@/components/Products'
import Bottom from '@/sections/Bottom'
import Categories from '../components/Categories'
import Discover from '../components/Discover'
import { categories } from '@/utils/categories'
export default function Home({ sites }) {
  // console.log(sites)
  return (
    <main className="md:px-[5%] pt-8 w-full">
              <div className=" pt-2 md:pt-4 md:hidden overflow-x-scroll py-2 scrollbar-hide mx-4">
          <Discover />
        </div>

      <div className=" pt-2 md:pt-4 space-x-3 hidden md:flex overflow-x-scroll   py-2 scrollbar-hide mx-4">
      {categories.length ? (
          categories?.map((category) => (
            <Categories key={category._id} category={category} />
          ))
        ) : (
          <NoResults/>
        )}
      </div>
      <h2 className="py-2 font-bold text-lg flex justify-center">Latest Products</h2>
      <div id="slider" className ="flex pt-2 flex-wrap  w-full">
        {sites.map((site) => (
          <Products key={site._id} site={site} />
        ))}
      </div>
      <Bottom/>
    </main>
  )
}


export const getServerSideProps = async ({ query: { category } }) => {
  let response = await axios.get(`${BASE_URL}/api/sites`)

  if (category) {
    response = await axios.get(`${BASE_URL}/api/discover/${category}`)
  }

  return {
    props: { sites: response.data },
  }
}
