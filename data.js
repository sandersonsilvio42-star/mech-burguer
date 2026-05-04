// ============================================================
//  MECH BURGUER — Dados do Cardápio
//  Fotos: salve na pasta img/ com os nomes abaixo
// ============================================================

const MENU_ITEMS = [
  // ── HAMBÚRGUERES ──────────────────────────────────────────
  {
    id: 1,
    category: 'hamburguer',
    name: 'Baby',
    desc: 'Pão de brioche, carne de 120g, queijo cheddar, catchup e mostarda.',
    price: 19.90,
    icon: '👑',
    tag: null,
    img: null   // sem foto individual — coloque img/baby.jpg quando tiver
  },
  {
    id: 2,
    category: 'hamburguer',
    name: 'Junior',
    desc: 'Pão de brioche, carne de 120g, queijo cheddar, catchup, mostarda, picles e maionese da casa.',
    price: 22.90,
    icon: '👑',
    tag: null,
    img: null
  },
  {
    id: 3,
    category: 'hamburguer',
    name: 'Saladão',
    desc: 'Pão de brioche, molho da casa, carne de 200g, queijo cheddar, alface, tomate, picles, cebola roxa e molho tártaro.',
    price: 29.90,
    icon: '🥗',
    tag: null,
    img: 'img/saladao.jpg.jpeg'
  },
  {
    id: 4,
    category: 'hamburguer',
    name: 'Mech Bacon',
    desc: 'Pão de brioche, molho da casa, carne de 200g, queijo cheddar, cheddar, bacon e picles.',
    price: 31.90,
    icon: '🔥',
    tag: null,
    img: 'img/mech-bacon.jpg.jpeg'
  },
  {
    id: 5,
    category: 'hamburguer',
    name: 'Mech Creamy',
    desc: 'Pão de brioche, molho barbecue, carne de 200g, catupiry e crispe de cebola.',
    price: 31.90,
    icon: '🔥',
    tag: null,
    img: 'img/mech-creamy.jpg.jpeg'
  },
  {
    id: 6,
    category: 'hamburguer',
    name: 'Mech Tudo',
    desc: 'Pão de brioche, molho da casa, carne de 200g, ovo, bacon, queijo empanado, alface, tomate, cebola roxa e picles.',
    price: 44.90,
    icon: '👑',
    tag: 'ESPECIAL',
    img: 'img/mech-tudo.jpg.jpeg'
  },
  {
    id: 7,
    category: 'hamburguer',
    name: 'Mech Cheese',
    desc: 'Pão de brioche, cheddar, carne de 200g, queijo cheddar, queijo empanado, sweet chili e molho da casa.',
    price: 35.90,
    icon: '🔥',
    tag: null,
    img: 'img/mech-cheese.jpg.jpeg'
  },
  {
    id: 8,
    category: 'hamburguer',
    name: 'Mech Duplo',
    desc: 'Pão de brioche, molho da casa, 2 carnes de 200g, queijo cheddar, molho cheddar, crispe de cebola e bacon.',
    price: 44.90,
    icon: '👑',
    tag: 'DUPLO',
    img: null
  },
  {
    id: 9,
    category: 'hamburguer',
    name: 'Salada Chicken',
    desc: 'Pão de brioche, maionese da casa, o Supremo frango empanado de 100g, alface americano, tomate, cebola roxa e molho tártaro.',
    price: 25.90,
    icon: '🥗',
    tag: null,
    img: null
  },
  {
    id: 10,
    category: 'hamburguer',
    name: 'Turbo Chicken',
    desc: 'Pão de brioche, molho barbecue, Supremo frango empanado de 100g, catupiry e bacon.',
    price: 28.90,
    icon: '🔥',
    tag: null,
    img: null
  },

  // ── COMBOS ────────────────────────────────────────────────
  {
    id: 11,
    category: 'combo',
    name: 'Combo Mech',
    desc: '1 Hambúrguer Mech + Batata Frita 200g + 1 Refri Lata.',
    price: 41.90,
    icon: '🔥',
    tag: 'MAIS PEDIDO',
    img: null
  },
  {
    id: 12,
    category: 'combo',
    name: 'Combo Mech Cheese',
    desc: '1 Hambúrguer Mech Cheese + Batata Frita 200g + 1 Refri Lata.',
    price: 46.90,
    icon: '🧀',
    tag: 'MAIS CREMOSO',
    img: null
  },
  {
    id: 13,
    category: 'combo',
    name: 'Combo Mech Creamy',
    desc: '1 Hambúrguer Mech Creamy + Batata Frita 200g + 1 Refri Lata.',
    price: 44.90,
    icon: '🔥',
    tag: null,
    img: null
  },
  {
    id: 14,
    category: 'combo',
    name: 'Combo Casadinho',
    desc: '1 Mech Duplo + 1 Mech Creamy + 2 Batatas Fritas 200g + 2 Refris Lata.',
    price: 94.90,
    icon: '❤️',
    tag: 'PARA COMPARTILHAR',
    img: 'img/combo-casadinho.jpg.jpeg'
  },
  {
    id: 15,
    category: 'combo',
    name: 'Combo 2 Baby',
    desc: '2 Hambúrgueres Baby + Batata Frita 200g + 2 Refris Lata.',
    price: 46.90,
    icon: '👑',
    tag: null,
    img: null
  },

  // ── PORÇÕES ───────────────────────────────────────────────
  {
    id: 16,
    category: 'porcao',
    name: 'Batata Frita Grande',
    desc: 'Batata frita crocante 200g.',
    price: 9.90,
    icon: '🍟',
    tag: null,
    img: null
  },

  // ── BEBIDAS ───────────────────────────────────────────────
  {
    id: 17,
    category: 'bebida',
    name: 'Coca-Cola Lata',
    desc: 'Refrigerante gelado 350ml.',
    price: 6.00,
    icon: '🥤',
    tag: null,
    img: null
  },
  {
    id: 18,
    category: 'bebida',
    name: 'Guaraná Lata',
    desc: 'Refrigerante gelado 350ml.',
    price: 6.00,
    icon: '🥤',
    tag: null,
    img: null
  },
  {
    id: 19,
    category: 'bebida',
    name: 'Água Mineral',
    desc: 'Água mineral sem gás 500ml.',
    price: 4.00,
    icon: '💧',
    tag: null,
    img: null
  }
];

