import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function JsGoals() {
  return (
    <div className="home-container">
      <Head>
        <title>Javascriopt Goals</title>
      </Head>

      <main className="home-main">
        <h1 className="home-title">
          Javascriopt <Link href="/">Goals!</Link>
        </h1>

        <div className="home-grid">
          <Link href="/JsGoals/Math" passHref>
            <article className="home-card">
              <h2>Math Goal &rarr;</h2>
              <p>
                A simple
                <b>
                  <i> Roll The Dice </i>
                </b>
                game
              </p>
            </article>
          </Link>

          <Link href="/JsGoals/Math" passHref>
            <article className="home-card">
              <h2>Css Goals &rarr;</h2>
              <p>
                {" "}
                All the Css Goals are{" "}
                <b>
                  <i>Here</i>
                </b>
              </p>
            </article>
          </Link>
        </div>
      </main>
    </div>
  );
}
