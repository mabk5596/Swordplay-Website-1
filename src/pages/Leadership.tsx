import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teamMembers, teamDescriptions } from "@/data/teamData";

type TeamType = "leadership" | "dev" | "art" | "sound" | "production" | "animation" | "marketing";

const teamConfig: Record<TeamType, { color: string; variant: "leadership" | "dev" | "art" | "sound" | "production" | "animation" | "marketing"}> = {
  leadership: { color: "text-team-leadership", variant: "leadership" },
  dev: { color: "text-team-dev", variant: "dev" },
  art: { color: "text-team-art", variant: "art" },
  sound: { color: "text-team-sound", variant: "sound" },
  production: { color: "text-team-production", variant: "production" },
  animation: { color: "text-team-animation", variant: "animation" },
  marketing: { color: "text-team-marketing", variant: "marketing" }
};

const Leadership = () => {
  const [activeTeam, setActiveTeam] = useState<TeamType>("leadership");
  const currentConfig = teamConfig[activeTeam];

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant={currentConfig.variant} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className={`mb-4 animate-fade-in text-5xl font-bold ${currentConfig.color}`}>
              Meet Our Team
            </h1>
            <p className="mx-auto max-w-2xl animate-fade-in text-lg text-muted-foreground">
              {teamDescriptions[activeTeam]}
            </p>
          </div>
        </section>

        {/* Team Tabs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs
              value={activeTeam}
              onValueChange={(value) => setActiveTeam(value as TeamType)}
              className="w-full"
            >
              <TabsList className="mb-12 grid w-full max-w-3xl mx-auto grid-cols-7 bg-secondary">
                <TabsTrigger value="leadership" className="data-[state=active]:bg-team-leadership data-[state=active]:text-background">
                  Leadership 
                </TabsTrigger>
                <TabsTrigger value="dev" className="data-[state=active]:bg-team-dev data-[state=active]:text-background">
                  Dev
                </TabsTrigger>
                <TabsTrigger value="art" className="data-[state=active]:bg-team-art data-[state=active]:text-background">
                  Art 
                </TabsTrigger>
                <TabsTrigger value="sound" className="data-[state=active]:bg-team-sound data-[state=active]:text-background">
                  Sound 
                </TabsTrigger>
                <TabsTrigger value="production" className="data-[state=active]:bg-team-production data-[state=active]:text-background">
                  Production
                </TabsTrigger>
                <TabsTrigger value="animation" className="data-[state=active]:bg-team-animation data-[state=active]:text-background">
                  Animation
                </TabsTrigger>
                <TabsTrigger value="marketing" className="data-[state=active]:bg-team-marketing data-[state=active]:text-background">
                  Marketing
                </TabsTrigger>
              </TabsList>

              {(["leadership", "dev", "art", "sound", "production", "animation", "marketing"] as TeamType[]).map((team) => (
                <TabsContent key={team} value={team} className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers
                      .filter((member) => member.team === team)
                      .map((member) => (
                        <Card
                          key={member.id}
                          className="group overflow-hidden border-2 border-border transition-all hover:scale-105 hover:border-primary hover:shadow-2xl animate-fade-in"
                        >
                          <CardContent className="p-0">
                            <div className="aspect-square bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                              {/* Team member image */}
                              <img
                                src={typeof member.image === "string" ? member.image : (member.image as string)}
                                alt={member.name}
                                className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-105 object-contain bg-background"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                            </div>
                            <div className="p-6">
                              <h3 className={`mb-2 text-xl font-bold transition-colors ${teamConfig[team].color}`}>
                                {member.name}
                              </h3>
                              <p className="mb-3 text-sm font-medium text-muted-foreground">
                                {member.designation}
                              </p>
                              {member.bio && (
                                <p className="text-sm text-foreground leading-relaxed">{member.bio}</p>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Leadership;
