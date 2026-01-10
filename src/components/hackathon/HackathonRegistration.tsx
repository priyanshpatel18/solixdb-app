"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserPlus, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function HackathonRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    twitterHandle: "",
    githubUsername: "",
    teamName: "",
    projectIdea: "",
    agreedToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, send to API
    console.log("Registration data:", formData);
    
    toast.success("Registration successful! Check your email for confirmation.");
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border-2 border-green-500/50 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl mb-2">Registration Successful!</CardTitle>
                <CardDescription className="text-lg">
                  We've sent a confirmation email to {formData.email}. Start building and earning XP!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      twitterHandle: "",
                      githubUsername: "",
                      teamName: "",
                      projectIdea: "",
                      agreedToTerms: false,
                    });
                  }}
                  className="mt-4"
                >
                  Register Another Participant
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Register Now
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the competition and start building innovative projects on SolixDB
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-2 border-cyan-500/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <UserPlus className="h-6 w-6 text-cyan-400" />
                <CardTitle className="text-2xl">Participant Registration</CardTitle>
              </div>
              <CardDescription>
                Fill out the form below to register for the hackathon. All fields are required unless marked optional.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="twitterHandle">X (Twitter) Handle *</Label>
                    <Input
                      id="twitterHandle"
                      name="twitterHandle"
                      value={formData.twitterHandle}
                      onChange={handleChange}
                      required
                      placeholder="@username"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="githubUsername">GitHub Username *</Label>
                    <Input
                      id="githubUsername"
                      name="githubUsername"
                      value={formData.githubUsername}
                      onChange={handleChange}
                      required
                      placeholder="username"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamName">Team Name (Optional)</Label>
                  <Input
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Team Awesome"
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground">
                    Leave blank if participating individually
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectIdea">Project Idea (Optional)</Label>
                  <Textarea
                    id="projectIdea"
                    name="projectIdea"
                    value={formData.projectIdea}
                    onChange={handleChange}
                    placeholder="Brief description of your project idea..."
                    rows={4}
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground">
                    You can update this later when submitting your project
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreedToTerms"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
                  />
                  <Label htmlFor="agreedToTerms" className="text-sm cursor-pointer">
                    I agree to the{" "}
                    <a href="#rules" className="text-cyan-400 hover:underline">
                      hackathon rules and guidelines
                    </a>{" "}
                    and understand that my project must be open source.
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                >
                  {isSubmitting ? "Registering..." : "Register for Hackathon"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
















