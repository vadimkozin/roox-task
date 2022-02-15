import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Layout from 'src/components/layout/layout'
import UsersPage from './users-page'
import UserPage from './user-page'
import NotFoundPage from 'src/pages/not-found-page'

const Pages = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<UsersPage />} />
          <Route path='/users' element={<Outlet />}>
            <Route index element={<UsersPage />} />
            <Route path=':id' element={<UserPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default Pages
