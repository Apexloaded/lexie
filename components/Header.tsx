import React, { useEffect } from "react";
import Link from "next/link";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
  IoPersonCircle,
} from "react-icons/io5";
import { useAppSelector } from "../hooks/redux.hook";
import { useDispatch } from "react-redux";
import { calculateCart } from "../slices/cart/cartSlice";

function Header() {
  const { amount, cartItem } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateCart());
  }, [cartItem]);

  return (
    <div className="flex h-20 border-b border-neutral-300">
      <div className="w-72 border-r border-neutral-300 flex p-5 items-center justify-start">
        <Link href={`/`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="109"
            height="37"
            viewBox="0 0 109 37"
            fill="none"
          >
            <path
              d="M101.626 19.927H90.6699C90.6699 17.8029 92.4958 15.1309 96.1477 15.1309C100.439 15.1309 101.875 18.1437 101.626 19.927ZM96.5798 36.75C101.449 36.75 105.71 35.5327 108.406 32.5443L103.171 28.5394C102.283 29.7567 99.1179 30.6149 97.2859 30.5662C93.9201 30.5662 91.102 28.2898 90.7551 25.9161H108.406C110.883 16.0196 104.754 9.09317 95.9408 9.04448C87.8762 8.99579 83.1592 15.7396 83.1592 22.8485C83.1714 29.6775 88.564 36.75 96.5798 36.75ZM78.6735 36.257V9.78703H72.0879V36.257H78.6735ZM75.4051 7.35852C76.3741 7.33038 77.2949 6.92915 77.9754 6.23854C78.6558 5.54792 79.0432 4.62126 79.0569 3.65187C79.0569 2.68333 78.6722 1.75446 77.9873 1.06961C77.3025 0.384747 76.3736 0 75.4051 0C74.4365 0 73.5076 0.384747 72.8228 1.06961C72.1379 1.75446 71.7532 2.68333 71.7532 3.65187C71.7757 4.61847 72.1661 5.5401 72.8446 6.22884C73.5232 6.91759 74.4389 7.32159 75.4051 7.35852ZM49.3307 36.257L54.8694 28.4846L60.4141 36.257H68.3813L58.8317 22.7451L68.2292 9.78703H60.1646L54.8694 17.5046L49.6107 9.78703H41.5644L50.9619 23.092L41.4122 36.257H49.3307ZM33.1042 19.927H22.1486C22.1486 17.8029 23.9745 15.1309 27.6264 15.1309C31.9113 15.1309 33.3477 18.1437 33.1042 19.927ZM28.0525 36.75C32.9216 36.75 37.1822 35.5327 39.8784 32.5443L34.638 28.5394C33.7433 29.7567 30.5783 30.6149 28.7463 30.5662C25.3805 30.5662 22.5625 28.2898 22.2156 25.9161H39.8663C42.3435 16.0196 36.2144 9.09317 27.4012 9.04448C19.3367 8.99579 14.6197 15.7396 14.6197 22.8485C14.644 29.6775 20.0366 36.75 28.0525 36.75ZM11.0104 36.257V29.1785C8.38715 29.1785 6.90205 27.103 6.90205 24.2302V0.133903H0V24.3823C0 31.2113 4.45529 36.257 11.0347 36.257H11.0104Z"
              fill="#0D1D4A"
            />
          </svg>
        </Link>
      </div>
      <div className="flex-1">
        <div className="w-full h-full flex items-center justify-between p-5">
          <div className="bg-neutral-100 rounded-lg hidden md:flex items-center gap-2 px-3">
            <IoSearchOutline className="text-2xl stroke-neutral-400" />
            <input
              type="search"
              className="py-3 bg-transparent outline-none w-80"
              placeholder="search amoung 100+ products"
            />
          </div>
          <div className="flex gap-5 items-center">
            <Link href="/" className="hidden md:inline">
              <div className="bg-primary-100 hover:bg-primary-200 transition-all duration-500 py-3 px-5 rounded-xl flex items-center gap-2">
                <p className="text-primary-500">Wishlist</p>
                <IoHeartOutline className="stroke-primary-500 text-2xl" />
              </div>
            </Link>
            <Link href="/cart">
              <div className="bg-primary-100 hover:bg-primary-200 transition-all duration-500 py-3 px-5 rounded-xl flex items-center gap-2">
                <p className="text-primary-500 hidden md:inline">Your Cart</p>
                <div className="relative">
                  <IoCartOutline className="stroke-primary-500 text-2xl" />
                  <span className="absolute -top-2 -right-2 bg-primary-500 px-1 text-xs rounded-full text-light flex items-center justify-center">
                    {amount}
                  </span>
                </div>
              </div>
            </Link>
            <div className="border border-neutral-300 h-12 w-12 rounded-full flex items-center justify-center">
              <IoPersonCircle className="text-3xl fill-neutral-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
