# Site KléIA Solutions v4 · Exploration (nuit du 11 au 12/07/2026)

Refonte exploratoire construite à partir d'une copie de la V3 (la version en production, non modifiée), selon `BRIEF-FABLE.md`. Rien ne remplace la prod : Anne-Cécile compare V3 et V4 page par page et décide de ce qu'elle garde.

## Ce qui change par rapport à la V3

- **Palette inversée, validée par AC** : site clair (blanc cassé chaud `#f5f0ee`) rythmé par des bandes violet foncé (`#272030`, le violet historique). Accent unique : le rose du logo `#c79a99` (boutons pleins avec texte violet foncé, chiffres clés, guillemets), décliné en `#9e5857` (même teinte assombrie) uniquement pour les petits textes sur fond clair. Deux fonds seulement, pas de lavande ni de blanc pur.
- **Accueil** : hero compact à une seule voix typographique (CTA visibles sans scroller en mobile), témoignages courts remontés sous le hero, bande de chiffres à contraste corrigé, alternance de fonds contre l'effet monobloc.
- **Bugs corrigés** : menu mobile opaque + scroll bloqué (cause : `backdrop-filter` du header qui écrasait le menu en `position: fixed`), texte de bouton invisible sur bandes sombres (règle `.section-dark a` qui repeignait les boutons), badge de prix qui débordait en mobile.
- **Formations** : emojis remplacés par des pictogrammes SVG maison (horloge, personnes, niveau), "Le socle" explicité ("la formation pour démarrer"), bloc "Votre besoin n'est pas dans la liste ?" remonté juste après le catalogue.
- **Cas d'usage** : gains reformulés en "Avant : 2 h / Maintenant : 8 min" (plus de flèche ambiguë).
- **Témoignages** : liste ouverte où la citation domine (grands guillemets Caveat, signature, mission), plus de grille rigide.
- **À propos** : titre court, parcours découpé en 3 sous-parties respirantes.
- **Blog** : identité "journal" distincte : masthead clair avec double filet, article à la une en grand format, couvertures numérotées (N° 01 à 15) en dégradés violet/rose générés en CSS, sans images.
- **Partout** : liens d'action transformés en boutons pleins identifiables, plus aucun tiret cadratin ni emoji, quiz adapté au thème clair (styles internes recalés sur les nouvelles variables).
- **Intégrations intactes** : Formspree + webhooks n8n (contact et quiz), Google Analytics, Schema.org, mêmes URLs.

Le dossier `.playwright-mcp/` contient les captures d'écran des vérifications navigateur (supprimables).

## Passe de retouches texte (12/07, après validation visuelle d'AC)

- **Accueil** : titre de la section témoignages remplacé ("Ce que ça change, dans leurs mots" devient "Ce qu'ils en disent") ; les 3 extraits sont maintenant à hauteur égale, signatures alignées en bas (le décalage volontaire de la carte du milieu a été retiré à la demande d'AC).
- **Formations, "Le socle"** : hiérarchie inversée. Le nom de la formule est le grand titre, le descriptif "Initiation à l'IA générative pour les équipes" passe dessous en plus petit, et l'étiquette au-dessus devient "Pour démarrer" (c'est elle qui rend le nom compréhensible au premier regard, le nom est donc conservé).
- **Cas d'usage** : intro raccourcie à deux phrases courtes, la mention confidentialité/estimations passe en note discrète sous l'intro ; le texte du bandeau final avant le bouton devient "Réponse en 30 minutes, gratuitement et sans engagement."
- **Services** : la carte "Audit complet" (pavé de 4 phrases) restructurée en phrase courte + liste à coches + note tarif, sans changer les faits ni les montants.
- **Témoignages** : titre de page raccourci ("Ils ont travaillé avec KléIA Solutions, ils racontent").
- Aucun tarif, durée ou contenu de prestation modifié : uniquement formulation et structure.

---

# Historique V2/V3 ci-dessous (journal de la version précédente)

# Site KléIA Solutions v2 · Journal de session

Site vitrine créé de zéro, en HTML/CSS/JS pur, sans framework, à partir uniquement du prompt de mission et de recherches web menées pendant la session. Le dossier `PROJECTS/formatrice-ia/site-kleia/` (version précédente) n'a pas été consulté, conformément à la consigne, pour permettre une comparaison indépendante entre deux versions produites par deux assistants IA différents.

