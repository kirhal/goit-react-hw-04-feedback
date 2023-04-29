import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const keysArr = Object.keys(options);
  return (
    <ul className={css['buttons-list']}>
      {keysArr.map(elem => {
        return (
          <li key={elem}>
            <button
              type="button"
              className={css.button}
              name={elem}
              onClick={onLeaveFeedback}
            >
              {elem}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
