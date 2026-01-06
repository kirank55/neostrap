# Neostrap

A modern, accessible, and highly customizable React UI component library built with TypeScript, Tailwind CSS v4, and Radix UI primitives.

## Overview

Neostrap provides a collection of production-ready UI components with a focus on accessibility, type safety, and developer experience. Each component is designed to be composable, customizable, and easy to integrate into your React applications.

## Features

- **Modern Stack**: Built with React 19, TypeScript, and Tailwind CSS v4
- **Accessible**: WCAG 2.1 AA compliant components powered by Radix UI primitives
- **Type-Safe**: Full TypeScript support with comprehensive type definitions
- **Customizable**: Flexible styling with Tailwind CSS and component variants
- **Tree-Shakeable**: Import only what you need for optimal bundle size
- **Animated**: Smooth animations powered by Framer Motion and GSAP
- **CLI Tool**: Quick component installation with built-in CLI

## Components

- **NeoAccordion** - Collapsible content sections
- **NeoButton** - Versatile button component with multiple variants
- **NeoCard** - Flexible card container for content
- **NeoDialog** - Modal dialogs and overlays
- **NeoDropdown** - Dropdown menus and select controls
- **NeoInput** - Text input fields with validation support
- **NeoSelect** - Custom select dropdowns
- **NeoSwitch** - Toggle switches for binary options
- **NeoTabs** - Tab navigation component

## Installation

### Prerequisites

- Node.js 18 or higher
- React 19 or higher
- Tailwind CSS v4

### Setup

1. Install the required dependencies:

```bash
npm install tailwindcss@4 @tailwindcss/vite class-variance-authority clsx tailwind-merge
```

2. Configure Tailwind CSS v4 in your project:

```js
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

3. Add the following utility function to your project:

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Usage

### Using the CLI (Recommended)

Add components to your project using the CLI tool:

```bash
node bin/add.mjs neobutton
```

This will copy the component files directly into your project's `src/components/ui` directory.

### Manual Installation

Alternatively, copy the component files from the `src/components/ui` directory into your project and install the required dependencies for each component.

### Example

```typescript
import { NeoButton } from './components/ui/NeoButton'

function App() {
  return (
    <NeoButton variant="default" size="md">
      Click me
    </NeoButton>
  )
}
```

## Component Dependencies

Each component may require specific Radix UI primitives. The CLI tool handles these dependencies automatically. For manual installation, refer to the component-specific documentation.

Common dependencies:
- `@radix-ui/react-slot`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-select`
- `@radix-ui/react-accordion`
- `@radix-ui/react-switch`
- `@radix-ui/react-tabs`

## Development

### Local Setup

```bash
# Clone the repository
git clone <repository-url>
cd neostrap

# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook
```

### Build

```bash
# Build the project
npm run build

# Build component registry
npm run build:registry
```

## Project Structure

```
neostrap/
├── src/
│   ├── components/
│   │   ├── ui/          # Core UI components
│   │   ├── docs/        # Documentation components
│   │   └── layout/      # Layout components
│   ├── pages/           # Documentation pages
│   ├── stories/         # Storybook stories
│   └── lib/             # Utility functions
├── registry/            # Component registry
├── bin/                 # CLI tool
└── examples/            # Example implementations
```

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **GSAP** - Advanced animation platform
- **Vite** - Build tool and development server
- **Storybook** - Component documentation and testing

## Browser Support

Neostrap supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Radix UI](https://www.radix-ui.com/) primitives
- Inspired by modern component libraries and design systems
- Styling powered by [Tailwind CSS](https://tailwindcss.com/)

## Support

For issues, questions, or contributions, please visit the project repository.
