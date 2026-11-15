/* Génère les pages de la vitrine depuis _src/contenu.js.
   Lancement :  node _src/build.js
   Le HTML produit NE SE MODIFIE PAS À LA MAIN : il est réécrit à chaque fois. */
'use strict';
const fs = require('fs');
const path = require('path');
const { APP, THEMES, ACCUEIL, PRODUIT, PRODUIT_DOC, TELS } = require('./contenu.js');

const RACINE = path.join(__dirname, '..');
const LOGO = (c, w, h) => `<svg viewBox="8 34 164 104" width="${w}" height="${h}" aria-hidden="true"><g stroke="${c}" stroke-width="17" stroke-linecap="round" fill="none"><line x1="20" y1="118" x2="56" y2="104"/><line x1="70" y1="122" x2="100" y2="84"/><line x1="112" y1="125" x2="134" y2="66"/><line x1="158" y1="128" x2="158" y2="46"/></g></svg>`;
const MARQUE = (c, w, h) => `<span class="brand">${LOGO(c, w, h)}<span class="brand-w"><span class="brand-r">rehab<sup class="brand-e">4</sup></span><span class="brand-p">perf</span></span></span>`;
const COCHE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const FLECHE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';

/* Une capture : soit un fichier précis, soit un préfixe à deux largeurs. */
function image(src, alt, { large = false, tel = false, doc = false, prio = false } = {}) {
  if (!src) return '';
  const charge = prio ? ' fetchpriority="high"' : ' loading="lazy"';
  if (/\.webp$/.test(src)) return `<img src="${src}" alt="${alt}" width="1280" height="800" decoding="async"${charge}>`;
  const [a, b] = doc ? [640, 1280] : tel ? [390, 780] : [1280, 2560];
  const tailles = doc ? '(max-width: 980px) min(92vw, 440px), 440px'
    : tel ? '(max-width: 900px) 72vw, 250px'
    : large ? '(max-width: 1188px) 100vw, 1140px' : '(max-width: 980px) 100vw, 620px';
  /* Le courrier est une page portrait : ses vraies dimensions, sinon la place
     réservée avant chargement est fausse et la page saute. */
  const [lw, lh] = doc ? [1310, 2356] : tel ? [390, 844] : [1280, 800];
  return `<img src="${src}-${a}.webp" srcset="${src}-${a}.webp ${a}w, ${src}-${b}.webp ${b}w" sizes="${tailles}"`
    + ` width="${lw}" height="${lh}" alt="${alt}" decoding="async"${charge}>`;
}
const preuves = (items) => `<ul class="preuves">${items.map(t => `<li>${COCHE}<span>${t}</span></li>`).join('')}</ul>`;

function nav(actif) {
  const liens = [['Le produit', 'produit.html'], ['Sécurité', 'index.html#securite'], ['Tarifs', 'index.html#tarifs']];
  return `<nav class="nav">
  <div class="wrap nav-in">
    <a href="index.html" aria-label="Rehab4Perf, accueil">${MARQUE('#2B5FA6', 32, 21)}</a>
    <div class="nav-liens">${liens.map(([t, h]) => `<a href="${h}">${t}</a>`).join('')}</div>
    <div class="nav-cta">
      <a href="${APP}" class="btn btn-ligne">Connexion</a>
      <a href="${APP}" class="btn btn-plein">Essai gratuit</a>
    </div>
  </div>
</nav>
<div class="rail"><div class="wrap rail-in">${
    THEMES.map(t => `<a href="${t.slug}.html"${t.slug === actif ? ' aria-current="page"' : ''}>${t.nav}</a>`).join('')
  }</div></div>`;
}

