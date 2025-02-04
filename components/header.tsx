"use client";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const socialIcons = [
  {
    component: FaLinkedin,
    href: "https://www.linkedin.com/company/codeonjvmchennai",
  },
  {
    component: FaInstagram,
    href: "https://www.instagram.com/codeonjvmchennai/",
  },
  {
    component: FaWhatsapp,
    href: "https://chat.whatsapp.com/L2e0OhSON4XGqmZicY2PfD",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md border-b border-gray-200/15">
      <nav className="max-w-nav-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-nav-height">
          {/* Logo and Navigation Links */}
          <div className="flex items-center">
            {/* logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>

            {/* navigation links */}
            <div className="hidden lg:block ml-10">
              <div className="flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="font-semibold text-sm hover:text-brand transition-colors duration-200 ease-in-out"
                    target="_blank"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {socialIcons.map((icon, index) => {
              const IconComponent = icon.component;
              return (
                <a key={index} href={icon.href} className="" target="_blank">
                  <IconComponent
                    size={20}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 ease-in-out "
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
              <div className="flex space-x-6 pt-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
