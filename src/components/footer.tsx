type FooterProps = {
  title: string;
  description: string;
};

export const Footer = ({ title, description }: FooterProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-xs lg:max-w-sm xl:max-w-md">
      <footer className="p-4"> Hello Footer </footer>
    </div>
  );
};
