import Button from "./button";
import homecart from "../../assets/home-cart.png"

function Navbar(){
    return(
        <nav className="flex justify-between mt-5 mb-6">
            <div className="text-black font-bold text-5xl font-serif">Sustainability <span className="text-lime-300">Hub</span></div>
            <div className=" w-[300px] flex justify-between">
                <Button name="Products"/>
                <Button name="Retailers"/>
                <img src={homecart} alt="" className="w-[50px] h=[50px]"/> 
            </div>  
        </nav>
    );
}

export default Navbar;