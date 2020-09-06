import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';


const initialTransactions = [
  { amount: 100, desc: "Cash" },
  { amount: -299, desc: "pen" },
  { amount: -29, desc: "camera" }

]

export const TransactionContext = createContext(initialTransactions)

export const TransactionProvider = ({ children }) => {

  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  function addTransaction(transObj) {

    dispatch({

      type: "ADD_TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc

      },

    })
  }

  return (

    <TransactionContext.Provider value={{

      transaction: state,
      addTransaction
    }}>
      {children}

    </TransactionContext.Provider>
  )
}
