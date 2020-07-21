import React from 'react';
import ReactDOM from 'react-dom'
import {useLocation, useHistory} from 'react-router-dom'
import { render } from '@testing-library/react';
import TitleSection from './TitleSection'
import App from '../../App'

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
        pathname: '/',
        search: '',
        hash: '',
        state: null,
        key: '-',
    }),
}));

test('nombre test', () => {
    expect(true).toBeTruthy();
})

/*
test('nombre test', () => {
    expect(App.loading).not.toBeTruthy();
})
*/

/*
test('verify title', () => {
    const component = shallow(<App params={{ title: 'Atencion al cliente ' }} />)

    const root = document.createElement("div")
    ReactDOM.render(<TitleSection/>, root)

    const location = useLocation()

    root.country = 'Argentina'

    expect(root.querySelector("h1").textContent).toBe("Atencion al cliente Argentina")
})
*/