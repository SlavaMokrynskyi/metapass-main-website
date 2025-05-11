import { configureStore } from "@reduxjs/toolkit";

import { addTicket, removeTicket, ticketReducer, clearList } from "./slices/ticketsSlice";

const store = configureStore({
    reducer: {
        tickets: ticketReducer
    }
})

export {
    store,
    addTicket,
    removeTicket,
    clearList
}