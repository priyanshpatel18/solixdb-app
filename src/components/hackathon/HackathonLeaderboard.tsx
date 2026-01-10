"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award, Search, TrendingUp, Flame } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Participant {
  id: string;
  rank: number;
  name: string;
  username: string;
  xp: number;
  streak: number;
  projectName?: string;
  lastActivity: string;
  avatar?: string;
}

// Mock data - in production, this would come from an API
const mockParticipants: Participant[] = [
  {
    id: "1",
    rank: 1,
    name: "Alice Developer",
    username: "@alice_dev",
    xp: 1250,
    streak: 15,
    projectName: "DeFi Analytics Dashboard",
    lastActivity: "2 hours ago",
  },
  {
    id: "2",
    rank: 2,
    name: "Bob Builder",
    username: "@bob_builds",
    xp: 1120,
    streak: 12,
    projectName: "Trading Bot Pro",
    lastActivity: "1 hour ago",
  },
  {
    id: "3",
    rank: 3,
    name: "Charlie Coder",
    username: "@charlie_code",
    xp: 980,
    streak: 10,
    projectName: "ML Price Predictor",
    lastActivity: "30 minutes ago",
  },
  {
    id: "4",
    rank: 4,
    name: "Diana Data",
    username: "@diana_data",
    xp: 850,
    streak: 8,
    projectName: "Whale Tracker",
    lastActivity: "5 hours ago",
  },
  {
    id: "5",
    rank: 5,
    name: "Eve Engineer",
    username: "@eve_eng",
    xp: 720,
    streak: 7,
    projectName: "Protocol Analyzer",
    lastActivity: "1 day ago",
  },
];

const getRankIcon = (rank: number) => {
  if (rank === 1) return Trophy;
  if (rank === 2) return Medal;
  if (rank === 3) return Award;
  return null;
};

const getRankColor = (rank: number) => {
  if (rank === 1) return "from-yellow-400 to-yellow-600 border-yellow-500/50";
  if (rank === 2) return "from-gray-300 to-gray-500 border-gray-400/50";
  if (rank === 3) return "from-orange-400 to-orange-600 border-orange-500/50";
  return "border-cyan-500/30";
};

export function HackathonLeaderboard() {
  const [participants, setParticipants] = useState<Participant[]>(mockParticipants);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredParticipants, setFilteredParticipants] = useState<Participant[]>(mockParticipants);

  // Simulate periodic updates (every 5 minutes)
  useEffect(() => {
    const interval = setInterval(() => {
      // In production, fetch from API
      setParticipants((prev) => {
        // Simulate XP updates
        return prev.map((p) => ({
          ...p,
          xp: p.xp + Math.floor(Math.random() * 10),
        })).sort((a, b) => b.xp - a.xp).map((p, index) => ({
          ...p,
          rank: index + 1,
        }));
      });
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredParticipants(participants);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredParticipants(
        participants.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.username.toLowerCase().includes(query) ||
            p.projectName?.toLowerCase().includes(query)
        )
      );
    }
  }, [searchQuery, participants]);

  return (
    <section id="leaderboard" className="py-24 sm:py-32 relative overflow-hidden bg-muted/30">
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
              Leaderboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time rankings based on XP points and daily streaks
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search participants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/80 backdrop-blur-sm border-2 border-cyan-500/30 focus:border-cyan-500/50"
            />
          </div>
        </motion.div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {filteredParticipants.slice(0, 3).map((participant, index) => {
            const RankIcon = getRankIcon(participant.rank);
            const colorClass = getRankColor(participant.rank);
            const isSecond = participant.rank === 2;
            const isFirst = participant.rank === 1;
            const isThird = participant.rank === 3;

            return (
              <motion.div
                key={participant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${isFirst ? "md:order-2 md:scale-110" : ""} ${isSecond ? "md:order-1" : ""} ${isThird ? "md:order-3" : ""}`}
              >
                <Card className={`h-full border-2 ${colorClass} bg-card/80 backdrop-blur-sm shadow-xl relative overflow-hidden`}>
                  {RankIcon && (
                    <div className="absolute top-4 right-4">
                      <RankIcon className={`h-8 w-8 ${isFirst ? "text-yellow-400" : isSecond ? "text-gray-400" : "text-orange-400"}`} />
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 text-white font-black text-2xl shadow-lg`}>
                      {participant.rank}
                    </div>
                    <CardTitle className="text-xl mb-1">{participant.name}</CardTitle>
                    <div className="text-sm text-muted-foreground mb-3">{participant.username}</div>
                    {participant.projectName && (
                      <div className="text-sm font-semibold text-cyan-400">{participant.projectName}</div>
                    )}
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div>
                      <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {participant.xp} XP
                      </div>
                      <div className="text-xs text-muted-foreground">Total Points</div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Flame className="h-4 w-4 text-orange-400" />
                      <span className="text-sm font-semibold">{participant.streak} day streak</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Last active: {participant.lastActivity}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Rest of Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-2 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-2xl">All Participants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <AnimatePresence>
                  {filteredParticipants.slice(3).map((participant, index) => (
                    <motion.div
                      key={participant.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-4 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-black text-lg">
                        {participant.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-lg">{participant.name}</div>
                        <div className="text-sm text-muted-foreground">{participant.username}</div>
                        {participant.projectName && (
                          <div className="text-sm text-cyan-400 mt-1">{participant.projectName}</div>
                        )}
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-xl font-bold text-cyan-400">{participant.xp} XP</div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Flame className="h-3 w-3 text-orange-400" />
                            {participant.streak} days
                          </div>
                        </div>
                        <TrendingUp className="h-5 w-5 text-green-400" />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
















