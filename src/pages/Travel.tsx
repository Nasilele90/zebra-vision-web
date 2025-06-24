
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Hotel, MapPin, Calendar, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Travel = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/lovable-uploads/53be49fd-cb32-4bf7-83a9-44298692ce9e.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Travel Assistance</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Seamless flight and hotel bookings for your educational journey
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Travel Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all your travel arrangements so you can focus on your educational goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Plane className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Flight Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Best price guarantees on flights worldwide with flexible booking options and 24/7 support for changes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Hotel className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Hotel Reservations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Comfortable accommodations near educational venues with special rates for students and groups.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Local Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Airport transfers, car rentals, and local transportation arrangements for seamless travel experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Event Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Complete event coordination for workshops, conferences, and educational seminars including venue booking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Group Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Specialized group booking services for educational delegations and student groups with bulk discounts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl">Visa Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Complete visa application support and documentation assistance for international travel and study abroad.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/lovable-uploads/7085dec0-f486-4185-9c26-4fa4f8702a6a.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Educational Destinations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover top destinations for conferences, workshops, and educational opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">United States</CardTitle>
                <CardDescription>Silicon Valley, New York, Boston</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Leading tech conferences and university partnerships
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">United Kingdom</CardTitle>
                <CardDescription>London, Cambridge, Edinburgh</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Historic universities and design conferences
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Germany</CardTitle>
                <CardDescription>Berlin, Munich, Hamburg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Engineering excellence and innovation hubs
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Singapore</CardTitle>
                <CardDescription>Marina Bay, Sentosa, CBD</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Asian business conferences and tech summits
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How Our Service Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Submit Request</h3>
                <p className="text-gray-600">
                  Tell us about your travel needs, dates, preferences, and budget requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Get Proposals</h3>
                <p className="text-gray-600">
                  Receive customized travel options with competitive pricing and detailed itineraries.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Enjoy Your Trip</h3>
                <p className="text-gray-600">
                  Travel with confidence knowing we handle all arrangements and provide 24/7 support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Educational Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our travel experts handle all the details while you focus on learning and growing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Contact Travel Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Travel;
