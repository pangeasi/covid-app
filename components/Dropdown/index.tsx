import { regions } from "../../utils/constants";

export const Dropdown = ({ setRegion }) => {
  return (
    <select
      name="region"
      id="regions"
      defaultValue="London"
      onChange={(ev) => setRegion(ev.target.value)}
    >
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};
