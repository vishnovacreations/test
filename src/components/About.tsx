import React from 'react'
import { Users, Award, Clock, Headphones, Target, Zap, Shield, Globe, Building2, ExternalLink } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10+', color: 'text-blue-600' },
    { icon: Award, label: 'Client Satisfaction', value: '9.7/10', color: 'text-green-600' },
    { icon: Clock, label: 'Support Available', value: '24/7', color: 'text-purple-600' },
    { icon: Headphones, label: 'Campaigns Completed', value: '20+', color: 'text-orange-600' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Strategic Precision',
      description: 'We approach every project with meticulous planning and strategic thinking to ensure optimal results.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and creative solutions to stay ahead of the competition.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in all our deliverables and client interactions.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We understand diverse markets and cultures to create solutions that work worldwide.'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'VISHNOVA CREATIONS was established with a vision to revolutionize digital marketing and web development.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project, establishing our reputation in the market.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Began integrating AI-powered solutions into our service offerings, staying ahead of industry trends.'
    },
    {
      year: '2023',
      title: 'Team Expansion',
      description: 'Expanded our team with specialized experts in web development, AI, and digital marketing.'
    },
    {
      year: '2024',
      title: 'Award Recognition',
      description: 'Received industry recognition for innovative solutions and exceptional client satisfaction.'
    },
    {
      year: '2024',
      title: 'Strategic Partnership with P Tech Consulting',
      description: 'Formed a strategic partnership with P Tech Consulting, combining our digital marketing expertise with their 15+ years of IT consulting and security solutions experience.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate and expand our services to meet evolving market demands.'
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4 shadow-lg">
            <Award className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm font-bold text-green-700">About VISHNOVA CREATIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            A Multidisciplinary Creative and AI Agency
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            Committed to driving brand growth through strategic innovation, intelligent design, 
            and data-driven solutions that deliver measurable results.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 rounded-xl mb-4 shadow-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className={`text-3xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 shadow-xl border border-blue-100">
            <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
              <Target className="h-6 w-6 text-blue-600 mr-3" />
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              We believe in the power of technology to transform businesses and create meaningful 
              connections between brands and their audiences. Our mission is to deliver innovative 
              solutions that drive growth and success.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              With a focus on precision, innovation, and strategic thinking, we help businesses 
              navigate the digital landscape and achieve their goals through cutting-edge technology 
              and creative solutions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-2xl p-6 shadow-xl border border-purple-100">
            <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
              <Zap className="h-6 w-6 text-purple-600 mr-3" />
              Our Vision
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              To become the leading digital transformation partner for businesses worldwide, 
              recognized for our innovative solutions, exceptional service, and commitment to client success.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We envision a future where every business can leverage the power of AI and digital 
              marketing to reach their full potential and create lasting impact in their industries.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-3">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <div className="text-xl font-bold text-blue-600 mb-1">{item.year}</div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white shadow-lg flex-shrink-0"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnerships & Collaborations */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Building2 className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-700">Strategic Partnership</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Strategic Partnerships</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver comprehensive solutions
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Logo/Icon Section */}
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">P Tech Consulting</h4>
                  <p className="text-blue-600 font-semibold mb-4">Expert IT Consulting & Security Solutions</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    We are proud to collaborate with <strong className="text-gray-900">P Tech Consulting</strong>, a leading IT consulting firm with over <strong>15 years of experience</strong> in providing robust security solutions and expert IT consulting services. Based in Edmonton, Alberta, P Tech Consulting specializes in transforming businesses with cutting-edge technology solutions.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    This strategic partnership combines VISHNOVA CREATIONS' expertise in digital marketing, web development, and AI solutions with P Tech Consulting's extensive knowledge in IT infrastructure, cybersecurity, and enterprise technology consulting. Together, we deliver comprehensive solutions that help small businesses and enterprises succeed in today's digital landscape.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-xl p-4 mb-6 shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Globe className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-gray-600">8656 118 Avenue Northwest #201</div>
                        <div className="text-gray-600">Edmonton, AB, Canada</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Headphones className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Contact</div>
                        <a href="tel:+14034040176" className="text-blue-600 hover:text-blue-700 transition-colors">
                          (403) 404-0176
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                    <div className="text-gray-600 text-sm font-medium">Years of IT Experience</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-1">Security</div>
                    <div className="text-gray-600 text-sm font-medium">Robust Solutions</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-1">Expert</div>
                    <div className="text-gray-600 text-sm font-medium">IT Consulting</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center md:justify-start">
                  <a
                    href="https://ptechconsult.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span>Visit P Tech Consulting</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Why Choose VISHNOVA CREATIONS?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-1">5+</div>
              <div className="text-blue-100 text-sm">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-blue-100 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-blue-100 text-sm">Client Satisfaction</div>
            </div>
          </div>
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto text-sm">
            We combine deep technical expertise with strategic precision and innovative thinking 
            to deliver solutions that drive businesses forward.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
