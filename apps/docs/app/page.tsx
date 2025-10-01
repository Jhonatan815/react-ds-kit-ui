'use client'

import { useTheme } from '@react-web-kit/hooks'
import { Button } from '@react-web-kit/ui'
import Image, { type ImageProps } from 'next/image'
import type { JSX } from 'react'
import styles from './page.module.css'

type Props = Omit<ImageProps, 'src'> & {
  srcLight: string
  srcDark: string
}

const ThemeImage = (props: Props): JSX.Element => {
  const { srcLight, srcDark, alt } = props

  return (
    <>
      <Image alt={alt} className='imgLight' src={srcLight} />
      <Image alt={alt} className='imgDark' src={srcDark} />
    </>
  )
}

export default function Home(): JSX.Element | null {
  const { theme, toggleTheme } = useTheme()

  if (!theme) {
    return null
  }

  return (
    <div className='bg-gray-400'>
      <main className={styles.main}>
        <ThemeImage
          alt='Turborepo logo'
          className={styles.logo}
          height={38}
          priority
          srcDark='turborepo-light.svg'
          srcLight='turborepo-dark.svg'
          width={180}
        />
        <ol>
          <li>
            Get started by editing <code>apps/docs/app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href='https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Image
              alt='Vercel logomark'
              className={styles.logo}
              height={20}
              src='/vercel.svg'
              width={20}
            />
            Deploy now
          </a>
          <a
            className={styles.secondary}
            href='https://turborepo.com/docs?utm_source'
            rel='noopener noreferrer'
            target='_blank'
          >
            Read our docs
          </a>
        </div>
        <Button appName='docs'>Open alert</Button>
        <button
          className='px-4 py-2 rounded bg-primary text-white'
          onClick={toggleTheme}
          type='button'
        >
          Cambiar a {theme === 'light' ? 'dark' : 'light'}
        </button>
      </main>
      <footer className={styles.footer}>
        <a
          href='https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image alt='Window icon' aria-hidden height={16} src='/window.svg' width={16} />
          Examples
        </a>
        <a
          href='https://turborepo.com?utm_source=create-turbo'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image alt='Globe icon' aria-hidden height={16} src='/globe.svg' width={16} />
          Go to turborepo.com →
        </a>
      </footer>
    </div>
  )
}
