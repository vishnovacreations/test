import React, { useMemo, useState } from 'react'
import { ExternalLink, Github, Star, Calendar, Users, Award } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects', count: 6 },
    { id: 'web', name: 'Web Development', count: 6 },
  ]

  const projects = [
    {
      id: 1,
      title: 'Healthcare Records Management System',
      description: 'A digital solution for hospitals and clinics to securely store, manage, and access patient records, including history, treatments, prescriptions, lab results, and billing with compliance and privacy.',
      category: 'web',
      year: '2024',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Gemini API'],
      image: 'https://tse4.mm.bing.net/th/id/OIP.xu4aqmSj90bcjv-ZRziElAHaFI?rs=1&pid=ImgDetMain',
      github: '#',
      demo: 'https://healthcare-records-management-system.vercel.app/',
      featured: true,
      client: 'Healthcare Provider',
      duration: '8 weeks',
      team: '3 developers'
    },
    {
      id: 2,
      title: 'Online Event Ticketing Systems',
      description: 'A platform to book event tickets online, choose seats, make payments, and receive e‑tickets. Organizers manage events, track sales, and generate reports.',
      category: 'web',
      year: '2024',
      technologies: ['JavaScript', 'Tailwind CSS', 'React', 'Node.js'],
      image: 'https://media.qrtiger.com/blog/2023/07/qr-codes-in-ticketjpg_800.jpeg',
      github: '#',
      demo: 'https://online-event-ticketing-systems.vercel.app/',
      featured: false,
      client: 'Event Organizer',
      duration: '6 weeks',
      team: '3 developers'
    },
    {
      id: 3,
      title: 'Dumka Indian Cuisine',
      description: 'Authentic Indian restaurant website in Calgary featuring online ordering, menu showcase, and delivery services. Experience the rich flavors of Hyderabadi Dum Biryani and traditional Indian dishes.',
      category: 'web',
      year: '2024',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'E-commerce', 'Online Ordering'],
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      demo: 'https://www.dumkacalgary.ca/',
      featured: true,
      client: 'Dumka Indian Cuisine',
      duration: '6 weeks',
      team: '2 developers'
    },
    {
      id: 4,
      title: 'Smart Emergency Alert System Using Air Tags',
      description: 'A smart alert system leveraging Air Tags for real‑time tracking and emergency notifications with live location updates.',
      category: 'web',
      year: '2024',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'Air Tags API'],
      image: 'https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      demo: 'https://smart-emergency-tag.vercel.app/',
      featured: false,
      client: 'Safety Initiative',
      duration: '5 weeks',
      team: '2 developers'
    },
    {
      id: 5,
      title: 'Sawaii Indian Kitchen & Bar',
      description: 'Authentic Indian & Fusion restaurant website in Edmonton featuring Hyderabadi cuisine, innovative Indian-Mexican fusion dishes, online ordering, and catering services. A unique culinary journey combining tradition with modern twists.',
      category: 'web',
      year: '2024',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Fusion Menu', 'Online Ordering'],
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      demo: 'https://www.sawaiikitchen.com/',
      featured: true,
      client: 'Sawaii Indian Kitchen & Bar',
      duration: '7 weeks',
      team: '3 developers'
    },
    {
      id: 6,
      title: 'FreshMart',
      description: 'An e‑commerce platform for groceries with browsing, cart, secure checkout, order tracking, real‑time inventory, and delivery scheduling.',
      category: 'web',
      year: '2024',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'Vercel'],
      image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      demo: 'https://fresh-mart-swart.vercel.app/',
      featured: true,
      client: 'Retail Startup',
      duration: '7 weeks',
      team: '3 developers'
    },
  ]

  const filteredProjects = useMemo(() => (
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory)
  ), [activeCategory])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
            <Award className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="text-sm font-semibold text-indigo-700">Featured Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Success Stories Portfolio Showcase
          </h2>
          <p className="text-sm text-gray-500 mb-6">{filteredProjects.length} projects</p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real-world products and platforms delivered with performance, accessibility, and clean UX.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
                  {/* Project Image - optimized */}
                  <div className="relative h-56 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                    <OptimizedImage
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      fetchPriority="low"
                      fallback={
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-bold">
                          {project.title.charAt(0)}
                        </div>
                      }
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700">4.8</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-gray-500">
                      <div className="flex items-center mb-1">
                        <Users className="h-3 w-3 mr-1" />
                        {project.team}
                      </div>
                      <div>{project.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Client</div>
                      <div className="text-sm font-medium text-gray-700">{project.client}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex-1 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg text-sm font-medium"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo for ${project.title}`}
                      className="flex-1 flex items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 transition-colors py-2 px-4 rounded-lg text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Explore our complete portfolio with detailed case studies and creative process insights.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
