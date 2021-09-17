const Products = [
  {
    id: 1,
    name: "pizza",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/ncfC9Gf9/pexels-beqa-tefnadze-803290.jpg",
    price: 20,
    discount: 2,
    discountPrice: 20 - (2 / 100) * 20,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "cicken barger",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/wT53XR9f/pexels-dana-tentis-750073.jpg",
    price: 30,
    discount: 5,
    discountPrice: 30 - (5 / 100) * 30,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "fast food",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/Bvb6fhHk/pexels-engin-akyurt-2725744.jpg",
    price: 15,
    discount: 3,
    discountPrice: 15 - (3 / 100) * 15,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Fried meat",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/L8H5N4XH/pexels-harry-dona-2338407.jpg",
    price: 50,
    discount: 4,
    discountPrice: 50 - (4 / 100) * 50,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "Fried Food and Fried Egg",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/6QPQWdh3/pexels-jer-chung-2059151.jpg",
    price: 25,
    discount: 2,
    discountPrice: 25 - (2 / 100) * 25,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    name: "Cooked Leg Chicken",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/Y0Y0yhYS/pexels-pixabay-60616.jpg",
    price: 60,
    discount: 6,
    discountPrice: 60 - (6 / 100) * 60,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 7,
    name: "Fries and Burger",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/ryrDpY3L/pexels-robin-stickel-70497.jpg",
    price: 35,
    discount: 2,
    discountPrice: 35 - (2 / 100) * 35,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 8,
    name: "cake with red currants",
    category: "fry food",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    about2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, et culpa similique atque numquam debitis iusto deleniti odit eligendi veniam in veritatis facilis exercitationem pariatur perferendis? Autem suscipit quae sint.",
    image: "https://i.postimg.cc/mg8Dqxz7/pexels-tim-douglas-6210804.jpg",
    price: 80,
    discount: 7,
    discountPrice: 80 - (7 / 100) * 80,
    quantity: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export default Products;
