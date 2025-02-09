import "../Header/header.module.css";
import { useEffect } from "react";

export default function header() {
  useEffect(() => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);

    return () => {
      hamburgerBtn.removeEventListener("click", toggleMenu);
      mobileMenu.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#">🚀 Acme Rockets</a>
        </h1>

        <div>
          <button
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer"
          >
            ☰
          </button>

          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>

      <section
        id="mobile-menu"
        className="absolute top-0 bg-black w-full text-5xl flex-col justify-center origin-top hidden animate-open-menu"
      >
        <button className="text-8xl self-end px-6 cursor-pointer">
          &times;
        </button>

        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <a href="#hero" className="w-full text-center py-6 hover:opacity-70">
            Home
          </a>

          <a
            href="#rockets"
            className="w-full text-center py-6 hover:opacity-70"
          >
            Rockets
          </a>

          <a
            href="#testimonials"
            className="w-full text-center py-6 hover:opacity-70"
          >
            Testimonials
          </a>

          <a
            href="#contact"
            className="w-full text-center py-6 hover:opacity-70"
          >
            Contact Us
          </a>

          <a
            href="#footer"
            className="w-full text-center py-6 hover:opacity-70"
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
}
