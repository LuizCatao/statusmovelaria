# Status Movelaria &amp; Design Interiores

Landing page da Status Movelaria, loja de móveis planejados sob medida em
Uberaba, MG.

## Sobre o projeto

Site estático, sem build e sem dependências. É só abrir o `index.html` ou
servir a pasta.

```
index.html        página única
css/style.css     estilos
js/main.js        menu, scroll reveal, FAQ
assets/           logo, favicon e fotos dos projetos
```

## Rodar localmente

Qualquer servidor estático serve. Por exemplo:

```bash
npx http-server -p 8080
```

Depois abra `http://localhost:8080`.

Vale usar um servidor em vez de abrir o arquivo direto: o mapa do Google
incorporado na seção de contato não carrega via `file://`.

## Publicar

Netlify ou Vercel, com o diretório de publicação apontando para a raiz do
repositório. Não há comando de build.

## Contato do negócio

- WhatsApp: (34) 98431-6875
- Telefone: (34) 3325-5001
- Instagram: [@statusmovelariauberaba](https://instagram.com/statusmovelariauberaba)
- Loja: Av. Abílio Borges de Araújo, 446, Vila Nossa Sra. Abadia, Uberaba, MG

---

Desenvolvido por [Raius](https://github.com/LuizCatao).
