import { useFetch } from "../hook/useFetch";
import { Link } from "react-router-dom";

function CountriesList() {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  if (isPending) {
    return <span className="loading loading-ring loading-lg"></span>
  }
  console.log(data);
  return (
    <div>
      <ul key={Math.random()} className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 flex-wrap">
        {data &&
          data.map((country) => {
            const {
              name: { common },
              flags: { svg },
              population,
              region,
              capital,
            } = country;
            return (
              <div className="w-full bg-base-100 shadow-xl image-full rounded-xl">
                <Link to={`/singleCountry/${common}`} className="w-full">
                  <figure>
                    <img
                      src={svg}
                      alt={common + "flag"}
                      className="object-cover rounded-2xl"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{common}</h2>
                    <div className="text-xl">
                      <p>
                        <span className="font-semibold">
                          Population: {population}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">Region: {region}</span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          capital: {capital ? capital[0] : "No Capital"}
                        </span>
                      </p>
                    </div>

                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Card</button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default CountriesList;
