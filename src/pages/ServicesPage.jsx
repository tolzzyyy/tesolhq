import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Check, Minus, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'

const serviceDetails = [
  {
    number: '01',
    title: 'Event Websites',
    lead: 'Give your event somewhere to live online.',
    description: 'We build functional websites for conferences, corporate events, celebrations, launches and private gatherings, designed to give guests the right information at the right time.',
    includes: ['Event information architecture', 'Responsive custom design', 'Schedules and speaker details', 'Guest information and FAQs', 'Updates from one central place'],
  },
  {
    number: '02',
    title: 'Wedding Websites',
    lead: 'Your wedding has a story. Your website should tell it properly.',
    description: 'We create custom wedding websites that bring your love story, event details, RSVP, guest information, FAQs, travel details and more into one beautifully designed experience.',
    includes: ['Your story and visual identity', 'Multi-event details', 'Integrated RSVP journey', 'Travel and accommodation', 'Guest FAQs and updates'],
  },
  {
    number: '03',
    title: 'RSVP & Guest Management',
    lead: 'Who exactly is coming? Know before they arrive.',
    description: 'Create controlled RSVP experiences where guests can search for their names, access only the events they’re invited to and submit their responses.',
    includes: ['Searchable guest lists', 'Invitation-based event access', 'RSVP response collection', 'Guest categories and permissions', 'Live attendance visibility'],
  },
  {
    number: '04',
    title: 'QR Access',
    lead: 'The guest list shouldn’t be doing crowd control.',
    description: 'TESOL can turn your guest list into a smarter access experience using personalized QR codes and digital verification. Know who’s expected. Know who’s arrived. Know where they should be.',
    includes: ['Personalized guest QR codes', 'Fast digital verification', 'Arrival and attendance tracking', 'Access rules by event or zone', 'Simple tools for access teams'],
  },
  {
    number: '05',
    title: 'Custom Event Solutions',
    lead: 'Have a very specific problem? Good. Tell us.',
    description: 'If your event needs something that doesn’t fit neatly into a box, we can design and build a solution around it.',
    includes: ['Problem and workflow discovery', 'Tailored product strategy', 'Custom design and development', 'Testing around real event needs', 'Launch and event support'],
  },
]

const faqs = [
  ['What types of events does TESOL support?', 'We build solutions for conferences, corporate events, launches, weddings, private gatherings and other experiences that need a clear digital guest journey.'],
  ['Can TESOL work with an existing guest list?', 'Yes. We can structure and import an existing guest list, then build the RSVP, invitation and access rules around how your event is organised.'],
  ['Can guests be invited to different parts of an event?', 'Yes. Controlled RSVP flows can show each guest only the events, sessions or access areas assigned to them.'],
  ['What if we need something not listed here?', 'That is exactly what our custom event solutions are for. Tell us the problem, the people involved and how the event needs to work, and we will scope a tailored approach.'],
]

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-ink/15">
      <button type="button" onClick={onClick} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={isOpen}>
        <span className="font-display text-lg text-ink sm:text-xl">{question}</span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/20 text-ink">{isOpen ? <Minus size={15} /> : <Plus size={15} />}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="max-w-3xl pb-7 text-sm leading-7 text-ink/65">{answer}</p>
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
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow text-ink/60">Explore our solutions</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.7 }} className="display-title mt-7 max-w-4xl text-[clamp(2.6rem,6vw,5.8rem)] text-ink">
              One event. <span className="italic text-berry">A lot of possibilities.</span>
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="lg:pb-2">
            <p className="max-w-lg text-base leading-8 text-ink/65">Event websites, RSVP experiences, guest management systems, digital access and custom platforms — built around how your event actually works.</p>
            <a href="#services-list" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink">See what we build <ArrowDown size={15} /></a>
          </motion.div>
        </div>
      </section>

      <section id="services-list" className="scroll-mt-20 bg-cream py-20 lg:py-28">
        <div className="page-shell">
          {serviceDetails.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-7 border-t border-wine/25 py-12 lg:grid-cols-[100px_1fr_0.9fr] lg:gap-14 lg:py-16"
            >
              <div>
                <span className={`grid size-16 place-items-center rounded-full font-mono text-xs text-ink ${index % 2 === 0 ? 'bg-berry' : 'bg-wine'}`}>{service.number}</span>
              </div>
              <div>
                <p className="eyebrow text-plum/60">{service.lead}</p>
                <h2 className="display-title mt-5 text-4xl text-ink sm:text-5xl">{service.title}</h2>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-ink/65">{service.description}</p>
                <Link to="/#inquire" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-plum">Talk to us about this <ArrowUpRight size={14} /></Link>
              </div>
              <div className="rounded-2xl bg-parchment p-6 sm:p-7">
                <p className="eyebrow text-plum/55">This can include</p>
                <ul className="mt-5 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink/65">
                      <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-berry text-ink"><Check size={10} strokeWidth={2.5} /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-blush py-24 text-ink lg:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow text-ink/55">How we think</p>
            <h2 className="display-title mt-6 text-4xl sm:text-5xl">Design and technology, built around <span className="italic text-wine">the real event.</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {[
              ['Understand the event', 'We map the guests, information, access rules and moving parts before deciding what to build.'],
              ['Design the journey', 'Every screen and interaction is shaped around what organisers and guests need to do next.'],
              ['Build and test', 'We turn the agreed experience into a reliable digital product and test the important paths.'],
              ['Support the launch', 'We help your team get ready, bring the platform live and support the event experience.'],
            ].map(([title, text], index) => (
              <div key={title} className="border-t border-ink/15 pt-5">
                <span className="font-mono text-[0.62rem] text-ink/45">0{index + 1}</span>
                <h3 className="mt-3 font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/65">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-parchment py-24 lg:py-32">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="eyebrow text-berry">Good to know</p>
            <h2 className="display-title mt-6 text-4xl text-ink sm:text-5xl">A few common <span className="italic text-wine">questions.</span></h2>
          </div>
          <div className="border-t border-ink/15">
            {faqs.map(([question, answer], index) => (
              <FaqItem key={question} question={question} answer={answer} isOpen={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="page-shell overflow-hidden rounded-[2rem] border border-wine/15 bg-blush px-6 py-16 text-center text-ink sm:px-12 lg:py-24">
          <p className="eyebrow text-ink/55">Have a specific problem?</p>
          <h2 className="display-title mx-auto mt-6 max-w-4xl text-4xl sm:text-5xl">Good. <span className="italic text-berry">Tell us.</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-ink/65">If your event needs something that does not fit neatly into a box, we can design and build a solution around it.</p>
          <Link to="/#inquire" className="mt-9 inline-flex items-center gap-2 rounded-full bg-berry px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-wine">Reach Out To Us <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </PageIntro>
  )
}
