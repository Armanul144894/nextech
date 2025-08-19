"use client"
import React, { useState, useEffect } from 'react';

export default function CategoryDetailsPage({params}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1); // Default to Web Development
  const [activeTab, setActiveTab] = useState('overview');
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    description: ''
  });

  // SVG Icons
  const Code = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16,18 22,12 16,6"></polyline>
      <polyline points="8,6 2,12 8,18"></polyline>
    </svg>
  );

  const Smartphone = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  );

  const Cloud = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  );

  const Shield = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12,22s8-4 8-10V5l-8-3-8,3v7c0,6 8,10 8,10z"></path>
    </svg>
  );

  const Brain = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
    </svg>
  );

  const Palette = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="13.5" cy="6.5" r=".5"></circle>
      <circle cx="17.5" cy="10.5" r=".5"></circle>
      <circle cx="8.5" cy="7.5" r=".5"></circle>
      <circle cx="6.5" cy="12.5" r=".5"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>
  );

  const TrendingUp = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
      <polyline points="17,6 23,6 23,12"></polyline>
    </svg>
  );

  const Database = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  );

  const Users = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17,21v-2a4,4 0 0 0-4-4H5a4,4 0 0 0-4,4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23,21v-2a4,4 0 0 0-3-3.87"></path>
      <path d="M16,3.13a4,4 0 0 1 0,7.75"></path>
    </svg>
  );

  const Globe = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12,2a15.3,15.3 0 0 1 4,10 15.3,15.3 0 0 1 -4,10 15.3,15.3 0 0 1 -4,-10 15.3,15.3 0 0 1 4,-10z"></path>
    </svg>
  );

  const Settings = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );

  const Zap = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
    </svg>
  );

  const ArrowLeft = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12,19 5,12 12,5"></polyline>
    </svg>
  );

  const Star = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
    </svg>
  );

  const CheckCircle = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22,4 12,14.01 9,11.01"></polyline>
    </svg>
  );