function pied() {
  const col = (titre, liens) => `<div><h5>${titre}</h5>${liens.map(([t, h]) => `<a href="${h}">${t}</a>`).join('')}</div>`;
  return `<footer class="pied">
  <div class="wrap">
    <div class="pied-grille">
      <div>
        ${MARQUE('#7FA8D9', 30, 19)}
        <p class="pied-mot">Le dossier du sportif, du bilan clinique au retour de terrain. Conçu par un kinésithérapeute.</p>
      </div>
      ${col('Le produit', THEMES.slice(0, 4).map(t => [t.nav, t.slug + '.html']))}
      ${col('Aussi', THEMES.slice(4).map(t => [t.nav, t.slug + '.html']).concat([['Tarifs', 'index.html#tarifs']]))}
      ${col('Légal', [['Mentions légales', 'mentions-legales.html'], ['CGU', 'cgu.html'], ['Confidentialité', 'confidentialite.html'], ['contact@rehab4perf.com', 'mailto:contact@rehab4perf.com']])}
    </div>
    <div class="pied-bas"><span>© 2026 Rehab4Perf. Tous droits réservés.</span><span>Fait avec soin en France</span></div>
  </div>
</footer>`;
}

const SCRIPT = `<script>
(function () {
  /* L'état masqué vient du script, jamais de la feuille : sans JavaScript, ou
     si le script échoue, le contenu reste visible. */
  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cibles = document.querySelectorAll('.reveal');
  if (cibles.length && 'IntersectionObserver' in window && !reduit) {
    document.documentElement.classList.add('js-reveal');
    var io = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('vu'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    cibles.forEach(function (el) { io.observe(el); });
  }
  var choix = document.querySelectorAll('.diapo-choix button');
  var diapos = document.querySelectorAll('.diapos .diapo');
  if (choix.length && diapos.length) {
    var montrer = function (n) {
      choix.forEach(function (b, i) {
        b.classList.toggle('actif', i === n);
        b.setAttribute('aria-pressed', i === n ? 'true' : 'false');
      });
      diapos.forEach(function (im, i) {
        im.classList.toggle('actif', i === n);
        if (i === n) { im.removeAttribute('aria-hidden'); } else { im.setAttribute('aria-hidden', 'true'); }
      });
    };
    choix.forEach(function (b, i) {
      b.addEventListener('click', function () { montrer(i); });
      b.addEventListener('animationend', function (e) {
        if (e.animationName === 'diapoDefile') { montrer((i + 1) % choix.length); }
      });
    });
  }

  /* Le rail d'onglets amène l'onglet courant dans le champ au chargement. */
  var cour = document.querySelector('.rail a[aria-current="page"]');
  if (cour && cour.scrollIntoView) {
    try { cour.scrollIntoView({ block: 'nearest', inline: 'center' }); } catch (e) {}
  }
})();
</script>`;

