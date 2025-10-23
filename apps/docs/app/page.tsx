'use client'

import { useTheme } from '@react-web-kit/hooks'
import { Button, Icon } from '@react-web-kit/ui'
import clsx from 'clsx'
import type { JSX } from 'react'

export default function Home(): JSX.Element | null {
  const { theme, toggleTheme } = useTheme()
  if (!theme) {
    return null
  }

  return (
    <div
      className={clsx(
        { 'bg-black': theme === 'dark', 'bg-white': theme === 'light' },
        'flex min-h-screen gap-2 p-5',
      )}
    >
      <Button onClick={toggleTheme} size='big' variant='contained'>
        {`Cambiar a ${theme === 'light' ? 'dark' : 'light'}`}
      </Button>
      <Icon height={32} icon='loading' stroke='red' width={32} />
    </div>
  )
}
