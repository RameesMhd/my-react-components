import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Global Styles/GlobalStyles.scss';
import HomePage from './components/HomePage.js';
import AboutPage from './components/Pages/AboutPage.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>404 Error</div>
  },
  {
    path: "/about",
    element: <AboutPage />,
  }
]);

function App() {
  return (
    <div className="App">
        <Layout>
          <RouterProvider router={router} />
        </Layout>
    </div>
  );
}

export default App;
