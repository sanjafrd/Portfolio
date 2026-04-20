# Portfolio de Sanjali Frédélisy

Portfolio personnel pour Sanjali Frédélisy, étudiante en BTS Communication.

## 🎨 Design

- **Esthétique** : Douce et lumineuse avec des tons rosés (rose poudré, beige clair, blanc cassé)
- **Style** : Rétro-chic assumé et lumineux
- **Typographies** : Poppins (corps de texte), Playfair Display (titres)
- **Animations** : Légères et fluides avec Motion (Framer Motion)
- **Formes** : Arrondies pour une ambiance douce

## 📁 Structure du projet

```
/
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Composant image avec fallback
│   ├── pages/
│   │   ├── HomePage.tsx              # Page d'accueil avec carrousel
│   │   ├── RealisationsPage.tsx     # Page des projets avec grille
│   │   ├── AboutPage.tsx            # Page à propos
│   │   ├── ContactPage.tsx          # Page contact
│   │   └── ProjectDetailPage.tsx    # Page détail projet
│   ├── ui/                           # Composants ShadCN
│   ├── Header.tsx                    # Header fixe avec navigation
│   └── Footer.tsx                    # Footer minimaliste
├── data/
│   └── projects.ts                   # Données centralisées des projets
├── constants/
│   └── navigation.ts                 # Constantes de navigation
├── utils/
│   └── helpers.ts                    # Fonctions utilitaires
├── styles/
│   └── globals.css                   # Styles globaux et thème
└── App.tsx                           # Point d'entrée de l'application
```

## 🚀 Fonctionnalités

### Navigation
- **Header fixe** avec menu déroulant pour filtrer les réalisations
- Navigation responsive (desktop + mobile)
- Scroll automatique vers le haut lors des changements de page

### Pages

#### 🏠 Accueil
- Carrousel hero avec 3 slides
- Transitions automatiques toutes les 5 secondes
- Navigation manuelle (flèches + indicateurs)

#### 📂 Réalisations
- **Grille personnalisée** pour les projets école (layout organique)
- **Masonry layout** pour les autres catégories
- Filtrage par catégorie :
  - Projets entreprise
  - Projets école
  - Projets personnels
- Titres visibles uniquement au survol
- 13 projets école avec 4 projets en vedette (grand format)

#### 👤 À propos
- Photo personnelle
- Présentation de Sanjali

#### 📧 Contact
- Formulaire de contact avec validation
- Coordonnées :
  - Téléphone : 0693 52 73 04
  - Email : sanja.fredelisy@gmail.com

#### 📄 Détail de projet
- 6 sections vides à remplir :
  1. Contexte
  2. Veille
  3. Stratégie
  4. Création
  5. Diffusion
  6. Analyse

## 🎯 Optimisations effectuées

### Architecture
- ✅ Données centralisées dans `/data/projects.ts`
- ✅ Constantes dans `/constants/navigation.ts`
- ✅ Fonctions utilitaires dans `/utils/helpers.ts`
- ✅ Suppression du code dupliqué

### Code Quality
- ✅ Imports inutilisés supprimés
- ✅ Configuration de grille avec objet au lieu de if/else
- ✅ Année du footer dynamique
- ✅ Fonction `scrollToTop` réutilisable
- ✅ Fonction `getFilterTitle` centralisée

### Accessibilité
- ✅ Attributs `aria-label` sur les éléments interactifs
- ✅ Support clavier (Enter/Space) sur les cartes de projets
- ✅ Labels sur les liens sociaux
- ✅ Validation HTML5 sur le formulaire

### Performance
- ✅ Utilisation de `useMemo` pour les données filtrées implicitement via React
- ✅ Animations optimisées avec Motion
- ✅ Images avec fallback

## 🛠️ Technologies

- **React** avec TypeScript
- **Tailwind CSS v4.0** pour le styling
- **Motion** (anciennement Framer Motion) pour les animations
- **react-responsive-masonry** pour la grille Masonry
- **Lucide React** pour les icônes
- **ShadCN UI** pour les composants

## 📝 Notes importantes

- Les images des projets école sont importées depuis Figma
- Le formulaire de contact est prêt pour intégration backend
- Toutes les pages sont responsive (mobile-first)
- Les images apparaissent sans filtre de couleur rose

## 🎨 Palette de couleurs

```css
--primary: #e8b4b8 (rose poudré)
--secondary: #f5ebe5 (beige clair)
--accent: #f3d5d7 (rose clair)
--background: #fdfbf8 (blanc cassé)
--foreground: #5a4a42 (marron doux)
```

## 📱 Contact développeur

Pour toute question ou modification, référez-vous aux fichiers de configuration dans `/constants/` et `/data/`.

---

✨ **Fait avec passion par l'équipe de développement** ✨
