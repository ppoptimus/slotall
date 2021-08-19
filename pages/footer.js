import Image from "next/image";
import faceImg from "../public/img/facebook.svg";
import lineImg from "../public/img/line.svg";

export default function Footer() {
  return (
    <div style={{ bottom: "10px", width: "100%", textAlign: "center" }}>
      <a href="https://www.facebook.com/Watafak88/" style={{ margin: "5px 10px 10px 10px" }} target="_blank" rel="noopener noreferrer">
        <Image src={faceImg} width={50} height={50} alt="pg slot" />
      </a>
      <a href="https://lin.ee/bDb5ic7" style={{ margin: "5px 10px 10px 10px" }} target="_blank" rel="noopener noreferrer">
        <Image src={lineImg} width={50} height={50} alt="pg slot" />
      </a>
    </div>
  );
}
