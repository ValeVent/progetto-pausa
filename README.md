Progetto Pausa
Questo mini-progetto è un semplice timer interattivo progettato per aiutarti a gestire le pause, mostrando l'ora di inizio e di fine di un periodo di rilassamento predefinito. L'interfaccia è minimale e pensata per un utilizzo rapido.

Descrizione Approfondita del Progetto
L'applicazione permette all'utente di avviare una "pausa" cliccando su un pulsante. Una volta attivata, visualizza l'orario di inizio della pausa e l'orario previsto per la sua fine. Il pulsante cambia testo per indicare che la pausa è in corso e permette di "terminare" la pausa in anticipo, resettando gli orari. Il tutto è arricchito da uno sfondo video rilassante.

Tecnologie Utilizzate
HTML5: Struttura semantica del progetto.

CSS3: Stile e layout, inclusi effetti sul pulsante e testo, e gestione del video di sfondo.

JavaScript: Logica di interazione del timer e manipolazione del DOM per aggiornare gli orari e lo stato del pulsante.

Funzionalità Principali
Avvio/Fine Pausa: Un singolo pulsante per iniziare o terminare la pausa.

Visualizzazione Orari: Mostra l'orario esatto di inizio e di fine della pausa.

Sfondo Video: Un video a schermo intero in loop crea un'atmosfera immersiva e rilassante.

Interfaccia Intuitiva: Design minimalista e chiaro per un'esperienza utente semplice.

Calcolo della Pausa
La durata della pausa è predefinita nel codice JavaScript:

Viene aggiunta 1 minuto (60000ms) all'orario attuale per l'inizio pausa (per simulare un avvio immediato con un piccolo ritardo).

Vengono aggiunti 15 minuti (900000ms) all'orario di inizio per calcolare l'orario di fine pausa.

Come Avviare il Progetto
Segui questi semplici passaggi per visualizzare il progetto localmente:

Prerequisiti
Non sono richiesti particolari prerequisiti oltre a un browser web moderno.

Installazione
Clona il repository (o scarica la cartella del progetto):

git clone https://github.com/ValeVent/progetto-pausa.git

Assicurati di sostituire 'progetto-pausa.git' con il nome esatto del tuo repository

Naviga nella directory del progetto:

cd progetto-pausa

Avvio dell'Applicazione
Assicurati che il file video (media/855391-uhd_3840_2160_25fps.mp4) sia presente nella cartella media all'interno della directory del progetto.

Apri il file index.html (o il nome del tuo file HTML principale) direttamente nel tuo browser web.

Se hai installato http-server globalmente (opzionale, per un server locale):

npm install -g http-server
```bash
http-server .

L'applicazione sarà accessibile all'indirizzo mostrato dal server (es. http://localhost:8080).

Stato del Progetto
Questo progetto è un esempio funzionale e autonomo di utilizzo di HTML, CSS e JavaScript per un'interfaccia utente interattiva.

Contatti
GitHub: https://github.com/ValeVent

LinkedIn: https://www.linkedin.com/in/valentina-venturo

Sito Web: http://www.valentinaventuro.it
