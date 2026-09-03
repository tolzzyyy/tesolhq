import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Blocks, Check, Globe2, Heart, QrCode, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

const solutions = [
  {
    number: '01',
    title: 'Event Websites',
    text: 'Give your event somewhere to live online. We build functional websites for conferences, corporate events, celebrations, launches and private gatherings, designed to give guests the right information at the right time.',
    cta: 'Explore Event Websites',
    icon: Globe2,
  },
  {
    number: '02',
    title: 'Wedding Websites',
    text: 'Your wedding has a story. Your website should tell it properly. We create custom wedding websites that bring your love story, event details, RSVP, guest information, FAQs, travel details and more into one beautifully designed experience.',
    cta: 'Explore Wedding Websites',
    icon: Heart,
  },
  {
    number: '03',
    title: 'RSVP & Guest Management',
    text: 'Who exactly is coming? Know before they arrive. Create controlled RSVP experiences where guests can search for their names, access only the events they’re invited to and submit their responses.',
    cta: 'Explore RSVP Solutions',
    icon: UsersRound,
  },
  {
    number: '04',
    title: 'QR Access',
    text: 'The guest list shouldn’t be doing crowd control. TESOL can turn your guest list into a smarter access experience using personalized QR codes and digital verification. Know who’s expected. Know who’s arrived. Know where they should be.',
    cta: 'Explore QR Access',
    icon: QrCode,
  },
  {
    number: '05',
    title: 'Custom Event Solutions',
    text: 'Have a very specific problem? Good. Tell us. If your event needs something that doesn’t fit neatly into a box, we can design and build a solution around it.',
    cta: 'Reach Out To Us',
    icon: Blocks,
  },
]

const solutionOptions = ['Event Website', 'Wedding Website', 'RSVP & Guest Management', 'QR Access', 'Custom Event Solution']
const movingParts = ['Guest lists', 'RSVPs', 'Access', 'Information', 'Schedules', 'Updates', 'Questions']

function InquiryForm() {
  const [sent, setSent] = useState(false)

  function submitForm(event) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[430px] flex-col items-center justify-center rounded-[2rem] bg-white p-8 text-center shadow-[0_30px_90px_rgba(41,16,28,0.12)]">
        <span className="grid size-16 place-items-center rounded-full bg-berry text-ink"><Check size={28} /></span>
        <h3 className="mt-6 font-display text-3xl text-ink">Your enquiry is on its way.</h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-ink/60">Thank you for thinking of TESOL. We’ll be in touch within two business days to learn more about your project.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-plum underline underline-offset-8">Send another enquiry</button>
      </motion.div>
    )
  }

  const fieldClass = 'w-full border-b border-ink/20 bg-transparent px-0 py-3 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-berry'

  return (
    <form onSubmit={submitForm} className="rounded-[2rem] bg-white p-6 shadow-[0_30px_90px_rgba(41,16,28,0.12)] sm:p-9">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="eyebrow text-ink/60">
          Your name
          <input className={fieldClass} name="name" placeholder="Full name" required />
        </label>
        <label className="eyebrow text-ink/60">
          Email address
          <input className={fieldClass} name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label className="eyebrow text-ink/60">
          Solution needed
          <select className={fieldClass} name="solution" defaultValue="" required>
            <option value="" disabled>Select one</option>
            {solutionOptions.map((solution) => <option key={solution}>{solution}</option>)}
          </select>
        </label>
        <label className="eyebrow text-ink/60">
          Event or launch date
          <input className={fieldClass} name="date" placeholder="e.g. December 2026" />
        </label>
      </div>
      <label className="eyebrow mt-7 block text-ink/60">
        Tell us about your event
        <textarea className={`${fieldClass} min-h-24 resize-y`} name="message" placeholder="Your event, guest count and the problem you need to solve..." required />
      </label>
      <button type="submit" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-berry px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-wine sm:w-auto">
        Submit an enquiry <ArrowUpRight size={17} />
      </button>
    </form>
  )
}

