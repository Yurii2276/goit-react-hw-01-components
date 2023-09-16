import css from './TransactionHistory.module.css'

import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
    return (
      <div>
        <table className={css.transactionHistory}>
          <thead>
            <tr>
              <th className={css.nameColumn}>Type</th>
              <th className={css.nameColumn}>Amount</th>
              <th className={css.nameColumn}>Currency</th>
            </tr>
          </thead>
  
          <tbody>
            {items.map((element) => (
              <tr key={element.id} className={css.rowTab}>
                <td className={css.elementRow}>{element.type}</td>
                <td className={css.elementRow}>{element.amount}</td>
                <td className={css.elementRow}>{element.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  
  }
