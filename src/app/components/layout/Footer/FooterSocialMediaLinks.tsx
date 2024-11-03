import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import FooterSection from "./FooterSection";

function FooterSocialMediaLinks() {
  return (
    <FooterSection title="Redes sociales:">
      <div className="footer-social-media-links">
        <a
          href="https://www.facebook.com/lanacion"
          title="Ir a Facebook"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Síguenos en Facebook"
          className="footer-social-media-links__link"
        >
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </a>
        <a
          href="https://twitter.com/LANACION"
          title="Ir a Twitter/X"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Síguenos en Twitter/X"
          className="footer-social-media-links__link"
        >
          <FontAwesomeIcon icon={faXTwitter} size="xl" />
        </a>
        <a
          href="https://www.instagram.com/lanacioncom/"
          title="Ir a Instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Síguenos en Instagram"
          className="footer-social-media-links__link"
        >
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
        <a
          href="https://www.lanacion.com.ar/arc/outboundfeeds/rss/?outputType=xml"
          title="Ir a RSS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="RSS"
          className="footer-social-media-links__link"
        >
          <FontAwesomeIcon icon={faRss} size="xl" />
        </a>
      </div>
    </FooterSection>
  );
}

export default FooterSocialMediaLinks;
