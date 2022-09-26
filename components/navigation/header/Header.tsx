export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header {...headerProps} id="header" className={`${className}`}></header>
  );
};

export default Header;
