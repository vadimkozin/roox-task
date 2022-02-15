import React from 'react'
import styles from './users-total.module.scss'

const UsersTotal = ({ count }) => {
  return <p className={styles.users_total}>Найдено {count} пользователей</p>
}

export default UsersTotal
