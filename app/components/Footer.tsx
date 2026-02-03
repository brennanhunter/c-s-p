export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-newsflash text-2xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              SECURE CONTAIN PROTECT
            </h3>
            <p className="font-dm text-slate-400 text-sm leading-relaxed">
              Leading cybersecurity solutions protecting organizations worldwide from evolving digital threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
                🔗
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-newsflash text-lg text-white">Services</h4>
            <ul className="font-dm text-slate-400 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Threat Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Encryption</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Incident Response</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Audits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Penetration Testing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-newsflash text-lg text-white">Company</h4>
            <ul className="font-dm text-slate-400 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h4 className="font-newsflash text-lg text-white">Support</h4>
            <ul className="font-dm text-slate-400 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bug Reports</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
              <p className="font-dm text-slate-500 text-sm">
                © 2026 Secure Contain Protect. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-slate-500 hover:text-white transition-colors font-dm">Privacy Policy</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors font-dm">Terms of Service</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors font-dm">Cookie Policy</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors font-dm">GDPR</a>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="font-dm text-slate-500 text-sm">
                SOC 2 Type II Certified • ISO 27001 Compliant
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}