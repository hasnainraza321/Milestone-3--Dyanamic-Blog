import React from 'react';
import BlogCard from '../components/BlogCard';

export default function Mega() {
    const posts = [
        {
            id: "1",
            title: "Digital marketing",
            description: "Dive into the dynamic world of digital marketing, where businesses use online platforms to reach and engage with their audience. Learn the strategies that help brands grow through SEO, social media.",
            date: "2024-12-26",
            imageUrl: "/images/blog1.png"
        },
        {
            id: "2",
            title: "Genrative Ai",
            description: "Explore the rapidly advancing field of Artificial Intelligence and its potential to revolutionize industries. Understand how AI technologies are reshaping everything from business operations to everyday life.",
            date: "2024-12-26",
            imageUrl: "/images/blog2.png"
        },
        {
            id: "3",
            title: "Time management of sauces",
            description: "Discover the importance of time management in cooking and beyond. Learn how efficient time management can enhance productivity and lead to better results, whether in the kitchen or at work..",
            date: "2024-12-26",
            imageUrl: "/images/blog 3.png"
        },
        {
            id: "4",
            title: "Pakistan Cricket History",
            description: "Take a journey through Pakistan's rich cricket history. From iconic players to unforgettable matches, explore the moments that shaped the nation's cricket legacy.",
            date: "2024-12-26",
            imageUrl: "/images/blog 4.png"
        },
        {
            id: "5",
            title: "Health and fitness",
            description: "Uncover essential health and fitness tips to boost your well-being. Whether it's improving your diet, exercise routine, or mental health, these insights will help you lead a healthier life..",
            date: "2024-12-26",
            imageUrl: "/images/blog5.png"
        },
        {
            id: "6",
            title: "Tree Tales",
            description: "Delve into the fascinating world of trees and their vital role in the environment. Learn about their significance, from providing oxygen to preserving biodiversity and combating climate change.",
            date: "2024-12-26",
            imageUrl: "/images/blog6.png"
        },
    ];

    return (
        <div id="blog" className='py-8 bg-gray-100'>
            <h1 className='text-3xl font-bold text-center py-8 text-red-600 animate-color-change'>
                Exploring the world of AI and Technology
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {posts.map((post, index) => (
                    <div className="fade-in" key={post.id}>
                        <div className='blog-card border border-gray-300 rounded-lg p-4 hover:shadow-lg hover:border-blue-500 transition-all'>
                            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
