### Iniciando uma aplicação em node com npm

```bash
yarn init -y
```
### Instalando typescript

```bash
yarn add typescript --dev
```

### Iniciando com typescript

```bash
yarn tsc --init
```

### Instalando o jest

```bash
yarn add jest @types/jest --dev
```

### Iniciando uma aplicação jest e gerando um arquivo de configuração

```bash
yarn jest --init
```

### Instalando compilador de ts para js

```bash
yarn add @swc/jest @swc/core --dev
```


### Instalando ts-node 

```bash
yarn add ts-node --dev
```

### Configuração para compilação

~~~json
  transform: {
    "^.+\\.ts?$": [
      "@swc/jest"
    ]
  },
~~~

### Configuração para considerar a pasta test

~~~json
testMatch: [
    "**/test/*.test.js?(x)",
],
~~~


### Rodando teste com yarn

```bash
yarn run test
```