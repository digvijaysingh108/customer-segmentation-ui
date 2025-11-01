# Customer Segmentation UI

A clean and responsive React + Tailwind CSS mini project showcasing a modern customer segmentation UI for a digital banking platform. The design visually represents different customer categories—Satisfied, Underserved, and Underbanked—using an elegant card-based layout. Built to demonstrate front-end design skills, layout precision, and component reusability in React.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Tech Stack

- **ReactJS** - UI library
- **Tailwind CSS** - CSS library
- **Vite 7.1.7** - Build tool & dev server
- **RemixIcon v4.7.0** - Icon library
- **Lucide 0.552.0** - Icon library

## 📂 Project Structure

```
05-folder/
├── src/
│   ├── components/
│   │   ├── Section1/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Page1Content.jsx
│   │   │   ├── LeftContent.jsx
│   │   │   ├── RightContent.jsx
│   │   │   ├── RightCard.jsx
│   │   │   ├── RightCardContent.jsx
│   │   │   ├── Arrow.jsx
│   │   │   └── Section1.jsx
│   │   └── Section2/
│   │       └── Section2.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── images/
├── index.html
└── package.json
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |

## 🎨 Features

- **Component-based architecture** - Modular and reusable components
- **Fast refresh** - Instant feedback during development
- **Modern tooling** - Vite for lightning-fast builds
- **Icon support** - RemixIcon integration for UI icons

## 📝 Development

### Adding New Components

Create new components in the `src/components` directory:

```jsx
// src/components/MyComponent.jsx
import React from 'react'

const MyComponent = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default MyComponent
```

### Using Icons

RemixIcon is included. Use icons like this:

```jsx
import 'remixicon/fonts/remixicon.css'

<i className="ri-arrow-right-line"></i>
```

Browse icons at: [remixicon.com](https://remixicon.com)

## 🌐 Browser Support

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and not open for public distribution.

## 🤝 Contributing

This is a personal project. Not currently accepting contributions.

---

**Built with ❤️ using React + Vite**

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
