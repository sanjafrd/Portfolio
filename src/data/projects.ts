import projetAngelePardon from 'figma:asset/a29a96c45105babd89f20f0bf28ed8f0fa0190ac.png';
import projetPantoufle from 'figma:asset/929f65062e7ab91e7218ae36e9c496920d253e8d.png';
import projetMiels from 'figma:asset/8bfe133a2c37018725e7cd23f2b840b828cc3833.png';
import projetMauvaisEleves from 'figma:asset/41bbfd78d0dd79068b20fcf098006308112bb19e.png';
import projetGlace from 'figma:asset/b0357c2980efdba214595eefbbe1bbbe0190c11e.png';
import projetLiloStitch from 'figma:asset/7d966ccca7dc7918c51bc44dd3ecafe824ba394b.png';
import projetClementine from 'figma:asset/e0eeae9bca851e9f2b7768e46eef37f499042d38.png';
import projetAristochats from 'figma:asset/c0e5f0adf6b1f97c4a9525f298b333bd83fdf20b.png';
import projetNalu from 'figma:asset/7ba25114a3db8fa59fa56b43d7aaca1b903660f7.png';
import projetAirAustral from 'figma:asset/d0773edf83316b2a4f921bb9cb223ce5d90adf3f.png';
import projetEDN from 'figma:asset/2e4f71040f207309b51a964a0b6eba1b38fd8ad1.png';
import projetBenetton from 'figma:asset/fac4d339808187a44b0854bc1e337006578e6f7d.png';
import projetStoryboard from 'figma:asset/42a41e26b19b345331a7f6bd58b42845d1016600.png';

// Current Entreprise Images
const projetSecurite = 'https://i.imgur.com/TUczLRR.png';
const projetBientraitance = 'https://i.imgur.com/YRQ6XTg.png';
const projetBrochure = 'https://i.imgur.com/7sNmYQ5.png';
const projetHygiene = 'https://i.imgur.com/OWrXwg1.png';
const projetTaxe = 'https://i.imgur.com/ExYop9X.png';
const projetVaccination = 'https://i.imgur.com/jkd321d.png';

// New Entreprise Images (Small)
const projetOralite = 'https://i.imgur.com/xQBDnMl.png';
const projetReseaux = 'https://i.imgur.com/XNvOBcK.png';

// New Header Image (Large)
const projetCEM = 'https://i.imgur.com/SodFSwI.png';

// New Added Images (Batch 4)
const projetKakemono = 'https://i.imgur.com/YHVxxwp.png';
const projetManuel = 'https://i.imgur.com/Wyl2PxP.png';

export interface ProjectDetails {
  context?: string;
  target?: string;
  watch?: string;
  strategy?: string;
  creation?: string;
  diffusion?: string;
  analysis?: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  type: 'entreprise' | 'ecole';
  image: string;
  videoUrl?: string; // URL Streamable for iframe (single video)
  videoUrls?: string[]; // Multiple video URLs for carousel
  carouselImages?: string[]; // Array of image URLs for carousel display
  detailImages?: string[]; // Array of images for detail page switch effect
  detailImagesTop?: string[]; // Array of images for top ImageSwitcher (split layout)
  detailImagesBottom?: string[]; // Array of images for bottom ImageSwitcher (split layout)
  detailRightImage?: string; // Single image to display on the right side of detail page (instead of video)
  description?: string;
  size: 'small' | 'medium' | 'large';
  details?: ProjectDetails;
}

