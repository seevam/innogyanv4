import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'innogyan - Building the innovators of tomorrow',
  description: 'Future-ready education programs for schools, colleges, and young innovators. STEM learning, innovation clubs, and hands-on projects.',
  keywords: 'STEM education, innovation, future skills, schools, colleges, playbox',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: 'dark',
        variables: {
          colorPrimary: '#00ffff',
          colorBackground: '#0a0a0a',
          colorInputBackground: 'rgba(255, 255, 255, 0.05)',
          colorInputText: '#ffffff',
          colorText: '#ffffff',
          colorTextSecondary: 'rgba(255, 255, 255, 0.8)',
          colorSuccess: '#00ff88',
          colorDanger: '#ff6b6b',
          colorWarning: '#ffeb3b',
          borderRadius: '12px',
        },
        elements: {
          formButtonPrimary: {
            background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
            color: '#000000',
            fontWeight: '600',
            borderRadius: '50px',
            fontSize: '16px',
            padding: '12px 24px',
            boxShadow: '0 8px 25px rgba(0, 255, 255, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 35px rgba(0, 255, 255, 0.4)',
            },
          },
          card: {
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            borderRadius: '20px',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
          },
          headerTitle: {
            color: '#00ffff',
            fontSize: '28px',
            fontWeight: '800',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          },
          headerSubtitle: {
            color: 'rgba(255, 255, 255, 0.8)',
          },
          formFieldInput: {
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(0, 255, 255, 0.2)',
            borderRadius: '12px',
            color: '#ffffff',
            fontSize: '16px',
            padding: '12px 16px',
            '&:focus': {
              border: '1px solid #00ffff',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
            },
          },
          formFieldLabel: {
            color: '#00ffff',
            fontSize: '14px',
            fontWeight: '600',
          },
          dividerLine: {
            background: 'rgba(0, 255, 255, 0.2)',
          },
          dividerText: {
            color: 'rgba(255, 255, 255, 0.6)',
          },
          socialButtonsBlockButton: {
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(0, 255, 255, 0.2)',
            color: '#ffffff',
            borderRadius: '12px',
            '&:hover': {
              background: 'rgba(0, 255, 255, 0.1)',
              border: '1px solid rgba(0, 255, 255, 0.4)',
            },
          },
          footerActionLink: {
            color: '#00ffff',
            textDecoration: 'none',
            fontWeight: '600',
            '&:hover': {
              color: '#ff00ff',
              textShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
            },
          },
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
