import React from 'react'
import styles from './button.module.scss'
import clsx from 'clsx'

const Button = ({ className, children, onClick, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, className)}
      onClick={(e) => (onClick ? onClick(e) : null)}
    >
      {children}
    </button>
  )
}

export default Button