export const projects: Project[] = [
  // Projets Entreprise (Headline)
  {
    id: 29,
    title: '20 Ans CEM',
    category: 'Communication événementielle',
    type: 'entreprise',
    image: projetCEM,
    // Placeholder Streamable URL - User to replace
    videoUrl: 'https://streamable.com/e/your_video_id?autoplay=1&muted=1&loop=1',
    description: "J'ai participé à l'organisation et à la communication autour des 20 ans du CEM. Pour cet événement, j'ai conçu plusieurs supports de communication : affiche, invitations, tickets d'entrée, livret de spectacle, publications pour les réseaux sociaux ainsi qu'un diaporama de présentation du projet et un compte rendu final intégrant les retours des participants.",
    size: 'large',
    details: {
      context: `Dans le cadre de mon alternance au sein du CEM (Centre d'Éducation Motrice), l'établissement souhaite célébrer ses 20 ans d'existence à travers l'organisation d'un spectacle événementiel réunissant les bénéficiaires, les familles, les professionnels et les partenaires de la structure.

Cet événement avait pour objectif de mettre en valeur le travail réalisé par l'établissement et de renforcer les liens avec les différents publics qui accompagnent le CEM au quotidien. Dans ce contexte, j'ai participé à la conception et à la mise en œuvre de la communication autour de l'événement. Mon travail a consisté à créer différents supports permettant d'informer, d'inviter et d'accompagner les publics avant, pendant et après le spectacle.

J'ai notamment réalisé :
- un diaporama de présentation du projet,
- une affiche annonçant le spectacle,
- des invitations destinées aux familles,
- des tickets d'entrée,
- un livret de spectacle présentant le programme,
- des publications pour les réseaux sociaux,
- ainsi qu'un compte rendu final intégrant les retours des familles, des intervenants et des bénéficiaires.`,
      
      strategy: `OBJECTIFS DE COMMUNICATION
• Célébrer les 20 ans d’existence du CEM
• Valoriser l’image institutionnelle de l’établissement
• Renforcer le lien avec les familles et partenaires
• Informer et mobiliser les différents publics autour de l’événement
• Assurer une communication cohérente avant, pendant et après le spectacle

CONTRAINTES
• Contraintes temporelles : respect d’un calendrier strict lié à la date de l’événement
• Contraintes budgétaires : budget limité nécessitant une optimisation des supports
• Contraintes techniques : formats spécifiques pour l’impression et le digital
• Contraintes juridiques et déontologiques : respect du droit à l’image des bénéficiaires
• Contraintes liées aux publics : diversité des cibles (âge, compréhension, accessibilité)`,

      target: `• Familles des bénéficiaires
• Bénéficiaires du CEM
• Professionnels et équipes internes
• Partenaires institutionnels et associatifs
• Communauté en ligne via les réseaux sociaux du CEM`,

      creation: `CHOIX CRÉATIFS
• Ton institutionnel, bienveillant et valorisant
• Univers graphique festif tout en restant sobre et cohérent avec l’identité du CEM
• Messages adaptés à chaque support et à chaque public

SUPPORTS RÉALISÉS
• Affiche de l’événement
• Invitations destinées aux familles
• Tickets d’entrée
• Livret du spectacle
• Publications pour les réseaux sociaux
• Diaporama de présentation du projet

OUTILS UTILISÉS
• Outils de PAO pour la création graphique
• Outils bureautiques pour la rédaction et la mise en forme
• Outils collaboratifs pour les échanges et validations
• Réseaux sociaux pour la diffusion digitale`,

      analysis: `RÉSULTATS – INDICATEURS
• Respect des délais de production et de diffusion des supports
• Respect du budget alloué à la communication
• Bonne fréquentation du spectacle
• Retours qualitatifs positifs des familles, bénéficiaires et professionnels
• Image du CEM perçue comme dynamique, engagée et valorisante
• Supports jugés clairs, cohérents et adaptés aux publics`
    }
  },

  // Projets Entreprise (Batch 1)
  {
    id: 20,
    title: 'Semaine Sécurité Patient',
    subtitle: 'Communication événementielle & création de supports',
    category: 'Communication Santé',
    type: 'entreprise',
    image: projetSecurite,
    description: "Dans le cadre de la Semaine de la Sécurité des Patients, organisée par l'Hôpital d'Enfants de Saint-Denis, j'ai créé plusieurs supports de communication pour informer les professionnels et promouvoir l'événement. J'ai réalisé une affiche, une campagne d'e-mailing ainsi qu'une plateforme d'inscription via HelloAsso.",
    size: 'medium',
    details: {
      context: "La Semaine de la Sécurité des Patients est un événement national visant à sensibiliser les professionnels et les publics aux bonnes pratiques en matière de sécurité des soins. Dans ce cadre, l'Hôpital d'Enfants de Saint-Denis a organisé une semaine dédiée autour du thème : « Des soins srs pour chaque nouveau-né et chaque enfant », du 15 au 19 septembre 2025.\n\nL'événement proposait plusieurs activités, notamment des immersions en réalité virtuelle sur l'identitovigilance, des ateliers pratiques, des stands éducatifs ainsi que des animations autour de la nutrition et de la sécurité des soins.\n\nPour accompagner cet événement, j'ai participé à la communication en réalisant plusieurs supports permettant d'informer les professionnels et d'organiser leur participation.\n\nJ'ai notamment réalisé :\n• une affiche destinée à être diffusée dans les établissements,\n• une campagne d'e-mailing pour prévenir les professionnels concernés,\n• une plateforme d'inscription en ligne via HelloAsso pour faciliter la gestion des participants.\n\nCe projet s'inscrit dans une démarche de communication institutionnelle et organisationnelle, visant à assurer la visibilité de l'événement et à faciliter la participation des publics.",
    }
  },
  {
    id: 21,
    title: 'Bientraitance',
    subtitle: 'Création d\'affiche institutionnelle',
    category: 'Campagne de Sensibilisation',
    type: 'entreprise',
    image: projetBientraitance,
    description: 'Dans le cadre d\'un projet mené par le Centre d\'Éducation Motrice (CEM) de l\'Association Saint François d\'Assise, j\'ai créé une affiche sur le thème de la bientraitance destinée à être affichée au sein de l\'établissement et dans d\'autres structures de l\'association. J\'ai travaillé avec les équipes pour concevoir une affiche adaptée, respectant la charte graphique et accessible à un large public grâce à une version en créole réunionnais.',
    size: 'medium',
    carouselImages: [
      projetBientraitance,
      'https://i.imgur.com/l0GVzVD.png',
      'https://i.imgur.com/3Hr9jZQ.png',
    ],
    details: {
      context: 'Dans le cadre d\'un projet porté par le Centre d\'Éducation Motrice (CEM), l\'objectif était de créer une affiche de sensibilisation sur le thème de la bientraitance, destinée à être diffusée au sein de l\'établissement mais aussi dans d\'autres structures de l\'association.\n\nPour mener ce projet, j\'ai travaillé en lien avec les professionnels du CEM afin de comprendre leurs attentes et définir les messages essentiels à transmettre. J\'ai ensuite recherché des visuels adaptés aux critères définis par les équipes, tout en respectant la charte graphique de l\'association afin de garantir une cohérence visuelle avec les autres supports existants.\n\nUne attention particulière a été portée à l\'accessibilité du message. Dans cette optique, j\'ai également réalisé une version de l\'affiche en créole réunionnais, afin de permettre à un plus grand nombre de personnes de comprendre le message et de favoriser une meilleure sensibilisation.\n\nCe projet avait pour objectif de promouvoir les valeurs de bientraitance au sein des établissements et de rappeler l\'importance des bonnes pratiques auprès des professionnels et des usagers.',
    }
  },
  {
    id: 22,
    title: 'Brochure Établissement',
    subtitle: 'Création de supports de communication institutionnelle',
    category: 'Édition & Communication',
    type: 'entreprise',
    image: projetBrochure,
    description: "J'ai réalisé les brochures pour tous les établissements et sous-établissements de l'Association Saint François d'Assise.\nPour ce projet, j'ai respecté la charte graphique existante et travaillé avec les équipes des établissements pour créer des supports clairs et adaptés. J'ai aussi réalisé des brochures en 3 volets pour certains services afin de mieux présenter leurs spécificités.",
    size: 'medium',
    details: {
      context: "Dans une volonté d'harmoniser sa communication, l'ASFA souhaite disposer de supports de présentation cohérents pour l'ensemble de ses établissements et services. Dans ce cadre, j'ai réalisé les brochures institutionnelles de tous les établissements ainsi que de leurs sous-établissements, en veillant à respecter la charte graphique existante tout en proposant une mise en page claire et adaptée aux différents contenus.\n\nCe travail a été mené en collaboration avec les équipes de chaque structure afin d'identifier les informations essentielles à valoriser et de construire des supports pertinents et accessibles.\n\nLes établissements concernés sont :\n• L'Hôpital d'Enfants\n• Les deux EHPAD\n• L'Institut médico-éducatif (IME)\n• Le Centre d'action médico-sociale précoce (CAMSP)\n• Le Centre d'éducation motrice (CEM)\n• Les services à domicile\n• La Maison d'Accueil Spécialisée (MAS)\n• Le pôle formation\n\nCertains établissements disposent de sous-structures spécifiques, que j'ai également représentées à travers des brochures 3 volets, permettant de détailler leurs missions et leurs particularités.\n\nL'objectif global était de garantir une cohérence visuelle et éditoriale tout en valorisant les spécificités de chaque entité.",
    }
  },
  // Projets Entreprise (Batch 2)
  {
    id: 23,
    title: 'Campagne Hygiène des Mains',
    subtitle: 'Création d\'une campagne interne de sensibilisation',
    category: 'Communication Santé',
    type: 'entreprise',
    image: projetHygiene,
    description: 'Dans le cadre d\'une campagne interne sur l\'hygiène des mains, j\'ai créé une affiche et une campagne d\'e-mailing destinées aux professionnels de l\'Association Saint François d\'Assise. L\'objectif était de rappeler les gestes d\'hygiène obligatoires et d\'encourager l\'adoption des bonnes pratiques au quotidien.',
    size: 'large',
    details: {
      context: `La campagne « Mobilisons-nous pour adopter les bons gestes et renforcer nos bonnes pratiques » avait pour objectif de sensibiliser les professionnels aux règles essentielles d'hygiène des mains, un élément clé dans la prévention des infections au sein des établissements de santé.

Dans le cadre de ce projet, j'ai participé à la création des supports de communication destinés à rappeler l'importance des gestes d'hygiène obligatoires auprès des professionnels de l'association.

J'ai réalisé une affiche, destinée à être diffusée dans les différents établissements, afin de rappeler visuellement les bonnes pratiques d'hygiène. Cette affiche devait être claire, visible et compréhensible rapidement par les professionnels.

En complément, j'ai également conçu une campagne d'e-mailing envoyée à l'ensemble des professionnels de l'association afin de diffuser l'information de manière rapide et directe.

Ce projet s'inscrivait dans une démarche de sensibilisation interne, visant à renforcer les bonnes pratiques et à rappeler l'importance de l'hygiène dans le quotidien professionnel.`,
    }
  },
  {
    id: 24,
    title: 'Campagne Taxe Apprentissage',
    category: 'Communication Institutionnelle',
    type: 'entreprise',
    image: projetTaxe,
    description: 'Dans le cadre d\'une campagne sur la taxe d\'apprentissage, j\'ai créé une affiche diffusée sur LinkedIn ainsi qu\'une campagne d\'e-mailing destinée aux entreprises. L\'objectif était d\'inciter les entreprises à reverser leur taxe d\'apprentissage aux établissements de l\'Association Saint François d\'Assise afin de soutenir la formation des professionnels de santé et l\'inclusion des jeunes en situation de handicap.',
    size: 'medium',
    details: {
      context: `Chaque année, les entreprises ont la possibilité de choisir l'établissement bénéficiaire de leur taxe d'apprentissage via la plateforme SOLTéA. Dans ce cadre, l'association souhaitait encourager les entreprises à reverser leur taxe à ses établissements afin de soutenir la formation des futurs professionnels et favoriser l'inclusion des jeunes en situation de handicap.

Pour répondre à cet objectif, une campagne de communication ciblée a été mise en place à destination des entreprises concernées.

Dans le cadre de ce projet, j'ai conçu une affiche promotionnelle, destinée à être diffusée sur les réseaux sociaux, principalement sur LinkedIn, afin de toucher un public professionnel adapté.

En complément, j'ai réalisé une campagne d'e-mailing envoyée aux entreprises ciblées, à partir d'une base de contacts transmise en amont. L'objectif était de transmettre un message clair et convaincant, rappelant l'importance du choix d'affectation de la taxe d'apprentissage et ses impacts concrets sur la formation et l'inclusion.

Ce projet s'inscrivait dans une démarche de communication externe et de collecte de ressources, visant à mobiliser les entreprises autour d'un enjeu de formation et d'inclusion sociale.`,
    }
  },
  {
    id: 25,
    title: 'Campagne Vaccination Grippe',
    subtitle: 'campagne interne de sensibilisation',
    category: 'Communication Santé',
    type: 'entreprise',
    image: projetVaccination,
    description: "Dans le cadre d'une campagne interne sur la vaccination, j'ai créé une affiche, réalisé une campagne d'e-mailing et conçu un quiz ludique envoyé par mail aux professionnels de l'Association Saint François d'Assise. L'objectif était d'informer sur l'importance de la vaccination et de rappeler les bonnes pratiques de manière accessible et interactive.",
    size: 'medium',
    details: {
      context: `Dans le cadre d'une campagne interne de sensibilisation à la vaccination, l'objectif était de rappeler aux professionnels l'importance de la vaccination et de diffuser des informations fiables sur ce sujet.

Pour accompagner cette campagne, j'ai conçu plusieurs supports de communication destinés aux professionnels de l'association. J'ai réalisé une affiche, diffusée dans les établissements, afin de transmettre un message visuel clair et visible par tous.

En complément, j'ai mis en place une campagne d'e-mailing interne, permettant de transmettre les informations directement aux professionnels.

Afin de rendre la communication plus interactive et engageante, j'ai également créé un quiz envoyé par mail, permettant de transmettre des informations sur la vaccination de manière ludique tout en testant les connaissances des participants.

Ce projet s'inscrivait dans une démarche de sensibilisation interne, visant à encourager les professionnels à s'informer et à adopter les bonnes pratiques en matière de vaccination.`,
    }
  },
  // Projets Entreprise (Batch 3 - Small)
  {
    id: 26,
    title: 'Campagne Oralité',
    subtitle: 'Création d\'une campagne de sensibilisation',
    category: 'Communication Santé',
    type: 'entreprise',
    image: projetOralite,
    description: 'Dans le cadre d\'une campagne de prévention sur l\'oralité, j\'ai créé une affiche et une brochure destinées à être diffusées dans différents établissements de santé. L\'objectif était de sensibiliser les familles aux signes de troubles alimentaires chez les jeunes enfants et de leur donner des repères simples pour mieux comprendre ces difficultés.',
    size: 'small',
    details: {
      context: `Le projet portait sur la création d'une campagne de prévention autour de l'oralité, un sujet important dans le développement des jeunes enfants. Cette campagne avait pour objectif de sensibiliser les familles aux signes pouvant indiquer des troubles alimentaires précoces, tout en leur apportant des clés pour mieux comprendre ces situations et adopter les bonnes pratiques.

Dans le cadre de ce projet, j'ai conçu deux supports principaux : une affiche et une brochure, destinées à être diffusées dans différents établissements de santé. L'affiche avait pour rôle d'attirer l'attention et de transmettre un message rapide et visuel, tandis que la brochure permettait d'apporter des informations plus détaillées et des conseils pratiques.

Une attention particulière a été portée à la lisibilité des informations, à l'organisation des contenus et à l'adaptation du message à un public familial. Les supports ont été conçus pour être compréhensibles par un large public, notamment les parents de jeunes enfants.

Ce projet s'inscrivait dans une démarche de prévention et d'accompagnement, visant à favoriser une détection précoce des troubles alimentaires et à encourager les familles à adopter des pratiques adaptées.`,
    }
  },
  {
    id: 27,
    title: 'Poste pour les réseaux',
    subtitle: 'Création et gestion de contenus digitaux',
    category: 'Social Media',
    type: 'entreprise',
    image: projetReseaux,
    description: 'J\'ai réalisé des publications pour les pages Facebook et LinkedIn de l\'Association Saint François d\'Assise. J\'ai créé 3 posts par semaine, programmés le lundi, mercredi et vendredi, afin de partager les activités de l\'association et informer sur le secteur médico-social. J\'ai également assuré le suivi de l\'activité sur les différentes plateformes.',
    size: 'small',
    details: {
      context: `Dans le cadre de la communication digitale de l'ASFA, l'objectif était de développer la présence de l'association sur les réseaux sociaux et de maintenir une communication régulière auprès des publics.

Pour cela, j'ai créé des publications destinées aux pages Facebook et LinkedIn de l'association. Ces publications avaient pour rôle de partager les activités des établissements, de valoriser les événements organisés et d'informer sur les thématiques liées au secteur médico-social.

J'ai mis en place une fréquence régulière de publication, avec trois posts par semaine, programmés le lundi, mercredi et vendredi. Cette organisation permettait d'assurer une communication continue et de maintenir l'intérêt des abonnés.

En complément, j'ai réalisé un suivi de l'activité sur les différentes plateformes, afin d'observer les interactions et l'engagement générés par les publications.

Ce projet avait pour objectif de créer un lien entre l'association et ses publics, tout en favorisant la diffusion d'informations utiles et la valorisation des actions menées par les établissements.`,
    }
  },
  // Projets Entreprise (Batch 4 - Added)
  {
    id: 30,
    title: 'Kakemono Établissements',
    subtitle: 'Création de supports événementiels',
    category: 'Communication Visuelle',
    type: 'entreprise',
    image: projetKakemono,
    description: "J'ai créé des kakémonos pour les différents établissements de l'Association Saint François d'Assise afin de renforcer leur visibilité lors d'événements. Chaque établissement dispose de son propre kakémono, et l'ensemble des supports est également disponible au siège pour représenter l'association lors des événements.",
    size: 'medium',
    detailImagesTop: [
      'https://i.imgur.com/VojHYvS.png',
      'https://i.imgur.com/VT7nQF1.png',
      'https://i.imgur.com/v5MHh7K.png',
      'https://i.imgur.com/DyeP6d8.png',
    ],
    detailImagesBottom: [
      'https://i.imgur.com/gHzKoVu.png',
      'https://i.imgur.com/Shv7wdg.png',
      'https://i.imgur.com/U0tMlCH.png',
      'https://i.imgur.com/fHW2RLR.png',
    ],
    details: {
      context: "Dans le cadre de la communication événementielle de l'association, il était nécessaire de créer des supports visuels permettant d'identifier rapidement les établissements lors de salons, rencontres professionnelles ou événements institutionnels.\n\nJ'ai donc conçu une série de kakémonos personnalisés, chacun dédié à un établissement spécifique, tout en respectant la charte graphique de l'association afin de garantir une cohérence visuelle entre les supports.\n\nLes kakémonos réalisés concernent :\n• l'IME\n• l'Hôpital d'Enfants\n• l'EHPAD\n• la MAS\n• le CEM\n• les services à domicile\n• le pôle formation\n• le CAMSP\n\nChaque établissement dispose de son propre kakémono pour assurer sa visibilité lors d'événements. L'ensemble des kakémonos est également conservé au siège, permettant de représenter facilement les différentes structures de l'association selon les besoins.\n\nCe projet a permis de renforcer la présence visuelle de l'association lors des événements et d'améliorer l'identification des établissements auprès des publics.",
    }
  },
  {
    id: 31,
    title: 'Manuel de Visibilité',
    category: 'Identité Visuelle',
    type: 'entreprise',
    image: projetManuel,
    description: 'Dans le cadre du déploiement d\'une nouvelle charte graphique, j\'ai réalisé un manuel de visibilité pour l\'Association Saint François d\'Assise. Ce document présente le nouveau logo ainsi que les différents outils et supports de communication. Il est destiné à tous les employés et sera partagé sur un dossier commun afin de faciliter son utilisation.',
    size: 'medium',
    details: {
      context: `Suite à la mise en place d'une nouvelle charte graphique, l'association avait besoin d'un document clair permettant d'expliquer les règles d'utilisation de son identité visuelle.

Dans ce cadre, j'ai conçu un manuel de visibilité destiné à présenter les éléments essentiels de la nouvelle charte graphique. Ce document avait pour objectif d'accompagner les équipes dans l'utilisation correcte des supports de communication et d'assurer une cohérence visuelle au sein de tous les établissements.

Le manuel comprend notamment :
• la présentation du nouveau logo,
• les règles d'utilisation du logo,
• les couleurs et typographies à utiliser,
• des exemples d'outils et supports de communication (documents, affiches, signatures, supports institutionnels…).

Ce guide a été conçu pour être accessible à l'ensemble des employés de l'association. Une fois finalisé, il a été mis à disposition sur un dossier partagé, permettant à tous les professionnels d'y accéder facilement et de l'utiliser comme référence au quotidien.

Ce projet s'inscrit dans une démarche d'harmonisation de l'image de marque, visant à garantir une communication cohérente entre les différents établissements.`,
    }
  },

  // Projets Ecole
  {
    id: 7,
    title: 'Angèle & Pardon!',
    category: 'Collaboration Inattendue',
    type: 'ecole',
    image: projetAngelePardon,
    carouselImages: [
      'https://i.imgur.com/kcyuKMZ.jpg',
      'https://i.imgur.com/TCawCqK.jpg',
      'https://i.imgur.com/lm7UyHE.jpg',
      'https://i.imgur.com/qGluuth.jpg',
      'https://i.imgur.com/0sdlpP6.jpg',
      'https://i.imgur.com/ADmvGwA.jpeg',
      'https://i.imgur.com/8NmppNI.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/8in1ISgq5ic',
    description: "Dans le cadre d'un projet créatif, j'ai imaginé une collaboration inédite entre la chanteuse Angèle et la marque réunionnaise Pardon!.\nL'objectif était de concevoir l'univers visuel et digital d'une collection exclusive comprenant un album musical et un tote bag, accompagnés d'une landing page dédiée.",
    size: 'large',
    details: {
      context: "Ce projet repose sur la création d'une collaboration fictive entre l'artiste pop Angèle, reconnue pour son univers moderne, engagé et esthétique, et la marque réunionnaise Pardon!, identifiée pour son identité locale forte et son positionnement lifestyle.\n\nL'enjeu était d'imaginer une rencontre cohérente entre deux univers de marque distincts afin de créer une expérience immersive autour d'un lancement de collection collaborative.\n\nPour répondre à cet objectif, j'ai conçu :\n• un moodboard traduisant la fusion des identités visuelles,\n• une palette colorimétrique commune inspirée des deux marques,\n• une landing page promotionnelle destinée à présenter la collaboration,\n• deux produits phares :\n  — un album en édition spéciale,\n  — un tote bag exclusif issu de la collaboration.\n\nCe projet m'a permis de travailler la direction artistique, la cohérence de marque ainsi que la conception d'une expérience digitale orientée lancement produit.",
    }
  },
  {
    id: 8,
    title: 'La Pantoufle à Pépère',
    category: 'Repositionnement de marque',
    type: 'ecole',
    image: projetPantoufle,
    carouselImages: [
      'https://i.imgur.com/vtDGPPn.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/2QheatkSipM?autoplay=1&mute=1&loop=1&playlist=2QheatkSipM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1',
    detailImages: [
      'https://i.imgur.com/Sgnct7Z.jpg',
      'https://i.imgur.com/p7Xck4I.jpg',
    ],
    description: "La marque française La Pantoufle à Pépère revisite la charentaise traditionnelle en proposant des modèles modernes, confortables et haut de gamme. Le projet vise à moderniser son image afin de séduire une clientèle plus jeune sans altérer son héritage artisanal et son positionnement premium.",
    size: 'medium',
    details: {
      context: "La Pantoufle à Pépère est une marque française spécialisée dans la réinterprétation contemporaine de la charentaise, symbole du savoir-faire traditionnel français. Elle associe fabrication artisanale, qualité des matériaux et design moderne afin de proposer un produit à la fois authentique et tendance.\n\nCependant, malgré une forte identité de marque, la charentaise reste souvent associée à une clientèle plus âgée. L'enjeu stratégique consiste donc à rajeunir la perception de la marque, accroître sa visibilité auprès de nouvelles générations et renforcer son attractivité digitale, tout en préservant ses valeurs fondamentales : artisanat, confort et fabrication française.\n\nCe projet s'inscrit ainsi dans une démarche de repositionnement d'image mêlant tradition, modernité et lifestyle premium.",
    }
  },
  {
    id: 9,
    title: 'Miels Rares du Cirque',
    category: 'Lancement de produit',
    type: 'ecole',
    image: projetMiels,
    carouselImages: [
      'https://i.imgur.com/U4lggWM.jpg',
      'https://i.imgur.com/h4gjUKA.jpg',
      'https://i.imgur.com/qzQTOkk.jpg',
    ],
    description: "Dans le cadre du lancement de la gamme premium « Miels Rares du Cirque » des Ruchers de Bourbon, j'ai conçu une affiche événementielle ainsi qu'une carte postale promotionnelle destinées à valoriser le caractère rare, local et naturel du produit et à stimuler le désir d'achat.",
    size: 'medium',
    details: {
      context: "Les Ruchers de Bourbon souhaitent lancer une nouvelle gamme premium intitulée Miels Rares du Cirque, mettant en avant des miels issus des cirques naturels de La Réunion, reconnus pour leur biodiversité exceptionnelle et leurs conditions de production uniques.\n\nL'enjeu de communication était de créer un support visuel capable de :\n- marquer le lancement de cette nouvelle gamme,\n- valoriser la rareté du produit,\n- renforcer son positionnement haut de gamme,\n- attirer l'attention en point de vente.\n\nPour répondre à cette problématique, j'ai réalisé :\n- une affiche promotionnelle, conçue pour créer un impact visuel immédiat et installer l'univers premium du produit,\n- une carte postale distribuée en magasin, servant de support complémentaire pour prolonger l'expérience de marque et encourager l'achat.\n\nLe projet s'inscrit dans une démarche de valorisation du patrimoine naturel réunionnais à travers un produit local d'exception.",
    }
  },
  {
    id: 10,
    title: 'Mauvais Élèves',
    category: 'Campagne de sensibilisation',
    type: 'ecole',
    image: projetMauvaisEleves,
    carouselImages: [
      'https://i.imgur.com/IYoGLJN.jpg',
      'https://i.imgur.com/uzxb1rP.jpg',
      'https://i.imgur.com/I2XbyQu.jpg',
      'https://i.imgur.com/Mjvzm3p.jpg',
      'https://i.imgur.com/tlYIR2u.jpg',
      'https://i.imgur.com/5IdUxmO.jpg',
      'https://i.imgur.com/ocaoqgZ.jpg',
      'https://i.imgur.com/mE5dsZg.jpg',
    ],
    videoUrls: [
      'https://www.youtube.com/embed/iEMvjNu_VjM?autoplay=1&mute=1&loop=1&playlist=iEMvjNu_VjM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1',
      'https://www.youtube.com/embed/7dklG4vCr1M?autoplay=1&mute=1&loop=1&playlist=7dklG4vCr1M&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1',
    ],
    detailImages: [
      'https://i.imgur.com/H9LHdcd.jpg',
      'https://i.imgur.com/djBXLSj.jpg',
      'https://i.imgur.com/eum6c2E.jpg',
      'https://i.imgur.com/GGQ64EE.jpg',
      'https://i.imgur.com/qpWuuWT.jpg',
    ],
    description: "J'ai participé à la conception d'une campagne de sensibilisation aux addictions pour l'association Proxité, destinée aux jeunes de 15 à 25 ans.\nL'objectif était de créer une communication impactante et adaptée aux codes des jeunes afin de prévenir les comportements à risque.",
    size: 'medium',
    details: {
      context: "Les jeunes âgés de 15 à 25 ans sont particulièrement exposés à différents comportements à risque tels que la consommation d'alcool, de tabac, de drogues, l'usage excessif des écrans ou encore la conduite dangereuse.\n\nL'association Proxité souhaitait développer une campagne de prévention capable de capter l'attention de ce public en utilisant des codes visuels et des formats adaptés à leurs habitudes de consommation médiatique.\n\nEn équipe, nous avons imaginé une direction artistique originale reposant sur des bonhommes bâtons, permettant d'aborder des sujets sérieux avec un ton accessible, identifiable et impactant.\n\nLa campagne comprenait :\n- 5 affiches de prévention (alcool, drogue, écrans, conduite dangereuse, tabac),\n- des posts Instagram en carrousel favorisant l'engagement et la pédagogie,\n- des vidéos interviews transformées en contenus courts (Reels & TikTok) afin d'élargir la portée de la campagne.\n\nL'objectif global était de toucher un maximum de jeunes grâce à une approche multi-supports mêlant communication physique et digitale.",
    },
  },
  {
    id: 11,
    title: 'LGM',
    category: 'Rebranding',
    type: 'ecole',
    image: projetGlace,
    carouselImages: [
      'https://i.imgur.com/g0uB1fs.jpg',
      'https://i.imgur.com/yyloRRw.jpg',
      'https://i.imgur.com/Iyi5E5k.jpg',
      'https://i.imgur.com/lpU5N7Y.jpg',
      'https://i.imgur.com/dZN6snL.jpg',
      'https://i.imgur.com/j3jdi7e.jpg',
      'https://i.imgur.com/mgyXxwE.jpg',
      'https://i.imgur.com/GvQU1ql.jpg',
      'https://i.imgur.com/9ESAd5G.jpg',
      'https://i.imgur.com/DWwaJsv.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/EBpGaUyWc7k?autoplay=1&mute=1&loop=1&playlist=EBpGaUyWc7k&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1',
    description: "J'ai réalisé le rebranding complet de la marque LGM en développant un nouvel univers positionn sur une offre de glaces premium.\nPour ce projet, j'ai effectué une veille concurrentielle, créé une nouvelle identité visuelle, conçu un brandbook complet, imaginé les futurs restaurants, réalisé des supports de communication ainsi que le visuel d'un site de commande et une partie événementielle pour la marque.",
    size: 'large',
    details: {
      context: `Dans le cadre de ce projet, l'objectif était de repenser entièrement l'image de la marque LGM afin de lui donner un positionnement plus différenciant et haut de gamme.
J'ai commencé par réaliser une veille stratégique portant sur la marque et ses concurrents afin d'identifier les opportunités de repositionnement. À partir de cette analyse, j'ai choisi de transformer LGM en une marque de glaces de luxe, centrée sur l'expérience client et l'univers premium.
Le projet comprend :
- la création d'un nouveau positionnement de marque,
- la refonte complète des logos,
- la création d'une nouvelle charte graphique,
- la réalisation d'un brandbook complet,
- la conception de supports de communication,
- l'imagination de l'identité visuelle des futurs restaurants,
- la création du visuel d'un site de commande en ligne,
- le développement d'une dimension événementielle (mariages, événements privés, collaborations).
L'objectif était de construire une marque cohérente, immersive et attractive, capable de proposer une véritable expérience haut de gamme.`,
    },
  },
  {
    id: 12,
    title: 'Lilo & Stitch',
    category: 'Affiche promotionnelle',
    type: 'ecole',
    image: projetLiloStitch,
    carouselImages: [
      'https://i.imgur.com/bIDxDsV.jpg',
    ],
    detailImages: [
      'https://i.imgur.com/SUHeXAE.jpg',
    ],
    description: "Dans le cadre d'un concours fictif de création graphique, j'ai réalisé l'affiche d'un film inspiré de l'univers de Lilo & Stitch, avec pour objectif de donner l'impression d'un tournage réalisé dans une région exotique.",
    size: 'large',
    details: {
      context: "Ce projet consistait à concevoir l'affiche promotionnelle d'un film fictif sur le thème libre, tout en respectant une contrainte majeure : créer une immersion visuelle laissant penser que le film avait été tourné dans un environnement exotique.\n\nJ'ai choisi de revisiter l'univers de Lilo & Stitch afin de travailler une ambiance tropicale forte, mêlant paysages naturels, couleurs chaleureuses et éléments visuels caractéristiques d'un décor insulaire.\n\nL'objectif était de démontrer ma capacité à :\n- construire une composition graphique cohérente,\n- intégrer plusieurs éléments détourés dans une même scène,\n- créer de la profondeur et du réalisme grâce aux ombres, lumières et harmonies colorées.\n\nL'affiche comprend :\n- au minimum trois protagonistes dtourés,\n- des éléments de décor (nature, objets, environnement tropical),\n- un arrière-plan immersif,\n- un travail d'effets visuels assurant la crédibilité de la scène finale.",
    },
  },
  {
    id: 13,
    title: 'Clémentine de Corse',
    category: 'Communication événementielle',
    type: 'ecole',
    image: projetClementine,
    carouselImages: [
      'https://i.imgur.com/Mx0PrZB.jpg',
      'https://i.imgur.com/GZOmdTZ.jpg',
    ],
    description: "Dans le cadre d'un projet de communication visuelle, j'ai conçu un flocage de véhicule pour la marque Clémentine de Corse, incluant la création d'un slogan tout en respectant strictement la charte graphique existante.",
    size: 'large',
    details: {
      context: `Ce projet avait pour objectif de concevoir une publicité mobile à travers le flocage d'un véhicule destiné à promouvoir la marque Clémentine de Corse.

L'enjeu principal consistait à proposer une création visuelle impactante capable d'assurer la visibilité de la marque lors de ses déplacements, tout en respectant son identité visuelle officielle afin de garantir la cohérence de communication.

Le travail demandé comprenait :
• la conception d'un visuel adapté au format véhicule,
• la création d'un slogan publicitaire,
• la réalisation d'une maquette réaliste intégrée sur un véhicule,
• le respect de la charte graphique (couleurs, typographies, univers de marque).`,
    },
  },
  {
    id: 14,
    title: 'Aristochats',
    category: 'Concept événementiel',
    type: 'ecole',
    image: projetAristochats,
    carouselImages: [
      'https://i.imgur.com/KejNaJ4.jpg',
    ],
    detailImages: [
      'https://i.imgur.com/Kj7mTAm.jpg',
    ],
    description: "Dans le cadre des 100 ans de The Walt Disney Company, j'ai imaginé un concept innovant destiné à promouvoir la projection du film Les Aristochats et à inciter le public à se rendre en salle de cinéma.",
    size: 'large',
    details: {
      context: `À l'occasion du centenaire de Disney, le projet consistait à imaginer une opération innovante permettant de créer de l'attractivité autour d'une séance de cinéma et d'encourager la venue du public.

J'ai développé le concept Ciné'Chat, une expérience immersive directement liée à l'univers du film Les Aristochats.

Le principe repose sur l'organisation de séances spéciales durant lesquelles des chats provenant d'associations seraient présents dans un espace aménagé du cinéma.

Cette expérience transforme la projection en événement unique, créant une véritable valeur ajoutée à la séance et une raison supplémentaire pour le public de se déplacer en salle de cinéma plutôt que de regarder le film à domicile.

L'innovation repose donc sur :
• une expérience immersive en lien avec le film,
• une animation événementielle différente,
• une interaction réelle avec l'univers cinématographique.`,
    },
  },
  {
    id: 15,
    title: 'Nalu',
    category: 'Maîtrise Photoshop',
    type: 'ecole',
    image: projetNalu,
    carouselImages: [
      'https://i.imgur.com/g6zn1Fp.jpg',
    ],
    detailImages: [
      'https://i.imgur.com/ANDNZuw.jpg',
    ],
    description: "Dans le cadre d'un exercice pratique, j'ai reproduit à l'identique une affiche existante à l'aide du logiciel Photoshop afin de développer ma maîtrise des outils de création graphique.",
    size: 'large',
    details: {
      context: `Ce projet avait pour objectif de renforcer mes compétences techniques sur Adobe Photoshop  travers la reproduction fidèle d'une affiche existante.

L'exercice consistait à recréer le visuel le plus précisément possible en travaillant :
• la composition,
• la typographie,
• les couleurs,
• les effets visuels,
• les jeux d'ombres et de lumières,
ainsi que la gestion des calques.

Ce travail m'a permis de mieux comprendre les méthodes de construction d'un visuel professionnel et d'améliorer ma rigueur dans l'exécution graphique.`,
    },
  },
  {
    id: 16,
    title: 'Air Austral',
    category: 'Communication interne',
    type: 'ecole',
    image: projetAirAustral,
    carouselImages: [
      'https://i.imgur.com/FhBj9xz.jpg',
    ],
    detailImages: [
      'https://i.imgur.com/1zuFLW1.jpg',
      'https://i.imgur.com/PWfWiJB.jpg',
    ],
    detailRightImage: 'https://i.imgur.com/tU11tyq.jpg',
    description: "Dans le cadre du renforcement de sa politique de mobilité durable et de qualité de vie au travail, Air Austral a mis en place de nouvelles mesures internes : le télétravail et une plateforme de covoiturage.\nJ'ai conçu des supports de communication destinés à informer les collaborateurs et accompagner le déploiement de ces dispositifs.",
    size: 'large',
    details: {
      context: `Afin d'encourager une mobilité plus durable et de favoriser un meilleur équilibre entre vie professionnelle et personnelle, Air Austral a instauré deux nouvelles mesures destinées à ses collaborateurs :
• la mise en place du télétravail pour certaines fonctions,
• la création d'une plateforme interne de covoiturage.

L'objectif du projet était de concevoir des supports de communication internes permettant d'annoncer clairement ces évolutions et d'en faciliter l'appropriation par les employés.

Pour répondre à cette problématique, j'ai réalisé :
• une brochure informative, volontairement imprimée en quantité limitée puis plastifiée et mise à disposition dans les espaces de pause afin de respecter une démarche RSE,
• une interface intranet, permettant un accès durable et dématérialisé aux informations.

Le projet s'inscrit ainsi dans une logique de communication responsable et durable.`,
    },
  },
  {
    id: 17,
    title: 'EDN',
    category: 'Communication digitale',
    type: 'ecole',
    image: projetEDN,
    carouselImages: [
      'https://i.imgur.com/O8GuxDk.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/pCgjsy4_onk?autoplay=1&mute=1&loop=1&playlist=pCgjsy4_onk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1',
    description: "Dans le cadre d'un projet collaboratif, j'ai participé à la création d'une vidéo promotionnelle destinée aux réseaux sociaux de École du Numérique (EDN) afin de présenter l'établissement et d'attirer de futurs étudiants.",
    size: 'large',
    details: {
      context: `Ce projet avait pour objectif de créer une vidéo destinée aux réseaux sociaux de l'EDN afin de promouvoir l'école auprès de futurs étudiants.

En équipe, nous avons travaillé sur l'ensemble du processus créatif :
• recherche de concept et d'angle de communication,
• définition du message à transmettre,
• réflexion sur la meilleure manière de mettre en avant l'école, ses formations et son environnement,
• adaptation du contenu aux codes des réseaux sociaux.

J'ai ensuite réalisé le montage vidéo sur CapCut, en assurant :
• la structuration du storytelling,
• le rythme du montage,
• l'intégration de textes, transitions et effets,
• l'optimisation du format pour les plateformes sociales.

La vidéo finale a été publiée sur les réseaux sociaux officiels de l'établissement.`,
    },
  },
  {
    id: 18,
    title: 'Benetton',
    category: 'Création de contenus visuels',
    type: 'ecole',
    image: projetBenetton,
    carouselImages: [
      'https://i.imgur.com/uffpNqT.jpg',
      'https://i.imgur.com/eTbK8ZU.jpg',
      'https://i.imgur.com/4zylOHD.jpg',
      'https://i.imgur.com/GR5wegh.jpg',
      'https://i.imgur.com/AWBxREc.jpg',
      'https://i.imgur.com/HeIfkKs.jpg',
      'https://i.imgur.com/03ASNAx.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/2LDz6Aa0hRE?autoplay=1&mute=1&loop=1&playlist=2LDz6Aa0hRE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1',
    detailImages: [
      'https://i.imgur.com/uffpNqT.jpg',
      'https://i.imgur.com/eTbK8ZU.jpg',
      'https://i.imgur.com/4zylOHD.jpg',
      'https://i.imgur.com/GR5wegh.jpg',
      'https://i.imgur.com/AWBxREc.jpg',
      'https://i.imgur.com/HeIfkKs.jpg',
      'https://i.imgur.com/03ASNAx.jpg',
    ],
    description: "Dans le cadre d'un projet de communication, nous devions accompagner le repositionnement de la marque Benetton vers un univers streetwear afin de moderniser son image et séduire une cible plus jeune.\nPour répondre à cet objectif, j'ai réalisé un shooting photo ainsi qu'une vidéo destinés aux réseaux sociaux, en cohérence avec la nouvelle identité de marque.",
    size: 'large',
    details: {
      context: `Face à l'évolution des tendances vestimentaires et à la montée en puissance du streetwear dans l'industrie de la mode, la marque Benetton souhaite moderniser son image afin de rester compétitive auprès des nouvelles générations de consommateurs.

Historiquement reconnue pour ses vêtements colorés et accessibles, la marque cherche à adopter un positionnement plus urbain, contemporain et lifestyle, capable de séduire un public jeune fortement influencé par les réseaux sociaux et les codes visuels actuels.

Dans ce contexte, notre mission était d'imaginer une stratégie créative permettant de traduire ce repositionnement à travers des supports digitaux impactants. Le projet impliquait la réflexion autour d'un nouvel univers artistique, le choix des mises en scène, des styles vestimentaires et de l'ambiance visuelle correspondant aux codes du streetwear.

J'ai participé à la conception du concept créatif et assuré la réalisation d'un shooting photo ainsi que la production d'une vidéo destinée aux réseaux sociaux, mettant en avant une image plus moderne, dynamique et urbaine de la marque.`,
    },
  },
  {
    id: 19,
    title: 'Storyboard',
    category: 'Conception de storyboard publicitaire',
    type: 'ecole',
    image: projetStoryboard,
    carouselImages: [
      'https://i.imgur.com/cFpCrHF.jpg',
      'https://i.imgur.com/I4wN48P.jpg',
      'https://i.imgur.com/juaAhA5.jpg',
      'https://i.imgur.com/Fd3LQFk.jpg',
      'https://i.imgur.com/z8OCpMj.jpg',
      'https://i.imgur.com/j6zDime.jpg',
      'https://i.imgur.com/XzQOf27.jpg',
      'https://i.imgur.com/dRPbnR5.jpg',
      'https://i.imgur.com/PLBYN8U.jpg',
      'https://i.imgur.com/zeYb9Ho.jpg',
      'https://i.imgur.com/qQkZ1Sy.jpg',
      'https://i.imgur.com/tlSprNK.jpg',
    ],
    description: "Dans le cadre d'un projet pédagogique, il était demandé de concevoir le storyboard d'une campagne vidéo publicitaire destinée à promouvoir le Train Jaune de la SNCF, une ligne ferroviaire touristique emblématique traversant les Pyrénées.",
    size: 'large',
    details: {
      context: `Le Train Jaune est une ligne ferroviaire historique reliant plusieurs territoires de montagne et offrant une expérience touristique unique au cœur des Pyrénées. L'objectif du projet était d'imaginer une campagne publicitaire vidéo capable de valoriser ce train comme une véritable expérience de voyage, et non comme un simple moyen de transport.

Pour répondre à cette demande, j'ai réalisé un storyboard complet, étape essentielle dans la conception d'une vidéo publicitaire. Celui-ci permet de structurer le récit visuel, d'anticiper les plans, les ambiances, les transitions ainsi que le message émotionnel transmis au spectateur.

Le travail consistait à penser la narration, le rythme de la vidéo et la mise en scène afin de traduire visuellement :
- la beauté des paysages pyrénéens,
- l'authenticité du Train Jaune,
- l'expérience immersive du voyage.

Ce projet mobilise des compétences en direction artistique, storytelling et conception audiovisuelle, indispensables à la préparation d'une campagne publicitaire.`,
    },
  },
];

// Configuration de la grille pour les projets (Reference / Legacy - no longer used but kept for type safety if imported elsewhere)
export const ECOLE_GRID_CONFIG: Record<number, {
  mobile: string;
  tablet: string;
  desktop: string;
  large: string;
}> = {
  // Entreprise
  29: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  20: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  21: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  22: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  23: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  24: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  25: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  26: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  27: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  30: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  31: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },

  // Ecole
  7: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  8: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  9: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  10: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  19: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  11: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  12: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  13: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  14: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  15: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  16: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  17: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  18: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
};

// IDs des projets en vedette
export const FEATURED_PROJECT_IDS = [7, 11, 16, 18, 23, 29];