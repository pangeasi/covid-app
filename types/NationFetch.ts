type Structure = {
  date: Date;
  newCases: number;
};

type Pagination = {
  current: string;
  next: null | string;
  previous: null | string;
  first: string;
  last: string;
};

export type NationFetch = {
  length: number;
  maxPageLimit: number;
  totalRecords: number;
  data: Structure[];
  pagination: Pagination;
};
