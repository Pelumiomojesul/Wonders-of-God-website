import { Sermon, Event, Testimony, Ministry, Leadership } from '../types';

export const MOCK_SERMONS: Sermon[] = [
  {
    id: '1',
    title: 'Walking in Uncommon Wonders',
    speaker: 'Pastor John Doe',
    date: '2026-06-07',
    thumbnail: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtube.com/embed/dQw4w9WgXcQ',
    description: 'Discover how to align yourself with the miraculous power of God in your daily life.',
    series: 'Wonders Series'
  },
  {
    id: '2',
    title: 'The Power of Prevailing Prayer',
    speaker: 'Pastor Jane Smith',
    date: '2026-05-31',
    thumbnail: 'https://images.unsplash.com/photo-1544427928-14292fb542d1?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtube.com/embed/dQw4w9WgXcQ',
    description: 'Lifting up our voices together to see mountains moved and hearts transformed.',
    series: 'Prayer Ignite'
  },
  {
    id: '3',
    title: 'Total Transformation',
    speaker: 'Pastor Mike Obi',
    date: '2026-05-24',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c7377450a485?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://youtube.com/embed/dQw4w9WgXcQ',
    description: 'How the Gospel changes everything about our perspective and purpose.',
    series: 'New Beginnings'
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Night of 10,000 Wonders',
    date: 'June 28, 2026 • 6:00 PM',
    venue: 'Osapa London, Lekki',
    description: 'An extraordinary night of worship, miracles, and the tangible presence of God.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    category: 'Special',
    registrationLink: '#'
  },
  {
    id: '2',
    title: 'Workers Empowerment Seminar',
    date: 'July 05, 2026 • 9:00 AM',
    venue: 'Community Hall',
    description: 'Building the hands that build the house. Training for all church workers.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
    category: 'Community',
    registrationLink: '#'
  }
];

export const MOCK_TESTIMONIES: Testimony[] = [
  {
    id: '1',
    name: 'Sarah Adeyemi',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    story: 'I came to WOGC broken and lost. Through the teachings and the supportive community, I found not just healing, but a purpose I never knew existed.',
    date: 'May 2026'
  },
  {
    id: '2',
    name: 'David Okafor',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    story: 'After attending the Wonders Night, my business which had been struggling for 2 years saw an immediate supernatural turnaround.',
    date: 'April 2026'
  }
];

export const MOCK_MINISTRIES: Ministry[] = [
  { id: '1', name: 'Youth', slug: 'youth', description: 'Empowering the next generation to lead with faith and excellence.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' },
  { id: '2', name: 'Children', slug: 'children', description: 'Building a solid foundation for our little ones in the word of God.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Men', slug: 'men', description: 'Iron sharpening iron. Men becoming the leaders God called them to be.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'Women', slug: 'women', description: 'Virtuous women growing in grace and community.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
  { id: '5', name: 'Prayer', slug: 'prayer', description: 'The engine room of the church. Interceding for lives and our nation.', image: 'https://images.unsplash.com/photo-1544427928-14292fb542d1?auto=format&fit=crop&q=80&w=800' },
  { id: '6', name: 'Outreach', slug: 'outreach', description: 'Reaching out with the love of Christ to the Lekki community and beyond.', image: 'https://images.unsplash.com/photo-1469571483333-2199b3174291?auto=format&fit=crop&q=80&w=800' }
];

export const MOCK_LEADERSHIP: Leadership[] = [
  {
    id: '1',
    name: 'Senior Pastor',
    role: 'Lead Pastor',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    bio: 'Dedicated to seeing lives transformed by the power of God in Lekki.'
  }
];
