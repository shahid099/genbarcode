import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Footer from './components/Footer';
import FunctionLogic from './context/FunctionLogic';
// I will setup this Login form Later 
// import Login from './components/Login';
import './App.css';
const App = () => {
  return (
    <FunctionLogic>
      <div className='w-full min-h-screen bg-gray-400'>
          <Navbar />
          {/* I will setup this Login form Later  */}
          {/* <Login /> */}
          <Mainpage />
          <Footer />
      </div>
    </FunctionLogic>
  )
}

export default App
