export function getList() {
    return {
        type: 'GET_LIST'
    }
}

export function allList(data) {
    return {
        type: 'ALL_LIST',
        data
    }
}