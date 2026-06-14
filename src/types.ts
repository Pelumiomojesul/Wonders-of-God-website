export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  series?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  registrationLink?: string;
  image: string;
  category: 'Special' | 'Service' | 'Community';
}

export interface Testimony {
  id: string;
  name: string;
  photo: string;
  story: string;
  date: string;
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface Leadership {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  socials?: {
    twitter?: string;
    instagram?: string;
  };
}
