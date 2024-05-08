# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# bloc-notes
## React-markdown ne fonctionne pas dans notre cas
GPT propos d'utiliser cette librairie comme alternative pour les problemes de sécurité lié au dangerouslySetInnerHTML.
J'ai essayé de l'utiliser cependant celui ci wrap tout dans une balise <p> meme si on ecrit ##text (qui est cencé nous renvoyer une balise h2).