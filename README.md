# 📈 Stock Market Tracking Application

A modern, real-time stock market tracking and portfolio management platform built with Next.js. Track market trends, monitor your favorite stocks, and stay updated with the latest financial news—all in one place.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?style=flat-square&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 📊 Market Intelligence
- **Real-Time Market Overview** - Live market data and indices tracking powered by TradingView
- **Interactive Stock Heatmaps** - Visual representation of market performance across sectors
- **Detailed Stock Analysis** - Comprehensive stock charts including candlestick patterns, baselines, and technical indicators
- **Financial News Feed** - Curated market news and company-specific updates from Finnhub

### 🔐 User Features
- **Secure Authentication** - Email and password authentication with Better Auth
- **Personal Watchlist** - Save and track your favorite stocks for quick access
- **Personalized Dashboard** - Customized experience with user-specific greetings and data
- **Email Notifications** - Stay informed with automated email alerts (powered by Inngest)

### 🎨 User Experience
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between themes for comfortable viewing
- **Advanced Search** - Quick stock symbol search with command palette (⌘K)
- **Modern UI Components** - Built with Radix UI and Shadcn/ui for accessibility

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) + [Shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [TradingView Widgets](https://www.tradingview.com/widget/)

### Backend
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **API Integration**: [Finnhub Stock API](https://finnhub.io/)
- **Background Jobs**: [Inngest](https://www.inngest.com/)
- **Email Service**: [Nodemailer](https://nodemailer.com/)

### Development Tools
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 20.x or higher
- **npm** or **yarn** or **pnpm**
- **MongoDB** (local instance or MongoDB Atlas account)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Stock_app/stock_app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the `stock_app` directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Finnhub API
FINNHUB_API_KEY=your_finnhub_api_key
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key

# Inngest (for background jobs)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

### 4. Set Up API Keys

#### Finnhub API
1. Sign up at [Finnhub.io](https://finnhub.io/)
2. Get your free API key from the dashboard
3. Add it to your `.env.local` file

#### Inngest (Optional)
1. Sign up at [Inngest.com](https://www.inngest.com/)
2. Create a new project and get your keys
3. Add them to your `.env.local` file

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
stock_app/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages (sign-in, sign-up)
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes (Inngest webhooks)
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── forms/            # Form components
│   └── ui/               # Shadcn/ui components
├── database/             # Database configuration and models
│   └── models/           # Mongoose schemas
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
│   ├── actions/          # Server actions
│   ├── betterAuth/       # Authentication setup
│   ├── inngest/          # Background job functions
│   └── nodemailer/       # Email templates
├── middlewares/          # Next.js middleware
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🎯 Usage

### For Visitors
1. **Browse Market Data** - View real-time market trends and stock heatmaps on the home page
2. **Search Stocks** - Use the search bar or press `⌘K` (Mac) / `Ctrl+K` (Windows) to quickly find stocks
3. **View Stock Details** - Click on any stock to see detailed charts, technical analysis, and company financials

### For Registered Users
1. **Create an Account** - Sign up with your email and password
2. **Build Your Watchlist** - Add stocks to your watchlist for quick access
3. **Track Your Interests** - View your personalized dashboard with watchlist updates
4. **Receive Notifications** - Get email alerts about your tracked stocks (when configured)

## 🔒 Security

- User passwords are securely hashed using Better Auth
- Environment variables protect sensitive API keys
- Session management with secure HTTP-only cookies
- MongoDB connection strings are encrypted
- Input validation on all forms

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [TradingView](https://www.tradingview.com/) for the excellent charting widgets
- [Finnhub](https://finnhub.io/) for real-time market data
- [Vercel](https://vercel.com/) for Next.js and deployment platform
- [Shadcn](https://ui.shadcn.com/) for beautiful UI components

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using Next.js and modern web technologies**