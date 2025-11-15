import React from 'react';

const TestimonialCard = ({ testimonial, author, title, avatar }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-bold text-white text-lg">{author}</h4>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
      <p className="text-gray-300 text-base">"{testimonial}"</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      testimonial: "Working with this team was a game-changer for our brand. Their creativity and attention to detail are unmatched.",
      author: 'John Doe',
      title: 'CEO, Example Inc.',
      avatar: '/images/ape-drink.jpg', // Placeholder image
    },
    {
      id: 2,
      testimonial: "The ads they produced for us exceeded all our expectations. We saw a significant increase in engagement and sales.",
      author: 'Jane Smith',
      title: 'Marketing Director, Another Co.',
      avatar: '/images/burger.jpg', // Placeholder image
    },
    {
      id: 3,
      testimonial: "I was impressed by their professionalism and ability to deliver high-quality content on a tight deadline. Highly recommended.",
      author: 'Sam Wilson',
      title: 'Founder, Startup LLC',
      avatar: '/images/watch.jpg', // Placeholder image
    },
  ];

  return (
    <section className="py-16 testimonials">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="dm-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[var(--main-text-color)] mb-12">
          Testimonials<span className='text-[var(--accent-color)]'>.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
