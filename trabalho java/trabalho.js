// CSS body
document.body.style.backgroundColor='#ffffff';
document.body.style.fontFamily= 'Arial, sans-serif';
document.body.style.margin= '30px';
document.body.style.padding= '0px';

// header
const header = document.createElement("header");
header.id = "header";
document.body.appendChild(header);

const h1header = document.createElement("h1");
h1header.textContent = 'HEADER';
h1header.id = 'h1header';
document.getElementById('header').appendChild(h1header);

// nav
const navegador = document.createElement("nav")
navegador.id = 'navegador';
document.body.appendChild(navegador);

const navDiv1 = document.createElement("div");
navDiv1.textContent = 'HOME';
navDiv1.id = 'navDiv1';
document.getElementById('navegador').appendChild(navDiv1);

const navDiv2 = document.createElement("div");
navDiv2.textContent = 'ABOUT';
navDiv2.id = 'navDiv2';
document.getElementById('navegador').appendChild(navDiv2)

const navDiv3 = document.createElement("div");
navDiv3.textContent = 'SERVICE';
navDiv3.id = 'navDiv3';
document.getElementById('navegador').appendChild(navDiv3)

const navDiv4 = document.createElement("div");
navDiv4.textContent = 'CONTACT';
navDiv4.id = 'navDiv4';
document.getElementById('navegador').appendChild(navDiv4)

// main
const main = document.createElement("main")
main.id = 'main';
document.body.appendChild(main);

// section foto space
const section01 = document.createElement("section");
section01.id = 'section01';
document.getElementById('main').appendChild(section01);

const Imageh1 = document.createElement("h2");
Imageh1.textContent = 'IMAGE';
Imageh1.id = 'Imageh1';
document.getElementById('main').appendChild(Imageh1);

// section cards
const SectionContainer = document.createElement("section");
SectionContainer.id = 'SectionContainer';
document.getElementById('main').appendChild(SectionContainer);

const DivsectionCards = document.createElement("div");
DivsectionCards.id = 'DivsectionCards';
document.getElementById('main').appendChild(DivsectionCards);

const DivSection01 = document.createElement("h2");
DivSection01.textContent = 'TITLE';
DivSection01.id = 'DivSection01.id';
document.getElementById('main').appendChild(DivSection01)

const ParagrafoCards01 = document.createElement("p");
ParagrafoCards01.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo.';
ParagrafoCards01.id = 'ParagrafoCards01';
document.getElementById('main').appendChild(ParagrafoCards01)

const DivSection02 = document.createElement("h2");
DivSection02.textContent = 'TITLE';
DivSection02.id = 'DivSection02.id';
document.getElementById('main').appendChild(DivSection02)

const ParagrafoCards02 = document.createElement("p");
ParagrafoCards02.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo.';
ParagrafoCards02.id = 'ParagrafoCards01';
document.getElementById('main').appendChild(ParagrafoCards02)

const DivSection03 = document.createElement("h2");
DivSection03.textContent = 'TITLE';
DivSection03.id = 'DivSection03.id';
document.getElementById('main').appendChild(DivSection03)

const ParagrafoCards03 = document.createElement("p");
ParagrafoCards03.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo.';
ParagrafoCards03.id = 'ParagrafoCards01';
document.getElementById('main').appendChild(ParagrafoCards03)

// Footer

const Footer = document.createElement("Footer");
Footer.id = 'Footer';
document.body.appendChild(Footer);

const h1Footer = document.createElement("h1");
h1Footer.textContent = 'FOOTER';
h1Footer.id = 'h1header';
document.getElementById('Footer').appendChild(h1Footer);

// CSS Header

const headerbackground = document.getElementById('header').style.display= 'flex';
const headerjustifycontent = document.getElementById('header').style.justifyContent= 'center';
const headeralignitems = document.getElementById('header').style.alignItems= 'center';
const headerbackgroundColor01 = document.getElementById('header').style.backgroundColor= ' #d9d9d966';
const headercolor = document.getElementById('header').style.color= 'color: rgb(0, 0, 0)';
const headerheight = document.getElementById('header').style.height= '100px';

const headerfontSize= document.getElementById('header').style.fontSize= '3em';
const headerFontWeight = document.getElementById('header').style.fontWeight= 'bold';

