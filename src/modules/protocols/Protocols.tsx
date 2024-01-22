import {
  Nevro,
  NevroObj,
  Tok,
  TokObj,
  Barn,
  BarnObj,
  Abdomen,
  AbdomenObj,
  Ms,
  MsObj,
} from "../../types";
import abdomenJson from "../../json/abdomen_protokollark.json";
import barnJson from "../../json/barn_protokollark.json";
import msJson from "../../json/ms_protokollark.json";
import nevroJson from "../../json/nevro_protokollark.json";
import tokJson from "../../json/tok_protokollark.json";

const loadData = (data: any) => JSON.parse(JSON.stringify(data));

const abdomenData: AbdomenObj = loadData(abdomenJson);
const barnData: { barn: Barn } = loadData(barnJson);
const msData: { ms: Ms } = loadData(msJson);
const nevroData: { nevro: Nevro } = loadData(nevroJson);
const tokData: { tok: Tok } = loadData(tokJson);
console.log(abdomenData);
// importer ProtocolSlice
// skal bruke protocolSlice.state som data:
const filteredProtocols:
  | AbdomenObj[]
  | TokObj[]
  | MsObj[]
  | BarnObj[]
  | NevroObj[] = [abdomenData];
console.log(filteredProtocols);

function Protocols() {
  return (
    <ul className="protocolList">
      {abdomenData.abdomen.map((prot: Abdomen) => (
        <li>
          <a>{prot.protokoll}</a>
        </li>
      ))}
    </ul>
  );
}

export default Protocols;
