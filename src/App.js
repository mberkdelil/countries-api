import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCountries, searchCountries } from "./actions/index"

function App(props) {

  const [search, setSearch] = useState("");

  useEffect(() => {
    props.getCountries();

  }, []);

  console.log(props);

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        props.searchCountries(search);
      }}>
        <div className="input-group" style={{ width: "82%", marginLeft: "7%", marginTop: "1%" }}>
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" aria-label="Radio button for following text input" />
            </div>
          </div>
          <input onChange={e => { setSearch(e.target.value) }} value={search} type="text" className="form-control"
            placeholder="Search Countries" />
        </div>
      </form>

      <div className="container col-12" style={{ display: "inline-block", marginLeft: "5%" }}>

        {
          props.countries.length > 1 ? props.countries.map((country, i) => (
            <div key={i} className="card" style={{
              width: "18rem", padding: "1px", marginTop: "15px", float: "left", margin: "15px"
              , height: "400px"
            }}>
              <img className="card-img-top" src={country.flags.png} alt={country.name.common} />
              <div className="card-body">
                <h3 className="card-title">{country.name.common}</h3>
                <p className="card-text">{country.capital}</p>
                <h5 className="card-title">{country.region}</h5>
              </div>
            </div>
          )) : <h3>Please Wait!... Loading Countries...</h3>
        }
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    countries: state.countries
  }
}

export default connect(mapStateToProps, { getCountries, searchCountries })(App);
