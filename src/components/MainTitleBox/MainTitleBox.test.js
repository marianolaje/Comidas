import {render} from "@testing-library/react";
import React from "react";
import MainTitleBox from "./MainTitleBox";

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
        pathname: '/sobre',
        search: '',
        hash: '',
        state: null,
        key: '-',
    }),
    useHistory: jest.fn().mockReturnValue({
        action: 'POP',
        length: 3,
        location: {
            hash: "",
            key: "14ge0v",
            pathname: "/sobre",
            search: "",
        },
    }),
}));


test('nombre seccion sobrePAGO46', async () => {

    const infoRow = {
        "id": 1,
        "title": "Sobre PAGO46",
        "hrefoption": "/sobre",
    }

    const setTitle = () => {
        return titleObject
    }

    const { getByText } = render(<MainTitleBox infoRow={infoRow} setTitle={setTitle}/>)

    getByText(`Sobre PAGO46`)

})