import { v4 as uuidv4 } from "uuid";

const productData = [
  {
    _id: uuidv4(),
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/eb0vi3orhh1y0lrohu40/sportswear-jdi-mens-t-shirt-s23bM6.png",
    brand: "Nike",
    price: 800,
    Discounted_value: "750",
    categoryName: "Men",

    size: "S",
    Quentity: 1
  },
  {
    _id: uuidv4(),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGBPwub-MnzDvgykGWaISsI6A1nm7jigF74Gms03iAcNa8G3KT7XoRB3aVddXtAJueuI&usqp=CAU",
    brand: "Adidas",
    price: 975,
    Discounted_value: "950",
    AddtoCart_btn: "Add to cart",
    categoryName: "Men",

    size: "L",
    Quentity: 1
  },
  {
    _id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/332/398/k65d18w0/t-shirt/9/u/5/m-ar5005-010-nike-original-imafzhfkzshakbhg.jpeg?q=50",
    brand: "Nike",
    price: 700,
    Discounted_value: "650",
    AddtoCart_btn: "Add to cart",
    categoryName: "Men",

    size: "M",
    Quentity: 1
  },
  {
    _id: uuidv4(),
    image:
      "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61l6BuBd6UL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UL1500_.png",
    brand: "Blackberrys",
    price: 900,
    Discounted_value: "850",
    categoryName: "Men",

    Quentity: 1,
    size: "L",
    description: "slim Men shirt"
  },
  {
    _id: uuidv4(),
    image:
      "https://ih1.redbubble.net/image.2844702888.5228/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
    brand: "Blackberrys",
    price: 900,
    Discounted_value: "850",
    categoryName: "Women",
    size: "XL",
    Quentity: 1
  },
  {
    _id: uuidv4(),
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17010416/2022/2/17/dc04d7aa-0600-4330-9669-7cd86c29fd081645082178742-ADIDAS-Originals-Women-Tshirts-3121645082177954-1.jpg",
    brand: "Adidas",
    price: 1100,
    Discounted_value: "850",
    categoryName: "Women",
    size: "XL",
    Quentity: 1
  },
  {
    _id: uuidv4(),
    image:
      "data:image/jpeg;base64,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",
    brand: "Blackberrys",
    price: 1650,
    Discounted_value: "1600",
    categoryName: "Men",
    size: "S",
    Quentity: 1
  },
  {
    _id: uuidv4(),
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg",
    brand: "Nike",
    price: 1950,
    Discounted_value: "1900",
    categoryName: "Men",
    size: "M",
    Quentity: 1
  }
];

export { productData };
