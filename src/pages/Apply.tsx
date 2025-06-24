
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle, Clock } from "lucide-react";

const Apply = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/lovable-uploads/f6e8d862-3c63-44c4-82bc-17d2b950efef.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Apply Now</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Take the first step towards transforming your future
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Simple Application Process</h2>
              <p className="text-xl text-gray-600">
                Follow these easy steps to apply for our programs
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Choose Program</h3>
                <p className="text-gray-600 text-sm">Select the program that matches your goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-600 text-sm">Complete the form with required documents</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Review Process</h3>
                <p className="text-gray-600 text-sm">Our team reviews your application</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Started</h3>
                <p className="text-gray-600 text-sm">Begin your transformative journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl">Application Form</CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Please fill out all required fields marked with *
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input id="dateOfBirth" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="br">Brazil</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Label htmlFor="address">Full Address *</Label>
                    <Textarea id="address" placeholder="Enter your complete address" rows={3} />
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Program Selection</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="programType">Program Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scholarship">Education Scholarship</SelectItem>
                          <SelectItem value="training">Design Training</SelectItem>
                          <SelectItem value="travel">Travel Services</SelectItem>
                          <SelectItem value="combined">Combined Program</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="specificProgram">Specific Program *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose specific program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="merit">Merit Scholarship</SelectItem>
                          <SelectItem value="excellence">Excellence Award</SelectItem>
                          <SelectItem value="global">Global Opportunity</SelectItem>
                          <SelectItem value="graphic">Graphic Design</SelectItem>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="ux">UI/UX Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Label htmlFor="startDate">Preferred Start Date *</Label>
                    <Input id="startDate" type="date" />
                  </div>
                </div>

                {/* Educational Background */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Educational Background</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="currentEducation">Current Education Level *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="highschool">High School</SelectItem>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="postgraduate">Post Graduate</SelectItem>
                          <SelectItem value="working">Working Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="gpa">GPA/Grade Average</Label>
                      <Input id="gpa" placeholder="e.g., 3.8/4.0 or 85%" />
                    </div>
                    <div>
                      <Label htmlFor="institution">Current/Previous Institution *</Label>
                      <Input id="institution" placeholder="Name of school/university" />
                    </div>
                    <div>
                      <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                      <Input id="fieldOfStudy" placeholder="Your major/area of study" />
                    </div>
                  </div>
                </div>

                {/* Personal Statement */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Statement</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="motivation">Why are you applying for this program? *</Label>
                      <Textarea 
                        id="motivation" 
                        placeholder="Describe your motivation and goals (minimum 200 words)"
                        rows={6}
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience">Relevant Experience</Label>
                      <Textarea 
                        id="experience" 
                        placeholder="Describe any relevant work experience, projects, or achievements"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="goals">Career Goals</Label>
                      <Textarea 
                        id="goals" 
                        placeholder="What are your short-term and long-term career goals?"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                {/* Document Upload */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Required Documents</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Academic Transcripts *</h4>
                        <p className="text-sm text-gray-600 mb-4">Upload official transcripts (PDF only)</p>
                        <Button variant="outline">Choose File</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors">
                      <CardContent className="p-6 text-center">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Resume/CV *</h4>
                        <p className="text-sm text-gray-600 mb-4">Current resume or CV (PDF only)</p>
                        <Button variant="outline">Choose File</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors">
                      <CardContent className="p-6 text-center">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Letter of Recommendation</h4>
                        <p className="text-sm text-gray-600 mb-4">From teacher or employer (PDF only)</p>
                        <Button variant="outline">Choose File</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Portfolio (if applicable)</h4>
                        <p className="text-sm text-gray-600 mb-4">Design work or projects (ZIP/PDF)</p>
                        <Button variant="outline">Choose File</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Terms & Conditions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the <span className="text-blue-600 hover:underline cursor-pointer">Terms and Conditions</span> and 
                        <span className="text-blue-600 hover:underline cursor-pointer"> Privacy Policy</span> of Zebra Foundation.
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing" className="text-sm leading-relaxed">
                        I agree to receive marketing communications about programs and opportunities that may interest me.
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox id="accuracy" />
                      <Label htmlFor="accuracy" className="text-sm leading-relaxed">
                        I certify that all information provided in this application is true and complete to the best of my knowledge.
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8 border-t">
                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-12 py-4"
                    >
                      Submit Application
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      You will receive a confirmation email within 24 hours of submission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Confirmation</h3>
                  <p className="text-gray-600">
                    You'll receive an email confirmation with your application reference number within 24 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Review Process</h3>
                  <p className="text-gray-600">
                    Our admissions team will review your application within 2-4 weeks and may contact you for additional information.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Badge className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Decision</h3>
                  <p className="text-gray-600">
                    You'll receive our decision via email along with next steps and program details if accepted.
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

export default Apply;
