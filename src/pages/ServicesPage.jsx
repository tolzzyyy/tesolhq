import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Check, Minus, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'

const serviceDetails = [
  {
    number: '01',
    title: 'Full-service weddings',
    subtitle: 'For celebrations that deserve room to breathe.',
    description: 'We guide the entire journey—from your first ideas and venue search to the last song of the night. The result is refined, personal and entirely yours, with our team quietly managing every layer behind it.',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=88',
    alt: 'Elegant place setting at a formal event',
    includes: ['Creative direction & event identity', 'Venue and supplier curation', 'Guest journey & RSVP planning', 'Budget, timeline & production management', 'On-the-day coordination'],
  },
  {
    number: '02',
    title: 'Private celebrations',
    subtitle: 'Milestones made deeply personal.',
    description: 'A significant birthday, intimate dinner or long-awaited anniversary should feel unmistakably like its host. We build the experience around the people in the room, with thoughtful details that invite connection.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=88',
    alt: 'Long dinner table set for an elegant celebration',
    includes: ['Concept & tablescape design', 'Venue sourcing', 'Food, drink & entertainment curation', 'Invitations and guest communications', 'Full event-day production'],
  },
  {
    number: '03',
    title: 'Brand experiences',
    subtitle: 'Where your brand becomes a feeling.',
    description: 'From launches and press dinners to community moments, we create polished, purposeful events that express your brand in three dimensions and give guests something worth talking about.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=88',
    alt: 'Immersive stage lighting at a live brand event',
    includes: ['Experience strategy & creative concept', 'Spatial and sensory design', 'Production partner management', 'Guest list flow & hospitality', 'Show calling and live delivery'],
  },
]

const faqs = [
  ['How far in advance should we reach out?', 'For full-service weddings, 9–15 months gives us the best range of venues and suppliers. Private and brand events can often be planned within 8–16 weeks, depending on scale. If your date is closer, still get in touch—we love a focused brief.'],
  ['Do you plan events outside Lagos?', 'Yes. We produce celebrations across Nigeria and take on a select number of destination events each year. Travel and local production support are scoped clearly in your proposal.'],
  ['Can you work with suppliers we have already booked?', 'Absolutely. We are happy to join an existing team, review what is already in place and build the remaining plan around your confirmed partners.'],
  ['What does your fee cover?', 'Our fee reflects creative development, planning time, supplier management and live production. After our discovery call, you will receive a tailored scope and transparent fee based on your event’s size and complexity.'],
]

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-wine/12">
      <button type="button" onClick={onClick} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={isOpen}>
        <span className="font-display text-xl text-ink sm:text-2xl">{question}</span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-wine/15 text-wine">{isOpen ? <Minus size={15} /> : <Plus size={15} />}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="max-w-3xl pb-7 text-sm leading-7 text-ink/55">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <PageIntro>
      <section className="relative overflow-hidden bg-parchment pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="absolute right-[-8rem] top-12 size-[32rem] rounded-full border border-wine/15 bg-blush/35" />
        <div className="page-shell relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow text-berry">How we can help</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.7 }} className="display-title mt-7 max-w-4xl text-[clamp(3.25rem,6.5vw,6.1rem)] text-ink">
              Thoughtfully planned. <span className="italic text-berry">Beautifully felt.</span>
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="lg:pb-2">
            <p className="max-w-lg text-base leading-8 text-ink/55">Our work sits at the meeting point of creative direction and exacting production. Every service is tailored, every recommendation considered, every event held with care.</p>
            <a href="#services-list" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-berry">Explore our services <ArrowDown size={15} /></a>
          </motion.div>
        </div>
      </section>

      <section id="services-list" className="scroll-mt-20 bg-cream py-24 lg:py-32">
        <div className="page-shell space-y-24 lg:space-y-36">
          {serviceDetails.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"
            >
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`noise h-[470px] overflow-hidden ${index === 1 ? 'rounded-[8rem_2rem_2rem_2rem]' : 'rounded-[2rem_2rem_8rem_2rem]'} sm:h-[580px]`}>
                  <img src={service.image} alt={service.alt} className="image-cover" />
                </div>
                <span className="absolute -bottom-5 right-5 z-10 grid size-20 place-items-center rounded-full border-4 border-cream bg-berry font-mono text-xs text-ink sm:-right-5 sm:size-24">{service.number}</span>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="eyebrow text-berry">{service.subtitle}</p>
                <h2 className="display-title mt-6 text-4xl text-ink sm:text-5xl">{service.title}</h2>
                <p className="mt-7 text-sm leading-8 text-ink/55">{service.description}</p>
                <div className="mt-9 border-t border-wine/12 pt-7">
                  <p className="eyebrow text-wine/40">What this can include</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink/65">
                        <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-blush text-wine"><Check size={10} strokeWidth={2.5} /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/#inquire" className="mt-9 inline-flex items-center gap-2 rounded-full border border-berry/50 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-plum transition hover:border-berry hover:bg-berry hover:text-ink">Discuss your event <ArrowUpRight size={15} /></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-blush py-24 text-ink lg:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow text-ink/55">Our approach</p>
            <h2 className="display-title mt-6 text-4xl sm:text-5xl">The polish you see. The rigour <span className="italic text-wine">you don’t.</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {[
              ['One clear point of contact', 'You always know who to call, what happens next and where every decision stands.'],
              ['A trusted creative network', 'We bring together excellent suppliers whose craft and care match the vision.'],
              ['Beautifully managed budgets', 'Ambition and investment stay aligned through clear, current cost planning.'],
              ['Presence on the day', 'Our production team holds every cue so you can be entirely inside the moment.'],
            ].map(([title, text], index) => (
              <div key={title} className="border-t border-ink/15 pt-5">
                <span className="font-mono text-[0.62rem] text-ink/45">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-parchment py-24 lg:py-32">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="eyebrow text-berry">Good to know</p>
            <h2 className="display-title mt-6 text-4xl text-ink sm:text-5xl">A few common <span className="italic text-rosewood">questions.</span></h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-ink/50">Still wondering about something? Send us a note and we’ll happily talk it through.</p>
          </div>
          <div className="border-t border-wine/12">
            {faqs.map(([question, answer], index) => (
              <FaqItem key={question} question={question} answer={answer} isOpen={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="page-shell overflow-hidden rounded-[2rem] border border-wine/15 bg-blush px-6 py-16 text-center text-ink sm:px-12 lg:py-24">
          <p className="eyebrow text-ink/55">Have a date in mind?</p>
          <h2 className="display-title mx-auto mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">Let’s make something <span className="italic text-berry">wonderful</span> together.</h2>
          <Link to="/#inquire" className="mt-9 inline-flex items-center gap-2 rounded-full bg-berry px-6 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-wine">Start a conversation <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </PageIntro>
  )
}
