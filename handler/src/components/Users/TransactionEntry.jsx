// TransactionEntry.jsx
import React from 'react';
import { useTheme } from '@mui/system';

const TransactionEntry = ({ index, transaction, onTransactionDataChange, onRemove }) => {
  const theme = useTheme();
  return (
    <div className="transaction-entry">
      <label>
        Transaction:
        <input
          type="text"
          value={transaction}
          onChange={(e) => onTransactionDataChange(index, e.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => onRemove(index)}
        sx={{ backgroundColor: theme.palette.primary[500] }}
      >
        Remove
      </button>
    </div>
  );
};

export default TransactionEntry;
