import
{
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM,
    WISHLIST_CLEAR_ITEMS,
} from '../constants/wishListConstants'

export const wishListReducer = (
    state = { wishListItems: [] },
    action
) =>
{
    switch (action.type) {
        case WISHLIST_ADD_ITEM:
            const item = action.payload

            const existItem = state.wishListItems.find((x) => x.course === item.course)

            if (existItem) {
                return {
                    ...state,
                    wishListItems: state.wishListItems.map((x) =>
                        x.course === existItem.course ? item : x
                    ),
                }
            } else {
                return {
                    ...state,
                    wishListItems: [...state.wishListItems, item],
                }
            }
        case WISHLIST_REMOVE_ITEM:
            return {
                ...state,
                wishListItems: state.wishListItems.filter((x) => x.course !== action.payload),
            }
        case WISHLIST_CLEAR_ITEMS:
            return {
                ...state,
                wishListItems: [],
            }
        default:
            return state
    }
}