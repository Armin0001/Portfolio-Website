"use client";

import { type JSX } from "react";
import { Card, CardContent } from "./ui/components/Card";
import { Button } from "./ui/components/Button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

type Project = {
  title: string;
  description: string;
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Task Manager App",
    description: "A full-stack to-do app with authentication, CRUD tasks, and PostgreSQL backend.",
    link: "https://taskmanager2222.vercel.app",
    github: "https://github.com/yourname/taskmanager",
  },
  {
    title: "E-commerce Store",
    description: "Next.js + Stripe-powered e-commerce platform with an admin dashboard.",
    link: "https://store2222.vercel.app",
    github: "https://github.com/yourname/store",
  },
  {
    title: "Blog Platform",
    description: "A blog app with rich text editor, comments, and SEO features.",
    link: "https://blog2222.vercel.app",
    github: "https://github.com/yourname/blog",
  },
];

export default function Portfolio(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex flex-col items-center text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Armin Isakovic
        </motion.h1>
        <p className="text-gray-600 max-w-lg">
          Full Stack Engineer | React, Next.js, TypeScript, Node.js, PostgreSQL, TailwindCSS
        </p>
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your@email.com">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="shadow-md rounded-2xl overflow-hidden">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                  <div className="flex justify-between mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button>Live</Button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">Code</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
