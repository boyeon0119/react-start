import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Point from "../components/Point";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Point
            key={details.id}
            rating={details.rating}
            coverImg={details.medium_cover_image}
            title={details.title}
            genres={details.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
