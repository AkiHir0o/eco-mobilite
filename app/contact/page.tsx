import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Contactez-nous</h1>
        <p className="text-gray-600 mb-8">
          Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Formulaire de contact</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input id="name" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Sélectionnez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="question">Question générale</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                        <SelectItem value="partnership">Partenariat</SelectItem>
                        <SelectItem value="bug">Signaler un problème</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Détaillez votre demande ici..." className="min-h-[150px]" />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-eco-600 focus:ring-eco-500"
                    />
                    <Label htmlFor="privacy" className="text-sm text-gray-600">
                      J'accepte que mes données soient traitées conformément à la{" "}
                      <a href="/confidentialite" className="text-eco-600 hover:underline">
                        politique de confidentialité
                      </a>
                      .
                    </Label>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="bg-eco-600 hover:bg-eco-700">
                  <Send className="mr-2 h-4 w-4" /> Envoyer le message
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Questions fréquentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg mb-1">Comment fonctionne le calculateur d'impact ?</h3>
                    <p className="text-gray-600">
                      Notre calculateur utilise des données scientifiques sur les émissions de CO2, la consommation de
                      calories et les coûts moyens des différents modes de transport pour estimer l'impact de vos
                      déplacements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg mb-1">Comment puis-je participer au défi communautaire ?</h3>
                    <p className="text-gray-600">
                      Rendez-vous sur la page "Défi" et remplissez le formulaire d'engagement. Vous pouvez ensuite
                      suivre votre contribution et celle de la communauté en temps réel.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg mb-1">Les données de la carte sont-elles à jour ?</h3>
                    <p className="text-gray-600">
                      Nous mettons régulièrement à jour nos données cartographiques. Si vous constatez une inexactitude,
                      n'hésitez pas à nous le signaler via ce formulaire de contact.
                    </p>
                  </div>

                  <div className="flex items-center p-4 bg-eco-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-eco-600 mr-3 flex-shrink-0" />
                    <p className="text-eco-700">
                      Vous n'avez pas trouvé de réponse à votre question ? Contactez-nous directement et nous vous
                      répondrons dans les 24 heures ouvrées.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Nos coordonnées</CardTitle>
                <CardDescription>Plusieurs façons de nous joindre</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-eco-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">contact@ecomouv.fr</p>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24h ouvrées</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-eco-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-gray-600">01 23 45 67 89</p>
                    <p className="text-sm text-gray-500 mt-1">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-eco-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-gray-600">
                      123 Avenue de la Mobilité Durable
                      <br />
                      75001 Paris, France
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Sur rendez-vous uniquement</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-medium mb-2">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-eco-50 hover:bg-eco-100 text-eco-600 p-2 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-eco-50 hover:bg-eco-100 text-eco-600 p-2 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-eco-50 hover:bg-eco-100 text-eco-600 p-2 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-eco-50 hover:bg-eco-100 text-eco-600 p-2 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 bg-eco-50 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3">Horaires de disponibilité</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h - 14h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-eco-200">
                <p className="text-sm text-eco-700">
                  Notre équipe s'engage à vous répondre dans les meilleurs délais. Merci de votre compréhension.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
