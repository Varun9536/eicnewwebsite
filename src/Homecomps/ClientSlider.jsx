
import styles from "./Styles/clientslider.module.css"
import c1 from "../assets/new2025/home/clients/c1.png";
import c2 from "../assets/new2025/home/clients/c2.png";
import c3 from "../assets/new2025/home/clients/c3.png";
import c4 from "../assets/new2025/home/clients/c4.png";
import c5 from "../assets/new2025/home/clients/c5.png";
import c6 from "../assets/new2025/home/clients/c6.png";
import c7 from "../assets/new2025/home/clients/c7.png";
import c8 from "../assets/new2025/home/clients/c8.png";
import c9 from "../assets/new2025/home/clients/c9.png";
import c10 from "../assets/new2025/home/clients/c10.png";
import c11 from "../assets/new2025/home/clients/c11.png";
import c12 from "../assets/new2025/home/clients/c12.png";
import c13 from "../assets/new2025/home/clients/c13.png";
import c14 from "../assets/new2025/home/clients/c14.png";
import c15 from "../assets/new2025/home/clients/c15.png";
import c16 from "../assets/new2025/home/clients/c16.png";
import c17 from "../assets/new2025/home/clients/c17.png";
import c18 from "../assets/new2025/home/clients/c18.png";
import c19 from "../assets/new2025/home/clients/c19.png";
import c20 from "../assets/new2025/home/clients/c20.png";
import c21 from "../assets/new2025/home/clients/c21.png";
import c22 from "../assets/new2025/home/clients/c22.png";
import c23 from "../assets/new2025/home/clients/c23.png";
import c24 from "../assets/new2025/home/clients/c24.png";
import c25 from "../assets/new2025/home/clients/c25.png";
import c26 from "../assets/new2025/home/clients/c26.png";
import c27 from "../assets/new2025/home/clients/c27.png";
import c28 from "../assets/new2025/home/clients/c28.png";
import c29 from "../assets/new2025/home/clients/c29.png";
import c30 from "../assets/new2025/home/clients/c30.png";
import c31 from "../assets/new2025/home/clients/c31.png";
import c32 from "../assets/new2025/home/clients/c32.png";
import c33 from "../assets/new2025/home/clients/c33.png";
import c34 from "../assets/new2025/home/clients/c34.png";
import c35 from "../assets/new2025/home/clients/c35.png";
import c36 from "../assets/new2025/home/clients/c36.png";

export default function ClientSlider() {

    const logos = [
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
  c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
  c21, c22, c23, c24, c25, c26, c27, c28, c29, c30,
  c31, c32, c33, c34, c35, c36,
];


const repeatedLogos = [...logos, ...logos];
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {repeatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`company-${index + 1}`}
            className={styles.logo}
            draggable="false"
          />
        ))}
      </div>
    </div>
  )
}
