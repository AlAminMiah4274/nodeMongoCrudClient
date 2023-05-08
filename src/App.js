import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/users/add',
      element: <AddUser></AddUser>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
