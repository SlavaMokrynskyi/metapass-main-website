import { TicketsType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const ticketSlice = createSlice({
	name: 'ticket',
	initialState: {
		tickets: [] as TicketsType,
	},
	reducers: {
		addTicket: (state, action) => {
			if (state.tickets.find(ticket => ticket.id === action.payload.id)) {
				toast.error("There are already this ticket in your profile")
			} else {
				state.tickets.push({
					id: action.payload.id,
					image: action.payload.image,
					name_event: action.payload.name_event,
					organizer: action.payload.organizer,
					event_type: action.payload.event_type,
					description: action.payload.description,
				})
				toast.success("You successfully bought ticket. You can see your tickets in the profile!")
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