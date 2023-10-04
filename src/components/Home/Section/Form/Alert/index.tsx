import s from './styles.module.scss'

export default function Alert({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <span className={s.component__style}>
      {children}
    </span>
  )
}
