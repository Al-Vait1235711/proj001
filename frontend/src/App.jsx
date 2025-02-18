import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppHeader from './components/global/header'
import AppFooter from './components/global/footer'
import AppLanding from './pages/landing'
import AppNotFound from './pages/notfound';
import AppFeatures from './pages/features';


function App() {

  return (
    <div>
      <header id='header'>
        <AppHeader />
      </header>
      <main>
<BrowserRouter basename={import.meta.env.DEV ? '/' : '/proj001/'}>
<Routes>
  <Route path='/' element={<AppLanding/>}></Route>
  <Route path='/features' element={<AppFeatures/>}></Route>
  <Route path='/*' element={<AppNotFound/>}></Route>
</Routes>
</BrowserRouter>
      </main>
      <footer id='footer'>
        <AppFooter />
      </footer>
    </div>
  )
}

export default App
