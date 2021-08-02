interface ComponentProps {
  count: number;
}
export default function Dice(props: ComponentProps) {
  const { count } = props;
  const dotsArray: number[] = [];
  let currentCount = count;

  while (currentCount > 0) {
    dotsArray.push(currentCount);
    currentCount--;
  }

  const countText = () => {
    switch (count) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
    }
  };

  return (
    <article className={`dice --${countText()}`}>
      {dotsArray.map((index) => (
        <span className="dot" key={index}></span>
      ))}
    </article>
  );
}
