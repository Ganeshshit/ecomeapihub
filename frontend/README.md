A modern, responsive frontend for API documentation built with React + Vite.

## 🚀 Features

- **Interactive API Documentation** - Swagger-like interface with better UX
- **API Playground** - Test endpoints directly from the browser
- **Code Examples** - Ready-to-use snippets in multiple languages
- **Dark/Light Mode** - Automatic theme switching
- **Mobile Responsive** - Works perfectly on all devices
- **Fast Performance** - Built with Vite for optimal loading times

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS Modules
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Code Highlighting**: react-syntax-highlighter
- **Animations**: Framer Motion
- **Testing**: Vitest + Testing Library

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route-level pages
├── hooks/         # Custom React hooks
├── services/      # API clients and utilities
├── utils/         # Helper functions
├── data/          # Static data and configurations
└── styles/        # Global styles and themes
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/api-docs-frontend.git
cd api-docs-frontend
```

2. Install dependencies
```bash
npm install
```

3. Copy environment variables
```bash
cp .env.example .env
```

4. Start development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `http://localhost:5000` |
| `VITE_APP_NAME` | Application name | `API Documentation Platform` |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics ID | - |

### API Configuration

The frontend expects your backend API to be running on the URL specified in `VITE_API_BASE_URL`. Make sure your backend:

1. Serves at the configured URL
2. Implements CORS headers for the frontend domain
3. Follows the expected API contract (see `/src/data/endpoints/`)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker

```bash
# Build and run with Docker
docker build -t api-docs-frontend .
docker run -p 3000:80 api-docs-frontend
```

### Manual Build

```bash
# Build for production
npm run build

# Serve the dist/ folder with any static server
npx serve dist
```

## 🎨 Customization

### Theming
- Colors: Modify `tailwind.config.js`
- Fonts: Update font imports in `src/styles/globals.css`
- Dark mode: Customize in `src/contexts/ThemeContext.jsx`

### API Endpoints
- Add new endpoints: Create JSON files in `src/data/endpoints/`
- Update examples: Modify code snippets in endpoint data
- Change categories: Update navigation in components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.