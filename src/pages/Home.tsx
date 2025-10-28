import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { games } from "@/data/gamesData";

const Home = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const navigate = useNavigate();

  const nextGame = () => {
    setCurrentGameIndex((prev) => (prev + 1) % games.length);
  };

  const prevGame = () => {
    setCurrentGameIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  const handleGameClick = () => {
    navigate(`/games?game=${currentGameIndex}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 animate-fade-in text-5xl font-bold text-primary md:text-6xl">
              Locally made, Globally Played
            </h1>
            <p className="mx-auto max-w-2xl animate-fade-in text-lg text-muted-foreground md:text-xl">
              Building Saudi Arabia's first narrative-driven game studio, dedicated to crafting
              culturally rooted stories and immersive experiences that resonate locally and
              compete globally
            </p>
          </div>
        </section>

        {/* Games Carousel Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-primary">Our Games</h2>

            <div className="relative mx-auto max-w-4xl">
              <Card
                className="group cursor-pointer overflow-hidden border-2 border-border bg-card transition-all hover:border-primary hover:shadow-2xl animate-fade-in"
                onClick={handleGameClick}
              >
                <div
                  className="relative aspect-video bg-cover bg-center p-8"
                  style={{ backgroundImage: `url(${games[currentGameIndex].logo})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/30" />
                  <div className="relative flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-6 text-6xl font-bold text-primary drop-shadow-lg animate-fade-in">
                      {games[currentGameIndex].title}
                    </div>
                    <p className="text-xl text-foreground drop-shadow-md animate-fade-in">
                      {games[currentGameIndex].tagline}
                    </p>
                  </div>
                </div>
              </Card>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-x-16 -translate-y-1/2 rounded-full bg-card/80 backdrop-blur transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                onClick={prevGame}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 translate-x-16 -translate-y-1/2 rounded-full bg-card/80 backdrop-blur transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                onClick={nextGame}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

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
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-t border-border bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-primary">Contact Us</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