## Statut

Site complet et fonctionnel : 9 pages principales (dont la page Témoignages ajoutée après coup), 15 articles de blog, SEO technique (sitemap, robots.txt, Open Graph, JSON-LD), responsive vérifié sur mobile/tablette/desktop. Prêt à être relu par Anne-Cécile puis, si validé, à recevoir les vraies valeurs des placeholders avant mise en ligne.

## Mise à jour post-livraison : ajout des témoignages clients réels

Après la livraison initiale, une consigne complémentaire a demandé d'intégrer les vrais témoignages clients d'Anne-Cécile, avec **prénom réel et rôle** (pas d'anonymisation ici, à la différence des exemples de cas d'usage inventés ailleurs sur le site), reprenant tels quels le texte et les points forts du fichier `PROJECTS/formatrice-ia/strategie/communication-marketing/temoignages.md`.

**Décisions prises :**
- **4 témoignages retenus sur 5** : François (Responsable Grands Comptes), Badr (Responsable Bureau d'Étude), Léa (Chargée de communication) et Mélanie Cornec (MGC Solutions). Le témoignage du Collège Notre Dame des Portes a été volontairement écarté : il concerne une intervention scolaire (initiation IA pour collégiens), hors du positionnement PME/TPE du site, et aurait brouillé le message auprès de l'audience cible.
- **Nouvelle page dédiée `temoignages.html`**, plutôt qu'un simple ajout sur l'accueil seul : le volume de contenu (4 témoignages complets avec contexte de mission) justifiait une page à part entière, avec en plus une section d'analyse ("pourquoi ces témoignages parlent à des profils différents") qui remet chaque témoignage en perspective avec une audience du site (commercial/grands comptes, technique/produit, profils non technophiles).
- **Section teaser ajoutée sur l'accueil**, entre la citation manuscrite d'Anne-Cécile et la section Cas d'usage : 2 témoignages courts (Léa et Mélanie Cornec, choisis parce qu'ils parlent respectivement à l'audience équipes et à l'audience TPE/artisanat) suivis d'un lien vers la page complète. L'accueil ne pouvait pas accueillir les 4 témoignages en entier sans alourdir la page.
- **Lien "Témoignages" ajouté à la navigation et au footer de toutes les pages du site** (pages principales et 15 articles de blog), entre "Cas d'usage" et "Blog", pour rester cohérent avec la hiérarchie de contenu déjà en place.
- **Balisage JSON-LD `Review`** ajouté sur la page Témoignages (imbriqué dans le `ProfessionalService`), pour la citabilité GEO et les extraits enrichis Google.
- Citations reprises **mot pour mot** depuis le fichier source, sans reformulation ni raccourci qui en changerait le sens. Seule mise en forme : découpage des 3 citations distinctes de Mélanie Cornec en 3 paragraphes de blockquote plutôt qu'un bloc unique, pour la lisibilité.

**Fichiers créés ou modifiés pour cet ajout :**
- Créé : `temoignages.html`
- Modifié : `index.html` (nouvelle section teaser + lien nav/footer)
- Modifié : lien nav + footer ajouté sur les 7 autres pages principales (`services.html`, `formations.html`, `cas-usage.html`, `a-propos.html`, `contact.html`, `mentions-legales.html`, `confidentialite.html`) et les 16 pages du blog (`blog/index.html` + 15 articles)
- Modifié : `sitemap.xml` (entrée ajoutée pour `temoignages.html`)

## Recherche préalable et choix d'architecture

Avant de concevoir le site, j'ai mené trois familles de recherches web :

