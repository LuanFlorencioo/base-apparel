'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import HeroMobile from '@/assets/hero-mobile.jpg'
import HeroDesktop from '@/assets/hero-desktop.jpg'
import s from './styles.module.scss'

export default function Hero() {
  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1080px')
    setIsMobile(mediaQuery.matches)
    const mediaListener = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', mediaListener)

    return () => mediaQuery.removeEventListener('change', mediaListener)
  }, [])

  return (
    <figure className={s.component__style}>
      <Image src={isMobile ? HeroMobile : HeroDesktop} alt='hero' priority />
    </figure>
  )
}
