import React, { useState, useEffect, ReactElement } from 'react';
import Header from '../../components/Header/Header';
import './Menu.scss';
import mildSpiceIcon from '../../assets/mild-spice-icon.png';
import mediumSpiceIcon from '../../assets/medium-spice-icon.png';
import hotSpiceIcon from '../../assets/hot-spice-icon.png';
import vegetarianIcon from '../../assets/vegetarian-icon.png';
import veganIcon from '../../assets/vegan-icon.png';

type FoodOption = {
    optionText: string,
    dietary?: string,
    optionPrice: number
};

type FoodItem = {
    itemName: string,
    spiceLevel?: string,
    dietary?: string,
    price?: number,
    description?: string,
    options?: FoodOption[]
};

type FoodMenuSection = {
    name: string,
    englishName?: string,
    spiceLevel?: string,
    price?: number,
    description?: string,
    items?: FoodItem[]
};

const Menu = () => {

    const [foodMenu, setFoodMenu] = useState<FoodMenuSection[]>([]);

    useEffect(() => {
        const getFoodMenu = async (): Promise<void> => {
            const response: Response = await fetch('food-menu.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const data: FoodMenuSection[] = await response.json();
            setFoodMenu(data);
        }

        getFoodMenu();
    }, []);

    const FoodOptionDisplay = (props: { foodOption: FoodOption }): ReactElement => (
        <p className="food-option">
            {props.foodOption.optionText}
            {props.foodOption.dietary ?
            <img 
                src={props.foodOption.dietary === 'Vegan' ? veganIcon : vegetarianIcon} 
                alt={props.foodOption.dietary} 
                className="option-icon" 
            />
            : null
            }
            <span className="option-price">{`$${props.foodOption.optionPrice.toFixed(2)}`}</span>
        </p>
    );

    const FoodItemDisplay = (props: { foodItem: FoodItem }): ReactElement => (
        <article className="food-item">
            <div className="flex-start">
                <h5 className="item-name">{props.foodItem.itemName}</h5>
                {props.foodItem.spiceLevel ? 
                    <img 
                        src={(props.foodItem.spiceLevel === 'Mild') ? mildSpiceIcon :
                                (props.foodItem.spiceLevel === 'Medium') ? mediumSpiceIcon :
                                hotSpiceIcon} 
                        alt={`${props.foodItem.spiceLevel} spice`} 
                        className="food-item-icon" 
                    />
                    : null
                }
                {props.foodItem.dietary ?
                    <img 
                        src={props.foodItem.dietary === 'Vegan' ? veganIcon : vegetarianIcon} 
                        alt={props.foodItem.dietary} 
                        className="food-item-icon" 
                    />
                    : null
                }
                {props.foodItem.price ?
                    <p className="item-price">{`$${props.foodItem.price.toFixed(2)}`}</p>
                    : null
                }
            </div>
            {props.foodItem.description ?
                <p className="item-description">{props.foodItem.description}</p>
                : null
            }
            {props.foodItem.options ?
                props.foodItem.options.map((option: FoodOption, idx: number): ReactElement => (
                    <FoodOptionDisplay key={idx} foodOption={option} />
                ))
                : null
            }
        </article>
    );

    const getFoodMenuDisplay = (sections: FoodMenuSection[]) => {
        return sections.map((section: FoodMenuSection): ReactElement => (
            <section key={section.name} className="food-section flex-column">
                <div className="flex-start">
                    <h3 className="section-name">{section.name}</h3>
                    {section.englishName ? 
                        <h4 className='section-sub-name'>{`(${section.englishName})`}</h4>
                        : null
                    }
                    {section.spiceLevel ?
                        <img 
                            src={(section.spiceLevel === 'Mild') ? mildSpiceIcon :
                            (section.spiceLevel === 'Medium') ? mediumSpiceIcon :
                            hotSpiceIcon} 
                            alt="Medium Spice" 
                            className="section-spice-icon" 
                        />
                        : null
                    }
                    {section.price ? 
                        <span className="section-price">{`$${section.price.toFixed(2)}`}</span>
                        : null
                    }
                </div>
                {section.description ? 
                    <p className="section-description">{section.description}</p>
                    : null
                }
                {section.items ? 
                    section.items.map((item: FoodItem): ReactElement => (
                        <FoodItemDisplay key={item.itemName} foodItem={item} />
                    ))
                    : null
                }
            </section>
        ));
    }

    const FoodMenuColumnOne = getFoodMenuDisplay(foodMenu.slice(0, 6));
    const FoodMenuColumnTwo = getFoodMenuDisplay(foodMenu.slice(6));

    const GuideElement = (props: { image: string, label: string }): ReactElement => (
        <div className="flex-centre">
            <img src={props.image} alt={props.label} className="guide-icon" />
            <p className="guide-label">{props.label}</p>
        </div>
    );

    return (
        <div className="menu">
            <Header currentPage='Menu' />
            <main>
                <h1>Menu</h1>
                <h2>Food Menu</h2>
                <section className="food-menu-guide flex-column-centre">
                    <span className="guide-text">GUIDE</span>
                    <div className="guide-sections-container">
                        <section className="flex-column-centre">
                            <span className="guide-title">
                                Spicy Dishes Measured By Degrees
                            </span>
                            <article className="guide-elements-container flex-centre">
                                <GuideElement image={mildSpiceIcon} label='mild' />
                                <GuideElement image={mediumSpiceIcon} label='medium' />
                                <GuideElement image={hotSpiceIcon} label='hot' />
                            </article>
                        </section>
                        <section className="flex-column-centre">
                            <span className="guide-title">Dietary Requirements</span>
                            <article className="guide-elements-container flex-centre">
                                <GuideElement image={vegetarianIcon} label='vegetarian' />
                                <GuideElement image={veganIcon} label='vegan' />
                            </article>
                        </section>
                    </div>
                </section>
                <section className="menu-section">
                    <section className="flex-column">
                        {FoodMenuColumnOne}
                    </section>
                    <section className="flex-column">
                        {FoodMenuColumnTwo}
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Menu;
