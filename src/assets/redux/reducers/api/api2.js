const Products = [
  {
    id: 9,
    name: "Fried Rice on Black Plate",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/m2yfSqWy/pexels-alleksana-4224304.jpg",
    price: 20,
    discount: 2,
    discountPrice: 20 - (2 / 100) * 20,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 10,
    name: "Cooked Chicken",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/Qdf22TtB/pexels-engin-akyurt-2673353.jpg",
    price: 30,
    discount: 5,
    discountPrice: 30 - (5 / 100) * 30,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 11,
    name: "Cooked Leg Chicken",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/529cK3xd/pexels-lukas-1352270.jpg",
    price: 15,
    discount: 3,
    discountPrice: 15 - (3 / 100) * 15,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 12,
    name: "Fried meat",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/nLMyphj3/pexels-marianna-ole-764925.jpg",
    price: 50,
    discount: 4,
    discountPrice: 50 - (4 / 100) * 50,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 13,
    name: "Fried Food and Fried Egg",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/NfcvmtS0/pexels-olga-lioncat-7245473.jpg",
    price: 25,
    discount: 2,
    discountPrice: 25 - (2 / 100) * 25,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 14,
    name: "Bowl of Vegetable Salad",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/C5pXGCv2/pexels-trang-doan-936611.jpg",
    price: 60,
    discount: 6,
    discountPrice: 60 - (6 / 100) * 60,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 15,
    name: "Tacos With Lime",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/gJZ1LtKR/pexels-pixabay-461198.jpg",
    price: 35,
    discount: 2,
    discountPrice: 35 - (2 / 100) * 35,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 16,
    name: "cake with red currants",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/N0VWMvRB/pexels-pixabay-533325.jpg",
    price: 80,
    discount: 7,
    discountPrice: 80 - (7 / 100) * 80,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export default Products;
