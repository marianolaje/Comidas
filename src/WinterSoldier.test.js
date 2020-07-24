import React from 'react';
import ReactDOM from 'react-dom'
import WinterSoldier from './WinterSoldier';
import InfoJson from './mocks/support_options.json'



test('read JSON and validate info', () => {
  expect(InfoJson).toMatchSnapshot()
  expect(InfoJson.categories.map(info => info.title)).toEqual([
    "Sobre PAGO46",
    "Recarga de saldo",
    "Pagos",
    "Socio46",
    "Tienda",
  ])
  expect(InfoJson.categories.map(info => info.hrefoption)).toEqual([
    "/sobre",
    "/recarga",
    "/pagos",
    "/socio46",
    "/tienda",
  ])
})

InfoJson.categories.forEach( info =>
    test('Info should have properties (id, title, hrefoption, imageIcon, childs)', () => {
      expect(info).toHaveProperty('id')
      expect(info).toHaveProperty('title')
      expect(info).toHaveProperty('hrefoption')
      expect(info).toHaveProperty('imageIcon')
      expect(info).toHaveProperty('childs')
    })
)

test('obtain information', () => {
  const root = document.createElement("div")
  ReactDOM.render(<WinterSoldier/>, root)

  expect(WinterSoldier.data).not.toBeNull();
})

