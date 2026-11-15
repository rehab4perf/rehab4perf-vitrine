/* ═══════════════════════════════════════════════════════════════════════════
   Vitrine Rehab4Perf — LA SOURCE. Les pages de `/` sont générées d'ici par
   `node _src/build.js`. On n'édite jamais le HTML produit : il serait écrasé.

   Le contenu suit le centre d'aide de l'application (js/aide-content.js) :
   15 domaines, une centaine d'articles, regroupés ici en sept thèmes.
   Règles de la maison : aucun tiret cadratin, aucun emoji.
   ═══════════════════════════════════════════════════════════════════════════ */
'use strict';

const APP = 'https://app.rehab4perf.com/auth.html';

/* Les sept thèmes : l'ordre fait le rail d'onglets et le pied de page. */
const THEMES = [
  {
    slug: 'bilan', nav: 'Bilan clinique',
    titre: 'Le bilan clinique',
    chapoCarte: 'Six régions, vos propres onglets, et des tests qui se lisent en symétrie sans que vous comptiez.',
    mots: ['Tests par région', 'Actif / passif', 'Symétrie', 'Onglets sur mesure'],
    vignette: { src: 'img/app/bilan-1280.webp', alt: 'Page de bilan du genou : amplitudes et tests, côté gauche et côté droit' },
    h1: 'Le bilan que vous faites déjà,<br>qui se range tout seul',
    chapo: 'Vous testez, vous saisissez. L\'application calcule les écarts, nomme les côtés correctement et garde chaque bilan fidèle à sa date.',
    heroImg: { src: 'img/app/bilan', alt: 'Page de bilan du genou dans Rehab4Perf : amplitudes articulaires et tests de force, colonnes gauche et droite', legende: 'Le bilan du genou. Les valeurs saisies alimentent le compte-rendu, le Suivi et les courbes d\'évolution.' },
    blocs: [
      { type: 'duo', img: { src: 'img/app/bilan-perso', alt: 'Mode personnalisation du bilan : chaque bloc porte ses poignées pour monter, descendre ou masquer, et la barre du bas indique douze blocs affichés et aucun test masqué' },
        h2: 'Aucun bilan ne ressemble<br>à celui du voisin',
        p: 'Personne ne teste exactement comme son confrère. Plutôt que de vous demander d\'entrer dans un moule, l\'application vous laisse construire le vôtre, écran par écran.',
        preuves: [
          '<strong>Déplacez, masquez, renommez</strong> n\'importe quel bloc ou test, page par page.',
          '<strong>Ajoutez vos propres tests</strong> dans un bloc existant, avec leur description et leur unité.',
          '<strong>Créez vos onglets</strong>, avec leur icône, leurs blocs, leur forme : gauche et droite, écart en points, appréciation, mobilité actif et passif.',
          'Rangez vos onglets dans vos dossiers, et retrouvez votre disposition sur chaque nouveau patient.',
          'Enregistrez plusieurs <strong>dispositions</strong> et basculez de l\'une à l\'autre selon le motif.'
        ] },
      { type: 'duo', inverse: true, h2: 'Six régions pour commencer',
        p: 'Épaule, coude, poignet, rachis, hanche, genou, pied, lésion musculaire. Chaque page porte ses tests, ses amplitudes et ses observations, et vous la retaillez à votre main.',
        preuves: [
          'Les tests de Rehab4Perf servent de base : vous en gardez ce qui vous sert.',
          'Un bilan déjà sauvegardé <strong>reste fidèle à lui-même</strong>, même si vous changez vos pages ensuite.',
          'Au cabinet, une disposition se partage : toute l\'équipe part de la même page.'
        ], img: null },
      { type: 'duo', inverse: true, h2: 'Actif et passif, pour trancher',
        p: 'Comparer les deux amplitudes range la limitation dans l\'un des quatre profils, et la fin de course affine le verdict.',
        preuves: [
          'Limitation articulaire, limitation musculaire, douleur sans limitation, arrêt sur douleur.',
          '<strong>« Vide, arrêt sur douleur »</strong> est traité comme un signal, jamais comme une raideur.',
          'La hanche garde ses deux côtés, et le coude remonte enfin au compte-rendu.'
        ], img: null },
      { type: 'points', h2: 'Ce que l\'application calcule pour vous', p: 'Vous saisissez des mesures. Ce qui en découle n\'a pas à être recompté à la main.',
        items: [
          { h3: 'La symétrie', p: 'Tout test à deux côtés sort son indice et son écart, avec le barème appliqué seul.' },
          { h3: 'L\'appréciation sans dynamomètre', p: 'Trois paliers nommés, pour les cabinets qui testent sans matériel de mesure.' },
          { h3: 'Le côté, par région', p: 'Le côté atteint se résout région par région. Sans côté atteint, tout reste en gauche et droite.' },
          { h3: 'L\'analyse de course', p: 'Cadence, attaque du pied, contact au sol : vous observez, deux lignes décrivent sans prescrire.' },
          { h3: 'Les bilans de suivi', p: 'Les anciens résultats restent en fond, et la marque « réévalué » dit ce qui a bougé.' },
          { h3: 'Les courbes d\'évolution', p: 'Chaque mesure devient une courbe, bilan après bilan, avec le chiffre du jour en grand.' }
        ] }
    ],
    suite: ['compte-rendu', 'suivi', 'programme']
  },

  {
    slug: 'compte-rendu', nav: 'Compte-rendu',
    titre: 'Le compte-rendu médecin',
    chapoCarte: 'Le courrier s\'écrit pendant que vous remplissez le bilan. Il ne reste qu\'à l\'envoyer.',
    mots: ['Aperçu vivant', 'Médecin ou patient', 'PDF', 'Batteries validées'],
    vignette: { src: 'img/app/cr-1280.webp', alt: 'Générateur de compte-rendu : le formulaire à gauche, la lettre au médecin à droite' },
    h1: 'Le courrier s\'écrit<br>pendant que vous remplissez',
    chapo: 'Plus de bouton « générer » : la lettre se compose à mesure que le bilan avance. Vous relisez, vous exportez.',
    heroImg: { src: 'img/app/cr', alt: 'Générateur de compte-rendu de Rehab4Perf : formulaire du destinataire à gauche, aperçu de la lettre au médecin à droite avec le tableau des tests de force', legende: 'Le générateur de CR. Les tests du bilan s\'associent seuls et se mettent à jour quand le bilan change.' },
    blocs: [
      { type: 'duo', h2: 'Au médecin, ou au patient',
        p: 'Le même fond, deux tons. Vous choisissez le destinataire, et le courrier s\'adapte sans que vous réécriviez quoi que ce soit.',
        preuves: [
          'Deux types de courrier : <strong>début de prise en charge</strong> et <strong>suivi</strong>.',
          'Pour le patient, les coordonnées du médecin disparaissent et le vouvoiement reste.',
          'Les informations du bilan s\'associent toutes seules, et se corrigent si le bilan bouge.'
        ], img: null },
      { type: 'points', h2: 'Un document qui tient debout à l\'impression', p: 'Ce qui part chez un confrère engage votre sérieux. La mise en page est traitée comme telle.',
        items: [
          { h3: 'Les colonnes s\'adaptent', p: 'Une colonne de côté n\'apparaît qu\'à partir de la moitié des lignes. Sinon la valeur passe en toutes lettres.' },
          { h3: 'Rien ne se coupe', p: 'Synthèse et plan sont deux encadrés jumeaux, et aucun bloc ne se scinde au milieu d\'une page.' },
          { h3: 'Un pied de page par feuille', p: 'Chaque feuille porte le patient et la date : un courrier dispersé reste identifiable.' },
          { h3: 'L\'analyse fonctionnelle', p: 'Une section à part, une compensation par ligne, et le score interne qui ne sort pas du cabinet.' },
          { h3: 'L\'EVA, à votre main', p: 'Elle se reprend du bilan, et une case décide si elle part au médecin.' },
          { h3: 'Les batteries validées', p: 'Ankle-GO et les autres se joignent au courrier, avec leur score, leur asymétrie et leur rapport PDF.' }
        ] },
      { type: 'bande', h2: 'Ce que le médecin reçoit, vous l\'avez déjà sous les yeux',
        p: 'L\'aperçu est le document. Pas de rendu différent à l\'export, pas de surprise à l\'ouverture.',
        preuves: [
          'Les graphiques d\'évolution et la charge d\'entraînement s\'ajoutent en cochant une case.',
          'L\'en-tête reprend votre cabinet, votre logo, votre signature et votre tampon.',
          'Un courrier hors patientèle se repart à zéro d\'un seul bouton.'
        ] }
    ],
    suite: ['bilan', 'suivi', 'cabinet']
  },

  {
    slug: 'programme', nav: 'Programme',
    titre: 'Programme et agenda',
    chapoCarte: 'Une bibliothèque en vidéo, un builder qui se souvient, des modèles et un agenda qui planifie.',
    mots: ['Bibliothèque', 'Builder', 'Modèles', 'Cycles', 'Protocoles'],
    vignette: { src: 'img/app/builder-1280.webp', alt: 'Construction d\'une séance : blocs, exercices, séries et charges cibles' },
    h1: 'La séance se construit<br>en deux minutes',
    chapo: 'Un objectif, une méthode, et les séries, répétitions, récupérations et tempos se remplissent seuls. Vous n\'ajustez que ce qui doit l\'être.',
    heroImg: { src: 'img/app/builder', alt: 'Construction de séance dans Rehab4Perf : bloc avec split squat 3 séries de 12 par côté à 10 kg, rappel de la dernière séance, et bibliothèque d\'exercices en vidéo', legende: 'Le builder. Chaque exercice rappelle ce qu\'il a donné la dernière fois, et la progression est signalée.' },
    blocs: [
      { type: 'duo', h2: 'Il se souvient de la dernière fois',
        p: 'Un exercice déjà prescrit revient avec ses paramètres, et la ligne du dessous dit ce qu\'il a donné la dernière fois.',
        preuves: [
          '<strong>Six objectifs</strong> : endurance de force, puissance, hypertrophie, force maximale, tendinopathie.',
          'Cibles en <strong>kilos, RPE, RIR, pourcentage du 1RM ou vitesse</strong>, au choix par exercice.',
          'Une cible en pourcentage du 1RM donne directement le poids à mettre.'
        ], img: null },
      { type: 'points', h2: 'De l\'exercice au plan de plusieurs mois', p: 'La séance n\'est qu\'un étage. Au-dessus, il y a les étapes, les modèles, les cycles et les protocoles.',
        items: [
          { h3: 'La bibliothèque', p: 'Plus de 200 exercices filmés, vos favoris, et vos propres exercices créés sans quitter la séance.' },
          { h3: 'Les étapes', p: 'Regroupez des blocs, nommez-les, donnez-leur une couleur. L\'athlète les retrouve telles quelles.' },
          { h3: 'Les modèles', p: 'Rangés dans vos dossiers, partageables au cabinet, et toujours ajoutés sans jamais remplacer.' },
          { h3: 'L\'agenda', p: 'Glissez une séance, posez une échéance, planifiez une même séance sur plusieurs jours.' },
          { h3: 'Les cycles', p: 'Durée fixe, ou critères cliniques à cocher : la phase suivante démarre quand les jalons sont tenus.' },
          { h3: 'Les protocoles', p: 'Ceux de Rehab4Perf arrivent seuls, s\'adaptent à votre pratique, et reviennent à l\'original d\'un clic.' }
        ] },
      { type: 'duo', inverse: true, img: { src: 'img/app/agenda', alt: 'Agenda de Rehab4Perf : le mois, les séances planifiées, et la colonne du patient avec son parcours et sa charge', legende: 'L\'agenda et la colonne du patient : son cycle, son protocole, sa charge et ses derniers retours.' }, h2: 'Les routines, et le générateur de tendon',
        p: 'Tout ne se planifie pas séance par séance. Une routine se coche chaque jour, un plan HSR se déroule par phases.',
        preuves: [
          'L\'athlète coche sa routine quotidienne, vous la suivez sans rien ouvrir.',
          'Le <strong>générateur HSR</strong> planifie les séances de chaque phase et suit la douleur.',
          'Le retour de l\'athlète arrive dans la séance, et vous gardez le dernier mot sur son évaluation.'
        ] }
    ],
    suite: ['charge', 'athlete', 'suivi']
  },

  {
    slug: 'suivi', nav: 'Suivi',
    titre: 'Le Suivi',
    chapoCarte: 'Quatre espaces et un corps en trois dimensions : où en est-il, comment va son corps, que fait-il, de quoi est-il capable.',
    mots: ['Corps 3D', 'Zones de douleur', 'Fiche athlète', 'VMA', 'Plan de course'],
    vignette: { src: 'img/app/suivi-corps-1280.webp', alt: 'Onglet Suivi : le corps 3D du patient et la fiche de la zone douloureuse' },
    h1: 'Son corps, ses chiffres,<br>sur un même écran',
    chapo: 'Un mannequin en trois dimensions porte les zones douloureuses, datées et reliées à leurs tests. Il suit le sexe du patient.',
    heroImg: { src: 'img/app/suivi-corps', alt: 'Onglet Suivi de Rehab4Perf : le corps 3D du patient avec le genou droit coloré, et la fiche de zone avec la courbe de douleur, le diagnostic et les tests liés', legende: 'La vue d\'ensemble du Suivi. Cliquez une zone du corps : sa fiche, sa courbe de douleur et ses tests s\'ouvrent à droite.' },
    blocs: [
      { type: 'points', h2: 'Quatre espaces, quatre questions', p: 'Le Suivi ne range pas par fonctionnalité, il range par question clinique.',
        items: [
          { h3: 'Synthèse', p: 'Où en est-il ? Les cases de douleur, de force et de fonction, et les courbes de tous ses tests.' },
          { h3: 'Clinique', p: 'Comment va son corps ? Le mannequin, ses onze zones, leur intensité et leur date.' },
          { h3: 'Entraînement', p: 'Que fait-il ? La charge, les sorties, la semaine de course proposée.' },
          { h3: 'Performance', p: 'De quoi est-il capable ? Ses constantes, ses tests de VMA, ses plans de course.' }
        ] },
      { type: 'duo', h2: 'Les zones ne sont pas des épingles',
        p: 'Le corps est découpé en zones sur sa surface. Une zone se colore, se clique et porte son étiquette, jamais une bille posée à côté.',
        preuves: [
          'Onze zones, et le côté anatomique correct : le patient vous fait face.',
          'La couleur dit l\'intensité, le vert dit résolue, et <strong>chaque zone porte sa date</strong>.',
          'Les zones du bilan arrivent seules ; vous en ajoutez d\'autres d\'un clic sur le corps.',
          'Un corps <strong>masculin ou féminin</strong>, selon le patient.'
        ], img: null },
      { type: 'duo', inverse: true, img: { src: 'img/app/evolution', alt: 'Page Évolution : courbes de douleur et de force bilan après bilan, avec les variations en pourcentage entre chaque mesure' },
        h2: 'Chaque mesure devient une courbe',
        p: 'Un bilan isolé dit où en est le patient. Trois bilans disent s\'il progresse, et à quelle vitesse. C\'est ce que le médecin et le patient attendent de vous.',
        preuves: [
          'Le chiffre du jour en grand, la variation depuis le début, et <strong>le pourcentage entre chaque mesure</strong>.',
          'Un test à deux côtés montre les trois chiffres : atteint, sain, et l\'asymétrie.',
          'Toutes les courbes s\'affichent d\'emblée ; vous choisissez celles qui partent au courrier.',
          'La période se règle : un mois, trois, six, un an, ou vos dates.'
        ] },
      { type: 'duo', img: { src: 'img/app/charge', alt: 'Analyse de la charge : ACWR à 1,05, charge sur sept jours, monotonie, et courbe des unités arbitraires sur huit semaines avec la charge chronique' },
        h2: 'Ce que l\'analyse de charge vous apporte',
        p: 'Des chiffres bruts, personne n\'en fait rien. Lus ensemble, ils répondent à trois questions que vous vous posez chaque semaine.',
        preuves: [
          '<strong>Est-ce que je charge trop ?</strong> L\'ACWR situe la semaine sur une échelle, et la bande dit son habitude.',
          '<strong>La semaine a-t-elle la bonne forme ?</strong> La monotonie distingue sept jours identiques de sept jours contrastés.',
          '<strong>Et la course ?</strong> Volume, part courue vite, allure par zone cardiaque, dérive sur un fractionné.',
          'Une douleur se superpose à la charge : vous voyez ce qui a précédé, et non ce qui a suivi.'
        ] },
      { type: 'duo', inverse: true, h2: 'Tester la VMA, préparer une course',
        p: 'Le Suivi ne s\'arrête pas à la rééducation. Il va jusqu\'au dossard.',
        preuves: [
          'Test de VMA sur <strong>tapis, piste ou terrain</strong>, avec le chrono, les paliers, la FC et le RPE.',
          'Zones de fréquence cardiaque, zones de VMA, prédicteur de temps.',
          'Plan de course : le profil du parcours, <strong>l\'allure portion par portion selon la pente</strong>, la météo et la nutrition.',
          'Une semaine de course proposée, réglée sur son ratio de charge, à placer dans l\'agenda.'
        ], img: null }
    ],
    suite: ['charge', 'bilan', 'athlete']
  },

  {
    slug: 'charge', nav: 'Charge et course',
    titre: 'La charge d\'entraînement',
    chapoCarte: 'Des unités arbitraires à l\'ACWR, et les sorties qui arrivent seules de Strava ou de la montre.',
    mots: ['UA de Foster', 'ACWR', 'Monotonie', 'Strava', 'Montres'],
    vignette: { src: 'img/app/charge-1280.webp', alt: 'Bilan de charge : ACWR à 1,05 en zone favorable et courbe sur huit semaines' },
    h1: 'Savoir si vous chargez trop,<br>avant qu\'il vous le dise',
    chapo: 'La charge des sept derniers jours, rapportée à la charge de fond des quatre dernières semaines. C\'est l\'ACWR, et il situe chaque semaine sur une échelle de risque.',
    heroImg: { src: 'img/app/charge', alt: 'Bilan de charge dans Rehab4Perf : ACWR à 1,05 en zone favorable, charge sur sept jours, monotonie, et courbe des unités arbitraires sur huit semaines avec la charge chronique', legende: 'Le bilan de charge, sous l\'agenda. À gauche, le parcours du patient et la phase en cours de son protocole.' },
    blocs: [
      { type: 'points', h2: 'Trois chiffres, et ce qu\'ils veulent dire', p: 'La méthode de Foster, appliquée sans jargon : une charge de séance vaut l\'effort perçu multiplié par la durée.',
        items: [
          { h3: 'L\'ACWR', p: 'Zone visée de 0,8 à 1,3. Vigilance jusqu\'à 1,5, risque au-delà. Il monte aussi quand on ne fait rien.' },
          { h3: 'La monotonie', p: 'La forme de la semaine. Des jours qui se ressemblent tous valent moins que des jours contrastés.' },
          { h3: 'La contrainte', p: 'La charge multipliée par la monotonie. Le volume seul ne suffit pas à juger une semaine.' },
          { h3: 'L\'intensité', p: 'Le temps passé dans chaque zone, le repère 80/20, et la dérive cardiaque sur un fractionné.' },
          { h3: 'Les paliers', p: 'Certaines semaines n\'augmentent pas : l\'os se décharge, le tendon se maintient. C\'est voulu.' },
          { h3: 'Un seul levier', p: 'Volume, allure, cadence : jamais deux la même semaine, sinon on ne sait plus ce qui a fait mal.' }
        ] },
      { type: 'duo', h2: 'Les sorties arrivent toutes seules',
        p: 'L\'athlète relie son compte une fois. Ensuite, chaque sortie rejoint sa séance et sa charge sans que personne ne saisisse rien.',
        preuves: [
          '<strong>Strava</strong> : les 90 derniers jours à la connexion, puis chaque nouvelle sortie.',
          '<strong>Montres</strong> : les sorties, et ses indicateurs de santé, avec son accord.',
          'Course vers séance de course, vélo vers séance de vélo : la liaison est automatique, et se défait à la main.',
          'Une même sortie venue de deux sources reste <strong>une seule séance</strong>.'
        ], img: null },
      { type: 'bande', h2: 'Et ce que les chiffres ne disent pas',
        p: 'Un outil honnête dit aussi ses limites. Celles-ci sont écrites dans le centre d\'aide, et elles le resteront.',
        preuves: [
          'L\'ACWR est une <strong>association, pas une prédiction</strong> : il ne remplace aucun examen.',
          'S\'entraîner protège aussi. Une charge basse n\'est pas une charge sûre.',
          'Les données ont des trous : une séance non remontée fausse le calcul.',
          '<strong>La douleur passe avant.</strong>'
        ] }
    ],
    suite: ['suivi', 'programme', 'athlete']
  },

  {
    slug: 'athlete', nav: 'Espace athlète',
    titre: 'L\'espace athlète',
    chapoCarte: 'Un lien, sans compte ni mot de passe. Son programme, son corps, ses vidéos, et son retour après la séance.',
    mots: ['Sans compte', 'Vidéos', 'Douleur par exercice', 'Notifications'],
    vignette: { src: 'img/app/athlete-suivi-780.webp', tel: true, alt: 'Espace athlète sur téléphone : son corps 3D et ses scores de force' },
    h1: 'Votre patient repart avec<br>une vraie application',
    chapo: 'Un lien suffit. Il voit son programme, son corps et ses progrès, et vous renvoie son ressenti après chaque séance.',
    heroImg: null,
    blocs: [
      { type: 'tels' },
      { type: 'points', h2: 'Ce qu\'il peut faire, et ce que vous en recevez', p: 'Tout ce qu\'il saisit revient chez vous : dans l\'agenda, dans la cloche, et dans sa charge.',
        items: [
          { h3: 'La douleur, par exercice', p: 'Un curseur par exercice, une remarque si besoin, et la question « et ce matin ? » le lendemain.' },
          { h3: 'Le ressenti de séance', p: 'Durée réelle et effort perçu. Sa charge en découle, et vous pouvez corriger les deux.' },
          { h3: 'Ses notes', p: 'Une note par jour sur son agenda, que vous voyez sans pouvoir la modifier.' },
          { h3: 'Les notifications', p: 'Une alerte sur son téléphone pour sa séance du jour, regroupées pour ne pas le harceler.' },
          { h3: 'Son aide à lui', p: 'Un tuto sur ses trois premières séances, un lexique, et ses cibles expliquées d\'un toucher.' },
          { h3: 'Son suivi', p: 'Son corps en trois dimensions, ses zones suivies, sa force et ses tests en équilibre gauche droite.' }
        ] },
      { type: 'duo', h2: 'Un lien que vous gardez sous contrôle',
        p: 'Le lien ne demande ni compte ni mot de passe. Il reste révocable, patient par patient.',
        preuves: [
          'Un <strong>jeton par patient</strong> : sécurisez le lien, renouvelez-le, révoquez-le.',
          'Le lien d\'une seule séance, pour un remplaçant ou un confrère.',
          'L\'athlète peut l\'ajouter à son écran d\'accueil : il l\'ouvre comme une application.'
        ], img: null }
    ],
    suite: ['programme', 'charge', 'cabinet']
  },

  {
    slug: 'cabinet', nav: 'Cabinet',
    titre: 'Le cabinet',
    chapoCarte: 'Votre façon de travailler, partagée par toute l\'équipe : vos tests, vos modèles, votre bilan, votre en-tête.',
    mots: ['Vos tests partagés', 'Trois rôles', 'Écran de salle', 'Statistiques'],
    vignette: { src: 'img/app/partage-1280.webp', alt: 'Menu de partage : l\'espace athlète, un confrère kiné, un préparateur physique' },
    h1: 'Un cabinet, ce n\'est pas<br>une addition de praticiens',
    chapo: 'Vous avez une façon de tester, de prescrire, d\'écrire au médecin. Elle fait la valeur de votre maison. Encore faut-il qu\'elle se transmette, sans réunion et sans classeur.',
    heroImg: { src: 'img/app/partage', alt: 'Menu Partager de Rehab4Perf : ouvrir l\'espace de l\'athlète, copier son lien, partager à un kiné, ou partager le dossier à un confrère préparateur physique' },
    blocs: [
      { type: 'duo', img: { src: 'img/app/bilan-perso', alt: 'Mode personnalisation du bilan : les blocs se déplacent et se masquent, et une disposition s\'enregistre pour toute l\'équipe' },
        h2: 'Votre méthode devient<br>celle du cabinet',
        p: 'Vous avez construit vos onglets, vos tests, vos modèles de séance. Au lieu de rester dans votre compte, ils deviennent le socle commun. Un nouveau collaborateur ouvre l\'application et travaille déjà comme vous.',
        preuves: [
          '<strong>Vos tests maison</strong> et vos blocs sur mesure, disponibles pour toute l\'équipe.',
          '<strong>La version du bilan du cabinet</strong> : dispositions enregistrées et playlists de tests, pour que chacun parte de la même page.',
          '<strong>Vos modèles et protocoles</strong>, rangés en dossiers, partagés à un ou plusieurs cabinets.',
          '<strong>L\'en-tête des courriers</strong> : le logo et l\'adresse du cabinet, avec la signature et le tampon de chacun.',
          'Le compte-rendu du cabinet, pour que deux courriers signés chez vous se ressemblent.'
        ] },
      { type: 'points', h2: 'Ce que vous gardez sous contrôle', p: 'Partager ne veut pas dire tout ouvrir. Chacun garde ses patients, et vous gardez la main sur ce qui est commun.',
        items: [
          { h3: 'Trois rôles', p: 'Administrateur principal, administrateurs, collaborateurs. Qui range la bibliothèque, qui invite, qui change les réglages.' },
          { h3: 'Ce qui reste personnel', p: 'Les patients, les notes cliniques, la signature et le tampon restent à chacun. Toujours.' },
          { h3: 'Les transferts', p: 'Confier ses patients à un collègue lors d\'un départ ou d\'un congé, en sachant ce qui suit le dossier et ce qui ne suit pas.' },
          { h3: 'L\'historique de l\'équipe', p: 'Qui est entré, qui est sorti, qui a changé de rôle. Rien ne se décide dans un couloir.' },
          { h3: 'Les places', p: 'Une place payée par le cabinet, ou un abonnement personnel. Un départ ne casse rien, et la dernière personne garde la maison.' },
          { h3: 'Plusieurs cabinets', p: 'Un praticien qui exerce dans deux structures bascule de l\'une à l\'autre, avec le bon en-tête et la bonne bibliothèque.' }
        ] },
      { type: 'duo', inverse: true, img: { src: 'img/app/statistiques', alt: 'Statistiques du cabinet : patients au total, actifs, dormants, et répartition par sexe, âge et sport' },
        h2: 'Ce que votre patientèle raconte',
        p: 'Combien de patients actifs, combien ne sont pas revenus, quelles régions vous traitez le plus. De quoi piloter une structure, pas seulement une consultation.',
        preuves: [
          '<strong>Les dormants</strong> : ceux qu\'on n\'a pas vus depuis 90 jours. L\'indicateur le plus actionnable de la page.',
          'Répartition par sexe, âge et sport, régions atteintes et diagnostics.',
          'Sports et diagnostics reconnus par mots-clés : vos collaborateurs écrivent naturellement, le regroupement suit.',
          '« Non renseigné » et « non reconnu » sont affichés exprès, pour que vous sachiez ce qui manque.'
        ] },
      { type: 'duo', img: { src: 'img/app/ecran-salle', alt: 'Aperçu de l\'écran de salle : deux patients, leurs blocs, leurs séries et leurs charges, sur la télévision du cabinet' },
        h2: 'La salle travaille toute seule',
        p: 'La séance s\'affiche sur la télévision : le patient sait quoi faire, et votre collaborateur n\'a plus à répéter les consignes à trois personnes en même temps.',
        preuves: [
          'La télé n\'a <strong>ni session ni mot de passe</strong> : un secret tiré une fois, révocable.',
          'Le prénom, les blocs, les charges. <strong>Jamais le diagnostic.</strong>',
          'L\'écran se partage entre les kinés, et chacun peut retirer une séance, la sienne ou celle d\'un collègue.',
          'Ouvrez-la à des coachs extérieurs sans compte, par un simple lien d\'invitation.'
        ] },
      { type: 'bande', h2: 'Et le préparateur physique, dans tout ça',
        p: 'Beaucoup de structures font travailler kinés et préparateurs côte à côte. Le dossier passe de l\'un à l\'autre, sans tout ouvrir.',
        preuves: [
          'Le kiné invite, le préparateur accepte, <strong>le patient donne son accord</strong>. Sans les trois, rien ne s\'ouvre.',
          'Le préparateur voit la force, les mobilités, les zones, les programmes et la charge.',
          'Jamais les tests orthopédiques, jamais le diagnostic, jamais les notes cliniques.',
          'Chaque lecture du dossier est inscrite au journal, et le partage se révoque.'
        ] }
    ],
    suite: ['programme', 'compte-rendu', 'athlete']
  }
];

