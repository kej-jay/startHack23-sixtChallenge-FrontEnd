export type CardItemT = {
  item: StockT|QuoteT|InfoT|PredictionT;
  hasActions?: boolean;
  hasVariant?: boolean;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
};

export type ProfileItemT = {
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
  matches: string;
  name: string;
};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

export type DataT = {
  id: number;
  name: string;
  isOnline: boolean;
  match: string;
  description: string;
  message: string;
  image: any;
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
};

export type StockT = {
  id: number;
  type: "Stock";
  name: string;
  isOnline: boolean;
  match: number;
  description: string;
  message?: string;
  image: any;
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
};

export type QuoteT = {
  id: number;
  type: "Quote";
  name: string;
  quote: string;
  isTrue: boolean;
  description: "Is this quote true or not?";
  explanaition: string;
};

export type PredictionT = {
  id: number;
  type: "Up or Dahn";
  name: string;
  image: any;
  direction: "Up"|"Down";
  description: string;
  explanaition: string;
};

export type InfoT = {
  id: number;
  type: "Info";
  name: string;
  description: string;
  explanaition: string;
};
