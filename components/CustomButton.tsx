import { CustomButtonProps } from "@/types";
import Link from "next/link";

const CustomButton = ({ containerStyles, title, route }: CustomButtonProps) => {
  return (
    <Link href={route || ""}>
      <button className={containerStyles}>{title}</button>
    </Link>
  );
};

export default CustomButton;
