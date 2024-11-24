import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "./provider";
import NavbarCommon from "./components/Navbar/Navbar";
import { fetchAllSubCategoryApi } from "./utils/api/category";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const subCategories = await fetchAllSubCategoryApi();
  // console.log("subCategories", subCategories);
  
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
          <NavbarCommon subCategories={subCategories.data.result}/>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
