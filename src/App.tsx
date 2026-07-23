import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  ChevronRight, 
  Star, 
  Compass, 
  ParkingCircle, 
  Zap, 
  UtensilsCrossed, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  ShoppingBag, 
  Check, 
  X, 
  Map, 
  Share2, 
  Heart,
  Navigation,
  Sparkles,
  Volume2,
  VolumeX,
  Plus,
  Minus,
  Menu,
  ArrowUp,
  Calendar,
  Users,
  ExternalLink
} from "lucide-react";
import { MENU_COLUMNS, REVIEWS, METRICS, MenuItem } from "./data";

// High-end curated asset images
const HERO_BG = "/src/assets/images/lounge_celebration_1784618866010.jpg";
const BIRYANI_IMG = "/src/assets/images/luxury_biryani_1784552731597.jpg";
const SHAKE_IMG = "/src/assets/images/chocolate_shake_1784552748071.jpg";

// Subtle, high-end Mughal Floral Motif SVG for watermarks (reimagined as dervish-inspired filigree curves)
function MughalFloralMotif({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`text-accent select-none pointer-events-none transition-opacity duration-700 ${className}`} 
      viewBox="0 0 120 120" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Concentric elegant thin swirling lines representing spiritual rotation */}
      <path d="M60 10 A50 50 0 0 1 110 60" strokeDasharray="2, 4" className="stroke-accent/30" />
      <path d="M110 60 A50 50 0 0 1 60 110" className="stroke-accent/15" />
      <path d="M60 110 A50 50 0 0 1 10 60" strokeDasharray="2, 4" className="stroke-accent/30" />
      <path d="M10 60 A50 50 0 0 1 60 10" className="stroke-accent/15" />

      {/* Stylized flowing dervish sleeve/skirt curves */}
      <path d="M60 30 C75 30, 85 40, 85 55 C85 75, 55 85, 35 85" strokeWidth="1.2" className="stroke-accent/50" />
      <path d="M60 30 C45 30, 35 40, 35 55 C35 75, 65 85, 85 85" strokeWidth="0.8" className="stroke-accent/30" />
      
      {/* Central elegant miniature dervish spiral core */}
      <path d="M50 60 C50 50, 70 50, 70 60 C70 70, 55 72, 55 60 C55 52, 65 52, 65 60" strokeWidth="1" className="stroke-accent/60" />
      
      {/* Minimal stars */}
      <circle cx="60" cy="10" r="1.5" fill="currentColor" className="text-accent/40" />
      <circle cx="110" cy="60" r="1.5" fill="currentColor" className="text-accent/40" />
      <circle cx="60" cy="110" r="1.5" fill="currentColor" className="text-accent/40" />
      <circle cx="10" cy="60" r="1.5" fill="currentColor" className="text-accent/40" />
    </svg>
  );
}

// Crisp, high-fidelity vector icon of a dinner plate with a fork and spoon
export function SufiDervishIcon({ className = "", opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ opacity }}
    >
      {/* Central Dinner Plate */}
      <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" fill="none" />
      <circle cx="50" cy="50" r="11" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="0.8" />

      {/* Fork on the left */}
      <path 
        d="M12 26 L12 37 C12 41 14 43 15 45 L15 73 C15 75 16 76 17 76 C18 76 19 75 19 73 L19 45 C20 43 22 41 22 37 L22 26" 
        stroke="currentColor" 
        strokeWidth="1.4" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path d="M15.3 26 L15.3 36 M18.7 26 L18.7 36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* Spoon on the right */}
      <ellipse cx="84" cy="34" rx="5.5" ry="9" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.18" />
      <path d="M84 43 L84 73 C84 75 83 76 82 76 C81 76 80 75 80 73 L80 43" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// High-fidelity vector replica of the circular orange Fine Dine Restaurant logo emblem
export function SufiLogoEmblem({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Glow Ring */}
      <circle cx="60" cy="60" r="58" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.4" />
      
      {/* Main Outer Circle Rim (Gold) */}
      <circle cx="60" cy="60" r="55" fill="#111614" stroke="#D4AF37" strokeWidth="1.5" />
      
      {/* Inner Vibrant Orange Badge Backdrop */}
      <circle cx="60" cy="60" r="47" fill="#E58026" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="60" cy="60" r="43" fill="none" stroke="#000000" strokeWidth="1.5" strokeOpacity="0.8" />

      {/* Decorative Stars in the ring */}
      <g fill="#D4AF37">
        <path d="M21 44 L22.5 46.5 L25 47 L23 49 L23.5 51.5 L21 50 L18.5 51.5 L19 49 L17 47 L19.5 46.5 Z" transform="scale(0.8) translate(5, 5)" />
        <path d="M16 54 L17.5 56.5 L20 57 L18 59 L18.5 61.5 L16 60 L13.5 61.5 L14 59 L12 57 L14.5 56.5 Z" transform="scale(0.8) translate(2, 5)" />
        <path d="M20 64 L21.5 66.5 L24 67 L22 69 L22.5 71.5 L20 70 L17.5 71.5 L18 69 L16 67 L18.5 66.5 Z" transform="scale(0.8) translate(5, 5)" />
      </g>
      
      <g fill="#D4AF37" transform="translate(76, 0)">
        <path d="M21 44 L22.5 46.5 L25 47 L23 49 L23.5 51.5 L21 50 L18.5 51.5 L19 49 L17 47 L19.5 46.5 Z" transform="scale(0.8) translate(5, 5)" />
        <path d="M16 54 L17.5 56.5 L20 57 L18 59 L18.5 61.5 L16 60 L13.5 61.5 L14 59 L12 57 L14.5 56.5 Z" transform="scale(0.8) translate(2, 5)" />
        <path d="M20 64 L21.5 66.5 L24 67 L22 69 L22.5 71.5 L20 70 L17.5 71.5 L18 69 L16 67 L18.5 66.5 Z" transform="scale(0.8) translate(5, 5)" />
      </g>

      {/* Text along circular paths */}
      <defs>
        <path id="topTextPath" d="M17 60 A43 43 0 0 1 103 60" />
        <path id="bottomTextPath" d="M103 60 A43 43 0 0 1 17 60" />
      </defs>

      <text fontFamily="'Inter', sans-serif" fontSize="7.5" fontWeight="bold" fill="#0E1512" letterSpacing="1.8">
        <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
          FINE DINE
        </textPath>
      </text>

      <text fontFamily="'Inter', sans-serif" fontSize="5.5" fontWeight="bold" fill="#0E1512" letterSpacing="0.4">
        <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
          RESTAURANT & COFFEE SHOP
        </textPath>
      </text>

      {/* Central Plate, Fork & Spoon Motif */}
      <g stroke="#0E1512" strokeLinecap="round" strokeLinejoin="round">
        {/* Plate */}
        <circle cx="60" cy="60" r="18" stroke="#0E1512" strokeWidth="1.8" fill="none" />
        <circle cx="60" cy="60" r="13.5" stroke="#0E1512" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />
        <circle cx="60" cy="60" r="8.5" fill="#0E1512" fillOpacity="0.2" stroke="#0E1512" strokeWidth="0.6" />

        {/* Left Fork */}
        <path 
          d="M32 42 L32 50 C32 53 34 55 35 56.5 L35 77 C35 78.5 36 79 36.5 79 C37 79 38 78.5 38 77 L38 56.5 C39 55 41 53 41 50 L41 42" 
          stroke="#0E1512" 
          strokeWidth="1.3" 
          fill="none" 
        />
        <path d="M35 42 L35 49 M38 42 L38 49" stroke="#0E1512" strokeWidth="1.1" />

        {/* Right Spoon */}
        <ellipse cx="85" cy="48" rx="4.5" ry="7.5" fill="#0E1512" fillOpacity="0.2" stroke="#0E1512" strokeWidth="1.3" />
        <path d="M85 55.5 L85 77 C85 78.5 84 79 83.5 79 C83 79 82 78.5 82 77 L82 55.5" stroke="#0E1512" strokeWidth="1.3" fill="none" />
      </g>
    </svg>
  );
}

