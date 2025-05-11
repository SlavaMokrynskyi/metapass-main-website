import { store } from "@/store";

export type Ticket = {
    id : number
    image : string,
    name_event : string,
    organizer : string,
    event_type : string,
    description : string
};

export type Tickets = Ticket[];

export type ContactInfoType = {
	name: string
	nickname: string
	email: string
	number: string
}

export type StoreType = ReturnType<typeof store.getState>