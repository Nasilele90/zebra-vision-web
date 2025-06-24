
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, DollarSign, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Scholarships = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/lovable-uploads/f3a29055-a928-446c-99f8-7b19266ab632.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Education Scholarships</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Unlock your potential with our comprehensive scholarship programs
          </p>
        </div>
      </section>

      {/* Scholarship Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Available Scholarships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various scholarship programs tailored to different educational levels and career paths
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Undergraduate</Badge>
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Merit Scholarship</CardTitle>
                <CardDescription className="text-lg text-green-600 font-semibold">
                  Up to $25,000/year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Full tuition support for outstanding undergraduate students pursuing degrees in STEM, business, or liberal arts.
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Application Deadline: March 15, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>50 recipients annually</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-100 text-purple-800">Graduate</Badge>
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Excellence Award</CardTitle>
                <CardDescription className="text-lg text-green-600 font-semibold">
                  Up to $40,000/year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive support for graduate students pursuing master's or doctoral degrees in their chosen field.
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Application Deadline: January 31, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>25 recipients annually</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800">International</Badge>
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Global Opportunity</CardTitle>
                <CardDescription className="text-lg text-green-600 font-semibold">
                  Up to $60,000/year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete funding for international students including tuition, living expenses, and travel costs.
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Application Deadline: November 30, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>15 recipients annually</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-orange-100 text-orange-800">Vocational</Badge>
                  <GraduationCap className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Skills Development</CardTitle>
                <CardDescription className="text-lg text-green-600 font-semibold">
                  Up to $15,000
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Support for professional certification programs and vocational training in high-demand industries.
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Rolling Applications</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>100 recipients annually</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-red-100 text-red-800">Need-Based</Badge>
                  <GraduationCap className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Access Scholarship</CardTitle>
                <CardDescription className="text-lg text-green-600 font-semibold">
                  Up to $30,000/year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Financial assistance for students from underserved communities to access quality higher education.
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Application Deadline: April 30, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>75 recipients annually</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-indigo-100 text-indigo-800">Research</Badge>
                  <GraduationCap className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl">Innovation Grant</CardTitle>
                <CardDescription className="text-lg text-green-600 font-semibold">
                  Up to $50,000
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Funding for innovative research projects that address global challenges in education and technology.
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Application Deadline: June 15, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>10 recipients annually</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">General Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Minimum GPA of 3.0 (or equivalent)</li>
                    <li>• Demonstrated financial need or academic merit</li>
                    <li>• Acceptance to accredited educational institution</li>
                    <li>• Commitment to community service</li>
                    <li>• English proficiency (for international applicants)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Completed application form</li>
                    <li>• Official transcripts</li>
                    <li>• Two letters of recommendation</li>
                    <li>• Personal statement/essay</li>
                    <li>• Financial documentation (if applicable)</li>
                  </ul>
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

export default Scholarships;
