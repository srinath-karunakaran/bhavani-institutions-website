import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import Preloader from './components/layout/Preloader.jsx'

// Route-based code splitting: each page (and its heavy libs — swiper,
// lightbox, framer-motion usage) loads on demand instead of in one big bundle.
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Academies = lazy(() => import('./pages/Academies.jsx'))
const Courses = lazy(() => import('./pages/Courses.jsx'))
const Branches = lazy(() => import('./pages/Branches.jsx'))
const Franchise = lazy(() => import('./pages/Franchise.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

function PageFallback() {
  return <div className="route-loading" aria-busy="true" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/academies"
            element={
              <Suspense fallback={<PageFallback />}>
                <Academies />
              </Suspense>
            }
          />
          <Route
            path="/courses"
            element={
              <Suspense fallback={<PageFallback />}>
                <Courses />
              </Suspense>
            }
          />
          <Route
            path="/branches"
            element={
              <Suspense fallback={<PageFallback />}>
                <Branches />
              </Suspense>
            }
          />
          <Route
            path="/franchise"
            element={
              <Suspense fallback={<PageFallback />}>
                <Franchise />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<PageFallback />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageFallback />}>
                <Contact />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
