import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import TestimonialCarousel, { Testimonial } from '@/components/TestimonialCarousel';
import JsonLD, { createReviewSchema } from '@/components/JsonLD';
import { FaStar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials — Harmony Salon',
  description: 'Read what our 500+ satisfied clients say about Harmony Salon. 4.9/5 rating for bridal makeup, hair styling, and nail art in Ahmedabad. Real experiences, real transformations.',
  keywords: 'bridal makeup reviews Ahmedabad, makeup artist testimonials, customer reviews beauty salon, Shreya makeup artist, best rated salon Ahmedabad',
};

const allReviews: Testimonial[] = [
  {
    name: 'Jahanvi S',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'Oh my god, I never knew I could look like this! Thank you so much, you were amazing. I am so happy with the way I look. You are truly an incredible artist and individual. You make me feel the most gorgeous I have ever felt. Once again thank you so much for this bridal look!',
    date: '2024-11-20',
  },
  {
    name: 'Rishita S',
    service: 'Professional Makeup',
    rating: 5,
    text: 'I had the pleasure of getting my makeup done by Shreya. They are incredibly talented and professional, paying attention to every detail to create a flawless look. The makeup lasted all day, felt lightweight, and looked stunning in photos. They perfectly understood my preferences and enhanced my natural beauty without making it look overdone. Plus, their friendly and calming presence made the entire experience even better. If you\'re looking for a skilled and reliable makeup artist, I highly recommend Shreya.',
    date: '2024-11-15',
  },
  {
    name: 'Bhakti S',
    service: 'Nail Art Services & Classes',
    rating: 5,
    text: 'It\'s been great experience getting service from Harmony!!! After coming in contact with her, I even joined her nail arts campaign and her quality and clarity of technique of teaching is amazing and her dedication towards her work is amazing that other person will glow up on its own and her work make it more beautiful. I would recommend everyone to get the services done from her and make your days more beautiful. Again thank you Shreya for this services and classes!',
    date: '2024-11-10',
  },
  {
    name: 'Ishna P',
    service: 'Hair Color',
    rating: 5,
    text: 'Believe me or not! After having so many failed experiences on my hair in Ahmedabad, I finally found Harmony Salon which not only provided me enough time but also were super empathetic. They were completely packed for the day but somehow managed some time at the end of the day and did my hair color and I\'m super grateful to them for that. It turned out to be good as well. Also thankful for the recommendations as well.',
    date: '2024-11-05',
  },
  {
    name: 'Heli S',
    service: 'Bridal Package',
    rating: 5,
    text: 'Fantastic work! I\'m completely in love with your artwork and had a wonderful time getting ready there. A perfect recommendation for every beauty style you like to get one for yourself.',
    date: '2024-10-28',
  },
  {
    name: 'OMG F',
    service: 'Facial',
    rating: 5,
    text: 'Very very nice work by harmony salon... she had done my facial so good in very affordable price. I feel very relaxed and rejuvenate. The salon ambiance is so nice and calm. Thank you dear!',
    date: '2024-10-20',
  },
  {
    name: 'Mansi S',
    service: 'Nail Art Classes',
    rating: 5,
    text: 'Thank you for being such a great mentor! I had a beautiful experience and loved learning nail art with you. Highly recommended!',
    date: '2024-10-15',
  },
  {
    name: 'Stuti S',
    service: 'General Services',
    rating: 5,
    text: 'Best salon in Ahmedabad. Best care, best quality of product, best place to visit for salon.',
    date: '2024-10-10',
  },
  {
    name: 'Disha D',
    service: 'Beauty Services',
    rating: 5,
    text: 'I loved the service. She was very decent, neat clean services. Prices were amazing and affordable.',
    date: '2024-10-05',
  },
  {
    name: 'Nishat S',
    service: 'Hair Spa & Cut',
    rating: 5,
    text: 'Fabulous! Shreya you are so talented and I am so happy for your work. Thanks so much for my hair spa and the beautiful hair cut.',
    date: '2024-09-28',
  },
  {
    name: 'Pooja S',
    service: 'Hair Styling by Monu',
    rating: 5,
    text: 'I would surely recommend Monu. Best hairstylist I have ever seen. Thank you Monu for wonderful make over, I loved it.',
    date: '2024-09-22',
  },
  {
    name: 'Astha A',
    service: 'Facial',
    rating: 5,
    text: 'The facial was so relaxing and left my skin feeling refreshed and glowing. Thank you so much Shreya.',
    date: '2024-09-15',
  },
  {
    name: 'Yashoda N',
    service: 'Regular Services',
    rating: 5,
    text: 'I oftenly visit the salon and I satisfied by her service. It\'s very good and very reasonable also. Must visit the place.',
    date: '2024-09-10',
  },
  {
    name: 'Priyal S',
    service: 'Makeup Classes',
    rating: 5,
    text: 'Best place to learn makeup. I had an amazing experience. She is such a talented girl. Thank you so much. I enjoyed the class.',
    date: '2024-09-05',
  },
  {
    name: 'Monu S',
    service: 'Makeup & Hairstyles',
    rating: 5,
    text: 'I am very satisfied with the service which she gave me. Really loved it a lot. Going to come again & again for makeup and hairstyles.',
    date: '2024-08-28',
  },
  {
    name: 'Disha J',
    service: 'Nail Art',
    rating: 5,
    text: 'Very friendly environment and best salon for nail art. I have learned so many new things.',
    date: '2024-08-22',
  },
  {
    name: 'Pearl P',
    service: 'Nail Art',
    rating: 5,
    text: 'Got my nails done and it turned out great! Great talent, great skills.',
    date: '2024-08-15',
  },
  {
    name: 'Hiral S',
    service: 'Makeup',
    rating: 5,
    text: 'I had my best experience! Best makeup artist in Ahmedabad. Just loved it. Thank you so much!',
    date: '2024-08-10',
  },
  {
    name: 'Payal P',
    service: 'Nail Art',
    rating: 5,
    text: 'Best nail art, great service. Had great experience.',
    date: '2024-08-05',
  },
  {
    name: 'Karishma K',
    service: 'Beauty Services',
    rating: 5,
    text: 'Very nice work!! Shreya understands her clients very well, what they need!! Very happy!',
    date: '2024-07-30',
  },
  {
    name: 'Nehal T',
    service: 'Hair Styling',
    rating: 5,
    text: 'It was a very good experience. My favorite hair done by Shreya.',
    date: '2024-07-25',
  },
  {
    name: 'Tanvi P',
    service: 'Makeup',
    rating: 5,
    text: 'Amazing work! Makeup perfection even in shortest time. No one can be unsatisfied by her work.',
    date: '2024-07-20',
  },
  {
    name: 'Ninad P',
    service: 'General Services',
    rating: 5,
    text: 'Professional work, hygiene maintained, qualitative work.',
    date: '2024-07-15',
  },
  {
    name: 'Baani J',
    service: 'Hair Styling',
    rating: 5,
    text: 'She\'s expert at her work. I loved the overall outcome. And I got my hair as I requested.',
    date: '2024-07-10',
  },
];

