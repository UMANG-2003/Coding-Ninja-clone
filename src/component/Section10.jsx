import React from "react";

const Spotlight = () => {
    return (
        <div className="bg-pink-50 py-10 px-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center my-10 gap-2">
                Coding Ninjas in spotlight
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%] mx-auto">
                <div className="bg-white p-6  rounded-xl shadow flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="https://files.codingninjas.com/news_ted-33207.webp"
                        alt="Ankush Singla"
                        className="w-fit h-auto object-cover rounded-lg"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {newsCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-4 rounded-xl shadow text-sm text-gray-800"
                        >
                            <img src={card.logo} alt={card.source} className="h-6 mb-2" />
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const newsCards = [
    {
        source: "CXO Today",
        logo: "https://files.codingninjas.com/cxo-33141.png",
        text: "Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase",
    },
    {
        source: "Hindustan Times",
        logo: "https://files.codingninjas.com/hindustan-times-33144.png",
        text: "Sustainable development through upskilling: India's engineering renaissance",
    },
    {
        source: "The Hindu",
        logo: "https://files.codingninjas.com/the-hindu-33146.png",
        text: "Women in tech earn 7% more than men on average but men snag the highest salaries",
    },
    {
        source: "The Economic Times",
        logo: "https://files.codingninjas.com/economic-times-33143.png",
        text: "Tech grads sign up for 'bootcamps' to be more employable",
    },
    {
        source: "The Times of India",
        logo: "https://files.codingninjas.com/the-times-of-india-33147.png",
        text: "Young professionals must embrace continuous upskilling in the age of AI",
    },
    {
        source: "Moneycontrol",
        logo: "https://files.codingninjas.com/money-control-33145.png",
        text: "Generative AI courses in hot demand as more Indians flock to upskilling platforms",
    },
];

export default Spotlight;
