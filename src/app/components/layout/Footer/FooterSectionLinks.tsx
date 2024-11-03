import React from "react";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";
import { LinkItem } from "../../../types";

interface SectionLinksProps {
  title?: string;
  links: LinkItem[];
  className?: string;
}

function FooterSectionLinks({ title, links }: SectionLinksProps) {
  return (
    <FooterSection title={title}>
      {links.map((link) => (
        <FooterLink key={link.href} href={link.href}>
          {link.text}
        </FooterLink>
      ))}
    </FooterSection>
  );
}

export default FooterSectionLinks;
