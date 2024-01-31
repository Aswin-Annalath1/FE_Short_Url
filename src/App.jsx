import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import NewPassword from './components/Newpassword';
import Dashboard from './components/Dashboard';
import GetShortURL from './innercomponents/GetShortURL';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/reset/:id/:token" element={<NewPassword />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/shorternurl" element={<GetShortURL />} />

        {/* Any unknown route gone then this shown.. */}
        <Route path="*" element={
          <body className="bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?anime")' }}>
          <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white bg-opacity-80 p-8 rounded-md shadow-md text-center">
              <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
              <p className="text-lg text-gray-700">Sorry, the page you are looking for might be in another dimension.</p>
              <img src="https://source.unsplash.com/400x300/?anime" alt="Anime" className="mt-8 rounded-lg shadow-md" />
              <a
                href="/"
                className="inline-block mt-8 text-blue-500 hover:text-blue-800"
              >
                Go back to Home
              </a>
            </div>
          </div>
        </body>
        }
        />
      </Routes>
    </>
  )
}

export default App
