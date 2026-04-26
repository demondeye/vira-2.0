import { useState } from "react";

const navItems = [
  { label: "Home", icon: "home" },
  { label: "Search", icon: "search" },
  { label: "Dashboard", icon: "grid" },
  { label: "Messages", icon: "chat" },
];

const filters = [
  { label: "Location", value: "Montreal, QC" },
  { label: "Event Type", value: "Short Track" },
  { label: "Price Range", value: "$15 - $45" },
];

const metrics = [
  { label: "Start Time", value: "09:00 AM" },
  { label: "Distance", value: "500m" },
  { label: "Prize Pool", value: "$12K" },
  { label: "Open Spots", value: "42" },
];

function Icon({ name, className, size = 20 }) {
  const commonProps = {
    className,
    viewBox: name === "pin" ? "0 0 12 12" : name === "hash" || name === "heart" || name === "bookmark" || name === "share" || name === "smallArrow" ? "0 0 14 14" : name === "arrow" ? "0 0 16 16" : "0 0 20 20",
    width: size,
    height: size,
    "aria-hidden": "true",
  };

  switch (name) {
    case "home":
      return (
        <svg {...commonProps}>
          <path
            fill="currentColor"
            d="M2.4 8.8 10 2.7l7.6 6.1a1 1 0 0 1 .4.8v7.2a1 1 0 0 1-1 1h-4.5v-5.2h-5v5.2H3a1 1 0 0 1-1-1V9.6a1 1 0 0 1 .4-.8Z"
          />
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="8.7" cy="8.7" r="5.7" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="m13 13 4.2 4.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "grid":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="5.2" height="5.2" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <rect x="11.8" y="3" width="5.2" height="5.2" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <rect x="3" y="11.8" width="5.2" height="5.2" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <rect x="11.8" y="11.8" width="5.2" height="5.2" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "chat":
      return (
        <svg {...commonProps}>
          <path
            d="M4.1 4.3h11.8a1.8 1.8 0 0 1 1.8 1.8v6.9a1.8 1.8 0 0 1-1.8 1.8H8.2L4 17.4v-2.6a1.8 1.8 0 0 1-1.7-1.8V6.1a1.8 1.8 0 0 1 1.8-1.8Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "bell":
      return (
        <svg {...commonProps}>
          <path
            d="M15.5 13.2H4.5l1.1-1.8V8.5a4.4 4.4 0 0 1 8.8 0v2.9l1.1 1.8Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path d="M8.3 15.5a1.8 1.8 0 0 0 3.4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "hash":
      return (
        <svg {...commonProps}>
          <path d="M4.5 1.6 3.5 12.4M10.5 1.6 9.5 12.4M1.6 5h10.8M1.6 9h10.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M4 12 12 4M6.2 4H12v5.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "smallArrow":
      return (
        <svg {...commonProps}>
          <path d="M3.5 10.5 10.5 3.5M5.4 3.5h5.1v5.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      );
    case "pin":
      return (
        <svg {...commonProps}>
          <path
            fill="currentColor"
            d="M6 1.1A3.8 3.8 0 0 0 2.2 5c0 2.7 3.2 5.8 3.5 6.1a.4.4 0 0 0 .6 0C6.6 10.8 9.8 7.7 9.8 5A3.8 3.8 0 0 0 6 1.1Zm0 5.2A1.4 1.4 0 1 1 6 3.5a1.4 1.4 0 0 1 0 2.8Z"
          />
        </svg>
      );
    case "heart":
      return (
        <svg {...commonProps}>
          <path
            d="M7 12.2S1.8 9.2 1.8 5.4A2.6 2.6 0 0 1 6.4 3.7L7 4.4l.6-.7a2.6 2.6 0 0 1 4.6 1.7C12.2 9.2 7 12.2 7 12.2Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "bookmark":
      return (
        <svg {...commonProps}>
          <path d="M3.4 2h7.2v10L7 9.8 3.4 12V2Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
        </svg>
      );
    case "share":
      return (
        <svg {...commonProps}>
          <circle cx="10.7" cy="3.1" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="3.3" cy="7" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="10.7" cy="10.9" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="m4.8 6.2 4.4-2.3M4.8 7.8l4.4 2.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
        </svg>
      );
    case "logo":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" width={40} height={40}>
          <path
            fill="currentColor"
            d="M4 4h16v16H4V4Zm3.2 3.2v9.6h9.6V7.2H7.2Zm2.7 2.7h4.2v4.2H9.9V9.9ZM17.8 6l-1.8 1.8 1.8 1.8 1.8-1.8L17.8 6ZM6.2 14.4 4.4 16.2 6.2 18l1.8-1.8-1.8-1.8Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function Sidebar() {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <nav className="nav-items nav-items-top" aria-label="Main">
        {navItems.map((item) => (
          <button
            className={`nav-icon${activeNav === item.label ? " active" : ""}`}
            type="button"
            aria-label={item.label}
            aria-pressed={activeNav === item.label}
            key={item.label}
            onClick={() => setActiveNav(item.label)}
          >
            <Icon name={item.icon} />
          </button>
        ))}
      </nav>

      <div className="nav-items nav-items-bottom">
        <img className="profile-avatar" src="https://i.pravatar.cc/100?img=32" alt="Athlete profile" />
        <button
          className={`nav-icon${activeNav === "Notifications" ? " active" : ""}`}
          type="button"
          aria-label="Notifications"
          aria-pressed={activeNav === "Notifications"}
          onClick={() => setActiveNav("Notifications")}
        >
          <Icon name="bell" />
        </button>
      </div>
    </aside>
  );
}

function HeaderNav() {
  return (
    <header className="header-nav" aria-label="Search and filters">
      <div className="search-controls">
        <button className="tag-toggle" type="button">
          <Icon name="hash" size={14} />
          # Training
        </button>

        <div className="filter-group">
          {filters.map((filter) => (
            <button className="filter-item" type="button" key={filter.label}>
              <span>{filter.label}</span>
              <strong>{filter.value}</strong>
              <Icon name="chevron" size={10} />
            </button>
          ))}
        </div>
      </div>

      <button className="action-btn" type="button">
        Register
        <Icon name="arrow" size={16} />
      </button>
    </header>
  );
}

function InfoCard() {
  return (
    <section className="info-card" aria-label="Meet finder">
      <h3>Find The Perfect Meet</h3>
      <p>
        Our platform connects you with extraordinary sessions in the most sought-after arenas. Start
        your journey to discovering the perfect match for your skill level.
      </p>
      <div className="info-card-footer">
        <div className="stat-block">
          <strong>12K+</strong>
          <span>Active Skaters</span>
        </div>
        <div className="skater-stack" aria-label="Featured skaters">
          <img src="https://i.pravatar.cc/100?img=11" alt="Skater avatar 1" />
          <img src="https://i.pravatar.cc/100?img=12" alt="Skater avatar 2" />
          <img src="https://i.pravatar.cc/100?img=13" alt="Skater avatar 3" />
          <button className="arrow-bubble" type="button" aria-label="View skaters">
            <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

function EventCard() {
  return (
    <article className="event-card" aria-label="Featured event">
      <div className="event-card-header">
        <div>
          <h4>Montreal Grand Prix</h4>
          <p className="event-location">
            <Icon name="pin" size={12} />
            Maurice Richard Arena, QC
          </p>
        </div>
        <button className="small-arrow-bubble" type="button" aria-label="Open event">
          <Icon name="smallArrow" size={14} />
        </button>
      </div>

      <p className="event-description">
        The flagship event of the season featuring the world's fastest athletes compete on ice.
        Experience innovation in short track sport.
      </p>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className="interaction-row">
        <button className="interaction-btn" type="button" aria-label="Like event">
          <Icon name="heart" size={14} />
          <span>8.2K</span>
        </button>
        <button className="interaction-btn" type="button" aria-label="Bookmark event">
          <Icon name="bookmark" size={14} />
          <span>452</span>
        </button>
        <button className="icon-btn" type="button" aria-label="Share event">
          <Icon name="share" size={14} />
        </button>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <div className="top-label">ORIZON DESIGN</div>
      <div className="top-right-label">BEST SHOTS</div>

      <div className="main-container" aria-label="VIRA speed skating dashboard">
        <div className="bg-gradient" aria-hidden="true"></div>
        <div className="glass-overlay" aria-hidden="true"></div>

        <Sidebar />

        <main className="hero-section">
          <HeaderNav />

          <section className="hero-title" aria-labelledby="hero-heading">
            <h1 id="hero-heading">New Way Of Skatnig</h1>
            <p>
              Experience the thrill of elite speed short track through our world-class training
              programs and events. VIRA connects beginners with Olympic dreams.
            </p>
          </section>

          <InfoCard />

          <div className="logo-circle" aria-label="VIRA logo">
            <Icon name="logo" />
          </div>

          <EventCard />
        </main>
      </div>

      <div className="external-label">Like &amp; Follow ♡</div>
      <button className="swipe-btn" type="button">
        Swipe »
      </button>
    </>
  );
}

export default App;
