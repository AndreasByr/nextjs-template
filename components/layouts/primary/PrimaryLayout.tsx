import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}
const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>NextJs Template</title>
      </Head>
      <div {...divProps} className={``}>
        <Header />
        <main id="content" className="">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
