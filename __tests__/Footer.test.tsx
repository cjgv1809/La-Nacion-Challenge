import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/layout/Footer";
import {
  sectionsLinks,
  politicsLinks,
  magazinesLinks,
  bonvivirLinks,
  generalLinks,
} from "@/app/constants";

describe("Footer", () => {
  it("renders the footer", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("renders the footer logo", () => {
    render(<Footer />);
    const logoElement = screen.getByAltText("La Nacion Logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders the sections links", () => {
    render(<Footer />);
    sectionsLinks.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.href);
    });
  });

  it("renders the politics links", () => {
    render(<Footer />);
    politicsLinks.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.href);
    });
  });

  it("renders the magazines links", () => {
    render(<Footer />);
    magazinesLinks.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.href);
    });
  });

  it("renders the bonvivir links", () => {
    render(<Footer />);
    bonvivirLinks.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.href);
    });
  });

  it("renders the general links", () => {
    render(<Footer />);
    generalLinks.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.href);
    });
  });

  it("renders the social media links", () => {
    render(<Footer />);
    const socialMediaLinks = ["Facebook", "Twitter/X", "Instagram", "RSS"];
    socialMediaLinks.forEach((altText) => {
      const linkElement = screen.getByLabelText(`Síguenos en ${altText}`);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("renders the app download links", () => {
    render(<Footer />);
    const appDownloadLinks = ["iOS App", "Android App"];
    appDownloadLinks.forEach((altText) => {
      const linkElement = screen.getByAltText(altText);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("renders all company information correctly", () => {
    render(<Footer />);

    // Check director information
    const directorElement = screen.getByTestId("director");
    const directorName = screen.getByTestId("director-name");
    expect(directorElement).toBeInTheDocument();
    expect(directorName).toBeInTheDocument();
    expect(directorName).toHaveTextContent("Fernán Saguier.");

    // Check ISSN information
    const issnElement = screen.getByTestId("issn");
    expect(issnElement).toBeInTheDocument();
    expect(issnElement).toHaveTextContent("ISSN (lanacion.com.ar) 2469-0597");

    // Check edition date
    const editionDateElement = screen.getByTestId("edition-date");
    const editionDateValue = screen.getByTestId("edition-date-value");
    // January 1, 2024 render a fixed date for testing
    const newtDate = new Date("2024-01-01T00:00:00Z").toLocaleDateString(
      "es-AR"
    );
    expect(editionDateElement).toBeInTheDocument();
    expect(editionDateValue).toBeInTheDocument();
    expect(editionDateValue).toHaveTextContent(newtDate);

    // Check edition number
    const editionNumberElement = screen.getByTestId("edition-number");
    const editionNumberValue = screen.getByTestId("edition-number-value");
    expect(editionNumberElement).toBeInTheDocument();
    expect(editionNumberValue).toBeInTheDocument();
    expect(editionNumberValue).toHaveTextContent("10560");

    // Check owner information
    const ownerElement = screen.getByTestId("company-info-title");
    const companyInfoOwner = screen.getByTestId("company-info-owner");
    expect(ownerElement).toBeInTheDocument();
    expect(companyInfoOwner).toBeInTheDocument();
    expect(companyInfoOwner).toHaveTextContent("S.A. LA NACION - Zepita 3251,");

    // Check office information
    const officeElement = screen.getByTestId("company-info-office-title");
    const companyInfoAddress = screen.getByTestId(
      "company-info-office-address"
    );
    expect(officeElement).toBeInTheDocument();
    expect(companyInfoAddress).toBeInTheDocument();
    expect(companyInfoAddress).toHaveTextContent(
      "Av. del Libertador 101, Vte. López,"
    );
  });

  it("renders the copyright info", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright ${currentYear} SA LA NACION | Todos los derechos reservados Dirección Nacional del Derecho de Autor DNDA - EXPEDIENTE DNDA (renovación) RL-2023-95334553-APN-DNDA#MJ.`;
    const prohibitionText =
      "Queda prohibida la reproducción total o parcial del presente diario.";

    const copyrightElement = screen.getByTestId("footer-copyright-reserved");
    expect(copyrightElement).toBeInTheDocument();
    expect(copyrightElement).toHaveTextContent(copyrightText);

    const prohibitionElement = screen.getByTestId(
      "footer-copyright-reserved-2"
    );
    expect(prohibitionElement).toBeInTheDocument();
    expect(prohibitionElement).toHaveTextContent(prohibitionText);
  });

  it("renders the bottom links", () => {
    render(<Footer />);
    const bottomLinks = ["Condiciones", "Privacidad"];
    bottomLinks.forEach((text) => {
      const linkElement = screen.getByText(text);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