export default function HomePage() {
  return (
    <PageIntro>
      <section className="relative overflow-hidden bg-white pb-16 pt-28 lg:min-h-[820px] lg:pb-24 lg:pt-36">
        <div className="absolute -left-36 top-44 size-96 rounded-full border border-wine/15 bg-blush/35" />
        <div className="page-shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative z-10 lg:pb-10">
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink/55">Events, built differently.</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="display-title text-[clamp(3rem,6.2vw,5.8rem)] text-ink">
              Building digital solutions for <span className="block italic text-berry sm:inline">every event.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48, duration: 0.6 }} className="mt-7 max-w-xl text-sm leading-7 text-ink/65 sm:text-base">
              TESOL delivers innovative digital solutions that bring together design and technology to create seamless, memorable event experiences.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.58, duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#inquire" className="inline-flex items-center gap-2 rounded-full bg-berry px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-wine">
                Submit an Enquiry <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative lg:ml-4">
            <div className="noise h-[520px] overflow-hidden rounded-[2rem_2rem_8rem_2rem] sm:h-[620px]">
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=88" alt="A beautifully produced event space" className="image-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-berry/20 bg-blush py-5">
        <div className="marquee-track flex w-max items-center">
          {[...solutionOptions, ...solutionOptions].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-8 font-display text-lg italic text-ink/85 sm:px-12 sm:text-xl">{item}</span>
              <span className="size-2 shrink-0 rounded-full bg-berry" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="page-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div {...reveal}>
            <p className="eyebrow text-berry">The big idea</p>
            <h2 className="display-title mt-6 text-4xl leading-[1.12] text-ink sm:text-5xl">Behind every great event is <span className="block italic text-wine sm:inline">a lot of moving parts.</span></h2>
          </motion.div>

          <motion.div {...reveal}>
            <div className="grid grid-cols-2 border-l border-t border-wine/20 sm:grid-cols-3">
              {movingParts.map((item) => (
                <div key={item} className="border-b border-r border-wine/20 px-4 py-5 font-mono text-xs uppercase tracking-[0.12em] text-ink/65">{item}.</div>
              ))}
              <div className="whitespace-nowrap border-b border-r border-wine/20 bg-wine px-3 py-5 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-ink sm:px-4 sm:text-xs sm:tracking-[0.12em]">What happens next?</div>
            </div>
            <p className="mt-8 text-sm leading-8 text-ink/60"><strong className="font-bold text-ink">TESOL</strong> creates event websites, RSVP experiences, guest management systems, digital access solutions and custom event platforms designed around how your event actually works.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-parchment py-24 lg:py-32">
        <div className="page-shell">
          <motion.div {...reveal} className="grid gap-7 border-b border-wine/25 pb-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <p className="eyebrow text-berry">What TESOL builds</p>
            <h2 className="display-title text-4xl text-ink sm:text-5xl">One event. <span className="block italic text-wine sm:inline">A lot of possibilities.</span></h2>
          </motion.div>

          <div className="mt-8 grid gap-5 lg:auto-rows-fr lg:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.article key={solution.title} {...reveal} transition={{ ...reveal.transition, delay: (index % 2) * 0.08 }} className={`group flex h-full min-h-[390px] flex-col rounded-[2rem] border border-wine/15 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(98,54,97,0.1)] sm:p-9 ${index === solutions.length - 1 ? 'lg:col-span-2 lg:min-h-[280px] lg:flex-row lg:items-center lg:gap-14' : ''}`}>
                  <div className="flex items-center justify-between lg:min-w-40">
                    <span className="font-mono text-xs text-plum/55">{solution.number}</span>
                    <span className={`grid size-11 place-items-center ${index < 4 ? 'text-berry' : 'rounded-full bg-berry text-ink'}`}><Icon size={19} /></span>
                  </div>
                  <div className={index === solutions.length - 1 ? 'mt-8 lg:mt-0' : 'mt-10 flex flex-1 flex-col'}>
                    <h3 className="font-display text-2xl text-ink sm:text-3xl">{solution.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/60">{solution.text}</p>
                    <Link to={solution.number === '05' ? '/#inquire' : '/services'} className={`inline-flex self-start items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-plum ${index === solutions.length - 1 ? 'mt-7' : 'mt-auto pt-7'}`}>{solution.cta} <ArrowRight size={14} /></Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="noise overflow-hidden bg-blush py-24 text-ink lg:py-32">
        <div className="page-shell relative z-10">
          <motion.div {...reveal} className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <h2 className="display-title text-4xl leading-[1.1] sm:text-5xl">A calm process for a <span className="italic text-berry">remarkable</span> event.</h2>
            <blockquote className="rounded-[2rem] border border-berry/20 bg-white/65 p-8 text-center shadow-[0_24px_70px_rgba(98,54,97,0.08)] sm:p-12">
              <p className="mx-auto max-w-4xl font-display text-3xl leading-tight text-ink sm:text-4xl">“They understood the soul of our celebration, then made every moving part feel entirely effortless.”</p>
              <footer className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-ink/50">Nnenna &amp; Ade · Ikoyi, Lagos</footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section id="inquire" className="scroll-mt-20 bg-parchment py-24 lg:py-32">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <motion.div {...reveal}>
            <h2 className="display-title text-4xl text-ink sm:text-5xl">Tell us about your events</h2>
          </motion.div>
          <motion.div {...reveal}><InquiryForm /></motion.div>
        </div>
      </section>
    </PageIntro>
  )
}
