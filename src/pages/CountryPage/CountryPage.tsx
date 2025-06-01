import { useParams } from "react-router-dom";

export const CountryPage = () => {
  const code = useParams();
  console.log(code);
  return <div>country code: {code.code}</div>;
};
