import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check, Heart, PartyPopper, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

const services = [
  {
    number: '01',
    title: 'Weddings',
    text: 'From intimate ceremonies to full-scale weekends, every detail is shaped around your story.',
    icon: Heart,
  },
  {
    number: '02',
    title: 'Private celebrations',
    text: 'Milestone birthdays, anniversaries and dinners with personality, warmth and a sense of occasion.',
    icon: PartyPopper,
  },
  {
    number: '03',
    title: 'Brand experiences',
    text: 'Thoughtful launches, dinners and gatherings that turn your brand into something guests can feel.',
    icon: Sparkles,
  },
]

const occasions = ['Weddings', 'Private celebrations', 'Brand experiences', 'Destination events']

function InquiryForm() {
  const [sent, setSent] = useState(false)

  function submitForm(event) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[430px] flex-col items-center justify-center rounded-[2rem] bg-white p-8 text-center shadow-[0_30px_90px_rgba(41,16,28,0.08)]">
        <span className="grid size-16 place-items-center rounded-full bg-blush/60 text-wine"><Check size={28} /></span>
        <h3 className="mt-6 font-display text-4xl text-ink">Your note is on its way.</h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-ink/55">Thank you for thinking of Tesol. We’ll be in touch within two business days to learn more about your celebration.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-berry underline underline-offset-8">Send another enquiry</button>
      </motion.div>
    )
  }

  const fieldClass = 'w-full border-b border-wine/15 bg-transparent px-0 py-3 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-berry'

  return (
    <form onSubmit={submitForm} className="rounded-[2rem] bg-white p-6 shadow-[0_30px_90px_rgba(41,16,28,0.08)] sm:p-9">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="eyebrow text-wine/60">
          Your name
          <input className={fieldClass} name="name" placeholder="Full name" required />
        </label>
        <label className="eyebrow text-wine/60">
          Email address
          <input className={fieldClass} name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label className="eyebrow text-wine/60">
          Event type
          <select className={fieldClass} name="eventType" defaultValue="" required>
            <option value="" disabled>Select one</option>
            {occasions.map((occasion) => <option key={occasion}>{occasion}</option>)}
          </select>
        </label>
        <label className="eyebrow text-wine/60">
          Date or season
          <input className={fieldClass} name="date" placeholder="e.g. December 2026" />
        </label>
      </div>
      <label className="eyebrow mt-7 block text-wine/60">
        Tell us a little more
        <textarea className={`${fieldClass} min-h-24 resize-y`} name="message" placeholder="Guest count, location, and what you are dreaming of..." required />
      </label>
      <button type="submit" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-berry px-6 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-wine sm:w-auto">
        Send enquiry <ArrowUpRight size={17} />
      </button>
    </form>
  )
}

