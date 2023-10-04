import { ComponentProps } from 'react'
import s from './styles.module.scss'

export default function Input(props: ComponentProps<'input'>) {
  return (
    <input
      className={s.component__style}
      {...props}
    />
  )
}
