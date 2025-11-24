import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div>
      <SiteHeader />

      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{
          textAlign: 'center',
          padding: '100px 40px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '14px',
            color: '#0D6EFD',
            marginBottom: '20px',
            fontWeight: 500
          }}>
            Small studio · Everyday value
          </div>
          <h1>We build apps our team wishes existed.</h1>
          <p style={{
            fontSize: '20px',
            color: '#6C757D',
            marginBottom: '30px'
          }}>
            ZDevStudio is a small app studio that starts from real life:
            routines, frictions, and tiny annoyances we feel every day.
            We design and ship calm, focused apps that our own team is
            happy to live with on their home screens.
          </p>
          <a href="#what-we-build" className="btn">Learn More</a>
          <p style={{
            fontSize: '14px',
            color: '#6C757D',
            marginTop: '30px'
          }}>
            Structured as ZDevStudio LLC, a Delaware single-member LLC
          </p>
        </section>

        {/* How We Work Section */}
        <section id="how-we-work" className="section section-alt">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
              How We Work
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#6C757D',
              maxWidth: '700px',
              margin: '0 auto 40px auto'
            }}>
              We look at how we actually live and work: where we get stuck,
              what we avoid, what we keep wishing was easier. Every idea
              starts there, not in a pitch deck.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginTop: '40px'
            }}>
              {[
                {
                  title: 'Start from real friction',
                  desc: 'We look for patterns in our own days: tasks we avoid, workflows that feel heavier than they should.'
                },
                {
                  title: 'Prototype quickly',
                  desc: 'We prototype quickly and use it ourselves first to see if it actually helps.'
                },
                {
                  title: 'Strip away noise',
                  desc: 'We remove anything that feels like noise or unnecessary complexity.'
                },
                {
                  title: "Keep what's valuable",
                  desc: 'We only keep what still feels useful and valuable months later.'
                }
              ].map((item, i) => (
                <div key={i} className="card">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="dot"></span>
                    <h3 style={{ margin: 0, fontSize: '18px' }}>{item.title}</h3>
                  </div>
                  <p style={{ margin: 0, color: '#6C757D', fontSize: '16px' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Build Section */}
        <section id="what-we-build" className="section">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
              What we build
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#6C757D',
              maxWidth: '700px',
              margin: '0 auto 50px auto'
            }}>
              Our best apps are small, quiet tools that earn their place on your
              home screen by making some part of your day meaningfully easier.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {[
                {
                  color: '#0D6EFD',
                  title: 'Everyday workflows',
                  desc: 'Simple helpers for repeated tasks—planning, logging, remembering—that reduce mental load instead of adding to it.'
                },
                {
                  color: '#6C757D',
                  title: 'Personal wellbeing',
                  desc: 'Calm tools around habits, reflection, and self-care that respect your time and attention.'
                },
                {
                  color: '#198754',
                  title: 'Quiet productivity',
                  desc: 'Focused utilities that remove friction from everyday digital work instead of chasing engagement.'
                }
              ].map((item, i) => (
                <div key={i} className="card" style={{ textAlign: 'center' }}>
                  <div className="square-icon" style={{
                    background: item.color,
                    margin: '0 auto 16px auto'
                  }}></div>
                  <h3>{item.title}</h3>
                  <p style={{ margin: 0, color: '#6C757D', fontSize: '16px' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Decide Section */}
        <section id="how-we-decide" className="section section-alt">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
              How we decide what to build
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#6C757D',
              maxWidth: '700px',
              margin: '0 auto 50px auto'
            }}>
              Every idea starts with someone on the team saying, "This is
              annoying. I wish there were a better way." Then we pressure-test
              it with a few simple questions.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {[
                {
                  num: '1',
                  q: 'Is this a real, recurring friction?',
                  a: "We look for patterns in our own days and conversations. If it's a one-off complaint, we let it go."
                },
                {
                  num: '2',
                  q: 'Can it stay small and focused?',
                  a: 'We prefer products that can do one job well with a clear, simple interface.'
                },
                {
                  num: '3',
                  q: 'Would we use it a year from now?',
                  a: "We try to ignore hype. If we can't imagine ourselves still using the app after the novelty wears off, we drop it."
                },
                {
                  num: '4',
                  q: "Does it respect people's attention?",
                  a: 'We avoid dark patterns and addictive loops. The ideal app lets you get what you need quickly.'
                }
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#FFFFFF',
                  borderLeft: '4px solid #0D6EFD',
                  padding: '24px',
                  borderRadius: '0 8px 8px 0'
                }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#0D6EFD',
                    marginBottom: '12px'
                  }}>
                    {item.num}.
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                    {item.q}
                  </h3>
                  <p style={{ margin: 0, color: '#6C757D', fontSize: '16px' }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section section-alt">
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2>Contact</h2>
            <p style={{
              fontSize: '18px',
              color: '#6C757D',
              marginBottom: '30px'
            }}>
              If you'd like to follow what we're building, explore a
              collaboration, or share an everyday problem you'd love an
              app for, we're happy to hear from you.
            </p>

            <div style={{
              background: '#FFFFFF',
              border: '2px solid #DEE2E6',
              borderRadius: '8px',
              padding: '24px',
              display: 'inline-block',
              transition: 'border-color 0.2s'
            }}>
              <a
                href="mailto:info@zdev.studio"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#0D6EFD',
                  textDecoration: 'none'
                }}
              >
                info@zdev.studio
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
