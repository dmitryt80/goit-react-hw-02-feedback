import PropTypes from 'prop-types'
import s from './Feedback.module.css'

function Feedback({ options, addVoice }) {
  return (
    <>
      <div>
        {options.map((el) => (
          <button
            type="button"
            className={s.button}
            onClick={() => {
              addVoice(el)
            }}
            key={el}
          >
            {el}
          </button>
        ))}
      </div>
    </>
  )
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  addVoice: PropTypes.func.isRequired,
}

export default Feedback