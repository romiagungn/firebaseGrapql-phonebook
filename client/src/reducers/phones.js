const phones = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACT_SUCCESS':
            console.log(action,'ini dataaaaaaa')
            return action.users.map((item) => {
                item.sent = true;
                return item
            })

        case 'POST_CONTACT':
            return [
                ...state,
                {
                    id: action.id,
                    Name: action.Name,
                    Number: action.Number,
                    sent: true
                }
            ]

        case 'POST_CONTACT_SUCCESS':
            return state.map((item) => {
                console.log(item,'ini save data')
                item.sent = true;
                return item
            })

        case 'POST_CONTACT_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false;
                }
                return item
            })

            case 'UPDATE_CONTACT':
                return [
                    ...state,
                    {
                        id: action.id,
                        Name: action.Name,
                        Number: action.Number,
                        sent: true
                    }
                ]
    
            case 'UPDATE_CONTACT_SUCCESS':
                return state.map((item) => {
                    console.log(item,'ini save data')
                    item.sent = true;
                    return item
                })
    
            case 'UPDATE_CONTACT_FAILURE':
                return state.map((item) => {
                    if (item.id === action.id) {
                        item.sent = false;
                    }
                    return item
                })

        case 'DELETE_CONTACT':
            return state.filter((item) => item.id !== action.id)

        case 'DELETE_CONTACT_SUCCESS':
            return state

        case 'LOAD_CONTACT_FAILURE':
        case 'DELETE_CONTACT_FAILURE':
        default:
            return state
    }
}

export default phones