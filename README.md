# Site web KléIA Solutions

Site commercial de l'activité de formation et conseil IA d'Anne-Cécile Le Dain, sous la marque KléIA Solutions. HTML/CSS/JS pur, sans framework, hébergeable sur GitHub Pages.

**Domaine cible :** kleia-solutions.fr (à acheter chez Infomaniak)
**Construit la nuit du 13/06/2026** (session autonome Fable). Voir le digest de vérification : `01_Journal-projets/formatrice-ia/2026-06-14_digest-nuit-site-kleia.md`.

## Pages

| Fichier | Page |
|---|---|
| `index.html` | Accueil (hero, preuve, profils, offres, témoignages, études de cas, blog, CTA) |
| `services.html` | Services détaillés + FAQ |
| `formations.html` | Catalogue de 6 formations intra-entreprise + tarifs |
| `formations-en-ligne.html` | Catalogue des 3 mini-formations en ligne + bundle (liens vers tunnels Système.io) — nuit 14/06 |
| `quiz-maturite-ia.html` | Lead magnet : quiz « Score de maturité IA », 10 questions, capture email, reco personnalisée — nuit 14/06 |
| `cas-usage.html` | 18 cas d'usage filtrables par métier |
| `a-propos.html` | Parcours et positionnement d'Anne-Cécile |
| `contact.html` | Formulaire Formspree + lien RDV |
| `mentions-legales.html` | Mentions légales |
| `confidentialite.html` | Politique de confidentialité (RGPD) |
| `blog/index.html` | Index du blog |
| `blog/*.html` | 8 articles SEO/GEO |
| `style.css` | Charte ACLD + composants |
| `script.js` | Nav, FAQ, filtres cas d'usage, animations |
| `sitemap.xml`, `robots.txt`, `CNAME` | SEO technique |
| `images/` | Logos SVG + favicon |
| `2026-06-26_retours-lea-site-kleia.md` | Retours visio Léa (communication) — 4 améliorations UX/contenu à implémenter |

## Placeholders à remplacer avant mise en ligne

| Placeholder | Où | Remplacer par |
|---|---|---|
| `FORMSPREE_ENDPOINT` | `contact.html` | URL du formulaire Formspree |
| `LIEN_RDV` | `contact.html` | Lien de prise de RDV (Google Agenda ou kSuite Infomaniak, à trancher) |
| `LIEN_LINKEDIN` | footer de toutes les pages | URL du profil LinkedIn |
| `LIEN_SUBSTACK` | footer + blog | URL de la newsletter Itérations |
| `contact@kleia-solutions.fr` | partout | Adresse mail offerte avec le domaine chez Infomaniak (déjà correcte) |
| `LIEN_SYSTEMEIO_*` | `formations-en-ligne.html` | URLs des tunnels Système.io (débutants, PME, dirigeants, bundle) |
| intégration capture | `quiz-maturite-ia.html` | Brancher le formulaire (fonction `capture-form`) sur Système.io ou Formspree |

## Mise en ligne

Voir le runbook pas à pas : `PROJECTS/formatrice-ia/strategie/2026-06-13_runbook-mise-en-ligne.md`.

## Décisions techniques

- Charte du portfolio réutilisée (fond #272030, rose #c79a99, DM Sans + Caveat).
- Logo retenu par défaut : proposition 1 (logo-texte), codé en HTML/CSS dans la nav (facile à permuter). Favicon : monogramme « K ».
- Un seul objectif de conversion : l'appel découverte gratuit.
- 8 articles de blog écrits (sur 15 prévus au plan) ; les 5 adaptations Substack et 2 articles métier restants nécessitent le texte source et sont listés dans le digest.
- Témoignages et études de cas (accueil) : passés de grilles statiques à des carrousels infinis (2 par page desktop, 1 par page mobile), avec clonage début/fin de track pour boucler sans saut visible. Décision du 29/06 suite au retour de Léa (gain de place sur la page d'accueil).
