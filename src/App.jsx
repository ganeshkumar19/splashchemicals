import { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import NavbarComponent from './components/Navbar';
import ScrollButton from './components/ScrollButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Set a timeout to hide the preloader after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []); 


  if (isLoading) {
    return (
      <div className='loader-container'>
      <div className="loader">
        <p className='m-0 p-0'>SPLASH</p>
      </div>
      </div>
    )
}
 

  return (
    <>
      <NavbarComponent/>
      <LandingPage/>
      <ScrollButton/>
    </>
  )
}

export default App
