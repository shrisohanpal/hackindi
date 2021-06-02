import axios from 'axios'
import
{
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM
} from '../constants/wishListConstants'

export const addToWishList = (id, qty) => async (dispatch, getState) =>
{
    const { data } = await axios.get(`/api/courses/${id}`)

    dispatch({
        type: WISHLIST_ADD_ITEM,
        payload: {
            course: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    })

    localStorage.setItem('wishListItems', JSON.stringify(getState().wishList.wishListItems))
}

export const removeFromWishList = (id) => (dispatch, getState) =>
{
    dispatch({
        type: WISHLIST_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('wishListItems', JSON.stringify(getState().wishList.wishListItems))
}
