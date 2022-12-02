interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-[#ffb526] text-white p-4 rounded-lg cursor-pointer">
      {title}
    </header>
  );
};

export default Header;
