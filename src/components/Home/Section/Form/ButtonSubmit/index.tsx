import Image from 'next/image'
import Arrow from '@/assets/icon-arrow.svg'
import s from './styles.module.scss'

export default function ButtonSubmit() {
  return (
    <button type="submit" className={s.component__style}>
      <Image src={Arrow} alt='icon arrow' priority/>
    </button>
  )
}
