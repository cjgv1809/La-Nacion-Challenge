import Image from 'next/image';
import FooterSection from './FooterSection';

function FooterAppDownloadLinks() {
  return (
    <FooterSection>
      <strong className="text ln-text sm-none --font-bold --font-xs">
        Descargá la app:
      </strong>
      <a
        href="https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419&pli=1"
        title="Android App"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://arc-static.glanacion.com/pf/resources/images/android-store.webp?d=1704"
          alt="Android App"
          width={100}
          height={34}
          priority
        />
      </a>
      <a
        href="https://apps.apple.com/ar/app/la-nacion/id410689702"
        title="iOS App"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://arc-static.glanacion.com/pf/resources/images/app-store.webp?d=1704"
          alt="iOS App"
          width={100}
          height={34}
          priority
        />
      </a>
    </FooterSection>
  );
}

export default FooterAppDownloadLinks