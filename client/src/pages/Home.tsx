/**
 * Design reminder — Blízkosť v rovnováhe:
 * A calm editorial wellness journey with organic asymmetry, dusty rose accents,
 * generous white space, and respectful Slovak language that invites rather than pressures.
 */
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  CircleArrowUp,
  Clock3,
  HeartHandshake,
  Mail,
  Menu,
  MessageCircleMore,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import "./contact-delivery.css";
import "./final-style-tune.css";

const navigation = [
  { label: "O mne", href: "#o-mne" },
  { label: "Poradenstvo", href: "#poradenstvo" },
  { label: "Čítanie", href: "#citanie" },
  { label: "Kontakt", href: "#kontakt" },
];

const portableImageBase = "/images";

const images = {
  hero: `${portableImageBase}/hero-counselling.webp`,
  portrait: `${portableImageBase}/about-portrait.webp`,
  logo: `${portableImageBase}/logo-mark-v2.png`,
  parenting: `${portableImageBase}/parenting.webp`,
  relationships: `${portableImageBase}/relationships.webp`,
};

const services = [
  {
    number: "01",
    title: "Vzťahy a komunikácia",
    copy: "Keď si v rozhovoroch prestávame rozumieť, môžeme spolu hľadať slová, hranice a nové možnosti blízkosti.",
    image: images.relationships,
    alt: "Ilustrácia dvoch ľudí v pokojnom rozhovore",
  },
  {
    number: "02",
    title: "Rodičovstvo a výchova",
    copy: "Podpora pre chvíle, keď je doma veľa emócií, otázok alebo únavy a chcete sa vrátiť k tomu podstatnému.",
    image: images.parenting,
    alt: "Ilustrácia rodiča a dieťaťa pri spoločnej práci",
  },
  {
    number: "03",
    title: "Deti a škola",
    copy: "Priestor na pomenovanie školských ťažkostí, stresu, vzťahov s rovesníkmi aj toho, čo dieťa potrebuje, aby sa cítilo istejšie.",
    image: null,
    alt: "Abstraktná ilustrácia rastu a bezpečného priestoru",
  },
];

const articles = [
  {
    category: "VZŤAHY",
    title: "Hranice nie sú múr. Sú informáciou o tom, na čom mi záleží.",
    date: "Čítanie na 4 minúty",
    image: "/images/article-relationships.webp",
    imageAlt: "Dve keramické šálky s priestorom medzi nimi na ružovom stole",
  },
  {
    category: "RODIČOVSTVO",
    title: "Keď dieťa nereaguje tak, ako by sme potrebovali.",
    date: "Čítanie na 5 minút",
    image: "/images/article-parenting.webp",
    imageAlt: "Dieťa kreslí domček a dospelý mu pokojne drží priestor",
  },
  {
    category: "KOMUNIKÁCIA",
    title: "Ako sa v náročnom rozhovore neprestať počúvať.",
    date: "Čítanie na 3 minúty",
    image: "/images/article-communication.webp",
    imageAlt: "Dvaja ľudia pri rozhovore, jeden pozorne počúva druhého",
  },
];

