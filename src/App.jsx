// App.jsx
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importation des composants de pages
import Home from './pages/1.home/Home';
import Portfolio from './pages/3.portfolio/Portfolio';
import Contact from './pages/4.contact/Contact';
import Footer from './components/footer/Footer';
import Referencement from './pages/referencement/Referencement';
import ReferencementLocaliseService from './pages/referencement/ReferencementLocaliseService';
import ReferencementInternationalService from './pages/referencement/ReferencementInternationalService';
import OptimisationMobileService from './pages/referencement/OptimisationMobileService';
import Services from './pages/2.services/Services';
import NosClients from './pages/5.clients/NosClients';
import AgenceWeb from './pages/5.clients/AgenceWeb';
import RecrutementFreelance from './pages/5.clients/RecrutementFreelance';
import Tpe from './pages/5.clients/Tpe';
import Analyse from './pages/2.services/Analyse';
import Strategie from './pages/2.services/Strategie';
import Operationel from './pages/2.services/Operationel';
import Technique from './pages/2.services/Technique';
import Contenus from './pages/2.services/Contenus';
import Backlink from './pages/2.services/Backlink';

// Composant Navbar avec les liens utilisant HashRouter
const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/prestations">Services</Link>
    <Link to="/prestations/analyse">Analyse</Link>
    <Link to="/prestations/strategie">Stratégie</Link>
    <Link to="/prestations/operationel">Opérationel</Link>
    <Link to="/prestations/technique">Technique</Link>
    <Link to="/prestations/contenus">Contenus</Link>
    <Link to="/prestations/backlink">Backlink</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/referencement">Référencement</Link>
    <Link to="/referencement/optimisation-mobile">Optimisation Mobile</Link>
    <Link to="/referencement/referencement-international">Référencement International</Link>
    <Link to="/referencement/referencement-localise">Référencement Localisé</Link>
    <Link to="/Nos-clients">Nos Clients</Link>
    <Link to="/Nos-clients/agences-web">Agences Web</Link>
    <Link to="/Nos-clients/recrutement-freelance">Recrutement Freelance</Link>
    <Link to="/Nos-clients/tpe">TPE</Link>
    {/* ... autres liens si nécessaire ... */}
  </nav>
);

function App() {
  return (
    <div className="w-screen min-h-screen bg-blue-gray-200">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/prestations' element={<Services />} />
          <Route path='/prestations/analyse' element={<Analyse />} />
          <Route path='/prestations/strategie' element={<Strategie />} />
          <Route path='/prestations/operationel' element={<Operationel />} />
          <Route path='/prestations/technique' element={<Technique />} />
          <Route path='/prestations/contenus' element={<Contenus />} />
          <Route path='/prestations/backlink' element={<Backlink />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/referencement' element={<Referencement />} />
          <Route path='/referencement/optimisation-mobile' element={<OptimisationMobileService />} />
          <Route path='/referencement/referencement-international' element={<ReferencementInternationalService />} />
          <Route path='/referencement/referencement-localise' element={<ReferencementLocaliseService />} />
          <Route path='/Nos-clients' element={<NosClients />} />
          <Route path='/Nos-clients/agences-web' element={<AgenceWeb />} />
          <Route path='/Nos-clients/recrutement-freelance' element={<RecrutementFreelance />} />
          <Route path='/Nos-clients/tpe' element={<Tpe />} />
          {/* ... autres routes si nécessaire ... */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