/*const h1eaderbackground = document.getElementById('h1header').style.display= 'flex';
const h1eaderjustifycontent = document.getElementById('h1eader').style.justifyContent= 'center';
const h1eaderalignitems = document.getElementById('h1eader').style.alignItems= 'center';
const h1eaderbackgroundColor01 = document.getElementById('h1eader').style.backgroundColor= ' #d9d9d966';
const h1eadercolor = document.getElementById('h1eader').style.color= 'color: rgb(0, 0, 0)';
const h1eaderheight = document.getElementById('h1eader').style.height= '100px';

const h1eaderfontSize= document.getElementById('h1eader').style.fontSize= '3em';
const h1eaderFontWeight = document.getElementById('h1eader').style.fontWeight= 'bold';
*/

// CSS Nav

const NavDiplay = document.getElementById('navegador').style.display= 'flex';
const Navjustifycontent = document.getElementById('navegador').style.justifyContent= 'center';
const Navalignitems = document.getElementById('navegador').style.alignItems= 'center';
const Navbackgroundcolor = document.getElementById('navegador').style.backgroundColor= ' #ffffff';
const Navcolor = document.getElementById('navegador').style.color= 'color: rgb(0, 0, 0)';
const Navheight = document.getElementById('navegador').style.height= '50px';

// CSS Nav Div

const Navwidth = document.getElementById('navegador').style.width= '25%';
const Navtextalgin = document.getElementById('navegador').style.textAlign= 'center';
const NavfontSize = document.getElementById('navegador').style.padding= '10px';
const NavFontWeight = document.getElementById('navegador').style.fontWeight= 'bold';

// CSS Main

const Maindisplay = document.getElementById('main').style.display= 'flex';
const MainjustifyContent = document.getElementById('main').style.justifyContent= 'center';
const MainalignItems = document.getElementById('main').style.alignItems= 'center';
const Mainbackground = document.getElementById('main').style.backgroundColor= ' #ffffff';
const Mainheigth = document.getElementById('main').style.height= '400px';
const Mainpadding = document.getElementById('main').style.padding= '10px';

// CSS Foto space

const Maindisplay02 = document.getElementById('main').style.display= 'flex';
const MainjustifyContent02 = document.getElementById('main').style.justifyContent= 'center';
const MainalignItems02 = document.getElementById('main').style.alignItems= 'center';
const Mainbackground02 = document.getElementById('main').style.backgroundColor= ' #9ad3e866';
const MainWidth02 = document.getElementById('main').style.width= '70%';
const Mainheigth02 = document.getElementById('main').style.height= '100%';
const MainFontSize02 = document.getElementById('main').style.width= '1.5em';

// CSS News Cards Container

const Maindisplay03 = document.getElementById('main').style.display= 'flex';
const Mainflexdirection = document.getElementById('main').style.flexDirection= 'column';
const MainjustifyContent03 = document.getElementById('main').style.width= 'center';
const MainalignItems03 = document.getElementById('main').style.alignItems= 'center';
const Mainpadding03 = document.getElementById('main').style.padding= '0px 0px 0px 10px';

// CSS News Card

const Maindisplay04 = document.getElementById('main').style.display= 'flex';
const Mainflexdirection04 = document.getElementById('main').style.flexDirection= 'column';
const MainjustifyContent04 = document.getElementById('main').style.justifyContent= 'center';
const Mainbackground04 = document.getElementById('main').style.backgroundColor= ' #ffffff';
const mainBorder = document.getElementById('main').style.border= ' #a3a2a2 solid 1px';
const Mainpadding04 = document.getElementById('main').style.padding= '0 0 0 10px';
const MainMargin = document.getElementById('main').style.margin= '10px';

// CSS News Card h2

const MainFontSize04 = document.getElementById('main').style.fontSize= '2.5em';
const Mainweight = document.getElementById('main').style.fontWeight= 'bold';
const MainMargin04 = document.getElementById('main').style.margin= '0';

// CSS Footer

const footerbackground = document.getElementById('Footer').style.display= 'flex';
const footerjustifycontent = document.getElementById('Footer').style.justifyContent= 'center';
const footeralignitems = document.getElementById('Footer').style.alignItems= 'center';
const footerbackgroundColor01 = document.getElementById('Footer').style.backgroundColor= ' #d9d9d966';
const footercolor = document.getElementById('Footer').style.color= 'color: rgb(0, 0, 0)';
const footerheight = document.getElementById('Footer').style.height= '100px';

const footerfontSize= document.getElementById('Footer').style.fontSize= '3em';
const footerFontWeight = document.getElementById('Footer').style.fontWeight= 'bold';
