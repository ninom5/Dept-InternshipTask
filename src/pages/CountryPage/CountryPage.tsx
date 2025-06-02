import { useParams } from "react-router-dom";

export const CountryPage = () => {
  const code = useParams();
  return <div>country code: {code.code}</div>;
};
