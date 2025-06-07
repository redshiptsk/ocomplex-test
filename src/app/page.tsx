'use client'
import { CartBlock } from "./components/CartBlock/CartBlock";
import { GoodsBlock } from "./components/GoodsBlock/GoodsBlock";
import { Header } from "./components/Header/Header";
import { ReviewBlock } from "./components/ReviewBlock/ReviewBlock";


export default function Home() {

  return (
    <>
      <Header />
      <ReviewBlock />
      <CartBlock />
      <GoodsBlock />
    </>
  );
}