1. **Bonnes pratiques B2B / conversion.** Les sources consultées convergent sur quelques principes appliqués ici : un seul objectif de conversion par page (l'appel découverte), un CTA visible dès le premier écran ("above the fold"), une proposition de valeur compréhensible en quelques secondes, un site pensé mobile en premier (plus de la moitié du trafic B2B est mobile), et des pages dédiées par profil d'audience plutôt qu'un discours unique.
2. **Sites de formation/conseil qui convertissent bien.** Les meilleurs exemples analysés structurent une page de service autour d'une accroche concrète, de bénéfices clairs, de preuves (témoignages, chiffres), et de ruptures visuelles régulières pour éviter l'effet "mur de texte". J'ai repris ce principe dans la page Services (sections alternées, FAQ en accordéon, tableaux comparatifs).
3. **Intentions de recherche réelles (SEO + GEO).** Recherche des questions effectivement posées par des dirigeants et des salariés de PME sur Google et les IA conversationnelles au sujet de l'IA en entreprise (par où commencer, financement OPCO, RGPD, usages par métier). Cette recherche a directement déterminé le choix des 15 sujets d'articles, plutôt qu'une liste de thèmes inventée a priori.

### Décisions d'architecture qui en découlent

- **Deux audiences traitées explicitement, jamais fusionnées** : la page d'accueil consacre une section à deux cartes symétriques ("Vous dirigez l'entreprise" / "Vous faites partie d'une équipe"), et le blog est filtrable par catégorie (Dirigeants / Équipes / Réglementation / Méthode) plutôt que présenté comme une liste unique indifférenciée.
- **Un seul CTA primaire répété partout** : "Réserver mon appel découverte gratuit" apparaît dans le header (desktop), le hero, et un bandeau de conversion en bas de chaque page. Aucune page ne propose plusieurs CTA concurrents.
- **Page Services comme page pivot commerciale**, avec ancre directe vers l'audit, les formations, l'automatisation et une FAQ en `<details>` natif (accessible sans JavaScript, marquée en JSON-LD FAQPage pour le SEO/GEO).
- **Cas d'usage séparés de Services** : une page dédiée à part, organisée par métier (dirigeants, RH, marketing, service client, opérations, artisans/commerçants), pour donner un point d'entrée concret à un visiteur qui cherche "son" métier plutôt que "une offre".
- **Blog pensé comme un système de maillage interne dense** : chaque article renvoie vers 2 à 3 autres articles pertinents, vers les pages de service correspondantes, et vers l'appel découverte. Aucun article n'est une impasse éditoriale.

## Pages créées

| Page | Fichier | Rôle |
|---|---|---|
| Accueil | `index.html` | Proposition de valeur, deux audiences, chiffres clés sourcés, 3 prestations, méthode en 4 étapes, cas d'usage teaser |
| Services | `services.html` | Détail Audit / Formations / Automatisation + FAQ (schema FAQPage) |
| Formations | `formations.html` | Catalogue par audience (dirigeants, RH, marketing, service client/ops) + financement OPCO |
| Cas d'usage | `cas-usage.html` | Exemples concrets par métier (dirigeants, RH, marketing, service client, opérations, artisans) |
| Témoignages | `temoignages.html` | 4 témoignages clients réels (prénom + rôle), avec mise en perspective par audience |
| À propos | `a-propos.html` | Parcours, positionnement, façon de travailler |
| Contact | `contact.html` | CTA de RDV en premier, formulaire complet en second choix |
| Mentions légales | `mentions-legales.html` | Éditeur, hébergement, propriété intellectuelle |
| Confidentialité | `confidentialite.html` | RGPD : données collectées, finalités, durée, droits |
| Blog (index) | `blog/index.html` | Liste filtrable des 15 articles |

## Les 15 articles de blog

Classés par audience principale, avec mots-clés visés (SEO) et angle GEO (réponse directe citable) :

| # | Titre | Audience | Mots-clés visés |
|---|---|---|---|
| 1 | IA générative en PME : par où commencer en 2026 | Dirigeants | "IA générative PME par où commencer", "IA entreprise 2026" |
| 2 | ChatGPT, Claude ou Gemini : lequel choisir pour son entreprise | Méthode | "ChatGPT Claude Gemini différence", "quel outil IA entreprise" |
| 3 | Financer une formation IA avec son OPCO : le guide complet | Dirigeants | "financement OPCO formation IA", "formation IA prise en charge" |
| 4 | RGPD et IA générative : ce qu'une PME a le droit de faire | Réglementation | "RGPD ChatGPT entreprise", "IA générative données personnelles" |
| 5 | AI Act : ce que la loi européenne impose aux PME dès 2026 | Réglementation | "AI Act PME obligations", "règlement IA entreprise 2026" |
| 6 | ChatGPT pour les RH : 15 usages concrets et sans risque | Équipes RH | "ChatGPT RH usages", "IA recrutement RGPD" |
| 7 | IA et marketing en PME : générer du contenu sans perdre sa voix | Équipes Marketing | "IA marketing contenu PME", "IA rédaction voix de marque" |
| 8 | IA et service client : gagner du temps sans déshumaniser | Équipes Service client | "IA service client PME", "chatbot relation client" |
| 9 | Audit IA gratuit ou payant : lequel choisir pour votre entreprise | Dirigeants | "audit IA entreprise", "audit IA gratuit PME" |
| 10 | Automatiser ses tâches répétitives avec n8n, sans coder | Méthode | "automatisation n8n sans coder", "automatiser tâches PME" |
| 11 | Bien écrire ses prompts : la méthode pour des réponses utiles | Méthode | "comment écrire un prompt", "méthode prompt IA" |
| 12 | IA et productivité : ce que disent vraiment les études | Dirigeants | "productivité IA générative chiffres", "gain de temps IA étude" |
| 13 | Les erreurs qui font échouer un projet IA en PME | Dirigeants | "échec projet IA entreprise", "erreurs IA PME" |
| 14 | Former ses équipes à l'IA : pourquoi et comment s'y prendre | Dirigeants / RH | "former équipe IA entreprise", "formation IA salariés" |
| 15 | IA pour les artisans et commerçants : cas d'usage concrets | Dirigeants TPE | "IA artisan commerçant", "IA petite entreprise usage" |

Chaque article dépasse largement une simple fiche courte : structure en H2/H3, un encart "L'essentiel en bref" en tête (optimisé GEO : réponse directe et listée dès le début), plusieurs sections de fond avec exemples et chiffres sourcés, un tableau comparatif ou récapitulatif, une FAQ de 3 questions en fin d'article, un encart CTA vers l'audit ou les formations, un bloc Sources avec liens sortants vers les organismes cités, et un bloc "À lire aussi" pointant vers 3 autres contenus du site.

### Chiffres sourcés utilisés dans les articles

Toutes les statistiques citées proviennent de recherches web menées pendant la session (pas de mémoire non vérifiée) :

- Bpifrance Le Lab (2025) : adoption de l'IA générative en TPE-PME, usages les plus courants, perception stratégique des dirigeants.
- Baromètre France Num 2025 (Direction Générale des Entreprises) : taux d'adoption par secteur, automatisation des tâches.
- INSEE, enquête TIC 2024 : usage de l'IA par taille d'entreprise, comparaison France/UE.
- BCG (2025) : gains de temps déclarés par les utilisateurs réguliers d'IA générative.
- Étude Stanford et étude Harvard/MIT/Wharton (BCG) : gains de productivité mesurés.
- CNIL : recommandations sur l'IA générative et le RGPD en entreprise.
- Règlement (UE) 2024/1689 (AI Act) : obligations réglementaires directement citées avec leur article.

## Charte graphique appliquée

- Couleurs : fond `#272030`, fond clair `#312842`, carte `#2e2540`, accent unique `#c79a99`, texte `#d4ccd8` / secondaire `#9b90a5`, clairs `#e3ebf2` et `#f5f0ee`.
- Typographies Google Fonts : **DM Sans** (texte et titres), **Caveat** (surtitres et citation manuscrite en accueil).
- Rayons : 12px (boutons, éléments), 16px (cartes).
- Logo en texte stylé "Klé**IA** Solutions", pas d'image imposée. Favicon SVG simple aux couleurs de la charte. Image Open Graph générée par script Python (ReportLab non utilisé ici, génération directe via Pillow) pour un partage cohérent sur les réseaux.

## Décisions techniques notables

- **HTML/CSS/JS pur**, un seul fichier `styles.css` et un seul `main.js` partagés par toutes les pages (menu mobile, ombre du header au scroll, filtres du blog, année dynamique du footer).
- **FAQ en `<details>`/`<summary>` natifs** plutôt qu'en JavaScript : accessible sans JS, économe, et facilement enrichie en JSON-LD `FAQPage`.
- **Filtres du blog en JavaScript simple** (affichage/masquage par attribut `data-cat`), sans dépendance externe.
- **Formulaire de contact** pointant vers `FORMSPREE_ENDPOINT` (placeholder), avec case RGPD obligatoire et champ de qualification "dirigeant / équipe" pour pré-segmenter les demandes entrantes.
- **JSON-LD** : `ProfessionalService` sur l'accueil, `FAQPage` sur Services, `Article` sur chaque billet de blog, pour favoriser la fois le SEO classique (rich snippets) et le GEO (données structurées facilement exploitables par les moteurs génératifs).
- **Placeholders non résolus, comme demandé** : `FORMSPREE_ENDPOINT`, `https://calendar.google.com/appointments/schedules/AcZssZ1VF3UwXdW50yklFzX-KwfVFk9QIGPfNQOyuKqhS4KYLqiBUUUM3x28VeIaigxhsCpvAuYuO4ej`, `LIEN_LINKEDIN`, `LIEN_SUBSTACK`. Adresse `contact@kleia-solutions.fr` déjà en place partout.
- **Mentions légales et confidentialité** en `noindex` (pages utilitaires, pas de valeur SEO), mais bien reliées depuis le footer de chaque page.

## Vérifications effectuées avant de conclure

- Recherche systématique d'erreurs de balises HTML (une balise `<meta description>` mal fermée a été détectée et corrigée sur l'article marketing).
- Vérification que toutes les pages chargent bien `styles.css`, `main.js` et le favicon.
- Vérification que tous les liens internes cités dans le blog et les pages pointent vers des fichiers réellement créés.
- **Test responsive réel avec Playwright** (Chromium) sur 3 largeurs (390px mobile, 768px tablette, 1440px desktop) et 5 pages représentatives : mesure programmatique de `document.documentElement.scrollWidth - clientWidth`, résultat `0px` de débordement horizontal partout. Un premier test avec Chrome en mode `--headless` legacy avait laissé penser à un débordement de texte sur mobile ; l'enquête a montré qu'il s'agissait d'un bug de cet outil de capture (qui n'applique pas correctement le viewport demandé, `innerWidth` restant bloqué à 482px quelle que soit la taille demandée), pas d'un problème du site. Le test Playwright, qui contrôle le vrai viewport du navigateur, a confirmé l'absence de tout débordement.
- Test des interactions JS clés par capture d'écran : ouverture du menu mobile, ouverture d'un accordéon FAQ, filtrage du blog par catégorie. Les trois fonctionnent comme attendu.

## Ce qui pourrait encore être amélioré

- **Images réelles** : le site n'utilise actuellement aucune photo ni illustration (hors favicon et image Open Graph), pour rester livrable rapidement sans dépendre d'une banque d'images. Des visuels (portrait d'Anne-Cécile en page À propos, captures d'écran d'outils en formations) renforceraient la confiance.
- **Témoignages clients** : volontairement absents (consigne stricte de ne jamais inventer de témoignage). Dès qu'un vrai témoignage existe, il devrait être intégré sur l'accueil et la page Services, qui en manquent pour la preuve sociale.
- **Page dédiée par formation** : le catalogue actuel présente chaque formation comme une carte sur une seule page. Si le volume de contenu augmente, une page dédiée par formation (avec son propre programme détaillé) améliorerait le SEO longue traîne.
- **Suivi analytique** : aucun outil de mesure n'est branché (volontairement, en l'absence de consigne sur le sujet). À ajouter avant mise en ligne réelle si Anne-Cécile veut suivre la performance du site.
- **Traduction ou volet anglais** : non traité, la cible étant exclusivement francophone pour l'instant.
- **Vérification orthographique fine** : le contenu a été rédigé avec soin mais n'a pas été passé dans un correcteur automatisé dédié ; une relecture humaine reste recommandée avant publication, notamment sur les articles les plus longs.

## Comparaison avec l'autre version (site-kleia/)

Cette session n'a ni lu ni consulté le dossier `PROJECTS/formatrice-ia/site-kleia/` ni aucun document qui en parle, conformément à la consigne, pour permettre une comparaison indépendante entre deux versions produites par deux assistants différents à partir du même brief.
