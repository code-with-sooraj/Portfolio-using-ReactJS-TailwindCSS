import React from 'react';
import VIG1 from '../assets/vig1.jpg';
import VIG2 from '../assets/vig2.jpg';
import VIG3 from '../assets/vig4.png';
import VIG4 from '../assets/vig6.png';
import VIG5 from '../assets/vig5.jpg';
import VIG6 from '../assets/vig3.jpg';




function AchieveCard({title,description,imageSrc}){
    return (
        <div className="bg-white border-2 rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className='flex justify-center'>
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-64 h-64 object-cover rounded-sm border-2 border-gray-300 m-4"
                />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
            <p className="text-gray-600 m-4 text-center">{description}</p>
        </div>
    );
}
function Achievements(){
    const Achieve = [
        {
            title: "Mahotsav 2K23 Shayari Competition",
            description: "Secured 3rd",
            imageSrc: VIG1,
        },
        {
            title: "Mahotsav 2K24 Shayari Competition",
            description: "Secured 1st",
            imageSrc: VIG2,
        },
        {
            title: "Vignan Poetry Competition",
            description: "Secured 3rd",
            imageSrc: VIG3,
        },
        {
            title: "GATE 2024",
            description: "Secured 3704",
            imageSrc: VIG5,
        },
        {
            title: "AWS Cloud Practitioner",
            description: "Certified",
            imageSrc: VIG4,
        },
        {
            title: "Google Developer Group Creathon Vijayawada Winner",
            description: "Secured 1st",
            imageSrc: VIG6,
        }
    ]
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Achieve.map((achieve) => (
            <AchieveCard key={achieve.title} {...achieve} />
            ))}
        </div>
    </div>
  );
}

export default Achievements
