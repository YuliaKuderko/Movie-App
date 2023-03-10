import './App.scss';
import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/pages/Home'
import Catalog from './components/pages/Catalog'
import Detail from './components/pages/detail/Detail'
import FAQ from './components/pages/faq/FAQ'
import Contact from './components/pages/contact/Contact';
import About from './components/pages/about/About'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/:category/search/:keyword' element={<Catalog />} />
        <Route path='/:category/:id' element={<Detail />} />
        <Route path='/:category' element={<Catalog />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
