"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Link as LinkIcon, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function HackathonSubmission() {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    githubUrl: "",
    demoUrl: "",
    technologies: "",
    solixdbUsage: "",
    screenshots: [] as File[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Submission data:", formData);
    
    toast.success("Project submitted successfully!");
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        screenshots: Array.from(e.target.files || []),
      }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="submission" className="py-24 sm:py-32 relative overflow-hidden bg-muted/30">
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
                <CardTitle className="text-3xl mb-2">Submission Successful!</CardTitle>
                <CardDescription className="text-lg">
                  Your project has been submitted. You can edit it before the deadline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4"
                >
                  Edit Submission
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="submission" className="py-24 sm:py-32 relative overflow-hidden bg-muted/30">
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
              Submit Your Project
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your innovative project built on SolixDB
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-2 border-cyan-500/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Upload className="h-6 w-6 text-cyan-400" />
                <CardTitle className="text-2xl">Project Submission</CardTitle>
              </div>
              <CardDescription>
                Provide all the details about your project. You can edit this before the deadline.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectName">Project Name *</Label>
                  <Input
                    id="projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                    placeholder="My Awesome Project"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Describe what your project does, its key features, and how it solves a problem..."
                    rows={6}
                    className="bg-background"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="githubUrl">
                      <LinkIcon className="inline h-4 w-4 mr-2" />
                      GitHub Repository URL *
                    </Label>
                    <Input
                      id="githubUrl"
                      name="githubUrl"
                      type="url"
                      value={formData.githubUrl}
                      onChange={handleChange}
                      required
                      placeholder="https://github.com/username/project"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demoUrl">
                      <LinkIcon className="inline h-4 w-4 mr-2" />
                      Live Demo URL (Optional)
                    </Label>
                    <Input
                      id="demoUrl"
                      name="demoUrl"
                      type="url"
                      value={formData.demoUrl}
                      onChange={handleChange}
                      placeholder="https://your-demo.com"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="technologies">Technologies Used *</Label>
                  <Input
                    id="technologies"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                    required
                    placeholder="React, TypeScript, SolixDB API, etc."
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solixdbUsage">How You Used SolixDB *</Label>
                  <Textarea
                    id="solixdbUsage"
                    name="solixdbUsage"
                    value={formData.solixdbUsage}
                    onChange={handleChange}
                    required
                    placeholder="Explain how your project uses SolixDB API, which endpoints you used, and what data you're querying..."
                    rows={4}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="screenshots">
                    <ImageIcon className="inline h-4 w-4 mr-2" />
                    Screenshots/Videos (Optional)
                  </Label>
                  <Input
                    id="screenshots"
                    name="screenshots"
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={handleFileChange}
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground">
                    Upload screenshots or a video walkthrough of your project
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                >
                  {isSubmitting ? "Submitting..." : "Submit Project"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
















