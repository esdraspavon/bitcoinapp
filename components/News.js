const News = props => {
  const { urlToImage, url, title, description, source } = props.news;
  let image;

  if (urlToImage !== "") {
    image = <img src={urlToImage} alt={title} className="card-img-top" />;
  } else {
    imagen = <p className="text-center my-5">No dispone de imagen</p>;
  }

  return (
    <div className="col-md-6 col-12 mb-4">
      <div className="card">
        <div className="card-image">{image}</div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <p className="card-text">{source.name}</p>
        <a href={url} target="_blank" className="btn btn-primary btn-block">
          Leer
        </a>
      </div>
    </div>
  );
};

export default News;
