import { Link } from "react-router-dom";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Documentation", "API Status", "Community"],
  },
];

const socialLinks = [
  { name: "X", href: "#" },
  { name: "IN", href: "#" },
  { name: "IG", href: "#" },
  { name: "GH", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="mt-8 border-t border-gray-800/60 pt-6 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-300 backdrop-blur-sm sm:text-sm">
            <span>Built for</span>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md font-bold text-orange-400 transition-colors duration-200 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Digital Heroes Training Task
            </a>
          </p>
        </div>
      <div className="container-app py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white font-bold">
                CS
              </div>

              <span className="text-xl font-bold text-white">
                ClientSync
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm text-gray-400">
              Capture, organize, and convert every lead from one beautiful,
              modern dashboard built for growing teams.
            </p>
          </div>

          {/* Footer Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-lg font-semibold text-white">
                {col.title}
              </h3>

              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-orange-400 transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ClientSync. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-orange-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400">
              Terms of Service
            </a>
          </div>
        </div>


        
      </div>
    </footer>
  );
}