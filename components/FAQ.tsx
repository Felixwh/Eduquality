import FAQNode from "./FAQNode";

const FAQ = () => {
  return (
    <div className="mt-40 md:mt-52 px-2 sm:px-4 md:px-0">
      <FAQNode
        title="Was erwarten wir von dir?"
        text={
          <p>
            <br />
            Wir wollen dir und deiner Tutor*in möglichst viele Freiheiten geben,
            um euch möglichst gut und flexibel organisieren zu können. Damit das
            gut klappt erwarten wir von euch:
            <br />
            <br />- Einen Respektvollen Umgang miteinander
            <br />
            - Verbindlichkeit
            <br />- und ein wenig Durchhaltevermögen :)
          </p>
        }
      />
      <FAQNode
        title="Wie kann ich Tutor werden?"
        text={
          <p>
            <br />
            Leiste deinen Beitrag zur Chancengleichheit und unterstütze
            bildungsbenachteiligte Kinder und Jugendliche!
            <br />
            <br />
            Mehr informationen unter
            <br />
            www.eduquality.de
            <br />
            +49 160 8340629
            <br />
            +49 152 03365330
          </p>
        }
      />
      <FAQNode
        title="Wie wird Qualität und Sicherheit gewährleistet?"
        text={
          <p>
            <br />
            Alle Tutor*innen bei Eduquality unterschreiben einen sorgfältig
            ausgearbeiteten Verhaltenskodex und absolvieren ein
            Vorstellungsgespräch. Dabei prüfen wir ihre Motivation und
            Intention, sich bei uns zu engagieren, sowie ihre Fachkenntnisse und
            Vorerfahrung. Durch unsere Kooperation mit dem Kreisjugendring
            nehmen unsere Tutoren auch einen Workshop zur sozialen und
            ehrenamtlichen Arbeit von erfahrenen Sozialarbeitern teil.
          </p>
        }
      />
      <FAQNode
        title="Wie kann mein Kind teilnehmen?"
        text={
          <p>
            <br />
            Wenn Ihr Kind Interesse an unserem Angebot hat, dann kontaktieren
            Sie uns am besten direkt über Whatsapp oder per Mail. So können wir
            ein erstes Kennenlerngespräch vereinbaren und ggf. offene Fragen
            klären. Entscheiden Sie sich dazu mitzumachen, bräuchten wir nur
            noch eine unterschrieben Einverständniserklärung von ihnen, dann
            kann es losgehen
          </p>
        }
      />
    </div>
  );
};

export default FAQ;
