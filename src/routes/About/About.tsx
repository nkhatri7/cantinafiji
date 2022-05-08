import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './About.scss';
import fijianArt from '../../assets/cantina-fijian-art.png';

const About = () => {
    return (
        <div className="about-page">
            <Header currentPage='About Us' />
            <main>
                <section className="about-us-text flex-column">
                    <h2>Our Story</h2>
                    <h1>Bienvienidos (Welcome) to Cantina</h1>
                    <p className="body-text">
                    Cantina Grill & Bar provides you with the perfect location at 
                    Port Denarau, by the sea to enjoy Dining El Fresco Our chefs 
                    make soul satisfying food designed to encourage sharing and has 
                    been crafted with rich balanced ingredients to enjoy/allow 
                    multiple courses. Some of our flavoursome dishes include Tapas, 
                    snacks, tacos, burritos, quesadillas, fajitas, la parilla and 
                    many more showcasing traditional flavours and textures of Mexico. 
                    All our salsas are made fresh daily, our soft flour tortillas 
                    are traditionally hand rolled and pressed daily using wheat and 
                    corn masa flour.
                    <br /><br />
                    We also have plenty of vegetarian and vegan options! No matter 
                    the appetite, we have a little something for everyone. It is 
                    said to take life with a grain of salt… a slice of lime, and a 
                    shot of Tequila. We offer a wide range of Mexican inspired drinks. 
                    Enjoy hand-shaken margaritas, rare tequilas, craft cocktails, 
                    satisfying Sangrias and a vast selection of beer and fine wines. 
                    A perfect match for a night out for fun and party with friends or 
                    a Mexican feast with family.
                    <br /><br />
                    Now if you're planning a party, we can cater to all types of 
                    functions. For a fantastic dining experience and the very best in 
                    Mexican food, visit Cantina today! Stop by for the ultimate 
                    experience...
                    </p>
                </section>
                <img src={fijianArt} alt="Cantina Fijian Mexican Art" className="about-img" />
            </main>
            <Footer />
        </div>
    );
}

export default About;
