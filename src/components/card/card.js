import styles from './card.module.scss'
import Button from '../button/button'

const Card = ({ name, city, company, handleSelect }) => {
  // console.log(`card: name:`, name, `city: `, city, `company:`, company)
  return (
    <section className={styles.card}>
      <div className={styles.card__body}>
        <p className={styles.card__body_key}>
          ФИО:<span className={styles.card__body_value}>{name}</span>
        </p>
        <p className={styles.card__body_key}>
          город:<span className={styles.card__body_value}>{city}</span>
        </p>
        <p className={styles.card__body_key}>
          компания:<span className={styles.card__body_value}>{company}</span>
        </p>
      </div>
      {/* <a className={styles.card__link} href='#'>
        Подробнее
      </a> */}
      <Button className={styles.card__link} onClick={handleSelect}>
        Подробнее
      </Button>
    </section>
  )
}

export default Card
