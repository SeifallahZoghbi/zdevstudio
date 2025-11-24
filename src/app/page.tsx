import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100/70">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-16">
            <div className="flex-1">
              <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 shadow-sm">
                Small studio · Everyday value
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                We build apps
                <br />
                our team wishes existed.
              </h1>
              <p className="mt-4 max-w-xl text-sm text-slate-600 md:text-base">
                ZDevStudio is a small app studio that starts from real life:
                routines, frictions, and tiny annoyances we feel every day.
                We design and ship calm, focused apps that our own team is
                happy to live with on their home screens.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#apps"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-400"
                >
                  See example concepts
                </a>
                <a
                  href="#how-we-decide"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-white"
                >
                  How we decide what to build
                </a>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Structured as ZDevStudio LLC, a Delaware single-member LLC.
                We keep things small, move at a calm pace, and only keep
                products that feel genuinely useful.
              </p>
            </div>

            <div className="flex-1 md:pl-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  How we work
                </p>
                <h2 className="mt-3 text-base font-semibold text-slate-900">
                  Real routines, not hypotheticals.
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  We look at how we actually live and work: where we get stuck,
                  what we avoid, what we keep wishing was easier. Every idea
                  starts there, not in a pitch deck.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• Start from a real, repeated friction.</li>
                  <li>• Prototype quickly and use it ourselves first.</li>
                  <li>• Strip away anything that feels like noise.</li>
                  <li>• Keep only what still feels valuable months later.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section
          id="what-we-build"
          className="border-b border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              What we build
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              Our best apps are small, quiet tools that earn their place on your
              home screen by making some part of your day meaningfully easier.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Everyday workflows
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Simple helpers for repeated tasks—planning, logging,
                  remembering—that reduce mental load instead of adding to it.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Personal wellbeing
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Calm tools around habits, reflection, and self-care that
                  respect your time and attention.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Quiet productivity
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Focused utilities that remove friction from everyday digital
                  work instead of chasing engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How we decide */}
        <section
          id="how-we-decide"
          className="border-b border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              How we decide what to build
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              Every idea starts with someone on the team saying, &quot;This is
              annoying. I wish there were a better way.&quot; Then we pressure-test
              it with a few simple questions.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  1. Is this a real, recurring friction?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  We look for patterns in our own days and conversations. If
                  it&apos;s a one-off complaint, we let it go. If it keeps
                  coming up, we explore.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  2. Can it stay small and focused?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  We prefer products that can do one job well with a clear,
                  simple interface. If an idea demands ten dashboards, it&apos;s
                  probably not for us.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  3. Would we use it a year from now?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  We try to ignore hype. If we can&apos;t imagine ourselves
                  still using the app regularly after the novelty wears off,
                  we&apos;re comfortable killing the idea early.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  4. Does it respect people&apos;s attention?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  We avoid dark patterns and addictive loops. The ideal app
                  lets you get what you need quickly, then get back to your
                  life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example concepts */}
        <section id="apps" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Example concepts we&apos;re exploring
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              These are placeholder concepts to show the type of products we
              like to work on. You can later replace them with real, shipped
              apps.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-sky-600">
                  Concept
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  Tiny routine companion
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  A small helper for two or three meaningful daily habits—not
                  twenty. Designed to be opened for seconds, not minutes.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Status: internal idea
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-sky-600">
                  Concept
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  Gentle focus blocks
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  A focus timer that quietly marks out a block of time for one
                  task—no streaks, no guilt, no gamification.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Status: idea backlog
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-sky-600">
                  Concept
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  One-minute daily check-in
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  A quick daily check-in that captures how the day felt without
                  turning your life into content.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Status: early exploration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Contact
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              If you&apos;d like to follow what we&apos;re building, explore a
              collaboration, or share an everyday problem you&apos;d love an
              app for, we&apos;re happy to hear from you.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
              <p className="text-sm text-slate-700">
                For now, the easiest way to reach us is:
              </p>
              <p className="mt-2 text-sm font-medium text-slate-900">
                <a
                  href="mailto:hello@zdev.studio"
                  className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                >
                  hello@zdev.studio
                </a>
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Later, this can be swapped for a simple contact form wired to
                your preferred inbox or support tool.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
