export interface AbdomenObj {
  abdomen: Abdomen[];
}
export interface Abdomen {
  protokoll: string;
  pacstekst: string;
  beskrivelse: string;
  undersokelsesnavn: string;
  varighet: string;
  forberedelsestid: string;
  CT1: string;
  CT2: string;
  CT3: string;
  NCRPHovedkode: string;
  navnekode: string;
  IVKontrastkode: string;
  POKontrast: string;
  transplantat: string;
  tilknyttetEHandbok: string;
  tilknyttetInkallingsbrev: string;
}

export interface TokObj {
  tok: Tok[];
}

export interface Tok {
  protokoll: string;
  pacstekst: string;
  beskrivelse: string;
  undersokelsesnavn: string;
  varighet: string;
  forberedelsestid: string;
  CT1: string;
  CT2: string;
  CT3: string;
  NCRPHovedkode: string;
  navnekode: string;
  IVKontrastkode: string;
  POKontrast: string;
  perfusjon: string;
  bildeveiledet: string;
  sideangivelse: string;
  transplantat: string;
  dynamiskUnderokelse: string;
  tilknyttetEHandbok: string;
  tilknyttetInkallingsbrev: string;
}

export interface MsObj {
  ms: Ms[];
}

export interface Ms {
  protokoll: string;
  pacstekst: string;
  beskrivelse: string;
  undersokelsesnavn: string;
  varighet: string;
  forberedelsestid: string;
  CT1: string;
  CT2: string;
  CT3: string;
  NCRPHovedkode: string;
  navnekode: string;
  IVKontrastkode: string;
  sideangivelse: string;
  tilknyttetEHandbok: string;
  tilknyttetInkallingsbrev: string;
}

export interface BarnObj {
  barn: Barn[];
}

export interface Barn {
  protokoll: string;
  beskrivelse: string;
  undersokelsesnavn: string;
  varighet: string;
  forberedelsestid: string;
  CT1: string;
  CT2: string;
  CT3: string;
  NCRPHovedkode: string;
  navnekode: string;
  IVKontrastkode: string;
  EKG: string;
  tilknyttetEHandbok: string;
  tilknyttetInkallingsbrev: string;
}

export interface NevroObj {
  nevro: Nevro[];
}

export interface Nevro {
  protokoll: string;
  beskrivelse: string;
  undersokelsesnavn: string;
  varighet: string;
  forberedelsestid: string;
  CT1: string;
  CT2: string;
  CT3: string;
  NCRPHovedkode: string;
  navnekode: string;
  IVKontrastkode: string;
  utenforLab: string;
  dynamiskUnderokelse: string;
  EKG: string;
  perfusjon: string;
  tilknyttetEHandbok: string;
  tilknyttetInkallingsbrev: string;
}

// redux types
export type State = [];
export type Action = { name: string; payload?: any };
