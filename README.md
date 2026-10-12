# stalkeia (funil local)

Clone estático do funil, servido por um servidor Node local com proxy reverso
para a API e proxy de imagens.

## Rodar

```bash
node server.js
```

Abra http://localhost:3000

## Estrutura

- `server.js` — servidor HTTP local. Serve os arquivos estáticos, faz proxy
  reverso de `/api/proxy/*` para o backend (injetando o header `x-site-key`),
  traduz o endpoint antigo de perfil para o `hikerapi.php`, e faz proxy das
  imagens via `/img` (worker Cloudflare).
- `assets/` — bundle do app (React Router).
- `images/` — imagens locais (logos, avatars, screenshots).
- `download_missing.js` — baixa módulos JS do manifesto que faltarem.
- `download_images_missing.js` — baixa imagens referenciadas que faltarem.

## Observações

- As URLs de imagem do Instagram têm validade (parâmetros `oh`/`oe`), então
  expiram após algumas horas. Em uso ao vivo cada busca gera URLs novas.
