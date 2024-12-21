import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.scss";
import { Providers } from "./provider";
import NavbarCommon from "./components/Navbar/Navbar";
// import { fetchSubCategoriesApi } from "./utils/api/category";
import Footer from "./components/Footer/Footer";
import SideBar from "./dashboard/components/SideBar/SideBar";
import HeaderDashboard from "./dashboard/components/Header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const subCategories = await fetchSubCategoriesApi();
  // Lấy header để kiểm tra trang admin
  const isAdmin = headers().get("x-is-admin") === "true";
  console.log("isAdmin", isAdmin);

  if (isAdmin) {
    return (
      <html lang="en">
        <body>
          <Providers>
            <div className="dashboard-layout">
              <SideBar />
              <main className="dashboard-layout__main">
                <HeaderDashboard />
                {children}
              </main>
            </div>
          </Providers>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Providers>
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
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
