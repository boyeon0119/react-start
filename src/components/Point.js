function Point({ rating, coverImg, title, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <h3>{rating}</h3>
      <ul>
        {genres.map((genre) => (
          <li> {genre} </li>
        ))}
      </ul>
    </div>
  );
}
export default Point;
