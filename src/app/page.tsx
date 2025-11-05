'use client'

import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Calendar, Shield, FileText, Scale, Gavel, Landmark, Globe } from "lucide-react";

// Image paths - place images in public folder
const LOGO_SRC = "/blg_logo.png";
const SARA_PHOTO = "/sara_hussain.png";

// Nav, testimonials, and blog data
const NAV_ITEMS = [
  { label: "Practice Areas", href: "#practice" },
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

const TESTIMONIALS = [
  { name: "Vadim Knyaz", year: "2019", text: "We used services of BLG Legal Services many times and the firm does not stop to wow us with the professionalism and the subject matter expertise of U.S. immigration laws. ... Not only they were able to solve the case, but also showed a very calm and empathetic demeanor that helped us to get through the hard time." },
  { name: "Rachel Kemelman", year: "2019", text: "BLG Legal Services has provided us professional, honest, trustworthy, efficient and reliable! They truly care about their clients. I highly recommend BLG Legal Services!" },
  { name: "Yana Pechersky, Esq.", year: "2019", text: "I've had the pleasure of knowing BLG Legal Services team professionally and working with them for over a decade. An excellent team — knowledgeable, diligent, caring and extremely professional." },
] as const;

const BLOG_POSTS = [
  { title: "When should I apply for an extension of stay with USCIS?", href: "https://blglegalservices.com/f/when-should-i-apply-for-an-extension-of-stay-with-uscis", blurb: "USCIS suggests filing at least 45 days before your stay expires or as soon as you know you need more time." },
  { title: "USCIS Launched Online Rescheduling of Biometrics Appointments", href: "https://blglegalservices.com/f/uscis-launched-online-rescheduling-of-biometrics-appointments", blurb: "A new self-service tool lets many benefit requestors reschedule biometrics online before the scheduled date." },
  { title: "Great news for Israeli citizens!", href: "https://blglegalservices.com/f/great-news-for-israeli-citizens", blurb: "As of Sept. 27, 2023, Israel joined the Visa Waiver Program (VWP), easing travel for eligible Israelis." },
] as const;

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredDateTime: string;
  topic: string;
  message: string;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    preferredDateTime: "",
    topic: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: null, message: "" });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    try {
      // For static sites, use mailto fallback
      const mailtoLink = `mailto:law@blglegalservices.com?subject=Consultation Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date/Time: ${formData.preferredDateTime}\nTopic: ${formData.topic}\nMessage: ${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setFormStatus({ type: "success", message: "Thank you! Your email client should open. If not, please email us directly at law@blglegalservices.com" });
      setFormData({ name: "", email: "", phone: "", preferredDateTime: "", topic: "", message: "" });
    } catch (error) {
      setFormStatus({ type: "error", message: "Something went wrong. Please email us directly at law@blglegalservices.com" });
    }
  };

  // SEO JSON-LD schema
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "BLG Legal Services",
    url: "https://blglegalservices.com",
    telephone: "+16469489555",
    address: {
      "@type": "PostalAddress",
      streetAddress: "300 Cadman Plaza West, 12th Floor",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: "11201",
      addressCountry: "US",
    },
    areaServed: "US",
    sameAs: [
      "https://www.facebook.com/blglegalservices/",
    ],
    priceRange: "$$",
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-4 lg:px-8 py-2 text-sm bg-slate-50 border-b">
        <div className="flex gap-6">
          <a href="tel:+16469489555" className="flex items-center gap-2 hover:opacity-80"><Phone size={16}/> 646-948-9555</a>
          <a href="mailto:law@blglegalservices.com" className="flex items-center gap-2 hover:opacity-80"><Mail size={16}/> law@blglegalservices.com</a>
          <span className="flex items-center gap-2"><MapPin size={16}/> 300 Cadman Plaza West, 12th Floor, Brooklyn, NY 11201</span>
        </div>
        <div className="flex gap-4">
          <a className="underline" href="#contact">Русский</a>
          <a className="underline" href="#contact">Uzbek</a>
          <a className="underline" href="#contact">Español</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 overflow-hidden rounded-full bg-white border grid place-content-center">
              <img src={LOGO_SRC} alt="BLG Legal Services logo" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <div className="font-semibold leading-tight">BLG Legal Services</div>
              <div className="text-xs text-slate-500">Immigration • Trademarks • Business</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((n)=> (
              <a key={n.href} href={n.href} className="hover:text-slate-600">{n.label}</a>
            ))}
            <a href="#contact" className="hidden lg:inline-block px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Book Consultation</a>
          </nav>
          <button onClick={()=>setOpen(true)} className="md:hidden p-2" aria-label="Open menu"><Menu/></button>
        </div>
        {open && (
          <div className="md:hidden fixed inset-0 bg-white/95 z-50">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="font-semibold">Menu</div>
              <button onClick={()=>setOpen(false)} className="p-2" aria-label="Close menu"><X/></button>
            </div>
            <div className="p-6 flex flex-col gap-4 text-lg">
              {NAV_ITEMS.map((n)=> (
                <a key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</a>
              ))}
              <a href="#contact" onClick={()=>setOpen(false)} className="px-4 py-2 rounded-xl bg-slate-900 text-white w-fit">Book Consultation</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white"/>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Your Trusted Immigration Law Firm</h1>
            <p className="mt-4 text-slate-600 max-w-prose">From asylum and family petitions to waivers, visas, and removal defense, BLG Legal Services provides responsive counsel and meticulous filings. Big‑firm rigor, boutique attention.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Book a Consultation</a>
              <a href="#practice" className="px-5 py-3 rounded-xl border">Explore Services</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Shield size={16}/> 10+ years experience</div>
              <div className="flex items-center gap-2"><Globe size={16}/> Multilingual team</div>
              <div className="flex items-center gap-2"><Calendar size={16}/> Same‑week consults</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-slate-200 shadow-xl overflow-hidden">
              <img loading="lazy" src="https://images.unsplash.com/photo-1533674689012-3362c91f8ecf?q=80&w=1400&auto=format&fit=crop" alt="Immigration law NYC" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl p-4 w-64">
              <div className="text-sm font-medium">Why clients choose BLG</div>
              <ul className="text-sm text-slate-600 mt-2 list-disc ml-5 space-y-1">
                <li>Honest, practical guidance</li>
                <li>Transparent pricing</li>
                <li>Hands‑on involvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Practice Areas</h2>
          <p className="mt-2 text-slate-600 max-w-prose">Explore our full range of immigration and legal services tailored to individuals, families, and businesses.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FileText/>, title: "Family Petitions & Marriage‑Based", desc: "I‑130, I‑485, I‑751 (joint/waiver), consular processing" },
              { icon: <Gavel/>, title: "Removal Defense", desc: "Asylum, withholding, CAT, cancellation, bond, appeals" },
              { icon: <Scale/>, title: "Humanitarian", desc: "Asylum, VAWA, U visas, TPS, parole, waivers" },
              { icon: <Landmark/>, title: "Citizenship & Naturalization", desc: "N‑400 eligibility review, interview prep, N‑336" },
              { icon: <Shield/>, title: "Business & Work", desc: "H‑1B, L‑1, O‑1, E‑2, PERM/I‑140 strategy" },
              { icon: <Globe/>, title: "Trademarks & Business", desc: "USPTO filings, LLC/Corp formation, contracts" },
            ].map((c) => (
              <div key={c.title} className="group bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white grid place-content-center mb-4">{c.icon}</div>
                <div className="font-semibold">{c.title}</div>
                <p className="text-sm text-slate-600 mt-2">{c.desc}</p>
                <a href="#contact" className="inline-block mt-4 text-sm underline underline-offset-4">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Team</h2>
          <p className="mt-2 text-slate-600 max-w-prose">Meet Our Team - We provide services in the following languages: English, Spanish, Russian, Hebrew and Uzbek.</p>
          <div className="mt-8 grid md:grid-cols-1 gap-8">
            <article className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-40 h-40 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                <img src={SARA_PHOTO} alt="Sara Hussain Al Hashimi" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sara Hussain Al Hashimi</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Sara is a highly accomplished professional specializing in immigration, refugee, and citizenship matters. Originally from Kazakhstan, she is fluent in seven languages, allowing her to effectively communicate with diverse communities. With an extensive career spanning over 30 years, Sara has gained invaluable expertise in both the United States and Canada.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Sara's commitment to her field is unparalleled, and her exceptional track record is a testament to her dedication and proficiency. She has diligently served as a trusted advisor, assisting individuals and families in navigating the complexities of immigration, refugee, and citizenship processes. Her vast experience has equipped her with a deep understanding of the legal frameworks and cultural nuances associated with these areas.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Throughout her career, Sara has consistently demonstrated a compassionate and client-centered approach, ensuring personalized solutions tailored to the unique circumstances of each individual. Her unwavering commitment to excellence has earned her a stellar reputation within the immigration community.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  As a multilingual professional, Sara is able to bridge language barriers and effectively communicate with clients from various cultural backgrounds. This linguistic versatility allows her to provide comprehensive support and foster trust and understanding with those she assists.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Sara's achievements and contributions have made her a highly sought-after expert in the field. Her unwavering dedication to her clients and her deep-rooted passion for immigration, refugee, and citizenship matters make her an invaluable asset to any organization or individual seeking reliable guidance and assistance.
                </p>
                <div className="mt-4 space-y-2 text-slate-700">
                  <div className="flex items-center gap-2"><Mail size={16}/> smartimmigration62@gmail.com</div>
                  <div className="flex items-center gap-2"><Phone size={16}/> +1 (226) 700-2840</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Client Reviews</h2>
          <p className="mt-2 text-slate-600 max-w-prose">Real testimonials from our clients.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t)=> (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border">
                <div className="flex gap-1 mb-2" aria-label={`5 star rating`}>
                  {Array.from({length: 5}).map((_,i)=> (<span key={i}>⭐</span>))}
                </div>
                <p className="text-slate-700">"{t.text}"</p>
                <div className="mt-3 text-sm font-medium">— {t.name}{t.year ? `, ${t.year}` : ''}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold">From the Blog</h2>
          <p className="mt-2 text-slate-600">Latest posts from BLG Legal Services.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((p)=> (
              <article key={p.title} className="rounded-2xl border shadow-sm overflow-hidden">
                <div className="aspect-video bg-slate-200"/>
                <div className="p-5">
                  <h3 className="font-semibold"><a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{p.title}</a></h3>
                  <p className="text-sm text-slate-600 mt-2">{p.blurb}</p>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm underline underline-offset-4">Read more</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Intake */}
      <section id="contact" className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Speak with Our Team</h2>
            <p className="mt-3 text-slate-200 max-w-prose">Fast, confidential consultation. Tell us about your case and preferred time, and our team will respond promptly.</p>
            <div className="mt-6 space-y-3 text-slate-200 text-sm">
              <div className="flex items-center gap-2"><Phone size={18}/> 646-948-9555</div>
              <div className="flex items-center gap-2"><Mail size={18}/> law@blglegalservices.com</div>
              <div className="flex items-center gap-2"><MapPin size={18}/> 300 Cadman Plaza West, 12th Floor, Brooklyn, NY 11201</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl grid gap-4">
            {formStatus.type && (
              <div className={`p-3 rounded-xl ${formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                {formStatus.message}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input 
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border rounded-xl px-4 py-3 w-full" 
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border rounded-xl px-4 py-3 w-full" 
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input 
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border rounded-xl px-4 py-3 w-full" 
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="preferredDateTime" className="sr-only">Preferred date/time</label>
                <input 
                  id="preferredDateTime"
                  name="preferredDateTime"
                  type="text"
                  value={formData.preferredDateTime}
                  onChange={handleInputChange}
                  className="border rounded-xl px-4 py-3 w-full" 
                  placeholder="Preferred date/time"
                />
              </div>
            </div>
            <div>
              <label htmlFor="topic" className="sr-only">Topic</label>
              <select 
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                className="border rounded-xl px-4 py-3 w-full"
              >
                <option value="">Topic</option>
                <option value="Family / Marriage">Family / Marriage</option>
                <option value="Asylum / Removal">Asylum / Removal</option>
                <option value="Humanitarian / TPS / Parole">Humanitarian / TPS / Parole</option>
                <option value="Business / Work">Business / Work</option>
                <option value="Trademark / Business Formation">Trademark / Business Formation</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="border rounded-xl px-4 py-3 w-full" 
                placeholder="Briefly describe your situation (no confidential info)"
              />
            </div>
            <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Request Consultation</button>
            <p className="text-xs text-slate-500">By submitting, you agree this form does not create an attorney‑client relationship. Do not send confidential information.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold">BLG Legal Services</div>
            <p className="text-sm text-slate-600 mt-2">Helping clients nationwide with immigration, trademarks, and business law.</p>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-2 text-sm text-slate-600 space-y-2">
              <li><a href="#practice" className="hover:underline">Practice Areas</a></li>
              <li><a href="#team" className="hover:underline">Our Team</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Disclaimer</div>
            <p className="text-xs text-slate-600 mt-2">This website provides general information only and does not constitute legal advice; no attorney‑client relationship is formed by viewing or contacting us.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-6 text-xs text-slate-500">© {new Date().getFullYear()} BLG Legal Services. All rights reserved.</div>
      </footer>

      {/* Floating CTA */}
      <a href="#contact" className="fixed bottom-6 right-6 px-4 py-3 rounded-full shadow-xl bg-slate-900 text-white flex items-center gap-2 hover:bg-slate-800 transition">
        <Phone size={18}/> Free Case Evaluation
      </a>

      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }} />
    </div>
  );
}

