import { useSelector, useDispatch } from "react-redux";
import abdomenJson from "../../json/abdomen_protokollark.json";
import barnJson from "../../json/barn_protokollark.json";
import msJson from "../../json/ms_protokollark.json";
import nevroJson from "../../json/nevro_protokollark.json";
import tokJson from "../../json/tok_protokollark.json";
import { setChosenProtocol } from "./protocolSlice";
import {
  Abdomen,
  AbdomenObj,
  Barn,
  Ms,
  Nevro,
  Tok,
  Protocol,
} from "../../types";
import "./protocols.css";
import { useState } from "react";
const loadData = (data: any) => JSON.parse(JSON.stringify(data));

const abdomenData = loadData(abdomenJson).abdomen;
const barnData = loadData(barnJson).barn;
const msData = loadData(msJson).ms;
const nevroData = loadData(nevroJson).nevro;
const tokData = loadData(tokJson).tok;

// importer ProtocolSlice
// skal bruke protocolSlice.state som data:
const setProtocols = (filters: string[]) => {
  let dataList: any[] = [];
  filters.forEach((filter) => {
    switch (filter) {
      case "Abdomen":
        dataList = [...dataList, ...abdomenData];
        return;
      case "TØK":
        dataList = [...dataList, ...tokData];
        return;
      case "MS":
        dataList = [...dataList, ...msData];
        return;
      case "Barn":
        dataList = [...dataList, ...barnData];
        return;
      case "Nevro":
        dataList = [...dataList, ...nevroData];
        return;
      default: {
        return dataList;
      }
    }
  });
  return dataList;
};

function Protocols() {
  const dispatch = useDispatch();
  const filterSelected = useSelector((state: any) => state.filters);
  const [searchQuery, setSearchQuery] = useState("");
  const data = setProtocols(filterSelected);
  const chosenProtocol = useSelector((state: any) => state.chosenProtocol);

  console.log(chosenProtocol);
  console.log(data);
  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className="protocolList">
        {data
          .filter((item) => {
            if (searchQuery.trim() === "") return true;
            return item.protokoll
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
          .map((prot) => (
            <li>
              <button
                className="protocol-link"
                onClick={() => dispatch(setChosenProtocol(prot))}
              >
                {prot.protokoll}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
export default Protocols;
