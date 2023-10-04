import { useStore } from '@/store'
import Form from './Form'
import s from './styles.module.scss'

export default function Section() {
  const { title, description } = useStore.getState().translations

  return (
    <section className={s.component__style}>
      <p>{title.thin} <b>{title.bold}</b></p>
      <p>{description}</p>

      <Form />
    </section>
  )
}
