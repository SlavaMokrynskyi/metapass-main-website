'use client';
import React, { ReactElement, useState } from 'react'
import './Form.css'
import { ContactInfoType } from '@/types/types';

const Form = () => {


    const [contact, setContact] = useState<ContactInfoType | null>(null)
    const [name, setName] = useState<string>("")
    const [nickname, setNickname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [number, setNumber] = useState<string>("")

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const contacts: ContactInfoType = {
            name: name,
            nickname: nickname,
            email: email,
            number: number,
        }
        setContact(contacts)

        console.log(contact);
    }

    const onNameChange: React.ComponentProps<'input'>['onChange'] = (e) => {
        setName(e.target.value)
    }
    const onNicknameChange: React.ComponentProps<'input'>['onChange'] = (e) => {
        setNickname(e.target.value)
    }
    const onEmailChange: React.ComponentProps<'input'>['onChange'] = (e) => {
        setEmail(e.target.value)
    }
    const onNumberChange: React.ComponentProps<'input'>['onChange'] = (e) => {
        setNumber(e.target.value)
    }


    return (
			<div className='form'>
				<h1>Start selling tickets now</h1>
				<p>
					Leave your info below to join the <br />
					countless artists and event organizers <br />
					that have already seen the light.
				</p>
				<form onSubmit ={handleOnSubmit}>
					<input onChange={onNameChange} type='text' placeholder='Name' />
					<input onChange={onNicknameChange} type='text' placeholder='Telegram' />
					<input onChange={onEmailChange} type='email' placeholder='Email' />
					<input
						onChange={onNumberChange}
						type='number'
						placeholder='How many tickets u want to sell'
					/>
                    <button className = 'submit-btn' type = 'submit'> Send</button>
				</form>
			</div>
		)
}

export default Form
