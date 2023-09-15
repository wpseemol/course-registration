const Header = () => {
  return (
    // defult tailwind some class 'sm:mx-8 sm:mt-6 lg:mx-customMargin mx-3 mt-2'
    <header className="sm:mx-8 sm:mt-6 lg:mx-customMargin mx-customMargin">
      <div className="text-center text-headFontSize font-bold">
        <a href="./">Course Registration</a>
      </div>
    </header>
  );
};

export default Header;
