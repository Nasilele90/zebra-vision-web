
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer at Microsoft",
      location: "Seattle, USA",
      rating: 5,
      text: "The Zebra Foundation completely transformed my career trajectory. Their scholarship program allowed me to pursue my Master's in Computer Science, and their career support helped me land my dream job at Microsoft. The mentorship and guidance were invaluable.",
      image: "SJ"
    },
    {
      name: "Carlos Rodriguez",
      role: "UX Designer at Adobe",
      location: "Barcelona, Spain",
      rating: 5,
      text: "The design training program exceeded all my expectations. Not only did I learn cutting-edge design skills, but the instructors were industry professionals who provided real-world insights. Within three months of graduating, I was hired by Adobe.",
      image: "CR"
    },
    {
      name: "Aisha Okonkwo",
      role: "Data Scientist at Google",
      location: "London, UK",
      rating: 5,
      text: "From Nigeria to Google - that's my journey with Zebra Foundation. They handled everything: scholarship, visa assistance, travel arrangements, and even helped me find accommodation. Their comprehensive support made the impossible possible.",
      image: "AO"
    },
    {
      name: "Raj Patel",
      role: "Graphic Designer & Entrepreneur",
      location: "Mumbai, India",
      rating: 5,
      text: "The graphic design course was phenomenal! The curriculum was up-to-date with industry standards, and the portfolio development sessions were game-changers. I now run my own design studio with 15 clients and growing.",
      image: "RP"
    },
    {
      name: "Elena Popović",
      role: "Web Developer at Spotify",
      location: "Stockholm, Sweden",
      rating: 5,
      text: "I attended three international conferences thanks to Zebra Foundation's travel assistance program. These events opened doors to networking opportunities that led to my current position at Spotify. Their attention to detail is remarkable.",
      image: "EP"
    },
    {
      name: "James Kim",
      role: "Mobile App Developer",
      location: "Seoul, South Korea",
      rating: 5,
      text: "The mobile app design course was exactly what I needed to transition from traditional software development to mobile. The hands-on projects and industry connections through Zebra Foundation accelerated my career by years.",
      image: "JK"
    },
    {
      name: "Fatima Al-Zahra",
      role: "Digital Marketing Specialist",
      location: "Dubai, UAE",
      rating: 5,
      text: "Not only did I receive a scholarship for my Digital Marketing Master's, but Zebra Foundation also arranged my internship placement in Dubai. Their network of partners worldwide is truly impressive. I'm forever grateful.",
      image: "FZ"
    },
    {
      name: "Marco Silva",
      role: "Creative Director",
      location: "São Paulo, Brazil",
      rating: 5,
      text: "The combination of design training and business mentorship was perfect for my entrepreneurial goals. Zebra Foundation didn't just teach me design - they taught me how to build a sustainable creative business. Today, I lead a team of 20 designers.",
      image: "MS"
    },
    {
      name: "Dr. Yuki Tanaka",
      role: "Research Scientist",
      location: "Tokyo, Japan",
      rating: 5,
      text: "Presenting my research at international conferences organized through Zebra Foundation's travel program led to collaborations with top universities worldwide. Their support for academic excellence is unmatched in the industry.",
      image: "YT"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/lovable-uploads/4f2ab938-9391-4e91-86c9-46faebf29392.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Student Testimonials</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Hear from our successful graduates and program participants worldwide
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {renderStars(5)}
            </div>
            <h2 className="text-3xl font-bold mb-4">4.9/5 Average Rating</h2>
            <p className="text-xl opacity-90">
              Based on 2,500+ reviews from students, professionals, and academic partners worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who have transformed their lives through our programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg relative">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <Quote className="w-8 h-8 text-gray-300 mb-4" />
                  
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Global Impact</h2>
            <p className="text-xl text-gray-600">
              Numbers that tell the story of transformation and success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-lg text-gray-700">Job Placement Rate</div>
              <p className="text-sm text-gray-500 mt-2">Within 6 months of program completion</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">$120K</div>
              <div className="text-lg text-gray-700">Average Salary Increase</div>
              <p className="text-sm text-gray-500 mt-2">Post-program career advancement</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">89</div>
              <div className="text-lg text-gray-700">Countries Served</div>
              <p className="text-sm text-gray-500 mt-2">Global reach and accessibility</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-lg text-gray-700">Satisfaction Rating</div>
              <p className="text-sm text-gray-500 mt-2">From all program participants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers through Zebra Foundation's programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply for Scholarship
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Browse Programs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
