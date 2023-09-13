export default function Statistics({ title, stats }) {
  return (
    <div>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          {stats.map((element, index) => (
            <li key={index} className="item">
              <span className="label">{element.label}</span>
              <span className="percentage">{element.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
