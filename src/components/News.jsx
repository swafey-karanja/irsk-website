"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/news');
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        setNewsItems(data);
      } catch (err) {
        setError(err.message);
        // Fallback data matching the image
        setNewsItems([
          {
            id: 1,
            category: 'BRICS BRASIL',
            title: 'Em visitas à Rússia e à China Lula reforça papel do BRICS e defende multilateralismo e nova governança global',
            description: 'Em agendas na Rússia e China, o presidente Luiz Inácio Lula da Silva destacou o BRICS como motor do Sul Global, defendeu ordem multipolar, firmou parcerias estratégicas e promoveu o multilateralismo e o desenvolvimento sustentável',
            imageUrl: '/images/image-2.jpg',
            imageAlt: 'Diplomatic meeting during BRICS'
          },
          {
            id: 2,
            category: 'BRICS BRASIL',
            title: 'MAM, no Rio de Janeiro, será palco da Cúpula de Líderes do BRICS Brasil em julho',
            description: '',
            imageUrl: '/images/image-3.jpg',
            imageAlt: 'MAM building in Rio de Janeiro'
          },
          {
            id: 3,
            category: 'AVISO',
            title: 'Credenciamento para a Reunião de Cúpula do BRICS no Rio de Janeiro',
            description: '',
            imageUrl: '/images/image-4.jpg',
            imageAlt: 'BRICS credentials banner',
            isAlert: true
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-8xl">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
                Latest Content
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div> {/* Added decorative line */}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Left column - Main news */}
            <div className="lg:w-2/3">
                {newsItems.length > 0 && (
                    <div className="bg-white h-full flex flex-col">
                        <div className="h-64 md:h-150 w-full relative flex-shrink-0">
                            <Image 
                                src={newsItems[0].imageUrl} 
                                alt={newsItems[0].imageAlt} 
                                layout="fill" 
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="px-1 py-3 mt-auto">
                            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">
                                {newsItems[0].category}
                            </span>
                            <h2 className="text-xl font-bold mt-2 mb-2 text-gray-900">
                                {newsItems[0].title}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                {newsItems[0].description}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Right column - Secondary news */}
            <div className="lg:w-1/3 flex flex-col gap-6">
            {/* First small card */}
                {newsItems.length > 1 && (
                    <div className="bg-white">
                        <div className="h-65 w-full relative">
                            <Image 
                                src={newsItems[1].imageUrl} 
                                alt={newsItems[1].imageAlt} 
                                layout="fill" 
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-4">
                            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">
                                {newsItems[1].category}
                            </span>
                            <h3 className="text-md font-bold mt-2 text-gray-900">
                                {newsItems[1].title}
                            </h3>
                        </div>
                    </div>
                )}

            {/* Second small card with alert */}
            {newsItems.length > 2 && (
                <div className="bg-white">
                    <div className="h-65 w-full relative">
                        <Image 
                            src={newsItems[2].imageUrl} 
                            alt={newsItems[2].imageAlt} 
                            layout="fill" 
                            objectFit="cover"
                            className="rounded-t-lg"
                        />
                    </div>
                    <div className="p-4">
                        <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">
                            {newsItems[2].category}
                        </span>
                        <h3 className="text-md font-bold mt-2 text-gray-900">
                            {newsItems[2].title}
                        </h3>
                    </div>
                </div>
            )}
            </div>
        </div>
    </div>
  );
}