'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store'
import HelloMessage from './HelloMessage'
import TextBlock from './TextBlock'
import Buttons from './Buttons'
import s from './styles.module.scss'

export default function Greetings() {
  const [hasSelectedLang, setHasSelecetedLang] = useState(false)
  const { lang, isSelectedLang } = useStore()
  const { push } = useRouter()

  useEffect(() => {
    if (isSelectedLang) {
      setTimeout(() => {
        setHasSelecetedLang(true)
      }, 1000);

      setTimeout(() => {
        push(lang!)
      }, 5000);

    }
  }, [isSelectedLang, push, lang])

  return (
    <main className={s.component__style}>
      <section>
        {
          hasSelectedLang
            ? (
              <HelloMessage>
                {lang === 'en' ? 'Hello' : 'Olá!'}
              </HelloMessage>
            )
            : (
              <>
                <TextBlock />

                <Buttons />
              </>
            )
        }
      </section>
    </main>
  )
}
