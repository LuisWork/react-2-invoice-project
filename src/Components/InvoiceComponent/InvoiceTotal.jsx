import React from 'react'

export const InvoiceTotal = ({ total }) => {
  return (
    <div className='d-flex justify-content-end'>
      <button className='btn btn-dark m-1'>Total:</button>
      <button className='btn btn-success m-1'>{total}</button>
    </div>
  )
}
