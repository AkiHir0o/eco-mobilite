import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8">Dernière mise à jour : {new Date().toLocaleDateString()}</p>

          <p className="mb-4">
            La protection de vos données personnelles est une priorité pour ÉcoMouv'. Cette politique de confidentialité
            vous informe sur la manière dont nous collectons, utilisons et protégeons vos données personnelles
            conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Responsable du traitement</h2>
          <p>Le responsable du traitement des données personnelles collectées via l'application ÉcoMouv' est :</p>
          <p className="mb-4">
            ÉcoMouv' SAS
            <br />
            123 Avenue de la Mobilité Durable
            <br />
            75001 Paris, France
            <br />
            Email : dpo@ecomouv.fr
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Données collectées</h2>
          <p>Nous collectons les données suivantes :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Données d'identification</strong> : nom, prénom, adresse email, identifiants de connexion
            </li>
            <li>
              <strong>Données de localisation</strong> : position géographique (avec votre consentement explicite)
            </li>
            <li>
              <strong>Données d'utilisation</strong> : modes de transport utilisés, distances parcourues, fréquence
              d'utilisation
            </li>
            <li>
              <strong>Données techniques</strong> : adresse IP, type d'appareil, navigateur, système d'exploitation
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Finalités du traitement</h2>
          <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Création et gestion de votre compte utilisateur</li>
            <li>Fourniture des services de l'application (calcul d'impact, recommandations personnalisées)</li>
            <li>Amélioration de nos services et développement de nouvelles fonctionnalités</li>
            <li>Envoi d'informations et de communications relatives à nos services (avec votre consentement)</li>
            <li>Réalisation de statistiques anonymisées sur l'utilisation de l'application</li>
            <li>Respect de nos obligations légales et réglementaires</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Base légale du traitement</h2>
          <p>Le traitement de vos données personnelles est fondé sur :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>L'exécution du contrat qui nous lie lorsque vous utilisez notre application</li>
            <li>
              Votre consentement explicite pour certains traitements spécifiques (géolocalisation, communications
              marketing)
            </li>
            <li>Notre intérêt légitime à améliorer et promouvoir nos services</li>
            <li>Le respect de nos obligations légales</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Durée de conservation</h2>
          <p>
            Nous conservons vos données personnelles uniquement pendant la durée nécessaire à la réalisation des
            finalités pour lesquelles elles ont été collectées, dans le respect des délais de prescription légale.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Données de compte : pendant toute la durée de votre inscription, puis 3 ans après votre dernière activité
            </li>
            <li>Données de localisation : 12 mois maximum</li>
            <li>Données d'utilisation : 24 mois à des fins d'analyse</li>
            <li>Données de paiement : durée légale de conservation à des fins comptables</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Destinataires des données</h2>
          <p>Vos données personnelles sont destinées :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Aux équipes internes d'ÉcoMouv' habilitées à traiter vos données</li>
            <li>À nos sous-traitants techniques (hébergement, maintenance, support)</li>
            <li>À nos partenaires, uniquement avec votre consentement explicite</li>
          </ul>
          <p>
            Nous nous engageons à ne pas vendre, louer ou céder vos données personnelles à des tiers sans votre
            consentement explicite, sauf obligation légale.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Transfert de données hors UE</h2>
          <p>
            Certaines de vos données peuvent être transférées vers des serveurs situés en dehors de l'Union Européenne.
            Dans ce cas, nous nous assurons que ces transferts sont effectués vers des pays offrant un niveau de
            protection adéquat ou encadrés par des garanties appropriées (clauses contractuelles types, décision
            d'adéquation, etc.).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Droit d'accès</strong> : obtenir la confirmation que des données vous concernant sont traitées et
              en obtenir une copie
            </li>
            <li>
              <strong>Droit de rectification</strong> : faire corriger des données inexactes ou incomplètes
            </li>
            <li>
              <strong>Droit à l'effacement</strong> : demander la suppression de vos données dans certains cas
            </li>
            <li>
              <strong>Droit à la limitation du traitement</strong> : demander la suspension temporaire du traitement
            </li>
            <li>
              <strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré
            </li>
            <li>
              <strong>Droit d'opposition</strong> : vous opposer au traitement de vos données pour des raisons légitimes
            </li>
            <li>
              <strong>Droit de retirer votre consentement</strong> à tout moment lorsque le traitement est fondé sur
              celui-ci
            </li>
            <li>
              <strong>Droit de définir des directives</strong> relatives au sort de vos données après votre décès
            </li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter par email à dpo@ecomouv.fr ou par courrier à l'adresse
            indiquée ci-dessus. Nous nous engageons à répondre à vos demandes dans un délai d'un mois.
          </p>
          <p>
            Vous avez également le droit d'introduire une réclamation auprès de la Commission Nationale de
            l'Informatique et des Libertés (CNIL).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
            personnelles contre la destruction, la perte, l'altération, la divulgation non autorisée ou l'accès non
            autorisé.
          </p>
          <p>Ces mesures incluent notamment :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Le chiffrement des données sensibles</li>
            <li>Des procédures d'authentification sécurisées</li>
            <li>Des audits de sécurité réguliers</li>
            <li>La formation de notre personnel aux bonnes pratiques en matière de protection des données</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. Cookies et technologies similaires</h2>
          <p>
            Notre application utilise des cookies et technologies similaires pour améliorer votre expérience utilisateur
            et analyser l'utilisation de nos services. Vous pouvez gérer vos préférences concernant ces technologies via
            les paramètres de l'application.
          </p>
          <p>Pour plus d'informations, veuillez consulter notre Politique de Cookies.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">11. Modification de la politique de confidentialité</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
            modification sera publiée sur cette page et, si les modifications sont significatives, nous vous en
            informerons par email ou via une notification dans l'application.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou vos données personnelles, veuillez
            contacter notre Délégué à la Protection des Données (DPO) :
          </p>
          <p>
            Email : dpo@ecomouv.fr
            <br />
            Adresse : ÉcoMouv' - DPO, 123 Avenue de la Mobilité Durable, 75001 Paris, France
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
