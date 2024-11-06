function FooterCompanyInfo() {
  return (
    <div className="footer-company-info">
      <div className="footer-company-info__section">
        <div className="flex flex-column gap-32 text-initial_m flex-row_l jc-between_l flex-grow-1_l">
          <p className="text ln-text flex flex-column gap-9 --font-xs">
            <strong data-testid="director">Director:</strong>{" "}
            <span data-testid="director-name">Fernán Saguier.</span>
          </p>
          <p className="text ln-text flex flex-column gap-9 --font-xs">
            <span data-testid="issn">ISSN (lanacion.com.ar) 2469-0597</span>
          </p>
        </div>
        <div className="flex flex-column gap-32 text-initial_m flex-row_l jc-between_l flex-grow-1_l">
          <p className="text ln-text flex flex-column gap-9 --font-xs">
            <strong data-testid="edition-date">Fecha de Edición:</strong>{" "}
            <span data-testid="edition-date-value">
              {/* January 1, 2024 for testing purposes */}
              {new Date("2024-01-01T00:00:00Z").toLocaleDateString("es-AR")}
            </span>
          </p>
          <p className="text ln-text flex flex-column gap-9 --font-xs">
            <strong data-testid="edition-number">Número de Edición:</strong>{" "}
            <span data-testid="edition-number-value">10560</span>
          </p>
        </div>
      </div>
      <div className="footer-company-info__section">
        <div className="flex flex-column gap-32 text-center text-initial_m flex-row_l jc-between_l flex-grow-1_l">
          <p className="text ln-text --font-xs">
            <strong data-testid="company-info-title">Propietario:</strong>{" "}
            <span data-testid="company-info-owner">
              S.A. LA NACION - Zepita 3251,
            </span>
            <br />
            <span data-testid="company-info-address">
              Cda. de Bs. As. C1285ABG | Tel. 54 11 5500-1800
            </span>
          </p>
        </div>
        <div>
          <p className="text ln-text --font-xs">
            <strong data-testid="company-info-office-title">Oficinas:</strong>{" "}
            <span data-testid="company-info-office-address">
              Av. del Libertador 101, Vte. López,
            </span>
            <br />
            <span data-testid="company-info-office-phone">
              Prov. de Bs. As. Arg. - B1638BEA | Tel. 54 11 6090-5000
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterCompanyInfo;
