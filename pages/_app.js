import '../styles/globals.css'
import App from 'next/app';
import Default from "../components/layouts/Default";

class MyApp extends App {
  render(){
    const {Component, pageProps} = this.props;
    const Layout = Component.Layout || Default

    return(
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    )
  }
}

export default MyApp