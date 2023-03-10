import React from "react";
import { useNavigate } from "react-router-dom";
import charactersImg from "../assets/img/rick-and-morty-characters.jpg";
import episodesImg from "../assets/img/rick-and-morty-episodes.jpg";
import locationsImg from "../assets/img/rick-and-morty-locations.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="container d-flex justify-content-center align-items-center vh-100">
      <section>
        <div className="row align-items-center">
          <div class="card mx-2 shadow col p-0">
            <img src={charactersImg} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-end px-0">
              <h5 className="card-title text-center">Personajes</h5>
              <div className="text-center">
                <button
                  class="btn btn-primary btn-sm"
                  onClick={() => navigate("/characters")}
                >
                  Ver Todos
                </button>
              </div>
            </div>
          </div>
          <div class="card mx-2 shadow col p-0">
            <img src={episodesImg} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-end px-0">
              <h5 className="card-title text-center">Episodios</h5>
              <div className="text-center">
                <button
                  class="btn btn-primary btn-sm"
                  onClick={() => navigate("/episodes")}
                >
                  Ver Todos
                </button>
              </div>
            </div>
          </div>
          <div class="card mx-2 shadow col p-0">
            <img src={locationsImg} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-end px-0">
              <h5 className="card-title text-center text-break">Locaciones</h5>
              <div className="text-center">
                <button
                  class="btn btn-primary btn-sm"
                  onClick={() => navigate("/locations")}
                >
                  Ver Todos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
