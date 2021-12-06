import PropTypes from 'prop-types'
import s from './Statistics.module.css'

function Statistics({ options, total, positivePercentage }) {
  return (
    <>
      <ul className={s.list}>
        {Object.keys(options).map((el) => (
          <li className={s.item}>
            {el}: <span className={`${s.numbers} ${s[el]}`}>{options[el]}</span>
          </li>
        ))}
        <li className={`${s.item} `}>
          Total: <span className={`${s.numbers} `}>{total}</span>
        </li>
        <li className={s.item}>
          Positive feedback:{' '}
          <span className={`${s.numbers} `}>{positivePercentage}%</span>
        </li>
      </ul>
    </>
  )
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics