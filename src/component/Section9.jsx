import React from 'react';

const Mentorship = () => {
    return (
        <div className="p-6 space-y-16 w-[80%] mx-auto">
            <section>
                <h2 className="text-2xl font-bold mb-2">1:1 Mentorship sessions</h2>
                <p className="text-gray-600 mb-6">Personalised guidance to prepare you for your interview needs</p>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Mock interview',
                            desc: 'Nail coding assessments and technical challenges\nGain insights into problem-solving and algorithmic thinking',
                            icon: '🖥️'
                        },
                        {
                            title: 'Profile review',
                            desc: 'Get your profile & resume reviewed by industry leaders\nFocus on different aspects of your job search',
                            icon: '📄'
                        },
                        {
                            title: 'Project guidance',
                            desc: 'Career counselling with industry experts\nGet assistance on how to build real time projects',
                            icon: '📊'
                        },
                    ].map((card, idx) => (
                        <div key={idx} className="bg-white shadow-md rounded-2xl p-5">
                            <div className="text-4xl mb-4">{card.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 whitespace-pre-line">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:px-10">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Learn by doing</h2>
                    <p className="text-gray-600">Interesting projects to help you standout to recruiters</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {["Postaway", "Chatter Up", "Facial emotion recognition", "Stock market analysis", "Urban Sound Recognition", "Music player"].map((name, idx) => (
                        <div key={idx} className="w-36 h-36 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-center p-2 shadow">
                            {name}
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-orange-50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-2">Unlock learning, career opportunities & success from X to 10X</h2>
                <div className="flex gap-4 flex-wrap mt-2">
                    {["Industry Expert Session", "Fireside Chat", "Tech Talk"].map((label, idx) => (
                        <span key={idx} className="bg-white px-4 py-2 rounded-full border text-sm shadow">{label}</span>
                    ))}
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        name: 'Ankush Singla',
                        role: 'Co-Founder & Instructor',
                        teaches: ['Basics of C++ with DSA', 'Data Science & Machine Learning', 'Competitive Programming'],
                        image: 'https://files.codingninjas.com/ankush-33190.webp'
                    },
                    {
                        name: 'Parikh Jain',
                        role: 'Instructor & Founding Member at Coding Ninjas',
                        teaches: ['Basics of Python with DSA', 'Competitive Programming', 'Product Companies Interview Prep'],
                        image: 'https://files.codingninjas.com/parekh-33195.webp'
                    },
                    {
                        name: 'Nidhi Agarwal',
                        role: 'Founding member & Product Manager at Coding Ninjas',
                        teaches: ['Basics of C++ with DSA', 'Data Science & Machine Learning', 'Data Analytics Course'],
                        image: 'https://files.codingninjas.com/nidhi-33194.webp'
                    }
                ].map((faculty, idx) => (
                    <div key={idx} className="bg-white shadow rounded-2xl p-5 w-fit">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4">
                                <img src={faculty.image} alt="" />
                        </div>
                        <h3 className="font-semibold text-lg text-center">{faculty.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{faculty.role}</p>
                        <ul className="text-sm text-gray-700 list-disc list-inside">
                            {faculty.teaches.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <a href="#" className="text-blue-600 text-sm mt-2 inline-block">LinkedIn profile ↗</a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Mentorship;
