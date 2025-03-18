# 🎨 TremeProvider

`TremeProvider` is a React component that provides a theming system based on `styled-components`. It allows applying global styles and customizing the theme using a configuration object.

## 📦 Installation

With npm
```sh
npm install @react-web-kit/theme-provider
```

With Yarn:

```sh
yarn add @react-web-kit/theme-provider
```

With pnpm:

```sh
pnpm add @react-web-kit/theme-provider
```

## 🚀 Usage

```tsx
import React from 'react';
import ThemeProvider from '@react-web-kit/theme-provider';
import App from './App';

const MyApp = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default MyApp;
```

## ⚙️ Props

| Prop              | Type                  | Description |
|------------------|----------------------|-------------|
| `children`       | `React.ReactNode`     | Elements that will be wrapped inside the theme provider. |
| `customTheme`    | `PartialDefaultTheme` | Allows customization of the default theme. |
| `resetGlobalStyles` | `boolean` | If `true`, applies the defined global styles. |

## 🎨 Theme Customization

You can extend the default theme using `customTheme`.

```tsx
import React from 'react';
import ThemeProvider from '@react-web-kit/theme-provider';

const customTheme = {
  colors: {
    primary: '#ff5733',
    secondary: '#33ff57',
  },
};

const MyApp = () => {
  return (
    <ThemeProvider customTheme={customTheme}>
      <h1>Hello, world!</h1>
    </ThemeProvider>
  );
};

export default MyApp;
```

## 🌍 Global Styles

If you want to apply global styles, use `resetGlobalStyles`:

```tsx
<ThemeProvider resetGlobalStyles>
  <App />
</ThemeProvider>
```

## 🤝 Contributing

If you would like to contribute, please open a PR or issue on the GitHub repository. All contributions are welcome! 🚀

## 📜 License

This project is licensed under the MIT License.

