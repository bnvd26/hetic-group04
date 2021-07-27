import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
// import Students from './pages/old_students';
// import RoomDetails from "./pages/room_details";
import Rooms from "./pages/Rooms/rooms";
import Nav from "./components/Nav/Nav";
import RoomDetails from "./pages/Rooms/room_details";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faDoorOpen, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import "primereact/resources/themes/saga-purple/theme.css";
import "primereact/resources/primereact.css";
import Students from "./pages/Students/students";

const routes = [
  {
    url: "/rooms",
    icon: faDoorOpen,
  },
  {
    url: "/students",
    icon: faGraduationCap,
  },
];

const App = () => {
  return (
    <div className="flex h-screen font-body">
      <Router>
        <Nav routes={routes} />

        <div className="flex-1 flex flex-col overflow-hidden mx-auto">
          <div id="rgpd" className="wrapper wrapper--rgpd">
            <svg
              className="close"
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleRGPD}
            >
              <path
                d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M38.35 20.65L20.65 38.35"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.65 20.65L38.35 38.35"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="29.5"
                  y1="0"
                  x2="29.5"
                  y2="59"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9E60E6" />
                  <stop offset="1" stopColor="#4E27E6" />
                </linearGradient>
              </defs>
            </svg>
            <h2 className="text-gray-700 text-3xl font-medium">
              Mentions légales
            </h2>
            <div className="content">
              <h3>IDENTIFICATION & PUBLICATION</h3>
              <p>
                Le site www.hetic-groupe-04.fr est publié par le Groupe 04,
                groupe d’étudiants en WEB3 au sein de Hetic, dont
                l’établissement est situé au 27 Bis Rue du Progrès, 93100
                Montreuil.
              </p>
              <h3>DIRECTEUR DE LA PUBLICATION</h3>
              <p>
                WEB3 Hetic Groupe 04<br></br>
                En qualité de Développeurs front-end, back-end et Designers UX
                et UI<br></br>
                Tel. <a href="tel:0770277212">07.70.27.72.12</a>
                <br></br>
                E-mail:&nbsp;
                <a href="mailto:hetic-web3-groupe-04@hetic.net">
                  hetic-web3-groupe-04@hetic.net
                </a>
                <br></br>
                Le site internet www.hetic-groupe-04.fr est la propriété excluse
                du Groupe 04 Hetic.
              </p>
              <h3>HÉBERGEMENT</h3>
              <p>
                Le site www.hetic-groupe-04.fr est hébergé et déployé par la
                plateforme Netlify (
                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.netlify.com/
                </a>
                ).
              </p>
              <h3>CONCEPTION & CRÉDITS</h3>
              <p>
                Ce site a été conçu par : <br></br>- Nathanael Louzoun
                (développeur front-end)<br></br>- Maxime Barlet (développeur
                back-end)<br></br>- Benjamin Adida (développeur back-end)
                <br></br>- Hanaa Foutih (développeur front-end)<br></br>- Céline
                Teixeira-Fernandes (designer UX/UI)<br></br>- Geoffrey Guez
                (développeur front-end)<br></br>- Quentin Monteferrario
                (développeur back-end)<br></br>- Rémi Tiab (développeur
                front-end)<br></br>- Ketsia Pedro (développeur back-end)
              </p>
              <h3>DONNÉES PERSONNELLES DE L’UTILISATEUR</h3>
              <p>
                Le Groupe 04 attache une grande importance à la protection des
                données personnelles et à la vie privée de tous les utilisateurs
                de ses sites internet, vos données à caractère personnel peuvent
                être collectées par le Groupe 04 à des fins non commerciales.
                <br></br>
                <br></br>
                Ces données sont conservées pendant toute la durée de notre
                relation avec un maximum de 3 ans depuis la dernière relation.
                <br></br>
                <br></br>
                Vous pouvez à tout moment solliciter la suppression des données
                collectées en nous contactant par voie électronique à :&nbsp;
                <a href="mailto:hetic-web3-groupe-04@hetic.net">
                  hetic-web3-groupe-04@hetic.net
                </a>
                <br></br>
                <br></br>
                Les données sont collectées uniquement pour le compte du Groupe
                04.
                <br></br>
                <br></br>
                Si vous estimez, après avoir contacté par le Groupe 04 et que
                vos droits « Informatique et Libertés » ne sont pas respectés,
                vous pouvez adresser une réclamation en ligne à la CNIL.
              </p>
              <h3>PROPRIÉTÉ INTELLECTUELLE</h3>
              <p>
                La structure générale du site internet de Valopark, ainsi que
                les textes, photographies, graphiques, images, logos, marques,
                sons et vidéos les composants, cette liste n’étant pas
                exhaustive, sont la propriété du Groupe 04. Toute représentation
                et/ou reproduction et/ou exploitation partielle ou totale des
                contenus et services proposés par quelque procédé que ce soit,
                sans l’autorisation préalable et écrite du Groupe 04 est
                strictement interdite. Dans l’hypothèse où l’utilisateur
                souhaiterait utiliser un des contenus du site (texte, image,
                etc.), il s’engage à requérir l’autorisation préalable et écrite
                du Groupe 04, en nous contactant par voie électronique à :
                remi.tiab@hetic.net, à défaut celui-ci pourrait faire l’objet
                d’action et poursuites judicaires prévues par le Code de la
                propriété intellectuelle et le Code Civil.
              </p>
              <button onClick={handleRGPD}>Fermer</button>
            </div>
          </div>
          
          <Switch>
            <Route path="/" component={Home} exact />

            <Route
              path="/rooms"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Rooms} exact />
                  <Route path={`${url}/:id`} component={RoomDetails} />
                </>
              )}
            />

            <Route
              path="/students"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Students} exact />
                </>
              )}
            />
          </Switch>
        </div>
      </Router>
      <ToastContainer />
      <footer className="footer">
        <ul>
          <li onClick={handleRGPD}>Mentions légales</li>
        </ul>
      </footer>
    </div>
  );
};

function handleRGPD(e) {
  e.preventDefault();
  const rgpd = document.querySelector('#rgpd');

  if (rgpd.classList.contains('is-active')) {
    rgpd.classList.remove('is-active');
  } else {
    rgpd.classList.add('is-active');
  }
}


export default App;
