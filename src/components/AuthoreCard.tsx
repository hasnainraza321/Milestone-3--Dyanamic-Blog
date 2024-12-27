import React from 'react'

export default function AuthoreCard() {
    return (
        <div id='about' className='bg-white shadow-lg rounded-lg p-6 mt-12'>
            <div className='flex items-center animation-fadeIn'>


                <img className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
                    src='/images/hasnain.jpg'
                    alt='Authorimage' />

                <div>
                    <h3 className='text-xl font-bold'>Hasnain Raza</h3>
                    <p className='text-slate-500'> Web developer | Social Media Marketer | Lead Genration Expert{""}
                    </p>
                </div>
            </div>



            <p className='mt-4 text-black leading-relaxed'>
                Web Developer in progress with 8 months of learning experience.
                Social Media Marketer and Lead Generation Expert with 2 years of proven
                expertise in driving engagement and generating leads for businesses. Passionate about creating impactful
                online solutions and growing brands effectively.
            </p>
            <div className='mt-4 flex space-x-3'>
                <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                    Twitter
                </a>
                <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                    Linkden
                </a>
                <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                    GitHub
                </a>

            </div>
        </div>
    )
}
