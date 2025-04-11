import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-100 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="ÉcoMouv' Logo" width={40} height={40} className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#1E3A29]">ÉcoMouv'</span>
                <span className="text-xs text-eco-600 -mt-1">Moins de moteur, plus de bonheur</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Votre compagnon pour une mobilité plus verte et durable au quotidien.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">Fonctionnalités</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculateur" className="text-gray-600 hover:text-eco-600">
                  Calculateur d'impact
                </Link>
              </li>
              <li>
                <Link href="/carte" className="text-gray-600 hover:text-eco-600">
                  Carte interactive
                </Link>
              </li>
              <li>
                <Link href="/defi" className="text-gray-600 hover:text-eco-600">
                  Défi communautaire
                </Link>
              </li>
              <li>
                <Link href="/conseils" className="text-gray-600 hover:text-eco-600">
                  Conseils pratiques
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cgu" className="text-gray-600 hover:text-eco-600">
                  Conditions générales d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-gray-600 hover:text-eco-600">
                  Conditions générales de vente
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-gray-600 hover:text-eco-600">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-600 hover:text-eco-600">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-600 hover:text-eco-600">
                  Empreinte carbone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">contact@ecomouv.fr</li>
              <li className="text-gray-600">01 23 45 67 89</li>
            </ul>
            <Button asChild className="bg-eco-600 hover:bg-eco-700 text-white mt-4">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} ÉcoMouv'. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
