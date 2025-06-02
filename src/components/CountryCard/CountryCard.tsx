import s from "./countryCard.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMapContext } from "@hooks/index";
import { getFavorites } from "utils/index";
import flagImg from "@assets/images/OIP.jpg";
import type { CountryType } from "types";

export const CountryCard = ({ country }: { country: CountryType }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();
  const { goToLocation, setLocation } = useMapContext();

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.some((c: CountryType) => c.code === country.code));
  }, [country.code]);

  const handleGoToLocation = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!window.google || !window.google.maps) {
      toast.error("Google Maps API not loaded");
      return;
    }

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: country.name }, (result, status) => {
      if (status !== "OK" || !result || !result[0]) {
        toast.error("Error getting country location");
        console.error(`Error status: ${status}`);
        return;
      }

      const location = result[0].geometry.location;
      if (!location) {
        toast.error("Can't get country location");
        return;
      }

      setLocation(location);
      goToLocation(location, 7);
    });
  };

  const handleAddToFav = (e: React.MouseEvent) => {
    e.stopPropagation();

    const favorites: CountryType[] = getFavorites();
    const isAlreadyFav = favorites.some((fav) => fav.code === country.code);

    if (
      !confirm(
        isAlreadyFav
          ? `Do you really want to remove country: ${country.name} from favorites?`
          : `Do you want to add country: ${country.name} to favorites?`
      )
    )
      return;

    let updatedFavorites = isAlreadyFav
      ? favorites.filter((c) => c.code !== country.code)
      : [...favorites, country];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isAlreadyFav);

    window.dispatchEvent(new Event("favUpdated"));
  };

  return (
    <section
      className={s.countryCard}
      onClick={() => navigate(`/countries/${country.code}`)}
    >
      <div className={s.flagImgWrapper}>
        <img src={flagImg} alt="Flag image placeholder" />
      </div>

      <div className={s.countryInfo}>
        <h2>
          Country: <em> {country.name}</em>
        </h2>
        <p>
          Code: <em>{country.code}</em>
        </p>

        <span className={s.locationSpan} onClick={(e) => handleGoToLocation(e)}>
          Show country location
        </span>

        <span
          className={s.heartIcon}
          title="Add to favorites"
          onClick={(e) => handleAddToFav(e)}
        >
          {isFavorite ? "♥" : "♡"}
        </span>
      </div>
    </section>
  );
};
