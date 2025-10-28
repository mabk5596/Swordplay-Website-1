import { Mail, MapPin, Phone, Twitter, Linkedin, Youtube } from "lucide-react";

const TikTokIcon = () => (
  // TikTok SVG
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M9.5 2v16.5a3.5 3.5 0 1 1-3.5-3.5h2a1.5 1.5 0 1 0 1.5 1.5V2h2a5.5 5.5 0 0 0 5.5 5.5v2A7.5 7.5 0 0 1 13.5 2h-4z"/>
  </svg>
);

const SnapchatIcon = () => (
  // Snapchat SVG
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2c-3.86 0-7 3.14-7 7 0 3.53 2.61 6.43 6 6.93V22h2v-6.07c3.39-.5 6-3.4 6-6.93 0-3.86-3.14-7-7-7z"/>
  </svg>
);

const GmailIcon = () => (
  // Gmail SVG
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.25l7.12 6.36a2 2 0 0 0 2.76 0L20 8.25V18H4z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Contact Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>althenayan.ma@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+966 (54) 103-0093</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Salahuddin A1 Ayyubi Road,Shuran Dist., Madinah Munawwarah 42386</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Follow Us</h3>
            <div className="flex gap-4">
              {/* X / Twitter */}
              <a
                href="https://x.com/swordplaystu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="X / Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/swordplay-studios/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@swordplaystu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@swordplaystudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SwordPlay Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
