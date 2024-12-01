import "./ProductDetail.scss";

const ProductDetail: React.FC = () => {
  return (
    <div className="product-detail__wrapper">
      <div className="product-detail__bread-crumbs">
        <ul className="product-detail__bread-crumbs__list">
          <li className="product-detail__bread-crumbs__list__item">
            <a href="">無印良品</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="#D8D8D9"
              className="BreadCrumbs_list__icon__vqjGm"
            >
              <path d="m6 13 5-5-5-5"></path>
            </svg>
          </li>
          <li className="product-detail__bread-crumbs__list__item">
            <a href="">家具・収納・家電</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="#D8D8D9"
              className="BreadCrumbs_list__icon__vqjGm"
            >
              <path d="m6 13 5-5-5-5"></path>
            </svg>
          </li>
          <li className="product-detail__bread-crumbs__list__item">
            <a href="">家具</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="#D8D8D9"
              className="BreadCrumbs_list__icon__vqjGm"
            >
              <path d="m6 13 5-5-5-5"></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
