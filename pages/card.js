import React from "react";
import css from "../styles/card.module.css";

export default function Card() {
  return (
    <div>
      <ul className={css.cards}>
        <li>
          <div className={css.card}>
            <a href="https://watafak88.com/#/register" target="_blank">
              <img src="https://watafak88.com/img/promotion/pgslot_1-500.jpg" className={css.card__image} alt="pg slot" />
            </a>
            <div className={css.card__overlay}>
              <div className={css.card__header}>
                <svg className={css.card__arc} xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className={css.card__thumb} src="https://watafak88.com/img/menu/logo-nav.png" alt="pg slot" />
                <strong>Register</strong>
              </div>
              <p className={css.card__description}>
                <strong>สมัครเล่น PGSLOT</strong> ค่ายเกมคาสิโนออนไลน์เปิดใหม่ ที่กำลังเป็นจุดสนใจจากนักเดิมพันมืออาชีพ
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={css.card}>
            <a href="https://watafak88.com/#/playgame" target="_blank">
              <img src="https://watafak88.com/img/promotion/pgslot_3-500.jpg" className={css.card__image} alt="pg slot" />
            </a>
            <div className={css.card__overlay}>
              <div className={css.card__header}>
                <svg className={css.card__arc} xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className={css.card__thumb} src="https://watafak88.com/img/menu/logo-nav.png" alt="pg slot" />
                <strong>PlayGame</strong>
              </div>
              <p className={css.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </div>
        </li>
        <li>
          <div className={css.card}>
            <a href="https://watafak88.com/#/credit" target="_blank">
              <img src="https://watafak88.com/img/promotion/pgslot_11-500.jpg" className={css.card__image} alt="pg slot" />
            </a>
            <div className={css.card__overlay}>
              <div className={css.card__header}>
                <svg className={css.card__arc} xmlns="https://watafak88.com/img/menu/logo-nav.png">
                  <path />
                </svg>
                <img className={css.card__thumb} src="https://watafak88.com/img/menu/logo-nav.png" alt="pg slot" />
                <strong>Credit Free</strong>
              </div>
              <p className={css.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </div>
        </li>
        <li>
          <div className={css.card}>
            <a href="https://pgslot-free.com/" target="_blank">
              <img src="https://watafak88.com/img/promotion/pgslot_5-500.jpg" className={css.card__image} alt="pg slot" />
            </a>
            <div className={css.card__overlay}>
              <div className={css.card__header}>
                <svg className={css.card__arc} xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className={css.card__thumb} src="https://watafak88.com/img/menu/logo-nav.png" alt="pg slot" />
                <strong>Game Free</strong>
              </div>
              <p className={css.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
