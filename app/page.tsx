"use client"
import Cart from "@/components/Cart";
import CountModal from "@/components/CountModal";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import OpenCartButton from "@/components/OpenCartButton";
import SelectedOption from "@/components/SelectedOption";
import SocialMedia from "@/components/SocialMedia";
import { Provider } from "@/context/Context";

export default function Home() {

  return (
    <Provider>
      <div
        style={{
          backgroundImage: "url('/bg_3.png')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            backgroundColor: "#0008",
          }}
        >
          <div className="min-h-screen font-sans pb-36">
            <Header />
            <div className="pt-20">
              <Menu />
              <OpenCartButton />
            </div>
          </div>
          <CountModal />
          <Cart />
          <SelectedOption />
          <SocialMedia />
        </div>
      </div>
    </Provider>
  );
}
