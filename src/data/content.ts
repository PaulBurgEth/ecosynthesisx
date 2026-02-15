export const socialLinks = {
  twitter: "https://x.com/EcoSynthesisX",
  telegram: "https://t.me/EcoSynthesisX",
  discord: "https://discord.gg/EcoSynthesisX",
  juicebox: "https://juicebox.money/v4/eth:76",
};

export const interviews = [
  {
    type: "video",
    url: "https://youtu.be/bmrc4CB4yKg",
    embed: "https://www.youtube.com/embed/bmrc4CB4yKg",
    // Thumbnail from YouTube video ID bmrc4CB4yKg
    thumbnail: "https://img.youtube.com/vi/bmrc4CB4yKg/maxresdefault.jpg",
    title: "DevCon SEA 2024: The Future of Impact Markets",
    description: "Presentation on Real WorldImpact Products and Marketplaces at DevCon SEA 2024.",
    label: "Keynote Presentation",
    icon: "play",
    highlight: true
  },
  {
    type: "podcast",
    url: "https://www.cryptoaltruism.org/blog/crypto-altruists-episode-201-web3-localism-for-global-action-from-decentralized-cleanups-to-regenerative-local-economies",
    thumbnail: "/images/podcast.png",
    title: "Web3 Localism & Global Action",
    description: "Podcast and article on how DeCleanup, EcoSynthesisX, and Regen Bazaar are driving global impact through local action.",
    label: "Podcast Episode",
    icon: "mic"
  },
  {
    type: "article",
    url: "https://mirror.xyz/ecosynthesisx.eth/zOdeuaeFfJUFScZZKu1OGF7cWCiRgUHQSGE-14cf8fo",
    thumbnail: "/images/_1.png",
    title: "Taking Notes on the Development of a Global Real World Impact Market",
    description: "EcoSynthesisX's vision for a future where public goods become liquid.",
    label: "Research Article",
    icon: "file"
  },
  {
    type: "article",
    url: "https://mirror.xyz/ecosynthesisx.eth/lBc13WGdIsnOI5t6w0AMcjWL_mqx9kFR0548Ft14ptM",
    thumbnail: "/images/cleanPhangan_web.png",
    title: "Converting Cleanups into Capital",
    description: "How Clean Phangan is turning environmental cleanups into on-chain value.",
    label: "Research Article",
    icon: "file"
  },
  // Moved to end or kept if needed.
  {
    type: "video",
    url: "https://youtu.be/zVgZX1Nj48E",
    embed: "https://www.youtube.com/embed/zVgZX1Nj48E",
    thumbnail: "https://img.youtube.com/vi/zVgZX1Nj48E/maxresdefault.jpg",
    title: "Super dApp Builders EP01 with Paul Burg",
    description: "A deep dive into dApp building and Real World impact with Paul Burg.",
    label: "Video Interview",
    icon: "play"
  }
];

export const projects = [
  {
    name: "DeCleanup dMRV Tool",
    preview: "/images/decleanup.png",
    logo: "https://avatars.githubusercontent.com/u/170521953?s=200&v=4",
    subtitle: "The Data Collection Layer",
    description: "A mobile dApp that turns environmental action into verifiable data. Using AI and geolocated \"Proof of Work,\" it allows communities to organize cleanups, verify their impact, and mint initial proof-of-impact assets.",
    status: "Multi-chain Deployment & AI Verification in Development",
    statusColor: "yellow",
    links: {
      website: "https://decleanup.net/",
      twitter: "https://x.com/DeCleanupNet",
      telegram: "https://t.me/DecentralizedCleanup",
      github: "https://github.com/DeCleanup-Network"
    }
  },
  {
    name: "Regen Bazaar",
    logo: "https://avatars.githubusercontent.com/u/196631779?s=96&v=4",
    preview: "/images/regen-bazaar.png",
    subtitle: "dMRV Tool & Impact Marketplace",
    description: "A dual-purpose platform for the regenerative economy. First, it serves as a dMRV tool to verify and tokenize real-world activities (like beach cleanups, reforestation, or biodiversity efforts) into digital assets. Second, it acts as a global marketplace where these \"Impact Products\" are listed for corporate and retail buyers.",
    status: "MVP in Development",
    statusColor: "yellow",
    links: {
      website: "https://regenbazaar.com/",
      twitter: "https://x.com/RegenBazaar",
      github: "https://github.com/regen-bazaar",
      telegram: "https://t.me/regen_bazaar",
    }
  },
];

