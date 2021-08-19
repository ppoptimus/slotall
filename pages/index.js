import React from "react";
import Hero from "./hero";
import Card from "./card";
import Footer from "./footer";
import Head from "next/head";
export default function index() {
  return (
    <div>
      <Head>
        <title>ทางเข้า PG SLOT | เว็บตรง แตกง่าย | ค่ายเกมอันดับหนึ่ง</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="th" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta
          name="description"
          content="PG SLOT เปิดตลอด 24 ชั่วโมง, ระบบเติมเงินแบบเรียลไทม์, ระบบฝากถอนอัตโนมัติ, user เดียวเล่นได้ทุกเกม, สล็อตออนไลน์บนมือถือ, ได้เงินจริงมีฟรีเครดิต, แตกทีเป็นแสน"
        />
        <meta name="keywords" content="PG SLOT,PGSLOT,ฟรีเครดิต,watafak,เกมส์ยิงปลา,เกมยิงปลา,เครดิตฟรี,pg game,SLOT" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="สล็อตออนไลน์ | ฟรีเครดิต | ได้เงินจริง | WATAFAK88" />
        <meta
          property="og:description"
          content="PG SLOT Online เปิดตลอด 24 ชั่วโมง, ระบบเติมเงินแบบเรียลไทม์, Auto deposit ระบบฝากถอนอัตโนมัติ, user เดียวเล่นได้ทุกเกม, สล็อตออนไลน์บนมือถือ, ได้เงินจริงมีฟรีเครดิต, แตกทีเป็นแสน"
        />

        <link rel="canonical" href="https://slotall.fun/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Card />
      <Footer />
    </div>
  );
}
