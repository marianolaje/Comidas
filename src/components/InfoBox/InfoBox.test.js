import React from 'react';
import {cleanup} from '@testing-library/react';
import InfoJson from '../../mocks/support_options.json'

afterEach(cleanup)

test('render text', () => {

    expect(InfoJson).toMatchSnapshot()
    const country = 0
    const dataInfo = InfoJson.information[country].content.filter(info => info.title === '¿Que es PAGO46?')

    expect(dataInfo).toEqual([{
        id: 91,
        title: "¿Que es PAGO46?",
        info: "PAGO46 es una plataforma de pagos en efectivo para compras on line, sin necesidad de tener tarjeta de crédito o cuenta bancaria.\n\n Formamos una red colaborativa entre Socios46, Comercios y Consumidores, donde cada uno de nuestros participantes sale beneficiado.\n\nLos Consumidores pueden acceder a productos digitales pagando en efectivo a un Socio46, quien recibe un ingreso adicional por recibir ese pago.\n\nLos Socios46 simplemente con su celular y nuestra APP están siempre disponibles, en cualquier momento y lugar.",
        hrefoption: "/sobre/que-es-pago46"
    }])

})

test('render with images', () => {
    expect(InfoJson).toMatchSnapshot()
    const country = 0
    const dataInfo = InfoJson.information[country].content.filter(info => info.img1)

    expect(dataInfo[0]).toHaveProperty('id')
    expect(dataInfo[0]).toHaveProperty('title')
    expect(dataInfo[0]).toHaveProperty('hrefoption')
    expect(dataInfo[0]).toHaveProperty('info')
    expect(dataInfo[0]).toHaveProperty('img1')
    expect(dataInfo[0]).toHaveProperty('img2')
    expect(dataInfo[0]).toHaveProperty('img3')
})