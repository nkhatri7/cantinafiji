import React, { useState, useEffect, ReactElement } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Events.scss';
import manWithSombrero from '../../assets/man-with-sombrero.png';
import eventsImg from '../../assets/events-img.jpeg';

type Event = {
    eventName: string,
    eventDescription: string
};

const Events = () => {

    useDocumentTitle("What's On", true);

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const getEvents = async () => {
            const res: Response = await fetch('events.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const data: Event[] = await res.json();
            setEvents(data);
        }

        getEvents();
    }, []);

    const EventsDisplay = events.map((event: Event, idx: number): ReactElement => (
        <article key={idx} className="event">
            <h2 className="event-name">{event.eventName}</h2>
            <p className="event-description">{event.eventDescription}</p>
        </article>
    ));

    return (
        <div className="events">
            <Header currentPage="What's On" />
            <main>
                <section className="events-text flex-column">
                    <div className="events-title-container flex-centre">
                        <h1>What's On?</h1>
                        <img 
                            src={manWithSombrero} 
                            alt="Man with sombrero" 
                            className="sombrero-man-graphic" 
                        />
                    </div>
                    <section className="events-container flex-column">
                        {EventsDisplay}
                    </section>
                    {/* Events json file will always have one event (happy hour),
                        if there are more then this text will not show */}
                    {events?.length === 1 ?
                        <p className="no-more-events">
                            There are no other events on at the moment. Follow 
                            us on social media or keep checking this website to 
                            keep up with the latest news and events at Cantina.
                        </p>
                        : null
                    }
                </section>
                <img src={eventsImg} alt="Happy Hour at Cantina" className="events-img" />
            </main>
            <Footer />
        </div>
    );
}

export default Events;
