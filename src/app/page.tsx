import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Lean, AI-powered apps built for real people.
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We believe in simplicity, speed, and smart automation. ZDevStudio creates practical applications
              that solve real problems without unnecessary complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#apps"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                View our apps
              </Link>
              <Link
                href="#work"
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Partner with us
              </Link>
            </div>
            <p className="text-sm text-slate-400 mt-8">
              A registered LLC delivering professional software solutions
            </p>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="apps" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Build</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Modern applications powered by cutting-edge technology and practical design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Tools</h3>
              <p className="text-slate-400">
                Intelligent applications that leverage AI to automate workflows, enhance productivity, and provide smart insights.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/10">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile-First Design</h3>
              <p className="text-slate-400">
                Responsive, fast-loading applications optimized for all devices with a mobile-first approach.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all hover:shadow-xl hover:shadow-green-500/10">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-slate-400">
                Optimized performance and minimal bloat. Every line of code serves a purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZDevStudio Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why ZDevStudio</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We're different from traditional development studios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lean & Focused</h3>
              <p className="text-slate-400 text-sm">
                No unnecessary features. We build exactly what you need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-First Approach</h3>
              <p className="text-slate-400 text-sm">
                Leveraging cutting-edge AI to enhance every aspect of our applications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real Solutions</h3>
              <p className="text-slate-400 text-sm">
                Built for real people solving real problems, not just buzzwords.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-slate-400 text-sm">
                Modern tooling and efficient workflows mean faster time to market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured App Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center">
                <span className="text-blue-400 font-semibold mb-2 text-sm uppercase tracking-wider">Featured App</span>
                <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  We're currently working on our flagship application that will showcase our AI-powered approach
                  to solving everyday problems. Stay tuned for the launch.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg cursor-not-allowed opacity-60">
                    Launching Soon
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full h-64 bg-slate-800 rounded-xl border-2 border-dashed border-slate-700 flex items-center justify-center">
                  <span className="text-slate-600 text-lg">App Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">About the Studio</h2>
              <p className="text-slate-400">
                ZDevStudio LLC - Where innovation meets simplicity
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 md:p-12 border border-slate-700">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                ZDevStudio is a registered LLC focused on creating lean, efficient applications powered by artificial intelligence.
                We believe that modern software should be fast, intuitive, and purposeful.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Our philosophy is simple: build what matters, automate what can be automated, and never compromise on quality.
                We use cutting-edge tools like Next.js, React, TypeScript, and AI APIs to deliver exceptional results.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Based on modern development practices and agile methodologies, we're here to transform ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section id="work" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Work With Us</h2>
            <p className="text-slate-300 text-lg mb-12 leading-relaxed">
              Whether you need a custom application, want to partner on a project, or have an idea you'd like to discuss,
              we're always interested in working with forward-thinking individuals and organizations.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Custom Development</h3>
                <p className="text-slate-400 text-sm">
                  Need a bespoke solution? We build custom apps tailored to your needs.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Partnership</h3>
                <p className="text-slate-400 text-sm">
                  Have a great idea? Let's collaborate and bring it to life together.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Consulting</h3>
                <p className="text-slate-400 text-sm">
                  Need technical guidance? We offer consulting on AI integration and modern web development.
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Get in Contact</h2>
            <p className="text-slate-300 text-lg mb-8">
              Ready to start a conversation? Reach out to us and let's discuss how we can help bring your vision to life.
            </p>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 text-slate-300">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@zdev.studio" className="text-xl hover:text-blue-400 transition-colors">
                    hello@zdev.studio
                  </a>
                </div>

                <p className="text-slate-400 text-sm">
                  We typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
