import News from "./News";

const NewsContainer = props => {
  return (
    <div className="row">
      {props.news.map(news => (
        <News key={news.url} news={news} />
      ))}
    </div>
  );
};

export default NewsContainer;
