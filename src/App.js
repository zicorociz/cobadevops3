import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
import ProductPage from './modules/ProductPage';
import About from './modules/About';
import { Category } from './modules/Category';
import ShoppingCart from './modules/ShoppingCart';
import Context from './modules/Context';
import ErrorPage from './modules/ErrorPage';
import Products from './modules/Products';
import CategoryPage from './modules/CategoryPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext'; // ← tambahkan ini

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ProductPage' element={<Category />} />
        <Route path='/ProductPage/:id' element={<ProductPage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Context' element={<Context />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Products/category/:category' element={<CategoryPage />} />
        <Route path='/ShoppingCard' element={<ShoppingCart />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='*'
          element={
            <ErrorPage
              title='Page not found'
              des="Sorry, we can't find the page you're looking for."
              buttonOne='Take me Back'
              buttonTwo='Go Home'
            />
          }
        />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
