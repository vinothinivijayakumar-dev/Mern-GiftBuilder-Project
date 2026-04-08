// PREMIUM ITEMS
import perfume from "../assets/images/perfume.png";
import watch from "../assets/images/watch.jpg";
import ring from "../assets/images/ring.jpg";
import sunglass from "../assets/images/sunglass.png";
import goldBangles from "../assets/images/Gold-bangles.jpg";
import diamondEarrings from "../assets/images/diamond-earring.jpg";

//FLOWERS ITEMS
import flower from "../assets/images/flower.png";
import jasmine from "../assets/images/jasmine.jpg";
import lily from "../assets/images/lily-flower.webp";
import mixedFlower from "../assets/images/mixed-flowers.avif";
import redrose from "../assets/images/red-roses.avif";
import sunflower from "../assets/images/sunflower.jpg";

//TOYS ITEMS
import teddy from "../assets/images/TeddyBear.jpg";
import plushBunny from "../assets/images/Soft-PlushBunny.webp";
import animal from "../assets/images/animal-toys.jpg";
import barbie from "../assets/images/barbie-doll.jpg";
import toycar from "../assets/images/ToyCar.jpg";
import birds from "../assets/images/birds.webp";

//GIFTS ITEMS
import diamondNecklace from "../assets/images/diamond-necklace.png";
import frame from "../assets/images/frame.png";
import photoFrame from "../assets/images/radha-krishna.webp";
import chocolate from "../assets/images/Chocolate.png";
import clock from "../assets/images/clock.jpg";
import giftBox from "../assets/images/Gift-Box.jpg";

// SWEETS ITEMS
import cake from "../assets/images/cake.png";
import cupcake from "../assets/images/cupcake.png";
import ChocolateBox from "../assets/images/chocolate.webp";
import dryFruits from "../assets/images/dried-fruits.jpg";
import icecream from "../assets/images/ice-cream.avif";
import sweetsBox from "../assets/images/sweets-box.jpg";

const products = [

  // PREMIUM ITEMS
  { id: 1, name: "Perfume", price: 899, image: perfume, category: "premium" },
  { id: 2, name: "Watch", price: 1199, image: watch, category: "premium" },
  { id: 3, name: "Ring", price: 999, image: ring, category: "premium" },
  { id: 4, name: "Sunglass", price: 1999, image: sunglass, category: "premium" },
  { id: 5, name: "Gold Bangles", price: 2199, image: goldBangles, category: "premium" },
  { id: 6, name: "Earrings", price: 3199, image: diamondEarrings, category: "premium" },


  //FLOWERS ITEMS
  { id: 7, name: "Pink Roses", price: 399, image: flower, category: "flowers" },
  { id: 8, name: "Jasmine", price: 229, image: jasmine, category: "flowers" },
  { id: 9, name: "Lily", price: 189, image: lily, category: "flowers" },
  { id: 10, name: "Mixed Flowers", price: 429, image: mixedFlower, category: "flowers" },
  { id: 11, name: "Red Roses", price: 549, image: redrose, category: "flowers" },
  { id: 12, name: "Sun Flowers", price: 279, image: sunflower, category: "flowers" },

  //TOYS ITEMS
  { id: 13, name: "Teddy Bear", price: 499, image: teddy, category: "toys" },
  { id: 14, name: "Animals", price: 359, image: animal, category: "toys" },
  { id: 15, name: "Barbie Doll", price: 389, image: barbie, category: "toys" },
  { id: 16, name: "Birds", price: 439, image: birds, category: "toys" },
  { id: 17, name: "Car", price: 429, image: toycar, category: "toys" },
  { id: 18, name: "Soft Plush Bunny", price: 589, image: plushBunny, category: "toys" },

  //GIFTS ITEMS
  { id: 19, name: "Diamond Necklace", price: 1299, image: diamondNecklace, category: "gifts" },
  { id: 20, name: "Radha Krishna Painting", price: 359, image: photoFrame, category: "gifts" },
  { id: 21, name: "Clock", price: 149, image: clock, category: "gifts" },
  { id: 22, name: "Gift Box", price: 599, image: giftBox, category: "gifts" },
  { id: 23, name: "Chocolate", price: 699, image: chocolate, category: "gifts" },
  { id: 24, name: "Photo Frame", price: 349, image: frame, category: "gifts" },

  // SWEETS ITEMS
  { id: 25, name: "Cake", price: 699, image: cake, category: "sweets" },
  { id: 26, name: "Cupcake", price: 299, image: cupcake, category: "sweets" },
  { id: 27, name: "Chocolates Box", price: 569, image: ChocolateBox, category: "sweets" },
  { id: 28, name: "Dry Fruits", price: 659, image: dryFruits, category: "sweets" },
  { id: 29, name: "Ice Cream", price: 349, image: icecream, category: "sweets" },
  { id: 30, name: "Sweets Box", price: 739, image: sweetsBox, category: "sweets" },

];

export default products;