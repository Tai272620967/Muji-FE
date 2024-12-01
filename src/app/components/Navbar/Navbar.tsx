"use client";
import "./Navbar.scss";
import Image from "next/image";
import Logo from "../../../../public/images/logo-muji.svg";
import UserMenu from "../UserMenu/UserMenu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Category, SubCategory } from "@/base/types/category";
import { fetchAllMainCategoryApi } from "@/base/utils/api/category";
import CategoryModal from "./CategoryModal/CategoryModal";

interface NavbarProps {
  subCategories?: SubCategory[];
}

const NavbarCommon: React.FC<NavbarProps> = ({ subCategories }) => {
  // console.log("subCategories", subCategories)
  const [mainCategoryId, setMainCategoryId] = useState<number | null>(null);
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [subCategoriesData, setSubCategoriesData] = useState<Category[]>([]);
  const [subCategoriesDataFilter, setSubCategoriesDataFilter] = useState<
    Category[]
  >([]);
  const [isShowCategoryModal, setIsShowCategoryModal] =
    useState<boolean>(false);

  useEffect(() => {
    if (subCategories) {
      setSubCategoriesData(subCategories);
    }
  }, []);

  const handleChangeMainCategory = (mainCategoryId: number) => {
    setSubCategoriesDataFilter(
      subCategoriesData?.filter(
        (category) => category.mainCategory?.id === mainCategoryId
      ) || []
    );
  };

  useEffect(() => {
    const fetchAllMainCategories = async () => {
      try {
        const response = await fetchAllMainCategoryApi();
        if (response) {
          setMainCategories(response.data.result);
        }
      } catch (err) {
        // setError("Failed to fetch categories");
        console.error(err);
      } finally {
        // setLoading(false);
      }
    };

    fetchAllMainCategories();
  }, []);

  const handleShowCategoryModal = (id: number) => {
    if (id === mainCategoryId) {
      // Nếu ID category hiện tại giống ID đang chọn, tắt modal
      setIsShowCategoryModal(false);
      setMainCategoryId(null);
      setSubCategoriesDataFilter([]);
    } else {
      // Nếu ID khác, hiển thị modal với nội dung mới
      setIsShowCategoryModal(true);
      setMainCategoryId(id);
      handleChangeMainCategory(id);
      document.body.style.overflow = 'hidden'; // Khóa cuộn trang
    }
  };

  const handleCloseCategoryModal = () => {
    setIsShowCategoryModal(false);
    setMainCategoryId(null);
    document.body.style.overflow = ''; // Khôi phục cuộn trang
  };

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <Link href={"/"} className="navbar-logo" onClick={handleCloseCategoryModal}>
          <Logo />
        </Link>
        <div className="navbar-center">
          <ul>
            {mainCategories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleShowCategoryModal(category.id)}
                className={
                  mainCategoryId === category.id ? "selected-category" : ""
                }
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-right">
          <Image
            className="navbar-icon"
            src="/images/search-interface-symbol.png"
            alt="Search icon"
            width={24}
            height={24}
          />
          <UserMenu />
          <Image
            className="navbar-icon"
            src="/images/heart.png"
            alt="Heart icon"
            width={24}
            height={24}
          />
          <Image
            className="navbar-icon"
            src="/images/shopping-cart.png"
            alt="Shopping cart icon"
            width={24}
            height={24}
          />
          <Image
            className="navbar-icon"
            src="/images/attention.png"
            alt="Attention icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      {isShowCategoryModal && (
        <div className="category-modal__wrapper">
          {isShowCategoryModal && (
            <CategoryModal
              categories={subCategoriesDataFilter}
              handleCloseModal={handleCloseCategoryModal}
            />
          )}
        </div>
      )}
    </nav>
  );
};

export default NavbarCommon;
