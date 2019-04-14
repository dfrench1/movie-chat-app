
export const selectFilter = value => ({
    type: 'SELECT_FILTER',
    payload: value
})

export const saveUser = value => ({
    type: 'SAVE_USER',
    payload: value
})

export const saveMessages = value => ({
    type: 'SAVE_MESSAGES',
    payload: value
})

export const toggleChat = value => ({
    type: 'OPEN_CHAT',
    payload: value
})

export const translateMessages = value => ({
    type: 'TRANSLATE',
    payload: value
})

export const saveLang = value => ({
    type: 'SAVE_LANG',
    payload: value
})

export const clearMessages = () => ({
    type: 'CLEAR_MESSAGES',
})