import React from 'react'
import PropTypes from 'prop-types'

export const InvoiceCategory = ({title, name}) => {

    return (
        <>
            <h2>{title}</h2>
            <ul className='list-group'>
                <li className='list-group-item'>Categoria: {name}</li>
            </ul>
        </>
    )
}

InvoiceCategory.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}