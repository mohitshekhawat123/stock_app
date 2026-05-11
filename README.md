# Signalist - Stock Market Tracking Application

A full-stack web application for real-time stock market tracking, personalized alerts, and detailed market analysis.

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router for server-side rendering and static site generation
- **React 19** - UI component library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework for modern styling
- **Radix UI** - Unstyled, accessible UI component primitives (Avatar, Dialog, Dropdown Menu, Select, Popover)
- **Lucide React** - Beautiful & consistent icons
- **React Hook Form** - Performant form validation and handling
- **React Select** - Customizable select inputs with country list support
- **Next Themes** - Dark mode and theme management
- **Sonner** - Toast notifications
- **CMDK** - Command palette interface

### Backend & Database
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - ODM for MongoDB with schema validation
- **Better Auth** - Modern authentication solution
- **Inngest** - Serverless workflow engine for background jobs and scheduled tasks

### Email & Notifications
- **Nodemailer** - Email sending with custom HTML templates
- Custom responsive email templates for stock alerts, news summaries, and user onboarding

### DevOps & Build Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS transformations
- **Vercel** - Deployment platform (recommended)

### Utility Libraries
- **clsx** - Conditional className construction
- **class-variance-authority** - Type-safe variant styles
- **tailwind-merge** - Merge Tailwind CSS classes without conflicts

## 📁 Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
├── database/         # Database models and connection
├── lib/             # Utility functions and configurations
│   ├── betterAuth/  # Authentication setup
│   ├── inngest/     # Background jobs & workflows
│   └── nodemailer/  # Email templates and configuration
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
├── middlewares/     # Next.js middleware
├── scripts/         # Build and deployment scripts
└── public/          # Static assets
```

## ✨ Key Features

- **Real-time Stock Tracking** - Monitor stock prices and market movements
- **Personalized Alerts** - Price and volume-based notifications
- **Email Notifications** - Automated alerts via custom HTML email templates
- **User Authentication** - Secure login and user management
- **Watchlist Management** - Track favorite stocks
- **Dark Mode Support** - Theme customization
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Background Jobs** - Scheduled tasks using Inngest for data updates and alerts

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- MongoDB database
- Environment variables (see `.env.example`)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd stockapp
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 📧 Email Templates

The application includes custom-designed HTML email templates for:
- Welcome emails
- Stock price alerts (upper/lower threshold)
- Volume spike notifications
- Market news summaries
- Inactive user reminders

All templates are fully responsive and support dark mode.

## 🔧 Development

- **TypeScript**: Enforced type safety across the codebase
- **ESLint**: Code quality and consistency
- **Component-based**: Modular and reusable React components
- **API Routes**: Next.js API routes for backend functionality
- **Server Actions**: Modern data mutations with Next.js Server Actions

## 📦 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo>)

## 📄 License

This project is private and not licensed for public use.

---

**Built with** ❤️ **using Next.js, React, MongoDB, and TypeScript**
