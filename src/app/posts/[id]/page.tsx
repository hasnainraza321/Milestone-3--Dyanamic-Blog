'use client';
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthoreCard from '@/components/AuthoreCard';

// Static array of posts
const posts = [
  {
    id: "1",
    title: "Digital Marketing",
    description: "Digital marketing has revolutionized the way businesses connect with their audience, making it an indispensable part of modern business strategies. In a world dominated by technology, digital marketing leverages online platforms to reach customers effectively and efficiently. From search engine optimization (SEO) to social media campaigns, businesses can tailor their strategies to target specific demographics, ensuring higher engagement and conversion rates. The power of digital marketing lies in its ability to provide measurable results, enabling businesses to analyze and optimize their campaigns in real time. Whether through email marketing, pay-per-click advertising, or content creation, digital marketing offers endless possibilities to build brand awareness, drive traffic, and generate leads. As consumer behavior continues to evolve, staying updated with the latest trends in digital marketing is crucial for businesses aiming to remain competitive and achieve long-term success..",
    image: "/images/blog1.png",
  },
  {
    id: "2",
    title: "Genrative AI",
    description: "Generative AI refers to a class of artificial intelligence models capable of producing new, original content such as text, images, music, and even code. Unlike traditional AI models that focus on analysis and prediction, generative AI creates outputs based on patterns it has learned from vast datasets. Tools like OpenAI's GPT-3 can write essays, generate creative content, and assist in problem-solving, while models like DALL·E can generate images from simple text descriptions. This shift in technology opens up endless possibilities for creative industries, where AI is increasingly used for content creation, marketing, design, and entertainment.As generative AI technology continues to evolve, its impact is growing in multiple sectors, including healthcare, education, and entertainment. In industries like marketing, companies are using AI to automate content creation, saving time and reducing costs. For artists, musicians, and writers, AI tools offer new ways to express creativity and explore novel ideas. However, the rise of generative AI also raises ethical concerns, particularly regarding the authenticity of generated content and its potential for misuse. Despite these challenges, generative AI is undoubtedly shaping the future of innovation and creativity, offering new tools for problem-solving and artistic expression.",
    image: "/images/blog2.png",
  },
  {
    id: "3",
    title: "Time Management of Sauces",
    description: "Effective time management is crucial in the kitchen, especially when preparing multiple sauces that require different cooking times and techniques. To manage this efficiently, start by planning the order in which the sauces need to be prepared. Begin with those that take the longest to cook, such as reductions or slow-simmered sauces, allowing them to cook while you work on quicker ones. Always multitask by prepping ingredients for other sauces while one is simmering or resting. Use timers to ensure each sauce gets the attention it needs without overcooking. Keeping your workspace organized and having all the necessary ingredients within reach also helps streamline the process. By maintaining a clear workflow, staying organized, and pacing yourself, you can manage multiple sauces at once, ensuring they all come together perfectly and on time.",
    image: "/images/blog 3.png",
  },
  {
    id: "4",
    title: "Pakistan Cricket History",
    description: "Pakistan's cricket history is rich, vibrant, and filled with significant achievements and memorable moments. Cricket was introduced to Pakistan during the British colonial era, and the country quickly adopted the sport after gaining independence in 1947. Pakistan became a full member of the International Cricket Council (ICC) in 1952, and its national team played its first Test match against India in 1952. Over the years, Pakistan has produced some of the most iconic players in the history of cricket. Legendary figures like Imran Khan, Wasim Akram, Javed Miandad, and Waqar Younis have contributed immensely to Pakistan's success on the global stage. Imran Khan led Pakistan to its only Cricket World Cup victory in 1992, a milestone that remains one of the most celebrated achievements in the country's sporting history. Pakistan has also been known for its unpredictable and exciting cricketing style, often producing thrilling performances against the strongest teams in the world. The team’s fortunes have varied, with periods of dominance and disappointing losses, but it has consistently been one of the top teams in both Test and limited-overs formats. Pakistan’s victory in the 2017 ICC Champions Trophy, defeating India in the final, was another highlight of its cricketing history.Despite political instability and security concerns, which led to a hiatus in international cricket in the country, Pakistan has slowly regained its status as a key player in the cricket world. The Pakistan Super League (PSL), launched in 2016, has also become an important domestic T20 league, contributing to the development of young talent and attracting global stars.Overall, Pakistan's cricket history is a blend of triumph, struggle, and an enduring passion for the game, making it one of the most influential teams in the world of cricket.",
    image: "/images/blog 4.png",
  },
  {
    id: "5",
    title: "Health and Fitness",
    description: "Health and fitness are essential for maintaining a balanced and fulfilling life. Regular exercise, a nutritious diet, and sufficient rest are key factors in achieving and maintaining good physical health. Physical fitness not only enhances strength and stamina but also improves cardiovascular health, flexibility, and mental well-being. A healthy lifestyle helps in preventing chronic diseases like heart disease, diabetes, and obesity, while boosting mood and reducing stress. Mental health is equally important, as a positive mindset, stress management, and emotional well-being contribute to overall happiness. By incorporating fitness routines, healthy eating habits, and self-care practices, individuals can enhance their quality of life, improve longevity, and experience a higher level of energy and vitality.",
    image: "/images/blog5.png",
  },
  {
    id: "6",
    title: "Tree Tales",
    description: "Trees have long been more than just a natural resource or a source of shade. They are symbols of life, growth, and resilience. Throughout human history, trees have been central to our culture, myths, and survival. From towering redwoods in California to the sacred banyan trees of India, trees have not only provided sustenance but also inspired countless stories, traditions, and legends. These tree tales are more than just folklore; they reflect humanity's deep connection with nature, offering insight into the relationship between humans and the natural world. Whether through ancient fables or modern stories, trees have served as silent witnesses to the passage of time, bearing witness to the struggles, triumphs, and lessons of generations.The symbolism of trees is universally recognized across cultures. In many ancient civilizations, trees were revered as sacred beings. In Norse mythology, Yggdrasil, the world tree, was believed to connect the nine worlds, representing the axis of all existence. The Celts held the oak tree in high esteem, associating it with wisdom and strength. In Christianity, the Tree of Life, found in the Garden of Eden, symbolizes eternal life and the connection between humans and the divine. Similarly, in Hinduism, the banyan tree is considered sacred, often depicted as a symbol of immortality and endurance. Across these diverse traditions, trees are not just physical organisms; they are living metaphors, representing the cycle of life, death, and rebirth.",    
    image: "/images/blog6.png",
  },
];

// Component definition
export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;

  // Find the matching post
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 className="text-2xl font-bold text-center mt-10">Post not found</h2>;
  }

  // Render paragraphs from description
  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto mt-4 rounded-md"
        />
      )}
      <div className="mt-6">{renderParagraphs(post.description)}</div>
      <CommentSection postId={post.id} />
      <AuthoreCard />
    </div>
  );
}
