const Products = [
  {
    id: 17,
    name: "Pizza on a Wooden Tray",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/N0VWMvRB/pexels-pixabay-533325.jpg",
    price: 20,
    discount: 2,
    discountPrice: 20 - (2 / 100) * 20,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 18,
    name: "Pizza on Brown Wooden",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/3JzhNphP/pexels-brett-jordan-825661.jpg",
    price: 30,
    discount: 5,
    discountPrice: 30 - (5 / 100) * 30,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 19,
    name: "Pizza Slice",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/VNWPKVt8/pexels-brett-jordan-842519.jpg",
    price: 15,
    discount: 3,
    discountPrice: 15 - (3 / 100) * 15,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 20,
    name: "Person Holding Pepperoni",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/bNZ8qg7x/pexels-edward-eyer-1049626.jpg",
    price: 50,
    discount: 4,
    discountPrice: 50 - (4 / 100) * 50,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 21,
    name: "Fried Food and Fried Egg",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/66jtsgm6/pexels-horizon-content-3762075.jpg",
    price: 25,
    discount: 2,
    discountPrice: 25 - (2 / 100) * 25,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 22,
    name: "Cooked Leg Chicken",
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
    id: 23,
    name: "Fries and Burger",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/DwsTXZym/pexels-vinicius-benedit-1082342.jpg",
    price: 35,
    discount: 2,
    discountPrice: 35 - (2 / 100) * 35,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 24,
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
