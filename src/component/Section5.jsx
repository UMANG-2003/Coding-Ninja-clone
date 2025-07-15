import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ninjaData = [
  {
    img: "https://files.codingninjas.com/ruchika_citi_bank-32691.png", 
    company: "Citibank",
    background: "Non-CS/IT"
  },
  {
    img: "https://files.codingninjas.com/naveen_optum-32719.png",
    company: "Optum",
    background: "Non-CS/IT"
  },
  {
    img: "https://files.codingninjas.com/sonu_uber-32695.png",
    company: "Uber",
    background: "Tier 2/3 college"
  },
  {
    img: "https://files.codingninjas.com/shourya_microsoft-32693.png",
    company: "Microsoft",
    background: "CS/IT"
  },
  {
    img: "https://files.codingninjas.com/pradeep_persistent-32689.png",
    company: "Persistent",
    background: "Tier 2/3 college"
  },
  {
    img: "https://files.codingninjas.com/tanmay_media-32697.png",
    company: "Media.net",
    background: "Tier 2/3 college"
  }
];

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return <>
    <div className="slider-container px-4 py-8 mt-10  bg-white">
      <h2 className="text-center text-xl font-semibold mb-8">Our Ninjas at top tech companies</h2>
      <Slider {...settings}>
        {ninjaData.map((ninja, index) => (
          <div key={index} className="px-4">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <img
                src={ninja.img}
                alt={ninja.company}
                className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-lg object-cover"
              />
              <img
                src={`https://logo.clearbit.com/${ninja.company.toLowerCase().replace(/ /g, "")}.com`}
                alt={`${ninja.company} logo`}
                className="h-6 mb-2"
                onError={(e) => (e.target.style.display = "none")}
              />
              <p className="text-gray-600">{ninja.background}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      <div>
        <img src="https://files.codingninjas.com/frame-1000003621-1-32257.webp" alt="" />
      </div>
  </>
}

export default AutoPlay;
