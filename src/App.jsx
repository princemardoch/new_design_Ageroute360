import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import { AppProvider } from './context/AppContext'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import MapPage from './pages/MapPage'
import TendersPage from './pages/TendersPage'
import CompaniesPage from './pages/CompaniesPage'
import ReportsPage from './pages/ReportsPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const queryClient = new QueryClient()

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Router>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="projects" element={<ProjectsPage />} />
                  <Route path="map" element={<MapPage />} />
                  <Route path="tenders" element={<TendersPage />} />
                  <Route path="companies" element={<CompaniesPage />} />
                  <Route path="reports" element={<ReportsPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </AnimatePresence>
          </Router>
        </AppProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
