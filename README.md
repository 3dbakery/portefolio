# 3D Bakery - Portefólio com carrossel automático

## Estrutura

- `index.html` — página inicial com:
  - navegação superior;
  - Como funciona;
  - catálogo por categorias em carrossel automático;
  - caixa de encomendas personalizadas;
  - contacto.

- `categoria.html` — página dinâmica da categoria.
- `produto.html` — página dinâmica do produto.
- `data.js` — onde editas categorias, produtos, preços, tamanhos, descrições e imagens.
- `style.css` — design.
- `assets/logo-3d-bakery.png` — logotipo.

## Carrossel

No desktop aparecem 3 categorias visíveis.
O carrossel avança sozinho a cada 3,2 segundos.
Também dá para usar as setas ou arrastar/deslizar.

## Adicionar imagens aos produtos

Coloca as imagens na pasta `assets`, por exemplo:

```txt
assets/porta-chaves-1.jpg
assets/porta-chaves-2.jpg
```

Depois, no `data.js`, no produto:

```js
images: [
  "assets/porta-chaves-1.jpg",
  "assets/porta-chaves-2.jpg"
],
```

## Adicionar imagem a uma categoria

No `data.js`, na categoria:

```js
image: "assets/categoria-porta-chaves.jpg",
```

Se deixares `image: ""` ou `images: []`, o site mostra um placeholder.
