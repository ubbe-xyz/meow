import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GithubNotificationSubject } from '../types/github'
import { css } from 'emotion'
import notificationService from '../services/notification'

interface NotificationVariantProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: GithubNotificationSubject['type']
}

const customStyle = css`
  min-width: 5.5rem;
`

export function NotificationLabel({
  className,
  children,
  ...props
}: NotificationVariantProps) {
  const actualVariant = notificationService.getVariantTheme(children)

  if (!actualVariant) return null

  const { color, icon, text } = actualVariant

  return (
    <span
      className={`inline-flex text-xs items-center font-light text-${color} ${customStyle} ${className} `}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
      <span className="ml-2 text-xs">{text}</span>
    </span>
  )
}
