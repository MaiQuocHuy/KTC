import {
  AiFillDownSquare,
  AiOutlineArrowDown,
  AiOutlineDownSquare,
} from "react-icons/ai";
import { useState } from "react";
import Card from "./components/Card";
import CardDeal from "./components/CardDeal";
import CardItem from "./components/CardItem";
import ColorItem from "./components/ColorItem";
import ProductItem from "./components/ProductItem";
import RatingItem from "./components/RatingItem";
import { FaCaretDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sắp xếp");

  const sortOptions = [
    "Sản phẩm nổi bật",
    "Giá từ thấp đến cao",
    "Giá từ cao đến thấp",
  ];

  const data = [
    {
      information:
        "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz",
      view: 140,
    },
    {
      information:
        "Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12",
      view: 127,
    },
    {
      information:
        "Galaxy A52 4G lộ diện trên Google Play Console Xác nhận dùng chip Snapdragon 720",
      view: 55,
    },
    {
      information:
        "Galaxy A82 5G chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa",
      view: 55,
    },
  ];

  const dataItem = [
    {
      information: "Samsung Galaxy A32 4G",
      newPrice: 1200500,
      oldPrice: 2000000,
      discount: 25,
    },
    {
      information: "Samsung Galaxy A32 4G",
      newPrice: 1200500,
      oldPrice: 2000000,
    },
    {
      information: "Samsung Galaxy A32 4G",
      newPrice: 1200500,
      oldPrice: 2000000,
    },
    {
      information: "Samsung Galaxy A32 4G",
      newPrice: 1200000,
      oldPrice: 1500000,
      discount: 20,
    },
  ];

  const dataDeal = [
    {
      information: "Samsung Galaxy A32 4G",
      newPrice: 12005,
      oldPrice: 20000,
      discount: 20,
      sold: 10,
    },
    {
      information: "Samsung Apple A32 4G",
      newPrice: 12005,
      oldPrice: 20000,
      discount: 15,
      sold: 20,
    },
    {
      information: "Samsung Galaxy A32 4G",
      newPrice: 12000,
      oldPrice: 15000,
      discount: 20,
      sold: 30,
    },
    {
      information: "Samsung Galaxy A32 4G",
      newPrice: 12000,
      oldPrice: 15000,
      discount: 20,
      sold: 40,
    },
    {
      information: "Samsung Galaxy A32 4G",
      newPrice: 12000,
      oldPrice: 15000,
      discount: 20,
      sold: 50,
    },
    {
      information: "Samsung Galaxy A32 4G",
      newPrice: 12500,
      oldPrice: 15000,
      discount: 20,
      sold: 60,
    },
  ];

  const dataColor = [
    {
      color: "Đen",
      isSelected: true,
    },
    {
      color: "Hồng",
      isSelected: false,
    },
    {
      color: "Xanh",
      isSelected: false,
    },
  ];

  const dataProduct = [
    {
      name: "vivo Y18 8G/128GB",
      price: 1200000,
    },
    {
      name: "vivo Y18 8G/128GB",
      price: 1200000,
    },
    {
      name: "vivo Y18 8G/128GB",
      price: 1200000,
    },
    {
      name: "vivo Y18 8G/128GB",
      price: 1200000,
    },
  ];

  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        {/* Tin mới nhất */}
        <div>
          <div className="flex justify-between items-center my-2">
            <h3 className="text-2xl font-bold">Tin Mới Nhất</h3>
            <span className="text-black text-lg font-bold">Xem thêm</span>
          </div>
          <div className="flex gap-4">
            {data.map((item, index) => (
              <Card
                key={index}
                information={item.information}
                view={item.view}
              />
            ))}
          </div>
        </div>
        {/* Phụ kiện tương ứng */}
        <div>
          <div className="my-2">
            <h3 className="text-2xl font-bold">Phụ kiện tương ứng</h3>
          </div>
          <div className="flex gap-4">
            {dataItem.map((item, index) => (
              <CardItem
                key={index}
                information={item.information}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                discount={item.discount}
              />
            ))}
          </div>
        </div>
        {/* Deal of the day */}
        <div>
          <div className="my-2 flex justify-between items-center border-b-2 border-gray-200 pb-2">
            <div className="space-x-14">
              <h3 className="text-2xl inline">Deal of the day</h3>
              <span className="text-white text-lg font-bold bg-[#F04605] px-2 py-1 rounded-xs">
                End in: 12:00:00:00
              </span>
            </div>
            <span className="block border-b-2 border-black">View all</span>
          </div>
          <div className="flex gap-4 mt-10">
            {dataDeal.map((item, index) => (
              <CardDeal
                key={index}
                information={item.information}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                discount={item.discount}
                sold={item.sold}
              />
            ))}
          </div>
        </div>
        {/* Colorful*/}
        <div>
          <div className="flex justify-center items-center gap-2">
            <span>Màu:</span>
            {dataColor.map((item, index) => (
              <ColorItem
                key={index}
                color={item.color}
                isSelected={item.isSelected}
              />
            ))}
          </div>
        </div>
        {/* Rating */}
        <div>
          <div className="flex justify-center items-center gap-2">
            <span>Chọn đánh giá của bạn:</span>
            <RatingItem rating={5} />
          </div>
        </div>
        {/* Product */}
        <div>
          <div className="flex justify-between items-center my-2">
            <h3 className="text-2xl font-bold">Tin Mới Nhất</h3>
            <span className="text-gray-400 text-sm">Xóa lịch sử</span>
          </div>
          <div className="flex gap-4">
            {dataProduct.map((item, index) => (
              <ProductItem key={index} name={item.name} price={item.price} />
            ))}
          </div>
        </div>
        {/* Dropdown */}
        <div className="flex gap-4">
          <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-300 cursor-pointer hover:border-gray-400 transition-colors">
            <span className="text-sm">Bộ nhớ trong</span>
            <FaCaretDown className="text-gray-500" size={12} />
          </div>
          <div className="relative">
            <div
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-300 cursor-pointer hover:border-gray-400 transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-sm">{selectedSort}</span>
              <FaCaretDown
                className={`text-gray-500 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                size={12}
              />
            </div>

            {/* Simple Dropdown - matching the image */}
            {isDropdownOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />
                {/* Dropdown menu */}
                <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-md shadow-lg border border-gray-200 z-20 overflow-hidden">
                  {/* Options */}
                  <div className="pb-3">
                    {sortOptions.map((option, index) => (
                      <div className="flex justify-between items-center pr-2">
                        <div
                          key={index}
                          className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-gray-600 text-sm transition-colors"
                          onClick={() => handleSortSelect(option)}
                        >
                          {option}
                        </div>
                        {index === 0 && (
                          <button
                            onClick={() => setIsDropdownOpen(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors rounded-full border border-gray-300 p-1"
                          >
                            <IoClose size={18} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
