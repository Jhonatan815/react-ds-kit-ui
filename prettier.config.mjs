/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'always',
  tailwindAttributes: ['myClassList'],
  tailwindPreserveWhitespace: true,
  tailwindPreserveDuplicates: true,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
