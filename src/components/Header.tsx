import { HeaderProps } from "../Types";

const Header = ({ title, id, toggle }: HeaderProps) => {
  return (
    <header
      className="bg-[#ffb526] text-white p-4 rounded-lg cursor-pointer"
      onClick={() => toggle(id)}
    >
      {title}
    </header>
  );
};

export default Header;
