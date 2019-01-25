import { getQueryParam } from './queryParamsSelectors'

export const getUserEmail = props => getQueryParam(props, 'userEmail')