// ── ADICIONAIS ────────────────────────────────────────────────
// img: imagem fonte | pos: object-position para recortar a foto certa
const ADICIONAIS = {
  proteinas: [
    { name: 'Carne 120g',      price: 6.90,  desc: 'Mais sabor e suculência!',              img: 'img/banner-adicionais.jpeg', pos: '8% 28%'   },
    { name: 'Carne 200g',      price: 9.90,  desc: 'Para quem quer ainda mais carne!',       img: 'img/banner-adicionais.jpeg', pos: '28% 28%'  },
    { name: 'Frango Empanado', price: 7.90,  desc: 'Crocante por fora, suculento por dentro!',img: 'img/banner-adicionais.jpeg', pos: '52% 28%'  },
    { name: 'Bacon',           price: 4.90,  desc: 'O clássico que nunca falha!',             img: 'img/banner-adicionais.jpeg', pos: '74% 28%'  },
    { name: 'Ovo',             price: 4.90,  desc: 'Mais cremosidade e sabor!',               img: 'img/banner-adicionais.jpeg', pos: '93% 28%'  }
  ],
  queijos: [
    { name: 'Fatia Cheddar',   price: 2.50,  desc: 'O cheddar derretido que todo mundo ama!', img: 'img/banner-adicionais.jpeg', pos: '10% 50%'  },
    { name: 'Cheddar Cremoso', price: 4.90,  desc: 'Cremosidade em cada mordida!',             img: 'img/banner-adicionais.jpeg', pos: '35% 50%'  },
    { name: 'Catupiry',        price: 5.90,  desc: 'O toque especial que faz a diferença!',    img: 'img/banner-adicionais.jpeg', pos: '60% 50%'  },
    { name: 'Queijo Empanado', price: 8.90,  desc: 'Crocante por fora, queijo derretido por dentro!', img: 'img/banner-adicionais.jpeg', pos: '85% 50%' }
  ],
  complementos: [
    { name: 'Picles',          price: 2.90,  desc: 'Mais sabor e frescor!',                   img: 'img/banner-adicionais.jpeg', pos: '7%  72%'  },
    { name: 'Cebola Crispy',   price: 3.90,  desc: 'Crocante e irresistível!',                 img: 'img/banner-adicionais.jpeg', pos: '25% 72%'  },
    { name: 'Salada Completa', price: 3.90,  desc: 'Alface, tomate e cebola roxa!',            img: 'img/banner-adicionais.jpeg', pos: '43% 72%'  },
    { name: 'Cebola Roxa',     price: 2.90,  desc: 'Mais sabor e textura!',                    img: 'img/banner-adicionais.jpeg', pos: '7%  88%'  }
  ],
  molhos: [
    { name: 'Maionese Extra',      price: 2.50, desc: 'Mais cremosidade no seu lanche!',       img: 'img/banner-adicionais.jpeg', pos: '62% 68%'  },
    { name: 'Barbecue Extra',      price: 2.50, desc: 'Sabor defumado irresistível!',           img: 'img/banner-adicionais.jpeg', pos: '78% 68%'  },
    { name: 'Sweet Chili Extra',   price: 2.90, desc: 'Agridoce na medida certa!',              img: 'img/banner-adicionais.jpeg', pos: '93% 68%'  },
    { name: 'Molho Tártaro Extra', price: 2.90, desc: 'O acompanhamento perfeito!',             img: 'img/banner-adicionais.jpeg', pos: '68% 86%'  },
    { name: 'Ketchup + Mostarda',  price: 1.90, desc: 'Clássicos que combinam sempre!',         img: 'img/banner-adicionais.jpeg', pos: '86% 86%'  }
  ]
};
