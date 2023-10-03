import s from './styles.module.scss'
import Form from './Form'

export default function Section() {
  return (
    <section className={s.component__style}>
      <p>we{"'"}re <b>coming soon</b></p>
      <p>Hello fellow shoppers! We{"'"}re currently building our new fashion store. Add you email below to stay up-to-date with announcements and our lauch deals.</p>

      <Form />
    </section>
  )
}
