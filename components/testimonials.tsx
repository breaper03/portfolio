"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 4,
      name: "Equipo Gerencial Con Solidez GCS. C.A",
      position: "Front End Developer",
      content: `
        I led the Front-End development of an application designed for the integrated management of orders, collections, payments, credits and administration of currencies and bolivars for third parties. I was in charge of designing and implementing new functionalities to optimize the user experience and improve the interface, using React.js, Bootstrap and Axios for an efficient management of HTTP requests.
        In addition, I restructured the internal architecture of the repository, refactoring and optimizing the Front-End code to improve its performance, readability and maintainability. I was also responsible for the deployment and testing of the new features, ensuring their stability and proper functioning.
      `,
      from: "dic. 2024",
      to: "mar. 2025",
      time: "4 months",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Veflat SAS",
      position: "Full Stack Developer",
      content:
        "Developed a responsive front-end web page to provide cost estimates for companies. I managed the entire setup and optimization of the front-end project, using Next.js and Zod for strong typing, handling requests with Axios, and organizing the project with Clean Architecture principles.",
      rating: 4.5,
      from: "jul. 2024",
      to: "jan. 2025",
      time: "7 months",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Arsys Technology",
      position: "Front End Developer",
      content:
        "I led the complete design and development of an enterprise/commercial chatbot aimed at digitizing customer-company interactions. I utilized technologies such as React Native, Expo, NextJS, TailwindCSS, Zustand, and Zod. Additionally, I played a crucial role in the backend development using NestJS, where I implemented advanced artificial intelligence functionalities including text comprehension, text-to-voice generation, and vice versa to facilitate auditory interactions with clients. Furthermore, I designed a main page for company owners and employees, enabling them to visualize bot activities through graphs. I implemented a recursive tree of options and a comprehensive CRUD system for products, services, and clients, enhancing the operational efficiency of the bot.",
      rating: 5, from: "nov. 2023",
      to: "nov. 2024",
      time: "1+ year",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 1,
      name: "Fintech Wocex",
      position: "Junior Fullstack Developer",
      content:
        "In my initial role in programming and design, I began with no prior experience in an environment utilizing advanced technologies. Assigned tasks included FrontEnd responsibilities, user interface creation and management, BackEnd management using REST API and microservices architecture, data management with MongoDB, and project architecture within the IANDES framework with NRWL NX. Additionally, I utilized GitLab and Git platforms for environment management. This experience showcases my strong problem-solving abilities, proactive approach, and rapid learning skills in adapting to new and complex technologies.",
      rating: 5, from: "mar. 2022",
      to: "mar. 2023",
      time: "1+ year",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const renderStars = (rating: any) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20">
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
            Trayectory
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent className="px-2">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">

                        <div className="text-sm text-muted-foreground font-semibold capitalize w-full">{testimonial.from} - {testimonial.to} · {testimonial.time}</div>
                        <p className="text-sm text-muted-foreground font-semibold capitalize w-fit text-nowrap">Caracas, Venezuela</p>
                      </div>
                      <hr className="my-4" />
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className=" static translate-y-0 mr-2" />
              <CarouselNext className=" static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

