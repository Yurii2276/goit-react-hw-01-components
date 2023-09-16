import css from './Statistic.module.css';

import PropTypes from 'prop-types';

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

export default function Statistics({ title, stats }) {
  return (
    <div className={css.container}>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map((element, index) => (
            <li key={index} className={css.item} style={{ backgroundColor: generateRandomColor() }}>
              <span className={css.label}>{element.label}</span>
              <span className={css.percentage}>{element.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
}