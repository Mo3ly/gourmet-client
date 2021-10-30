export const state = () => ({
  allResturants: [],
  allProducts: [],
  cartItems: [],
  userTable: null,
});

export const getters = {
  getResturants: (state) => state.allResturants,
  allProducts: (state) => state.allProducts,
  getCart: (state) => state.cartItems,
  getCartCount: (state) => state.cartItems.length,
  getCartTotal: (state) => (state.cartItems.length < 1 ? "0" : state.cartItems.map((el) => el.price * el.quantity).reduce((a, b) => a + b)),
  getCartTotalQuantity: (state) => (state.cartItems.length < 1 ? "0" : state.cartItems.map((el) => el.quantity).reduce((a, b) => a + b)),
  getTable: (state) => state.userTable,
};

export const mutations = {
  setAllResturants: (state, resturants) => (state.allResturants = resturants),
  setProducts: (state, products) => (state.allProducts = products),
  setCartItem: (state, item) => state.cartItems.push(item),
  updateCartItemQuantity: (state, itemData) => (state.cartItems.find((el) => el.id === itemData.id && el.notes === itemData.notes).quantity = itemData.quantity),
  removeCartItem: (state, itemData) =>
    state.cartItems.splice(
      state.cartItems.findIndex((el) => el.id === itemData.id && el.notes === itemData.notes),
      1
    ),
  emptyCartItems: (state) => (state.cartItems = []),
  setUserTable: (state, table) => (state.userTable = table),
};

export const actions = {
  //   async fetchResturants({ commit }) {
  //     try {
  //       const {
  //         data: { resturants },
  //       } = await this.$axios.get("/api/resturants");
  //       console.log(resturants);
  //       commit("setAllResturants", resturants);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  async addItemToCart({ state, commit }, cartItem) {
    let alreadyAdded = state.cartItems.find((item) => item.id === cartItem.id && item.notes === cartItem.notes);

    if (!alreadyAdded) await commit("setCartItem", cartItem);
    else
      await commit("updateCartItemQuantity", {
        id: cartItem.id,
        quantity: cartItem.quantity + alreadyAdded.quantity,
        notes: cartItem.notes,
      });
  },
  async updateCartItem({ commit }, itemData) {
    await commit("updateCartItemQuantity", itemData);
  },
  async deleteCartItem({ commit }, itemData) {
    await commit("removeCartItem", itemData);
  },
  async setTable({ commit }, table) {
    await commit("setUserTable", table);
  },
  async emptyCart({ commit }) {
    await commit("emptyCartItems");
  },
};
