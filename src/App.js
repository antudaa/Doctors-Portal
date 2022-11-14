import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';


function App() {

  

  return (
    <RouterProvider className='bg-white dark:bg-black' router={router}></RouterProvider>
  );
}

export default App;
