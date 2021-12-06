import PropTypes from 'prop-types'
import s from './Notification.module.css'

function Notification({ message = '' }) {
  return <>{message && <p className={s.text}>{message}</p>}</>
}

Notification.propTypes = {
  message: PropTypes.string,
}

export default Notification