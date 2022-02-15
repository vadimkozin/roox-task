import React from 'react'
import { Link } from 'react-router-dom'
import styles from './button.module.scss'
import clsx from 'clsx'

const LinkAsButton = ({ className, children, onClick, ...props }) => {
  return (
    <Link {...props} className={clsx(styles.button, className)}>
      {children}
    </Link>
  )
}

export default LinkAsButton
