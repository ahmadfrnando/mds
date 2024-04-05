"use client";
import { Footer } from "flowbite-react";

export default function FooterWrapper() {
    return (
        <footer>
        <Footer container className="px-16">
          <Footer.Copyright href="#" by="MDS™" year={2024} />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Service</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </footer>
    );
}