/* ── L'accueil : la trame ────────────────────────────────────────────────── */
const ACCUEIL = {
  h1: 'Tout le dossier du sportif,<br>du premier test au retour de terrain',
  chapo: 'Bilan clinique, compte-rendu, programme, charge d\'entraînement et espace athlète. Un seul outil, une seule saisie, pensé par un kinésithérapeute.',
  /* Le hero fait défiler quatre écrans réels, avec des boutons pour choisir. */
  diapos: [
    { img: 'img/app/suivi-corps', libelle: 'Le corps du patient',
      alt: 'Onglet Suivi : le corps 3D du patient avec le genou droit coloré, sa fiche de zone, la courbe de douleur et les tests liés avec leurs indices de symétrie' },
    { img: 'img/app/charge', libelle: 'La charge',
      alt: 'Bilan de charge : ACWR à 1,05 en zone favorable, charge sur sept jours, monotonie, et courbe des unités arbitraires sur huit semaines' },
    { img: 'img/app/builder', libelle: 'La séance',
      alt: 'Construction de séance : blocs, exercices, séries et charges cibles, avec le rappel de la dernière séance et la bibliothèque en vidéo' },
    { img: 'img/app/cr', libelle: 'Le compte-rendu',
      alt: 'Générateur de compte-rendu : le formulaire à gauche, la lettre au médecin à droite avec le tableau des tests de force' }
  ],
  chiffres: [
    { n: '11', l: 'Zones du corps suivies sur le mannequin 3D' },
    { n: '200+', l: 'Exercices filmés dans la bibliothèque' },
    { n: '7', l: 'Sections dans le compte-rendu généré' },
    { n: '0,8 à 1,3', l: 'La zone de charge visée, calculée en direct' }
  ],
  modes: {
    h2: 'Deux métiers, un seul dossier',
    chapo: 'Le kinésithérapeute soigne, le préparateur reconstruit. Chacun son mode, mais le même patient.',
    kine: { titre: 'Mode kiné', sous: 'Le dossier clinique en entier', items: [
      'Bilan par région, amplitudes actif et passif, tests de force en symétrie.',
      'Le corps 3D, ses zones datées, reliées à leurs tests.',
      'Le compte-rendu médecin, écrit pendant que vous remplissez.',
      'Questionnaires validés et batteries, remplis en séance ou à distance.'
    ] },
    prepa: { titre: 'Mode préparateur physique', sous: 'La performance, sans le médical', items: [
      'Séances, cycles et protocoles, avec plus de 200 exercices filmés.',
      'Charge d\'entraînement, ACWR, monotonie et contrainte.',
      'VMA, zones d\'allure, plan de course et sorties connectées.',
      'Ni tests orthopédiques, ni diagnostic : ce n\'est pas son métier.'
    ] }
  },
  securite: {
    h2: 'Des données de santé, traitées comme telles',
    chapo: 'Un dossier de patient n\'est pas un fichier client. Ce que nous faisons, et ce que nous ne faisons pas.',
    items: [
      { h3: 'Vos données restent en Europe', p: 'La base est hébergée à Francfort, en Allemagne. Les communications passent en HTTPS, chiffrées de bout en bout.' },
      { h3: 'Aucune intelligence artificielle', p: 'Aucun système d\'IA ne traite les dossiers de vos patients. Ni pour nous, ni pour un tiers, ni pour entraîner quoi que ce soit.' },
      { h3: 'Le cloisonnement est en base', p: 'Ce n\'est pas l\'écran qui filtre : la base refuse elle-même les lignes qui ne sont pas les vôtres. Un praticien ne voit que ses patients.' },
      { h3: 'Le lien du patient est révocable', p: 'Chaque patient a son jeton. Vous le sécurisez, le renouvelez ou le révoquez, patient par patient, sans toucher aux autres.' },
      { h3: 'Le partage est à trois clés', p: 'Un confrère n\'ouvre un dossier que si vous l\'invitez, qu\'il accepte, et que le patient donne son accord. Chaque lecture part au journal.' },
      /* La certification HDS n'est PAS acquise : ne rien en dire tant qu'elle
         ne l'est pas (allegation reglementee, art. L1111-8 CSP). Le jour où
         elle l'est, c'est ici qu'elle s'ajoute. */
      { h3: 'Aucun autre tiers', p: 'En dehors de l\'hébergeur de la base, personne ne reçoit les données de vos patients. Ni régie publicitaire, ni mesure d\'audience.' }
    ]
  },
  tarifs: {
    h2: 'Un mode, un tarif',
    chapo: 'Le dossier, lui, passe de l\'un à l\'autre avec l\'accord du patient.',
    offres: [
      { nom: 'Découverte', prix: '0 €', periode: '/ mois', sous: 'Pour essayer sans engagement',
        items: ['Accès complet, limité dans le temps', 'Bilans, programmes et compte-rendu', 'Aucune carte bancaire'],
        cta: { libelle: 'Commencer gratuitement', href: APP, style: 'ligne' } },
      { nom: 'Performance', prix: '29 €', periode: '/ mois', sous: 'Le mode préparateur physique',
        items: ['Athlètes illimités', 'Programmes, cycles et protocoles', 'Charge, ACWR et corps 3D', 'Espace athlète et sorties connectées'],
        cta: { libelle: 'Choisir Performance', href: 'https://buy.stripe.com/3cI8wOfAxcggc7L3laaEE02', style: 'ligne' } },
      { nom: 'Clinique', prix: '49 €', periode: '/ mois', sous: 'Le mode kiné, dossier clinique compris', phare: 'Kinésithérapeutes',
        items: ['Tout le mode préparateur', 'Bilans cliniques par région', 'Compte-rendu médecin', 'Questionnaires et batteries validées', 'Partage du dossier à un préparateur'],
        cta: { libelle: 'Choisir Clinique', href: 'https://buy.stripe.com/3cIfZg0FDeoo4Fjg7WaEE01', style: 'plein' } }
    ],
    note: 'Tarifs par place. Le cabinet bénéficie d\'un tarif dégressif à partir de deux places.'
  }
};

