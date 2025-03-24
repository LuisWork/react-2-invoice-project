import React from 'react'
import PropTypes from 'prop-types'

export const InvoiceCompany = ({title, company}) => {

const {name, fiscalNumber} = company
    
    return (
        <>
            <h2>{title}</h2>
            <ul className='list-group'>
                <li className='list-group-item active'>Nombre: {name}</li>
                <li className='list-group-item'>Numero fiscal: {fiscalNumber}</li>
            </ul>
        </>
    )
}

InvoiceCompany.propTypes = {
    title: PropTypes.string.isRequired, 
    company: PropTypes.object.isRequired
}