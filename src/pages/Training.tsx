
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Camera, Brush, Monitor, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/lovable-uploads/424842a2-c952-4a29-ab82-b29ecc524edd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Design Training Programs</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Master graphic and web design with our comprehensive training courses
          </p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry professionals and gain practical skills that employers value
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Beginner</Badge>
                  <Palette className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Graphic Design Fundamentals</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  12-week comprehensive course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Master the principles of graphic design, typography, color theory, and layout design using Adobe Creative Suite.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What you'll learn:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Adobe Photoshop, Illustrator & InDesign</li>
                    <li>• Brand identity design</li>
                    <li>• Print and digital design</li>
                    <li>• Portfolio development</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-100 text-purple-800">Intermediate</Badge>
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Web Development Bootcamp</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  16-week intensive program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn full-stack web development from HTML/CSS basics to advanced JavaScript frameworks and backend technologies.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What you'll learn:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• HTML, CSS, JavaScript</li>
                    <li>• React, Node.js, MongoDB</li>
                    <li>• Responsive web design</li>
                    <li>• API development</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800">Advanced</Badge>
                  <Monitor className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">UI/UX Design Mastery</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  10-week specialized course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create exceptional user experiences through research, prototyping, and testing using industry-standard tools.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What you'll learn:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• User research & personas</li>
                    <li>• Wireframing & prototyping</li>
                    <li>• Figma & Adobe XD</li>
                    <li>• Usability testing</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-orange-100 text-orange-800">Beginner</Badge>
                  <Camera className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Digital Photography</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  8-week creative course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Master digital photography techniques, composition, and photo editing for professional and personal projects.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What you'll learn:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Camera settings & techniques</li>
                    <li>• Composition & lighting</li>
                    <li>• Lightroom & Photoshop</li>
                    <li>• Portfolio creation</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-red-100 text-red-800">Intermediate</Badge>
                  <Brush className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Digital Illustration</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  10-week artistic program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create stunning digital artwork and illustrations using professional software and advanced techniques.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What you'll learn:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digital drawing fundamentals</li>
                    <li>• Character design</li>
                    <li>• Concept art techniques</li>
                    <li>• Professional workflow</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-indigo-100 text-indigo-800">Advanced</Badge>
                  <Smartphone className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl">Mobile App Design</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  12-week specialized course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Design beautiful and functional mobile applications for iOS and Android platforms with focus on user experience.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What you'll learn:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mobile design principles</li>
                    <li>• iOS & Android guidelines</li>
                    <li>• Interactive prototyping</li>
                    <li>• App store optimization</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Our Training?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Expert Instructors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Learn from industry professionals with years of real-world experience in their respective fields.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Hands-on Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Build a professional portfolio with real projects that demonstrate your skills to potential employers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Flexible Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Choose from evening, weekend, or intensive bootcamp formats to fit your lifestyle and commitments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Career Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get job placement assistance, resume reviews, and interview preparation to launch your design career.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
