import css from "../styles/card.module.css";

export default function Card() {
  return (
    <div>
      <ul className={css.cards}>
        <li>
          <div className={css.card}>
            <a href="https://watafak88.com/#/register" target="_blank" rel="noreferrer">
              <img src="https://watafak88.com/img/promotion/pgslot_1-500.jpg" className={css.card__image} width="50%" height="50%" alt="pg slot" />
            </a>
            <div className={css.card__overlay}>
              <div className={css.card__header}>
                <svg className={css.card__arc} xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className={css.card__thumb} src="https://watafak88.com/img/menu/logo-nav.png" width="50%" height="50%" alt="pg slot" />
                <strong>Register</strong>
              </div>
              <p className={css.card__description}>
                <strong>สมัครเล่น PGSLOT</strong> ค่ายเกมคาสิโนออนไลน์เปิดใหม่ ที่กำลังเป็นจุดสนใจ
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={css.card}>
            <a href="https://watafak88.com/#/playgame" target="_blank" rel="noreferrer">
              <img src="https://watafak88.com/img/promotion/pgslot_3-500.jpg" className={css.card__image} width="50%" height="50%" alt="pg slot" />
            </a>
            <div className={css.card__overlay}>
              <div className={css.card__header}>
                <svg className={css.card__arc} xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className={css.card__thumb} src="https://watafak88.com/img/menu/logo-nav.png" width="50%" height="50%" alt="pg slot" />
                <strong>PlayGame</strong>
              </div>
              <p className={css.card__description}>
                <strong>ทางเข้าเล่น PG SLOT</strong>สามารถเข้าเล่นได้ทั้งโทรศัพท์มือถือ คอมพิวเตอร์ แท็บเลต
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={css.card}>
            <a href="https://watafak88.com/#/credit" target="_blank" rel="noreferrer">
              <img src="https://watafak88.com/img/promotion/pgslot_11-500.jpg" className={css.card__image} width="50%" height="50%" alt="pg slot" />
            </a>
            <div className={css.card__overlay}>
              <div className={css.card__header}>
                <svg className={css.card__arc} xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className={css.card__thumb} src="https://watafak88.com/img/menu/logo-nav.png" width="50%" height="50%" alt="pg slot" />
                <strong>Credit Free</strong>
              </div>
              <p className={css.card__description}>แจกเครดิตฟรี 30 บาท ทำตามขั้นตอนง่ายๆ เพียงแค่ 3 ขั้นตอน**</p>
            </div>
          </div>
        </li>
        <li>
          <div className={css.card}>
            <a href="https://pgslot-free.com/" target="_blank" rel="noreferrer">
              <img src="https://watafak88.com/img/promotion/pgslot_5-500.jpg" className={css.card__image} width="50%" height="50%" alt="pg slot" />
            </a>
            <div className={css.card__overlay}>
              <div className={css.card__header}>
                <svg className={css.card__arc} xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className={css.card__thumb} src="https://watafak88.com/img/menu/logo-nav.png" width="50%" height="50%" alt="pg slot" />
                <strong>Game Free</strong>
              </div>
              <p className={css.card__description}>
                <strong>PG SLOT</strong>ทดลองเล่นฟรีแบบไม่อั้น กับเกมส์หลากหลาย Style แบบจุใจได้ที่นี่
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
