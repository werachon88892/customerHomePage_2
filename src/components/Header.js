import Head from "next/head"; import PropTypes from "prop-types"; function Header({ title }) {
  return (
    <div>
      <Head>
        <title>Green Entrepreneurship Global Foundation</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
