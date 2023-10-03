import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import s from './styles.module.scss'

export default function Header() {
  return (
    <header className={s.component__style}>
      <figure>
        <Image src={Logo} alt='Logo' priority />
      </figure>
    </header>
  )
}
