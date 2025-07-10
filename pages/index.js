import { useState, useEffect } from "react";

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
              <marquee scrollamount="50" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, backgroundColor: 'transparent', height: '50px', fontSize: '24px', fontWeight: 'bold', color: 'red' }}>
          Gaand mein banta Lund pe nariyal
        </marquee>
      
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f0f0f0', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '20px',
        paddingTop: '70px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#333', 
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif'
          }}>
            Baniyan Chor X Mega Under Age
          </h1>
          
          <p style={{ 
            fontSize: '24px', 
            color: '#666', 
            marginBottom: '40px',
            fontFamily: 'Arial, sans-serif'
          }}>
            {isExpired ? "The time has arrived! 🎉" : "Soon..."}
          </p>

          {!isExpired ? (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '20px', 
              marginBottom: '40px' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  fontSize: '48px', 
                  fontWeight: 'bold', 
                  padding: '20px', 
                  borderRadius: '10px',
                  border: '2px solid #0056b3'
                }}>
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: '18px', color: '#333', marginTop: '10px', fontWeight: 'bold' }}>
                  DAYS
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  fontSize: '48px', 
                  fontWeight: 'bold', 
                  padding: '20px', 
                  borderRadius: '10px',
                  border: '2px solid #1e7e34'
                }}>
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: '18px', color: '#333', marginTop: '10px', fontWeight: 'bold' }}>
                  HOURS
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#ffc107', 
                  color: 'white', 
                  fontSize: '48px', 
                  fontWeight: 'bold', 
                  padding: '20px', 
                  borderRadius: '10px',
                  border: '2px solid #e0a800'
                }}>
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: '18px', color: '#333', marginTop: '10px', fontWeight: 'bold' }}>
                  MINUTES
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  fontSize: '48px', 
                  fontWeight: 'bold', 
                  padding: '20px', 
                  borderRadius: '10px',
                  border: '2px solid #c82333'
                }}>
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div style={{ fontSize: '18px', color: '#333', marginTop: '10px', fontWeight: 'bold' }}>
                  SECONDS
                </div>
              </div>
            </div>
          ) : (
            <div style={{ 
              backgroundColor: '#28a745', 
              color: 'white', 
              fontSize: '48px', 
              fontWeight: 'bold', 
              padding: '40px', 
              borderRadius: '10px',
              border: '3px solid #1e7e34'
            }}>
              🎊 IT`&apos;`S TIME! 🎊
            </div>
          )}
        </div>
      </div>
    </>
  );
}