const categories = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom web applications, responsive websites, and modern web solutions",
      icon: Code,
      type: "development",
      gradient: "from-blue-500 to-cyan-500",
      projects: 125,
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
      priceRange: "$3,000 - $25,000",
      timeline: "2-12 weeks",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      icon: Smartphone,
      type: "development",
      gradient: "from-green-500 to-teal-500",
      projects: 89,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      priceRange: "$5,000 - $50,000",
      timeline: "4-16 weeks",
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, migration, and DevOps solutions",
      icon: Cloud,
      type: "infrastructure",
      gradient: "from-purple-500 to-pink-500",
      projects: 67,
      technologies: ["AWS", "Azure", "GCP", "Docker"],
      priceRange: "$2,000 - $30,000",
      timeline: "1-8 weeks",
    },
    {
      id: 4,
      title: "Cybersecurity",
      description:
        "Security audits, penetration testing, and compliance solutions",
      icon: Shield,
      type: "security",
      gradient: "from-red-500 to-orange-500",
      projects: 45,
      technologies: ["Penetration Testing", "SOC", "SIEM", "Compliance"],
      priceRange: "$1,500 - $20,000",
      timeline: "1-6 weeks",
    },
    {
      id: 5,
      title: "AI & Machine Learning",
      description:
        "Artificial intelligence solutions, data analytics, and automation",
      icon: Brain,
      type: "ai",
      gradient: "from-indigo-500 to-purple-500",
      projects: 38,
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      priceRange: "$5,000 - $100,000",
      timeline: "6-24 weeks",
    },
    {
      id: 6,
      title: "UI/UX Design",
      description:
        "User interface design, user experience optimization, and prototyping",
      icon: Palette,
      type: "design",
      gradient: "from-pink-500 to-rose-500",
      projects: 156,
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      priceRange: "$1,000 - $15,000",
      timeline: "1-8 weeks",
    },
    {
      id: 7,
      title: "Digital Marketing",
      description: "SEO, social media marketing, PPC campaigns, and analytics",
      icon: TrendingUp,
      type: "marketing",
      gradient: "from-yellow-500 to-orange-500",
      projects: 203,
      technologies: ["Google Ads", "Facebook Ads", "SEO Tools", "Analytics"],
      priceRange: "$1,000 - $10,000/month",
      timeline: "Ongoing",
    },
    {
      id: 8,
      title: "Data Management",
      description: "Database design, data migration, and business intelligence",
      icon: Database,
      type: "data",
      gradient: "from-cyan-500 to-blue-500",
      projects: 72,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      priceRange: "$2,000 - $25,000",
      timeline: "2-10 weeks",
    },
    {
      id: 9,
      title: "Consulting",
      description:
        "Technology consulting, digital transformation, and strategy",
      icon: Users,
      type: "consulting",
      gradient: "from-emerald-500 to-teal-500",
      projects: 94,
      technologies: ["Strategy", "Analysis", "Planning", "Implementation"],
      priceRange: "$150 - $500/hour",
      timeline: "1-12 weeks",
    },
    {
      id: 10,
      title: "E-commerce",
      description:
        "Online stores, payment integration, and marketplace solutions",
      icon: Globe,
      type: "ecommerce",
      gradient: "from-violet-500 to-purple-500",
      projects: 134,
      technologies: ["Shopify", "WooCommerce", "Magento", "Custom"],
      priceRange: "$3,000 - $40,000",
      timeline: "3-16 weeks",
    },
    {
      id: 11,
      title: "DevOps & Automation",
      description: "CI/CD pipelines, infrastructure automation, and monitoring",
      icon: Settings,
      type: "infrastructure",
      gradient: "from-slate-500 to-gray-600",
      projects: 58,
      technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible"],
      priceRange: "$2,500 - $35,000",
      timeline: "2-12 weeks",
    },
    {
      id: 12,
      title: "Performance Optimization",
      description: "Website speed optimization, code review, and system tuning",
      icon: Zap,
      type: "optimization",
      gradient: "from-amber-500 to-yellow-500",
      projects: 76,
      technologies: ["Lighthouse", "GTmetrix", "New Relic", "DataDog"],
      priceRange: "$1,000 - $15,000",
      timeline: "1-6 weeks",
    },
  ];

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      rating: 5,
      completed: "2024",
      technologies: ["React", "Next.js", "Stripe"]
    },
    {
      id: 2,
      title: "Corporate Website Development",
      client: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      rating: 5,
      completed: "2024",
      technologies: ["Vue.js", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Real Estate Portal",
      client: "PropertyPro",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      rating: 4,
      completed: "2023",
      technologies: ["Angular", "PostgreSQL", "AWS"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      rating: 5,
      text: "Exceptional work! The team delivered our project on time and exceeded our expectations. The attention to detail was remarkable.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b766?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "StartupXYZ",
      rating: 5,
      text: "Professional, reliable, and innovative. They transformed our vision into reality with cutting-edge technology.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];


  useEffect(() => {
    const categoryId = 1; 
    console.log(categoryId)
    const category = categories.find(cat => cat?.id === categoryId);
    setSelectedCategory(category);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Quote request submitted successfully!');
    setShowQuoteModal(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      timeline: '',
      description: ''
    });
  };

  if (!selectedCategory) return <div>Loading...</div>;

  const Icon = selectedCategory.icon;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r ${selectedCategory.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${selectedCategory.gradient} mb-6`}>
              <Icon size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {selectedCategory.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              {selectedCategory.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{selectedCategory.projects}+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">4.9/5</div>
                <div className="text-gray-400">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{selectedCategory.timeline}</div>
                <div className="text-gray-400">Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{selectedCategory.priceRange}</div>
                <div className="text-gray-400">Price Range</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-6 border-b border-gray-700">
        <div className="container mx-auto">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'process', 'portfolio', 'testimonials', 'pricing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 transition-colors capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedCategory.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="text-lg font-semibold">{tech}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Deliver */}
            <div>
              <h2 className="text-3xl font-bold mb-8">What We Deliver</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    'Custom solutions tailored to your needs',
                    'Scalable and maintainable code',
                    'Responsive and modern design',
                    'Performance optimization',
                    'Security best practices',
                    'Comprehensive documentation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Benefits</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Increased efficiency and productivity</li>
                    <li>• Enhanced user experience</li>
                    <li>• Reduced operational costs</li>
                    <li>• Competitive advantage</li>
                    <li>• Future-proof solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Development Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Discovery & Planning",
                  description: "We start by understanding your requirements, goals, and constraints to create a detailed project plan.",
                  duration: "1-2 weeks"
                },
                {
                  step: 2,
                  title: "Design & Prototyping",
                  description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product.",
                  duration: "1-3 weeks"
                },
                {
                  step: 3,
                  title: "Development",
                  description: "Building your solution using best practices, clean code, and modern technologies.",
                  duration: "4-12 weeks"
                },
                {
                  step: 4,
                  title: "Testing & Quality Assurance",
                  description: "Rigorous testing to ensure your solution works flawlessly across all devices and scenarios.",
                  duration: "1-2 weeks"
                },
                {
                  step: 5,
                  title: "Deployment & Launch",
                  description: "Deploying your solution to production and ensuring a smooth launch.",
                  duration: "1 week"
                },
                {
                  step: 6,
                  title: "Support & Maintenance",
                  description: "Ongoing support and maintenance to keep your solution running optimally.",
                  duration: "Ongoing"
                }
              ].map((phase, index) => (
                <div key={index} className="flex gap-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${selectedCategory.gradient} flex items-center justify-center font-bold text-white`}>
                    {phase.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                      <span className="text-sm text-gray-400">{phase.duration}</span>
                    </div>
                    <p className="text-gray-300">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.client}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">{project.completed}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$3,000",
                  description: "Perfect for small projects and startups",
                  features: [
                    "Basic functionality",
                    "Responsive design",
                    "3 months support",
                    "Basic SEO optimization"
                  ]
                },
                {
                  name: "Professional",
                  price: "$10,000",
                  description: "Ideal for growing businesses",
                  features: [
                    "Advanced functionality",
                    "Custom design",
                    "6 months support",
                    "Advanced SEO optimization",
                    "Third-party integrations",
                    "Performance optimization"
                  ]
                },
                {
                  name: "Enterprise",
                  price: "$25,000+",
                  description: "For large-scale enterprise solutions",
                  features: [
                    "Complex functionality",
                    "Premium design",
                    "12 months support",
                    "Enterprise SEO",
                    "Custom integrations",
                    "Advanced analytics",
                    "Priority support",
                    "Scalable architecture"
                  ]
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-gray-800 rounded-xl p-6 border ${index === 1 ? 'border-blue-500 relative' : 'border-gray-700'}`}>
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{plan.price}</div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setShowQuoteModal(true)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      index === 1 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105' 
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your goals with our {selectedCategory.title.toLowerCase()} expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowQuoteModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Free Quote
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full border border-gray-700 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Request Quote</h3>
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-30k">$15,000 - $30,000</option>
                  <option value="30k-50k">$30,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-plus-months">6+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                />
              </div>
              
              <button
                onClick={handleFormSubmit}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Submit Quote Request
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}