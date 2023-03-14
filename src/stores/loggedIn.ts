import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoggedInStore = defineStore('isLoggedIn', {
    state: () => ({loggedIn: false }),
    getters: {
        checkedLoggedIn(state) {
            return state
        },
    },
    actions : {
        setLoggedInStatus() {
            this.loggedIn = true;
        },
        setLoggedOut() {
            this.loggedIn = false;
        }
    }
});