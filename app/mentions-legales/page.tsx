import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function LegalNoticePage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8">Dernière mise à jour : {new Date().toLocaleDateString()}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Éditeur de l'application</h2>
          <p>L'application mobile ÉcoMouv' est éditée par :</p>
          <p className="mb-4">
            ÉcoMouv' SAS
            <br />
            Société par Actions Simplifiée au capital de 50 000 €<br />
            Immatriculée au RCS de Paris sous le numéro 123 456 789
            <br />
            Siège social : 123 Avenue de la Mobilité Durable, 75001 Paris, France
            <br />
            N° TVA intracommunautaire : FR 12 123456789
            <br />
            Téléphone : 01 23 45 67 89
            <br />
            Email : contact@ecomouv.fr
          </p>
          <p>Directeur de la publication : Jean Dupont, Président</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Hébergement</h2>
          <p>L'application ÉcoMouv' est hébergée par :</p>
          <p className="mb-4">
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789
            <br />
            États-Unis
            <br />
            https://vercel.com
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments constituant l'application ÉcoMouv' (textes, graphismes, logiciels, photographies,
            images, vidéos, sons, plans, logos, marques, etc.) est la propriété exclusive d'ÉcoMouv' SAS ou de ses
            partenaires. Ces éléments sont protégés par les lois relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie
            des éléments de l'application, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
            autorisation écrite préalable d'ÉcoMouv' SAS.
          </p>
          <p>
            Toute exploitation non autorisée de l'application ou de l'un des éléments qu'elle contient sera considérée
            comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et
            suivants du Code de Propriété Intellectuelle.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Données personnelles</h2>
          <p>
            Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre
            Politique de Confidentialité, accessible depuis l'application.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
            vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et
            d'opposition aux données vous concernant.
          </p>
          <p>
            Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter notre
            Délégué à la Protection des Données (DPO) à l'adresse email suivante : dpo@ecomouv.fr.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Cookies</h2>
          <p>
            L'application ÉcoMouv' utilise des cookies et technologies similaires pour améliorer votre expérience
            utilisateur. Les informations détaillées concernant l'utilisation de ces technologies sont disponibles dans
            notre Politique de Cookies, accessible depuis l'application.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Limitation de responsabilité</h2>
          <p>
            ÉcoMouv' s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations
            diffusées sur l'application, dont elle se réserve le droit de corriger le contenu à tout moment et sans
            préavis. Toutefois, ÉcoMouv' ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
            mises à disposition sur l'application.
          </p>
          <p>En conséquence, ÉcoMouv' décline toute responsabilité :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur
              l'application
            </li>
            <li>
              Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des
              informations mises à disposition sur l'application
            </li>
            <li>
              Et plus généralement, pour tous dommages, directs ou indirects, quelles qu'en soient les causes, origines,
              natures ou conséquences, provoqués en raison de l'accès de quiconque à l'application ou de l'impossibilité
              d'y accéder, de même que l'utilisation de l'application et/ou du crédit accordé à une quelconque
              information provenant directement ou indirectement de cette dernière
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Liens hypertextes</h2>
          <p>
            L'application ÉcoMouv' peut contenir des liens hypertextes vers d'autres sites internet ou applications.
            ÉcoMouv' n'exerce aucun contrôle sur ces sites et applications externes et ne peut être tenue responsable de
            leur contenu, de leur fonctionnement ou de leur accessibilité.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français
            seront seuls compétents.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact</h2>
          <p>
            Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter à l'adresse
            suivante : juridique@ecomouv.fr
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
