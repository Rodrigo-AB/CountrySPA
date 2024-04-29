export interface Region {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       RegionElement;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  car:          Car;
  timezones:    string[];
  continents:   RegionElement[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  cioc?:        string;
  borders?:     string[];
  gini?:        { [key: string]: number };
  fifa?:        string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum RegionElement {
  Africa = "Africa",
  Asia = "Asia",
}

export interface Currencies {
  EUR?: Aoa;
  MZN?: Aoa;
  GBP?: Aoa;
  SHP?: Aoa;
  CVE?: Aoa;
  XAF?: Aoa;
  STN?: Aoa;
  ZMW?: Aoa;
  NGN?: Aoa;
  GMD?: Aoa;
  SOS?: Aoa;
  SDG?: Sdg;
  MAD?: Aoa;
  LSL?: Aoa;
  ZAR?: Aoa;
  KES?: Aoa;
  XOF?: Aoa;
  TZS?: Aoa;
  GHS?: Aoa;
  MGA?: Aoa;
  SCR?: Aoa;
  DZD?: Aoa;
  MRU?: Aoa;
  AOA?: Aoa;
  SSP?: Aoa;
  ETB?: Aoa;
  SZL?: Aoa;
  BWP?: Aoa;
  KMF?: Aoa;
  USD?: Aoa;
  UGX?: Aoa;
  TND?: Aoa;
  SLL?: Aoa;
  RWF?: Aoa;
  NAD?: Aoa;
  EGP?: Aoa;
  MUR?: Aoa;
  LRD?: Aoa;
  CDF?: Aoa;
  ERN?: Aoa;
  GNF?: Aoa;
  BIF?: Aoa;
  MWK?: Aoa;
  DJF?: Aoa;
  LYD?: Aoa;
  ZWL?: Aoa;
}

export interface Aoa {
  name:   string;
  symbol: string;
}

export interface Sdg {
  name: string;
}

export interface Demonyms {
  eng:  EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  fra?: Fra;
  por?: string;
  eng?: EngEnum;
  spa?: string;
  ara?: Ara;
  som?: string;
  ber?: string;
  sot?: string;
  swa?: string;
  mlg?: string;
  crs?: string;
  mey?: string;
  amh?: string;
  afr?: string;
  nbl?: string;
  nso?: string;
  ssw?: string;
  tsn?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zul?: string;
  zdj?: string;
  kin?: string;
  kon?: string;
  lin?: string;
  deu?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  mfe?: string;
  lua?: string;
  sag?: string;
  tir?: string;
  pov?: string;
  run?: string;
  nya?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  sna?: string;
  toi?: string;
  zib?: string;
}

export enum Ara {
  Arabic = "Arabic",
}

export enum EngEnum {
  English = "English",
}

export enum Fra {
  French = "French",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
  EasternAfrica = "Eastern Africa",
  MiddleAfrica = "Middle Africa",
  NorthernAfrica = "Northern Africa",
  SouthernAfrica = "Southern Africa",
  WesternAfrica = "Western Africa",
}
