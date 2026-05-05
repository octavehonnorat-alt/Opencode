import { Metadata } from "next";
import { site } from "@/config/theme";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles",
};

export default function PolitiqueConfidentialite() {
  return (
    <article className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-display text-4xl md:text-5xl font-bold text-lunar mb-12">
          Politique de confidentialité<span className="text-accent">.</span>
        </h1>

        <div className="prose prose-invert max-w-none space-y-10 text-warm-light leading-relaxed">
          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Introduction
            </h2>
            <p>
              La présente politique de confidentialité décrit la manière dont {site.legal.company}
              (&quot;nous&quot;, &quot;notre&quot;) collecte, utilise et protège vos données
              personnelles lorsque vous visitez notre site {site.url}.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Responsable du traitement
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responsable : {site.legal.company}</li>
              <li>Adresse : {site.legal.address}</li>
              <li>DPO : {site.legal.dpo}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Données collectées
            </h2>
            <p>Nous pouvons collecter les données suivantes :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nom et prénom (via le formulaire de contact)</li>
              <li>Adresse email (via le formulaire de contact)</li>
              <li>Sujet et contenu du message</li>
              <li>Données de navigation (cookies analytiques, si acceptés)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Finalités du traitement
            </h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Répondre à vos demandes de contact</li>
              <li>Améliorer l'expérience utilisateur du site</li>
              <li>Établir des statistiques de fréquentation anonymisées</li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Base légale
            </h2>
            <p>
              Le traitement de vos données repose sur votre consentement (cookies) ou sur
              l'intérêt légitime (réponse aux demandes de contact), conformément au RGPD
              (Règlement Général sur la Protection des Données).
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Durée de conservation
            </h2>
            <p>
              Les données transmises via le formulaire de contact sont conservées pour une durée
              maximale de 12 mois à compter de leur réception. Les cookies de navigation sont
              conservés pour une durée maximale de 13 mois.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href={`mailto:${site.legal.dpo.split("—")[1]?.trim() || site.legal.email}`} className="text-accent hover:underline">
                {site.legal.dpo.split("—")[1]?.trim() || site.legal.email}
              </a>
            </p>
            <p className="mt-2">
              Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                www.cnil.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Cookies
            </h2>
            <p>
              Ce site utilise des cookies strictement nécessaires au fonctionnement du site.
              Aucun cookie publicitaire n'est utilisé. Les cookies analytiques, le cas échéant,
              ne seront déposés qu'avec votre consentement préalable.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Sécurité
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, modification, divulgation ou
              destruction.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl font-semibold text-lunar mb-4">
              Modifications
            </h2>
            <p>
              Nous nous réservons le droit de modifier la présente politique à tout moment. Toute
              modification sera publiée sur cette page avec une date de mise à jour révisée.
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
