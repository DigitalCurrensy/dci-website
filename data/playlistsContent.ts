import { inviteApplication } from "@/data/siteContent";

export const playlistsContent = {
  metadata: {
    title: "Playlists",
    description:
      "DCI reviews music for curated playlist opportunities based on sound, mood, genre, timing, and audience fit.",
  },
  hero: {
    eyebrow: "DCI PLAYLISTS",
    headline: "Curated playlists for records that fit the moment.",
    paragraphs: [
      "DCI reviews music for playlist opportunities across curated lanes built around sound, mood, genre, energy, and audience fit.",
      "Playlist support is not automatic. Every song is reviewed for fit before it is considered.",
    ],
  },
  philosophy: {
    eyebrow: "PLAYLIST PHILOSOPHY",
    headline: "Fit matters more than forcing it.",
    paragraphs: [
      "A good playlist placement should make sense for the song and the listener. DCI looks at the sound, release timing, artist direction, song quality, and audience before making playlist decisions.",
      "The goal is to place records where they belong, not just anywhere there is space.",
    ],
  },
  categories: [
    {
      title: "New Music Discovery",
      description: "For emerging records, new artists, and early momentum.",
    },
    {
      title: "Hip-Hop + Rap",
      description:
        "For street records, melodic rap, club records, regional sounds, and breakout singles.",
    },
    {
      title: "R&B + Melodic",
      description: "For smooth records, late-night music, emotional cuts, and vocal-driven songs.",
    },
    {
      title: "Energy + Lifestyle",
      description: "For workout, sports, car, nightlife, and high-movement records.",
    },
    {
      title: "Global + Culture",
      description: "For international sounds, regional movements, and culture-driven discovery.",
    },
  ],
  playlistCardsSection: {
    eyebrow: "PLAYLIST CARDS",
    headline: "Submit records into the lanes that make sense.",
    body: "Each playlist is reviewed by sound, timing, and context. Placement is never guaranteed.",
    cardCtaLabel: "Submit For Review",
    cardCtaHref: inviteApplication.href,
    cardCtaExternal: true,
  },
  playlists: [
    {
      title: "Heat Check",
      image: "/assets/images/playlists/image (57).jpg",
      link: "https://open.spotify.com/playlist/6U32zo1LO9Oj7WMyte9bnQ?si=26f3060280ea4326",
      description:
        "The hottest tracks dropping right now. Pure fire and non-stop energy — your go-to playlist when you need the current bangers.",
    },
    {
      title: "New Wave Hits",
      image: "/assets/images/playlists/image (60).jpg",
      link: "https://open.spotify.com/playlist/14IKeOmiSks5kP5EcmzBfR?si=1f0833d0c80b48bf",
      description:
        "Neon-soaked synths, retro-futuristic energy, and timeless new wave hits. The ultimate soundtrack for late nights and endless drives.",
    },
    {
      title: "New West Coast Rap.",
      image: "/assets/images/playlists/image (61).jpg",
      link: "https://open.spotify.com/playlist/5ONC5LintO8Lz86OaWmNrb?si=3baf956275264591",
      description:
        "Smooth flows, G-funk grooves, and that signature West Coast swagger. Laid-back yet sharp — the perfect soundtrack for cruising at sunset.",
    },
    {
      title: "New Age Country",
      image: "/assets/images/playlists/image (59).jpg",
      link: "https://open.spotify.com/playlist/18FmOYgOQSlyYlIz1i7KVt?si=91672a70f0c2488b",
      description:
        "Classic country soul meets modern atmospheric production. Relaxed, uplifting, and effortlessly cool — perfect for golden hour listening.",
    },
    {
      title: "Gamer Vibes Only",
      image: "/assets/images/playlists/image (58).jpg",
      link: "https://open.spotify.com/playlist/0pA0rEQXSNvEpCTDnMjhos?si=b222c7e26ce0494c",
      description:
        "High-energy beats and immersive tracks built for long gaming sessions. From adrenaline-pumping anthems to chill background vibes.",
    },
    {
      title: "Almost Major",
      image: "/assets/images/playlists/image (55).jpg",
      link: "https://open.spotify.com/playlist/3AH4uaRYMkMHlp3UaaU6vw?si=3792fe043804409d",
      description:
        "Rising artists and underground gems on the verge of breaking through. Raw talent and future hits you’ll hear everywhere soon.",
    },
  ],
  process: {
    eyebrow: "REVIEW PROCESS",
    headline: "How playlist review works",
    steps: [
      "Submit your music with links, release date, genre, mood, and campaign goals.",
      "DCI reviews the song for playlist fit and release timing.",
      "If the record fits an available lane, the team follows up with next steps.",
      "If the song is not a fit, it may still be considered for future opportunities or other campaign support.",
    ],
    disclaimer:
      "Playlist submission does not guarantee placement, streams, followers, saves, or algorithmic performance. DCI reviews music based on fit, quality, timing, and available opportunities.",
  },
  cta: {
    title: "Want your music reviewed?",
    body: "Request access and share the record, release date, genre, mood, and campaign goals.",
    buttonLabel: "Get An Invite",
    href: inviteApplication.href,
    external: true,
  },
};
