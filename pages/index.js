import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-07-13T00:00:00+05:30");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <marquee scrollamount="50" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, backgroundColor: 'transparent', height: '50px', fontSize: '24px', fontWeight: 'bold', color: 'red' }}>
        Gaand mein banta Lund pe nariyal
      </marquee>
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f0f0f0', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '10px',
        paddingTop: '70px',
        fontFamily: 'Arial, sans-serif',
        width: '100vw',
        boxSizing: 'border-box',
        overflowX: 'hidden'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '24px' : '48px', 
            fontWeight: 'bold', 
            color: '#333', 
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif',
            padding: '0 10px'
          }}>
            Baniyan Chor X Mega Under Age
          </h1>
          
          <p style={{ 
            fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '18px' : '24px', 
            color: '#666', 
            marginBottom: '30px',
            fontFamily: 'Arial, sans-serif',
            padding: '0 10px'
          }}>
            {isExpired ? "The time has arrived! 🎉" : "Soon..."}
          </p>

          {!isExpired ? (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
              gap: typeof window !== 'undefined' && window.innerWidth <= 768 ? '10px' : '20px', 
              marginBottom: '30px',
              padding: '0 10px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '32px' : '48px', 
                  fontWeight: 'bold', 
                  padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? '15px' : '20px', 
                  borderRadius: '10px',
                  border: '2px solid #0056b3'
                }}>
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '14px' : '18px', color: '#333', marginTop: '10px', fontWeight: 'bold' }}>
                  DAYS
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '32px' : '48px', 
                  fontWeight: 'bold', 
                  padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? '15px' : '20px', 
                  borderRadius: '10px',
                  border: '2px solid #1e7e34'
                }}>
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '14px' : '18px', color: '#333', marginTop: '10px', fontWeight: 'bold' }}>
                  HOURS
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#ffc107', 
                  color: 'white', 
                  fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '32px' : '48px', 
                  fontWeight: 'bold', 
                  padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? '15px' : '20px', 
                  borderRadius: '10px',
                  border: '2px solid #e0a800'
                }}>
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '14px' : '18px', color: '#333', marginTop: '10px', fontWeight: 'bold' }}>
                  MINUTES
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '32px' : '48px', 
                  fontWeight: 'bold', 
                  padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? '15px' : '20px', 
                  borderRadius: '10px',
                  border: '2px solid #c82333'
                }}>
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '14px' : '18px', color: '#333', marginTop: '10px', fontWeight: 'bold' }}>
                  SECONDS
                </div>
              </div>
            </div>
          ) : (
            <div style={{ 
              backgroundColor: '#28a745', 
              color: 'white', 
              fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '32px' : '48px', 
              fontWeight: 'bold', 
              padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? '30px' : '40px', 
              borderRadius: '10px',
              border: '3px solid #1e7e34',
              margin: '0 10px'
            }}>
              🎊 IT&apos;S TIME! 🎊
            </div>
          )}
        </div>
      </div>
    </>
  );
}
