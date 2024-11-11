# 🏠 Stayscape

A modern property rental platform built with React, TypeScript, and Tailwind CSS. Stayscape offers a seamless experience for finding and booking unique stays around the world.

![Stayscape Preview](https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000)

## ✨ Features

- 🔍 Advanced search with filters for location, dates, and guests
- 🏡 Browse diverse property listings with detailed information
- 📱 Fully responsive design for all devices
- 🔐 User authentication and profile management
- 📅 Interactive booking system with real-time availability
- 💳 Secure payment processing
- ⭐ Rating and review system
- 🌍 Multi-language support
- 💰 Multiple currency support

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Type System:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router v6
- **UI Components:** Headless UI
- **Icons:** Lucide React
- **Date Handling:** date-fns
- **Build Tool:** Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stayscape.git
cd stayscape
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   └── ...
├── pages/             # Page components
├── lib/               # Utilities and store
├── types/             # TypeScript types
└── data/             # Mock data
```

## 🧱 Components

### Core Components
- `Header`: Main navigation bar
- `Hero`: Homepage hero section
- `SearchBar`: Property search interface
- `PropertyCard`: Property listing card
- `SearchFilters`: Search filtering options

### UI Components
- `Button`: Customizable button component
- `DatePicker`: Date selection component
- `Modal`: Reusable modal dialog

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 Authentication

User authentication includes:
- Email/Password login
- Social login (Google, Facebook)
- Protected routes
- User profile management

## 💻 Development

### Prerequisites
- Node.js 18+
- npm 9+

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url
VITE_STRIPE_KEY=your_stripe_key
```

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- UI inspiration from Airbnb