function page({ titre, description, actif, corps, canonique }) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titre}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="https://rehab4perf.com/${canonique}">
<meta property="og:title" content="${titre}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@1,600&family=Poppins:wght@800&display=swap" rel="stylesheet">
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="stylesheet" href="css/site.css">
</head>
<body>
${nav(actif)}
${corps}
${pied()}
${SCRIPT}
</body>
</html>
`;
}

function diaporama(diapos) {
  return `<div class="hero-vue">
      <div class="ecran diapos">${diapos.map((d, i) => `<img class="diapo${i === 0 ? ' actif' : ''}" src="${d.img}-1280.webp" srcset="${d.img}-1280.webp 1280w, ${d.img}-2560.webp 2560w" sizes="(max-width: 1188px) 100vw, 1140px" width="1280" height="800" alt="${d.alt}" decoding="async"${i === 0 ? ' fetchpriority="high"' : ' fetchpriority="low" aria-hidden="true"'}>`).join('')}</div>
      <div class="diapo-choix" role="group" aria-label="Écran affiché">${diapos.map((d, i) => `<button type="button"${i === 0 ? ' class="actif" aria-pressed="true"' : ' aria-pressed="false"'}>${d.libelle}</button>`).join('')}</div>
    </div>`;
}

/* Le document en entier : texte collant à gauche, la page à droite. */
function document_(b) {
  return `<section class="sec sur-blanc"><div class="wrap">
    <div class="doc reveal">
      <div class="duo-txt"><h2 class="t-moyen">${b.h2}</h2><p>${b.p}</p>${preuves(b.preuves)}</div>
      <figure class="doc-page">${image(b.img.src, b.img.alt, { doc: true })}</figure>
    </div></div></section>`;
}

/* ── Blocs d'une page de thème ───────────────────────────────────────────── */
function bloc(b) {
  if (b.type === 'doc') return document_(b);
  if (b.type === 'tels') {
    return `<section class="sec sur-blanc"><div class="wrap">
      <div class="tete reveal"><h2 class="t-grand">Ce qu'il a dans la poche</h2><p class="chapo">Quatre écrans, pris dans l'application telle qu'elle est aujourd'hui.</p></div>
      <div class="tels">${TELS.map(t => `<figure class="tel reveal"><div class="tel-cadre">${image(t.img, t.alt, { tel: true })}</div><figcaption><strong>${t.titre}</strong>${t.txt}</figcaption></figure>`).join('')}</div>
    </div></section>`;
  }
  if (b.type === 'points') {
    return `<section class="sec"><div class="wrap">
      <div class="tete reveal"><h2 class="t-grand">${b.h2}</h2><p class="chapo">${b.p}</p></div>
      <div class="points">${b.items.map(i => `<div class="point reveal"><h3>${i.h3}</h3><p>${i.p}</p></div>`).join('')}</div>
    </div></section>`;
  }
  if (b.type === 'bande') {
    return `<section class="sec sur-navy"><div class="wrap">
      <div class="tete reveal"><h2 class="t-grand">${b.h2}</h2><p class="chapo">${b.p}</p></div>
      <div class="reveal" style="max-width:860px">${preuves(b.preuves)}</div>
    </div></section>`;
  }
  /* duo : texte + écran, ou texte seul si la capture manque encore */
  const txt = `<div class="duo-txt"><h2 class="t-moyen">${b.h2}</h2><p>${b.p}</p>${preuves(b.preuves)}</div>`;
  if (!b.img) {
    return `<section class="sec sur-blanc"><div class="wrap"><div class="bloc-seul reveal">${txt}</div></div></section>`;
  }
  return `<section class="sec sur-blanc"><div class="wrap">
    <div class="duo${b.inverse ? ' duo-inverse' : ''} reveal">${txt}
      <div><div class="ecran ecran-doux">${image(b.img.src, b.img.alt)}</div></div>
    </div></div></section>`;
}

function suite(slugs) {
  const t = slugs.map(s => THEMES.find(x => x.slug === s)).filter(Boolean);
  return `<section class="sec"><div class="wrap">
    <div class="tete reveal"><h2 class="t-moyen">Et ensuite</h2></div>
    <div class="suite">${t.map(x => `<a href="${x.slug}.html" class="reveal"><h3>${x.titre}</h3><p>${x.chapoCarte}</p></a>`).join('')}</div>
  </div></section>`;
}

const FINAL = `<section class="final sur-blanc"><div class="wrap-etroit">
  <h2 class="t-grand">Votre prochain bilan peut être le premier</h2>
  <p class="chapo">Créez votre compte gratuitement, sans carte bancaire, et testez sur un dossier réel dès aujourd'hui.</p>
  <a href="${APP}" class="btn btn-plein btn-lg">Commencer gratuitement ${FLECHE}</a>
