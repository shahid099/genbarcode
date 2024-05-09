import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Footer from './components/Footer';
import './App.css';
const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-400'>
        <Navbar />
        <Mainpage />
        <Footer />
    </div>
  )
}

export default App