const TELS = [
  { img: 'img/app/athlete-programme', titre: 'Son programme', txt: 'Le cycle en cours, les critères de passage de son protocole et ses séances du mois.',
    alt: 'Espace athlète : cycle de réathlétisation en cours, critères du protocole dont un validé, et calendrier du mois' },
  { img: 'img/app/athlete-suivi', titre: 'Son corps', txt: 'Les zones que vous suivez, sa force et ses tests, en équilibre gauche et droite.',
    alt: 'Onglet Mon suivi côté athlète : son corps 3D avec le genou droit suivi, force à 86 % et tests fonctionnels à 90 %' },
  { img: 'img/app/athlete-seance', titre: 'Sa séance', txt: 'Chaque exercice avec sa vidéo, ses séries, sa charge cible et vos consignes.',
    alt: 'Séance vue par l\'athlète : split squat, 3 séries de 12 par côté à 10 kg, consigne du praticien et curseur de douleur' },
  { img: 'img/app/athlete-retour', titre: 'Son retour', txt: 'Douleur par exercice et effort perçu. Sa charge remonte seule dans votre suivi.',
    alt: 'Fin de séance côté athlète : durée réelle, effort perçu sur l\'échelle de Borg, et charge calculée en unités arbitraires' }
];

module.exports = { APP, THEMES, ACCUEIL, TELS };
