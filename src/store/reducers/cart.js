let initialState = {
    items: [],
    total: 0
}

function cartReducer(state = initialState, action){
    switch(action.type){
        case "ADD_TO_CART":{
            const item = state.items.find((i) => i.product.id === action.payload.id);
            if(item){
                return{
                    ...state,       
                    items: state.items.map((i) => {
                        return i.product.id === action.payload.id ? {...i, count: i.count + 1} : i
                    })
                }
            }
            else{
                return{
                    ...state,
                        items:[
                            ...state.items, {
                                product: action.payload,
                                count: 1
                            }
                        ]
                    }
            }
        }

        case "ADD_TO_DETAIL": {
            let itemDetail = state.items.find(item => item.product.id === action.payload.id)
            return itemDetail
        }

        case "INC_ITEM_COUNT": {
            return{
                ...state, 
                items: state.items.map(i => {
                   return i.product.id === action.payload ? {...i, count: i.count +1} : i
                })
            }
        }

        case "DEC_ITEM_COUNT": {
            return{
                ...state, 
                items: state.items.map(i => {
                   return i.product.id === action.payload ? {...i, count: i.count - 1} : i
                })
            }
        }

        case "REMOVE_FORM_CART": {
            return {
                ...state,
                items: state.items.filter((i) => i.product.id !== action.payload)
            }
        }

        default:{
            return state
        }
    }
}

export default cartReducer