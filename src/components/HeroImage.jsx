import "../styles/heroImage.css";
import profile from "../assets/profile.png";

export default function HeroImage() {
  return (
    <div className="hero-image">
      <img src={profile} alt="Chetana Ingle" />
    </div>
  );
}