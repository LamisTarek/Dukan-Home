import Link from "next/link";
import {
  faHome,
  faLayerGroup,
  faTag,
  faCartPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNavbar = () => {
  return (
    <nav className="fixed mt-5 container bottom-0 w-full overflow-x-hidden bg-white p-4 flex justify-around items-center text-best-black sm:hidden">
      <Link href="/" className="flex flex-col items-center text-orange-500">
        <FontAwesomeIcon icon={faHome} className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/categories" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faLayerGroup} className="h-6 w-6" />
        <span className="text-xs">Categories</span>
      </Link>
      <Link href="/deals" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faTag} className="h-6 w-6" />
        <span className="text-xs">Deals</span>
      </Link>
      <Link href="/cart" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faCartPlus} className="h-6 w-6" />
        <span className="text-xs">Cart</span>
      </Link>
      <Link href="/account" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
        <span className="text-xs">Account</span>
      </Link>
    </nav>
  );
};

export default MobileNavbar;
