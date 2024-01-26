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
import "./protocols.css";
import store from "../../app/store";
import { useEffect } from "react";
const loadData = (data: any) => JSON.parse(JSON.stringify(data));

const abdomenData: AbdomenObj = loadData(abdomenJson);
const barnData: { barn: Barn } = loadData(barnJson);
const msData: { ms: Ms } = loadData(msJson);
const nevroData: { nevro: Nevro } = loadData(nevroJson);
const tokData: { tok: Tok } = loadData(tokJson);

// importer ProtocolSlice
// skal bruke protocolSlice.state som data:
const setProtocols = (filters: string[]) => {
  const dataList = [];
  filters.map((filter) => {
    switch (filter) {
      case "Abdomen":
        return dataList.push(abdomenData);
      case "TØK":
        return dataList.push(tokData);
      case "MS":
        return dataList.push(msData);
      case "Barn":
        return dataList.push(barnData);
      case "Nevro":
        return dataList.push(nevroData);
    }
  });
};

function Protocols() {
  let filteredProtocols:
    | AbdomenObj[][]
    | TokObj[][]
    | MsObj[][]
    | BarnObj[][]
    | NevroObj[][]
    | void = [];
  useEffect(() => {
    filteredProtocols = setProtocols(store.getState().filters);
  });

  console.log(filteredProtocols);

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
