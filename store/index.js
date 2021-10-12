export const state = () => ({
    allResturants: [],
    allProducts: [],
    cartItems: [],
    userTable: null,
  })

export const getters = {
    allResturants: (state) => state.allResturants,
    allProducts: (state) => state.allProducts,
    getCart: (state) => state.cartItems,
    getCartCount: (state) => state.cartItems.length,
    getCartTotal: (state) =>
      state.cartItems.length < 1
        ? '0'
        : state.cartItems
            .map((el) => el.price * el.quantity)
            .reduce((a, b) => a + b),
    getCartTotalQuantity: (state) =>
        state.cartItems.length < 1
        ? '0'
        : state.cartItems
            .map((el) => el.quantity)
            .reduce((a, b) => a + b),
    getTable: (state) => state.userTable,
}

export const actions = {
    async addItemToCart({ state, commit }, cartItem) {
        let alreadyAdded = state.cartItems.find((item) => item.id === cartItem.id);
        
        if(!alreadyAdded)
            await commit('setCartItem', cartItem)
        else
            await commit('updateCartItemQuantity', 
            {
                'id': cartItem.id, 
                "quantity": cartItem.quantity + alreadyAdded.quantity
            });
    },
    async updateCartItem({ state, commit }, itemData) {
        await commit('updateCartItemQuantity', itemData);
    },
    async deleteCartItem({ commit }, id) {
        await commit('removeCartItem', id)
    },
    async setTable({ commit }, table) {
        await commit('setUserTable', table)
    },
    async emptyCart({ commit }) {
        await commit('emptyCartItems')
    },
}

export const mutations = {
    setResturants: (state, resturants) => (state.allResturants = resturants),
    setProducts: (state, products) => (state.allProducts = products),
    setCartItem: (state, item) => state.cartItems.push(item),
    updateCartItemQuantity: (state, itemData) => 
        state.cartItems.find((x) => x.id === itemData.id).quantity = itemData.quantity,
    removeCartItem: (state, id) =>
        state.cartItems.splice(
            state.cartItems.findIndex((el) => el.id === id),
            1
        ),
    emptyCartItems: (state) => state.cartItems = [],
    setUserTable: (state, table) => (state.userTable = table),
}