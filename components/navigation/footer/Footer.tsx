export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      id="footer"
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
    ></footer>
  );
};

export default Footer;
