import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const baseUrl = "https://luidj-78.github.io/Travelmap_azh_proto_nextjs/";

  return (
    <div id="header" className="topnav">
      <a href="https://www.azgharie.net/" target="_blank" rel="noopener noreferrer">
        <img src="/images/azgharie-removebg-preview.png" alt="Azgharie Logo" style={{ height: '50px' }} />
      </a>
      <a href="#" onClick={() => router.push(baseUrl)} style={{ color: '#007BFF', fontWeight: 'bold' }}> Accueil </a>
      <a href="https://fshub.io/airline/AZH/radar" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', fontWeight: 'bold' }}> Radar </a>
      <div className="dropdown">
        <a href="#" onClick={() => router.push(`${baseUrl}planificateur/`)} style={{ color: '#007BFF', fontWeight: 'bold' }}> Planificateur de vol </a>
        <div className="dropdown-content">
          <a href="#" onClick={() => router.push(`${baseUrl}planificateur/ou_voler/`)} style={{ color: '#007BFF', fontWeight: 'bold' }}> Ou voler ? </a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#" style={{ color: '#007BFF', fontWeight: 'bold' }}> Carte de voyage </a>
        <div className="dropdown-content">
          <a href="#" onClick={() => router.push(`${baseUrl}passager/`)} style={{ color: '#007BFF', fontWeight: 'bold' }}> Passager </a>
          <a href="#" onClick={() => router.push(`${baseUrl}cargo/`)} style={{ color: '#007BFF', fontWeight: 'bold' }}>  Cargo </a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#" style={{ color: '#007BFF', fontWeight: 'bold' }}> Base de donnée </a>
        <div className="dropdown-content">
          <a href="#" onClick={() => router.push(`${baseUrl}database/avion/`)} style={{ color: '#007BFF', fontWeight: 'bold' }}> Avion </a>
        </div>
      </div>
    </div>
  );
}
