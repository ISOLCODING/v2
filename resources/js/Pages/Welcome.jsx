import { Head } from '@inertiajs/react';
import React from 'react';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import { BentoGrid, BentoGridItem } from '@/Components/ui/BentoGrid';
import {
    Code,
    Database,
    Layout,
    Server,
    Smartphone,
    Zap
} from 'lucide-react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    // Sample data for Bento Grid (Skills/Highlights)
    const items = [
        {
            title: "Frontend Mastery",
            description: "Building responsive, interactive UIs with React and Tailwind CSS.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-4 flex items-center justify-center"><Layout className="w-10 h-10 text-fresh-blue-500" /></div>,
            icon: <Layout className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Backend Architect",
            description: "Designing robust APIs and database structures with Laravel.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-4 flex items-center justify-center"><Server className="w-10 h-10 text-orange-accent-500" /></div>,
            icon: <Database className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Performance First",
            description: "Optimizing every line of code for maximum speed and efficiency.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-4 flex items-center justify-center"><Zap className="w-10 h-10 text-yellow-500" /></div>,
            icon: <Zap className="h-4 w-4 text-neutral-500" />,
        },
    ];

    return (
        <>
            <Head title="Welcome | DevFolio" />

            <div className="bg-black min-h-screen text-white selection:bg-fresh-blue-500 selection:text-white">
                <Navbar />

                <main>
                    <Hero />

                    {/* Bento Grid Section */}
                    <section className="py-20 relative z-20 bg-neutral-950">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                My Expertise
                            </h2>
                            <p className="text-neutral-400 max-w-2xl mx-auto">
                                Combining technical proficiency with creative problem solving.
                            </p>
                        </div>

                        <BentoGrid className="max-w-4xl mx-auto px-4">
                            {items.map((item, i) => (
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
                    </section>
                </main>

                <footer className="py-12 bg-neutral-900 border-t border-neutral-800 text-center text-neutral-500">
                    <div className="max-w-7xl mx-auto px-4">
                        <p>&copy; {new Date().getFullYear()} DevFolio. Built with Laravel v{laravelVersion} (PHP v{phpVersion}).</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
