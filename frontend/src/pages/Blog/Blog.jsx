// src/pages/Blog/Blog.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Articles du blog
  const articles = [
    {
      id: 1,
      title: "L'ACT et le TDAH : Une combinaison puissante",
      excerpt:
        "Comment la Thérapie d'Acceptation et d'Engagement peut transformer la vie des adultes avec TDAH en leur apprenant à accepter leurs pensées difficiles.",
      category: "ACT",
      author: "Annabel Eve Coulthard",
      date: "10 décembre 2025",
      readTime: "10 min",
      image: "/act-tdah.png",
      featured: true,
      content: `Vivre avec un TDAH, c'est souvent se sentir en guerre contre soi-même. Une guerre épuisante contre vos pensées qui fusent, vos émotions qui débordent, votre incapacité à "simplement vous concentrer". Et si le véritable problème n'était pas le TDAH lui-même, mais cette lutte constante ?

**Pourquoi les approches traditionnelles ne suffisent pas toujours**

Les approches classiques du TDAH se concentrent sur la gestion des symptômes : médicaments, techniques d'organisation, stratégies de gestion du temps. Ces outils sont précieux, mais ils laissent de côté votre relation avec votre TDAH.

**Qu'est-ce que l'ACT ?**

La Thérapie d'Acceptation et d'Engagement repose sur un principe radical : vous ne pouvez pas contrôler vos pensées et émotions, mais vous pouvez choisir vos actions.

Les 6 processus fondamentaux :
1. Acceptation : Accueillir vos expériences intérieures
2. Défusion cognitive : Observer vos pensées sans y croire
3. Présence au moment présent
4. Soi observateur
5. Valeurs : Ce qui compte vraiment pour vous
6. Action engagée

**Pourquoi l'ACT est particulièrement efficace pour le TDAH**

Elle normalise le chaos mental. Avec le TDAH, votre esprit ressemble à un navigateur avec 47 onglets ouverts. L'ACT ne cherche pas à fermer ces onglets de force, mais à vous apprendre à ne pas vous laisser submerger.

Elle remplace la lutte par l'acceptation. L'acceptation libère l'énergie gaspillée dans la lutte pour la rediriger vers l'action constructive.

Elle se concentre sur les valeurs, pas sur la performance. L'ACT vous invite à aligner vos actions sur vos valeurs, même imparfaitement.

**L'ACT appliquée aux défis spécifiques du TDAH**

Pour la procrastination : Identifier l'émotion que vous évitez, l'accueillir consciemment, faire un tout petit pas avec l'anxiété présente.

Pour la dysrégulation émotionnelle : Nommer l'émotion sans jugement, observer ses manifestations physiques, créer de l'espace, choisir une action alignée avec vos valeurs.

Pour la critique intérieure : Transformer "Je suis nul" en "J'ai la pensée que je suis nul".

**Exercices ACT pratiques**

La météo intérieure (3 minutes) : Observer vos pensées, émotions, sensations sans rien changer.

Les valeurs en action (5 minutes) : Identifier UNE petite action alignée avec vos valeurs chaque matin.

Le bouton "pause" (30 secondes) : Quand l'impulsivité monte, posez votre main sur votre cœur, respirez 3 fois, demandez-vous si cette action vous rapproche de vos valeurs.

**ACT et médication : Complémentaires, pas opposés**

L'ACT ne remplace pas la médication pour ceux qui en bénéficient. Les deux sont complémentaires : la médication peut aider à calmer le chaos neurologique, l'ACT vous aide à naviguer ce chaos avec plus de flexibilité et de sens.

**Les résultats de la recherche**

Des études montrent que l'ACT pour le TDAH améliore la régulation émotionnelle, la qualité de vie, la capacité à maintenir des routines, l'estime de soi, et la réduction de la procrastination.

**Commencer votre parcours ACT**

L'ACT n'est pas une solution miracle instantanée. C'est une pratique, un entraînement de l'esprit.

Par où commencer :
1. Identifiez vos valeurs : Qu'est-ce qui compte vraiment pour vous ?
2. Observez votre mental : Quelles pensées reviennent constamment ?
3. Pratiquez l'acceptation : Une émotion difficile à la fois
4. Prenez de petites actions : Un pas vers vos valeurs chaque jour

**Conclusion**

L'ACT ne "guérit" pas le TDAH. Elle change quelque chose de plus profond : votre relation avec votre TDAH. Elle transforme la guerre intérieure en coexistence pacifique. Elle vous permet de dire : "Oui, c'est difficile. Et je peux quand même."

Le TDAH fait partie de qui vous êtes, mais il ne vous définit pas. Avec l'ACT, vous apprenez à danser avec vos particularités plutôt que de lutter contre elles. Et dans cette danse, vous découvrez une liberté insoupçonnée.`,
    },
    {
      id: 2,
      title: "Vivre selon ses valeurs : Le cœur de l'ACT",
      excerpt:
        "Comment identifier vos valeurs profondes et aligner vos actions avec ce qui compte vraiment pour vous.",
      category: "ACT",
      author: "Annabel Eve Coulthard",
      date: "20 novembre 2025",
      readTime: "12 min",
      image: "/valeurs.png",
      featured: false,
      content: `Imaginez votre vie comme un voyage. La plupart des gens passent leur temps à fixer des destinations : "Je serai heureux quand j'aurai ce job", "quand je perdrai du poids", "quand j'aurai trouvé l'amour". Mais que se passe-t-il quand vous atteignez ces objectifs ? Souvent, le bonheur espéré s'évapore rapidement. Et si le secret du bonheur n'était pas la destination, mais la direction que vous choisissez ?

**Valeurs vs Objectifs : Quelle différence ?**

Un objectif est une destination, un point d'arrivée mesurable : perdre 10 kilos, obtenir une promotion, se marier, acheter une maison.

Une valeur est une direction, une boussole, un choix continu : être un parent présent et aimant, contribuer au bien-être des autres, cultiver la créativité, vivre avec authenticité.

**La métaphore de la boussole**

Objectif = Destination : "Je veux aller à Paris". Soit vous y êtes, soit vous n'y êtes pas. Une fois arrivé, vous avez besoin d'une nouvelle destination.

Valeur = Direction : "Je veux aller vers l'Ouest". Vous pouvez toujours aller plus à l'Ouest. Chaque pas dans cette direction compte. La direction reste constante même si le chemin change.

**Pourquoi les valeurs sont essentielles**

Elles donnent du sens. Viktor Frankl a démontré que l'être humain peut supporter presque n'importe quelle souffrance s'il trouve un SENS à cette souffrance.

Elles persistent à travers les changements. La vie change constamment, mais vos valeurs peuvent rester stables et vous guider même dans le chaos.

Elles sont disponibles MAINTENANT. Les objectifs sont toujours dans le futur. Les valeurs sont accessibles à chaque instant.

Elles transforment l'ordinaire en extraordinaire. Sans conscience des valeurs, changer une couche = tâche ingrate. Avec conscience, c'est un acte d'amour.

**Identifier vos valeurs profondes**

EXERCICE 1 : L'anniversaire des 80 ans
Imaginez votre 80ème anniversaire. Vos proches partagent ce que votre vie a signifié pour eux. Que voudriez-vous les entendre dire ? Quel impact auriez-vous voulu avoir ?

EXERCICE 2 : Les moments de fierté
Pensez à 3-5 moments dont vous êtes vraiment fier(e). Pour chaque moment, demandez-vous : Qu'est-ce qui rendait ce moment spécial ? Quelle qualité avez-vous exprimée ?

EXERCICE 3 : Ce qui vous met en colère
Qu'est-ce qui vous révolte profondément ? Nous nous mettons en colère quand nos valeurs sont violées. Votre colère pointe vers ce qui compte pour vous.

EXERCICE 4 : Les domaines de vie
Relations, travail/contribution, développement personnel, loisirs/créativité, santé/bien-être, spiritualité/sens.

**Les valeurs ne sont PAS**

Des règles morales imposées de l'extérieur, des objectifs déguisés, des sentiments, ce que les autres attendent de vous.

**Vivre selon vos valeurs : De la théorie à la pratique**

ÉTAPE 1 : Clarifier vos 3-5 valeurs principales

ÉTAPE 2 : Évaluer votre vie actuelle (échelle 0-10 pour chaque valeur)

ÉTAPE 3 : Identifier de petites actions concrètes. Pour chaque valeur : "Quel est le plus PETIT pas que je peux faire aujourd'hui ?"

ÉTAPE 4 : La routine quotidienne des valeurs
Chaque matin (5 min) : Choisissez UNE valeur, identifiez 1-3 actions concrètes, visualisez ces moments.
Chaque soir (3 min) : Ai-je agi selon mes valeurs ? Célébrez chaque petit pas.

**Valeurs et TDAH : Un match parfait**

Elles génèrent de la motivation intrinsèque. Le TDAH lutte avec la motivation externe, mais quand vous connectez une tâche à vos valeurs, la motivation vient de l'intérieur.

Elles remplacent la discipline par le sens. Le TDAH a des déficits de fonctions exécutives, mais le sens peut contourner ces déficits.

Elles offrent de la flexibilité. Le TDAH a besoin de variété. Les valeurs peuvent s'exprimer de 1000 façons différentes.

**Obstacles courants et solutions**

"Je ne sais pas quelles sont mes valeurs" : Faites les exercices, observez ce qui vous touche, remarquez quand vous êtes "aligné", expérimentez.

"Mes valeurs sont en conflit" : C'est une question d'équilibre. Acceptez que parfois une valeur prendra temporairement le dessus.

"Je ne vis pas du tout selon mes valeurs" : Stop. La culpabilité n'aide pas. Question utile : "Quel est le plus petit pas aujourd'hui ?"

**Conclusion**

Vos valeurs sont votre boussole intérieure. Elles ne vous disent pas où vous devez arriver, mais dans quelle direction vous voulez aller. Elles transforment chaque journée ordinaire en une vie significative.

Vous n'avez pas besoin d'attendre d'être "prêt". Vous pouvez commencer maintenant. Un tout petit pas. Dans la direction de vos valeurs. Et puis un autre. Et encore un autre.

C'est ça, une vie bien vécue. Pas une vie parfaite. Juste une vie alignée, un pas à la fois, avec ce qui compte vraiment pour vous.`,
    },
    {
      id: 3,
      title: "La défusion cognitive : Se distancier de ses pensées",
      excerpt:
        "Une technique puissante de l'ACT pour ne plus être prisonnier de vos pensées négatives.",
      category: "ACT",
      author: "Annabel Eve Coulthard",
      date: "10 novembre 2025",
      readTime: "10 min",
      image: "/defusion.png",
      featured: false,
      content: `"Je suis nul(le)." "Je vais échouer." "Personne ne m'aime." "Je ne suis pas assez." Combien de fois par jour ces pensées traversent-elles votre esprit ? Et combien de fois les croyez-vous automatiquement ? Et si je vous disais que le problème n'est pas d'avoir ces pensées, mais de les prendre pour des vérités absolues ?

**Qu'est-ce que la fusion cognitive ?**

La fusion cognitive, c'est quand vous êtes tellement identifié à vos pensées qu'il n'y a plus de distance entre vous et elles. Vous ne pensez pas "J'ai la pensée que je suis nul" – vous pensez simplement "JE SUIS nul".

**Pourquoi la fusion est un problème**

Les pensées deviennent des ordres. Quand vous êtes fusionné, vous leur obéissez comme si c'était un commandement absolu.

Vous perdez votre flexibilité psychologique. Vous ne pouvez plus choisir vos actions. Vos pensées choisissent pour vous.

La souffrance s'amplifie. La fusion transforme une difficulté en catastrophe.

**Qu'est-ce que la défusion cognitive ?**

La défusion cognitive, c'est créer de l'espace entre vous et vos pensées. C'est reconnaître qu'une pensée n'est qu'une pensée – des mots, des images, des sons dans votre tête – pas nécessairement une vérité.

Le changement fondamental :
AVANT (fusion) : "Je suis nul" = vérité absolue → honte, évitement, abandon
APRÈS (défusion) : "J'ai la pensée que je suis nul" = événement mental → observation, choix, action alignée

**Pourquoi la défusion fonctionne**

Votre cerveau produit entre 60 000 et 80 000 pensées par jour. La majorité sont répétitives (95%), négatives (biais de négativité évolutif), automatiques (vous ne les choisissez pas).

Votre cerveau est comme un DJ qui passe les mêmes morceaux en boucle. Vous n'êtes pas obligé de danser sur chaque chanson.

Les pensées ne sont pas des faits. Une pensée est UNE possibilité parmi d'autres, pas une prédiction infaillible.

Vous n'êtes pas vos pensées. Vous êtes l'espace dans lequel les pensées apparaissent, pas les pensées elles-mêmes.

**Techniques de défusion cognitive**

TECHNIQUE 1 : Nommer la pensée
Au lieu de "Je suis nul", dites "J'ai la pensée que je suis nul" ou "J'observe la pensée qu'elle me déteste" ou "Mon mental me dit que je vais échouer".

TECHNIQUE 2 : Remercier votre mental
"Merci, mental, pour cette contribution utile. Je note." ou "Ah, le classique syndrome de l'imposteur ! Merci mental, fidèle au poste."

TECHNIQUE 3 : La voix de dessin animé
Répétez votre pensée négative avec la voix de Mickey Mouse, Dark Vador, un robot, ou un enfant de 5 ans.

TECHNIQUE 4 : Les feuilles sur la rivière
Visualisez-vous au bord d'une rivière. Chaque pensée, placez-la sur une feuille. Observez la feuille qui s'éloigne lentement.

TECHNIQUE 5 : Chanter vos pensées
Chantez votre pensée négative sur l'air de "Joyeux Anniversaire".

TECHNIQUE 6 : La répétition rapide
Répétez un mot qui vous pose problème rapidement pendant 30 secondes. Le mot perd complètement son sens (satiation sémantique).

TECHNIQUE 7 : Externaliser la pensée
Écrivez votre pensée sur un post-it. Tenez-le très près de votre visage (flou, envahissant), puis à bout de bras (net, petit, gérable).

TECHNIQUE 8 : Le "ET" plutôt que le "MAIS"
"J'ai peur de parler en public, ET je peux quand même monter sur scène"
"Je pense que je vais échouer, ET je peux quand même essayer"
"Je me sens anxieux, ET je peux quand même sortir"

**Défusion et TDAH : Un duo puissant**

Combat les pensées automatiques négatives ("J'ai encore oublié", "Je suis désorganisé").

Réduit l'impulsivité émotionnelle. Schéma habituel : Pensée → Émotion intense → Action impulsive → Regret. Avec défusion : Pensée → Observation → Espace → Choix → Action alignée.

Aide à gérer la dysrégulation émotionnelle. Le TDAH amplifie les émotions. La défusion crée un espace entre le déclencheur et la réaction.

**Ce que la défusion n'est PAS**

La pensée positive forcée (remplacer "Je suis nul" par "Je suis génial").
La suppression des pensées ("Je ne vais PAS penser que je suis nul").
L'analyse cognitive (débattre rationnellement).

**Intégrer la défusion dans votre quotidien**

Choisissez UNE pensée-cible qui revient souvent.

Pratique quotidienne (5 minutes) : Remarquez, nommez, choisissez une technique, observez.

Rappel bienveillant : La défusion est une PRATIQUE. Vous ALLEZ vous faire capturer par certaines pensées. C'est normal. Remarquer que vous êtes fusionné, c'est déjà de la défusion.

**Conclusion**

Vos pensées ne sont pas vos ennemies. Ce ne sont que des événements mentaux. Le problème n'est pas d'avoir des pensées négatives, mais de les croire automatiquement.

La défusion cognitive vous offre une liberté extraordinaire : celle de choisir vos actions indépendamment de vos pensées. Vous pouvez avoir la pensée "je suis nul" ET agir avec courage. Vous pouvez penser "je vais échouer" ET essayer quand même.

Entre vous et vos pensées, il y a un espace. Et dans cet espace réside votre pouvoir.`,
    },
  ];

  const categories = ["all", "ACT"];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const featuredArticle = articles.find((article) => article.featured);
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured
  );

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero__overlay"></div>
        <div className="container">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Blog</h1>
            <p className="blog-hero__subtitle">
              Conseils, réflexions et ressources sur l'ACT et le bien-être
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="blog-filters">
        <div className="container">
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "Tous les articles" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === "all" && featuredArticle && (
        <section className="blog-featured">
          <div className="container">
            <div className="featured-article">
              <div className="featured-article__image">
                <img src={featuredArticle.image} alt={featuredArticle.title} />
                <span className="featured-badge">Article à la une</span>
              </div>
              <div className="featured-article__content">
                <span className="featured-article__category">
                  {featuredArticle.category}
                </span>
                <h2 className="featured-article__title">
                  {featuredArticle.title}
                </h2>
                <p className="featured-article__excerpt">
                  {featuredArticle.excerpt}
                </p>
                <div className="featured-article__meta">
                  <span className="meta-item">
                    <span className="icon">👤</span>
                    {featuredArticle.author}
                  </span>
                  <span className="meta-item">
                    <span className="icon">📅</span>
                    {featuredArticle.date}
                  </span>
                  <span className="meta-item">
                    <span className="icon">⏱️</span>
                    {featuredArticle.readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${featuredArticle.id}`}
                  className="btn btn--primary"
                >
                  Lire l'article →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="blog-articles">
        <div className="container">
          <h2 className="section-title">
            {selectedCategory === "all"
              ? "Tous les articles"
              : `Articles sur ${selectedCategory}`}
          </h2>

          {regularArticles.length > 0 ? (
            <div className="articles-grid">
              {regularArticles.map((article) => (
                <article key={article.id} className="article-card">
                  <div className="article-card__image">
                    <img src={article.image} alt={article.title} />
                    <span className="article-card__category">
                      {article.category}
                    </span>
                  </div>
                  <div className="article-card__content">
                    <h3 className="article-card__title">{article.title}</h3>
                    <p className="article-card__excerpt">{article.excerpt}</p>
                    <div className="article-card__meta">
                      <span className="meta-item">
                        <span className="icon">📅</span>
                        {article.date}
                      </span>
                      <span className="meta-item">
                        <span className="icon">⏱️</span>
                        {article.readTime}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${article.id}`}
                      className="article-card__link"
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-articles">
              <p>Aucun article trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="container">
          <div className="blog-cta__content">
            <h2 className="blog-cta__title">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="blog-cta__text">
              Réservez votre consultation gratuite de 20 minutes
            </p>
            <div className="blog-cta__buttons">
              <Link to="/rendez-vous" className="btn btn--primary btn--large">
                Prendre rendez-vous
              </Link>
              <Link
                to="/contact"
                className="btn btn--secondary-white btn--large"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
