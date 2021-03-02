const INITIAL_STATE = {
    allList: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ALL_LIST':
            return {
                ...state,
                allList: action.data
            }
        default:
            return {
                ...state
            }
    }
}