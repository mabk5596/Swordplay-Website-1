import { Link, useLocation } from "react-router-dom";
import logoDefault from "@/assets/logo-default.png";
import logoArt from "@/assets/logo-art.png";
import logoDev from "@/assets/logo-dev.png";
import logoSound from "@/assets/logo-sound.png";
import logoProduction from "@/assets/logo-production.png";
import logoLeadership from "@/assets/logo-leadership.png"; 
import logoAnimation from "@/assets/logo-animation.png";
import logomarketing from "@/assets/logo-marketing.png";


interface HeaderProps {
  variant?: "default" | "art" | "dev" | "sound" | "production" | "leadership" | "animation"| "marketing";
}

const Header = ({ variant = "default" }: HeaderProps) => {
  const location = useLocation();
  
  const getThemeColor = () => {
    switch (variant) {
      case "art": return "text-team-art";
      case "dev": return "text-team-dev";
      case "sound": return "text-team-sound";
      case "production": return "text-team-production";
      case "leadership": return "text-team-leadership";
      case "marketing": return "text-team-marketing";
      case "animation": return "text-team-animation";
      default: return "text-primary";
    }
  };

  const getLogo = () => {
    switch (variant) {
      case "art": return logoArt;
      case "dev": return logoDev;
      case "sound": return logoSound;
      case "production": return logoProduction;
      case "leadership": return logoLeadership;
      case "marketing": return logomarketing;
      case "animation": return logoAnimation;
      default: return logoDefault;
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <img src={getLogo()} alt="SwordPlay Studios" className="h-10 w-10 object-contain" />
          <span className={`text-xl font-bold ${getThemeColor()}`}>
            SwordPlay Studios
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/games"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/games") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Games
          </Link>
          <Link
            to="/leadership"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/leadership") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Leadership
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
