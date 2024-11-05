interface FooterSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

function FooterSection({ title, children, className }: FooterSectionProps) {
  return (
    <div className={`footer-section ${className || ""}`}>
      {title && (
        <p
          className="text ln-text sm-none --font-bold --font-xs"
          data-testid="footer-section-title"
        >
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

export default FooterSection;
