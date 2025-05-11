import { Tickets } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
	name: 'ticket',
	initialState: {
		tickets: [] as Tickets,
	},
	reducers: {
		addTicket: (state, action) => {
			if (state.tickets.find(ticket => ticket.id === action.payload.id)) {
				console.log('there are already ticket with this id')
			} else {
				state.tickets.push({
					id: action.payload.id,
					image: action.payload.image,
					name_event: action.payload.name_event,
					organizer: action.payload.organizer,
					event_type: action.payload.event_type,
					description: action.payload.description,
				})
			}
			
		},
		removeTicket: (state, action) => {
			state.tickets = state.tickets.filter(
				ticket => ticket.id !== action.payload
			)
		},
		clearList: (state) => {
			state.tickets = []
		},
	},
}) 

export const { addTicket, removeTicket, clearList} = ticketSlice.actions;
export const ticketReducer = ticketSlice.reducer;