"use client";

import styles from "./page.module.css";
import CustomCarousel from "./components/Carousel/Carousel";
import { useEffect, useState } from "react";
import { Category } from "./types/category";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchAllSubCategoryApi } from "./utils/api/category";

export default function Home() {
  
  const [categories, setCategories] = useState<Category[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string>("");

  const imageUrls = [
    "/images/banner-01.avif",
    "/images/banner-02.avif",
    "/images/banner-03.webp",
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetchAllSubCategoryApi();
        if (response) {
          // console.log("response", response);
          setCategories(response.data.result.filter((category) => {
            return category.imageUrl !== "";
          }));
        }
      } catch (err) {
        // setError("Failed to fetch categories");
        console.error(err);
      } finally {
        // setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={styles.page}>
      <div className="article-contents">
        <ul>
          <li>
            <a href="">
              ・ネットストアお届け日および店舗受け取りサービス商品ご用意
              延伸のお知らせ
            </a>
          </li>
        </ul>
      </div>
      <CustomCarousel images={imageUrls} />
      <ImageGallery categories={categories} />
    </div>
  );
}