export default function HomePage() {
  return (
    <PageIntro>
      <section className="relative overflow-hidden bg-white pb-16 pt-28 lg:min-h-[860px] lg:pb-24 lg:pt-36">
        <div className="absolute -left-36 top-44 size-96 rounded-full border border-wine/15 bg-blush/35" />
        <div className="page-shell grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative z-10 lg:pb-16">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="eyebrow mb-8 flex items-center gap-3 text-ink/60">
              <span className="size-1.5 rounded-full bg-berry" /> Lagos · Nigeria · Worldwide
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="display-title text-[clamp(3.25rem,7vw,6.5rem)] text-ink">
              Events,
              <span className="block italic text-berry">made to feel</span>
              <span className="block">like you.</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.52, duration: 0.6 }} className="mt-9 flex flex-col items-start gap-7 sm:flex-row sm:items-center">
              <a href="#inquire" className="inline-flex items-center gap-2 rounded-full bg-berry px-6 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-wine">
                Plan your event <ArrowUpRight size={17} />
              </a>
              <p className="max-w-xs text-sm leading-7 text-ink/55">We design and deliver soulful celebrations with beauty in the details and calm behind the scenes.</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative lg:ml-4">
            <div className="noise h-[570px] overflow-hidden rounded-[2rem_2rem_9rem_2rem] sm:h-[680px]">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=88"
                alt="Elegant candlelit event reception"
                className="image-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            </div>
            <div className="absolute -right-6 top-12 z-10 hidden size-28 place-items-center rounded-full border border-white/70 bg-blush text-center text-[0.65rem] font-semibold uppercase leading-4 tracking-[0.15em] text-ink shadow-xl sm:grid">
              Moments<br />made<br />meaningful
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-berry/20 bg-berry/20 py-5">
        <div className="marquee-track flex w-max items-center">
          {[...occasions, ...occasions].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-8 font-display text-xl italic text-ink/80 sm:px-12 sm:text-2xl">{item}</span>
              <Sparkles size={14} className="text-berry" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="page-shell">
          <motion.div {...reveal} className="grid gap-8 border-b border-wine/12 pb-14 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
            <p className="eyebrow text-berry">What we create</p>
            <div>
              <h2 className="display-title max-w-4xl text-4xl text-ink sm:text-5xl lg:text-6xl">More than a beautiful day. <span className="italic text-rosewood">A feeling that stays.</span></h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-ink/55">We pair creative direction with meticulous production, so your event feels personal, effortless and completely present from beginning to end.</p>
            </div>
          </motion.div>

          <div className="mt-8 grid lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.article key={service.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }} className="group border-b border-wine/12 py-9 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-wine/35">{service.number}</span>
                    <span className="grid size-11 place-items-center rounded-full bg-parchment text-wine transition duration-300 group-hover:-rotate-6 group-hover:bg-blush"><Icon size={19} /></span>
                  </div>
                  <h3 className="mt-14 font-display text-2xl text-ink">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink/50">{service.text}</p>
                  <Link to="/services" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-berry">Discover more <ArrowRight size={15} /></Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-parchment py-24 lg:py-32">
        <div className="page-shell">
          <motion.div {...reveal} className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-berry">Selected gatherings</p>
              <h2 className="display-title mt-5 text-4xl text-ink sm:text-5xl">Made with <span className="italic text-rosewood">intention.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-ink/50">No templates, no borrowed stories. Each gathering begins with its people and finds its own visual language.</p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-12 md:grid-rows-[310px_310px]">
            <motion.figure {...reveal} className="group relative min-h-[480px] overflow-hidden rounded-[2rem] md:col-span-7 md:row-span-2 md:min-h-0">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=88" alt="Wedding couple celebrating outdoors" className="image-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                <p className="eyebrow text-white/55">Wedding · Lagos</p>
                <p className="mt-3 font-display text-4xl">The Eze celebration</p>
              </figcaption>
            </motion.figure>

            <motion.figure {...reveal} className="group relative min-h-[310px] overflow-hidden rounded-[2rem] md:col-span-5">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1100&q=88" alt="Atmospheric live event with colorful lights" className="image-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="eyebrow text-white/55">Brand experience</p>
                <p className="mt-2 font-display text-3xl">After dark</p>
              </figcaption>
            </motion.figure>

            <motion.div {...reveal} className="flex min-h-[280px] flex-col justify-between rounded-[2rem] bg-berry p-7 text-ink md:col-span-5 md:min-h-0">
              <Sparkles className="text-wine" size={28} />
              <div>
                <p className="font-display text-5xl">94</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-ink/65">meaningful events produced, each with a story all its own.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="noise overflow-hidden bg-blush py-24 text-ink lg:py-32">
        <div className="page-shell relative z-10">
          <motion.div {...reveal} className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="eyebrow text-ink/55">How it unfolds</p>
              <h2 className="display-title mt-6 text-4xl sm:text-5xl">A calm process for a <span className="italic text-wine">remarkable</span> event.</h2>
              <p className="mt-8 max-w-md text-sm leading-7 text-ink/65">You stay close to the joyful decisions. We hold the timelines, suppliers, production details and all the things no guest should ever notice.</p>
            </div>
            <ol className="divide-y divide-ink/15 border-y border-ink/15">
              {[
                ['01', 'Listen', 'We begin with your people, priorities and the feeling you want to create.'],
                ['02', 'Imagine', 'A tailored concept brings the story, setting and guest journey into focus.'],
                ['03', 'Make it happen', 'We produce every detail and lead the day with a steady, trusted hand.'],
              ].map(([number, title, text]) => (
                <li key={number} className="grid grid-cols-[48px_1fr] gap-4 py-7 sm:grid-cols-[70px_160px_1fr] sm:items-start">
                  <span className="font-mono text-xs text-ink/45">{number}</span>
                  <span className="font-display text-2xl text-ink">{title}</span>
                  <span className="col-start-2 text-sm leading-7 text-ink/60 sm:col-start-3">{text}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.blockquote {...reveal} className="mt-24 border-t border-ink/15 pt-16 text-center">
            <p className="mx-auto max-w-4xl font-display text-3xl leading-tight text-ink sm:text-4xl">“They understood the soul of our celebration, then made every moving part feel entirely effortless.”</p>
            <footer className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/55">Nnenna & Ade · Ikoyi, Lagos</footer>
          </motion.blockquote>
        </div>
      </section>

      <section id="inquire" className="scroll-mt-20 bg-parchment py-24 lg:py-32">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <motion.div {...reveal}>
            <p className="eyebrow text-berry">Begin your story</p>
            <h2 className="display-title mt-6 text-4xl text-ink sm:text-5xl">Tell us what you’re <span className="italic text-rosewood">dreaming of.</span></h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-ink/55">Share the early details, even if they are still taking shape. We’ll reply within two business days with next steps.</p>
            <div className="mt-10 border-t border-wine/12 pt-7">
              <p className="eyebrow text-wine/40">Prefer email?</p>
              <a href="mailto:hello@tesol.events" className="mt-3 block font-display text-2xl text-wine">hello@tesol.events</a>
            </div>
          </motion.div>
          <motion.div {...reveal}><InquiryForm /></motion.div>
        </div>
      </section>
    </PageIntro>
  )
}
