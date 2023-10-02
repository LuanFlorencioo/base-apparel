import s from './styles.module.scss'

export default function HelloMessage({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <p className={s.component__style}>
      {children}
    </p>
  )
}
