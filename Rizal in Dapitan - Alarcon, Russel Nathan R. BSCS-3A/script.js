/* =========================================================
   RIZAL IN DAPITAN — INTERACTIONS + TIMELINE CONTENT
   EDIT TIMELINE EVENTS inside the timelineEvents array.
   Each item needs: date, category, label, title, description.
   Categories: community, learning, personal.
   ========================================================= */
const timelineEvents = [
  {date:"17 Hulyo 1892",category:"community",label:"Pagdating",title:"Dumating si Rizal sa Dapitan",description:"Dumating si Rizal sa Dapitan bilang destiyero ng pamahalaang Espanyol. Ipinagkatiwala siya kay Kapitan Ricardo Carnicero, ang komandante ng lugar."},
  {date:"26 Agosto 1892",category:"personal",label:"Pagkakaibigan",title:"Inialay ang tulang para kay Carnicero",description:"Isinulat ni Rizal ang tulang “A Don Ricardo Carnicero” bilang pagpupugay sa komandante at sa kanilang naging pagkakaibigan."},
  {date:"Setyembre 1892",category:"community",label:"Bagong simula",title:"Nanalo sa loterya at nakabili ng lupa",description:"Kasama sina Carnicero at isang Espanyol na residente, nanalo si Rizal sa loterya. Ginamit niya ang bahagi ng kaniyang napanalunan upang bumili ng lupain sa Talisay."},
  {date:"Marso 1893",category:"community",label:"Tahanan sa Talisay",title:"Nanirahan sa kaniyang lupain",description:"Lumipat si Rizal sa Talisay, kung saan itinayo niya ang kaniyang tahanan at iba pang estrukturang ginamit sa pang-araw-araw na pamumuhay, pagtuturo, at panggagamot."},
  {date:"Panahon ng 1893",category:"learning",label:"Edukasyon",title:"Nagtatag ng paaralan para sa mga batang lalaki",description:"Nagturo si Rizal ng mga asignaturang tulad ng pagbasa, pagsulat, wika, heograpiya, kasaysayan, at agham. Pinagsama rin niya ang pag-aaral at mga gawaing praktikal."},
  {date:"Panahon ng 1893–1896",category:"community",label:"Serbisyong pangkalusugan",title:"Naglingkod bilang manggagamot",description:"Nagpagamot si Rizal ng mga pasyente, lalo na sa mga suliranin sa mata. Ang kaniyang kaalaman sa medisina ay naging mahalagang serbisyo sa mga taga-Dapitan at mga dumadayo."},
  {date:"Panahon ng 1893–1896",category:"community",label:"Proyektong bayan",title:"Tumulong sa sistema ng suplay ng tubig",description:"Nakibahagi siya sa pagdidisenyo at pagsasakatuparan ng waterworks para sa bayan. Isa ito sa mga proyektong nagpapakita ng paggamit niya ng kaalamang teknikal para sa publiko."},
  {date:"Panahon ng 1893–1896",category:"learning",label:"Pananaliksik",title:"Nagsaliksik sa kalikasan at gumawa ng relief map",description:"Nangolekta at nag-aral si Rizal ng mga halaman at hayop sa Dapitan at nagpadala ng mga specimen sa mga iskolar. Gumawa rin siya ng relief map ng Mindanao sa tulong ng mga lokal na kasamahan."},
  {date:"1895",category:"personal",label:"Mahahalagang ugnayan",title:"Nakilala si Josephine Bracken",description:"Dumating si Josephine Bracken sa Dapitan kasama si George Taufer upang magpagamot. Dito nagsimula ang ugnayan nila ni Rizal."},
  {date:"31 Hulyo 1896",category:"community",label:"Paglisan",title:"Umalis si Rizal sa Dapitan",description:"Pagkaraan ng halos apat na taon, umalis si Rizal sa Dapitan. Nagtapos ang yugto ng kaniyang pagkakatapon, ngunit nanatili ang mga proyektong iniwan niya sa pamayanan."}
];

// RENDER TIMELINE: automatically creates a card for every event above.
const timelineList = document.getElementById('timelineList');
const filterButtons = document.querySelectorAll('.filter-btn');
function renderTimeline(filter = 'all') {
  const filteredEvents = timelineEvents.filter(event => filter === 'all' || event.category === filter);
  timelineList.innerHTML = '';
  if (!filteredEvents.length) {
    timelineList.innerHTML = '<p class="timeline-empty">Walang pangyayaring tumutugma sa piniling kategorya.</p>';
    return;
  }
  filteredEvents.forEach(event => {
    const card = document.createElement('article');
    card.className = 'timeline-card';
    card.innerHTML = `
      <div class="timeline-card-top"><span class="timeline-date">${event.date}</span><span class="timeline-category">${event.label}</span></div>
      <h3>${event.title}</h3><p>${event.description}</p>`;
    timelineList.appendChild(card);
  });
}
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderTimeline(button.dataset.filter);
  });
});
renderTimeline();

// MOBILE NAVIGATION: opens/closes the menu on smaller screens.
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});