function PaperScribble({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 164 87" fill="none" aria-hidden="true">
      <path d="M3 70C25 55 31 15 54 28c18 10-2 38 22 41 28 3 17-47 43-39 22 7-7 42 25 39 9-1 14-9 17-17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function LineSprout({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 140" fill="none" aria-hidden="true">
      <path d="M55 137C57 93 51 57 17 21M55 97C76 80 90 58 93 28M55 88C38 76 23 65 7 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 20C8 9 3 6 2 3c14-3 26 4 28 18-5 2-8 1-12-1ZM92 28c4-14 11-20 18-23 0 14-6 25-17 28-3-2-3-3-1-5ZM8 64C0 57 0 48 4 43c11 7 13 16 8 24-2 0-3-1-4-3Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deliveryState, setDeliveryState] = useState<"idle" | "drafted">("idle");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const botField = String(form.get("website") || "").trim();

    if (botField) return;

    const subject = encodeURIComponent(`Správa z webu — ${name}`);
    const body = encodeURIComponent(`Meno: ${name}\nE-mail: ${email}\n\nSpráva:\n${message}`);
    window.location.href = `mailto:miroslavasautner@gmail.com?subject=${subject}&body=${body}`;
    setDeliveryState("drafted");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f1e8] text-[#25372f]">
      <a className="skip-link" href="#obsah">Preskočiť na obsah</a>

      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="shell header-inner">
          <a href="#uvod" className="brand" aria-label="Miroslava Sautner — úvod" onClick={closeMenu}>
            <img src={images.logo} alt="" className="brand-mark" />
            <span className="brand-name">Miroslava Sautner</span>
            <span className="brand-label">psychologička</span>
          </a>

          <nav className="desktop-nav" aria-label="Hlavná navigácia">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <a href="#kontakt" className="header-cta">Dohodnúť konzultáciu <ArrowDownRight size={15} /></a>
          <button className="mobile-menu-button" aria-label={menuOpen ? "Zatvoriť menu" : "Otvoriť menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a href="#kontakt" className="mobile-nav-cta" onClick={closeMenu}>Dohodnúť konzultáciu <ArrowRight size={16} /></a>
        </div>
      </header>

      <main id="obsah">
        <section className="hero" id="uvod">
          <div className="shell hero-grid">
            <div className="hero-copy reveal-up">
              <p className="eyebrow"><span /> Psychologické poradenstvo</p>
              <h1>Viac porozumenia.<br /><em>Viac priestoru pre vás.</em></h1>
              <p className="hero-intro">Podpora vo vzťahoch, rodičovstve a každodenných situáciách, v ktorých nechcete zostať sami.</p>
              <div className="hero-actions">
                <a href="#kontakt" className="button-primary">Chcem sa porozprávať <ArrowRight size={18} /></a>
                <a href="#poradenstvo" className="text-link">Ako pracujem <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-note"><HeartHandshake size={18} /><span>Online aj osobne. <b>V tempe, ktoré je pre vás možné.</b></span></div>
            </div>
            <div className="hero-art reveal-up reveal-delay-1">
              <div className="hero-art-frame">
                <img src={images.hero} alt="Pokojný rozhovor psychologičky s klientkou" />
                <div className="hero-corner-note"><span>01</span><p>Bezpečný priestor<br />pre dôležité témy.</p></div>
              </div>
              <div className="hero-rose-disc" />
              <PaperScribble className="hero-scribble" />
            </div>
          </div>
          <div className="hero-footer shell">
            <span>Vzťahy <i /> Rodičovstvo <i /> Deti a škola</span>
            <a href="#o-mne">Spoznajte môj prístup <ArrowDownRight size={16} /></a>
          </div>
        </section>

        <section className="intro-section" id="o-mne">
          <div className="shell intro-grid">
            <div className="intro-kicker reveal-up">
              <span className="section-index">01 / PRÍSTUP</span>
              <LineSprout className="sprout" />
            </div>
            <div className="intro-text reveal-up reveal-delay-1">
              <p className="large-copy">Niekedy sa veci ťažko pomenúvajú. Nemusíte ich mať upratané, aby ste mohli začať hovoriť.</p>
              <div className="intro-bottom">
                <p>V rozhovore spoločne hľadáme súvislosti, ktoré vám môžu priniesť viac zrozumiteľnosti a opory pri ďalších krokoch.</p>
                <a href="#kontakt" className="round-arrow" aria-label="Prejsť na kontakt"><ArrowRight size={23} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="shell about-layout">
            <div className="about-image-wrap reveal-up">
              <div className="about-arc" />
              <img src={images.portrait} alt="Ilustrácia psychologičky Miroslavy Sautner v konzultačnom priestore" className="about-image" />
              <span className="about-stamp">M<span>P</span></span>
            </div>
            <div className="about-copy reveal-up reveal-delay-1">
              <p className="eyebrow"><span /> O mne</p>
              <h2>Rozhovor, ktorý<br />neponáhľa.</h2>
              <p>Vo svojej práci dávam priestor tomu, čo je vo vzťahoch dôležité, no nie vždy je ľahké to vysloviť. Všímam si konkrétnu situáciu, vaše silné stránky aj to, čo už možno dlhšie nesiete sami.</p>
              <p>Poradenstvo vnímam ako spoluprácu — citlivú, praktickú a ukotvenú v tom, čo potrebujete práve vy.</p>
              <a href="#poradenstvo" className="inline-cta">Viac o možnostiach poradenstva <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="services-section" id="poradenstvo">
          <div className="shell services-heading reveal-up">
            <div>
              <p className="eyebrow eyebrow-light"><span /> Oblasti poradenstva</p>
              <h2>Keď chcete veciam<br /><em>lepšie porozumieť.</em></h2>
            </div>
            <p>Spolu môžeme hľadať cestu cez obdobie, ktoré je náročné, neprehľadné alebo sa opakuje častejšie, než by ste chceli.</p>
          </div>
          <div className="shell services-list">
            {services.map((service, index) => (
              <article className={`service-row service-row-${index + 1} reveal-up`} key={service.number}>
                <div className="service-number">{service.number}</div>
                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <a href="#kontakt" className="service-link">Dohodnúť konzultáciu <ArrowRight size={16} /></a>
                </div>
                {service.image ? (
                  <div className="service-image"><img src={service.image} alt={service.alt} /></div>
                ) : (
                  <div className="service-illustration" aria-label={service.alt}>
                    <div className="arch arch-one" /><div className="arch arch-two" /><div className="arch arch-three" />
                    <Sparkles size={23} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="format-section">
          <div className="shell format-grid">
            <div className="format-title reveal-up">
              <span className="section-index">02 / FORMA STRETNUTIA</span>
              <h2>Vyberte si cestu,<br />ktorá vám sedí.</h2>
            </div>
            <div className="format-cards reveal-up reveal-delay-1">
              <article className="format-card format-card-rose">
                <MessageCircleMore size={26} />
                <p className="format-label">ONLINE</p>
                <h3>Aj z miesta,<br />kde sa cítite bezpečne.</h3>
                <p>Video konzultácia, ktorá vám umožní venovať sa dôležitým témam bez cestovania.</p>
                <a href="#kontakt">Mám záujem <ArrowRight size={16} /></a>
              </article>
              <article className="format-card format-card-cream">
                <Clock3 size={26} />
                <p className="format-label">OSOBNE</p>
                <h3>Čas len pre<br />váš rozhovor.</h3>
                <p>Stretnutie v pokojnom prostredí, kde sa môžeme sústrediť na to, čo práve prežívate.</p>
                <a href="#kontakt">Mám záujem <ArrowRight size={16} /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="reading-section" id="citanie">
          <div className="shell reading-top reveal-up">
            <div><p className="eyebrow"><span /> Čítanie</p><h2>Myšlienky pre<br />každodenný život.</h2></div>
            <a href="#kontakt" className="button-outline">Dostať nové články <Send size={16} /></a>
          </div>
          <div className="shell articles-grid">
            {articles.map((article, index) => (
              <article className={`article-card article-card-${index + 1} reveal-up`} key={article.title}>
                <div className="article-art">
                  <img src={article.image} alt={article.imageAlt} loading="lazy" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="article-category">{article.category}</p>
                <h3>{article.title}</h3>
                <div className="article-meta"><span>{article.date}</span><a href="#kontakt" aria-label={`Prečítať článok: ${article.title}`}><ArrowRight size={18} /></a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-section">
          <div className="shell trust-grid reveal-up">
            <div className="trust-mark"><img src={images.logo} alt="" /></div>
            <div>
              <span className="section-index">03 / DÔVERA</span>
              <p>„Každý rozhovor môže byť začiatkom malého posunu — nie preto, že máme rýchlu odpoveď, ale preto, že na otázku už nie ste sami.“</p>
            </div>
            <div className="trust-footnote">Skutočné skúsenosti klientov zdieľam iba so súhlasom a s rešpektom k ich súkromiu.</div>
          </div>
        </section>

        <section className="contact-section" id="kontakt">
          <div className="contact-rose-shape" />
          <div className="shell contact-grid">
            <div className="contact-copy reveal-up">
              <p className="eyebrow eyebrow-light"><span /> Prvý krok</p>
              <h2>Môžeme začať<br /><em>jednou správou.</em></h2>
              <p>Napíšte mi pár slov o tom, čomu sa chcete venovať. Spolu zistíme, či a aká forma stretnutia by pre vás dávala zmysel.</p>
              <div className="contact-methods">
                <div><Phone size={18} /><span><b>Online alebo osobne</b><small>Formu stretnutia si vyberiete podľa potrieb.</small></span></div>
                <div><Clock3 size={18} /><span><b>Citlivý začiatok</b><small>Stačí stručne opísať, s čím prichádzate.</small></span></div>
                <div><Mail size={18} /><span><b>E-mail</b><a href="mailto:miroslavasautner@gmail.com">miroslavasautner@gmail.com</a></span></div>
              </div>
            </div>
            <form className="contact-form reveal-up reveal-delay-1" onSubmit={handleSubmit}>
              <div className="form-header"><span>NEZÁVÄZNÁ SPRÁVA</span><p>Ozvem sa vám hneď, ako to bude možné.</p></div>
              <label>Vaše meno<input required name="name" type="text" placeholder="Ako vás môžem osloviť?" /></label>
              <label>E-mail<input required name="email" type="email" placeholder="vas@email.sk" /></label>
              <label>Čo by ste chceli riešiť?<textarea required name="message" placeholder="Nemusí to byť dokonale sformulované." rows={4} /></label>
              <input className="form-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="form-actions"><button type="submit" className="button-primary button-dark">Pripraviť e-mail <Send size={17} /></button><small>Otvorí sa váš e-mailový program s pripravenou správou pre miroslavasautner@gmail.com.</small></div>
              {deliveryState === "drafted" && <p className="form-message"><Check size={17} /> Váš e-mailový program by mal mať pripravenú správu.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <a href="#uvod" className="brand brand-footer"><img src={images.logo} alt="" className="brand-mark" /><span className="brand-name">Miroslava Sautner</span><span className="brand-label">psychologička</span></a>
          <p>Priestor pre rozhovory, ktoré vám pomôžu nájsť väčšiu zrozumiteľnosť a oporu.</p>
          <a href="#uvod" className="back-top" aria-label="Späť hore"><CircleArrowUp size={27} /></a>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Miroslava Sautner</span><span>Psychologické poradenstvo</span><span>Ochrana súkromia doplní sa pred publikovaním</span></div>
      </footer>
    </div>
  );
}
