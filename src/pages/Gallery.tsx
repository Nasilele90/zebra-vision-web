
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/f3a29055-a928-446c-99f8-7b19266ab632.png",
      alt: "Graduation celebration with students in caps and gowns",
      category: "Graduations"
    },
    {
      src: "/lovable-uploads/942e4db3-1d26-48d3-8180-9cd6e6d0b85c.png",
      alt: "Diverse group of graduates celebrating together",
      category: "Success Stories"
    },
    {
      src: "/lovable-uploads/4f2ab938-9391-4e91-86c9-46faebf29392.png",
      alt: "Two graduates sharing a joyful moment",
      category: "Achievements"
    },
    {
      src: "/lovable-uploads/f6e8d862-3c63-44c4-82bc-17d2b950efef.png",
      alt: "Happy graduate with diploma and red tassel",
      category: "Milestones"
    },
    {
      src: "/lovable-uploads/424842a2-c952-4a29-ab82-b29ecc524edd.png",
      alt: "Student studying in library with books and laptop",
      category: "Learning"
    },
    {
      src: "/lovable-uploads/372b7db9-cdb5-4ac9-b9e5-1ac9ee0f45a3.png",
      alt: "Urban cityscape with modern buildings",
      category: "Destinations"
    },
    {
      src: "/lovable-uploads/0878acec-45a9-4a50-a5a3-007491028836.png",
      alt: "Beautiful city skyline at night with colorful lights",
      category: "Global Reach"
    },
    {
      src: "/lovable-uploads/53be49fd-cb32-4bf7-83a9-44298692ce9e.png",
      alt: "Modern metropolitan skyline during twilight",
      category: "Opportunities"
    },
    {
      src: "/lovable-uploads/7085dec0-f486-4185-9c26-4fa4f8702a6a.png",
      alt: "Illuminated skyscrapers in business district",
      category: "Innovation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/lovable-uploads/942e4db3-1d26-48d3-8180-9cd6e6d0b85c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Success Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Celebrating achievements and milestones of our global community
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-lg opacity-90">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85</div>
              <div className="text-lg opacity-90">Countries Represented</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Partner Universities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Graduate Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From graduation ceremonies to global destinations, see the journey of our students and scholars
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">From Dreams to Reality</h3>
                  <p className="text-gray-600 mb-4">
                    "Thanks to Zebra Foundation's scholarship program, I was able to pursue my Master's in Computer Science at MIT. 
                    The comprehensive support including travel assistance made my dream possible."
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Maria Santos</strong> - Software Engineer at Google
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Global Design Career</h3>
                  <p className="text-gray-600 mb-4">
                    "The web design training program transformed my career. Within 6 months of completion, 
                    I landed my dream job at a leading design agency in London."
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Ahmed Hassan</strong> - Senior UX Designer
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">International Conference Success</h3>
                  <p className="text-gray-600 mb-4">
                    "Zebra Foundation arranged my travel to present my research at three international conferences. 
                    This exposure led to collaboration opportunities I never imagined."
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Dr. Chen Li</strong> - Research Scientist
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Entrepreneurial Journey</h3>
                  <p className="text-gray-600 mb-4">
                    "The business training and mentorship I received helped me launch my startup. 
                    Today, we're a team of 25 people making a difference in renewable energy."
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Priya Patel</strong> - CEO & Founder
                  </div>
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

export default Gallery;
