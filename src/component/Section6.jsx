import React from 'react'
const testimonials = [
  {
    name: "Twisam",
    role: "Full Stack Developer",
    text: "From optometrist to IT pro, thanks to Coding Ninjas. Their lessons help me excel in projects. CN transformed my journey, giving me clarity and optimization skills!",
    company: "Cogent e Private ltd",
    logo: "", 
    imgBg: "bg-green-200",
    image: "https://files.codingninjas.com/nttot_twisampati-33030.png", 
  },
  {
    name: "Onkar Lapate",
    role: "SDE-1",
    text: "Chose Coding Ninjas for structured, high-quality learning due to lack of support & structure. Top-notch mentors, quick TAs, and a supportive community. Best decision ever.",
    company: "Bombay Softwares",
    logo: "https://files.codingninjas.in/bombay-soft-21971.jpg", 
    imgBg: "bg-blue-200",
    image: "https://files.codingninjas.com/omkar_nt-to-tech-32743.png",
  },
  {
    name: "Durgesh Chaubey",
    role: "SDE - 1",
    text: "Coding Ninjas exceeded my college experience. After the course, I transitioned from a consultant to an SDE-1. Exceptional faculty, including alumni from top institutions like Stanford and IIT.",
    company: "Mastercard",
    logo: "https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg",
    imgBg: "bg-pink-200",
    image: "https://files.codingninjas.com/nt-to-t_durgesh-33026.png",
  },
];

const filters = [
  "Non tech to tech",
  "Service to product",
  "Tier 2/3 colleges",
  "Job Bootcamp",
  "Upskilling Courses",
];

function Section6() {
  return (
    <div className='bg-gray-900 h-fit'>
       <div className="min-h-screen bg-black text-white p-6">
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {filters.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm ${
              index === 0 ? "bg-white text-black" : "bg-gray-800 text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mt-30 mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-gray-900 p-6 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <div
              className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-black ${t.imgBg}`}
            >
              <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-center">{t.name}</h3>
              <p className="text-sm text-center text-gray-400">{t.role}</p>
              <p className="text-sm mt-4">{t.text}</p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Post</p>
                <p className="text-sm">Coding Ninjas</p>
              </div>
              <div>
                {t.logo && (
                  <img src={t.logo} alt="logo" className="w-16 object-contain" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="bg-black text-white px-4 py-10 text-center relative">
     
     

      <h2 className="text-2xl font-semibold mb-4">Trusted by learners</h2>
      <p className="text-gray-300 mb-10">
        1,00,000+ Coding Ninjas alumni from 1,100+ companies & 4,400+ colleges working in top product companies
      </p>

      <div className="flex flex-wrap justify-center gap-10">
       
        <div className="flex items-center gap-3">
          <img src="https://files.codingninjas.com/bxl_facebook-circle-32144.svg" alt="facebook" className="w-6" />
          <div className="text-left">
            <p className="font-semibold">4.9 ⭐</p>
            <p className="text-sm text-gray-400">700+ reviews</p>
          </div>
        </div>

       
        <div className="flex items-center gap-3">
          <img src="https://files.codingninjas.com/flat-color-icons_google-32145.svg" alt="google" className="w-6" />
          <div className="text-left">
            <p className="font-semibold">4.7 ⭐</p>
            <p className="text-sm text-gray-400">2300+ reviews</p>
          </div>
        </div>

       
        <div className="flex items-center gap-3">
          <img src="https://files.codingninjas.com/cnlogo-32874.png" alt="cn logo" className="w-6" />
          <div className="text-left">
            <p className="font-semibold">4.8 ⭐</p>
            <p className="text-sm text-gray-400">Course rating</p>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Section6
