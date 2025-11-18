import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import { DetailPage } from './pages/DetailPage'

const App = () => {
  const location = useLocation()
  const background = location.state?.background;


  return (

    <>
      <Routes location={background || location}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} />
          <Route path="product/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>


      <Routes >
          <Route path="/product/:id" element={<DetailPage isModal/>} />
      </Routes>

    </>

  );
}

export default App