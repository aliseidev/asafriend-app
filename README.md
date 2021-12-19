# As a friend - app

Questa è una piccola web app create per aiutare mia moglie nella gestione del suo gruppo di lettura di Corano.

In pratica si tratta di un gruppo di 60 persone che ogni 10 giorni legge un capitolo del Corano che è composto esattamente da 60 capitoli. Alla fine del periodo di lettura i capitoli vengono riassegnati ed ogni persona legge il capitolo successivo, cosicchè dopo ~600 giorni tutti abbiano letto tutto il Corano.

Per aggiornarsi a vicenda dell'avvenuta lettura e l'assegnazione del capitolo, utilizzano un gruppo Whatsapp.

La web app serve a mia moglie per segnarsi chi ha letto quale capitolo e la rotazione corrente dei capitoli dato che Whatsapp non fornisce alcun tipo di API nè bot.

## 📋 La web app

Lo stack utilizzato è:

- **React**, gestendo lo stato con la **Context API** e **useReducer**.
- **NodeJS**, utilizzando **ExpressJS**.
- **Vite**, rispetto a **Webpack** è molto più performante e semplice da utilizzare.
- **TailwindCSS**, molto comodo ed ho mitigato il problema dell'"HTML troppo lungo" utilizzando una libreria chiamata `tailwind-styled-components` (vedi https://github.com/MathiasGilson/tailwind-styled-component).

***NOTA SUL DATABASE***: Date le dimensioni estremamente ridotte dei dati e la semplicità delle operazione ho optato per salvare i dati in un file JSON che viene sovrascritto quando è chiamata una POST, tale call avviene ogni qualvolta avviene una modifica nello stato di React. E' sicuramente un approccio scorretto, ma dal momento che è self-hosted e quindi non ho problemi di costi di banda o chiamate, mi accontento così.

## 🐋 Deploy

Sia il front-end che il back-end sono containerizzati con **Docker**, gli script di creazione container aggiungono dei `labels` per **Traefik** che fa semplicemente da _Load Balancer_.

Per eseguire il deploy:

## 🎯 Roadmap

Mi piacerebbe aggiungere alcune feature giusto per vedere dove posso spingermi. Ho avuto l'idea di aggiungere una semplice autenticazione o anche solo un'ID da salvare in locale e permettere al gruppo di usare direttamente l'app anzichè farla aggiornare manualmente a mia moglie, ma entrambi sappiamo che non la userà nessuno: Mandare un messaggio Whatsapp è più comodo.

1. Montare la cartella `Data` dove è contenuto il file di database JSON come volume del container 📁
2. Implementare un thunk per aggiornare il back-end ⚙️
3. Creare modali per conferma e avvisi anzichè usare gli alert ℹ️
4. Creare un contatore dei giorni quando si inizia il turno di lettura. 📅
5. Arrivati a 8 giorno, indicare i rimanenti in una piccola lista così da poterli mandare un messaggio privato di reminder. ⌛
6. Dark mode. 🌙
