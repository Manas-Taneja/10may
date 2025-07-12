import { useEffect, useState } from 'react';

export default function Home() {
  const [countdown, setCountdown] = useState('');
  const [currentImg, setCurrentImg] = useState(0);
  const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png', '/8.png', '/9.png']; // your pics

  useEffect(() => {
    // countdown
    const target = new Date("2025-07-13T00:17:00");
    const tick = () => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) return setCountdown("🎉 HE’S BACK BABY 🎉");
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff/3600000)%24);
      const m = Math.floor((diff/60000)%60);
      const s = Math.floor((diff/1000)%60);
      setCountdown(`${d}d ${h}h ${m}m ${s}s`);
    };
    const ci = setInterval(tick, 1000);
    tick();

    // image rotate
    const ii = setInterval(() => {
      setCurrentImg(i => (i + 1) % images.length);
    }, 3000);

    // popup jumpscares
    const pi = setInterval(() => {
      const img = document.createElement('img');
      img.src = images[Math.floor(Math.random() * images.length)];
      img.style.position = 'fixed';
      img.style.top = '50%';
      img.style.left = '50%';
      img.style.transform = 'translate(-50%,-50%) scale(0)';
      img.style.maxWidth = '80%';
      img.style.zIndex = '9999';
      img.style.transition = 'transform 0.2s';
      document.body.appendChild(img);
      setTimeout(() => { img.style.transform = 'translate(-50%,-50%) scale(1)'; }, 50);
      setTimeout(() => { img.remove(); }, 800);
    }, 10000);

    return () => {
      clearInterval(ci);
      clearInterval(ii);
      clearInterval(pi);
    };
  }, []);

  // sparkle trail
  useEffect(() => {
    const mv = e => {
      const sp = document.createElement('div');
      sp.className = 'sparkle';
      sp.style.left = e.pageX + 'px';
      sp.style.top = e.pageY + 'px';
      document.body.appendChild(sp);
      setTimeout(() => sp.remove(), 500);
    };
    document.addEventListener('mousemove', mv);
    return () => document.removeEventListener('mousemove', mv);
  }, []);

  const [showMusicBtn, setShowMusicBtn] = useState(true);
  
  // music control
  const playMusic = () => {
    const audio = document.getElementById('bgm');
    audio?.play().catch(() => {});
    setShowMusicBtn(false);
  };

  return (
    <div className="container">
      <h1>🛬 THE HOMECOMING OF ADITYA MANISH JHA 🛬</h1>
      <div className="countdown">{countdown}</div>
      <div className="marquee">
        <div className="marquee-content">
          🥵 Gand mein Banta, Lund pe Nariyal 🥵
        </div>
      </div>
      <div className="slideshow">
        <img src={images[currentImg]} alt="Cringe pic" />
      </div>
      
      {showMusicBtn && (
        <button onClick={playMusic} className="music-btn">
          CLICK
        </button>
      )}
      
      <audio id="bgm" src="/ching.mp3" loop />
      <style jsx>{`
        .container {
          background: url('/bg.gif') repeat;
          text-align: center;
          font-family: 'Comic Sans MS', cursive;
          color: hotpink;
          overflow-x: hidden;
          min-height: 100vh;
          padding: 2rem;
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
        
        .music-btn {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          font-size: 3rem;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          border: none;
          color: white;
          cursor: url('/https://cdn3.emoji.gg/emojis/77576-cringe-face.png'), auto;
          font-family: 'Comic Sans MS', cursive;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .music-btn:hover {
          background: linear-gradient(45deg, #ff5252, #26a69a);
          transform: scale(1.02);
        }
        .sparkle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, white 0%, transparent 70%);
          pointer-events: none;
          animation: fade 0.5s forwards;
        }
        @keyframes fade {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(2); }
        }
      `}</style>
    </div>
  );
}
