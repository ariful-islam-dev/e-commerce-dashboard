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
import Chart from './pages/Chart';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';

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
      <Route
        path="/chart"
        element={
          <>
            <PageTitle title='Basic Chart || Md. Ariful Islam' />
            <Chart />
          </>
        }
      />
      <Route
        path="/ui/alerts"
        element={
          <>
            <PageTitle title='Alerts || Md. Ariful Islam' />
            <Alerts />
          </>
        }
      />
      <Route
        path="/ui/buttons"
        element={
          <>
            <PageTitle title='Buttons || Md. Ariful Islam' />
            <Buttons />
          </>
        }
      /> <Route
        path="/auth/signin"
        element={
          <>
            <PageTitle title='SignIn || Md. Ariful Islam' />
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <>
            <PageTitle title='SignUp || Md. Ariful Islam' />
            <SignUp />
          </>
        }
      />
      <Route
        path="/forms/form-elements"
        element={
          <>
            <PageTitle title='Form Elements || Md. Ariful Islam' />
            <FormElements />
          </>
        }
      /><Route
        path="/forms/form-layout"
        element={
          <>
            <PageTitle title='Form Layout || Md. Ariful Islam' />
            <FormLayout />
          </>
        }
      />
    </Routes>
  )
}

export default App