export const futureProjects = [
  {
    name: "RWI Reputation Protocol",
    status: "Research Phase",
    statusColor: "purple",
    description: "The \"Credit Score\" for the Regenerative Economy. A proposed decentralized ranking engine to aggregate user history (Gitcoin grants, DeCleanup actions) into a universal RWI Score. We are researching algorithms to weigh impact data, which will eventually allow high-ranking users to unlock DeFi yields and governance power.",
    links: {
      website: "https://github.com/EcoSynthesisX/RWI-Rank-Litepaper",
    },
    buttonText: "Read Litepaper",
    icon: "trophy"
  },
  {
    name: "Circularity Economy Model",
    status: "Research Phase",
    statusColor: "purple",
    description: "Closing the Loop on Local Value. A \"Click-to-Brick\" economic framework designed for local ecosystems like Koh Phangan. We are modeling a system where verified \"Impact Assets\" can be redeemed for real-world goods at partner businesses, effectively turning environmental action into local currency.",
    links: {
      website: "https://github.com/EcoSynthesisX/Circularity-Litepaper",
    },
    buttonText: "Read Litepaper",
    icon: "recycle"
  }
];

export const impactProducts = [
  {
    name: "Clean Phangan",
    logo: "https://pbs.twimg.com/profile_images/1700744561138737152/ncHXMdDT_400x400.jpg",
    tags: ["Marine & Jungle Conservation"],
    status: "Impact Collection Released",
    statusColor: "green",
    description: "Our pilot partner for tokenized conservation. We successfully transformed their data from beach and jungle cleanups into verifiable digital assets. This project proves our core concept: that Real-World Impact (RWI) can be digitized and funded globally.",
    links: {
      twitter: "https://twitter.com/decleanup",
      telegram: "https://t.me/decleanup",
      github: "https://github.com/decleanup",
      website: "https://cleanphangan.regenbazaar.com"
    },
    buttonText: "View Impact Collection",
    stats: [
      { value: "205+", label: "Operations" },
      { value: "90+", label: "Tons Waste Collected" },
      { value: "5,000+", label: "Participants" }
    ]
  },
  {
    name: "Eco Thailand Foundation",
    logo: "/EcoThailandLogo.png",
    tags: ["Education & Community Resilience"],
    status: "Impact Collection Released",
    statusColor: "green",
    description: "Our second partner for Real-World Impact tokenization. We have successfully launched the framework to verify and tokenize their community gardens and sustainability education workshops, expanding our dMRV scope beyond just waste management.",
    links: {
      telegram: "https://web.telegram.org/a/#-1002094600518",
      website: "https://ecothailand.regenbazaar.com",
    },
    buttonText: "View Impact Collection",
    stats: [
      { value: "1,000+", label: "Students Educated" },
      { value: "5+", label: "Community Gardens" },
      { value: "300+", label: "Entities Engaged" }
    ]
  }
];

export const backers = [
  { name: 'Octant', logo: '/images/octant.svg', url: 'https://octant.app/' },
  { name: 'Celo Public Good', logo: '/images/celo.svg', url: 'https://www.celopg.eco/' },
  { name: 'Gitcoin QF', logo: '/images/gitcoin.svg', url: 'https://gitcoin.co/' },
  { name: 'Giveth QF', logo: '/images/giveth.svg', url: 'https://giveth.io/' },
  { name: 'Meta Pool DAO', logo: '/images/meta.svg', url: 'https://metapool.app/' },
  { name: 'Arbitrum DAO', logo: '/images/arbitrum.svg', url: 'https://arbitrum.foundation/' },
];
