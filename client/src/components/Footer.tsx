const Footer = () => {
  return (
    <footer className="text-white px-4 py-8 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-2">Availr</h3>
          <p>Type-safe, modern TypeScript scaffolding for full stack web development</p>
          <div className="mt-2">
            <a href="#" className="inline-flex items-center space-x-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" className="h-4 w-4" />
              <span>npm</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><a href="#">GitHub Repository</a></li>
            <li><a href="#">NPM Package</a></li>
            <li><a href="#">Demo Application</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Contacts</h3>
          <p>abc.xyz@gmail.com</p>
          <p>Have questions or feedback?</p>
          <p>Feel free to reach out on GitHub</p>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-white/10 pt-4">
        © 2025 Availr. All rights reserved. &nbsp; | &nbsp; Built with TypeScript
      </div>
    </footer>
  );
};

export default Footer;
