import styles from "./page.module.css";
import NavbarCommon from "./components/Navbar/Navbar";
import CustomCarousel from "./components/Carousel/Carousel";

export default function Home() {
  const imageUrls = [
    "/images/banner-01.avif",
    "/images/banner-02.avif",
    "/images/banner-03.webp",
  ];

  return (
    <div className={styles.page}>
      <div className="header-container">
        <span className="header-text__left">ネットストア限定</span>
        <span className="header-text__center">
          衣料品,日用品など対象商品 税込
          <span className="header-text__text-large">5,000</span>
          円以上購入で
        </span>
        <span className="header-text__right">配送料無料</span>
      </div>
      <NavbarCommon />
      <div className="article-contents">
        <ul>
          <li>
            <a href="">・ネットストアお届け日および店舗受け取りサービス商品ご用意 延伸のお知らせ</a>
          </li>
        </ul>
      </div>
      <CustomCarousel images={imageUrls} />
    </div>
  );
}
