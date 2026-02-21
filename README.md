This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## PWA / Service Worker

O projeto usa `next-pwa` com:

- cache de assets estáticos (`_next/static`, imagens)
- cache de rotas principais com estratégia `NetworkFirst`
- fallback offline em `/%7Eoffline`
- prompt de atualização quando uma nova versão do SW é detectada

### Como validar localmente (modo produção)

1. Gerar build e iniciar:

	```bash
	npm run build
	npm run start
	```

2. Abrir `http://localhost:3000/dashboard` e verificar no DevTools > Application:

	- Service Worker ativo (`/sw.js`)
	- Cache Storage populado após navegação

3. Testar offline básico:

	- Navegar por `dashboard`, `announcements`, `events`, `links`, `profile`
	- Ativar Offline no DevTools (Network)
	- Recarregar e validar conteúdo em cache ou fallback offline

4. Testar atualização:

	- Com a app aberta, publicar nova versão (novo build/deploy)
	- Reabrir/recarregar a app
	- Validar exibição do aviso "Nova versão disponível" e clique em "Atualizar agora"

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
