# 🚀 Button Component

A customizable button component for React, supporting multiple variants, sizes, and states like loading and disabled.

## 📦 Installation

With npm
```sh
npm install @react-web-kit/button
```

With Yarn:

```sh
yarn add @react-web-kit/button
```

With pnpm:

```sh
pnpm add @react-web-kit/button
```

## 🎨 Usage

```tsx
import React from 'react';
import Button from '@react-web-kit/button';

const App = () => {
  return (
    <Button variant="contained" onClick={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
};

export default App;
```

## ⚙️ Props

| Prop            | Type                                      | Default  | Description |
|---------------|--------------------------------|----------|-------------|
| `children`    | `ReactNode`                      | `-`      | Button label or content. |
| `disabled`    | `boolean`                        | `false`  | Disables the button. |
| `loading`     | `boolean`                        | `false`  | Shows a loading animation. |
| `onClick`     | `(event: MouseEvent<HTMLButtonElement>) => void` | `null` | Click event handler. |
| `size`        | `'small'`  `'big'`                 | `'big'`  | Button size. |
| `skeleton`    | `boolean`                        | `false`  | Displays a skeleton loading state. |
| `type`        | `'button'` `'submit'`            | `'button'` | Button type attribute. |
| `variant`     | `'contained'` `'outlined'` `'text'` | `'text'` | Button styling variant. |

## 🎭 Variants

- **Contained**: A solid button with primary background color.
- **Outlined**: A button with a border and transparent background.
- **Text**: A button with no background or border.

Example:

```tsx
<Button variant="outlined">Outlined Button</Button>
```

## 🔄 Loading State

Enable `loading` to show a loading indicator inside the button.

```tsx
<Button loading>Loading...</Button>
```

## ❌ Disabled State

Use `disabled` to disable interactions.

```tsx
<Button disabled>Disabled</Button>
```

## 🎯 Click Ripple Effect

The button includes a ripple effect on click, enhancing user experience.

## 🤝 Contributing

Feel free to open an issue or pull request on GitHub if you'd like to improve this component! 🚀

## 📜 License

This project is licensed under the MIT License.

