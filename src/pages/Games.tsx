import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { games } from "@/data/gamesData";
import { gameThemeConfig } from "@/data/gameThemeConfig";

const Games = () => {
  const [searchParams] = useSearchParams();
  const initialGame = parseInt(searchParams.get("game") || "0");
  const [currentGameIndex, setCurrentGameIndex] = useState(initialGame);

  useEffect(() => {
    const gameParam = searchParams.get("game");
    if (gameParam) {
      setCurrentGameIndex(parseInt(gameParam));
    }
  }, [searchParams]);

  const currentGame = games[currentGameIndex];
  const theme = gameThemeConfig[currentGame.id];

  const nextGame = () => {
    setCurrentGameIndex((prev) => (prev + 1) % games.length);
  };

  const prevGame = () => {
    setCurrentGameIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  return (
    <div className={`flex min-h-screen flex-col ${theme?.bg || ""}`}>
      <Header />

      <main className="flex-1">
        {/* Game Logo Banner with Carousel */}
        
<section className={`relative overflow-hidden border-b ${theme?.accent || "border-border"}`}>
{/* <div 
className="relative bg-cover bg-center"
 style={{ backgroundImage: `url(${currentGame.logo})` }}
 >
 <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
 <div className="container relative mx-auto px-4 py-20">
 <div className="relative mx-auto max-w-3xl">
 <div className="flex min-h-64 items-center justify-center text-center">
 <div className="animate-fade-in">
 <h1 className={`mb-4 text-7xl font-bold drop-shadow-2xl ${theme?.color || "text-primary"}`}>
 {currentGame.title}
 <p className="text-2xl text-foreground drop-shadow-lg">{currentGame.tagline}</p>
 </h1>
 </div>
</div>
 </div>
</div>
 </div> */}
 </section> 
        {/* End of the first section with the logo banner */}



        <section className={`relative overflow-hidden border-b py-8 ${theme?.accent || "border-border"} ${theme?.bg || ""}`}>
          <div className="container relative mx-auto px-4">
            <div className="relative mx-auto max-w-5xl">
              <Card className="overflow-hidden border-2 border-border bg-card shadow-lg">
                <img src={currentGame.logo} alt={`${currentGame.title} Logo`} className="w-full h-auto object-contain" />
              </Card>
              <div className="absolute inset-0 flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-x-16 -translate-y-1/2 rounded-full bg-card/80 backdrop-blur hover:bg-primary hover:text-primary-foreground"
                  onClick={prevGame}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 translate-x-16 -translate-y-1/2 rounded-full bg-card/80 backdrop-blur hover:bg-primary hover:text-primary-foreground"
                  onClick={nextGame}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

              <div className="mt-8 flex justify-center gap-2">
                {games.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentGameIndex ? "w-8 bg-primary" : "bg-muted"
                    }`}
                    onClick={() => setCurrentGameIndex(index)}
                  />
                ))}
              </div>
            </div>
        </section>

        {/* Game Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl space-y-16">
              {/* Description */}
              <div className="animate-fade-in text-center">
                <h2 className="mb-4 text-3xl font-bold text-primary">About the Game</h2>
                <p className="mx-auto max-w-3xl text-lg text-foreground">
                  {currentGame.description}
                </p>
              </div>

              {/* Features and Image - Alternating Layout */}
              {currentGame.features.map((feature, index) => {
                const isEven = index % 2 === 0;
                const featureDetails = currentGame.featureDetails?.[index]; // Get detail for this feature
                return (
                  <div
                    key={index}
                    className="animate-fade-in grid gap-8 md:grid-cols-2 md:items-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image - Left on even, Right on odd */}
                    <Card 
                      className={`overflow-hidden border-2 border-border bg-card shadow-lg transition-all hover:border-primary hover:shadow-xl ${
                        !isEven ? "md:order-2" : ""
                      }`}
                    >
                      <img 
                        src={currentGame.images[index]} 
                        alt={feature}
                        className="aspect-video w-full object-cover"
                      />
                    </Card>

                    {/* Text - Right on even, Left on odd */}
                    <div className={`flex flex-col justify-center ${!isEven ? "md:order-1" : ""}`}>
                      <h3 className="mb-4 text-2xl font-bold text-primary">
                        {feature}
                      </h3>

                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {featureDetails}
                      </p>
                    </div>
                  </div>
                );
              })}

              {currentGame.KeyFeatures && (
                <div className="animate-fade-in text-center mt-12">
                  <h2 className="mb-4 text-2xl font-bold text-primary">Key Features</h2>
                  <ul className="mx-auto inline-block text-left list-disc list-inside text-lg text-muted-foreground">
                    {currentGame.KeyFeatures.map((keyFeature, idx) => (
                      <li key={idx}>{keyFeature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Join Waitlist */}
              <div className="animate-fade-in text-center mt-12">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Join the Waitlist
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Join the Waitlist</DialogTitle>
                      <DialogDescription>
                        Be the first to know when {currentGame.title} is released.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input id="email" type="email" placeholder="email@example.com" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={() => console.log("Waitlist form submitted")}>
                        Submit
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Games;
