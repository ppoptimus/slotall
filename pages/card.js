import Image from "next/image";
import pgslot1 from "../public/img/pgslot_1-500.jpg";
import pgslot2 from "../public/img/pgslot_3-500.jpg";
import pgslot3 from "../public/img/pgslot_11-500.jpg";
import pgslot4 from "../public/img/pgslot_5-500.jpg";
import pgslot5 from "../public/img/download-pgslot.png";
import pgslot6 from "../public/img/technique-pg-slots.jpg";
import css from "../styles/card.module.css";

export default function Card() {
  return (
    <div className={css.root}>
      <div className={css.row}>
        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <Image src={pgslot1} width={200} height={200} alt="pg slot" className={css.flipcardfront} />
              </div>
              <a href="https://watafak88.com/#/register" target="_blank" rel="noopener noreferrer">
                <div className={css.flipcardback}>
                  <h1>สมัครใหม่</h1>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <Image src={pgslot2} width={200} height={200} alt="pg slot" className={css.flipcardfront} />
              </div>
              <a href="https://watafak88.com/#/playgame" target="_blank" rel="noopener noreferrer">
                <div className={css.flipcardback}>
                  <h1>เล่นเกมส์</h1>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <Image src={pgslot3} width={200} height={200} alt="pg slot" className={css.flipcardfront} />
              </div>
              <a href="https://watafak88.com/#/credit" target="_blank" rel="noopener noreferrer">
                <div className={css.flipcardback}>
                  <h1>เครดิตฟรี</h1>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <Image src={pgslot4} width={200} height={200} alt="pg slot" className={css.flipcardfront} />
              </div>
              <a href="https://pgslot-free.com" target="_blank" rel="noopener noreferrer">
                <div className={css.flipcardback}>
                  <h1>เกมส์ฟรี</h1>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <Image src={pgslot5} width={200} height={200} alt="pg slot" className={css.flipcardfront} />
              </div>
              <a href="https://watafak88.com/#/download" target="_blank" rel="noopener noreferrer">
                <div className={css.flipcardback}>
                  <h2>ดาวน์โหลด</h2>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <Image src={pgslot6} width={200} height={200} alt="pg slot" className={css.flipcardfront} />
              </div>
              <a href="https://watafak88.com/#/download" target="_blank" rel="noopener noreferrer">
                <div className={css.flipcardback}>
                  <h1>บทความ</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
