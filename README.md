# Match to Match
### Progetto per React JS

Obiettivo:
- Homepage:
  - come da Figma (versione mobile)
  - le card aprono il profilo come nella chat, ma in una nuova pagina (non in overlay)
  - mappa: statica, o se siamo troppo forti con API
- Match:
  - come da Figma (versione mobile)
  - le card aprono il profilo come nella chat, ma in una nuova pagina (non in overlay)
- Chat:
  - chat finta, non puoi scrivere i messaggi (solo se troppo forti)
- Login:
  - per ora solo presentazione, poi vediamo se renderlo funzionante

## TO DO
1. top navbar
1. style: padding, color, typo, border, background
1. context per stato logged 
1. form login > Franci
1. explore > Gaia 
1. chat > Fabio
1. match > Alessia

## DONE
1. cartella assets con tutte le immagini
1. bottom navbar
1. card
1. button
1. searchbar
1. style: padding, color, typo, border, background

## COMMIT message conventions:

[This commit will...]  "tipo(cosa): descrizione breve" (max 50ch)

| Tipo | Quando si usa | Esempio |
|------|---------------|---------|
| `feat` | Nuova funzionalità visibile all'utente | aggiungere la pagina profilo |
| `fix` | Correzione di un bug | bottone che non rispondeva al click |
| `refactor` | Riscrittura di codice esistente senza cambiare comportamento | rinominare variabili, estrarre un componente |
| `style` | Formattazione pura, zero logica | indentazione, virgole, punto e virgola |
| `docs` | Solo documentazione | aggiornare il README |
| `test` | Aggiungere o correggere test | aggiungere unit test al Button |
| `build` | Dipendenze e sistema di build | modificare vite.config, aggiornare npm |
| `chore` | Manutenzione generica che non entra in nessuna delle altre | aggiornare .gitignore, rinominare cartelle |
| `ci` | Pipeline CI/CD | modificare GitHub Actions |
| `perf` | Ottimizzazione delle performance | ridurre re-render, lazy loading |
| `revert` | Annullare un commit precedente | — |
