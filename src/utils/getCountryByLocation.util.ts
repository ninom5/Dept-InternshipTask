import { toast } from "react-toastify";

export const getCountryByLocation = (
  location: google.maps.LatLng,
  setSelectedCountry: (countryName: string) => void
) => {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ location }, (results, status) => {
    if (status !== "OK" || !results || results.length <= 0) {
      console.error("Geocoder failed due to:", status);
      toast.error("Error getting country name by location");
      return;
    }

    const countryComponent = results[0].address_components.find((component) =>
      component.types.includes("country")
    );
    const countryName = countryComponent?.long_name;

    if (!countryName) return;

    setSelectedCountry(countryName);
  });
};
