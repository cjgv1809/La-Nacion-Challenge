function FooterCopyright() {
  return (
    <div className="footer-copyright">
      <p
        className="footer-copyright__reserved"
        data-testid="footer-copyright-reserved"
      >
        Copyright {new Date().getFullYear()} SA LA NACION | Todos los derechos
        reservados Dirección Nacional del Derecho de Autor DNDA - EXPEDIENTE
        DNDA (renovación) RL-2023-95334553-APN-DNDA#MJ.
      </p>
      <p
        className="footer-copyright__reserved"
        data-testid="footer-copyright-reserved-2"
      >
        Queda prohibida la reproducción total o parcial del presente diario.
      </p>
    </div>
  );
}

export default FooterCopyright;
