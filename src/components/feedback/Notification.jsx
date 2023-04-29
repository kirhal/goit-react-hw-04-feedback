import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export default function Notification({ message }) {
  return <p className={css[`statistics-item`]}>{message}</p>;
}

Notification.propTypes = { message: PropTypes.string.isRequired };
