import "./info.css";
import { useSelector } from "react-redux";
function Info() {
  const chosenProtocol = useSelector((state: any) => state.protocols);
  return (
    <div className="protocoll">
      {Object.keys(chosenProtocol).length > 0 ? (
        Object.keys(chosenProtocol).map((key) => {
          if (chosenProtocol[key])
            return (
              <div className="protocol-element">
                <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                <p>{chosenProtocol[key]}</p>
              </div>
            );
        })
      ) : (
        <ol>
          <li>
            Velg legeseksjon
          </li>
          <li>
          Eventuelt: <br />
          Søk etter protokollnavn eller kroppsdel i søkefelt
          </li>
          <li>
          Velg protokoll fra liste til høyre
          </li>
          <li>
            Informasjon om protokoll vil vises i dette viduet
          </li>
        </ol>
      )}
    </div>
  );
}

export default Info;