</div></section>`;

/* ── Pages de thème ──────────────────────────────────────────────────────── */
THEMES.forEach(t => {
  const hero = `<header class="hero"><div class="hero-fond"><div class="halo halo-1"></div><div class="halo halo-2"></div><div class="halo halo-3"></div></div>
  <div class="wrap">
    <span class="eyebrow">${t.titre}</span>
    <h1 class="t-geant">${t.h1}</h1>
    <p class="chapo">${t.chapo}</p>
    <div class="hero-actions"><a href="${APP}" class="btn btn-plein btn-lg">Essayer gratuitement ${FLECHE}</a><a href="produit.html" class="btn btn-ligne btn-lg">Tout le produit</a></div>
    ${t.heroImg ? `<div class="hero-vue"><div class="ecran">${image(t.heroImg.src, t.heroImg.alt, { large: true, prio: true })}</div></div>` : ''}
  </div></header>`;
  const corps = hero + t.blocs.map(bloc).join('\n') + suite(t.suite) + FINAL;
  fs.writeFileSync(path.join(RACINE, t.slug + '.html'),
    page({ titre: `${t.titre} · Rehab4Perf`, description: t.chapo.replace(/<[^>]+>/g, ''), actif: t.slug, corps, canonique: t.slug }));
});

/* ── Accueil ─────────────────────────────────────────────────────────────── */
const A = ACCUEIL;
const trame = `<section class="sec" id="trame"><div class="wrap">
  <div class="tete reveal"><span class="eyebrow">Le produit</span><h2 class="t-grand">Sept domaines, un seul dossier</h2>
  <p class="chapo">Chaque thème a sa page. Entrez par celui qui vous concerne.</p></div>
  <div class="trame">${THEMES.map(t => `<a href="${t.slug}.html" class="carte reveal">
    ${t.vignette ? `<div class="carte-vue${t.vignette.tel ? ' carte-vue-tel' : ''}">${image(t.vignette.src, t.vignette.alt)}</div>` : ''}
    <div class="carte-txt"><h3>${t.titre}</h3><p>${t.chapoCarte}</p>
      <div class="carte-mots">${t.mots.map(m => `<span class="mot">${m}</span>`).join('')}</div>
      <span class="carte-fin lien-fleche">Voir ${FLECHE}</span>
    </div></a>`).join('')}</div>
</div></section>`;

const modes = `<section class="sec sur-blanc"><div class="wrap">
  <div class="tete reveal"><h2 class="t-grand">${A.modes.h2}</h2><p class="chapo">${A.modes.chapo}</p></div>
  <div class="duo" style="grid-template-columns:1fr 1fr;align-items:start">
    ${[A.modes.kine, A.modes.prepa].map(m => `<div class="reveal"><h3 class="t-petit" style="color:var(--blue)">${m.sous}</h3><h3 class="t-moyen" style="margin:2px 0 8px">${m.titre}</h3>${preuves(m.items)}</div>`).join('')}
  </div>
</div></section>`;

const securite = `<section class="sec sur-navy" id="securite"><div class="wrap">
  <div class="tete reveal"><h2 class="t-grand">${A.securite.h2}</h2><p class="chapo">${A.securite.chapo}</p></div>
  <div class="points">${A.securite.items.map(i => `<div class="point reveal"><h3>${i.h3}</h3><p>${i.p}</p></div>`).join('')}</div>
</div></section>`;

const tels = `<section class="sec"><div class="wrap">
  <div class="tete reveal"><h2 class="t-grand">Votre patient repart avec une vraie application</h2>
  <p class="chapo">Un lien suffit, sans compte ni mot de passe. Il voit son programme, son corps et ses progrès, et vous renvoie son ressenti.</p></div>
  <div class="tels">${TELS.map(t => `<figure class="tel reveal"><div class="tel-cadre">${image(t.img, t.alt, { tel: true })}</div><figcaption><strong>${t.titre}</strong>${t.txt}</figcaption></figure>`).join('')}</div>
  <div class="reveal" style="margin-top:34px"><a href="athlete.html" class="lien-fleche">Tout l'espace athlète ${FLECHE}</a></div>
