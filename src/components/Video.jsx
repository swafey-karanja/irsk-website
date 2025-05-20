'use client';

import { Globe, Building, Group, Camera } from 'lucide-react';

export default function Video() {
  const stats = [
    {
      icon: <Globe className="text-blue-500" size={24} />,
      number: '+10 ',
      description: 'Countries represented'
    },
    {
      icon: <Group className="text-blue-500" size={24} />,
      number: '+1500 ',
      description: 'Participants '
    },
    {
      icon: <Camera className="text-blue-500" size={24} />,
      number: '+70',
      description: 'Journalists'
    },
    {
      icon: <Building className="text-blue-500" size={24} />,
      number: '+200',
      description: 'Government participants'
    },
    {
      icon: <Group className="text-blue-500" size={24} />,
      number: '+500',
      description: 'Women leaders'
    }
  ];

  return (
    <div className='pb-16 pt-8 min-h-screen'>
        <div className="w-full max-w-7xl mx-auto h-screen px-4 py-6 flex flex-col items-center">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
                    2024 IRSK Conference Highlights
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div> {/* Added decorative line */}
            </div>

            {/* Video Container */}
            <div className="w-full mb-12 rounded-lg overflow-hidden shadow-lg h-[700px] ">
                <div className="aspect-video">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/zu4YbFjDEpU?list=TLGGushBV1ysBSAyMDA1MjAyNQ" 
                    title="International Relations Society of Kenya"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>

            <div className='mb-8'>
                <p className='text-black text-sm font-sans'>
                    <strong>The International Relations Society of Kenya (IRSK)</strong> held a three-day event in collaboration with the
                    Common Market for Eastern and Southern Africa (COMESA) and the African Centre for the Constructive Resolution
                    of Disputes (ACCORD) based in South Africa.The conference brought together various stakeholders including key 
                    government officials, diplomats, scholars, policymakers, business leaders, media and members of civil society 
                    to dissect the multiple crises and geopolitical divides that are redefining international relations and diplomacy 
                    in the COMESA region.
                </p>
            </div>
        </div>

        {/* Stats Section */}
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 w-[90%]">
                {stats.map((stat, index) => (
                <div
                    key={index}
                    className="w-full p-6 border shadow-lg rounded-lg bg-orange-400 flex flex-col items-center text-center"
                >
                    <div className="mb-4 p-3 bg-gray-100 rounded-full">
                    {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                    </h3>
                    <p className="text-sm text-white">
                    {stat.description}
                    </p>
                </div>
                ))}
            </div>
        </div>

    </div>
  );
}