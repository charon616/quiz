export const state = () => ({
    message: "Hello",
    anyValues: 0
})

export const getters = {
    message: (state) => state.message,
    anyValues: (state) => state.anyValues
}

export const mutations = {
    addValue(state) {
        state.anyValues++;
    },
    setItem(state, val) {
        state.message = val
    }
}