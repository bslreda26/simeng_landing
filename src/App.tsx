import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Leaf,
  TestTube,
  Globe,
  Award,
  Lightbulb,
  Factory,
  Calendar,
  Users,
  CheckCircle,
  Send,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import MethodXImage from "./assets/MethodX.png";
import NanoImage from "./assets/Nano.png";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Create professional email content
      const subject =
        "Research Collaboration Inquiry - SimEng Computational Green Material Design";
      const body = `
Dear SimEng Research Team,

I hope this message finds you well. I am writing to express my interest in potential research collaboration opportunities with SimEng's computational green material design initiatives.

Contact Information:
• Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}

Research Interest:
${formData.message}

I would appreciate the opportunity to discuss potential collaboration areas and learn more about SimEng's current research projects and capabilities.

Thank you for considering my inquiry. I look forward to your response.

Best regards,
${formData.firstName} ${formData.lastName}
${formData.email}

---
This message was sent from the SimEng website contact form.
      `;

      const mailtoLink = `mailto:simulation.engineering.leb@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open default email client
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleProjectExpansion = (projectId: number) => {
    setExpandedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projects = [
    {
      id: 1,
      title:
        "Mechanical Properties of Polymer Nanocomposites via Multi-scale Modeling: Towards Non-classical Properties - NANOMEC",
      description:
        "Marie Curie fellowship - Horizon 2030 (grade 95/100; Cyprus Institute). The main research objective is the application of detailed MD simulations and the development of a novel homogenization scheme parameterized on results from the MD simulations for PNC materials towards generalized media.",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop&crop=center",
      category: "Polymer Nanocomposites",
      duration: "Marie Curie Fellowship",
      team: "Cyprus Institute",
      status: "Completed",
      topics: [
        "MD Simulations",
        "Multi-scale Modeling",
        "Homogenization Scheme",
        "PNC Materials",
      ],
      impact: "Grade 95/100 - Excellence in Research",
    },
    {
      id: 2,
      title:
        "Sustainable nanofibers for sound insulating applications - ECHOLAYER",
      description:
        "RESEARCH IN ENTERPRISES – Cyprus 2023-2025. ECHOLAYER aims to exploit the inherent sound attenuation properties of nanofiber, to investigate, develop and introduce a new line of soundproofing textiles to the market. This objective will focus on selecting appropriate polymer constituents and nano-reinforcements to achieve high sound absorption coefficients across a broad range of frequencies. The geometrical characteristics of the nanofiber networks, such as pore size, thickness and density, will also be optimized to maximize sound attenuation.",
      image:
        "https://images.unsplash.com/photo-1667666895534-c960654a7933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1c3RhaW5hYmxlJTIwbmFub2ZpYmVycyUyMGZvciUyMHNvdW5kJTIwaW5zdWxhdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Sound Insulation",
      duration: "2023-2025",
      team: "Research in Enterprises",
      status: "Completed",
      topics: [
        "Nanofiber Technology",
        "Sound Attenuation",
        "Polymer Composites",
        "Textile Innovation",
      ],
      impact: "High sound absorption coefficients across broad frequency range",
    },
    {
      id: 3,
      title:
        "Circular Recycled Plastic Biochar Products from Agricultural and Livestock Wastes – AgReCOMPOSITES",
      description:
        "CODEVELOP-AG-SH-HE/0823/0140; Cyprus 2023 – 2025. The AgReCOMPOSITES research project focuses on the development of 'green', biochar-based polymer composites, by incorporating biochar-based additives in selected, recyclable virgin thermoplastics and thermoplastic recyclates such as polypropylene (PP) and polyethylene (PE). The proposed 'green' strategy aims in substituting other carbon-based fillers employed towards this purpose that are non-environmentally friendly and of high cost.",
      image:
        "https://plus.unsplash.com/premium_photo-1675116824527-5d6f6259775e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2lyY3VsYXIlMjBSZWN5Y2xlZCUyMFBsYXN0aWMlMjBCaW9jaGFyJTIwUHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      category: "Circular Economy",
      duration: "2023-2025",
      team: "CODEVELOP",
      status: "Completed",
      topics: [
        "Biochar Composites",
        "Recycled Plastics",
        "Green Materials",
        "Agricultural Waste",
      ],
      impact:
        "Sustainable replacement for non-environmentally friendly carbon-based fillers",
    },
    {
      id: 4,
      title:
        "NOVEL NANO-ENHANCED CARBON CAPTURE (CCS) SYSTEMS FOR INDUSTRIAL POST COMBUSTION PROCESSES - Nano-CarbonCapS",
      description:
        "CODEVELOP REPowerEU/1223/0118, Cyprus 2023 – 2025. The scope of Nano-CarbonCapS is to develop a small-scale, portable intensified membrane device that delivers more effective CO2 capture (CCS) compared to incumbent technologies, whose deployment is not confined to large-scale power plants (as incumbent systems), but also in smaller localised sites. The device to be developed in this proposal will be designed for CO2 removal but could equally be used to remove pollutants such as NOx, CO, CH4, H2S and SO2.",
      image:
        "https://images.unsplash.com/photo-1736098687629-a9abff3e03ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Tk9WRUwlMjBOQU5PJTIwRU5IQU5DRUQlMjBDQVJCT058ZW58MHx8MHx8fDA%3D",
      category: "Carbon Capture",
      duration: "2023-2025",
      team: "CODEVELOP REPowerEU",
      status: "Completed",
      topics: [
        "Nano-enhanced CCS",
        "Membrane Technology",
        "CO2 Capture",
        "Pollutant Removal",
      ],
      impact: "Portable CO2 capture device for localized industrial sites",
    },
    {
      id: 5,
      title:
        "Sustainable Bio-Based Leather Alternative for Fashion and Interior Applications – BIOLEA",
      description:
        "CODEVELOP/0824 Cyprus 2025 – 2027. This project aims to develop and optimize a sustainable biopolymer material (BIOLEA) by defining application requirements, assessing environmental impact, and tailoring the formulation at both macro and molecular scales. Through comprehensive material characterization and multiscale predictive modeling, the project ensures that BIOLEA meets mechanical, aesthetic, and durability standards for targeted applications. Finally, pilot testing and market validation are conducted to gather end-user feedback and establish a commercialization strategy aligned with industry and regulatory requirements.",
      image:
        "https://plus.unsplash.com/premium_photo-1674999959686-3a970c0bc216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VzdGFpbmFibGUlMjBCaW8lMjBCYXNlZCUyMExlYXRoZXIlMjBBbHRlcm5hdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "Bio-based Materials",
      duration: "2025-2027",
      team: "CODEVELOP",
      status: "Completed",
      topics: [
        "Biopolymer Development",
        "Multiscale Modeling",
        "Material Characterization",
        "Market Validation",
      ],
      impact:
        "Sustainable leather alternative for fashion and interior applications",
    },
    {
      id: 6,
      title:
        "Effective dynamic mechanical and acoustic properties of metamaterials and bio-inspired materials – METAMAT",
      description:
        "CNRS Lebanon for Young Researcher; BIOMECH, 2017-2019. The objective of the METAMAT project is to design architectural materials and metamaterials with optimal acoustic properties, obtained through a modeling and simulation approach. The scientific challenges that will be addressed concern the impact of viscous damping, large deformations, and internal scale effects on vibration and acoustic properties. The materials and composites designed through a modeling and numerical simulation approach will be produced using additive manufacturing and tested for their acoustic properties.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center",
      category: "Metamaterials",
      duration: "2017-2019",
      team: "CNRS Lebanon",
      status: "Completed",
      topics: [
        "Metamaterials Design",
        "Acoustic Properties",
        "Additive Manufacturing",
        "Numerical Simulation",
      ],
      impact:
        "Optimal acoustic properties through architectural material design",
    },
  ];

  const stats = [
    { number: "10+", label: "Research Partners", icon: Users },
    { number: "✓", label: "Carbon Reduction", icon: Globe },
    { number: "70", label: "Publications", icon: Lightbulb },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl mr-3 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SimEng</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#research"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Research
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Contact
              </a>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              Join Research
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="relative z-10"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Leading Sustainable Materials Research
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Computational
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Green Material Design
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
              >
                We engineer sustainable, nature-inspired materials using
                advanced simulations and in silico design to drive innovation in
                green energy and eco-conscious technologies.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:shadow-xl transition-all duration-300"
                >
                  Explore Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center space-x-8"
              >
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-white shadow-md"
                      ></div>
                    ))}
                  </div>
                  <span className="ml-4 text-sm font-medium text-gray-600">
                    10+ research partners
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-80 rounded-2xl relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1627389955805-5bf2447e9a75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hbm8lMjBtb2RlbGluZyUyMGdyZWVufGVufDB8fDB8fHww"
                      alt="Computational Green Material Design"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget
                          .nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "block";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Leaf className="h-16 w-16 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Images Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div data-aos="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Our Research Visualizations
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advanced Computational Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our cutting-edge computational methodologies and
              nano-scale research visualizations that drive innovation in
              sustainable material design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                  <img
                    src={MethodXImage}
                    alt="MethodX Computational Research"
                    className="w-full h-auto rounded-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Multiscale Analysis
                </h3>
                <p className="text-gray-600">
                  Advanced computational methodology for material property
                  prediction
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-3xl transform -rotate-2"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                  <img
                    src={NanoImage}
                    alt="Nano-scale Research Visualization"
                    className="w-full h-auto rounded-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Nano-scale Analysis
                </h3>
                <p className="text-gray-600">
                  Molecular dynamics and nano-scale material characterization
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div data-aos="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Computational Green Material Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At SimEng, we specialize in computational modeling and in silico
              design of sustainable materials, using advanced simulations to
              engineer nature-inspired solutions for green energy and
              eco-conscious technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TestTube,
                title: "Computational Modeling",
                description:
                  "Advanced molecular dynamics simulations and multi-scale modeling for predicting material properties and behavior.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Leaf,
                title: "Green Material Design",
                description:
                  "In silico design of sustainable, nature-inspired materials for eco-friendly applications and green energy solutions.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Globe,
                title: "Carbon Capture Technologies",
                description:
                  "Computational design of nano-enhanced carbon capture systems for industrial post-combustion processes.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Factory,
                title: "Bio-based Composites",
                description:
                  "Simulation-driven development of biochar-based polymer composites and circular economy materials.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Award,
                title: "Sound Insulation Materials",
                description:
                  "Computational optimization of nanofiber networks for advanced sound attenuation and acoustic properties.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Lightbulb,
                title: "Metamaterials Design",
                description:
                  "Architectural materials and metamaterials with optimal acoustic properties through modeling and simulation.",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div data-aos="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Our Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Research Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our computational green material design projects that
              leverage advanced simulations and in silico modeling to engineer
              sustainable solutions for green energy and eco-conscious
              technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : project.status === "In Production"
                          ? "bg-blue-100 text-blue-800"
                          : project.status === "Patent Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-white/90 rounded-full text-xs font-semibold text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                      {project.title}
                    </h3>
                    <p
                      className={`text-gray-600 mb-6 leading-relaxed ${
                        expandedProjects.includes(project.id)
                          ? ""
                          : "line-clamp-3"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {project.team}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Topics:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleProjectExpansion(project.id)}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {expandedProjects.includes(project.id)
                        ? "Show Less"
                        : "Learn More"}
                      <ArrowRight
                        className={`ml-2 h-4 w-4 transition-transform ${
                          expandedProjects.includes(project.id)
                            ? "rotate-90"
                            : ""
                        }`}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div data-aos="fade-right" className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-white">
                      <Leaf className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">
                        Computational Excellence
                      </h3>
                      <p className="text-lg opacity-90">
                        Advanced Material Science Research
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div data-aos="fade-left">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Our Computational Approach
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are a team of computational material scientists and
                researchers dedicated to in silico design of sustainable green
                materials. With expertise in molecular dynamics simulations and
                multi-scale modeling, we engineer nature-inspired solutions that
                bridge the gap between computational prediction and real-world
                applications.
              </p>
              <div className="grid grid-cols-1 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Research Partners
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div data-aos="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Collaborate
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on sustainable material research? Let's
              discuss how we can work together to create a more sustainable
              future for our planet.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <Mail className="h-8 w-8 text-green-400 mr-6" />
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-gray-300">
                      simulation.engineering.leb@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <Phone className="h-8 w-8 text-green-400 mr-6" />
                  <div>
                    <div className="font-semibold text-lg">Phone</div>
                    <div className="text-gray-300">0096170641508</div>
                  </div>
                </div>
                <div className="flex items-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <MapPin className="h-8 w-8 text-green-400 mr-6" />
                  <div>
                    <div className="font-semibold text-lg">Location</div>
                    <div className="text-gray-300">
                      bchemoun schools street, Almanzal residence building
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              data-aos="fade-left"
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Fill out the form below and we'll open your email client to send
                a message to our research team at SimEng
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </motion.button>
                {submitStatus === "success" && (
                  <div className="mt-4 text-center text-green-400">
                    Message sent successfully!
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mt-4 text-center text-red-400">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl mr-3 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">SimEng</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Pioneering sustainable material innovations for a greener
                future. Transforming industries through research and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Research</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Materials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Patents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Collaborations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Research Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2025 SimEng. All rights reserved. by BSL</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
