const initState = {
    itemsCount: 0
}
export default (state = initState, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_ITEM':
            console.log("Add item case running");
            return {
                ...state,
                itemsCount: state.itemsCount + action.payload,
            }
        case 'SUBSTRACT_ITEM':
            return {
                ...state,
                itemsCount: state.itemsCount - action.payload,
            }
        default:
            return state;

    }
}