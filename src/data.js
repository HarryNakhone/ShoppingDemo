const products = [
  {
    _id: "1",
    name: "Rog Laptop",
    image:
      "https://images.unsplash.com/photo-1590653956132-7124afce5a9d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 89.99,
    rating: 4.5,
    numReviews: 12,
    description:
      "The ROG brand was introduced in 2006. See gaming PC. ROG Mothership (G2700) Using an overclocked i9 CPU and an NVIDIA RTX graphics card, this Windows 10 laptop's twin fans were designed to dissipate heat.",
    quanity: 1,
  },
  {
    _id: "2",
    name: "iPhone 20",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 599.99,
    rating: 4.0,
    numReviews: 8,
    description:
      "The devices were announced on September 12, 2023, during the Apple Event at Apple Park in Cupertino, California alongside the higher-priced iPhone 15 Pro and 15 Pro Max flagships. Pre-orders began on September 15, 2023, and the devices were made available on September 22, 2023. Apple Inc.",
    quanity: 1,
  },
  {
    _id: "3",
    name: "Macbook 3000",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 929.99,
    rating: 3,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "4",
    name: "Xbox Controller",
    image:
      "https://images.unsplash.com/photo-1543973277-5020ef836640?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 399.99,
    rating: 5,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "5",
    name: "Keyboard",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 49.99,
    rating: 3.5,
    numReviews: 10,
    quanity: 1,
  },
  {
    _id: "6",
    name: "Phone Charger",
    image:
      "https://images.unsplash.com/photo-1587037542794-6ca5f4772330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "7",
    name: "Dell Laptop",
    image:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "8",
    name: "Mouuse",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "9",
    name: "iPad",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "10",
    name: "Airpods",
    image:
      "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "11",
    name: "billionare Headphones",
    image:
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "12",
    name: "Samsung made in China",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "13",
    name: "Huawei from Dark Web",
    image:
      "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "14",
    name: "Automatically-open fridge at 2AM",
    image:
      "https://images.unsplash.com/photo-1536353284924-9220c464e262?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
  {
    _id: "15",
    name: "Wires",
    image:
      "https://images.unsplash.com/photo-1473831818960-c89731aabc3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity: 1,
  },
];

export default products;
