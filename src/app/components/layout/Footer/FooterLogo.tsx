import Image from 'next/image';

function FooterLogo() {
  return (
    <div className="footer-header">
      <div className="footer-header__logo">
        <Image
          src="https://arc-static.glanacion.com/pf/resources/images/la-nacion.webp?d=1704"
          alt="La Nacion"
          width={250}
          height={30}
          priority
        />
      </div>
    </div>
  );
}

export default FooterLogo