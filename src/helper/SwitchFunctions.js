export const SwitchTitles = ({url, setInfo, data, country}) => {

    let idCountry
    switch(country) {
        case 'Argentina':
            idCountry = 0
            break;
        case 'Chile':
            idCountry = 1
            break;
        case 'Mexico':
            idCountry = 2
            break;
    }

    switch (url) {
        case '/':
            setInfo(data.categories)
            break;
        case '/sobre':
            setInfo(data.categories[0].childs)
            break;
        case '/recarga':
            setInfo(data.categories[1].childs[idCountry].content)
            break;
        case '/pagos':
            setInfo(data.categories[2].childs[idCountry].content)
            break;
        case '/socio46':
            setInfo(data.categories[3].childs[idCountry].content)
            break;
        case '/tienda':
            setInfo(data.categories[4].childs[idCountry].content)
            break;
    }
}

export const SwitchCountry = (country) => {
    let positionArrayCountry
    switch(country) {
        case 'Argentina':
            positionArrayCountry = 0
            break;
        case 'Chile':
            positionArrayCountry = 1
            break;
        case 'Mexico':
            positionArrayCountry = 2
            break;
        default:
            positionArrayCountry = 0
            break;
    }
    return positionArrayCountry
}