// Mughal pointed Jali-style arch divider
function MughalArchDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-12 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-accent/30 to-accent/60" />
      <svg className="w-24 h-12 text-accent/80 shrink-0" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.2">
        {/* Mihrab / Mughal pointed arch shape */}
        <path d="M10 55 C20 55, 30 50, 40 40 C48 32, 54 18, 60 5 C66 18, 72 32, 80 40 C90 50, 100 55, 110 55" strokeLinecap="round" />
        <path d="M20 55 C28 55, 36 51, 44 43 C50 36, 55 24, 60 12 C65 24, 70 36, 76 43 C84 51, 92 55, 100 55" strokeLinecap="round" strokeDasharray="1, 3" />
        {/* Centered peak star */}
        <circle cx="60" cy="5" r="1.5" fill="currentColor" />
        <path d="M60 20 L62 25 L67 25 L63 28 L65 33 L60 30 L55 33 L57 28 L53 25 L58 25 Z" fill="currentColor" fillOpacity="0.15" />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-accent/30 to-accent/60" />
    </div>
  );
}

// Elegant floral corner frames inspired by pietra dura gold filigree corners
function FloralCornerFrame({ className = "text-accent/35" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-10 ${className}`}>
      {/* Top Left */}
      <svg className="absolute top-2 left-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M2 10 C2 4, 4 2, 10 2" strokeLinecap="round" />
        <path d="M2 2 L7 2 M2 2 L2 7" strokeLinecap="round" />
        <circle cx="4" cy="4" r="1" fill="currentColor" />
      </svg>
      {/* Top Right */}
      <svg className="absolute top-2 right-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M22 10 C22 4, 20 2, 14 2" strokeLinecap="round" />
        <path d="M22 2 L17 2 M22 2 L22 7" strokeLinecap="round" />
        <circle cx="20" cy="4" r="1" fill="currentColor" />
      </svg>
      {/* Bottom Left */}
      <svg className="absolute bottom-2 left-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M2 14 C2 20, 4 22, 10 22" strokeLinecap="round" />
        <path d="M2 22 L7 22 M2 22 L2 17" strokeLinecap="round" />
        <circle cx="4" cy="20" r="1" fill="currentColor" />
      </svg>
      {/* Bottom Right */}
      <svg className="absolute bottom-2 right-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M22 14 C22 20, 20 22, 14 22" strokeLinecap="round" />
        <path d="M22 22 L17 22 M22 22 L22 17" strokeLinecap="round" />
        <circle cx="20" cy="20" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}

function renderPrice(price: string | number) {
  if (typeof price === "number") {
    return (
      <span className="font-mono text-sm text-accent font-bold whitespace-nowrap bg-accent/5 px-2.5 py-1 border border-accent/15 rounded-sm">
        ₹{price}
      </span>
    );
  }

  const options = price.split("|").map((opt) => opt.trim());
  return (
    <div className="flex flex-wrap gap-1.5 justify-start sm:justify-end">
      {options.map((opt, i) => {
        const parts = opt.split(":");
        if (parts.length === 2) {
          return (
            <span
              key={i}
              className="inline-flex items-center gap-1 font-mono text-[10px] text-accent border border-accent/20 bg-accent/5 px-2 py-0.5 rounded-sm"
            >
              <span className="text-ink/60 uppercase text-[8px] tracking-wider font-medium">{parts[0].trim()}:</span>
              <span className="font-bold">{parts[1].trim()}</span>
            </span>
          );
        }
        return (
          <span
            key={i}
            className="font-mono text-[10px] text-accent font-semibold bg-accent/5 px-2 py-0.5 border border-accent/15 rounded-sm"
          >
            {opt}
          </span>
        );
      })}
    </div>
  );
}

export default function App() {
  // Navigation & interaction states
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [cart, setCart] = useState<Record<string, { item: MenuItem; count: number }>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [lastPlacedOrderTotal, setLastPlacedOrderTotal] = useState(0);
  const [lastPlacedOrderItems, setLastPlacedOrderItems] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState("XYZ / ABC Square");
  const [isOdishaMapOpen, setIsOdishaMapOpen] = useState(false);
  const [ambientAudio, setAmbientAudio] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [isScrollingToTop, setIsScrollingToTop] = useState(false);

  // Staged Feedback and reviews states
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackComment, setFeedbackComment] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Staged Table Reservation states
  const [reserveName, setReserveName] = useState("");
  const [reservePhone, setReservePhone] = useState("");
  const [reserveDate, setReserveDate] = useState("");
  const [reserveTime, setReserveTime] = useState("19:00");
  const [reserveGuests, setReserveGuests] = useState(2);
  const [reserveSubmitted, setReserveSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Sound context reference for luxurious low-hum background synth
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Parallax tracking and Scroll physics
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || window.scrollY;
      setScrollY(currentScroll);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
      setShowScrollTop(currentScroll > 400);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Operating parameters & dynamic local clock node
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [localTimeStr, setLocalTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTimeStr(now.toLocaleTimeString("en-US", options));

      const kolkataTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      const hours = kolkataTime.getHours();
      const mins = kolkataTime.getMinutes();
      const timeInMins = hours * 60 + mins;

      const openTime = 11 * 60; // 11:00 AM
      const closeTime = 23 * 60 + 30; // 11:30 PM
      setIsOpenNow(timeInMins >= openTime && timeInMins <= closeTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Audio synths loop
  const toggleAmbientAudio = () => {
    if (!ambientAudio) {
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          audioCtxRef.current = new AudioContextClass();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(82.41, ctx.currentTime); // E2 ground note

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(120, ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 1.5);

        osc.start();
        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
        setAudioPlayed(true);
      } catch (err) {
        console.error("Audio failed", err);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        try {
          gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime);
          gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.4);
          setTimeout(() => {
            oscillatorRef.current?.stop();
            oscillatorRef.current = null;
          }, 500);
        } catch (e) {}
      }
    }
    setAmbientAudio(!ambientAudio);
  };

  // Kinetic smooth deceleration scroll to top
  const handleScrollToTop = () => {
    if (isScrollingToTop) return;
    setIsScrollingToTop(true);

    const startScrollY = window.pageYOffset || window.scrollY;
    const duration = 800;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, startScrollY * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrollingToTop(false);
      }
    };
    requestAnimationFrame(animateScroll);
  };

  // Cart operations
  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev[item.name];
      if (existing) {
        return {
          ...prev,
          [item.name]: { ...existing, count: existing.count + 1 },
        };
      }
      return {
        ...prev,
        [item.name]: { item, count: 1 },
      };
    });
  };

  const removeFromCart = (itemName: string) => {
    setCart((prev) => {
      const existing = prev[itemName];
      if (!existing) return prev;
      if (existing.count <= 1) {
        const next = { ...prev };
        delete next[itemName];
        return next;
      }
      return {
        ...prev,
        [itemName]: { ...existing, count: existing.count - 1 },
      };
    });
  };

  const getCartValues = () => {
    return Object.keys(cart).map((key) => cart[key]);
  };

  const getCartTotal = (): number => {
    return getCartValues().reduce((sum, current) => sum + current.item.price * current.count, 0);
  };

  const totalItemsCount = getCartValues().reduce((sum, c) => sum + c.count, 0);

  const toggleLike = (itemName: string) => {
    setLikes((prev) => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  // Delivery estimation matrix parameters
  const deliveryEstimates: Record<string, { time: string; fee: string; distance: string }> = {
    "XYZ / ABC Square": { time: "10-15 mins", fee: "Free Delivery", distance: "0.5 km" },
    "Infocity Hub": { time: "15-20 mins", fee: "₹20", distance: "1.8 km" },
    "Sailashree Vihar": { time: "15-20 mins", fee: "₹20", distance: "2.2 km" },
    "Chandrasekharpur": { time: "20-25 mins", fee: "₹30", distance: "3.5 km" },
    "Damana Square": { time: "20-25 mins", fee: "₹30", distance: "4.1 km" },
  };

  const activeEstimate = deliveryEstimates[selectedLocation] || deliveryEstimates["XYZ / ABC Square"];

  // Pre-calculate search matching results to support "Not Found" state
  const totalMatchedItems = MENU_COLUMNS.reduce((total, column) => {
    const matchedCount = column.items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.subcategory && item.subcategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
        column.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    }).length;
    return total + matchedCount;
  }, 0);

  return (
    <div className="min-h-screen bg-warm-bg text-ink font-sans overflow-x-hidden selection:bg-accent selection:text-white relative arabesque-pattern">
      
      {/* Large Ethereal Plate & Cutlery Background Watermark */}
      <div className="absolute top-[12%] md:top-[15%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] aspect-square text-accent pointer-events-none select-none z-0 filter blur-[3px] opacity-[0.06] mix-blend-screen overflow-hidden flex items-center justify-center">
        <SufiDervishIcon className="w-[85%] h-[85%]" opacity={0.6} />
      </div>

      <div className="absolute top-[48%] md:top-[50%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] aspect-square text-accent pointer-events-none select-none z-0 filter blur-[3px] opacity-[0.05] mix-blend-screen overflow-hidden flex items-center justify-center">
        <SufiDervishIcon className="w-[85%] h-[85%]" opacity={0.5} />
      </div>

      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] aspect-square text-accent pointer-events-none select-none z-0 filter blur-[3px] opacity-[0.04] mix-blend-screen overflow-hidden flex items-center justify-center">
        <SufiDervishIcon className="w-[85%] h-[85%]" opacity={0.4} />
      </div>
      
      {/* Luxurious Ambient Glow Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] gold-glow-orb pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] emerald-glow-orb pointer-events-none" />
      <div className="absolute top-[65%] left-[-15%] w-[500px] h-[500px] gold-glow-orb pointer-events-none" />
      <div className="absolute top-[85%] right-[-10%] w-[550px] h-[550px] emerald-glow-orb pointer-events-none" />

      {/* Floating Glowing Embers / Fireflies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[12%] left-[15%] w-1.5 h-1.5 bg-accent/60 rounded-full glowing-ember" style={{ animationDelay: "0s", animationDuration: "5s" }} />
        <div className="absolute top-[25%] left-[80%] w-1 h-1 bg-accent/80 rounded-full glowing-ember" style={{ animationDelay: "1.5s", animationDuration: "7s" }} />
        <div className="absolute top-[45%] left-[30%] w-2 h-2 bg-accent/40 rounded-full glowing-ember" style={{ animationDelay: "3s", animationDuration: "6s" }} />
        <div className="absolute top-[62%] left-[75%] w-1 h-1 bg-accent/75 rounded-full glowing-ember" style={{ animationDelay: "0.5s", animationDuration: "8s" }} />
        <div className="absolute top-[78%] left-[20%] w-1.5 h-1.5 bg-accent/50 rounded-full glowing-ember" style={{ animationDelay: "4.2s", animationDuration: "5.5s" }} />
        <div className="absolute top-[90%] left-[85%] w-2 h-2 bg-accent/60 rounded-full glowing-ember" style={{ animationDelay: "2s", animationDuration: "6.5s" }} />
      </div>

      {/* Scroll Progress Indicator Line */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[10002] origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* HEADER NAVIGATION BAR (Strictly fixed at the top across ALL viewports with subtle backdrop blur) */}
      <header 
        className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-[12px] bg-warm-bg/40 border-b border-accent/25 px-6 lg:px-12 py-4 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 9999, backdropFilter: "blur(12px)" } as any}
      >
        {/* Full Brand Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group/logo hover:opacity-90 transition-opacity"
        >
          <SufiLogoEmblem size={42} className="shrink-0" />
          <div className="flex flex-col select-none text-left">
            <span className="font-editorial font-bold text-base sm:text-lg uppercase tracking-[0.14em] text-accent leading-none font-serif gold-text-glow">
              FINE DINE RESTAURANT
            </span>
            <span className="font-editorial text-[8px] uppercase tracking-[0.22em] text-accent/60 mt-1 leading-none font-serif">
              FINE MUGHLAI &amp; LOUNGE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Menu (horizontal links) */}
        <nav className="hidden lg:flex items-center gap-8" id="top-navigation">
          {[
            { label: "Hero Gate", href: "#hero" },
            { label: "Menu Specials", href: "#menu" },
            { label: "Gallery", href: "#gallery" },
            { label: "Reviews", href: "#reviews" },
            { label: "Lounge Pillars", href: "#metrics" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors duration-300 relative font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Clock, Order Archive, and Mobile Hamburger */}
        <div className="flex items-center gap-4">
          {/* Clock Indicator inside Header (Desktop) */}
          <div className="hidden xl:flex items-center gap-2.5 px-3 py-1.5 bg-[#0D1511]/90 border border-accent/35 rounded-sm">
            <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-red-500"}`} />
            <span className="font-mono text-[9px] uppercase tracking-wider text-ink/70 font-bold">
              {isOpenNow ? "OPEN" : "CLOSED"}
            </span>
            <span className="text-[10px] font-mono font-bold text-accent tracking-widest">{localTimeStr || "11:00 AM"}</span>
          </div>

          {/* Mobile hamburger menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-accent hover:text-white transition-colors cursor-pointer"
            aria-label="Open Mobile Menu"
            id="mobile-drawer-toggle"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* MAIN BODY CONTENT AREA */}
      <div className="w-full min-w-0">

          {/* HERO GATE SECTION */}
          <section 
            id="hero" 
            className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 md:pt-40 md:pb-28 overflow-hidden border-b border-ink/10"
          >
            {/* Mughal floral corner & side watermarks */}
            <MughalFloralMotif className="absolute top-24 -left-16 w-52 h-52 opacity-[0.11] hidden md:block rotate-[15deg]" />
            <MughalFloralMotif className="absolute bottom-24 -right-16 w-60 h-60 opacity-[0.12] hidden md:block -rotate-[15deg]" />

            {/* Soft parallax graphic background patterns */}
            <div 
              className="absolute inset-0 pointer-events-none z-0 opacity-[0.04] transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
                backgroundImage: `radial-gradient(circle at 50% 50%, #1D1818 1.5px, transparent 1.5px)`,
                backgroundSize: "30px 30px"
              }}
            />

            <div className="max-w-6xl mx-auto w-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Text Block */}
                <div className="lg:col-span-7 space-y-8 relative">
                  
                  {/* Subtle ambient light behind typography */}
                  <div className="absolute -top-16 -left-16 w-72 h-72 gold-glow-orb pointer-events-none -z-10" />

                  {/* Selected Design Tag */}
                  <div className="inline-block">
                    <div className="font-mono text-[10px] tracking-[0.2em] border border-accent/40 bg-accent/5 backdrop-blur-md px-4 py-2 uppercase text-accent font-semibold shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                      Est. 2026 · Fine Mughlai &amp; Lounge
                    </div>
                  </div>

                  {/* Main Header */}
                  <div className="space-y-4">
                    <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[4.75rem] tracking-[0.16em] leading-tight uppercase font-bold select-none text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent text-glow-gold">
                      FINE DINE RESTAURANT
                    </h1>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-accent to-copper my-3"></div>
                    <p className="font-editorial text-2xl sm:text-3.5xl lg:text-4xl tracking-[0.06em] leading-none uppercase text-ink font-semibold">
                      The XYZ <span className="italic font-light text-accent">Standard.</span>
                    </p>
                  </div>

                  <p className="max-w-xl font-editorial text-lg sm:text-xl text-ink/80 italic leading-relaxed">
                    A culinary sanctuary near ABC Square. Merging authentic slow-cooked Mughlai masterworks, premium charcoal tandoor bakes, and rich multi-cuisine delicacies under a high-contrast lounge ambiance.
                  </p>

                  {/* CTA block */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                    <a
                      href="#menu"
                      className="px-8 py-4 bg-gradient-to-r from-accent to-accent/80 hover:from-white hover:to-white text-black font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-center transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.55)]"
                    >
                      View Archive Menu
                    </a>
                    
                    <a
                      href="#contact"
                      className="px-8 py-4 border border-accent/30 text-accent hover:border-accent font-mono text-[11px] uppercase tracking-[0.15em] text-center hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Pitstop Details
                    </a>
                  </div>

                </div>

                {/* Right framed visual banner card representing fine architecture (dome/mihrab shape) */}
                <div className="lg:col-span-5 relative group">
                  {/* Glowing backlight behind the hero arch frame */}
                  <div className="absolute inset-0 bg-accent/15 rounded-full filter blur-[100px] pointer-events-none -z-10 group-hover:bg-accent/25 transition-all duration-700" />

                  <div className="absolute -inset-3 border border-accent/30 rounded-t-[160px] md:rounded-t-[220px] pointer-events-none group-hover:scale-[1.02] transition-transform duration-500 z-10 group-hover:border-accent/60" />
                  <div className="relative border border-accent/25 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-ink/5 rounded-t-[140px] md:rounded-t-[200px] border-t-4 border-accent">
                    <img 
                      src={HERO_BG}
                      alt="Fine Dine Lounge"
                      className="w-full h-full object-cover brightness-[0.88] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-5 left-5 right-5 text-left text-white flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest block uppercase text-accent">Lounge View</span>
                        <h3 className="font-editorial text-lg italic mt-0.5">Warm low-decibel lounge near ABC</h3>
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-white/50">SEC. 01</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* THE CORE OFFERINGS MATRIX */}
          <MughalArchDivider className="bg-warm-bg" />
          
          <section id="menu" className="py-24 px-6 relative z-10 border-b border-ink/10 bg-warm-bg overflow-hidden">
            {/* Soft background watermark */}
            <MughalFloralMotif className="absolute -right-24 top-1/4 w-96 h-96 opacity-[0.05] hidden lg:block rotate-12" />
            <MughalFloralMotif className="absolute -left-24 bottom-1/4 w-96 h-96 opacity-[0.05] hidden lg:block -rotate-12" />

            <div className="max-w-6xl mx-auto">
              
              {/* Header Grid */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-ink/10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-accent"></span>
                    <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase">The Archive Vault</span>
                  </div>
                  <h2 className="font-editorial font-bold text-4xl sm:text-5xl tracking-tight text-ink uppercase leading-none">
                    Menu Specials
                  </h2>
                  <p className="text-ink/70 font-editorial text-lg italic max-w-xl">
                    A curated collection of traditional spices and clay oven baked craft. Discover our signature specialties.
                  </p>
                </div>

                {/* Interactive Search Bar */}
                <div className="relative w-full md:w-80 shrink-0">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink/40">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Kebabs, Curry, Shakes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border border-ink/25 focus:border-accent hover:border-accent/60 focus:shadow-[0_0_10px_rgba(212,175,55,0.22)] hover:shadow-[0_0_8px_rgba(212,175,55,0.15)] transition-all duration-300 text-xs py-3 pl-10 pr-10 text-ink focus:outline-none placeholder:text-ink/30 font-sans"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-ink/40 hover:text-accent"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Landscape Wide Menu Sections and Cards Layout */}
              <div className="relative z-10">
                {totalMatchedItems === 0 ? (
                  /* AESTHETIC NO ITEMS FOUND STATE */
                  <div className="flex flex-col items-center justify-center py-24 px-4 text-center border border-accent/20 bg-gradient-to-b from-[#0B0F0D]/90 to-[#050807]/90 rounded-sm shadow-[0_10px_35px_rgba(0,0,0,0.6)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
                    <FloralCornerFrame className="text-accent/15" />
                    <SufiDervishIcon className="w-16 h-16 text-accent/20 mb-6 animate-[pulse_3s_infinite]" opacity={0.3} />
                    <p className="font-editorial font-serif text-accent text-xl sm:text-2xl max-w-xl text-center leading-relaxed">
                      No culinary creations found matching your search. Please try another keyword.
                    </p>
                  </div>
                ) : (
                  /* Wide Horizontal Category Sections and Cards Layout */
                  <div className="space-y-16">
                    {MENU_COLUMNS.map((column, colIdx) => {
                      const filteredItems = column.items.filter((item) => {
                        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (item.subcategory && item.subcategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          column.title.toLowerCase().includes(searchQuery.toLowerCase());
                        return matchesSearch;
                      });

                      if (filteredItems.length === 0) return null;

                      return (
                        <div key={column.title} className="space-y-8">
                          {/* Wide Horizontal Banner Divider for Category Sectioning */}
                          <div className="w-full border-t border-b border-accent/20 bg-gradient-to-r from-[#0E1411]/90 via-[#0A0D0B]/95 to-[#0E1411]/90 py-6 px-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
                            <div className="space-y-1 relative z-10 text-center md:text-left">
                              <span className="font-mono text-[9px] text-accent tracking-[0.25em] block uppercase">Pillar 0{colIdx + 1}</span>
                              <h3 className="font-editorial font-bold text-2xl text-accent uppercase tracking-wide font-serif gold-text-glow">{column.title}</h3>
                              <p className="text-xs text-ink/65 font-editorial italic leading-relaxed">{column.subtitle}</p>
                            </div>
                            
                            <div className="flex items-center gap-4 shrink-0 relative z-10 mt-4 md:mt-0">
                              <SufiDervishIcon className="w-12 h-12 text-accent/30" opacity={0.5} />
                              <div className="h-8 w-[1px] bg-accent/20 hidden md:block" />
                              <span className="font-mono text-[10px] text-accent/80 border border-accent/25 px-3 py-1.5 bg-accent/5">
                                {filteredItems.length} Masterpieces
                              </span>
                            </div>
                          </div>

                          {/* Horizontal Grid Layout (auto-fit 300px min width) */}
                          <div 
                            className="grid gap-6" 
                            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
                          >
                            {filteredItems.map((item) => {
                              return (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, margin: "-50px" }}
                                  transition={{ duration: 0.5 }}
                                  className="group/item border border-accent/15 hover:border-accent/40 p-5 bg-[#0B0F0D]/95 hover:bg-[#0E1411]/95 transition-all duration-300 rounded-sm flex flex-col justify-between h-full relative overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]"
                                >
                                  {/* Soft inner glow */}
                                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

                                  {/* Subtly embedded Whirling Dervish background icon */}
                                  <SufiDervishIcon 
                                    className="absolute right-2 bottom-2 w-14 h-14 text-accent pointer-events-none opacity-[0.03] transition-all duration-500 group-hover/item:scale-110 group-hover/item:opacity-[0.06]" 
                                  />

                                  <div className="space-y-4 flex-1 flex flex-col justify-between">
                                    {/* Top Row: Left-aligned Dish Name and Right-aligned Price in Gold */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-3 border-b border-accent/10">
                                      <h4 className="font-serif font-bold text-base text-accent/90 group-hover/item:text-accent transition-colors duration-300 tracking-wide">
                                        {item.name}
                                      </h4>
                                      <div className="shrink-0">
                                        {renderPrice(item.price)}
                                      </div>
                                    </div>

                                    {/* Middle: Description text spanning across the card width */}
                                    <div className="flex-1">
                                      {item.description ? (
                                        <p className="text-xs text-ink/75 leading-relaxed font-sans font-light">
                                          {item.description}
                                        </p>
                                      ) : (
                                        <p className="text-xs text-ink/35 italic leading-relaxed font-sans font-light">
                                          A legacy delicacy masterfully roasted to achieve a crisp golden glaze with traditional spices.
                                        </p>
                                      )}
                                    </div>

                                    {/* Bottom: Optional badge */}
                                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-accent/5 mt-auto">
                                      {/* Left side: Optional Badge */}
                                      <div className="flex items-center gap-2">
                                        {item.badge ? (
                                          <span className="inline-block text-[8px] font-mono uppercase tracking-widest text-accent border border-accent/25 px-2 py-0.5 bg-accent/5">
                                            {item.badge}
                                          </span>
                                        ) : (
                                          <span className="inline-block text-[8px] font-mono uppercase tracking-widest text-ink/30 border border-ink/5 px-2 py-0.5">
                                            Traditional Recipe
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Matrix Notice */}
              <div className="mt-16 text-center border-t border-ink/5 pt-8">
                <p className="text-[10px] font-mono text-ink/40 uppercase tracking-widest">
                  * Dynamic menu items config • Swiggy &amp; Zomato express dispatch channels operational
                </p>
              </div>

            </div>
          </section>

          {/* CUISINE GALLERY & VISUAL SPLENDOR */}
          <MughalArchDivider className="bg-warm-bg/50" />

          <section id="gallery" className="py-24 px-6 relative z-10 border-b border-ink/10 bg-warm-bg/50 overflow-hidden">
            {/* Soft background watermark */}
            <MughalFloralMotif className="absolute -left-20 top-10 w-72 h-72 opacity-[0.06] hidden md:block rotate-45" />
            <MughalFloralMotif className="absolute -right-20 bottom-10 w-80 h-80 opacity-[0.06] hidden md:block -rotate-12" />

            <div className="max-w-6xl mx-auto relative z-10">
              
              <div className="space-y-4 mb-16">
                <div className="inline-flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-accent"></span>
                  <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase">Visual Splendor</span>
                </div>
                <h2 className="font-editorial font-bold text-4xl sm:text-5xl tracking-tight text-ink uppercase">
                  Cuisine Gallery
                </h2>
                <p className="text-ink/70 font-editorial text-lg max-w-xl italic">
                  A visual walkthrough of our signature Mughlai masterworks, premium charcoal kebabs, and our high-contrast lounge ambiance near XYZ.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: "Pilaf with Murgh Malai",
                    desc: "Fragrant basmati pilaf rice served with tender cream cheese charcoal kebabs.",
                    tag: "Signature Combo",
                    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop"
                  },
                  {
                    title: "Fine Dine Special Kabab",
                    desc: "Charcoal roasted chicken stuffed with rich melting cheese and cashew.",
                    tag: "Tandoor Spec",
                    img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop"
                  },
                  {
                    title: "Drums of Heaven",
                    desc: "Crispy chicken lollipops cooked in signature spices and Schezwan glazes.",
                    tag: "Oriental Dry",
                    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=600&auto=format&fit=crop"
                  },
                  {
                    title: "Frosted Cream Shakes",
                    desc: "Thick milk milkshakes garnished with chocolate bits and premium toppings.",
                    tag: "Beverages",
                    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop"
                  },
                  {
                    title: "Warm Lounge Space",
                    desc: "Deep gold ambient light, luxury seating, and cozy spaces near ABC Square.",
                    tag: "Lounge Vibe",
                    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop"
                  }
                ].map((gItem, index) => (
                  <motion.div
                    key={gItem.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                    className="group border border-ink/10 bg-warm-bg p-3 flex flex-col justify-between h-full hover:border-accent/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300 rounded-t-[50px] border-t-2 border-accent/25 shadow-sm"
                  >
                    <div className="space-y-3">
                      {/* Image frame with pointed/dome arch representation */}
                      <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden border border-ink/5 bg-ink/5 rounded-t-[40px] border-t-2 border-accent/20">
                        <FloralCornerFrame className="text-accent/40 group-hover:text-accent/90 transition-colors duration-300" />
                        <img 
                          src={gItem.img} 
                          alt={gItem.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <span className="font-mono text-[8px] uppercase tracking-wider text-accent block">
                          {gItem.tag}
                        </span>
                        <h4 className="font-editorial font-bold text-base text-ink leading-tight">
                          {gItem.title}
                        </h4>
                        <p className="text-[11px] text-ink/60 font-sans leading-relaxed">
                          {gItem.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-ink/5 mt-4 text-right">
                      <span className="font-mono text-[8px] text-ink/30 uppercase">FIG. 0{index + 1}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* VERIFIED REVIEWS ARCHIVE */}
          <MughalArchDivider className="bg-warm-bg" />

          <section id="reviews" className="py-24 px-6 relative z-10 border-b border-ink/10 bg-warm-bg overflow-hidden">
            {/* Subtle background watermark */}
            <MughalFloralMotif className="absolute -right-24 top-1/3 w-80 h-80 opacity-[0.05] hidden lg:block rotate-[45deg]" />
            <MughalFloralMotif className="absolute -left-24 bottom-1/3 w-80 h-80 opacity-[0.05] hidden lg:block -rotate-[45deg]" />

            <div className="max-w-6xl mx-auto relative z-10">
              
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-accent"></span>
                  <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase">Patron Testimonials</span>
                </div>
                <h2 className="font-editorial font-bold text-4xl sm:text-5xl tracking-tight text-ink uppercase">
                  Verified Reviews
                </h2>
                
                {/* Rating Score Metric Card */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-black/40 border border-accent/25 text-xs font-mono shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <span className="text-accent font-bold">4.5</span>
                  <div className="flex items-center text-accent">
                    <Star className="w-3.5 h-3.5 fill-accent" />
                    <Star className="w-3.5 h-3.5 fill-accent" />
                    <Star className="w-3.5 h-3.5 fill-accent" />
                    <Star className="w-3.5 h-3.5 fill-accent" />
                    <Star className="w-3.5 h-3.5 fill-accent/20 text-accent/20" />
                  </div>
                  <span className="text-accent/30">|</span>
                  <span className="text-ink/80 uppercase tracking-wider">1,788 Google Reviews</span>
                </div>

                <p className="text-ink/70 font-editorial text-lg italic max-w-xl">
                  Real responses of Bhubaneswar food enthusiasts. Your feedback immediately saves to our active list.
                </p>
              </div>

              {/* Reviews grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviewsList.map((rev) => (
                  <div 
                    key={rev.id}
                    className="bg-[#0D1310]/80 border border-accent/20 p-8 flex flex-col justify-between relative group hover:border-accent/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.18)] transition-all duration-300 glass-card"
                  >
                    {/* Top minimal tag */}
                    <span className="absolute top-0 right-6 -translate-y-1/2 bg-accent text-black font-bold border border-accent px-3 py-1 font-mono text-[9px] uppercase tracking-wider">
                      {rev.tag}
                    </span>

                    <div className="space-y-4">
                      {/* Rating stars */}
                      <div className="flex items-center gap-0.5 text-accent">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                        ))}
                      </div>

                      {/* Comment */}
                      <p className="text-ink font-editorial text-[17px] leading-relaxed italic">
                        "{rev.text}"
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-accent/15 flex items-center justify-between">
                      <div>
                        <span className="font-editorial font-bold text-sm text-ink block uppercase tracking-wide">
                          {rev.author}
                        </span>
                        <span className="text-[9px] text-ink/50 font-mono uppercase tracking-widest block mt-0.5">
                          Bhubaneswar Patron
                        </span>
                      </div>
                      
                      <span className="flex items-center gap-1 text-[8px] text-accent border border-accent/30 px-2 py-0.5 font-mono uppercase">
                        <Check className="w-2.5 h-2.5" /> VERIFIED
                      </span>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* CAFE METRICS & LOUNGE CHARACTERISTICS */}
          <section id="metrics" className="py-24 px-6 relative z-10 border-b border-ink/10 bg-warm-bg/40">
            <div className="max-w-6xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left explanation node */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-accent"></span>
                    <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase">Signature Pillars</span>
                  </div>
                  <h2 className="font-editorial font-bold text-3.5xl text-ink uppercase leading-none">
                    Lounge Features
                  </h2>
                  <p className="text-ink/75 font-sans font-light text-base leading-relaxed">
                    We've designed our XYZ lounge from the ground up to offer an authentic Mughlai culinary sanctuary combined with comfortable multi-cuisine selections.
                  </p>

                  <div className="p-6 bg-[#0D1310]/80 border border-accent/25 glass-card space-y-3">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-accent block font-bold">Lounge Coordinates</span>
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-ink/50">Address Node:</span>
                      <span className="text-accent font-bold">XYZ, Bhubaneswar</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-ink/50">Postcode:</span>
                      <span className="text-ink font-bold">751024</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-ink/50">Plus Code:</span>
                      <span className="text-ink font-bold">000-404</span>
                    </div>
                  </div>
                </div>

                {/* Right bento-style columns */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {METRICS.map((met, index) => {
                    const iconMap: Record<string, React.ReactNode> = {
                      UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-accent" />,
                      Compass: <Compass className="w-5 h-5 text-accent" />,
                      ParkingCircle: <ParkingCircle className="w-5 h-5 text-accent" />,
                      Zap: <Zap className="w-5 h-5 text-accent" />
                    };

                    return (
                      <div
                        key={met.id}
                        className="p-8 bg-[#0D1310]/80 border border-accent/20 flex flex-col justify-between group hover:border-accent/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.18)] transition-all duration-300 glass-card"
                      >
                        <div className="w-10 h-10 border border-accent/25 flex items-center justify-center mb-6 bg-[#121A16]">
                          {iconMap[met.icon] || <Compass className="w-5 h-5 text-accent" />}
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-editorial font-bold text-lg text-ink uppercase group-hover:text-accent transition-colors">
                            {met.title}
                          </h4>
                          <p className="text-xs text-ink/65 leading-relaxed font-sans font-light">
                            {met.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </section>

          {/* CONTACT & DIRECTIVES MAP COORDINATES */}
          <MughalArchDivider className="bg-warm-bg" />

          <footer id="contact" className="bg-warm-bg border-t border-ink/10 pt-24 pb-12 px-6 relative z-10 overflow-hidden">
            {/* Subtle background watermarks */}
            <MughalFloralMotif className="absolute -left-20 top-1/4 w-80 h-80 opacity-[0.06] hidden lg:block rotate-[15deg]" />
            <MughalFloralMotif className="absolute -right-20 bottom-1/4 w-80 h-80 opacity-[0.06] hidden lg:block -rotate-[15deg]" />

            <div className="max-w-6xl mx-auto relative z-10">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16 pb-16 border-b border-ink/10">
                
                {/* Core Closing Text Column (Column 1: 4/12) */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="font-editorial font-bold text-3.5xl text-ink leading-none">
                    Fine Dine Restaurant
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-ink font-light italic leading-tight">
                    "Visit our lounge near XYZ for the finest slow-cooked taste experience."
                  </h3>

                  <p className="text-ink/75 font-sans font-light text-sm leading-relaxed max-w-md">
                    Whether you come alone to unwind or visit with your close ones—our cozy ambient environment and premium taste will ensure you have an unforgettable dining experience. See you near ABC Square!
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-2 border border-ink/15 bg-white/40">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span className="font-mono text-[9px] text-ink/70 uppercase tracking-widest font-bold">
                      Operational: 11:00 AM - 11:30 PM Everyday
                    </span>
                  </div>
                </div>

                {/* Coordinates & Patron Logs Column (Column 2: 4/12) */}
                <div className="lg:col-span-4 space-y-8">
                  {/* Coordinates Info */}
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-ink/40 uppercase tracking-widest block font-bold">
                      Pitstop Coordinates
                    </span>
                    
                    <ul className="space-y-3 text-xs font-sans text-ink/75">
                      <li className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">
                          want web like this ? let's network.. 404-000, Odisha, India
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-accent shrink-0" />
                        <span className="font-mono font-bold">000-404</span>
                      </li>
                    </ul>

                    <div className="pt-1">
                      <a 
                        href="https://www.google.com/maps/place/Odisha,+India" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOdishaMapOpen(true);
                        }}
                        className="inline-flex items-center gap-2 text-[10px] font-mono text-ink uppercase tracking-wider underline underline-offset-4 hover:text-accent transition-colors cursor-pointer"
                      >
                        <span>Launch Map of Odisha</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Send Feedback inline widget */}
                  <div className="space-y-4 border-t border-ink/10 pt-6">
                    <span className="font-mono text-[10px] text-ink/40 uppercase tracking-widest block font-bold">
                      Patron Logs
                    </span>

                    {feedbackSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 border border-accent/25 bg-accent/5 text-center space-y-3"
                      >
                        <Check className="w-4 h-4 text-accent mx-auto animate-bounce" />
                        <div>
                          <p className="text-[10px] font-bold text-accent uppercase font-mono tracking-wider">LOG SUBMITTED</p>
                          <p className="text-[11px] text-ink/70 mt-1 leading-normal">Your review has been saved and is active in the verified testimonials archive!</p>
                        </div>
                        <button
                          onClick={() => setFeedbackSubmitted(false)}
                          className="text-[9px] text-ink hover:text-accent underline font-mono tracking-wider uppercase inline-block cursor-pointer"
                        >
                          Submit Another
                        </button>
                      </motion.div>
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (!feedbackName.trim() || !feedbackComment.trim()) return;

                          const newReview = {
                            id: `custom-review-${Date.now()}`,
                            author: feedbackName.trim(),
                            text: feedbackComment.trim(),
                            rating: feedbackRating,
                            tag: "Patron Feedback"
                          };

                          setReviewsList((prev) => [newReview, ...prev]);
                          setFeedbackSubmitted(true);
                          setFeedbackName("");
                          setFeedbackComment("");
                        }}
                        className="space-y-3"
                      >
                        <input 
                          type="text"
                          required
                          placeholder="Your Name"
                          value={feedbackName}
                          onChange={(e) => setFeedbackName(e.target.value)}
                          className="bg-[#121A16] border border-accent/25 hover:border-accent/50 focus:border-accent hover:shadow-[0_0_10px_rgba(212,175,55,0.18)] focus:shadow-[0_0_10px_rgba(212,175,55,0.22)] transition-all duration-300 text-xs px-3 py-2 text-ink focus:outline-none w-full placeholder:text-accent/40 font-sans"
                        />

                        <textarea 
                          required
                          placeholder="Taste or hospitality feedback..."
                          value={feedbackComment}
                          onChange={(e) => setFeedbackComment(e.target.value)}
                          rows={2}
                          className="bg-[#121A16] border border-accent/25 hover:border-accent/50 focus:border-accent hover:shadow-[0_0_10px_rgba(212,175,55,0.18)] focus:shadow-[0_0_10px_rgba(212,175,55,0.22)] transition-all duration-300 text-xs px-3 py-2 text-ink focus:outline-none w-full placeholder:text-accent/40 font-sans resize-none"
                        />

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                type="button"
                                key={star}
                                onClick={() => setFeedbackRating(star)}
                                className="text-accent hover:scale-110 transition-transform p-0.5"
                                title={`Rate ${star} Stars`}
                              >
                                <Star className={`w-3.5 h-3.5 ${feedbackRating >= star ? "fill-accent text-accent" : "text-ink/10"}`} />
                              </button>
                            ))}
                          </div>

                          <button
                            type="submit"
                            className="bg-[#121A16] border border-accent/40 hover:bg-accent hover:text-black text-[9px] font-mono font-bold px-4 py-2 transition-all uppercase tracking-widest shrink-0 cursor-pointer shadow-[0_0_10px_rgba(212,175,55,0.15)]"
                          >
                            Submit Log
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>

                {/* Secure Table Reservation Column (Column 3: 4/12) */}
                <div className="lg:col-span-4 space-y-5 block w-full">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-widest block font-bold">
                    Secure a Pitstop Table
                  </span>

                  {reserveSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-5 border border-accent/25 bg-accent/5 space-y-4 w-full"
                    >
                      <div className="flex items-center gap-2 text-accent">
                        <Check className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase font-mono tracking-wider">RESERVATION CONFIRMED</span>
                      </div>
                      
                      <div className="space-y-2 border-t border-b border-accent/15 py-3 font-mono text-[11px] text-ink/80 leading-relaxed">
                        <div className="flex justify-between">
                          <span className="text-ink/50">BOOKING ID:</span>
                          <span className="font-bold text-accent">{bookingId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ink/50">GUESTS:</span>
                          <span className="font-bold">{reserveGuests} {reserveGuests === 1 ? 'Guest' : 'Guests'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ink/50">DATE:</span>
                          <span className="font-bold">{reserveDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ink/50">TIME:</span>
                          <span className="font-bold">{reserveTime}</span>
                        </div>
                        <div className="flex justify-between border-t border-accent/15 pt-1.5">
                          <span className="text-ink/50">CONTACT:</span>
                          <span className="font-bold truncate max-w-[150px]" title={reserveName}>{reserveName}</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-ink/65 leading-normal italic">
                        Your table reservation has been recorded! We've dispatched a confirmation message to <span className="font-mono font-bold text-accent">{reservePhone}</span>.
                      </p>

                      <button
                        onClick={() => {
                          setReserveSubmitted(false);
                          setReserveName("");
                          setReservePhone("");
                          setReserveDate("");
                          setReserveTime("7:30 PM");
                          setReserveGuests(2);
                        }}
                        className="w-full bg-[#121A16] border border-accent/40 hover:bg-accent hover:text-black text-warm-bg font-mono text-[10px] font-bold py-3.5 transition-all uppercase tracking-widest cursor-pointer text-center select-none"
                      >
                        Modify / Book Another
                      </button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!reserveName.trim() || !reservePhone.trim() || !reserveDate) return;

                        // Generate a luxurious pseudo-random ID like FINEDINE-7419
                        const randomDigits = Math.floor(1000 + Math.random() * 9000);
                        setBookingId(`FINEDINE-${randomDigits}`);
                        setReserveSubmitted(true);
                      }}
                      className="space-y-3.5 w-full block"
                    >
                      {/* Name field */}
                      <input 
                        type="text"
                        required
                        placeholder="Your Name"
                        value={reserveName}
                        onChange={(e) => setReserveName(e.target.value)}
                        className="bg-[#121A16] border border-accent/25 hover:border-accent/50 focus:border-accent hover:shadow-[0_0_12px_rgba(212,175,55,0.18)] focus:shadow-[0_0_12px_rgba(212,175,55,0.22)] transition-all duration-300 text-sm sm:text-xs px-3.5 py-3 text-ink focus:outline-none w-full placeholder:text-accent/40 font-sans h-12"
                      />

                      {/* Phone field */}
                      <input 
                        type="tel"
                        required
                        placeholder="Phone Number (e.g. 000-404)"
                        value={reservePhone}
                        onChange={(e) => setReservePhone(e.target.value)}
                        className="bg-[#121A16] border border-accent/25 hover:border-accent/50 focus:border-accent hover:shadow-[0_0_12px_rgba(212,175,55,0.18)] focus:shadow-[0_0_12px_rgba(212,175,55,0.22)] transition-all duration-300 text-sm sm:text-xs px-3.5 py-3 text-ink focus:outline-none w-full placeholder:text-accent/40 font-sans h-12"
                      />

                      {/* Date & Time Column/Grid: stacked on mobile and tablet, side-by-side on large desktop */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
                        {/* Date Picker */}
                        <div className="relative w-full">
                          <input 
                            type="date"
                            required
                            min={new Date().toISOString().split("T")[0]}
                            value={reserveDate}
                            onChange={(e) => setReserveDate(e.target.value)}
                            className="bg-[#121A16] border border-accent/25 hover:border-accent/50 focus:border-accent hover:shadow-[0_0_12px_rgba(212,175,55,0.18)] focus:shadow-[0_0_12px_rgba(212,175,55,0.22)] transition-all duration-300 text-sm sm:text-xs px-3.5 py-3 text-ink focus:outline-none w-full font-sans cursor-pointer h-12"
                          />
                        </div>

                        {/* Time Select */}
                        <select
                          required
                          value={reserveTime}
                          onChange={(e) => setReserveTime(e.target.value)}
                          className="bg-[#121A16] border border-accent/25 hover:border-accent/50 focus:border-accent hover:shadow-[0_0_12px_rgba(212,175,55,0.18)] focus:shadow-[0_0_12px_rgba(212,175,55,0.22)] transition-all duration-300 text-sm sm:text-xs px-3.5 py-3 text-accent focus:outline-none w-full font-mono cursor-pointer h-12"
                        >
                          <option value="11:30 AM" className="bg-[#090E0C]">11:30 AM</option>
                          <option value="12:30 PM" className="bg-[#090E0C]">12:30 PM</option>
                          <option value="1:30 PM" className="bg-[#090E0C]">1:30 PM</option>
                          <option value="2:30 PM" className="bg-[#090E0C]">2:30 PM</option>
                          <option value="5:30 PM" className="bg-[#090E0C]">5:30 PM</option>
                          <option value="6:30 PM" className="bg-[#090E0C]">6:30 PM</option>
                          <option value="7:30 PM" className="bg-[#090E0C]">7:30 PM</option>
                          <option value="8:30 PM" className="bg-[#090E0C]">8:30 PM</option>
                          <option value="9:30 PM" className="bg-[#090E0C]">9:30 PM</option>
                          <option value="10:30 PM" className="bg-[#090E0C]">10:30 PM</option>
                        </select>
                      </div>

                      {/* Party size selector */}
                      <div className="flex items-center justify-between border border-accent/25 bg-[#121A16] hover:border-accent/50 hover:shadow-[0_0_12px_rgba(212,175,55,0.18)] transition-all duration-300 px-3.5 py-3 h-12">
                        <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">Party Size</span>
                        <div className="flex items-center gap-3 font-mono">
                          <button
                            type="button"
                            onClick={() => setReserveGuests((g) => Math.max(1, g - 1))}
                            className="w-6 h-6 border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold text-xs text-ink min-w-[16px] text-center">{reserveGuests}</span>
                          <button
                            type="button"
                            onClick={() => setReserveGuests((g) => Math.min(20, g + 1))}
                            className="w-6 h-6 border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-white hover:to-white text-black font-mono text-xs sm:text-[10px] font-bold py-4 transition-all duration-300 uppercase tracking-widest cursor-pointer text-center select-none active:scale-[0.99] shadow-[0_4px_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] border-none"
                      >
                        Request Reservation
                      </button>
                    </form>
                  )}
                </div>

              </div>

              {/* Bottom Copyright system tag lines */}
              <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-ink/40 gap-4">
                <div>
                  <span>© {new Date().getFullYear()} FINE DINE RESTAURANT. ALL RIGHTS RESERVED.</span>
                </div>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-accent transition-colors">PRIVACY POLICY</a>
                  <a href="#" className="hover:text-accent transition-colors">DINE-IN LOGS</a>
                  <a href="#" className="hover:text-accent transition-colors">XYZ SYSTEM</a>
                </div>
              </div>

            </div>
          </footer>

        </div>

      {/* SHOPPING CART DRAWER PANEL */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[10000] flex justify-end">
            {/* Backdrop black overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsCartOpen(false);
                setIsOrderPlaced(false);
              }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Panel Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-md bg-[#0A0E0C]/95 h-full shadow-3xl flex flex-col justify-between p-8 font-sans z-10 border-l border-accent/20"
            >
              
              <div className="flex flex-col h-full overflow-hidden relative">
                {/* Embedded ambient gold glow inside cart */}
                <div className="absolute top-1/4 right-0 w-64 h-64 gold-glow-orb pointer-events-none -z-10" />

                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-accent/20">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-accent" />
                    <h3 className="font-editorial font-bold text-xl text-ink uppercase tracking-wide">
                      {isOrderPlaced ? "Order Dispatch Confirmed" : "Your Order Archive"}
                    </h3>
                  </div>
                  
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsOrderPlaced(false);
                    }}
                    className="p-2 -mr-2 text-accent hover:text-white transition-colors cursor-pointer"
                    aria-label="Close Cart"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {isOrderPlaced ? (
                  /* EXQUISITE LUXURY ORDER CONFIRMED RECEIPT TICKET */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex flex-col justify-center py-6 text-center space-y-6 overflow-y-auto scrollbar-none"
                  >
                    <div className="w-16 h-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      <Check className="w-8 h-8 text-accent animate-bounce" />
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-[9px] text-accent tracking-[0.25em] uppercase border border-accent/35 px-3 py-1 inline-block bg-accent/5">
                        GATEWAYS SECURED
                      </span>
                      <h4 className="font-editorial text-3xl text-ink uppercase font-bold tracking-wider">
                        DISPATCH RECORDED
                      </h4>
                      <p className="text-xs text-ink/70 max-w-xs mx-auto leading-relaxed">
                        Your order for <span className="text-accent font-mono font-bold">{lastPlacedOrderItems} items</span> has been recorded in our local database.
                      </p>
                    </div>

                    {/* Exquisite Receipt Card */}
                    <div className="border border-accent/25 bg-black/40 p-6 text-left font-mono text-[11px] space-y-3.5 relative overflow-hidden shadow-inner">
                      {/* Top decorative tear-out dots */}
                      <div className="absolute top-0 left-0 right-0 h-1 flex justify-between px-2 text-[6px] text-accent/30 select-none">
                        ••••••••••••••••••••••••••••••
                      </div>

                      <div className="flex justify-between text-accent/50 pt-2">
                        <span>DISPATCH NO:</span>
                        <span className="font-bold text-accent">FINEDINE-ORD-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EST. DISPATCH TIME:</span>
                        <span className="text-white">15-20 MINUTES</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DESTINATION PITSTOP:</span>
                        <span className="text-white truncate max-w-[170px]" title={selectedLocation}>{selectedLocation.toUpperCase()}</span>
                      </div>
                      
                      <div className="border-t border-accent/15 my-2 pt-2 flex justify-between text-accent font-bold text-xs">
                        <span>EST. DISPATCH CHARGE:</span>
                        <span>₹{lastPlacedOrderTotal}</span>
                      </div>

                      {/* Bottom warning notice */}
                      <div className="text-[8px] text-center text-accent/50 uppercase tracking-widest pt-2 border-t border-accent/10">
                        * Deliveries via Swiggy/Zomato dispatch channels
                      </div>
                    </div>

                    <p className="text-xs text-accent italic font-editorial max-w-xs mx-auto leading-relaxed">
                      "Slow cooked to order with traditional firewood and premium hand-pound spices."
                    </p>

                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        setIsOrderPlaced(false);
                      }}
                      className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-white hover:to-white text-black font-mono text-[10px] font-bold py-4 uppercase tracking-[0.12em] transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                    >
                      RETURN TO SPECTACLES
                    </button>
                  </motion.div>
                ) : (
                  /* ACTIVE SHOPPING LIST AREA */
                  <>
                    <div className="flex-1 overflow-y-auto py-6 space-y-6 scrollbar-none">
                      {getCartValues().length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                          <UtensilsCrossed className="w-8 h-8 text-accent/20 stroke-[1.5]" />
                          <div>
                            <p className="font-editorial text-lg italic text-ink/70">Your order list is empty.</p>
                            <p className="text-xs text-accent/40 font-mono uppercase tracking-widest mt-1">Select from specials matrix to configure</p>
                          </div>
                        </div>
                      ) : (
                        getCartValues().map(({ item, count }) => (
                          <div 
                            key={item.name}
                            className="flex items-start justify-between gap-4 pb-4 border-b border-accent/10"
                          >
                            <div className="space-y-1">
                              <h4 className="font-editorial font-bold text-base text-ink">{item.name}</h4>
                              <span className="font-mono text-xs text-accent">₹{item.price} each</span>
                            </div>

                            <div className="flex items-center gap-2.5 font-mono">
                              <button
                                onClick={() => removeFromCart(item.name)}
                                className="w-6 h-6 border border-accent/30 text-accent flex items-center justify-center hover:bg-accent hover:text-black transition-colors rounded-none"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-bold text-xs text-ink min-w-[14px] text-center">{count}</span>
                              <button
                                onClick={() => addToCart(item)}
                                className="w-6 h-6 border border-accent/30 text-accent flex items-center justify-center hover:bg-accent hover:text-black transition-colors rounded-none"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Summary Checkout calculations */}
                    {getCartValues().length > 0 && (
                      <div className="pt-6 border-t border-accent/20 space-y-4">
                        <div className="space-y-2 font-mono text-xs text-ink/80">
                          <div className="flex justify-between">
                            <span>SUBTOTAL</span>
                            <span>₹{getCartTotal()}</span>
                          </div>
                          <div className="flex justify-between text-[11px] text-accent/40">
                            <span>EST. TAXES (GST 5%)</span>
                            <span>₹{Math.round(getCartTotal() * 0.05)}</span>
                          </div>
                          <div className="flex justify-between text-base text-ink font-bold pt-2 border-t border-accent/15">
                            <span>EST. TOTAL</span>
                            <span className="text-accent">₹{getCartTotal() + Math.round(getCartTotal() * 0.05)}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            const estTotal = getCartTotal() + Math.round(getCartTotal() * 0.05);
                            setLastPlacedOrderTotal(estTotal);
                            setLastPlacedOrderItems(totalItemsCount);
                            setIsOrderPlaced(true);
                            setCart({});
                          }}
                          className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-white hover:to-white text-black font-mono text-xs font-bold py-4 uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] border-none"
                        >
                          PROCEED TO ORDER DISPATCH
                        </button>
                      </div>
                    )}
                  </>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MOBILE HEADER NAVIGATION DRAWER OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[10005] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-80 bg-[#0A0E0C]/95 border-l border-accent/20 h-full shadow-2xl p-8 flex flex-col justify-between z-10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-accent/20 mb-8">
                  <div className="font-editorial font-bold text-xl sm:text-2xl uppercase tracking-[0.12em] text-ink">
                    FINE DINE RESTAURANT
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-accent hover:text-white transition-colors cursor-pointer"
                    aria-label="Close Mobile Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6" id="mobile-drawer-navigation">
                  {[
                    { label: "Hero Gate", href: "#hero" },
                    { label: "Menu Specials", href: "#menu" },
                    { label: "Gallery", href: "#gallery" },
                    { label: "Reviews", href: "#reviews" },
                    { label: "Lounge Pillars", href: "#metrics" },
                    { label: "Contact", href: "#contact" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70 hover:text-accent block py-1.5"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-accent/15 pt-6">
                <div className="font-mono text-[9px] leading-relaxed text-accent/50 uppercase tracking-widest">
                  XYZ, BHUBANESWAR<br />
                  ODISHA · 751024
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Kinetic Back-to-Top trigger button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-to-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={handleScrollToTop}
            className={`fixed bottom-6 right-6 lg:bottom-8 lg:left-8 lg:right-auto z-[999] p-3 rounded-full bg-[#121A16] text-accent border border-accent/35 shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-pointer flex items-center justify-center transition-all ${
              isScrollingToTop 
                ? "bg-accent border-accent text-black" 
                : "hover:bg-accent hover:border-accent hover:text-black"
            }`}
            aria-label="Scroll to top"
            id="scroll-to-top-button"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Interactive Odisha Map Modal */}
      <AnimatePresence>
        {isOdishaMapOpen && (
          <div className="fixed inset-0 z-[10010] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0B0F0D] border border-accent/30 rounded-xl max-w-3xl w-full p-5 sm:p-6 shadow-2xl relative text-ink overflow-hidden"
            >
              <button 
                onClick={() => setIsOdishaMapOpen(false)}
                className="absolute top-4 right-4 p-2 text-ink/60 hover:text-accent transition-colors rounded-full bg-white/5 hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <div>
                  <h3 className="font-editorial text-xl sm:text-2xl text-ink font-bold">Map of Odisha, India</h3>
                  <p className="text-xs font-mono text-accent">Interactive Regional Map</p>
                </div>
              </div>

              <div className="w-full h-[350px] sm:h-[420px] rounded-lg overflow-hidden border border-accent/20 mb-4 bg-black/50 relative">
                <iframe 
                  title="Map of Odisha"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen
                  src="https://maps.google.com/maps?q=Odisha,India&t=&z=7&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                <span className="text-xs text-ink/60 font-sans">
                  want web like this ? let's network.. 404-000, Odisha, India
                </span>
                <a 
                  href="https://www.google.com/maps/place/Odisha,+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 text-accent text-xs font-mono rounded-lg transition-colors border border-accent/40"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
