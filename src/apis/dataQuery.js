import { postRequestAsync } from './request'

export const postDataAsync = async (url, data) => {
    const json = await postRequestAsync(data, url)
    return json
}

export const getDataAsync = async url => getRequestAsync(url)

