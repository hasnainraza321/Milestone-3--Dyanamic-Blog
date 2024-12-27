import React from 'react'

export default function Feature() {
    return (
        <div>
            <section className='py-8 bg-neutral-100 mb-40'>
            <h2 className='text-center text-2xl font-bold md:text-5xl animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-10px] hover:to-black text-orange-600'>
    Exploring the Key Features of Our Blog Website
</h2>
<p className='text-center mb-6 mt-4 text-sm text-black sm:text-base md:mb-10 lg:mb-12 animate-fade-in-up delay-100'>
    Hasnain Raza has a unique blend of expertise in both web development and social media marketing, making him a versatile professional in the digital landscape.
</p>
<p className='text-center mb-6 mt-4 text-sm text-black sm:text-base md:mb-10 lg:mb-12 animate-fade-in-up delay-100'>
    With a strong foundation in web development, particularly in HTML, CSS, and Next.js, Hasnain focuses on creating responsive and user-friendly websites that deliver exceptional user experiences.
</p>
<p className='text-center mb-6 mt-4 text-sm text-black sm:text-base md:mb-10 lg:mb-12 animate-fade-in-up delay-100'>
    His knowledge extends to UI/UX design, ensuring that every website not only functions well but also engages visitors with an intuitive interface.
</p>
<p className='text-center mb-6 mt-4 text-sm text-black sm:text-base md:mb-10 lg:mb-12 animate-fade-in-up delay-100'>
    In addition to his web development skills, Hasnain excels in social media marketing, where he leverages platforms like Facebook, Instagram, and LinkedIn to help businesses build their brand presence, engage with customers, and generate leads.
</p>
<p className='text-center mb-6 mt-4 text-sm text-black sm:text-base md:mb-10 lg:mb-12 animate-fade-in-up delay-100'>
    Through strategic content creation, targeted campaigns, and data-driven insights, he is able to drive growth and enhance online visibility for his clients.
</p>
<p className='text-center mb-6 mt-4 text-sm text-black sm:text-base md:mb-10 lg:mb-12 animate-fade-in-up delay-100'>
    By combining his technical skills with his marketing expertise, Hasnain is well-equipped to help businesses thrive in the digital world, from building a strong online foundation to executing impactful marketing strategies.
</p>

                <div className='mx-auto max-w-7xl px-5'>
                    <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
                        Exploring Our Categories
                    </h1>
                </div>
                <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
                    {[
                        "Digital Marketing",
                        "Generative AI",
                        "Time Management of Sauces",
                        "Pakistan Cricket History",
                        "Health and Fitness",
                        "Tree Tales",
                    ].map((category, index) => (
                        <div key={index} className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
                            <p className='text-center text-lg font-semibold'>{category}</p>
                            <div className='absolute indent-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 animate-ease-in-out'></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
