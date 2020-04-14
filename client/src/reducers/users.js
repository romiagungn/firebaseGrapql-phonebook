const phones = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CONTACT_SUCCESS':
            // console.log(action, "ini item cuk")
            return action.users.map((item) => {
                item.sent = true;
                item.search = true;
                item.onEdit = false;
                return item
            })

        case 'POST_CONTACT':
            return [
                ...state,
                {
                    id: action.id,
                    Name: action.Name,
                    Number: action.Number,
                    sent: true,
                    search: true,
                    onEdit: false

                }
            ]

        case 'POST_CONTACT_SUCCESS':
            return state.map((item) => {
                // console.log(item, 'ini save data')
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

        case 'UPDATE_ON':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && { onEdit: true })
            }))

        case 'UPDATE_OFF':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && { onEdit: false })
            }))

        case 'UPDATE_CONTACT':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && {
                    onEdit: false,
                    Name: action.Name,
                    Number: action.Number,
                    sent: true
                })
            }))

        case 'UPDATE_CONTACT_SUCCESS':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && {
                    onEdit: false,
                    Name: action.Name,
                    Number: action.Number,
                    sent: true
                })
            }))

        case 'UPDATE_DATA_FAILURE':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && {
                    onEdit: false,
                    sent: false
                })
            }))

        case "SEARCH_CONTACT":
            return state.map((item) => ({
                ...item,
                search: (item.id.toLowerCase().includes(action.value) || item.Name.toLowerCase().includes(action.value) || item.Number.includes(action.value))
            }))

        case "SEARCH_CONTACT_RESET":
            return state.map((item) => ({
                ...item,
                search: true
            }))

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