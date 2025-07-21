// // src/components/mainpages/Offers.js
// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./offers.css";
// import { Footer } from "./Footer";

// const offers = [
//   {
//     id: 1,
//     title: "Black Friday Sale",
//     discount: "50%",
//     description: "Get 50% off on all items!",
//     image:
//       "https://media.gq.com/photos/65d907d619c840b1c3f654a6/master/pass/sweaters.jpg",
//     validUntil: "Nov 30, 2024",
//   },
//   {
//     id: 2,
//     title: "Cyber Monday Deal",
//     discount: "40%",
//     description: "Cyber Monday discounts on electronics.",
//     image: "https://turtle.in/cdn/shop/collections/6.jpg?v=1719485540",
//     validUntil: "Dec 1, 2024",
//   },
//   {
//     id: 3,
//     title: "Holiday Special",
//     discount: "30%",
//     description: "Celebrate the holidays with 30% off!",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwMpOek95MRCK21ZIT1EM5sz_MHQlgqcd1uS4fIynSDs-Jcccsw0kFrtR9fSrkHnrL94&usqp=CAU",
//     validUntil: "Dec 25, 2024",
//   },
//   {
//     id: 4,
//     title: "New Year Sale",
//     discount: "25%",
//     description: "Kickstart the New Year with savings!",
//     image:
//       "https://www.shutterstock.com/image-photo/clothes-on-clothing-hanger-260nw-2338282257.jpg",
//     validUntil: "Jan 1, 2025",
//   },
// ];

// export const Offers = () => {
//   return (
//     <>
//       <div className="offers-page">
//         {/* Carousel Section */}
//         <Carousel
//           showThumbs={false}
//           autoPlay
//           infiniteLoop
//           showStatus={false}
//           className="offers-carousel"
//         >
//           {offers.map((offer) => (
//             <div key={offer.id}>
//               <img
//                 src={offer.image}
//                 alt={offer.title}
//                 className="carousel-image"
//               />
//               <div className="carousel-caption">
//                 <h2>{offer.title}</h2>
//                 <p>{offer.description}</p>
//                 <p className="discount">Save {offer.discount}</p>
//               </div>
//             </div>
//           ))}
//         </Carousel>

//         {/* Banner Section */}
//         <div className="offer-banner">
//           <h1>Exclusive Offers Just For You!</h1>
//           <p>Shop now and save big on our best deals of the season.</p>
//         </div>

//         {/* Offers Grid Section */}
//         <div className="offers-container">
//           {offers.map((offer) => (
//             <div key={offer.id} className="offer-card">
//               <img
//                 src={offer.image}
//                 alt={offer.title}
//                 className="offer-image"
//               />
//               <div className="offer-details">
//                 <h2>{offer.title}</h2>
//                 <p className="discount">Save {offer.discount}</p>
//                 <p>{offer.description}</p>
//                 <p className="valid-until">Valid until: {offer.validUntil}</p>
//                 <button className="shop-now-btn">Shop Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };
