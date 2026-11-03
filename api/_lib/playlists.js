"use strict";

// Canonical playlist list. Names, genres, follower counts, and Spotify links
// are the existing PL records in assets/js/main.js (33). Do not invent stats.
// Playlist 30's public label follows draft PR #3: PLAYLIST PRINCESS.
// The Spotify URL and follower count stay as they were on main.

const RAW = [
  {
    featured: true,
    name: "Heat Check",
    genre: "Hip-Hop, Trap, and Rap",
    foll: 5589,
    link: "https://open.spotify.com/playlist/6U32zo1LO9Oj7WMyte9bnQ?si=Lq7-tUrAT8qKrQOYr2TOnA",
    desc: "The hottest tracks dropping right now. Pure fire and non-stop energy.",
    description: "Heat Check is rap and trap that still feels hot off the upload. It is for listeners who want present-tense energy on a late drive or a speaker that can take the bass. Tracks that fit are punchy, hook-first, and built to raise a room in the first bars. Quiet interludes and throwback album cuts do not fit.",
  },
  {
    featured: true,
    name: "New Wave Hits",
    genre: "Pop, Chart-Ready",
    foll: 2588,
    link: "https://open.spotify.com/playlist/14IKeOmiSks5kP5EcmzBfR?si=wFsePm3OSqSL7EbTcM0YAA",
    desc: "Neon-soaked synths and timeless new wave hits for late nights and long drives.",
    description: "New Wave Hits is neon pop for late drives and long nights. It is for listeners who want chart-minded songs with a synth edge, not a history lecture on the 1980s. Tracks that fit are melodic, polished, and built on a chorus you can keep after one pass. Harsh noise and spoken-word pieces are not the brief.",
  },
  {
    featured: true,
    name: "New West Coast Rap",
    genre: "West Coast Hip-Hop",
    foll: 3093,
    link: "https://open.spotify.com/playlist/5ONC5LintO8Lz86OaWmNrb?si=aF3D3m7GQ3WpWFyr7dFTpA",
    desc: "Smooth flows, G-funk grooves, and signature West Coast swagger.",
    description: "New West Coast Rap is smooth flows over a warm, unhurried groove. It is for listeners who want west-coast hip-hop that swaggers without turning sleepy, especially with the windows down. Tracks that fit ride warm bass, a relaxed cadence, and a pocket you can nod to. Frenetic drill and icy minimal beats miss the mood.",
  },
  {
    featured: true,
    name: "New Age Country",
    genre: "Contemporary Country",
    foll: 5587,
    link: "https://open.spotify.com/playlist/18FmOYgOQSlyYlIz1i7KVt?si=MXT-mILvS2meCpiEx-O6tw",
    desc: "Country soul meets modern atmospheric production. Relaxed and effortlessly cool.",
    description: "New Age Country is modern country with air in the mix. It is for listeners who want story-led songs in atmospheric production, relaxed rather than rowdy. Tracks that fit pair a clear vocal with wide guitars and a chorus that does not strain. Barn-burning traditionals and trap remixes are a poor fit.",
  },
  {
    featured: true,
    name: "Gamer Vibes",
    genre: "Electronic, Trap, Chill",
    foll: 1517,
    link: "https://open.spotify.com/playlist/0pA0rEQXSNvEpCTDnMjhos?si=ZCtKTf2LS5awL5RVfz-8CQ",
    desc: "High-energy beats and immersive tracks built for long gaming sessions.",
    description: "Gamer Vibes is focus music with a pulse. It is for people in a long session who want electronic and trap energy that holds attention without taking over the room. Tracks that fit are driving, rhythmic, and easy to leave on under gameplay. Ballads and lyric-heavy stories fight the screen.",
  },
  {
    featured: true,
    name: "Almost Major",
    genre: "Hip-Hop, Indie",
    foll: 2782,
    link: "https://open.spotify.com/playlist/3AH4uaRYMkMHlp3UaaU6vw?si=DreGEgrwRl6zAXDWEvw1Qw",
    desc: "Rising artists and underground gems on the verge of breaking through.",
    description: "Almost Major is the shelf just before a wider room. It is for listeners hunting hip-hop and indie records that feel one step from a breakthrough, and for songs past the demo stage. Tracks that fit have a clear identity, a real hook, and a mix that can sit beside bigger records. Half-finished sketches do not last here.",
  },
  {
    featured: false,
    name: "Country Trap",
    genre: "Country Trap",
    foll: 5502,
    link: "https://open.spotify.com/playlist/7wC0PKCRsCdyrDnu6B8X3I?si=2zCFE2tqQN25eZ--cLtCLg",
    description: "Country Trap is a country vocal on a trap bounce. It is for listeners who want twang and 808s in the same song and do not need those worlds kept apart. Tracks that fit keep a country melody or story and put a modern trap pattern under it. Straight traditional country or street rap with no blend will feel lost.",
  },
  {
    featured: false,
    name: "New Core Hits",
    genre: "Pop, Rock, Mainstream",
    foll: 5150,
    link: "https://open.spotify.com/playlist/5ox2ZCH7Ro2HYTY8b9soZr?si=_LlTCAoHTP6Milf5IAmrHA",
    description: "New Core Hits is mainstream pop and rock that still sounds current. It is for listeners who want familiar song shapes, big choruses, and a finish a wide audience can clock immediately. Tracks that fit are polished, melodic, and easy to sing back. Experimental fragments and niche noise are not the point.",
  },
  {
    featured: false,
    name: "Street Rap",
    genre: "Street Rap",
    foll: 2290,
    link: "https://open.spotify.com/playlist/4hTCzO1w5NMOxkVhGgRDdN?si=xV0mVyrFQ66tCUIXvUqdnQ",
    description: "Street Rap stays close to the block. It is for listeners who want rap that sounds direct, lived-in, and unpretty on purpose. Tracks that fit are rhythm-first, plainly spoken, and written like someone on the street is talking. Glossy pop crossovers and abstract art-rap pull the mood off course.",
  },
  {
    featured: false,
    name: "The Rap List",
    genre: "Mainstream Rap",
    foll: 2227,
    link: "https://open.spotify.com/playlist/5e1fz0MIZIVW4GfObuPKvK?si=axab66rNTKij60kAiS9cIA",
    description: "The Rap List is a straight lane through mainstream rap. It is for listeners who want current hip-hop a broad rap audience already knows how to hear. Tracks that fit are hook-led, cleanly mixed, and confident from the first verse. Deep experiments and hybrids that hide the rap belong on another shelf.",
  },
  {
    featured: false,
    name: "THE 6TH MAN PLAYLIST",
    genre: "Sports Anthems",
    foll: 2198,
    link: "https://open.spotify.com/playlist/7vLaHfTIBYEExYzJUrWYFU?si=jnWz6871RJSI2-8bx566QQ",
    description: "The 6th Man Playlist is walk-out energy for a game or a workout. It is for listeners who want sports anthems that put a crowd behind the moment. Tracks that fit are rhythmic, anthemic, and built to raise adrenaline without losing the song. Quiet acoustic pieces and slow confessionals will not carry a gym.",
  },
  {
    featured: false,
    name: "Hyper Pop vs Bedroom Pop",
    genre: "Hyperpop, Bedroom Pop",
    foll: 1994,
    link: "https://open.spotify.com/playlist/1NOaRGDbxSneHGc5Gt57mw?si=0ZrQeq1cT-eAkI80Evu97A",
    description: "Hyper Pop vs Bedroom Pop holds two moods in one argument. It is for listeners who like the jump between blown-out hyperpop and close-mic bedroom songs. Tracks that fit live clearly on one side: either maximal and bright, or hushed and intimate. Middle-of-the-road radio rock has no seat. Pick a side and commit.",
  },
  {
    featured: false,
    name: "Ladys Of Hyper Pop 2",
    genre: "Hyperpop",
    foll: 1858,
    link: "https://open.spotify.com/playlist/3Vgq893gi85CmnsS3k9lfi?si=e0CoeyoIRiWzQpLy1R71bA",
    description: "Ladys Of Hyper Pop 2 is hyperpop led by women, turned up a notch. It is for listeners who want glitter, pitch, and chaos with a feminine point of view, like a brighter second chapter. Tracks that fit are bold, synthetic, and hook-heavy. Straight-faced traditional pop and lineups with no women miss the brief.",
  },
  {
    featured: false,
    name: "Internet Music Planet",
    genre: "Indie, Experimental",
    foll: 1665,
    link: "https://open.spotify.com/playlist/3GkYxAmq0LKsLlV1QCc0C3?si=DJKnktr9SUqOlOIMNvaYOg",
    description: "Internet Music Planet is for songs that grew up online. It is for listeners who like indie and experimental records shaped by the timeline, where odd structures still feel like a scene. Tracks that fit are curious, internet-native, and deliberately a little unfinished. Corporate radio formulas are not the draw.",
  },
  {
    featured: false,
    name: "Hyper Pop Galaxy",
    genre: "Hyperpop",
    foll: 1546,
    link: "https://open.spotify.com/playlist/1SSGhVUqRCZ2vlAcb3rO9H?si=QtgwgeD7Q6SS0xbRGmrIeQ",
    description: "Hyper Pop Galaxy is hyperpop at full brightness. It is for listeners who want the sugar, the distortion, and a song that feels faster than the room. Tracks that fit are maximal, melodic, and unafraid of pitch shifts or plastic drums. Understated folk and dry traditional rap sound lost here.",
  },
  {
    featured: false,
    name: "Punk Trap Sh*t",
    genre: "Punk, Trap",
    foll: 1214,
    link: "https://open.spotify.com/playlist/4KnilKD8QAPdpRFuO6rI8O?si=k1CQNDFFRICNfc7acSRixw",
    description: "Punk Trap Sh*t is a punk snarl over a trap bounce. It is for listeners who want attitude first and polish second, the kind of song that sounds ready to break something. Tracks that fit carry a punk vocal or guitar edge on trap drums, with more bite than gloss. Pretty pop and gentle R&B will not survive the room.",
  },
  {
    featured: false,
    name: "SPANISH TRAP",
    genre: "Latin Trap",
    foll: 1186,
    link: "https://open.spotify.com/playlist/4KEVSObGX2UFbjkjQD7P5C?si=oDFfXTNfTEa20_VbIqusQQ",
    description: "Spanish Trap is trap written and delivered in Spanish. It is for listeners who want Latin trap's cadence, bass, and nightlife mood, with Spanish as the language of the song rather than an afterthought. Tracks that fit are rhythmic and bass-heavy from the first draft. English-only street rap and acoustic ballads are a different shelf.",
  },
  {
    featured: false,
    name: "Major Label Discovery",
    genre: "Diverse, Emerging",
    foll: 1182,
    link: "https://open.spotify.com/playlist/0JEag3AOh4eSfWEcO1hWFS?si=Zpg4KPIFTgOc_-A08XtbJA",
    description: "Major Label Discovery is a wide net for records that already sound finished. It is for listeners browsing emerging songs across genres, and for tracks that could sit in a professional catalog without losing their point of view. What fits is varied on purpose: strong writing and a mix that is done. Demos and one-joke songs fall out.",
  },
  {
    featured: false,
    name: "AFRO PALETTE",
    genre: "Afrobeat, Afro-Pop",
    foll: 996,
    link: "https://open.spotify.com/playlist/438r0CHk3aaB36URQo3fcZ?si=rRNreQvFT_eKDPQy5cS0Aw",
    description: "Afro Palette is a warm spread of afrobeats and afro-pop. It is for listeners who want rhythm that moves a room and melodies that feel sunlit, on a dance floor or a long ride. Tracks that fit lean on groove, percussion, and a chorus that invites people in. Cold minimal electronics and ballads with no bounce miss the color.",
  },
  {
    featured: false,
    name: "Hip Hop Instrumentals",
    genre: "Hip-Hop Beats",
    foll: 986,
    link: "https://open.spotify.com/playlist/3gpELlX50T3aEPanFdhdbD?si=Sa3HzzfQQx-a5RU-hYghTQ",
    description: "Hip Hop Instrumentals leaves the beat in charge. It is for producers, writers, and listeners who want hip-hop rhythm without a lead vocal taking the foreground. Tracks that fit are drum-led, loopable, and clear enough to rap on. Full songs with a dominant singer are not the idea. Bring the instrumental that still feels complete.",
  },
  {
    featured: false,
    name: "MELODIC RAP",
    genre: "Melodic Rap",
    foll: 960,
    link: "https://open.spotify.com/playlist/2i7Q8M7M0oQyHJb46Snb2E?si=DiS9omw4Qw2mVzXSOccGnw",
    description: "Melodic Rap favors the tune inside the verse. It is for listeners who want rap that sings a little, with feeling in the melody and not only in the punchline. Tracks that fit blend a sung flow or a strong hook with a modern beat, more intimate than aggressive. Hookless battle rap is a harder match.",
  },
  {
    featured: false,
    name: "NEW R&B HITS",
    genre: "Contemporary R&B",
    foll: 941,
    link: "https://open.spotify.com/playlist/61qHDrnBQ65ItVEJW39Aeb?si=DRCegW3ySEu3SK5pfzs0Wg",
    description: "New R&B Hits is contemporary R&B with a current sheen. It is for listeners who want late-night vocals, warm chords, and songs that feel close without going sleepy. Tracks that fit are vocal-led and mixed so the singer sits in front of a modern beat. Aggressive rap and festival-tempo tracks pull the mood apart.",
  },
  {
    featured: false,
    name: "EDM & Techno For Eternity",
    genre: "Electronic, Techno",
    foll: 862,
    link: "https://open.spotify.com/playlist/0LokwWMNzGDXfZ0NeeWBoU?si=8qpxHc77RqCChO_wejXYbg",
    description: "EDM and Techno For Eternity is built for a long time on the floor. It is for listeners who want electronic music that can run, whether the pulse is techno or a festival-sized lift. Tracks that fit are rhythmic, physical, and made to move a body more than tell a story. Acoustic songs and lyric-first ballads will not hold it.",
  },
  {
    featured: false,
    name: "By Way Of Detroit",
    genre: "Detroit Hip-Hop",
    foll: 751,
    link: "https://open.spotify.com/playlist/7vohar9b6HFGoCtCklbxiu?si=KUT-EgjkTmWZt2nUexpAnw",
    description: "By Way Of Detroit is hip-hop with that city's weight in the pocket. It is for listeners who want Detroit rap's directness and local pride, whether or not they are from there. Tracks that fit sound rooted: sturdy drums, plain speech, and a beat that does not apologize. Glossy coastal pop-rap misses the map.",
  },
  {
    featured: false,
    name: "DONT MESS WITH TEXAS",
    genre: "Texas Hip-Hop",
    foll: 751,
    link: "https://open.spotify.com/playlist/5sGhKRDWZjMjk85raDmyTV?si=lbCadpN8R-SOZdK6dmzs2w",
    description: "Don't Mess With Texas is Texas hip-hop with the posture the name suggests. It is for listeners who want southern rap that sounds regional and uninterested in copying a coastal template. Tracks that fit carry a Texas cadence, a sturdy beat, and a sense of place. Generic internet rap with no hometown will not pass.",
  },
  {
    featured: false,
    name: "Gangsta Rap",
    genre: "Gangsta Rap",
    foll: 740,
    link: "https://open.spotify.com/playlist/2HpmuRkZmvgOR0if2sEBIG?si=NMo2QV0USNKS8OJiiNRglg",
    description: "Gangsta Rap keeps the hard edge of that tradition. It is for listeners who want rap about street realities, delivered with menace or cool rather than a pop smile. Tracks that fit are tough, bass-heavy, and serious for the whole runtime. Lighthearted party pop and gentle acoustic songs are out of tone.",
  },
  {
    featured: false,
    name: "Atlanta Skreets",
    genre: "Southern Trap",
    foll: 665,
    link: "https://open.spotify.com/playlist/3xVOykbYREIXYPA6ynaQRf?si=qL-rQtbZRK6oDRGnGr6CYg",
    description: "Atlanta Skreets is southern trap in that city's accent. It is for listeners who want the bounce, the ad-libs, and the slick menace of Atlanta street records. Tracks that fit ride rolling hi-hats, deep bass, and a flow that sounds local. West-coast cruise beats and country crossovers are a different map.",
  },
  {
    featured: false,
    name: "UK/NY Drill Hits",
    genre: "Drill",
    foll: 640,
    link: "https://open.spotify.com/playlist/7v4DEf57ZLUteJOEwndFx6?si=--pMOxqJRdCONl2oIux7ww",
    description: "UK/NY Drill Hits connects two drill scenes without sanding them flat. It is for listeners who want sliding bass, tense rhythm, and rap that stays in the drill pocket, London or New York. Tracks that fit are dark and built on drill drums rather than a borrowed label. Sunny pop and boom-bap are not this lane.",
  },
  {
    featured: false,
    name: "LOFI UNIVERSE",
    genre: "Lo-Fi",
    foll: 587,
    link: "https://open.spotify.com/playlist/1oNjT5Br11zzlIF54l8NV4?si=oQwFga_mRFKV6Zvn3iOTvQ",
    description: "Lofi Universe is the soft room. It is for listeners studying, winding down, or staying in a low gear who want texture more than a big performance. Tracks that fit are gentle, warm or dusty, and easy to leave on without a chorus grabbing the wheel. Festival drops and aggressive rap break the spell.",
  },
  {
    featured: false,
    name: "PLAYLIST PRINCESS",
    genre: "Pop, R&B",
    foll: 571,
    link: "https://open.spotify.com/playlist/5T5mPmAyRp76Rpf0QNOPKW?si=0xHAss_uQeaMx4zbXnVzxA",
    description: "Playlist Princess is pop and R&B with a little sparkle. It is for listeners who want melodic, vocal-first songs that feel personal and polished, closer to a late text than a stadium. Tracks that fit are tuneful, emotionally clear, and at home in pop or contemporary R&B. Harsh trap and instrumental techno do not wear this mood.",
  },
  {
    featured: false,
    name: "AMERICANA / FOLK",
    genre: "Americana, Folk",
    foll: 563,
    link: "https://open.spotify.com/playlist/4olo3zwhS1kyOan824GBbZ?si=ZOJCfT9pQeK2racuesZAIw",
    description: "Americana / Folk is songs with the dirt still on them. It is for listeners who want acoustic storytelling, folk harmony, and a pace that lets the words land. Tracks that fit are lyric-led, organic, and unhurried. Heavy 808s and club edits fight the wood and the vocal. If you can picture a small room, it belongs.",
  },
  {
    featured: false,
    name: "Canadian Heat",
    genre: "Canadian Hip-Hop",
    foll: 535,
    link: "https://open.spotify.com/playlist/5YlCxhf4W2tLpB0EsB2bC9?si=LhM1xZNhSUaSDGqIeIuv0w",
    description: "Canadian Heat is hip-hop with a northern stamp. It is for listeners who want Canadian rap that sounds current and local, not a coastal template with the names swapped. Tracks that fit are confident, rhythmic, and specific about where they are from. Generic rap with no point of view will not carry the shelf.",
  },
  {
    featured: false,
    name: "Ladys of Hyperpop",
    genre: "Hyperpop",
    foll: 326,
    link: "https://open.spotify.com/playlist/7xP5fgiOyB81HcmarFfodQ?si=1WZZvvsTR5q4zISapZZpXQ",
    description: "Ladys of Hyperpop is hyperpop shaped by women, brighter than traditional pop and smaller than its louder sequel. It is for listeners who want synthetic hooks and a personality-forward vocal. Tracks that fit are melodic, glittery, and led by women. All-male lineups and straight traditional pop miss it.",
  },
];

function slugify(name) {
  return String(name)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function wordCount(text) {
  return String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

const playlists = RAW.map((p) => Object.assign({}, p, { slug: slugify(p.name) }));

function bySlug(slug) {
  return playlists.find((p) => p.slug === slug) || null;
}

function names() {
  return playlists.map((p) => p.name);
}

module.exports = { playlists, slugify, wordCount, bySlug, names };
