export default function MainBody() {
  return (
    <div id="main_body">
      <h3>Bienvenue sur le planificateur de vol de l'Azgharie Airlines</h3>
      <div id="logo_azh_airline">
        <img src="/images/azgharie_airlines_transparent.png" alt="Azgharie Airlines Logo" style={{ height: '250px' }}/>
      </div>
      <div id="description_1">
        <p>
          L'Azgharie Airlines est une{' '}
          <a href="https://fshub.io/airline/AZH/overview" target="_blank" rel="noopener noreferrer" style={{ color: '#679fd5', fontWeight: 'bold', textDecoration: 'none' }}> compagnie aérienne virtuelle </a> {' '}
          créée sur FShub.
        </p>
        <p>
          <a href="https://fshub.io/"  target="_blank" rel="noopener noreferrer" style={{ color: '#ED8A00', fontWeight: 'bold', textDecoration: 'none' }}> FShub </a> {' '}
          est un service en ligne gratuit de suivi de vol qui fonctionne avec plusieurs plateformes comme Microsoft Flight Simulator ou X-Plane.
        </p>
        <p>
          Cette compagnie a été créée et est gérée par la communauté du vidéaste et Leader Supreme{' '}
          <a href="https://twitch.tv/azghaaar" target="_blank" rel="noopener noreferrer" style={{ color: '#9146FF', fontWeight: 'bold', textDecoration: 'none' }}> Azghaaar </a> {' '}
          sur{' '}
          <a href="https://discord.gg/azgharie" target="_blank" rel="noopener noreferrer" style={{ color: '#5865F2', fontWeight: 'bold', textDecoration: 'none' }}> Discord.</a>
        </p>
      </div>
      <div id="description_2">
        <p>
          Ici, vous pourrez planifier et créer un plan de vol simbrief pour réaliser différentes activités.
        </p>
        <p>
          Toutes ces activités sont gérées par un{' '}
          <a href="https://docs.google.com/spreadsheets/d/1XeNSL5uGvEs2YffUxcDWHfenT37o2l4nxruZBqnaiMU" target="_blank" rel="noopener noreferrer" style={{ color: '#79D600', fontWeight: 'bold', textDecoration: 'none' }}> google sheet </a>{' '}
          et expliquées sur ce{' '}
          <a href="https://docs.google.com/document/d/19_WjD9vYB-2mGxpQB1473cOVo0jc73eOQXmo3w12W6o/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style={{ color: '#000ED6', fontWeight: 'bold', textDecoration: 'none' }}> document </a>
          .
        </p>
        <p>Une carte dédiée permet d afficher le voyage des lignes de la compagnie.</p>
      </div>
      <div id="infographie_azh">
        <img src="/images/Infographie_AZH-1024x724.jpg" alt="Infographie AZH" style={{ width: '440px' }}/>
      </div>
    </div>
  );
}
