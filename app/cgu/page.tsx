import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function CGUPage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Conditions Générales d'Utilisation</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8">Dernière mise à jour : {new Date().toLocaleDateString()}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptation des conditions</h2>
          <p>
            En accédant et en utilisant l'application ÉcoMouv', vous acceptez d'être lié par les présentes Conditions
            Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre application.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Description du service</h2>
          <p>
            ÉcoMouv' est une application qui vise à promouvoir et faciliter l'adoption de modes de transport
            écologiques. Elle propose notamment :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Un calculateur d'impact environnemental</li>
            <li>Une carte interactive des infrastructures de mobilité douce</li>
            <li>Des défis communautaires pour encourager les déplacements écologiques</li>
            <li>Des conseils pratiques pour adopter des modes de transport plus durables</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Compte utilisateur</h2>
          <p>
            Pour accéder à certaines fonctionnalités de l'application, vous devrez créer un compte utilisateur. Vous
            êtes responsable de maintenir la confidentialité de vos informations de connexion et de toutes les activités
            qui se produisent sous votre compte.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Règles d'utilisation</h2>
          <p>En utilisant notre application, vous vous engagez à :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fournir des informations exactes et complètes</li>
            <li>Ne pas utiliser l'application à des fins illégales ou non autorisées</li>
            <li>Ne pas tenter de nuire au bon fonctionnement de l'application</li>
            <li>Respecter les droits des autres utilisateurs</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur l'application ÉcoMouv' (textes, graphiques, logos, icônes, images, clips
            audio, téléchargements numériques, compilations de données) sont la propriété d'ÉcoMouv' ou de ses
            fournisseurs de contenu et sont protégés par les lois françaises et internationales relatives à la propriété
            intellectuelle.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Limitation de responsabilité</h2>
          <p>
            ÉcoMouv' s'efforce de fournir des informations exactes et à jour, mais ne garantit pas l'exactitude,
            l'exhaustivité ou la pertinence des informations fournies. L'utilisation de l'application se fait à vos
            propres risques.
          </p>
          <p>
            ÉcoMouv' ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation de
            l'application, y compris, mais sans s'y limiter, les pertes de données, les interruptions d'activité, ou
            tout autre dommage.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Modification des conditions</h2>
          <p>
            ÉcoMouv' se réserve le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès
            leur publication sur l'application. Il est de votre responsabilité de consulter régulièrement ces conditions
            pour vous tenir informé des éventuelles modifications.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Résiliation</h2>
          <p>
            ÉcoMouv' se réserve le droit, à sa seule discrétion, de suspendre ou de résilier votre accès à tout ou
            partie de l'application, sans préavis, pour tout comportement que nous jugeons contraire aux présentes
            conditions ou à la loi.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes conditions sont régies par le droit français. Tout litige relatif à l'interprétation ou à
            l'exécution des présentes conditions sera soumis aux tribunaux compétents de Paris, France.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact</h2>
          <p>
            Pour toute question concernant ces conditions, veuillez nous contacter à l'adresse suivante :
            contact@ecomouv.fr
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
