import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: string;
  href?: string;
};

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const card = (
    <article className="service-card reveal">
      <div className="service-card-top">
        <span className="line-icon">{icon ?? "DCI"}</span>
        <span className="card-arrow" aria-hidden="true">
          /
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );

  if (href) {
    return (
      <Link className="service-card-link" href={href}>
        {card}
      </Link>
    );
  }

  return card;
}
