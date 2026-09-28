type Props = {
  items: string[];
  tone?: "honey" | "ink";
};

/** Decorative infinite ticker. The list is rendered twice so the loop is seamless. */
const Marquee = ({ items, tone = "honey" }: Props) => (
  <div className={`marquee marquee--${tone}`} aria-hidden>
    <div className="marquee__track">
      {[0, 1].map((copy) => (
        <ul key={copy} className="marquee__list">
          {items.map((item) => (
            <li key={item}>
              {item}
              <span className="marquee__star">✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
