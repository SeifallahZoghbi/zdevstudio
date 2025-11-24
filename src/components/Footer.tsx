import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
                Z
              </div>
              <span className="text-lg font-semibold text-slate-100">DevStudio</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Building lean, AI-powered applications for real people. ZDevStudio LLC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#apps" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Our Apps
                </Link>
              </li>
              <li>
                <Link href="#studio" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:hello@zdev.studio" className="text-slate-400 hover:text-white text-sm transition-colors">
                  hello@zdev.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm text-center">
            &copy; {currentYear} ZDevStudio LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
