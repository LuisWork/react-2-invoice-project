import React from 'react'
import { InvoiceRow } from './InvoiceRow'
import PropTypes from 'prop-types'

export const InvoiceTable = ({ title, items, handlerDeleteItem }) => {

    return (
        <>
            <h2>{title}</h2>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantity }) => (
                        <InvoiceRow key={id} id={id} product={product} price={price} quantity={quantity} handlerDeleteItem={id => handlerDeleteItem(id)} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

InvoiceTable.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}