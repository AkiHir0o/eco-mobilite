import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Server, AlertTriangle } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Empreinte carbone de ce projet</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8">
            Bien que notre mission soit de promouvoir une mobilité plus écologique, nous reconnaissons que la création
            même de cette application a un impact environnemental. Voici une estimation transparente de notre empreinte
            carbone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-amber-100">
                    <Server className="h-5 w-5 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">Développement IA</CardTitle>
                </div>
                <CardDescription>Empreinte des modèles d'IA utilisés pour la création</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Ce projet a été développé avec l'aide de grands modèles de langage (LLM), qui ont une empreinte
                  carbone significative due à leur entraînement et à leur inférence.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Nombre de prompts</span>
                      <span className="font-medium">~70 prompts</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Empreinte estimée par prompt</span>
                      <span className="font-medium">~10-50g CO₂e</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Empreinte totale estimée</span>
                      <span className="font-medium">~0.7-3.5kg CO₂e</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-amber-50 rounded-lg text-sm">
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Ces chiffres sont des estimations basées sur des recherches récentes sur l'empreinte carbone des
                      LLM. L'impact réel peut varier en fonction de nombreux facteurs.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-eco-100">
                    <Leaf className="h-5 w-5 text-eco-600" />
                  </div>
                  <CardTitle className="text-xl">Notre compensation</CardTitle>
                </div>
                <CardDescription>Comment nous compensons notre empreinte</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Nous nous engageons à compenser l'empreinte carbone de ce projet et à promouvoir des pratiques de
                  développement plus durables.
                </p>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-eco-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-eco-700 text-xs">1</span>
                    </div>
                    <span>
                      <strong>Compensation carbone</strong> : Nous investissons dans des projets de reforestation et
                      d'énergie renouvelable pour compenser notre empreinte.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-eco-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-eco-700 text-xs">2</span>
                    </div>
                    <span>
                      <strong>Efficacité énergétique</strong> : Nous optimisons notre code pour réduire la consommation
                      d'énergie lors de l'exécution de l'application.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-eco-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-eco-700 text-xs">3</span>
                    </div>
                    <span>
                      <strong>Impact positif</strong> : Notre application vise à réduire les émissions de CO₂ liées aux
                      transports, ce qui compense largement son empreinte de développement.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 p-3 bg-eco-50 rounded-lg text-sm">
                  <p className="text-eco-700">
                    <strong>Notre objectif</strong> : Si chaque utilisateur de notre application réduit ses émissions de
                    CO₂ de seulement 1kg grâce à nos conseils, l'impact positif dépassera rapidement l'empreinte de
                    développement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-4">Méthodologie et sources</h2>
          <p className="mb-4">
            L'estimation de l'empreinte carbone des modèles d'IA est un domaine en évolution rapide. Nos calculs sont
            basés sur plusieurs études récentes :
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Des recherches suggèrent qu'une requête typique à un grand modèle de langage (LLM) peut émettre entre 10
              et 50 grammes de CO₂e, selon la complexité du modèle et la longueur de la conversation.
            </li>
            <li>
              L'empreinte varie considérablement en fonction du mix énergétique des centres de données où les modèles
              sont hébergés.
            </li>
            <li>
              Les modèles plus récents et optimisés tendent à avoir une empreinte par requête plus faible que les
              générations précédentes.
            </li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-2">Comparaison avec d'autres activités quotidiennes</h3>
            <p className="mb-4">Pour mettre ces chiffres en perspective :</p>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Envoyer un email avec pièce jointe</span>
                <span className="font-medium">~10g CO₂e</span>
              </li>
              <li className="flex justify-between items-center border-t border-gray-200 pt-2">
                <span>Recherche Google</span>
                <span className="font-medium">~0.2-7g CO₂e</span>
              </li>
              <li className="flex justify-between items-center border-t border-gray-200 pt-2">
                <span>Streaming vidéo (1 heure)</span>
                <span className="font-medium">~36-380g CO₂e</span>
              </li>
              <li className="flex justify-between items-center border-t border-gray-200 pt-2">
                <span>Trajet en voiture (1 km)</span>
                <span className="font-medium">~120-140g CO₂e</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4">Notre engagement pour l'avenir</h2>
          <p className="mb-4">
            Nous nous engageons à continuer de surveiller et de réduire notre empreinte carbone numérique. Voici nos
            actions futures :
          </p>

          <ul className="list-disc pl-6 mb-8">
            <li>Optimisation continue du code pour réduire la consommation d'énergie</li>
            <li>Utilisation de fournisseurs d'hébergement alimentés par des énergies renouvelables</li>
            <li>Mise à jour régulière de cette page avec des données plus précises sur notre impact</li>
            <li>
              Développement de fonctionnalités permettant aux utilisateurs de suivre l'impact positif de leurs
              changements de comportement
            </li>
          </ul>

          <p className="text-sm text-gray-500 italic">
            Dernière mise à jour de cette estimation : {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
