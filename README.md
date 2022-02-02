# Configurer une application Node.js avec ESLint et Prettier

Ce dépôt est le résultat de l'article : "Test de performance entre Fastify.js, Express.js et Node.js". Vous pouvez le consulter sur [kilukru.dev](https://www.kilukru.dev/test-de-performance-entre-fastify-js-express-js-et-node-js/)

## Installation de `wrk`

[wrk](https://github.com/wg/wrk) est un outil moderne de benchmarking HTTP capable de générer une charge significative lorsqu'il est exécuté sur un seul CPU multi-core. Il combine une conception multithread avec des systèmes de notification d'événements évolutifs tels que epoll et kqueue.

Sous macOS, il peut être installé avec `brew install wrk`. Sous Linux, il peut être installé avec `sudo apt-get install wrk`.

## Benchmarking avec `wrk`

### Test avec express

```bash
node express.js
```

### Test avec pur nodejs

```bash
node bare-node.js
```

### Test avec fastify

```bash
node fastify.js
```

### Dans un autre terminal on roule `wrk`

```bash
wrk -t12 -c400 -d10s "http://localhost:4000/api?name=Jean&lastname=Tremblay"
```

## Contact

- [Web](https://alfreddagenais.com/)
- [Blogue](https://www.kilukru.dev/)
- [Linkedin](https://linkedin.com/in/AlfredDagenais)
- [Twitter](https://twitter.com/ProgrammeurWeb)
- [GitHub](https://github.com/alfreddagenais/)
- [Instagram](https://instagram.com/alfreddagenaisweb)
