import React from 'react';

const EventsSummary = () => {
    return(
        <div id="#eventsummary" className="pt5">
            <div className="tc f2 b mv4">Our Ongoing Projects</div>
            <div className="flex justify-between-l items-start flex-wrap ph4-l ph2">
                <div className="w-50-ns pa2">
                    <h1>#hungerfreeindia</h1>
                    <p className="tj">Tackling hunger on the frontline of emergencies is critical, but we also need long-lasting solutions. That's why we work to help people everywhere get the food they need to survive and thrive. Hunger causes a range of problems and the most severe among these is malnutrition. The World Food Programme has estimated that 1/4th of undernourished people in the world live in India. Malnutrition leads to serious health conditions such as weakness, stunted growth, anemia, and other diseases. Sharva Foundation serves the needs of people suffering from hunger and starvation by distributing Ration food kits & cooked hygienic and home-made meals for the poor and distributing the meals to the homeless, and by collecting extra food from restaurants, hotels, weddings, and other ceremonies (reducing food wastage) and distributing them to the homeless and other people in need. Till now we have distributed food to 2500 + underprivileged people.</p>
                </div>
                <div className="w-50-ns pa2">
                    <img src="https://i.postimg.cc/BQ9kSW7d/rightimg.jpg" alt="hungerfreeindia"/>
                </div>
            </div>
        </div>
    );
}

export default EventsSummary;