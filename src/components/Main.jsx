import { COMMUNITY, HOME, REGISTER } from "../constants/App.constants";
import './Main.css';

export const Main = () => {
  return (
    <div className="div-imagen ">
      <body class="d-flex h-100 text-center text-bg-dark">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main class="px-3">
            <h1>WELCOME TO OUR COMMUNITY</h1>

            <p class="lead">
              <a
                href={REGISTER}
                class="btn btn-lg btn-light fw-bold border-white bg-white"
              >
                Join me.
              </a>

              <a
                href={COMMUNITY}
                class="btn btn-lg btn-light fw-bold border-white bg-white"
              >
                Know us!
              </a>
            </p>
          </main>
        </div>
      </body>
    </div>
  );
}



