# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **src/app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **example** directory and create a blank **src/app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Regras de negócio — Tela inicial e Tela Estante

> Por enquanto o front usa dados de teste (`src/data/livros.ts`). Abaixo está o que o back/banco precisa fornecer.

### Livro
Cada livro tem: `id`, `titulo`, `autor`, `genero` e `paginas`. Campos opcionais:

| Campo | Para que serve |
|---|---|
| `status` | `lendo`, `lido` ou vazio (ainda não leu) |
| `paginaAtual` | só quando `lendo` (0 até `paginas`) |
| `nota` (1 a 5) e `dataLeitura` (AAAA-MM-DD) | só quando `lido` |
| `novidade` | `true` = aparece na seção "Novidades" |
| `original` | `true` = aparece na seção "Originais" |
| `favorito` | `true` = aparece no filtro "Favoritos" da Estante |
| `capa` | imagem da capa (URL). Se vier vazia, o front usa a capa provisória de `src/data/capas.ts` |

Um livro só pode ter um status por vez. Ao terminar de ler, passa de `lendo` para `lido` e ganha nota e data de leitura.

### Tela inicial
- Mostra seções em sequência, cada uma com um título e uma fileira de livros (capas) que rola para o lado: **Novidades**, **Originais** e uma seção por gênero (Ficção, História, Fantasia, Romance, Tecnologia, Desenvolvimento pessoal).
- Novidades = livros com `novidade = true`. Originais = livros com `original = true`. Cada seção de gênero mostra os livros com aquele `genero`.
- Seções sem livros não aparecem.
- Cada livro aparece como a imagem da capa, e o autor embaixo.
- No topo ficam o título "Início" e os ícones de engrenagem (configurações) e sino (notificações); as telas dessas ações ainda não existem (handlers em `src/app/index.tsx`).

### Tela Estante (antiga "Consultas")
- Lista os livros da estante, com título, **capa logo abaixo do título**, autor, gênero e a situação de leitura (lido: nota, páginas e data; lendo: página atual; não lido).
- Busca por título ou autor (ignora maiúsculas e acentos), logo abaixo do título da tela.
- Filtros logo abaixo da busca (um por vez): **Marcar tudo** (todos os livros), **Lendo** (`status = lendo`), **Favoritos** (`favorito = true`) e **Não lido** (sem `status`).
- Ordem: lendo, depois lidos (mais recente primeiro) e por fim não lidos (por título).
- Mostra a quantidade de livros encontrados e a mensagem "Nenhum livro encontrado" quando nada bate com a busca/filtro.

### O que o back precisa oferecer
- `GET /livros?novidade=true` — livros da seção Novidades.
- `GET /livros?original=true` — livros da seção Originais.
- `GET /livros?genero=Ficção` — livros de um gênero (uma chamada por seção).
- `GET /livros?status=lido&busca=texto` — livros lidos, já ordenados por `dataLeitura` decrescente, com filtro opcional por título/autor.
- `GET /livros?busca=texto&favorito=true` — livros da Estante; `status` (`lendo`/`lido`) e `favorito` são filtros opcionais, e "Não lido" = livros sem `status`.
- `GET /livros?status=lendo` — livros em andamento.