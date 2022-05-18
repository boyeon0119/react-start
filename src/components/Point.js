function Point({ rating, download_count, coverImg, title, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <ul>
        <li>{rating}</li>
        <li>{download_count}</li>
      </ul>
      <ul>
        {genres.map((genre) => (
          <li> {genre} </li>
        ))}
      </ul>
    </div>
  );
}
export default Point;
