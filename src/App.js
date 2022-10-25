import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Routes/Routes';
import { useEffect } from 'react';


function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div>
      <RouterProvider
        router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;