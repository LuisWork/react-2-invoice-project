import { useState, useEffect } from 'react'
import { getInvoice, calculateTotal } from './Services/InvoiceService'
import { InvoiceCategory } from './Components/InvoiceComponent/InvoiceCategory'
import { InvoiceClient } from './Components/InvoiceComponent/InvoiceClient'
import { InvoiceCompany } from './Components/InvoiceComponent/InvoiceCompany'
import { InvoiceTable } from './Components/InvoiceComponent/InvoiceTable'
import { InvoiceTotal } from './Components/InvoiceComponent/InvoiceTotal'
import { InvoiceForm } from './Components/InvoiceComponent/InvoiceForm'

const invoiceInitial = {
  id: 0,
  name: '',
  client: {
    name: '',
    lastName: '',
    address: {
      country: '',
      city: '',
      street: '',
      number: 0
    }
  },
  company: {
    name: '',
    fiscalNumber: 0,
  },
  items: []
}

export const InvoiceApp = () => {

  const title = 'Datos de la Factura'

  const [activeForm, setActiveForm] = useState(false)
  const [total, setTotal] = useState(0)
  const [counter, setCounter] = useState(4)
  const [invoice, setInvoice] = useState(invoiceInitial)
  const [items, setItems] = useState([])
  const { id, name, client, company } = invoice

  useEffect(() => {
    const data = getInvoice()
    setInvoice(data)
    setItems(data.items)
  }, [])

  useEffect(() => {}, [counter])

  useEffect(() => {
    setTotal(calculateTotal(items))
  }, [items])

  const handlerAddItems = ({ product, price, quantity }) => {
    setItems([...items, {
      id: counter,
      product: product.trim(),
      price: +price.trim(),
      quantity: parseInt(quantity.trim(), 10)
    }])
    setCounter(counter + 1)
  }

  const handlerDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const onActiveForm = () => {
    setActiveForm(!activeForm)
  }

  return (
    <>
      <div className='container text-center'>
        <div className='card my-3'>
          <div className='card-header'>
            <h1>{title}</h1>
          </div>
          <div className='card-body my-3'>
            <InvoiceCategory title='Categoria de la Factura' name={name} />
            <div className='row my-5'>
              <div className="col">
                <InvoiceClient title="Datos del Cliente" client={client} />
              </div>
              <div className="col">
                <InvoiceCompany title="Datos de la Compañia" company={company} />
              </div>
            </div>
            <InvoiceTable title="Productos de la Factura" items={items} handlerDeleteItem={id => handlerDeleteItem(id)} />
            <InvoiceTotal total={total} />
            <button className='btn btn-secondary' onClick={onActiveForm}>{!activeForm ? 'Agregar Item' : 'Cerrar Form'}</button>
            {!activeForm || <InvoiceForm handler={handlerAddItems} />}
          </div>
        </div>
      </div>
    </>
  )
}
