import { useStore } from '@/store'
import s from './styles.module.scss'

export default function TextBlock() {
  const { isSelectedLang } = useStore()

  return (
    <div className={s.component__style} data-exit={isSelectedLang}>
      <p>Escolha seu Idioma</p>
      <p>Select your language</p>
    </div>
  )
}
