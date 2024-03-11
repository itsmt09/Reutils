export default function Breadcrumb({ crumbs }) {
  return (
    <nav aria-label="breadcrumb">
      <ol>
        {crumbs.map((crumb, index) => (
          <li key={index}>{crumb}</li>
        ))}
      </ol>
    </nav>
  );
}
