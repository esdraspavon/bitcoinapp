import Master from "../components/Master";
import Price from "../components/Price";
import NewsContainer from "../components/NewsContainer";
import Events from "../components/Events";
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
            <NewsContainer news={props.news} />
          </div>
          <div className="col-md-4">
            <h2>Proximos eventos bitcoin</h2>
            <Events events={props.events} />
          </div>
        </div>
      </div>
    </Master>
  );
};

Index.getInitialProps = async () => {
  const price = await fetch("https://api.coinmarketcap.com/v2/ticker/1/");
  const news = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&sortBy=published&apiKey=4bacc94fabe34ced8c6b9c6a53c467e2&language=es`
  );
  const events = await fetch(
    "https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Argentina&token=B7GX7TMDY5ZWIQZTTWCX&locale=es_ES"
  );

  const priceBitcoin = await price.json();
  const resNews = await news.json();
  const resEvents = await events.json();
  return {
    priceBitcoin: priceBitcoin.data.quotes.USD,
    news: resNews.articles,
    events: resEvents.events
  };
};

export default Index;
