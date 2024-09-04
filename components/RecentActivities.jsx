'use client'
import { useState } from 'react';
import Image from 'next/image';

const RecentActivities = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://lh3.googleusercontent.com/pw/AP1GczOd9LB-E27strM5W7B7eChiTKpFMw9mCqVyhAPfL3D4Lk7gyKjpvybIhn53f8FyqVGIkO_Wl8rST6A1OBLFrO6qmvPB0Ww2AimJE-cwm2YQj2vUAdJsJHA5tgrPbZU4i-0nuJ_fFDFJafoGxh1gzjR_=w709-h945-s-no-gm?authuser=0',
        "https://lh3.googleusercontent.com/pw/AP1GczM04VSLMTRrteuIZ-3G4gix7AqcTntI6ST9gYuaar6k3o-DDrFzFCPdoSQpJnJbLnxB9Lre1JCO3Hxrk8SDSClCAUBY71VqnWKmEzON9N3b1h8SzjJFVbX0pt1SH8bo-QGDTCbaaNmBWGvb59ShhXhN=w1020-h768-s-no-gm?authuser=0F",
        'https://lh3.googleusercontent.com/pw/AP1GczPVZP2CSwqrRH8crV0V_eCIoGvCmW8WL0NKHikBCFWF_zYJsgmZUB3zCZzvYBpj8PBVZ7Tz8JJ5-OxoRBLPBL6J1firVD8jd15H4Agb8ySwJtGdw0q_n6wMAX3Z29e9QsCk7UdNYVXHu614qBjUvPDc=w1260-h945-s-no-gm?authuser=0'
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex justify-center bg-white flex-col w-full p-4 lg:p-16">
            <div className="pb-2 lg:pb-16">
                <p className="text-2xl lg:text-4xl">Recent pictures of activities in DeTA</p>
                <p className="text-slate-500 lg:text-2xl">Check out more in the Gallery!</p>
            </div>
            
            <div className="flex flex-col items-center">
                <div className="flex justify-between lg:gap-10 items-center">
                    <button onClick={handlePrev} className="bg-slate-300 h-min p-2 hover:bg-slate-500 duration-150 rounded-full">
                        &lt;
                    </button>

                    <div className="relative w-[250px] md:w-[500px] lg:w-[1000px] h-[200px] md:h-[500px]">
                        {images.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                width={1000}
                                height={500}
                                className={`absolute inset-0 w-full h-full object-cover shadow-lg rounded-lg transition-opacity duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                alt="Activity Image"
                            />
                        ))}
                    </div>

                    <button onClick={handleNext} className="bg-slate-300 h-min p-2 hover:bg-slate-500 duration-150 rounded-full">
                        &gt;
                    </button>
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivities;
