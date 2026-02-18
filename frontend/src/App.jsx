import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BentoGrid, BentoGridItem } from './components/ui/BentoGrid';
import Skeleton from './components/Skeleton';
import NeumorphicCard from './components/NeumorphicCard';
import { cn } from './utils/cn';
import { getPortfolioData } from './api/portfolio';
import {
    Code,
    Database,
    Layout,
    Server,
    Smartphone,
    Zap
} from 'lucide-react';

function App() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        projects: [],
        skills: [],
        experiences: [],
        settings: {}
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const portfolioData = await getPortfolioData();
                setData(portfolioData);
                // Artificial delay for skeleton demonstration or adjust as needed
                setTimeout(() => setLoading(false), 1000);
            } catch (error) {
                console.error("Failed to fetch data", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const { projects, skills, experiences, settings } = data;

    // Map skills to BentoItems
    const skillItems = skills && skills.length > 0 ? skills.map(skill => ({
        title: skill.name,
        description: skill.description || `${skill.category} - ${skill.proficiency}% Proficiency`,
        header: <div className={cn("flex-1 w-full h-full min-h-[6rem] rounded-xl p-4 flex items-center justify-center bg-gradient-to-br", skill.color ? `from-${skill.color}-100 to-${skill.color}-200` : "from-neutral-100 to-neutral-200")}><Code className={cn("w-10 h-10", skill.color ? `text-${skill.color}-500` : "text-neutral-500")} /></div>,
        icon: <Code className="h-4 w-4 text-neutral-500" />,
    })) : [
        {
            title: "No Skills Added",
            description: "Go to Admin Panel to add skills.",
            header: <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 p-4 flex items-center justify-center"><Layout className="w-10 h-10 text-neutral-500" /></div>,
            icon: <Layout className="h-4 w-4 text-neutral-500" />
        }
    ];

    return (
        <div className="bg-black min-h-screen text-white selection:bg-fresh-blue-500 selection:text-white">
            <Navbar />

            <main>
                <Hero />

                {/* Skills Section */}
                <section className="py-20 relative z-20 bg-neutral-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Skills & Expertise
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Technical proficiency and tools I work with.
                        </p>
                    </div>

                    {loading ? (
                        <BentoGrid className="max-w-4xl mx-auto px-4">
                            {[...Array(4)].map((_, i) => (
                                <Skeleton key={i} className={cn("h-full w-full min-h-[6rem] rounded-xl", i === 3 ? "md:col-span-2" : "")} />
                            ))}
                        </BentoGrid>
                    ) : (
                        <BentoGrid className="max-w-4xl mx-auto px-4">
                            {skillItems.map((item, i) => (
                                <BentoGridItem
                                    key={i}
                                    title={item.title}
                                    description={item.description}
                                    header={item.header}
                                    icon={item.icon}
                                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                                />
                            ))}
                        </BentoGrid>
                    )}
                </section>

                {/* Projects Section */}
                <section className="py-20 relative z-20 bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-fresh-blue-400 to-fresh-blue-600">
                            Featured Projects
                        </h2>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            [...Array(3)].map((_, i) => <Skeleton key={i} className="h-64 rounded-xl" />)
                        ) : (
                            projects && projects.length > 0 ? projects.map((project) => (
                                <div key={project.id} className="group relative rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-fresh-blue-500/50 transition-all duration-300">
                                    <div className="h-48 bg-neutral-800 w-full relative overflow-hidden">
                                        {project.image_url ? (
                                            <img src={`http://localhost:8000/storage/${project.image_url}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-neutral-600"><Layout /></div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills && project.skills.map((skill, idx) => (
                                                <span key={idx} className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300 ring-1 ring-neutral-700">{skill.name}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-3 text-center text-neutral-500">No projects found. Add them in the admin panel.</div>
                            )
                        )}
                    </div>
                </section>

                {/* Experience Section */}
                <section className="py-20 relative z-20 bg-neutral-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Professional Journey
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto px-4">
                        {loading ? (
                            [...Array(2)].map((_, i) => <Skeleton key={i} className="h-24 rounded-xl mb-4" />)
                        ) : (
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
                                {experiences && experiences.length > 0 ? experiences.map((exp, i) => (
                                    <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 group-hover:bg-fresh-blue-900/20 group-hover:border-fresh-blue-500/50 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            <Zap className="w-5 h-5 text-neutral-500 group-hover:text-fresh-blue-400" />
                                        </div>
                                        <NeumorphicCard className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-fresh-blue-500/30 transition-all">
                                            <div className="flex flex-col sm:flex-row justify-between mb-1">
                                                <h3 className="font-bold text-lg text-white">{exp.title}</h3>
                                                <span className="text-xs text-fresh-blue-400 font-mono bg-fresh-blue-900/20 px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0">
                                                    {new Date(exp.start_date).getFullYear()} - {exp.end_date ? new Date(exp.end_date).getFullYear() : 'Present'}
                                                </span>
                                            </div>
                                            <div className="text-sm text-neutral-400 font-medium mb-2">{exp.company} | {exp.location}</div>
                                            <p className="text-neutral-500 text-sm">{exp.description}</p>
                                        </NeumorphicCard>
                                    </div>
                                )) : (
                                    <div className="text-center text-neutral-500">No experience added yet.</div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
                {/* Contact Section */}
                <section className="py-20 relative z-20 bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-orange-600">
                            Get In Touch
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Have a project in mind? Let's build something amazing together.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto px-4">
                        <NeumorphicCard className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800">
                            <form 
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    const payload = Object.fromEntries(formData.entries());
                                    
                                    try {
                                        const response = await fetch('http://localhost:8000/api/contact', {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Accept': 'application/json',
                                            },
                                            body: JSON.stringify(payload),
                                        });
                                        
                                        const result = await response.json();
                                        if (result.status === 'success') {
                                            alert(result.message);
                                            e.target.reset();
                                        } else {
                                            alert('Validation failed. Please check your input.');
                                        }
                                    } catch (error) {
                                        console.error('Submission error', error);
                                        alert('Something went wrong. Please try again later.');
                                    }
                                }}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Name</label>
                                        <input 
                                            name="name"
                                            required
                                            type="text" 
                                            placeholder="John Doe" 
                                            className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-fresh-blue-500 focus:ring-1 focus:ring-fresh-blue-500 outline-none transition-all placeholder:text-neutral-700"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Email</label>
                                        <input 
                                            name="email"
                                            required
                                            type="email" 
                                            placeholder="john@example.com" 
                                            className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-fresh-blue-500 focus:ring-1 focus:ring-fresh-blue-500 outline-none transition-all placeholder:text-neutral-700"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-400">Subject</label>
                                    <input 
                                        name="subject"
                                        type="text" 
                                        placeholder="Project Inquiry" 
                                        className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-fresh-blue-500 focus:ring-1 focus:ring-fresh-blue-500 outline-none transition-all placeholder:text-neutral-700"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-400">Message</label>
                                    <textarea 
                                        name="message"
                                        required
                                        rows="4" 
                                        placeholder="Tell me about your project..." 
                                        className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-fresh-blue-500 focus:ring-1 focus:ring-fresh-blue-500 outline-none transition-all placeholder:text-neutral-700"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full py-4 bg-fresh-blue-600 hover:bg-fresh-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-fresh-blue-500/20 active:scale-[0.98]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </NeumorphicCard>
                    </div>
                </section>
            </main>

            <footer className="py-12 bg-neutral-900 border-t border-neutral-800 text-center text-neutral-500">
                <div className="max-w-7xl mx-auto px-4">
                    <p>&copy; {new Date().getFullYear()} DevFolio. Built with React + Laravel API.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
