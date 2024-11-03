function FooterCompanyInfo() {
  return (
    <div className="footer-company-info">
      <div className="footer-company-info__section">
        <div className="flex flex-column gap-32 text-initial_m flex-row_l jc-between_l flex-grow-1_l">
          <p className="text ln-text flex flex-column gap-9 --font-xs">
            <strong>Director:</strong> <span>Fernán Saguier.</span>
          </p>
          <p className="text ln-text flex flex-column gap-9 --font-xs">
            <span>ISSN (lanacion.com.ar) 2469-0597</span>
          </p>
        </div>
        <div className="flex flex-column gap-32 text-initial_m flex-row_l jc-between_l flex-grow-1_l">
          <p className="text ln-text flex flex-column gap-9 --font-xs">
            <strong>Fecha de Edición:</strong>{" "}
            <span>{new Date().toLocaleDateString("es-AR")}</span>
          </p>
          <p className="text ln-text flex flex-column gap-9 --font-xs">
            <strong>Número de Edición:</strong> <span>10560</span>
          </p>
        </div>
      </div>
      <div className="footer-company-info__section">
        <div className="flex flex-column gap-32 text-center text-initial_m flex-row_l jc-between_l flex-grow-1_l">
          <p className="text ln-text --font-xs">
            <strong>Propietario:</strong>{" "}
            <span>S.A. LA NACION - Zepita 3251,</span>
            <br />
            <span>Cda. de Bs. As. C1285ABG | Tel. 54 11 5500-1800</span>
          </p>
        </div>
        <div>
          <p className="text ln-text --font-xs">
            <strong>Oficinas:</strong>{" "}
            <span>Av. del Libertador 101, Vte. López,</span>
            <br />
            <span>Prov. de Bs. As. Arg. - B1638BEA | Tel. 54 11 6090-5000</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterCompanyInfo;
