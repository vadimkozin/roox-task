import Button from 'src/components/button/button'
import styles from './user-header.module.scss'

const UserProfile = ({ header, textButton, onClick }) => {
  return (
    <div className={styles.profile}>
      <h2>{header}</h2>
      <Button type='button' onClick={onClick}>
        {textButton}
      </Button>
    </div>
  )
}

export default UserProfile
