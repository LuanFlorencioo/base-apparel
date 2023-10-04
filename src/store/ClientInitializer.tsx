'use client'

import { useRef } from 'react'
import { Translate, useStore } from '@/store'

export default function ClientInitializer({
  translations
}: {
  translations: Translate
}) {
  const initializer = useRef(false)

  if (!initializer.current) {
    useStore.setState({ translations })
    initializer.current = true
  }

  return null
}
