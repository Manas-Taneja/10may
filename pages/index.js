import { useEffect, useState } from 'react';

export default function Home() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date("2025-07-12T08:00:00"); // Set their landing time

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown("🎉 HE’S BACK BABY 🎉");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundImage: "url('https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif')",
      backgroundSize: 'cover',
      textAlign: 'center',
      fontFamily: "'Comic Sans MS', cursive",
      color: 'hotpink',
      padding: '2rem',
      overflowX: 'hidden',
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '3rem',
        textShadow: '2px 2px yellow',
        marginTop: '2rem'
      }}>
        🛬 THE HOMECOMING OF ADITYA MANISH JHA 🛬
      </h1>

      <div style={{
        fontSize: '4rem',
        color: 'white',
        textShadow: '3px 3px black',
        margin: '20px'
      }}>
        {countdown}
      </div>

      <div
        style={{
          marginTop: '30px',
          padding: '10px',
          border: '3px dashed red',
          background: 'yellow',
          fontSize: '24px',
          overflow: 'hidden',
          // whiteSpace: 'nowrap',
          position: 'relative'
        }}
      >
        <div
          style={{
            display: 'inline-block',
            animation: 'scroll-left 4s linear infinite',
            whiteSpace: 'nowrap'
          }}
        >
          🥵 Gand mein Banta, Lund pe Nariyal 🥵
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
