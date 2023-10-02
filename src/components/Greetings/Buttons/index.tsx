import Image from 'next/image'
import { useStore } from '@/store'
import BrFlag from '@/assets/br-flag.svg'
import UsFlag from '@/assets/us-flag.svg'
import s from './styles.module.scss'

export default function Buttons() {
  const { isSelectedLang, selectLang } = useStore()

  const chooseLang = (lang: 'pt-br' | 'en') => () => {
    selectLang(lang);
  }

  return (
    <div
      className={s.component__style}
      data-exit={isSelectedLang}
    >
      <button onClick={chooseLang('pt-br')} disabled={isSelectedLang}>
        <Image src={BrFlag} alt='BR flag' width={20} />
        PT
      </button>

      <button onClick={chooseLang('en')} disabled={isSelectedLang}>
        <Image src={UsFlag} alt='BR flag' width={20} />
        EN
      </button>
    </div>
  )
}
