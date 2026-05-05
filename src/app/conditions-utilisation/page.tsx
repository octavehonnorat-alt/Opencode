import { Metadata } from "next";
import { site } from "@/config/theme";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions générales d'utilisation du site",
};

export default function ConditionsUtilisation() {
  return (
    <article className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-display text-4xl md:text-5xl font-bold text-lunar mb-12">
          Conditions d'utilisation<span className="text-accent">.</span>
        </h1>

        <div className="prose prose-invert max-w-none space-y-10 text-warm-light leading-relaxed">
          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Objet
            </h2>
            <p>
              Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir
              les modalités et conditions d'utilisation du site {site.url} ainsi que les
              relations entre l'éditeur et l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Acceptation
            </h2>
            <p>
              L'utilisation du site implique l'acceptation pleine et entière des présentes CGU.
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Accès au site
            </h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès à
              Internet. Tous les coûts afférents à l'accès au site (matériel informatique,
              connexion Internet, etc.) sont à la charge de l'utilisateur.
            </p>
            <p className="mt-4">
              L'éditeur se réserve le droit de suspendre, modifier ou interrompre l'accès au
              site à tout moment, sans préavis ni indemnité.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Utilisation du formulaire de contact
            </h2>
            <p>
              L'utilisateur s'engage à fournir des informations exactes, à jour et complètes
              lors de l'utilisation du formulaire de contact. Il s'interdit toute utilisation
              abusive du formulaire (spam, contenus illicites, messages diffamatoires, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              Tous les éléments du site (textes, images, graphismes, logo, icônes, etc.) sont
              la propriété exclusive de {site.legal.company} ou de ses partenaires et sont
              protégés par le droit de la propriété intellectuelle.
            </p>
            <p className="mt-4">
              Toute reproduction, représentation, modification ou distribution, même partielle,
              du contenu du site est interdite sans l'autorisation écrite préalable de l'éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Limitation de responsabilité
            </h2>
            <p>
              L'éditeur ne saurait être tenu responsable des dommages directs ou indirects
              résultant de l'utilisation du site, de l'impossibilité d'y accéder ou de
              l'utilisation de liens hypertextes renvoyant vers des sites tiers.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Liens hypertextes
            </h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. L'éditeur n'exerce aucun
              contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur
              contenu ou aux dommages éventuels résultant de leur consultation.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige relatif à
              l'interprétation ou à l'exécution des présentes sera soumis aux tribunaux
              compétents de Paris.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Modifications
            </h2>
            <p>
              L'éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les
              modifications prennent effet dès leur publication sur le site. L'utilisateur est
              invité à consulter régulièrement les CGU.
            </p>
          </section>
        </div>

        <p className="text-mono text-xs text-warm-light/40 mt-16">
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </article>
  );
}
