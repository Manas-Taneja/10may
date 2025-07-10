import { useEffect, useState } from 'react';

export default function Home() {
  const [countdown, setCountdown] = useState('');
  const [currentImg, setCurrentImg] = useState(0);
  const images = ['/1.png', '/2.png', '/3.png']; // update names

  useEffect(() => {
    // Countdown
    const targetDate = new Date("2025-07-12T08:00:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) return setCountdown("🎉 HE’S BACK BABY 🎉");
      const d = Math.floor(diff / (1000*60*60*24));
      const h = Math.floor((diff/(1000*60*60))%24);
      const m = Math.floor((diff/(1000*60))%60);
      const s = Math.floor((diff/1000)%60);
      setCountdown(`${d}d ${h}h ${m}m ${s}s`);
    };
    const cdInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Image rotation
    const imgInterval = setInterval(() => {
      setCurrentImg(i => (i+1) % images.length);
    }, 3000);

    return () => {
      clearInterval(cdInterval);
      clearInterval(imgInterval);
    };
  }, []);

  // Sparkle trail
  useEffect(() => {
    const handleMouseMove = e => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = e.pageX + 'px';
      sparkle.style.top = e.pageY + 'px';
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 500);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style jsx global>{`
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden;
          height: 100%;
          width: 100%;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
      
      <div className="container">
      <h1>🛬 THE HOMECOMING OF [FRIEND’S NAME] 🛬</h1>

      <div className="countdown">{countdown}</div>

             <div className="marquee">
         <div className="marquee-content">
           🥵 Gand mein Banta, Lund pe Nariyal 🥵
         </div>
       </div>

      <div className="slideshow">
        <img src={images[currentImg]} alt="Cringe pic" />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .container {
            background: url('https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif') center/cover no-repeat;
            text-align: center;
            font-family: 'Comic Sans MS';
            color: hotpink;
            overflow-x: hidden;
            min-height: 100vh;
            width: 100vw;
            height: 100vh;
            padding: 2rem;
            position: relative;
          }

          h1 {
            font-size: 3rem;
            text-shadow: 2px 2px yellow;
          }

          .countdown {
            font-size: 4rem;
            color: white;
            text-shadow: 3px 3px black;
            margin: 1rem 0;
          }

          .marquee {
            margin: 2rem 0;
            padding: 10px;
            border: 3px dashed red;
            background: yellow;
            font-size: 24px;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
          }

          .marquee-content {
            display: inline-block;
            animation: scroll-left 10s linear infinite;
            white-space: nowrap;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .slideshow img {
            width: 300px;
            border: 5px dotted pink;
            margin-top: 1rem;
            transition: transform 0.5s;
          }

          .sparkle {
            position: absolute;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, white 0%, transparent 70%);
            pointer-events: none;
            animation: sparkle-fade 0.5s forwards;
          }

          @keyframes sparkle-fade {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(2); }
          }
        `
      }} />
      </div>
    </>
  );
}