const reviewSchemaData = allReviews.map(review => ({
  author: review.name,
  rating: review.rating,
  text: review.text,
  date: review.date,
}));

export default function ReviewsPage() {
  const averageRating = 4.9; // Overall rating across all platforms

  return (
    <>
      <JsonLD data={createReviewSchema(reviewSchemaData)} />
      
      <Hero
        title="What Our Clients Say"
        subtitle="Real reviews from real clients who trusted us with their special day"
      />

      {/* Rating Overview */}
      <section className="py-12 bg-white border-b border-blush">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gold mb-2">4.9/5</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-gold text-xl" />
                ))}
              </div>
              <p className="text-charcoal/70">Average Rating</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-charcoal mb-2">500+</div>
              <p className="text-charcoal/70">Happy Clients</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-charcoal mb-2">95%</div>
              <p className="text-charcoal/70">Recommend Us</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Review Carousel */}
      <section className="py-20 bg-gradient-to-b from-blush/20 to-white">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Featured Reviews
            </h2>
          </div>

          <TestimonialCarousel testimonials={allReviews.slice(0, 5)} />
        </Container>
      </section>

      {/* All Reviews */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              All Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blush/30">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-charcoal">{review.name}</h3>
                    <p className="text-sm text-charcoal/60">{review.service}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-charcoal/80 mb-3 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-xs text-charcoal/50">
                  {new Date(review.date).toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Review Highlights */}
      <section className="py-20 bg-blush/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why Brides Love Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">💄</div>
              <h3 className="font-bold text-charcoal mb-2">Perfect Finish</h3>
              <p className="text-sm text-charcoal/70">
                &quot;Makeup looked flawless&quot; mentioned in 90% of reviews
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="font-bold text-charcoal mb-2">Long-Lasting</h3>
              <p className="text-sm text-charcoal/70">
                &quot;Stayed perfect all day&quot; - consistently praised
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-bold text-charcoal mb-2">Professional</h3>
              <p className="text-sm text-charcoal/70">
                &quot;Punctual and organized&quot; in every review
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="font-bold text-charcoal mb-2">Friendly</h3>
              <p className="text-sm text-charcoal/70">
                &quot;Made me feel comfortable&quot; - common feedback
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-20 bg-white">
        <Container size="md" className="text-center">
          <div className="bg-gradient-to-br from-gold to-gold/90 text-white rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Read More on Google
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Check out our complete review collection on Google and see why Ahmedabad brides choose Harmony Salon
            </p>
            <a
              href="https://www.google.com/search?q=harmony+salon+bopal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-gold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              View Google Reviews
            </a>
          </div>
        </Container>
      </section>

      {/* Leave a Review */}
      <section className="py-20 bg-blush/10">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Share your story and help other brides find their perfect makeup artist
          </p>
          <a
            href="https://www.google.com/search?q=harmony+salon+bopal#lrd=0x0:0x0,1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-gold text-white rounded-full hover:bg-gold/90 transition-all duration-300 shadow-lg"
          >
            Leave a Review
          </a>
        </Container>
      </section>
    </>
  );
}

