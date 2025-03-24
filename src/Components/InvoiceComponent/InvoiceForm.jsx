import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

export const InvoiceForm = ({ handler }) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    })

    const { product, price, quantity } = formItemsState

    useEffect(() => { }, [price])

    useEffect(() => { }, [formItemsState])

    const onInputChange = ({ target: { name, value } }) => {
        setFormItemsState({
            ...formItemsState,
            [name]: value
        })
    }

    const onInvoiceItemSubmit = (event) => {
        event.preventDefault()
        if (product.trim().length <= 1) return
        if (price.trim().length <= 1) return
        if (isNaN(price.trim())) {
            alert('Error el precio no es un numero')
            return
        }
        if (quantity.trim().length < 1) {
            alert('Error la cantidad tiene que ser mayor a 0')
        }
        if (isNaN(quantity.trim())) {
            alert('Error la cantidad no es un numero')
            return
        }

        handler(formItemsState)

        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        })
    }

    return (
        <form className='w-50 m-auto' onSubmit={onInvoiceItemSubmit}>
            <input type="text" name="product" value={product} placeholder="Producto" className='form-control m-3' onChange={onInputChange} />
            <input type="text" name="price" value={price} placeholder='Precio' className='form-control m-3' onChange={event => onInputChange(event)} />
            <input type="text" name="quantity" value={quantity} placeholder='Cantidad' className='form-control m-3' onChange={onInputChange} />
            <button type='submit' className='btn btn-primary m-3'>Nuevo Item</button>
        </form>
    )
}

InvoiceForm.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}