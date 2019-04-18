const Price = props => {
  console.log(props.price);
  const {
    price,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
  } = props.price;
  return (
    <div className="card text-white bg-success mb-3">
      <div className="card-header">Precio del Bitcoin</div>
      <div className="card-boy">
        <h4 className="card-title">Precio Actual: $ {price}</h4>
        <div className="d-md-flex justify-content-between">
          <p className="card-text">
            <span className="font-weight-bold">Última horas: </span>
            {percent_change_1h} %
          </p>
          <p className="card-text">
            <span className="font-weight-bold">Última 24 horas: </span>
            {percent_change_24h} %
          </p>
          <p className="card-text">
            <span className="font-weight-bold">Últimos 7 dias: </span>
            {percent_change_7d} %
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;
