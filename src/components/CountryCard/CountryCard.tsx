import type { CountryType } from "types";
import flagImg from "@assets/images/OIP.jpg";
import s from "./countryCard.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const CountryCard = ({ country }: { country: CountryType }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((c: CountryType) => c.code === country.code));
  }, [country.code]);

  const handleAddToFav = (e: React.MouseEvent, country: CountryType) => {
    e.stopPropagation();

    const favorites: CountryType[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
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

        <span
          className={s.heartIcon}
          title="Add to favorites"
          onClick={(e) => handleAddToFav(e, country)}
        >
          {isFavorite ? "♥" : "♡"}
        </span>
      </div>
    </section>
  );
};
