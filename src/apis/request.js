export const postRequestAsync = async ( data, url) => {
    const response = await
        fetch(url, {
            method: "POST",
            headers: {
                 Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        return json
}

export const getRequestAsync = async (url) => {
    const response = await
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        return json
}
