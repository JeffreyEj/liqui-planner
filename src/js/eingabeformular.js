"use strict";

const eingabeformular = {

    formulardaten_holen(e) {

        let typ;

        if (e.target.elements.ausgabe.checked === true) {
            typ = "ausgabe";
        } else if (e.target.elements.einnahme.checked === true) {
            typ = "einnahme";
        }

        return {
            titel: e.target.elements.titel.value,
            betrag: e.target.elements.betrag.value,
            typ: typ,
            datum: e.target.elements.datum.valueAsDate
        }
    },

    absenden_event_hinzufuegen(eingabeformular) {
        eingabeformular.querySelector("#eingabeformular").addEventListener("submit", e => {
            e.preventDefault();
            // Formulardaten holen
            console.log(e);
            let formulardaten = this.formulardaten_holen(e);
            console.log(formulardaten);
            // Formulardaten verarbeiten
            // Formulardaten validieren
            // wenn die Formulardaten valide sind
                // Eintrag zum Haushaltsbuch hinzufügen
                   // wenn bereits Fehlermeldung angezeigt wird
                    // Fehldermeldung entfernen
                // Formular zurücksetzen
                // Datum auf das heutigen Tag setzen
            // wenn die Formulardaten NICHT valide sind
                // wenn bereits Fehlermeldung angezeigt wird
                    // Fehldermeldung entfernen
                // Fehlermeldung im Eingabeformular-Container anzeigen
        });
    },

    html_generieren() {
        
        let eingabeformular = document.createElement("section");
        eingabeformular.setAttribute("id", "eingabeformular-container");
        eingabeformular.innerHTML = `<form id="eingabeformular" action="#" method="get"></form>
        <div class="eingabeformular-zeile">
            <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
        </div>
        <div class="eingabeformular-zeile">
            <div class="titel-typ-eingabe-gruppe">
                <label for="titel">Titel</label>
                <input type="text" id="titel" form="eingabeformular" name="titel" placeholder="z.B. Einkaufen" size="10" title="Titel des Eintrags">
                <input type="radio" id="einnahme" name="typ" value="einnahme" form="eingabeformular" title="Typ des Eintrags">
                <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
                <input type="radio" id="ausgabe" name="typ" value="ausgabe" form="eingabeformular" title="Typ des Eintrags" checked>
                <label for="ausgabe" title="Typ des Eintrags">Ausgabe</label>
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <div class="betrag-datum-eingabe-gruppe">
                <label for="betrag">Betrag</label>
                <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10" step="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)">
                <label for="datum">Datum</label>
                <input type="date" id="datum" name="datum" form="eingabeformular" placeholder="jjjj-mm-tt" size="10" title="Datum des Eintrags (Format: jjjj-mm-tt)">
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
        </div>`;

        this.absenden_event_hinzufuegen(eingabeformular);

        return eingabeformular;
    },

    anzeigen() {
        document.querySelector("#navigationsleiste").insertAdjacentElement("afterend", this.html_generieren());
        // Datum auf das heutigen Tag setzen
    }

};