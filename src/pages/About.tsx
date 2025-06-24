
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with City Background */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lovable-uploads/372b7db9-cdb5-4ac9-b9e5-1ac9ee0f45a3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Zebra Foundation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Building bridges to educational excellence and professional success
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              At Zebra Foundation, we believe that education is the cornerstone of personal and societal growth. 
              Our mission is to break down barriers to quality education and professional development by providing 
              comprehensive support through scholarships, world-class training programs, and seamless travel assistance 
              for educational opportunities worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A world where every individual has access to quality education and opportunities for growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Excellence, integrity, inclusivity, and empowerment guide everything we do.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building a global network of learners, educators, and innovators.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connecting opportunities across continents and cultures.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/0878acec-45a9-4a50-a5a3-007491028836.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="text-lg leading-relaxed space-y-6">
              <p>
                Founded in 2015, Zebra Foundation emerged from a simple yet powerful vision: to create equal 
                opportunities for education and professional development regardless of geographical or economic barriers.
              </p>
              <p>
                What started as a small scholarship program has evolved into a comprehensive platform that has 
                supported thousands of students worldwide. Our unique approach combines financial assistance with 
                practical skills training and logistical support for global educational experiences.
              </p>
              <p>
                Today, we're proud to be a trusted partner for students, educational institutions, and organizations 
                worldwide, facilitating transformative learning experiences that shape the leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Jane Doe</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-500">
                Educational visionary with 20+ years experience in international development
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Smith</h3>
              <p className="text-gray-600 mb-2">Director of Programs</p>
              <p className="text-sm text-gray-500">
                Expert in curriculum development and student success strategies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SJ</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Head of Operations</p>
              <p className="text-sm text-gray-500">
                Global operations specialist ensuring seamless program delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
