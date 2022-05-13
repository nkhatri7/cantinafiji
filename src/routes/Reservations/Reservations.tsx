import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Reservations.scss';
import '../../components/Form.scss';
import { DatePicker, DropdownList, NumberPicker } from 'react-widgets/cjs';
import "react-widgets/scss/styles.scss";

const Reservations = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState<string>('11:00AM');
    const [guests, setGuests] = useState<number>(2);

    const nameInput = useRef<HTMLInputElement>(null);
    const nameErrorMessage = useRef<HTMLSpanElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const emailErrorMessage = useRef<HTMLSpanElement>(null);

    const formatTime = (timeString: string): string => {
        const hour: number = Number.parseInt(timeString.substring(0, 2));
        if (hour === 12) {
            return `${timeString}PM`;
        } else if (hour > 12) {
            return `${hour - 12}:${timeString.substring(3)}PM`;
        } else {
            return `${timeString}AM`;
        }
    }

    const getReservationTimes = (): string[] => {
        const availableTimes: string[] = [];

        for (let i: number = 11; i < 21; i++) {
            availableTimes.push(formatTime(`${i}:00`));
            availableTimes.push(formatTime(`${i}:30`));
        }

        return availableTimes;
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    }

    const handleDateChange = (date: Date | null | undefined): void => {
        if (date !== null && typeof date !== 'undefined') {
            setDate(date);
        }
    }

    const handleFormSubmit = (e: FormEvent): void => {
        if (nameErrorMessage.current && emailErrorMessage.current) {
            if (nameInput.current?.value.trim() === '') {
                nameInput.current.classList.add('error-border');
                nameErrorMessage.current.innerText = 'Name cannot be empty';
            } else {
                nameInput.current?.classList.remove('error-border');
                nameErrorMessage.current.innerText = '';
            }

            if (emailInput.current?.value.trim() === '') {
                emailInput.current.classList.add('error-border');
                emailErrorMessage.current.innerText = 'Email cannot be empty';
            } else {
                emailInput.current?.classList.remove('error-border');
                emailErrorMessage.current.innerText = '';
            }
        }

        e.preventDefault();
    }

    return (
        <div className="reservations">
            <Header currentPage='Reservations' />
            <main>
                <div className="side-graphic"></div>
                <section className="reservations-content flex-column">
                    <h1>Reservations</h1>
                    <p className="form-info">
                        Fill in these details and we will send an email to you 
                        regarding the availability and status of your reservation.
                    </p>
                    <form action="" onSubmit={handleFormSubmit} className='reservations-form flex-column'>
                        <div className="form-input-container flex-column">
                            <div className="form-label-container flex-column">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id='name'
                                    ref={nameInput}
                                    placeholder='Enter Name'
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                    className="form-input" 
                                />
                            </div>
                            <span ref={nameErrorMessage} className="error-message"></span>
                        </div>
                        <div className="form-input-container flex-column">
                            <div className="form-label-container flex-column">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id='email'
                                    ref={emailInput}
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    className="form-input" 
                                />
                            </div>
                            <span ref={emailErrorMessage} className="error-message"></span>
                        </div>
                        <div className="form-input-container flex-column">
                            <div className="form-label-container flex-column">
                                <label htmlFor="date" className="form-label">Select Date:</label>
                                    <DatePicker 
                                        name='date'
                                        id='date'
                                        placeholder='dd/mm/yyyy'
                                        min={new Date()}
                                        defaultValue={new Date()}
                                        value={date}
                                        onChange={handleDateChange}
                                        className='date-input'
                                    />
                            </div>
                        </div>
                        <div className="form-input-container flex-column">
                            <div className="form-label-container flex-column">
                                <label htmlFor="time" className="form-label">Select Time:</label>
                                <DropdownList 
                                    name='time'
                                    id='time'
                                    data={getReservationTimes()}
                                    defaultValue="11:00AM"
                                    value={time}
                                    onChange={(time) => setTime(time)}
                                    className='time-dropdown'
                                />
                            </div>
                        </div>
                        <div className="form-input-container flex-column">
                            <div className="form-label-container flex-column">
                                <label htmlFor="guests" className="form-label">No. of Guests:</label>
                                <NumberPicker 
                                    name='guests'
                                    id='guests'
                                    defaultValue={2}
                                    value={guests}
                                    onChange={(guests) => setGuests(Number(guests))}
                                    min={1}
                                    className='guests-input'
                                />
                            </div>
                        </div>
                        <input 
                            type="submit" 
                            value="SEND" 
                            required
                            className="cta" 
                        />
                    </form>
                    <p className="form-info">
                        Please note: Your reservation is not confirmed until you have heard back 
                        directly from the restaurant. If you do not receive a confirmation email, 
                        please call us.
                    </p>
                    <article className="large-groups flex-column">
                        <span className="large-groups-title">Large Groups</span>
                        <p className="form-info">
                            Booking in advance is essential for large groups (10 people or more). 
                            Please book at least 24 hours in advance so we can be fully prepared 
                            for you and your guest's arrival. For additional information please 
                            phone us directly to discuss your requirements.
                        </p>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Reservations;
