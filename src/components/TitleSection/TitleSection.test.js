import React from 'react';
import {render, cleanup} from '@testing-library/react';
import TitleSection from './TitleSection'


afterEach(cleanup)

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
        pathname: '/',
        search: '',
        hash: '',
        state: null,
        key: '-',
    }),
}));


test('nombre home Argentina', async () => {

    const titleObject = {
        title: 'Atención al cliente Argentina'
    }
    const setTitle = () => {
        return titleObject
    }
    const mockJson = {
        title: 'Pago46'
    }
    const country = 'Argentina'

    const { getByText } = render(<TitleSection title={titleObject} setTitle={setTitle} data={mockJson} country={country}/>)

    getByText(`Atención al cliente ${country}`)

})

