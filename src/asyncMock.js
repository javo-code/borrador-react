import Nutrition1 from "./img/nutrilon.jpg";
import Nutrition2 from "./img/ensure.jpg";
import Nutrition3 from "./img/lactoproteyn.jpg";
import Nutrition4 from "./img/alfare.jpg";
import Nutrition5 from "./img/fresubin.jpg";
import Nutrition6 from "./img/alterna.jpg";
import Disposable1 from "./img/descartable-jeringa.jpg";
import Disposable2 from "./img/descartable-sets.jpg";
import Disposable3 from "./img/descartable-contenedor.jpg";
import Disposable4 from "./img/descartable-fisio.jpg";
import Disposable5 from "./img/descartable-gasa.jpg";
import Disposable6 from "./img/descartable-heparina.jpg";
import Bomb1 from "./img/bomba-epump.jpg";
import Bomb2 from "./img/bomba-angel.jpg";
import Bomb3 from "./img/bomba-asena.jpg";
import Bomb4 from "./img/bomba-comen.jpg";
import Bomb5 from "./img/bomba-samtronic.jpg";
import Bomb6 from "./img/bomba-ningbo.jpg";



const products = [
  {
    id: "1",
    name: "Nutrilon",
    price: 9000,
    category: "nutrition",
    img: Nutrition1,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "2",
    name: "Ensure",
    price: 9000,
    category: "nutrition",
    img: Nutrition2,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "3",
    name: "Lactoproteyn",
    price: 7000,
    category: "nutrition",
    img: Nutrition3,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "4",
    name: "Alfare",
    price: 10000,
    category: "nutrition",
    img: Nutrition4,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "5",
    name: "Fresubin",
    price: 9500,
    category: "nutrition",
    img: Nutrition5,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "6",
    name: "Alterna",
    price: 10200,
    category: "nutrition",
    img: Nutrition6,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "7",
    name: "Jeringas",
    price: 458,
    category: "deponsables",
    img: Disposable1,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "8",
    name: "Sets",
    price: 2350,
    category: "deponsables",
    img: Disposable2,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "9",
    name: "Contenedor",
    price: 665,
    category: "deponsables",
    img: Disposable3,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "10",
    name: "Sol. Fisiologica",
    price: 415,
    category: "deponsables",
    img: Disposable4,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "11",
    name: "Gasa No Tejida",
    price: 400,
    category: "deponsables",
    img: Disposable5,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "12",
    name: "Heparina Sodica",
    price: 4570,
    category: "deponsables",
    img: Disposable6,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "13",
    name: "Epump",
    price: 295000,
    category: "bombs",
    img: Bomb1,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "14",
    name: "Angel",
    price: 300000,
    category: "bombs",
    img: Bomb2,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "15",
    name: "Asena",
    price: 420000,
    category: "bombs",
    img: Bomb3,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "16",
    name: "Comen",
    price: 500200,
    category: "bombs",
    img: Bomb4,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "17",
    name: "Samtronic",
    price: 390500,
    category: "bombs",
    img: Bomb5,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
  {
    id: "18",
    name: "Ningbo",
    price: 275200,
    category: "bombs",
    img: Bomb6,
    stock: 10,
    description: " Pote x 1000 grs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis at asperiores ipsam animi neque iste, aliquid eaque nisi, veritatis cum officia recusandae voluptas hic, architecto explicabo ab aut illum.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 800);
  });
};


export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 800);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 800);
  });
};