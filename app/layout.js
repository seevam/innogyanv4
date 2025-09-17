import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'innogyan - Building The Creators of Tomorrow',
  description: 'innogyan helps students discover what they love, build what they imagine, and confidently create real-world projects, portfolios, and startups — starting young.',
  keywords: 'creative education, STEAM learning, student projects, innovation, young entrepreneurs',
  authors: [{ name: 'innogyan' }],
  // Remove viewport from here
}

// Separate viewport export for Next.js 14+
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
