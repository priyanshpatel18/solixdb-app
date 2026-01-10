"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, Link as LinkIcon, ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";

interface ActivityPost {
  id: string;
  username: string;
  url: string;
  timestamp: string;
  xp: number;
  status: "verified" | "pending";
}

// Mock data - in production, this would come from an API
const mockPosts: ActivityPost[] = [
  {
    id: "1",
    username: "@alice_dev",
    url: "https://x.com/alice_dev/status/123456",
    timestamp: "2 hours ago",
    xp: 10,
    status: "verified",
  },
  {
    id: "2",
    username: "@bob_builds",
    url: "https://x.com/bob_builds/status/123457",
    timestamp: "3 hours ago",
    xp: 15,
    status: "verified",
  },
  {
    id: "3",
    username: "@charlie_code",
    url: "https://x.com/charlie_code/status/123458",
    timestamp: "5 hours ago",
    xp: 10,
    status: "pending",
  },
];

export function HackathonActivity() {
  const [postUrl, setPostUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [posts, setPosts] = useState<ActivityPost[]>(mockPosts);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!postUrl.trim()) {
      toast.error("Please enter a post URL");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newPost: ActivityPost = {
      id: String(posts.length + 1),
      username: "@your_username", // In production, get from auth
      url: postUrl,
      timestamp: "Just now",
      xp: 10,
      status: "pending",
    };

    setPosts([newPost, ...posts]);
    setPostUrl("");
    setIsSubmitting(false);
    toast.success("Post submitted! It will be reviewed by our team.");
  };

  return (
    <section id="activity" className="py-24 sm:py-32 relative overflow-hidden">
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
              Activity Feed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recent X posts and building progress from participants
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Manual Submission Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-cyan-500/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="h-6 w-6 text-cyan-400" />
                  <CardTitle className="text-2xl">Submit Your Post</CardTitle>
                </div>
                <CardDescription>
                  If your post wasn't automatically detected, submit the URL here for manual verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="postUrl">
                      <LinkIcon className="inline h-4 w-4 mr-2" />
                      X Post URL *
                    </Label>
                    <Input
                      id="postUrl"
                      type="url"
                      value={postUrl}
                      onChange={(e) => setPostUrl(e.target.value)}
                      placeholder="https://x.com/username/status/123456"
                      required
                      className="bg-background"
                    />
                    <p className="text-xs text-muted-foreground">
                      Make sure your post tags @solixdb and includes daily progress updates
                    </p>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Post"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-purple-500/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Recent Activity</CardTitle>
                <CardDescription>
                  Latest posts from participants building in public
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-4 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all"
                    >
                      <div className="flex-shrink-0">
                        {post.status === "verified" ? (
                          <CheckCircle2 className="h-6 w-6 text-green-400" />
                        ) : (
                          <Clock className="h-6 w-6 text-yellow-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{post.username}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                          {post.status === "verified" && (
                            <>
                              <span className="text-sm text-muted-foreground">•</span>
                              <span className="text-sm font-semibold text-cyan-400">+{post.xp} XP</span>
                            </>
                          )}
                        </div>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          View Post <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="flex-shrink-0">
                        {post.status === "pending" && (
                          <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                            Pending
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
















