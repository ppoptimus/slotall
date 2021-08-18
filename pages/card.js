import Image from "next/image";
import css from "../styles/card.module.css";

export default function Card() {
  return (
    <div className={css.root}>
      <div className={css.row}>
        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <img src="https://watafak88.com/img/promotion/pgslot_1-500.jpg" alt="pg slot" width="100%" height="100%" style={{ borderRadius: "30px" }} />
              </div>
              <div className={css.flipcardback}>
                <h1>John Doe</h1>
                <p>Architect &amp; Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <img src="https://watafak88.com/img/promotion/pgslot_3-500.jpg" alt="pg slot" width="100%" height="100%" style={{ borderRadius: "30px" }} />
              </div>
              <div className={css.flipcardback}>
                <h1>John Doe</h1>
                <p>Architect &amp; Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <img src="https://watafak88.com/img/promotion/pgslot_11-500.jpg" alt="pg slot" width="100%" height="100%" style={{ borderRadius: "30px" }} />

              </div>
              <div className={css.flipcardback}>
                <h1>John Doe</h1>
                <p>Architect &amp; Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>

        <div className={css.column}>
          <div className={css.flipcard}>
            <div className={css.flipcardinner}>
              <div className={css.flipcardfront}>
                <img src="https://watafak88.com/img/promotion/pgslot_5-500.jpg" alt="pg slot" width="100%" height="100%" style={{ borderRadius: "30px" }} />
              </div>
              <div className={css.flipcardback}>
                <h1>John Doe</h1>
                <p>Architect &amp; Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
