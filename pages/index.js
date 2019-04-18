import Master from "../components/Master";
import Price from "../components/Price";
import fetch from "isomorphic-unfetch";

const Index = props => {
  return (
    <Master>
      <div className="row">
        <div className="col-12">
          <h2>Precio del bitcoin</h2>
          <Price price={props.priceBitcoin} />
          <div className="col-md-8">
            <h2>Noticias sobre bitcoin</h2>
          </div>
          <div className="col-md-4">
            <h2>Proximos eventos bitcoin</h2>
          </div>
        </div>
      </div>
    </Master>
  );
};

Index.getInitialProps = async () => {
  const price = await fetch("https://api.coinmarketcap.com/v2/ticker/1/");
  const priceBitcoin = await price.json();
  return { priceBitcoin: priceBitcoin.data.quotes.USD };
};

export default Index;
