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

// loads data
const loadAbdomenData: any = () => JSON.parse(JSON.stringify(abdomenJson));
const loadBarnData: any = () => JSON.parse(JSON.stringify(barnJson));
const loadMsData: any = () => JSON.parse(JSON.stringify(msJson));
const loadNevroData: any = () => JSON.parse(JSON.stringify(nevroJson));
const loadTokData: any = () => JSON.parse(JSON.stringify(tokJson));

const abdomenData: AbdomenObj = loadAbdomenData();
const barnData: { barn: Barn } = loadBarnData();
const msData: { ms: Ms } = loadMsData();
const nevroData: { nevro: Nevro } = loadNevroData();
const tokData: { tok: Tok } = loadTokData();
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
