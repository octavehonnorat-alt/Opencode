import { Metadata } from "next";
import { site } from "@/config/theme";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site " + site.name,
};

export default function MentionsLegales() {
  return (
    <article className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-display text-4xl md:text-5xl font-bold text-lunar mb-12">
          Mentions légales<span className="text-accent">.</span>
        </h1>

        <div className="prose prose-invert max-w-none space-y-10 text-warm-light leading-relaxed">
          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Éditeur du site
            </h2>
            <p>
              Le site <strong className="text-lunar">{site.url}</strong> est édité par :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Raison sociale : {site.legal.company}</li>
              <li>Adresse : {site.legal.address}</li>
              <li>SIRET : {site.legal.siret}</li>
              <li>Email : <a href={`mailto:${site.legal.email}`} className="text-accent hover:underline">{site.legal.email}</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Directeur de la publication
            </h2>
            <p>{site.legal.publication}</p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Hébergeur
            </h2>
            <p>
              Le site est hébergé par :<br />
              {site.legal.host}
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons,
              logiciels, etc.) est la propriété exclusive de {site.legal.company} ou de ses
              partenaires et est protégé par les lois françaises et internationales relatives à
              la propriété intellectuelle.
            </p>
            <p className="mt-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout
              ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
              interdite, sauf autorisation écrite préalable de {site.legal.company}.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Limitation de responsabilité
            </h2>
            <p>
              {site.legal.company} s'efforce de fournir des informations aussi précises que
              possible. Toutefois, il ne pourra être tenu responsable des omissions, des
              inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou
              du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Cookies
            </h2>
            <p>
              Le site peut être amené à utiliser des cookies pour améliorer l'expérience de
              l'utilisateur. L'utilisateur peut refuser les cookies en modifiant les paramètres
              de son navigateur, ce qui peut toutefois affecter certaines fonctionnalités du site.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux de Paris seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Contact
            </h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez contacter :<br />
              <a href={`mailto:${site.legal.email}`} className="text-accent hover:underline">{site.legal.email}</a>
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
