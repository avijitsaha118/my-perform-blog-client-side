import React from 'react';
import Image from 'next/image';
import { Element } from 'react-scroll';
import img from "../public/images/img.jpg";

const HomePage = () => {
    return (
        <Element id="home" name="home">
            <div>
                <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
                    <div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
                        <Image
                            src={img}
                            alt="heroImage"
                            layout="fill"
                            objectFit="cover"
                            className=" rounded-full cursor-pointer hidden md:block"
                        />
                    </div>
                    <div className="flex flex-col md:ml-20 mx-10 mt-10">
                        <h1 className="font-bold text-7xl text-left mb-5">
                            <span className="text-indigo-800">Welcome!</span>
                        </h1>
                        <p className="text-left font-normal font mb-5 flex-wrap">
                            You are in! Thank you for your visit.
                            I hope you had a smooth onboarding experience.

                            The entire team awaits to meet you.
                            I also hope you like our team work. Besides, your investment will always be useful.
                            Our modern projects can change the world, I believe.
                        </p>
                        <a
                            href="#"
                            className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
                        >
                            See My Resume !
                        </a>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default HomePage;