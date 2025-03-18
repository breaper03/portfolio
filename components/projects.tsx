"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import KpexLogo from "@/public/kpex-logo.svg"
import AssistanceControl from "@/public/control-asistencia.png"
import Image from "next/image"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null)
  const [expandedProject, setExpandedProject] = useState<number>(0)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  interface IProject {
    id: number,
    title: string,
    shortDescription: string
    description: string
    image: string
    tags: string[],
    features: string[],
    demoLink: string,
    githubLink: string,
    fullDescription: string
  }

  const projects: IProject[] = [
    {
      id: 1,
      title: "Kpex Project Cost Database",
      shortDescription: "Kpex is an innovative Project Cost Database Platform supported by CAF Corporation.",
      description:
        "Uses Artificial Intelligence to centralize and optimize pricing information on process equipment packages and their associated components.",
      image: KpexLogo,
      tags: ["NextJS", "Tailwind", "SQLite", "Python", "FastAPI"],
      features: [
        "Project management system",
        "Real-time cost tracking",
        "Secure payment processing",
        "Order management dashboard",
        "Customer analytics",
      ],
      demoLink: "https://caf.codew.es",
      githubLink: "#",
      fullDescription:
        "This platform provides businesses with a complete solution can improve efficiency and reduce costs on large projects in any industrial sector. Built with NextJS and FastAPI for high performance and cross-platform compatibility. Features include a responsive design, product catalog with filtering and search capabilities, secure checkout integration, user authentication, and an admin dashboard for managing projects, orders, and customers.",
    },
    {
      id: 2,
      title: "Assistance Management System",
      shortDescription: "A collaborative assistance management application with real-time updates.",
      description: "A collaborative task management application with real-time updates and admin panel.",
      image: AssistanceControl,
      tags: ["NestJS", "TypeScript", "NextJS", "MongoDB", "Tailwind"],
      features: [
        "Real-time updates",
        "Task dependencies",
        "QR and fingerprint registration",
        "Admin panel",
        "User authentication",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This attendance app records student and teacher attendance via QR code scanning or fingerprint registration at the school entrance. It provides real-time updates, allows downloading records, and includes filtering options to analyze attendance by student, classroom, or employee, making it an efficient attendance management tool.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: IProject, index: number) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${expandedProject === project.id ? "ring-2 ring-primary" : ""
                  }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? 0 : project.id)}
              >
                <CardContent className="p-0">
                  <div className="flex items-center p-10 justify-center relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      style={{ objectFit: "contain", padding: 10 }}
                      width={320}
                      height={320}
                      className="aspect-video object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${expandedProject === project.id ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={720}
                className="rounded-md object-contain aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

