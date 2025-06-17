

const Navbar = () => {
  return (
    <header className="bg-blue-200 shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo and Icon */}
      <div className="flex items-center space-x-2">
        <h1 className="text-3xl font-logo text-black drop-shadow-md font-body">Availr</h1>
        <div className="flex items-center space-x-1">
          <img
          src="/messenger.svg"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-6 text-black font-mono text-lg">
        <a href="#about" className="hover:underline">About Availr</a>
        <a href="#tutorial" className="hover:underline">Tutorial</a>
        <a href="#knowmore" className="hover:underline">Know more</a>
        <a href="#faqs" className="hover:underline">FAQs</a>
        <a href="#contact" className="hover:underline">Contacts</a>
      </nav>
    </header>
  );
};

export default Navbar;
