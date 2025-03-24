import React from 'react'
import PropTypes from 'prop-types'

export const InvoiceClient = ({ title, client }) => {

    const { clientName, lastName, address: {country, city, street, number} } = client


    return (
        <>
            <h2>{title}</h2>
            <ul className='list-group'>
                <li className='list-group-item active'>Nombre: {clientName} {lastName}</li>
                <li className='list-group-item'>Direccion: {street} {number}, {city} {country}</li>
            </ul>
        </>
    )
}

InvoiceClient.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
}