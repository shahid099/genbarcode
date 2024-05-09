import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Footer from './components/Footer';
import './App.css';
const App = () => {
  return (
    <div className='w-full min-h-screen mainPagebg'>
        <Navbar />
        <Mainpage />
        <Footer />
    </div>
  )
}

export default App
