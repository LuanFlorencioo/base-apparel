'use client'

import { FormEventHandler, ChangeEventHandler, useState } from 'react'
import { useStore } from '@/store'
import { validateEmail } from './validateEmail'
import Input from './Input'
import IconError from './IconError'
import ButtonSubmit from './ButtonSubmit'
import Alert from './Alert'
import s from './styles.module.scss'

export default function Form() {
  const [ userEmail, setUserEmail ] = useState('')
  const [ isInvalidEmail, setIsInvalidEmail ] = useState(false)
  const { translations } = useStore()

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const { ok } = validateEmail(userEmail)
    if (!ok) return setIsInvalidEmail(true)
  }

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (isInvalidEmail) {
      setIsInvalidEmail(false)
    }
    setUserEmail(e.target.value)
  }

  return (
    <form className={s.component__style} onSubmit={submit}>
      <Input
        type="text"
        name="email"
        id="email"
        placeholder={translations.input_placeholder}
        autoComplete='off'
        onChange={handleChangeInput}
        data-invalid={isInvalidEmail}
      />

      {isInvalidEmail && <IconError />}

      <ButtonSubmit />

      {isInvalidEmail && (
        <Alert>{translations.alert}</Alert>
      )}
    </form>
  )
}
