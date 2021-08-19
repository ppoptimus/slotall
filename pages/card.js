// import Image from "next/image";
// import pgslot1 from "../public/img/pgslot_1-500.jpg";
// import pgslot2 from "../public/img/pgslot_3-500.jpg";
// import pgslot3 from "../public/img/pgslot_11-500.jpg";
// import pgslot4 from "../public/img/pgslot_5-500.jpg";
// import pgslot5 from "../public/img/download-pgslot.png";
// import pgslot6 from "../public/img/technique-pg-slots.jpg";
import css from "../styles/card.module.css";

export default function Card() {
  return (
    <div className={css.root}>
      <div className={css.row}>
        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                {/* <Image src={pgslot1} width={310} height={310} alt="pg slot" className={css.flipradius} /> */}
                <img src="img/pgslot_1-500.jpg" className={css.imgradius} width={310} height={310} alt="pg slot"></img>
              </div>
              <div className={css.flipcardback}>
                <a href="https://watafak88.com/#/register" target="_blank" rel="noopener noreferrer">
                  <h1>สมัครใหม่</h1>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                {/* <Image src={pgslot2} width={310} height={310} alt="pg slot" className={css.flipradius} /> */}
                <img src="img/pgslot_3-500.jpg" className={css.imgradius} width={310} height={310} alt="pg slot"></img>
              </div>
              <div className={css.flipcardback}>
                <a href="https://watafak88.com/#/playgame" target="_blank" rel="noopener noreferrer">
                  <h1>เล่นเกมส์</h1>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                {/* <Image src={pgslot3} width={310} height={310} alt="pg slot" className={css.flipradius} /> */}
                <img src="img/pgslot_11-500.jpg" className={css.imgradius} width={100} height={100} alt="pg slot"></img>
              </div>
              <div className={css.flipcardback}>
                <a href="https://watafak88.com/#/credit" target="_blank" rel="noopener noreferrer">
                  <h1>เครดิตฟรี</h1>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                {/* <Image src={pgslot4} width={310} height={310} alt="pg slot" className={css.flipradius} /> */}
                <img src="img/pgslot_5-500.jpg" className={css.imgradius} width={100} height={100} alt="pg slot"></img>
              </div>
              <div className={css.flipcardback}>
                <a href="https://pgslot-free.com" target="_blank" rel="noopener noreferrer">
                  <h1>เกมส์ฟรี</h1>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                {/* <Image src={pgslot5} width={310} height={310} alt="pg slot" className={css.flipradius} /> */}
                <img src="img/download-pgslot.png" className={css.imgradius} width={100} height={100} alt="pg slot"></img>
              </div>
              <div className={css.flipcardback}>
                <a href="https://watafak88.com/#/download" target="_blank" rel="noopener noreferrer">
                  <h2>ดาวน์โหลด</h2>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                {/* <Image src={pgslot6} width={310} height={310} alt="pg slot" className={css.flipradius} /> */}
                <img src="img/technique-pg-slots.jpg" className={css.imgradius} width={100} height={100} alt="pg slot"></img>
              </div>
              <div className={css.flipcardback}>
                <a href="https://watafak88.com/#/download" target="_blank" rel="noopener noreferrer">
                  <h1>บทความ</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
