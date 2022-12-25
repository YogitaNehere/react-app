//Write actions here which is read by reducer
//Action Creatores: they will return the object ie simple objects

export const addItemsToCart = () => {
    console.log('AddItems action called..')
    return {
        type: "ADD_ITEM",
        payload: 1
    };
}

export const removeItemsFromCart = () => {
    console.log('Remove Items action called..')
    return {
        type: "SUBSTRACT_ITEM",
        payload: 1
    };
}