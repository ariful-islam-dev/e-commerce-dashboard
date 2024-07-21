import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard';
import './css/style.css'
import Calender from './pages/Calender';
import Profile from './pages/Profile';
import Tables from './pages/Tables';
import Settings from './pages/Settings';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  console.log('loading', loading)
  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        index
        element={
          <>
            <PageTitle title='eCommerce Dashboard || Md. Ariful Islam' />
            <ECommerce />
          </>
        }
      />
      <Route
        path="/calendar"
        element={
          <>
            <PageTitle title='Calender || Md. Ariful Islam' />
            <Calender />
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <PageTitle title='Profile || Md. Ariful Islam' />
            <Profile />
          </>
        }
      />
      <Route
        path="/tables"
        element={
          <>
            <PageTitle title='Tables || Md. Ariful Islam' />
            <Tables />
          </>
        }
      />
      <Route
        path="/settings"
        element={
          <>
            <PageTitle title='Setting || Md. Ariful Islam' />
            <Settings />
          </>
        }
      />
    </Routes>
  )
}

export default App
