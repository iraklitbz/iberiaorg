import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import headerMenu from "../../util/components/menuTrigger";


const Header = () => {
  useEffect(() => {
    headerMenu();
  },[])
  return ( 
      <header className="header position-fixed js-header " data-theme="dark-1">
        <Navbar />
      </header>
   );
}
 
export default Header;