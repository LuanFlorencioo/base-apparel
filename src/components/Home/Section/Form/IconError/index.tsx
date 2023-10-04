import Image from "next/image";
import Error from '@/assets/icon-error.svg'
import s from './styles.module.scss'

export default function IconError() {
  return (
    <Image
      src={Error}
      alt='Icon Error'
      className={s.component__style}
    />
  )
}
