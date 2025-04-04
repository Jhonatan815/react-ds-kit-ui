import type * as React from 'react'
import { type DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalsStyle from './ThemeProvider.style'
import { defaultTheme } from './constants/themes'
import type { PartialDefaultTheme } from './constants/themes'

type ThemeProviderProps = {
  /**
   * Elements that will be wrapped inside the theme provider.
   */
  children: React.ReactNode
  /**
   * Allows customization of the default theme.
   */
  customTheme?: PartialDefaultTheme
  /**
   * Allows resetting of the global styles.
   */
  resetGlobalStyles?: boolean
}

interface AnyObject {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any
}

const Theme: React.FC<ThemeProviderProps> = ({
  children,
  customTheme = defaultTheme,
  resetGlobalStyles = false,
}) => {
  function deepMergeWithSpread(obj1: AnyObject, obj2: AnyObject): AnyObject {
    const result: AnyObject = { ...obj1 }
    for (const key in obj2) {
      if (Object.prototype.hasOwnProperty.call(obj2, key)) {
        if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
          result[key] = deepMergeWithSpread(
            obj1[key] as AnyObject,
            obj2[key] as AnyObject
          )
        } else {
          result[key] = obj2[key]
        }
      }
    }
    return result
  }
  const theme = deepMergeWithSpread(defaultTheme, customTheme)

  return (
    <>
      {resetGlobalStyles && <GlobalsStyle />}
      <ThemeProvider theme={theme as DefaultTheme}>{children}</ThemeProvider>
    </>
  )
}

export default Theme
