import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { playlistsContent } from "@/data/playlistsContent";

type PlaylistCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export function PlaylistCard({ title, description, image, link }: PlaylistCardProps) {
  return (
    <article className="playlist-card reveal">
      <a
        className="playlist-image-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} on Spotify`}
      >
        <MediaPlaceholder src={image} label={`${title} Playlist Cover Placeholder`} aspect="square" />
      </a>
      <div className="playlist-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={playlistsContent.playlistCardsSection.cardCtaHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {playlistsContent.playlistCardsSection.cardCtaLabel}
        </a>
      </div>
    </article>
  );
}
