'use client';

import Link from 'next/link';

export default function InnogyanCollege() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#00ffff' }}>
        Coming Soon
      </h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>
        innogyan for Colleges is under development
      </p>
      <Link href="/" style={{
        padding: '15px 30px',
        background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
        color: '#000',
        borderRadius: '25px',
        textDecoration: 'none',
        fontWeight: '600'
      }}>
        Back to Home
      </Link>
    </div>
  );
}
