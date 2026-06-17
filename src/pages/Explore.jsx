// src/pages/Explore.jsx

import { useRef } from 'react'
import MatchSearch from '../components/MatchSearch'
import UsersGrid from '../components/UsersGrid'
import CategoriesGrid from '../components/CategoriesGrid'
import Button from '../components/Button'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { SECTION_STYLES } from '../styles/styles'

export default function Explore() {
  // for categories carousel
  const carouselRef = useRef(null)
  const scroll = (direction) => {
    if (carouselRef.current) {
      // 224px = card width (12rem = 192px) + gap (2rem = 32px)
      const scrollAmount = direction === 'left' ? -224 : 224
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      {/* Hero */}
      <section className={SECTION_STYLES}>
        <h1 className='text-center uppercase text-shadow-lg/50 text-shadow-ink text-primary'>Match To Match</h1>
        <h3 className='-mt-5 text-center text-shadow-lg/20 text-shadow-light'>La prossima sfida ti aspetta!</h3>
        <MatchSearch />
      </section>
      {/* Categories */}
      <section className={SECTION_STYLES}>
        <h2 className='text-center text-shadow-lg/20 text-shadow-light'>Esplora le categorie</h2>
        <div className='w-full flex flex-row justify-center items-center gap-5'>
          <Button onClick={() => scroll('left')} className='p-2.5'>
            <ArrowBackIosOutlinedIcon />
          </Button>
          <div ref={carouselRef} className='p-2.5 overflow-y-visible overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]'>
            <CategoriesGrid className='w-fit' />
          </div>
          <Button onClick={() => scroll('right')} className='p-2.5'>
            <ArrowForwardIosOutlinedIcon />
          </Button>
        </div>
      </section>
      {/* Users */}
      <section className={SECTION_STYLES}>
        <h2 className='text-center text-shadow-lg/20 text-shadow-light'>Ready to Match?</h2>
        <UsersGrid cols={4} rows={2} />
      </section>
      {/* Map */}
      <section className={SECTION_STYLES}>
        <h2 className='text-center text-shadow-lg/20 text-shadow-light'>Esplora la mappa</h2>
        <figure className='w-full'>
          <img src='/images/map/map.png' alt='Esplora la mappa' />
        </figure>
      </section>
    </>
  )
}
