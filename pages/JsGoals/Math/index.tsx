import { Dice } from "components";

export default function Math() {
  return (
    <>
      <section className="dice-section">
        <Dice count={4} />
      </section>
    </>
  );
}
