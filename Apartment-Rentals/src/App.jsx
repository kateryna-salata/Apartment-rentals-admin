import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import logo from './assets/logo.png'
import Preview from './components/Preview'

function App() {
  

  return (
    <>
     <div className="App">
      <Header image={logo}/>
      <div className='centerSection'>
      <Navbar/>        
      <Preview/>
      </div>
      <Footer/>
     </div>
    </>
  )
}

export default App
