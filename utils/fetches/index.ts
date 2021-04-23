import { NationFetch } from "../../types/NationFetch";

export const fetchNation = async (region): Promise<NationFetch> => {
  const res = await fetch(
    `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType%3Dregion%3BareaName%3D${region}&structure=%7B%22date%22%3A%22date%22%2C%22newCases%22%3A%22newCasesByPublishDate%22%7D&=`,
    {
      method: "GET",
      headers: {
        Accepts:
          "application/json; application/xml; text/csv; application/vnd.PHE-COVID19.v1+json; application/vnd.PHE-COVID19.v1+xml",
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
};
