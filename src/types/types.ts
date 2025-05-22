import { store } from "@/store";
import { ReactElement } from "react";

export type Ticket = {
    id : number
    image : string,
    name_event : string,
    organizer : string,
    event_type : string,
    description : string
};

export type TicketsType = Ticket[];

export type ContactInfoType = {
	name: string
	nickname: string
	email: string
	number: string
}

export type ModalProps = {
	active: boolean;
	setActive: (active: boolean) => void;
    children: ReactElement;
};

export type StoreType = ReturnType<typeof store.getState>