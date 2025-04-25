"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Send, Github, Linkedin, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "$ init contact_form.py",
    "> Form initialized successfully.",
    "> Waiting for user input...",
  ])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    setTerminalOutput([...terminalOutput, `$ submit_form --name="${name}" --email="${email}"`, "> Validating input..."])

    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      setTerminalOutput((prev) => [...prev, "> Input validation successful.", "> Sending message via EmailJS..."])

      if (formRef.current) {
        await emailjs.sendForm("service_hfnfrtm", "template_bfhencr", formRef.current, "pYsKCeeLOmSQ8vSHE")
      }

      setTerminalOutput((prev) => [
        ...prev,
        "> Message sent successfully!",
        "> Thank you for your message. I'll get back to you soon.",
        "$ _",
      ])

      setSubmitStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error sending message:", error)

      setTerminalOutput((prev) => [
        ...prev,
        "> Error: Failed to send message.",
        "> Please try again or contact me directly at medo.mody4265@gmail.com",
        "$ _",
      ])

      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-gray-800 p-6 h-full">
              {submitStatus === "success" && (
                <Alert className="mb-6 bg-green-900/20 border-green-800 text-green-100">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your message has been sent successfully. I'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && (
                <Alert className="mb-6 bg-red-900/20 border-red-800 text-red-100">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Failed to send your message. Please try again or email me directly.
                  </AlertDescription>
                </Alert>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="user_name"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-black"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Processing <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-gray-900 border-gray-800 p-6 h-full font-mono text-sm">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="text-gray-400 text-xs ml-2">terminal@data-scientist</div>
              </div>

              <div className="space-y-1 text-gray-300 max-h-[300px] overflow-y-auto">
                {terminalOutput.map((line, index) => (
                  <div key={index} className={line.startsWith("$") ? "text-accent" : ""}>
                    {line}
                    {index === terminalOutput.length - 1 && line.endsWith("_") && (
                      <span className="terminal-cursor"></span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-gray-300 font-medium mb-4">Connect with me:</h4>
                <div className="flex space-x-4">
                  <a
                    href="mailto:medo.mody4265@gmail.com"
                    className="text-gray-400 hover:text-accent transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://github.com/M7mdAboBakr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohamed-abobakr-%F0%9F%87%B5%F0%9F%87%B8-178234282/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
