type HeaderProps = {
  title: string;
  description: string;
};

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-xs lg:max-w-sm xl:max-w-md">
      <header className="p-4"> Hello Header </header>
    </div>
  );
};
