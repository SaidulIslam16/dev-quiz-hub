
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main></Main> },
    { path: "*", element: <h1 className='text-5xl font-bold'>404: The Path Don't Exist</h1> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
