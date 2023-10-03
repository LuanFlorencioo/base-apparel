import Header from './Header'
import Hero from './Hero'
import Section from './Section'
import s from './styles.module.scss'

export default function Home() {
  return (
    <div className={s.component__style}>
      <main>
        <div>
          <Header />

          <Hero />

          <Section />
        </div>
      </main>
    </div>
  )
}
