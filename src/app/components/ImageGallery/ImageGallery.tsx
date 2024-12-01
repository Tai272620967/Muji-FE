"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ImageGallery.module.css";
import { Category, SubCategory } from "@/base/types/category";
import Link from 'next/link';
import { useRouter } from "next/navigation";

interface ImageGalleryProps {
  subCategories: SubCategory[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ subCategories }) => {
  const router = useRouter();

  const handleCategoryClick = (category: Category) => {
    router.push(`/product/category/${category.id}`);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className={styles.swiperContainer}
    >
      {subCategories.map((category, index) => (
        <SwiperSlide key={index}>
          <Link href={`/product/category/${category.id}`} className={styles.imageWrapper}>
            <Image
              src={category?.imageUrl}
              alt={`Slide ${index}`}
              width={250}
              height={250}
              quality={80}
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
                zIndex: 1, // Đảm bảo hình ảnh ở trên lớp phủ
              }}
            />
          </Link>
          <p className="image-name" onClick={() => handleCategoryClick(category)}>{category.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageGallery;