</div></section>`;

const tarifs = `<section class="sec sur-blanc" id="tarifs"><div class="wrap">
  <div class="tete-centre reveal"><span class="eyebrow">Tarifs</span><h2 class="t-grand">${A.tarifs.h2}</h2><p class="chapo">${A.tarifs.chapo}</p></div>
  <div class="prix-grille">${A.tarifs.offres.map(o => `<div class="prix${o.phare ? ' phare' : ''} reveal">
    ${o.phare ? `<span class="prix-badge">${o.phare}</span>` : ''}
    <div class="prix-nom">${o.nom}</div>
    <div class="prix-montant">${o.prix} <span>${o.periode}</span></div>
    <div class="prix-sous">${o.sous}</div>
    ${preuves(o.items)}
    <a href="${o.cta.href}" class="btn btn-${o.cta.style}">${o.cta.libelle}</a>
  </div>`).join('')}</div>
  <p class="legende reveal" style="text-align:center;margin-top:22px">${A.tarifs.note}</p>
</div></section>`;

const accueil = `<header class="hero"><div class="hero-fond"><div class="halo halo-1"></div><div class="halo halo-2"></div><div class="halo halo-3"></div></div>
  <div class="wrap">
    <h1 class="t-geant">${A.h1}</h1>
    <p class="chapo">${A.chapo}</p>
    <div class="hero-actions"><a href="${APP}" class="btn btn-plein btn-lg">Commencer gratuitement ${FLECHE}</a><a href="#trame" class="btn btn-ligne btn-lg">Voir le produit</a></div>
    ${diaporama(A.diapos)}
  </div></header>
<section class="sec-serre sur-blanc"><div class="wrap"><div class="chiffres">${
  A.chiffres.map(c => `<div class="reveal"><div class="chiffre">${c.n}</div><div class="chiffre-lbl">${c.l}</div></div>`).join('')
}</div></div></section>
${trame}${modes}${tels}${securite}${tarifs}${FINAL}`;

fs.writeFileSync(path.join(RACINE, 'index.html'), page({
  titre: 'Rehab4Perf · Le dossier du sportif, du bilan clinique au retour de terrain',
  description: A.chapo.replace(/<[^>]+>/g, ''), actif: null, corps: accueil, canonique: ''
}));

const P = PRODUIT;
const produit = `<header class="hero"><div class="hero-fond"><div class="halo halo-1"></div><div class="halo halo-2"></div><div class="halo halo-3"></div></div>
  <div class="wrap">
    <span class="eyebrow">Le produit</span>
    <h1 class="t-geant">${P.h1}</h1>
    <p class="chapo">${P.chapo}</p>
    <div class="hero-actions"><a href="${APP}" class="btn btn-plein btn-lg">Essayer gratuitement ${FLECHE}</a><a href="#trame" class="btn btn-ligne btn-lg">Par thème</a></div>
    ${diaporama(P.diapos)}
  </div></header>
${P.blocs.map((b, i) => `<section class="sec${i % 2 === 0 ? ' sur-blanc' : ''}"><div class="wrap">
  <div class="duo${b.inverse ? ' duo-inverse' : ''} reveal">
    <div class="duo-txt"><h2 class="t-moyen">${b.h2}</h2><p>${b.p}</p></div>
    <div><div class="ecran ecran-doux">${image(b.img, b.alt)}</div></div>
  </div></div></section>`).join('')}
${document_(PRODUIT_DOC)}
<section class="sec"><div class="wrap">
  <div class="tete reveal"><h2 class="t-grand">Ce qu'il a dans la poche</h2>
  <p class="chapo">L'athlète ouvre un lien, sans compte ni mot de passe.</p></div>
  <div class="tels">${TELS.map(t => `<figure class="tel reveal"><div class="tel-cadre">${image(t.img, t.alt, { tel: true })}</div><figcaption><strong>${t.titre}</strong>${t.txt}</figcaption></figure>`).join('')}</div>
</div></section>
${trame}${FINAL}`;

fs.writeFileSync(path.join(RACINE, 'produit.html'), page({
  titre: `${P.titre} · Rehab4Perf`, description: P.chapo.replace(/<[^>]+>/g, ''),
  actif: null, corps: produit, canonique: 'produit'
}));

console.log('Pages écrites : index.html, produit.html + ' + THEMES.map(t => t.slug + '.html').join(', '));
