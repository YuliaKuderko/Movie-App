import './App.scss';
import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/pages/Home'
import Catalog from './components/pages/Catalog'
import Detail from './components/pages/detail/Detail'
import FAQ from './components/pages/FAQ'
import Contact from './components/pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/:category/search/:keyword' element={<Catalog />} />
        <Route path='/:category/:id' element={<Detail />} />
        <Route path='/:category' element={<Catalog />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
