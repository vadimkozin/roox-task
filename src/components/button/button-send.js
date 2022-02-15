import React from 'react'
import styles from './button.module.scss'
import clsx from 'clsx'

const ButtonSend = ({ className, children, onClick, ...props }) => {
  const classSend =
    props.disabled && props.disabled === 'disabled'
      ? styles.button_mute
      : styles.button_send

  return (
    <button
      {...props}
      className={clsx(styles.button, className, classSend)}
      onClick={(e) => (onClick ? onClick(e) : null)}
    >
      {children}
    </button>
  )
}

export default ButtonSend
