import styles from "./cardLogo.module.css";

interface CardLogoProps {
  logo: string;
  name: string;
}
function CardLogo({ logo, name }: CardLogoProps) {
  return (
    <div className={styles.imageWrapper}>
      <img
        className={styles.image}
        src={logo ? logo : "/assets/asaLogo.png"}
        alt={name ? name : "Asalytics Card Logo"}
      />
    </div>
  );
}

export default CardLogo;
