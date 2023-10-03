'use client'

import { FormEventHandler, ChangeEventHandler, useState } from 'react'
import Image from 'next/image'
import Arrow from '@/assets/icon-arrow.svg'
import Error from '@/assets/icon-error.svg'
import s from './styles.module.scss'

export default function Form() {
  const [ userEmail, setUserEmail ] = useState('')
  const [ isInvalidEmail, setIsInvalidEmail ] = useState(false)
  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    
    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    const validEmail = regex.test(userEmail)
    if (!validEmail) {
      return setIsInvalidEmail(true)
    }
  }

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (isInvalidEmail) {
      setIsInvalidEmail(false)
    }
    setUserEmail(e.target.value)
  }

  return (
    <form className={s.component__style} onSubmit={submit}>
      <input
        type="text"
        name="email"
        id="email"
        placeholder='Endereço de Email'
        autoComplete='off'
        onChange={handleChangeInput}
        data-invalid={isInvalidEmail}
      />

      {
        isInvalidEmail && <Image src={Error} alt='Icon Error' />
      }

      <button type="submit">
        <Image src={Arrow} alt='icon arrow' priority/>
      </button>

      {
        isInvalidEmail && (
          <span>
            Please provide a valid email
          </span>
        )
      }
    </form>
  )
}
