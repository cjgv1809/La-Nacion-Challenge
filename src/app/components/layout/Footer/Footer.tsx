import {
  bonvivirLinks,
  generalLinks,
  magazinesLinks,
  politicsLinks,
  sectionsLinks,
} from "../../../constants";
import FooterAppDownloadLinks from "./FooterAppDownloadLinks";
import FooterBottom from "./FooterBottom";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterCopyright from "./FooterCopyright";
import FooterLogo from "./FooterLogo";
import FooterSectionLinks from "./FooterSectionLinks";
import FooterSocialMediaLinks from "./FooterSocialMediaLinks";

function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <FooterLogo />

      <div className="footer-sitio">
        <div className="footer-sitio__links">
          <FooterSectionLinks title="Secciones" links={sectionsLinks} />
          <FooterSectionLinks links={politicsLinks} />
        </div>

        <div className="footer-sitio__links footer-sitio__links--start">
          <FooterSectionLinks title="Revistas" links={magazinesLinks} />
          <FooterSectionLinks links={bonvivirLinks} />
        </div>

        <div className="footer-sitio__links footer-sitio__links--column">
          <FooterSectionLinks links={generalLinks} />
        </div>

        <div className="footer-sitio__links footer-sitio__links--column">
          <FooterSocialMediaLinks />
          <FooterAppDownloadLinks />
        </div>
      </div>

      <FooterCompanyInfo />
      <FooterCopyright />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
