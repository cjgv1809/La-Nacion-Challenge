interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  title?: string;
  ariaLabel?: string;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text ln-text text-light-600 --font-xs"
      rel="noopener noreferrer"
      target="_blank"
      aria-label={children as string}
    >
      {children}
    </a>
  );
}

export default FooterLink;
