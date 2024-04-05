"use client";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const nav = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
export default function NavbarWrapper() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className="px-16">
      <Navbar fluid rounded className=" w-full items-center justify-between">
        <Navbar.Brand href="https://flowbite-react.com">
          <Image
            src="/logo only.png"
            className="mr-3 h-6 sm:h-9"
            width={37}
            height={50}
            alt="Flowbite React Logo"
          />
          <span className="text-hitamterang self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Medan Digital Solutions
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-hitamterang">
          {nav.map((item) => (
            <Navbar.Link
              key={item.title}
              as={Link}
              prefetch={false}
              className={`${pathname === item.link ? 'text-merahlangit' : ''} hover:text-merahlangit`}
              href={item.link}
            >
              {item.title}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
