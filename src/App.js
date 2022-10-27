import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Routes/Routes';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';



function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div>
      <Toaster />
      <RouterProvider
        router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;