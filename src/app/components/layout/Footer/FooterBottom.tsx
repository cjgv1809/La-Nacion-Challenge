import Image from "next/image";
import Link from "next/link";

function FooterBottom() {
  return (
    <div className="footer-copyright__fiscal">
      <div className="footer-sitio__links--bottom">
        <div className="footer-sitio__captcha">
          <strong className="text ln-text --font-xs">
            Protegido por reCAPTCHA:
          </strong>
          <Link href="#" className="text ln-text text-light-600 --font-xs">
            Condiciones
          </Link>
          <span className="footer-sitio__dot"></span>
          <Link href="#" className="text ln-text text-light-600 --font-xs">
            Privacidad
          </Link>
        </div>
        <div className="footer-general-info">
          <div>
            <Image
              src="https://arc-static.glanacion.com/pf/resources/images/gda.webp?d=1704"
              alt="GDA"
              width={38}
              height={21}
            />
          </div>
          <p className="text ln-text --font-xs text-light-600">
            Miembro de GDA. Grupo de Diarios América
          </p>
          <a
            href="http://qr.afip.gob.ar/?qr=qy9yHoypE82-DU8Wk-MZ0Q,,"
            target="_F960AFIPInfo"
            title="AFIP"
            rel="noopener noreferrer"
          >
            <Image
              src="https://arc-static.glanacion.com/pf/resources/images/data-fiscal.webp?d=1704"
              alt="AFIP"
              width={32}
              height={46}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
