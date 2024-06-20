import Navbar from "../Navbar";
import HowToSellBanner from "../how-to-sell-banner";
import Products from "../products-compoents";
import SellPageDetails from "../sell-page-details";


export default function HowToSellPage() {
    return(
        <div className=" bg-[#121921] text-white">
            <HowToSellBanner />
            <Products />
            <SellPageDetails />
        </div>
    )
}