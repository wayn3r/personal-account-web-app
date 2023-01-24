export interface LayoutProps {
  title: string
  description: string
  className?: string
  userBadge?: boolean
  metas?: { [name: string]: string }
  navbar?: boolean
  topbar?: boolean
}
