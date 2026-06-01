export default function CardCategories({ categ, className, ...props }) {
  return (
    <div {...props}>
      <img src={categ.image} alt={categ.name} />
      <div className="p-2.5">
        <strong className="text-lg">{categ.name}</strong>
        <p className="line-clamp-3">{categ.description}</p>
      </div>
    </div>
  );
}