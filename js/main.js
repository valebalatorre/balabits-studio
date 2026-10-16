// =========================================================
// Balabits - script principal del sitio
// Requiere que js/countries-data.js se cargue ANTES que este archivo
// (define window BALABITS_COUNTRIES, usado por el selector de pais).
// =========================================================


(function(){
  "use strict";
  var BUSINESS_WHATSAPP = "5491170751639";
  var BUSINESS_EMAIL = "contacto@balabits.com";
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- i18n ---------------- */
  var i18n = {
    es: {
      "nav.examples":"Ejemplos","examples.eyebrow":"ejemplos","examples.title":"Así puede verse tu sitio","examples.lede":"Un proyecto real y dos ideas de ejemplo para mostrarte nuestro estilo de trabajo.","examples.badgeReal":"Proyecto real","examples.badgeDemo":"Proyecto de ejemplo","examples.s1.desc":"Sitio institucional de una academia de inglés para hoteles y restaurantes, con formulario de contacto y botón de WhatsApp.","examples.s2.desc":"Concepto de sitio para un restaurante: carta, reservas y horarios a la vista.","examples.s3.desc":"Concepto de tienda online con catálogo, carrito y medios de pago.","examples.label":"Carrusel de ejemplos de sitios web","examples.prev":"Ejemplo anterior","examples.next":"Ejemplo siguiente","examples.alt1":"Captura del sitio Let's Talk ¡Vamos!","examples.alt2":"Concepto de sitio web para el restaurante Casa Olivo","examples.alt3":"Concepto de tienda online nube.shop",
      "nav.services":"Servicios","nav.process":"Cómo trabajamos","nav.about":"Nosotros","nav.contact":"Contacto","nav.cta":"Hablemos",
      "hero.eyebrow":"estudio de desarrollo",
      "hero.title":"De la idea al producto: chatbots, sitios y apps que funcionan de verdad.",
      "hero.lede":"En Balabits diseñamos y desarrollamos soluciones digitales a medida: chatbots de atención y ventas, páginas web y aplicaciones, pensadas para negocios que quieren crecer sin fricción.",
      "hero.ctaPrimary":"Hablemos por WhatsApp","hero.ctaSecondary":"Ver servicios",
      "hero.stat1":"tipos de producto: bot, web y app","hero.stat2":"a medida del negocio","hero.stat3":"atención en 3 idiomas",
      "services.eyebrow":"servicios","services.title":"Todo lo que tu negocio necesita para funcionar online",
      "services.lede":"Elegí un servicio o combinalos. Si tu proyecto necesita algo distinto, también lo desarrollamos.",
      "services.s1.title":"Chatbots para WhatsApp","services.s1.desc":"Atención al cliente, toma de pedidos y ventas automatizadas, disponibles las 24 horas.",
      "services.s2.title":"Páginas web","services.s2.desc":"Sitios rápidos y responsivos que muestran tu marca y convierten visitas en clientes.",
      "services.s3.title":"Apps a medida","services.s3.desc":"Aplicaciones diseñadas alrededor de cómo trabaja realmente tu equipo, no al revés.",
      "services.s4.title":"Mantenimiento y soporte IT","services.s4.desc":"Monitoreo, backups y soporte continuo para que tu infraestructura no te frene.",
      "services.s5.title":"Automatizaciones e integraciones","services.s5.desc":"Conectamos tus herramientas y automatizamos tareas repetitivas con scripts a medida.",
      "services.s6.title":"E-commerce","services.s6.desc":"Tiendas online con medios de pago integrados, pensadas para vender sin fricciones.",
      "demo.eyebrow":"demo en acción","demo.title":"Así atiende un chatbot de Balabits","demo.lede":"Un ejemplo de cómo un bot de WhatsApp toma pedidos para una cafetería, sin que nadie del equipo tenga que responder.","demo.p1":"Muestra el menú con precios y arma el pedido solo.","demo.p2":"Ofrece botones de respuesta rápida, como retiro o envío.","demo.p3":"Confirma el pedido y avisa cuando está listo.","demo.p4":"Atiende las 24 horas, todos los días.","demo.cta":"Quiero uno para mi negocio",
      "process.eyebrow":"cómo trabajamos","process.title":"Un proceso simple, sin sorpresas","process.lede":"Así se ve un proyecto con Balabits, de principio a fin.",
      "process.p1.title":"Diagnóstico","process.p1.desc":"Escuchamos tu problema real antes de proponer una solución.",
      "process.p2.title":"Propuesta","process.p2.desc":"Te mostramos alcance, tiempos y costos, sin letra chica.",
      "process.p3.title":"Desarrollo","process.p3.desc":"Construimos por etapas, con avances que podés revisar en el camino.",
      "process.p4.title":"Entrega y soporte","process.p4.desc":"Entregamos, te capacitamos y seguimos disponibles después del lanzamiento.",
      "about.eyebrow":"sobre nosotros","about.title":"Tecnología que simplifica, no que complica",
      "about.p1":"Balabits es un estudio de desarrollo enfocado en un solo objetivo: que la tecnología le simplifique la vida a tu negocio, no que se la complique.",
      "about.p2":"Trabajamos de cerca con cada cliente, entendiendo el problema real antes de escribir una sola línea de código, y acompañamos el proyecto de principio a fin, desde la primera idea hasta el soporte posterior al lanzamiento.",
      "about.pillar1.title":"Atención personalizada","about.pillar1.desc":"Hablás directamente con quien desarrolla tu proyecto, sin intermediarios.",
      "about.pillar2.title":"Soluciones a medida","about.pillar2.desc":"Cada proyecto se diseña para tu negocio, no al revés.",
      "about.pillar3.title":"Comunicación clara","about.pillar3.desc":"Sabés en qué etapa está tu proyecto en todo momento.",
      "about.pillar4.title":"Compromiso con los tiempos","about.pillar4.desc":"Definimos plazos realistas y los cumplimos.",
      "contact.eyebrow":"contacto","contact.title":"¿Tenés un proyecto en mente?","contact.lede":"Contanos qué necesitás y te respondemos a la brevedad.",
      "contact.form.name":"Nombre","contact.form.email":"Email","contact.form.phone":"WhatsApp / Teléfono","contact.form.searchCountry":"Buscar país...",
      "contact.form.service":"Servicio de interés",
      "contact.form.opt1":"Chatbot para WhatsApp","contact.form.opt2":"Página web","contact.form.opt3":"App a medida","contact.form.opt4":"Mantenimiento y soporte IT","contact.form.opt5":"Automatizaciones e integraciones","contact.form.opt6":"E-commerce","contact.form.opt7":"Otro",
      "contact.form.message":"Mensaje","contact.form.submit":"Enviar por WhatsApp","contact.form.note":"Se abrirá WhatsApp con tu mensaje ya redactado.",
      "contact.form.altPrefix":"¿Preferís email?","contact.form.altLink":"Escribinos a contacto@balabits.com",
      "contact.card1.title":"WhatsApp directo","contact.card1.cta":"Escribir ahora",
      "contact.card2.title":"Email","contact.card2.cta":"Enviar email",
      "contact.card3.title":"Ubicación","contact.card3.desc":"Buenos Aires, Argentina. Trabajamos con clientes de todo el mundo.",
      "footer.copy":"© 2026 Balabits. Todos los derechos reservados.",
      "form.filled":"Nombre, email y mensaje son obligatorios.",
      "form.opened":"¡Listo! Abrimos WhatsApp con tu mensaje."
    },
    en: {
      "nav.examples":"Examples","examples.eyebrow":"examples","examples.title":"This is how your site can look","examples.lede":"A real project and two example concepts to show you our style of work.","examples.badgeReal":"Real project","examples.badgeDemo":"Example project","examples.s1.desc":"Corporate website for an English academy serving hotels and restaurants, with a contact form and WhatsApp button.","examples.s2.desc":"Website concept for a restaurant: menu, bookings and opening hours at a glance.","examples.s3.desc":"Online store concept with catalog, cart and payment methods.","examples.label":"Website examples carousel","examples.prev":"Previous example","examples.next":"Next example","examples.alt1":"Screenshot of the Let's Talk ¡Vamos! website","examples.alt2":"Website concept for the restaurant Casa Olivo","examples.alt3":"Online store concept nube.shop",
      "nav.services":"Services","nav.process":"How we work","nav.about":"About","nav.contact":"Contact","nav.cta":"Let's talk",
      "hero.eyebrow":"development studio",
      "hero.title":"From idea to product: chatbots, websites and apps that actually work.",
      "hero.lede":"At Balabits we design and build custom digital solutions (support and sales chatbots, websites and tailor-made apps) for businesses that want to grow without friction.",
      "hero.ctaPrimary":"Chat on WhatsApp","hero.ctaSecondary":"See services",
      "hero.stat1":"product types: bot, web & app","hero.stat2":"tailored to your business","hero.stat3":"support in 3 languages",
      "services.eyebrow":"services","services.title":"Everything your business needs to run online",
      "services.lede":"Pick one service or combine them. If your project needs something else, we build that too.",
      "services.s1.title":"WhatsApp chatbots","services.s1.desc":"Customer support, order-taking and automated sales, available around the clock.",
      "services.s2.title":"Websites","services.s2.desc":"Fast, responsive sites that showcase your brand and turn visits into customers.",
      "services.s3.title":"Custom apps","services.s3.desc":"Applications built around how your team actually works, not the other way around.",
      "services.s4.title":"IT maintenance & support","services.s4.desc":"Monitoring, backups and ongoing support so your infrastructure never holds you back.",
      "services.s5.title":"Automation & integrations","services.s5.desc":"We connect your tools and automate repetitive tasks with custom scripts.",
      "services.s6.title":"E-commerce","services.s6.desc":"Online stores with integrated payments, built to sell without friction.",
      "demo.eyebrow":"live demo","demo.title":"This is how a Balabits chatbot serves customers","demo.lede":"An example of a WhatsApp bot taking orders for a coffee shop, with no one on the team having to reply.","demo.p1":"Shows the menu with prices and builds the order on its own.","demo.p2":"Offers quick-reply buttons, like pickup or delivery.","demo.p3":"Confirms the order and lets the customer know when it is ready.","demo.p4":"Available 24 hours a day, every day.","demo.cta":"I want one for my business",
      "process.eyebrow":"how we work","process.title":"A simple process, no surprises","process.lede":"Here's what a project with Balabits looks like, start to finish.",
      "process.p1.title":"Discovery","process.p1.desc":"We listen to your actual problem before proposing a solution.",
      "process.p2.title":"Proposal","process.p2.desc":"We show you scope, timeline and cost, no fine print.",
      "process.p3.title":"Development","process.p3.desc":"We build in stages, with progress you can review along the way.",
      "process.p4.title":"Delivery & support","process.p4.desc":"We deliver, train you, and stay available after launch.",
      "about.eyebrow":"about us","about.title":"Technology that simplifies, not complicates",
      "about.p1":"Balabits is a development studio focused on one goal: making technology simplify your business, not complicate it.",
      "about.p2":"We work closely with every client, understanding the real problem before writing a single line of code, and we stay with the project from start to finish, from the first idea to post-launch support.",
      "about.pillar1.title":"Personal attention","about.pillar1.desc":"You talk directly with the person building your project, no middlemen.",
      "about.pillar2.title":"Tailored solutions","about.pillar2.desc":"Every project is designed around your business, not the other way around.",
      "about.pillar3.title":"Clear communication","about.pillar3.desc":"You always know what stage your project is at.",
      "about.pillar4.title":"Committed to deadlines","about.pillar4.desc":"We set realistic deadlines and meet them.",
      "contact.eyebrow":"contact","contact.title":"Have a project in mind?","contact.lede":"Tell us what you need and we'll get back to you shortly.",
      "contact.form.name":"Name","contact.form.email":"Email","contact.form.phone":"WhatsApp / Phone","contact.form.searchCountry":"Search country...",
      "contact.form.service":"Service of interest",
      "contact.form.opt1":"WhatsApp chatbot","contact.form.opt2":"Website","contact.form.opt3":"Custom app","contact.form.opt4":"IT maintenance & support","contact.form.opt5":"Automation & integrations","contact.form.opt6":"E-commerce","contact.form.opt7":"Other",
      "contact.form.message":"Message","contact.form.submit":"Send via WhatsApp","contact.form.note":"WhatsApp will open with your message ready to send.",
      "contact.form.altPrefix":"Prefer email?","contact.form.altLink":"Email us at contacto@balabits.com",
      "contact.card1.title":"Direct WhatsApp","contact.card1.cta":"Message now",
      "contact.card2.title":"Email","contact.card2.cta":"Send email",
      "contact.card3.title":"Location","contact.card3.desc":"Buenos Aires, Argentina. Working with clients worldwide.",
      "footer.copy":"© 2026 Balabits. All rights reserved.",
      "form.filled":"Name, email and message are required.",
      "form.opened":"Done! We opened WhatsApp with your message."
    },
    pt: {
      "nav.examples":"Exemplos","examples.eyebrow":"exemplos","examples.title":"Assim pode ficar o seu site","examples.lede":"Um projeto real e duas ideias de exemplo para mostrar o nosso estilo de trabalho.","examples.badgeReal":"Projeto real","examples.badgeDemo":"Projeto de exemplo","examples.s1.desc":"Site institucional de uma academia de inglês para hotéis e restaurantes, com formulário de contato e botão de WhatsApp.","examples.s2.desc":"Conceito de site para um restaurante: cardápio, reservas e horários à vista.","examples.s3.desc":"Conceito de loja online com catálogo, carrinho e meios de pagamento.","examples.label":"Carrossel de exemplos de sites","examples.prev":"Exemplo anterior","examples.next":"Próximo exemplo","examples.alt1":"Captura do site Let's Talk ¡Vamos!","examples.alt2":"Conceito de site para o restaurante Casa Olivo","examples.alt3":"Conceito de loja online nube.shop",
      "nav.services":"Serviços","nav.process":"Como trabalhamos","nav.about":"Sobre nós","nav.contact":"Contato","nav.cta":"Vamos conversar",
      "hero.eyebrow":"estúdio de desenvolvimento",
      "hero.title":"Da ideia ao produto: chatbots, sites e apps que realmente funcionam.",
      "hero.lede":"Na Balabits projetamos e desenvolvemos soluções digitais sob medida: chatbots de atendimento e vendas, sites e aplicativos, pensados para negócios que querem crescer sem atrito.",
      "hero.ctaPrimary":"Fale no WhatsApp","hero.ctaSecondary":"Ver serviços",
      "hero.stat1":"tipos de produto: bot, site e app","hero.stat2":"sob medida para o seu negócio","hero.stat3":"atendimento em 3 idiomas",
      "services.eyebrow":"serviços","services.title":"Tudo o que o seu negócio precisa para funcionar online",
      "services.lede":"Escolha um serviço ou combine vários. Se o seu projeto precisar de algo diferente, também desenvolvemos.",
      "services.s1.title":"Chatbots para WhatsApp","services.s1.desc":"Atendimento ao cliente, recebimento de pedidos e vendas automatizadas, disponíveis 24 horas por dia.",
      "services.s2.title":"Sites","services.s2.desc":"Sites rápidos e responsivos que mostram sua marca e transformam visitas em clientes.",
      "services.s3.title":"Apps sob medida","services.s3.desc":"Aplicativos desenhados de acordo com o jeito que sua equipe realmente trabalha, não o contrário.",
      "services.s4.title":"Manutenção e suporte de TI","services.s4.desc":"Monitoramento, backups e suporte contínuo para que sua infraestrutura nunca te atrase.",
      "services.s5.title":"Automações e integrações","services.s5.desc":"Conectamos suas ferramentas e automatizamos tarefas repetitivas com scripts sob medida.",
      "services.s6.title":"E-commerce","services.s6.desc":"Lojas online com meios de pagamento integrados, feitas para vender sem atrito.",
      "demo.eyebrow":"demo em ação","demo.title":"É assim que um chatbot da Balabits atende","demo.lede":"Um exemplo de um bot de WhatsApp recebendo pedidos para uma cafeteria, sem que ninguém da equipe precise responder.","demo.p1":"Mostra o cardápio com preços e monta o pedido sozinho.","demo.p2":"Oferece botões de resposta rápida, como retirada ou entrega.","demo.p3":"Confirma o pedido e avisa quando está pronto.","demo.p4":"Atende 24 horas por dia, todos os dias.","demo.cta":"Quero um para o meu negócio",
      "process.eyebrow":"como trabalhamos","process.title":"Um processo simples, sem surpresas","process.lede":"É assim que é um projeto com a Balabits, do início ao fim.",
      "process.p1.title":"Diagnóstico","process.p1.desc":"Ouvimos o seu problema real antes de propor uma solução.",
      "process.p2.title":"Proposta","process.p2.desc":"Mostramos escopo, prazos e custos, sem letras miúdas.",
      "process.p3.title":"Desenvolvimento","process.p3.desc":"Construímos por etapas, com avanços que você pode acompanhar no caminho.",
      "process.p4.title":"Entrega e suporte","process.p4.desc":"Entregamos, treinamos você e continuamos disponíveis depois do lançamento.",
      "about.eyebrow":"sobre nós","about.title":"Tecnologia que simplifica, não complica",
      "about.p1":"A Balabits é um estúdio de desenvolvimento focado em um único objetivo: fazer a tecnologia simplificar o seu negócio, não complicá-lo.",
      "about.p2":"Trabalhamos de perto com cada cliente, entendendo o problema real antes de escrever uma única linha de código, e acompanhamos o projeto do início ao fim, da primeira ideia ao suporte pós-lançamento.",
      "about.pillar1.title":"Atendimento personalizado","about.pillar1.desc":"Você fala diretamente com quem desenvolve o seu projeto, sem intermediários.",
      "about.pillar2.title":"Soluções sob medida","about.pillar2.desc":"Cada projeto é desenhado para o seu negócio, não o contrário.",
      "about.pillar3.title":"Comunicação clara","about.pillar3.desc":"Você sabe em que etapa o seu projeto está, o tempo todo.",
      "about.pillar4.title":"Compromisso com os prazos","about.pillar4.desc":"Definimos prazos realistas e os cumprimos.",
      "contact.eyebrow":"contato","contact.title":"Tem um projeto em mente?","contact.lede":"Conte pra gente o que você precisa e respondemos em breve.",
      "contact.form.name":"Nome","contact.form.email":"Email","contact.form.phone":"WhatsApp / Telefone","contact.form.searchCountry":"Buscar país...",
      "contact.form.service":"Serviço de interesse",
      "contact.form.opt1":"Chatbot para WhatsApp","contact.form.opt2":"Site","contact.form.opt3":"App sob medida","contact.form.opt4":"Manutenção e suporte de TI","contact.form.opt5":"Automações e integrações","contact.form.opt6":"E-commerce","contact.form.opt7":"Outro",
      "contact.form.message":"Mensagem","contact.form.submit":"Enviar pelo WhatsApp","contact.form.note":"O WhatsApp vai abrir com sua mensagem já pronta.",
      "contact.form.altPrefix":"Prefere email?","contact.form.altLink":"Escreva para contacto@balabits.com",
      "contact.card1.title":"WhatsApp direto","contact.card1.cta":"Enviar mensagem",
      "contact.card2.title":"Email","contact.card2.cta":"Enviar email",
      "contact.card3.title":"Localização","contact.card3.desc":"Buenos Aires, Argentina. Atendemos clientes do mundo todo.",
      "footer.copy":"© 2026 Balabits. Todos os direitos reservados.",
      "form.filled":"Nome, email e mensagem são obrigatórios.",
      "form.opened":"Pronto! Abrimos o WhatsApp com sua mensagem."
    }
  };

  var currentLang = "es";
  try{ var saved = localStorage.getItem('balabits-lang'); if(saved && i18n[saved]) currentLang = saved; }catch(e){}

  function applyLang(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    var dict = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var key = el.getAttribute('data-i18n-placeholder');
      if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      var key = el.getAttribute('data-i18n-aria');
      if(dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el){
      var key = el.getAttribute('data-i18n-alt');
      if(dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('.lang-toggle button').forEach(function(btn){
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    renderCountryList(document.getElementById('countrySearch') ? document.getElementById('countrySearch').value : '');
    updateSelectedCountryLabel();
    try{ localStorage.setItem('balabits-lang', lang); }catch(e){}
  }

  document.querySelectorAll('.lang-toggle button').forEach(function(btn){
    btn.addEventListener('click', function(){ applyLang(btn.getAttribute('data-lang')); });
  });

  /* ---------------- Mobile nav ---------------- */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobilePanel = document.getElementById('mobilePanel');
  hamburgerBtn.addEventListener('click', function(){
    var open = mobilePanel.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', open ? 'true':'false');
  });
  mobilePanel.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ mobilePanel.classList.remove('open'); hamburgerBtn.setAttribute('aria-expanded','false'); });
  });

  /* ---------------- Smooth scroll cues ---------------- */
  document.querySelectorAll('[data-scroll-next]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var target = document.getElementById(btn.getAttribute('data-scroll-next'));
      if(target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block:'start' });
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(ev){
      var id = a.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if(target){
        ev.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? 'auto':'smooth', block:'start' });
      }
    });
  });

  /* ---------------- Carrusel de ejemplos ---------------- */
  (function(){
    var root = document.getElementById('exCarousel');
    if(!root) return;
    var track = document.getElementById('exTrack');
    var slides = track.querySelectorAll('.ex-slide');
    var dotsBox = document.getElementById('exDots');
    var idx = 0, n = slides.length, startX = null;
    var dots = [];
    for(var i=0;i<n;i++){
      (function(i){
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'ex-dot';
        b.setAttribute('aria-label', (i+1) + ' / ' + n);
        b.addEventListener('click', function(){ go(i); });
        dotsBox.appendChild(b); dots.push(b);
      })(i);
    }
    function go(i){
      idx = (i + n) % n;
      track.style.transform = 'translateX(' + (-100 * idx) + '%)';
      slides.forEach(function(s, k){
        if(k === idx){ s.removeAttribute('aria-hidden'); s.removeAttribute('inert'); }
        else { s.setAttribute('aria-hidden','true'); s.setAttribute('inert',''); }
      });
      dots.forEach(function(d, k){ d.setAttribute('aria-current', k === idx ? 'true' : 'false'); });
    }
    document.getElementById('exPrev').addEventListener('click', function(){ go(idx-1); });
    document.getElementById('exNext').addEventListener('click', function(){ go(idx+1); });
    root.addEventListener('keydown', function(e){
      if(e.key === 'ArrowLeft'){ go(idx-1); }
      else if(e.key === 'ArrowRight'){ go(idx+1); }
    });
    track.addEventListener('pointerdown', function(e){ startX = e.clientX; });
    track.addEventListener('pointerup', function(e){
      if(startX === null) return;
      var dx = e.clientX - startX; startX = null;
      if(Math.abs(dx) > 50){ go(dx < 0 ? idx+1 : idx-1); }
    });
    track.addEventListener('pointercancel', function(){ startX = null; });
    go(0);
  })();

  var backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function(){
    backToTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.6);
  }, { passive:true });
  backToTop.addEventListener('click', function(){
    window.scrollTo({ top:0, behavior: reduceMotion ? 'auto':'smooth' });
  });

  /* ---------------- WhatsApp links (fixed business number) ---------------- */
  function waLink(text){
    return "https://wa.me/" + BUSINESS_WHATSAPP + "?text=" + encodeURIComponent(text);
  }
  var greeting = { es:"Hola Balabits! Quiero hacer una consulta.", en:"Hi Balabits! I'd like to ask about your services.", pt:"Olá Balabits! Gostaria de fazer uma pergunta." };
  function refreshStaticWaLinks(){
    var text = greeting[currentLang];
    ["navWhatsapp","heroWhatsapp","cardWhatsapp","floatWhatsapp"].forEach(function(id){
      var el = document.getElementById(id);
      if(el) el.setAttribute('href', waLink(text));
    });
    var mail = document.getElementById('mailtoLink');
    var mailSubject = ({es:'Consulta desde la web', en:'Inquiry from the website', pt:'Contato pelo site'})[currentLang] || 'Inquiry from the website';
    if(mail) mail.setAttribute('href', 'mailto:' + BUSINESS_EMAIL + '?subject=' + encodeURIComponent(mailSubject));
    var cardEmail = document.getElementById('cardEmail');
    if(cardEmail) cardEmail.setAttribute('href', 'mailto:' + BUSINESS_EMAIL + '?subject=' + encodeURIComponent(mailSubject));
  }
  var _applyLangOrig = applyLang;
  applyLang = function(lang){ _applyLangOrig(lang); refreshStaticWaLinks(); };

  /* ---------------- Country / dial code selector ---------------- */
  var COUNTRIES = BALABITS_COUNTRIES;

  function flagFromIso(iso){
    return String.fromCodePoint.apply(null, iso.toUpperCase().split('').map(function(c){ return 127397 + c.charCodeAt(0); }));
  }
  COUNTRIES.forEach(function(c){ c.flag = flagFromIso(c.iso); });

  var selectedCountry = COUNTRIES.find(function(c){ return c.iso === 'AR'; }) || COUNTRIES[0];

  var countryList = document.getElementById('countryList');
  var countrySearch = document.getElementById('countrySearch');
  var countryPanel = document.getElementById('countryPanel');
  var countrySelectBtn = document.getElementById('countrySelectBtn');

  function renderCountryList(filter){
    filter = (filter || '').trim().toLowerCase();
    countryList.innerHTML = '';
    var matches = COUNTRIES.filter(function(c){
      var name = (currentLang === 'es' ? c.es : (currentLang === 'pt' ? c.pt : c.en)).toLowerCase();
      return !filter || name.indexOf(filter) !== -1 || c.dial.indexOf(filter) !== -1;
    });
    if(matches.length === 0){
      var empty = document.createElement('li');
      empty.className = 'empty';
      empty.textContent = currentLang === 'es' ? 'Sin resultados' : (currentLang === 'pt' ? 'Nenhum resultado encontrado' : 'No results');
      countryList.appendChild(empty);
      return;
    }
    matches.forEach(function(c){
      var li = document.createElement('li');
      li.setAttribute('role','option');
      li.className = c.iso === selectedCountry.iso ? 'active' : '';
      li.innerHTML = '<span class="flag">' + c.flag + '</span><span>' + (currentLang === 'es' ? c.es : (currentLang === 'pt' ? c.pt : c.en)) + '</span><span class="dial">+' + c.dial + '</span>';
      li.addEventListener('click', function(){
        selectedCountry = c;
        updateSelectedCountryLabel();
        closeCountryPanel();
      });
      countryList.appendChild(li);
    });
  }

  function updateSelectedCountryLabel(){
    document.getElementById('countrySelectedFlag').textContent = selectedCountry.flag;
    document.getElementById('countrySelectedDial').textContent = '+' + selectedCountry.dial;
  }

  function openCountryPanel(){
    countryPanel.classList.add('open');
    countrySelectBtn.setAttribute('aria-expanded','true');
    renderCountryList('');
    countrySearch.value = '';
    setTimeout(function(){ countrySearch.focus(); }, 30);
  }
  function closeCountryPanel(){
    countryPanel.classList.remove('open');
    countrySelectBtn.setAttribute('aria-expanded','false');
  }
  countrySelectBtn.addEventListener('click', function(){
    countryPanel.classList.contains('open') ? closeCountryPanel() : openCountryPanel();
  });
  countrySearch.addEventListener('input', function(){ renderCountryList(countrySearch.value); });
  document.addEventListener('click', function(ev){
    if(!document.getElementById('countrySelectWrap').contains(ev.target)) closeCountryPanel();
  });
  document.addEventListener('keydown', function(ev){
    if(ev.key === 'Escape') closeCountryPanel();
  });

  renderCountryList('');
  updateSelectedCountryLabel();

  /* ---------------- Contact form submit ---------------- */
  var form = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');
  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    var name = document.getElementById('cf-name').value.trim();
    var email = document.getElementById('cf-email').value.trim();
    var phone = document.getElementById('cf-phone-number').value.trim();
    var service = document.getElementById('cf-service').value;
    var message = document.getElementById('cf-message').value.trim();

    if(!name || !email || !message){
      formStatus.textContent = i18n[currentLang]['form.filled'];
      formStatus.classList.add('show');
      return;
    }

    var fullPhone = phone ? ('+' + selectedCountry.dial + ' ' + phone) : (currentLang === 'es' ? 'no indicado' : (currentLang === 'pt' ? 'não informado' : 'not provided'));
    var lines;
    if(currentLang === 'es'){
      lines = ["Hola Balabits! Soy " + name + ".", "Me interesa: " + service + ".",
        "Mi email: " + email, "Mi telefono: " + fullPhone, "Mensaje: " + message];
    } else if(currentLang === 'pt'){
      lines = ["Olá Balabits! Sou " + name + ".", "Tenho interesse em: " + service + ".",
        "Meu email: " + email, "Meu telefone: " + fullPhone, "Mensagem: " + message];
    } else {
      lines = ["Hi Balabits! I'm " + name + ".", "I'm interested in: " + service + ".",
        "My email: " + email, "My phone: " + fullPhone, "Message: " + message];
    }
    var text = lines.join("\n");
    window.open(waLink(text), '_blank', 'noopener');
    formStatus.textContent = i18n[currentLang]['form.opened'];
    formStatus.classList.add('show');
  });

  /* ---------------- Init ---------------- */
  applyLang(currentLang);
})();
