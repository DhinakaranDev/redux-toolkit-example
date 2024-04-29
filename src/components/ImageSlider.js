import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function ImageSlider() {
  const images = [
    {
      url: "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg",
    },
    {
      url: "https://c8.alamy.com/comp/2E3R7P5/online-mobile-shop-ecommerce-order-entertainment-vector-online-shopping-application-illustration-banner-2E3R7P5.jpg",
    },
    {
      url: "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg",
    },
    {
      url: "https://edit.org/img/blog/mbp-template-banner-online-store-free.webp",
    },
  ];

  return (
    <div className="my-20">
      <SimpleImageSlider
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
