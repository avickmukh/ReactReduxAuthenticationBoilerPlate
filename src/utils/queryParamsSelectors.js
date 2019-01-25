// import queryString from 'query-string'

export const getQueryParams = (props) => {
    if(props.match && props.match.params) {
        return props.match.params
    }
    return undefined
}

export const getQueryParam = (props, key) => {
    const params = getQueryParams(props)
    return params && params[key]
}