const Event = props => {
  const { name, url, description } = props.data;
  let desc = description.text;
  let title = name;
  if (title.length > 100) {
    title = title.substr(0, 100) + "...";
  }
  if (desc) {
    desc = desc.substr(0, 250) + "...";
  }
  return (
    <a
      href={url}
      target="_blank"
      className="list-group-item active text-light mb-1"
    >
      <h3 className="mb-3">{name.text}</h3>
      <p className="mb-1">{desc}</p>
    </a>
  );
};

export default Event;
