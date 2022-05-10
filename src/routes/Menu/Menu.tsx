import React, { useState, useEffect, ReactElement } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Menu.scss';
import mildSpiceIcon from '../../assets/mild-spice-icon.svg';
import mediumSpiceIcon from '../../assets/medium-spice-icon.svg';
import hotSpiceIcon from '../../assets/hot-spice-icon.svg';
import vegetarianIcon from '../../assets/vegetarian-icon.svg';
import veganIcon from '../../assets/vegan-icon.svg';

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

type FoodSection = {
    name: string,
    englishName?: string,
    spiceLevel?: string,
    price?: number,
    description?: string,
    items?: FoodItem[]
};

type DrinkOption = {
    optionText: string,
    optionPrice?: number
};

type Drink = {
    drinkName: string,
    drinkPrice?: number,
    drinkDescription?: string,
    drinkOptions?: DrinkOption[]
};

type DrinksSubsection = {
    subsectionName: string,
    drinks: Drink[]
};

type DrinksSection = {
    sectionName: string,
    subsections?: DrinksSubsection[],
    drinks?: Drink[]
};

const Menu = () => {

    const [foodMenu, setFoodMenu] = useState<FoodSection[]>([]);
    const [drinksMenu, setDrinksMenu] = useState<DrinksSection[]>([]);
    const [isFoodMenuShowing, setFoodMenuShowing] = useState<boolean>(true);

    useEffect(() => {
        const getMenuData = async (fileName: string) => {
            const response: Response = await fetch(fileName, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const data: any[] = await response.json();
            return data;
        }

        const setFoodData = async () => {
            const foodData: FoodSection[] = await getMenuData('food-menu.json');
            setFoodMenu(foodData);
        }

        const setDrinksData = async () => {
            const drinksData: DrinksSection[] = await getMenuData('drinks-menu.json');
            setDrinksMenu(drinksData);
        }
        
        setFoodData();
        setDrinksData();
    }, []);

    useEffect(() => {
        console.log(drinksMenu);
    }, [drinksMenu]);

    const handleMenuToggle = () => {
        setFoodMenuShowing(prev => !prev);
    }

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
                <h4 className="item-name">{props.foodItem.itemName}</h4>
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

    const getFoodMenuDisplay = (sections: FoodSection[]) => {
        return sections.map((section: FoodSection, idx: number): ReactElement => (
            <section key={idx} className="food-section flex-column">
                <div className="flex-start">
                    <h2 className="section-name">{section.name}</h2>
                    {section.englishName ? 
                        <h3 className='section-sub-name'>{`(${section.englishName})`}</h3>
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
    };

    const DrinkOption = (props: { option: DrinkOption }): ReactElement => (
        <p>
            <span className="drink-option-text">{props.option.optionText}</span>
            {props.option.optionPrice ? 
                <span className="drink-price">{`$${props.option.optionPrice?.toFixed(2)}`}</span>
                : null
            }
        </p>
    );

    const DrinkDisplay = (props: { drink: Drink }): ReactElement => (
        <article className="drink flex-column">
            <div className='drink-header-container'>
                <h4 className="drink-name">{props.drink.drinkName}</h4>
                {props.drink.drinkPrice ?
                    <p className="drink-price">{`$${props.drink.drinkPrice?.toFixed(2)}`}</p>
                    : null
                }
            </div>
            <p className="drink-body-text">{props.drink.drinkDescription}</p>
            {props.drink.drinkOptions ? 
                props.drink.drinkOptions.map((option: DrinkOption, idx: number): ReactElement => (
                    <DrinkOption key={idx} option={option} />
                ))
                : null
            }
        </article>
    );

    const DrinksSubsectionDisplay = (props: { subsection: DrinksSubsection }): ReactElement => (
        <section className="drinks-subsection fles-column">
            <h3 className="drinks-subsection-name">{props.subsection.subsectionName}</h3>
            {props.subsection.drinks ?
                props.subsection.drinks.map((drink: Drink, idx: number): ReactElement => (
                    <DrinkDisplay key={idx} drink={drink} />
                ))
                : null
            }
        </section>
    );

    const getDrinksMenuDisplay = (sections: DrinksSection[]) => {
        return sections.map(({ sectionName, subsections, drinks }: DrinksSection, idx: number): ReactElement => (
            <section key={idx} className="drinks-section flex-column">
                <h2 className="drinks-section-name">{sectionName}</h2>
                {subsections ? 
                    subsections.map((subsection: DrinksSubsection, idx: number): ReactElement => (
                        <DrinksSubsectionDisplay key={idx} subsection={subsection} />
                    ))
                    : null
                }
                {drinks ?
                    drinks.map((drink: Drink, idx: number): ReactElement => (
                        <DrinkDisplay key={idx} drink={drink} />
                    ))
                    : null
                }
            </section>
        ));
    };

    const FoodMenuColumnOne = getFoodMenuDisplay(foodMenu.slice(0, 6));
    const FoodMenuColumnTwo = getFoodMenuDisplay(foodMenu.slice(6));

    const DrinksMenuColumnOne = getDrinksMenuDisplay(drinksMenu.slice(0, 2));
    const DrinksMenuColumnTwo = getDrinksMenuDisplay(drinksMenu.slice(2, 8));
    const DrinksMenuColumnThree = getDrinksMenuDisplay(drinksMenu.slice(8));

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
                <h1>{`${isFoodMenuShowing ? 'Food' : 'Drinks'} Menu`}</h1>
                <div className="flex-centre">
                    <button className="menu-toggle" onClick={handleMenuToggle}>
                        {`View ${isFoodMenuShowing ? 'Drinks' : 'Food'} Menu`}
                    </button>
                </div>
                {isFoodMenuShowing ?
                    <div className="food-menu-container">
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
                        <section className="food-menu">
                            <section className="flex-column">
                                {FoodMenuColumnOne}
                            </section>
                            <section className="flex-column">
                                {FoodMenuColumnTwo}
                            </section>
                        </section>
                    </div>
                    :
                    <section className="drinks-menu">
                        <section className="drinks-menu-column flex-column">
                            {DrinksMenuColumnOne}
                        </section>
                        <section className="drinks-menu-column flex-column">
                            {DrinksMenuColumnTwo}
                        </section>
                        <section className="drinks-menu-column flex-column">
                            {DrinksMenuColumnThree}
                        </section>
                    </section>
                }
            </main>
            <Footer />
        </div>
    );
}

export default Menu;
