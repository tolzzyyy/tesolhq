import { motion } from 'framer-motion'
import { ArrowUpRight, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import PageIntro from '../components/PageIntro'

const sections = [
  ['overview', 'Overview'],
  ['information', 'Information we collect'],
  ['use', 'How we use it'],
  ['sharing', 'How we share it'],
  ['cookies', 'Cookies'],
  ['retention', 'Retention & security'],
  ['rights', 'Your rights'],
  ['contact', 'Contact us'],
]

export default function PrivacyPage() {
  return (
    <PageIntro>
      <section className="relative overflow-hidden bg-parchment pb-20 pt-36 text-ink lg:pb-28 lg:pt-44">
        <div className="absolute -right-36 top-8 size-[34rem] rounded-full border border-wine/15 bg-blush/30" />
        <div className="absolute -right-12 top-32 size-80 rounded-full border border-wine/15" />
        <div className="page-shell relative z-10 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow flex items-center gap-3 text-ink/55">
              <LockKeyhole size={14} /> Your privacy matters
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.7 }} className="display-title mt-7 max-w-4xl text-[clamp(3.25rem,6.5vw,6.1rem)]">
              Privacy, in <span className="italic text-berry">plain language.</span>
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-ink/65">We value the trust that comes with handling event and guest data. This policy explains what information we collect, why we use it and the choices you have.</p>
            <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/50">Effective 3 September 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="page-shell grid min-w-0 gap-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-24">
          <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-berry">On this page</p>
            <nav className="mt-5 grid w-full min-w-0 grid-cols-2 border-t border-wine/12 lg:flex lg:flex-col lg:border-t-0" aria-label="Privacy policy sections">
              {sections.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="border-b border-wine/12 py-3 pr-3 text-xs leading-5 text-ink/55 transition hover:text-wine lg:border-b-0 lg:border-l lg:py-1 lg:pl-4 lg:pr-0 lg:text-sm">{label}</a>
              ))}
            </nav>

            <div className="mt-9 hidden rounded-2xl bg-parchment p-5 lg:block">
              <ShieldCheck size={22} className="text-berry" />
              <p className="mt-4 text-xs leading-6 text-ink/50">Questions about your data? Email our privacy team and we’ll respond as soon as reasonably possible.</p>
              <a href="mailto:privacy@tesol.events" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-wine">Email us <ArrowUpRight size={13} /></a>
            </div>
          </aside>

          <motion.article initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6 }} className="legal-copy min-w-0 max-w-3xl">
            <section id="overview" className="scroll-mt-28">
              <p className="eyebrow !mb-5 !text-xs !leading-none !text-berry">01 · Overview</p>
              <h2 className="!mt-0">Who we are</h2>
              <p>Tesol, short for The Event Solutions (“Tesol”, “we”, “us” or “our”), is an event-technology and digital solutions business based in Lagos, Nigeria. This Privacy Policy applies when you visit our website, submit an enquiry, become a client, use a digital event experience we provide, join our mailing list or otherwise interact with us.</p>
              <p>By using our website or providing information to us, you acknowledge the practices described in this policy. Where consent is the appropriate legal basis, we will ask for it clearly.</p>
            </section>

            <section id="information" className="scroll-mt-28">
              <p className="eyebrow !mb-5 !mt-14 !text-xs !leading-none !text-berry">02 · Information we collect</p>
              <h2 className="!mt-0">The details you share with us</h2>
              <p>The information we collect depends on how you interact with us and may include:</p>
              <ul>
                <li><strong>Contact information</strong>, such as your name, email address, telephone number and postal address.</li>
                <li><strong>Event and platform information</strong>, including event dates, locations, schedules, invitations, access rules and details needed to build or use an event solution.</li>
                <li><strong>Client and service records</strong>, such as project briefs, proposals, agreements, invoices, payment status and business contact details.</li>
                <li><strong>Guest information</strong> provided by an event organiser or directly by a guest, including invitation status, RSVP responses, access permissions, QR identifiers, dietary needs and accessibility requests.</li>
                <li><strong>Communications</strong> you send us by email, enquiry form, telephone, social media or other channels.</li>
                <li><strong>Technical information</strong>, including device type, browser, approximate location, IP address and website activity collected through cookies or similar technologies.</li>
              </ul>
              <h3>Sensitive information</h3>
              <p>Some event details—such as dietary requirements or accessibility needs—may reveal sensitive information. We collect and use this only when it is necessary to provide the requested digital experience and where we have an appropriate legal basis.</p>
            </section>

            <section id="use" className="scroll-mt-28">
              <p className="eyebrow !mb-5 !mt-14 !text-xs !leading-none !text-berry">03 · How we use it</p>
              <h2 className="!mt-0">Why we need your information</h2>
              <p>We use personal information to:</p>
              <ul>
                <li>respond to enquiries and prepare tailored proposals;</li>
                <li>design, build, operate and support event websites and custom platforms;</li>
                <li>manage RSVPs, guest records, invitations, QR codes and digital access permissions;</li>
                <li>deliver event information, updates and guest communications;</li>
                <li>manage contracts, invoices, payments and our business records;</li>
                <li>send service-related messages and important event updates;</li>
                <li>send marketing communications where you have opted in or where otherwise permitted;</li>
                <li>operate, secure, analyse and improve our website and services; and</li>
                <li>meet legal, regulatory, insurance and fraud-prevention obligations.</li>
              </ul>
              <p>We rely on the legal basis that fits the activity, including performance of a contract, your consent, compliance with law and our legitimate business interests where those interests do not override your rights.</p>
            </section>

            <section id="sharing" className="scroll-mt-28">
              <p className="eyebrow !mb-5 !mt-14 !text-xs !leading-none !text-berry">04 · How we share it</p>
              <h2 className="!mt-0">The partners who help us deliver</h2>
              <p>We do not sell or rent your personal information. We may share only what is reasonably necessary with:</p>
              <ul>
                <li>the client or authorised event organiser responsible for the relevant guest experience;</li>
                <li>hosting, email, messaging, analytics and other technology providers used to operate our solutions;</li>
                <li>professional advisers, insurers, accountants and legal providers;</li>
                <li>technology providers that host our website, email, documents, forms, guest lists and business systems;</li>
                <li>government bodies, regulators, courts or law enforcement where disclosure is required by law; and</li>
                <li>a successor or buyer if our business is reorganised, sold or transferred.</li>
              </ul>
              <p>When a service provider acts on our behalf, we expect them to protect the information, use it only for the agreed purpose and retain it only as long as necessary.</p>
            </section>

            <section id="cookies" className="scroll-mt-28">
              <p className="eyebrow !mb-5 !mt-14 !text-xs !leading-none !text-berry">05 · Cookies</p>
              <h2 className="!mt-0">How our website remembers</h2>
              <p>Our website may use essential cookies to function and optional analytics cookies to understand how visitors use the site. Cookies are small text files stored on your device. You can limit or remove them through your browser settings, although some website features may not work as expected.</p>
              <p>If we introduce advertising or non-essential tracking technologies, we will provide appropriate notice and consent controls.</p>
            </section>

            <section id="retention" className="scroll-mt-28">
              <p className="eyebrow !mb-5 !mt-14 !text-xs !leading-none !text-berry">06 · Retention & security</p>
              <h2 className="!mt-0">Keeping information safe</h2>
              <p>We retain personal information only for as long as it is needed for the purposes described in this policy, including to deliver a project or event solution, maintain appropriate business and tax records, resolve disputes and meet legal obligations. Retention periods vary by record type and context.</p>
              <p>We use reasonable administrative, technical and physical safeguards designed to protect personal information from loss, misuse and unauthorised access. No online service or storage system can be guaranteed completely secure, but we review our practices and limit access to those who need the information.</p>
              <h3>International transfers</h3>
              <p>Some service providers may process information outside Nigeria. Where this happens, we take reasonable steps to ensure an appropriate level of protection through contractual or other lawful safeguards.</p>
            </section>

            <section id="rights" className="scroll-mt-28">
              <p className="eyebrow !mb-5 !mt-14 !text-xs !leading-none !text-berry">07 · Your rights</p>
              <h2 className="!mt-0">Your information, your choices</h2>
              <p>Depending on the law that applies to you, you may have the right to:</p>
              <ul>
                <li>ask whether we hold personal information about you and request a copy;</li>
                <li>correct information that is inaccurate or incomplete;</li>
                <li>ask us to delete or restrict our use of certain information;</li>
                <li>object to certain processing or ask for information in a portable format;</li>
                <li>withdraw consent at any time where processing relies on consent; and</li>
                <li>complain to the relevant data protection authority.</li>
              </ul>
              <p>To make a request, email us using the address below. We may need to verify your identity before responding. You can unsubscribe from marketing emails at any time using the link in the message or by contacting us.</p>
              <h3>Children</h3>
              <p>Our website is not directed to children. Event information relating to a child should be provided by a parent, guardian or authorised event organiser and used only where appropriate for the event.</p>
            </section>

            <section id="contact" className="scroll-mt-28">
              <p className="eyebrow !mb-5 !mt-14 !text-xs !leading-none !text-berry">08 · Contact us</p>
              <h2 className="!mt-0">Questions or requests</h2>
              <p>If you have a question about this policy or want to exercise a privacy right, contact:</p>
              <div className="my-7 rounded-2xl bg-parchment p-6">
                <p className="!mb-1 !font-semibold !text-ink">Tesol — The Event Solutions</p>
                <p className="!mb-1">Lagos, Nigeria</p>
                <a href="mailto:privacy@tesol.events" className="inline-flex max-w-full flex-wrap items-center gap-2 break-all font-semibold text-wine hover:text-berry"><Mail size={15} className="shrink-0" /> privacy@tesol.events</a>
              </div>
              <h3>Changes to this policy</h3>
              <p>We may update this Privacy Policy as our services or legal obligations change. The latest version will always appear on this page with its effective date. If a change is significant, we will provide additional notice where appropriate.</p>
            </section>
          </motion.article>
        </div>
      </section>
    </PageIntro>
  )
}
