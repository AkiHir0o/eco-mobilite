import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function CGVPage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8">Dernière mise à jour : {new Date().toLocaleDateString()}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société
            ÉcoMouv', ci-après dénommée "le Prestataire", et toute personne physique ou morale, ci-après dénommée "le
            Client", souhaitant souscrire à nos services premium.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Services proposés</h2>
          <p>ÉcoMouv' propose une application de base gratuite ainsi que des services premium payants incluant :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Accès à des fonctionnalités avancées de calcul d'impact environnemental</li>
            <li>Rapports détaillés personnalisés sur vos habitudes de déplacement</li>
            <li>Accès prioritaire aux nouveautés</li>
            <li>Absence de publicités</li>
            <li>Support client prioritaire</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Prix et modalités de paiement</h2>
          <p>
            Les prix de nos services premium sont indiqués en euros et toutes taxes comprises (TTC). ÉcoMouv' se réserve
            le droit de modifier ses prix à tout moment, mais les services seront facturés sur la base des tarifs en
            vigueur au moment de la validation de la commande.
          </p>
          <p>
            Le paiement s'effectue en ligne par carte bancaire ou via les plateformes de paiement sécurisées proposées
            lors de la souscription. L'abonnement peut être mensuel ou annuel, avec renouvellement automatique sauf
            résiliation par le Client.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Durée et résiliation</h2>
          <p>
            L'abonnement aux services premium est conclu pour une durée indéterminée avec une période minimale
            d'engagement selon la formule choisie (mensuelle ou annuelle).
          </p>
          <p>
            Le Client peut résilier son abonnement à tout moment depuis son espace personnel sur l'application. La
            résiliation prendra effet à la fin de la période d'abonnement en cours, sans remboursement prorata temporis.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Droit de rétractation</h2>
          <p>
            Conformément aux dispositions légales en vigueur, le Client dispose d'un délai de quatorze (14) jours à
            compter de la souscription pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à
            payer de pénalités.
          </p>
          <p>
            Pour exercer ce droit, le Client doit notifier sa décision de rétractation par email à l'adresse :
            contact@ecomouv.fr ou par courrier à l'adresse postale indiquée dans les mentions légales.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Responsabilité</h2>
          <p>
            ÉcoMouv' s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la meilleure qualité et
            continuité de ses services. Toutefois, sa responsabilité ne saurait être engagée en cas de force majeure ou
            de faits indépendants de sa volonté.
          </p>
          <p>
            Les informations et conseils fournis par l'application sont donnés à titre indicatif et ne sauraient engager
            la responsabilité d'ÉcoMouv' en cas d'inexactitude.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments constituant l'application ÉcoMouv' (textes, graphiques, logiciels, images, etc.) est
            la propriété exclusive du Prestataire et est protégé par les lois relatives à la propriété intellectuelle.
          </p>
          <p>
            L'abonnement aux services premium ne confère au Client aucun droit de propriété sur ces éléments. Toute
            reproduction, représentation, modification ou exploitation non expressément autorisée est strictement
            interdite.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Protection des données personnelles</h2>
          <p>
            Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion de la relation
            client et à l'amélioration des services. Conformément au Règlement Général sur la Protection des Données
            (RGPD), le Client dispose d'un droit d'accès, de rectification et de suppression de ses données.
          </p>
          <p>Pour plus d'informations, veuillez consulter notre Politique de Confidentialité.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Service client et réclamations</h2>
          <p>
            Pour toute question ou réclamation, le Client peut contacter notre service client par email à l'adresse :
            support@ecomouv.fr ou via le formulaire de contact disponible sur l'application.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée
            avant toute action judiciaire. À défaut, les tribunaux français seront seuls compétents.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">11. Médiation</h2>
          <p>
            Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, le
            Client peut recourir au service de médiation proposé par ÉcoMouv'. Le médiateur tentera, en toute
            indépendance et impartialité, de rapprocher les parties en vue d'aboutir à une solution amiable.
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
