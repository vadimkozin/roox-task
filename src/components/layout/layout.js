import React from 'react'
import styles from './layout.module.scss'
import LinkAsButton from 'src/components/button/link-as-button'

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <p>Сортировка</p>
          <LinkAsButton to='/users?sort=city'>по городу</LinkAsButton>
          <LinkAsButton to='/users?sort=company'>по компании</LinkAsButton>
        </aside>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
