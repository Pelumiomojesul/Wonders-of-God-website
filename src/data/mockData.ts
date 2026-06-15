import { Sermon, Event, Testimony, Ministry, Leadership, Devotional } from '../types';

export const MOCK_DAILY_GRACE: Devotional = {
  id: '1',
  scripture: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
  reference: "Isaiah 40:31",
  thought: "Waiting on the Lord is not passive; it is an active expectation. When we align our hearts with His timing, He provides a supernatural strength that carries us through every challenge. Today, take a moment to pause and wait on Him.",
  date: "June 14, 2026"
};

export const MOCK_SERMONS: Sermon[] = [
  {
    id: '1',
    title: 'Walking in Uncommon Wonders',
    speaker: 'Rev. J.U Aire',
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
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200',
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
  },
  {
    id: '3',
    name: 'Chidi Eze',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    story: 'I was healed from a chronic kidney condition after participating in the 21-day prayer and fasting program. The doctors couldn\'t explain it!',
    date: 'June 2026'
  },
  {
    id: '4',
    name: 'Oluwaseun Balogun',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400',
    story: 'I received a full scholarship to study abroad for my Masters after 4 years of constant rejections. God indeed opens doors no man can shut.',
    date: 'June 2026'
  },
  {
    id: '5',
    name: 'Tunde Williams',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    story: 'I escaped a major accident on the Third Mainland Bridge unhurt. I felt a strong prompt to pray just minutes before it happened. Thank you Jesus!',
    date: 'May 2026'
  },
  {
    id: '6',
    name: 'Ngozi Okoro',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
    story: 'After 10 years of waiting, God blessed our home with beautiful twins. WOGC is truly a place where wonders never cease.',
    date: 'April 2026'
  },
  {
    id: '7',
    name: 'Ifeanyi Nwosu',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    story: 'I secured a top management role in a multinational company I didn\'t even apply to. It was a purely divine connection through a fellow church member.',
    date: 'March 2026'
  },
  {
    id: '8',
    name: 'Blessing Akpan',
    photo: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=400',
    story: 'My marriage was at the brink of divorce, but through the counseling and prayers at WOGC, our love was restored and even stronger now.',
    date: 'February 2026'
  },
  {
    id: '9',
    name: 'Emeka Onu',
    photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400',
    story: 'I graduated with a First Class degree against all odds. When my finances failed, God provided through the church\'s education support fund.',
    date: 'January 2026'
  },
  {
    id: '10',
    name: 'Folake Adeleke',
    photo: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&q=80&w=400',
    story: 'I used to suffer from severe depression and anxiety. Since I joined the choir and started serving God, I have found unspeakable peace and joy.',
    date: 'December 2025'
  }
];

export const MOCK_MINISTRIES: Ministry[] = [
  { id: '1', name: 'Youth Ministry', slug: 'youth-ministry', description: 'Empowering the next generation to lead with faith and excellence.', image: '/src/assets/images/youth_ministry_uploaded_match_1781471885534.jpg' },
  { id: '2', name: 'Children\'s Church', slug: 'childrens-church', description: 'Building a solid foundation for our little ones in the word of God.', image: '/src/assets/images/children_music_ministry_orchestra_1781472289459.jpg' },
  { id: '3', name: 'Men of Valor', slug: 'men-of-valor', description: 'Iron sharpening iron. Men becoming the leaders God called them to be.', image: '/src/assets/images/men_ministry_leaders_1781473619773.jpg' },
  { id: '4', name: 'Virtuous Women', slug: 'virtuous-women', description: 'Virtuous women growing in grace and community.', image: '/src/assets/images/women_ministry_joyful_celebration_1781473736099.jpg' },
  { id: '5', name: 'House of Prayer', slug: 'house-of-prayer', description: 'The engine room of the church. Interceding for lives and our nation.', image: '/src/assets/images/prayer_ministry_fervent_intercession_1781473841893.jpg' },
  { id: '6', name: 'Outreach Ministry', slug: 'outreach-ministry', description: 'Reaching out with the love of Christ to the Lekki community and beyond.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' }
];

export const MOCK_LEADERSHIP: Leadership[] = [
  {
    id: '1',
    name: 'Rev. J.U Aire',
    role: 'General Overseer',
    photo: 'https://images.unsplash.com/photo-1542103749-8ef59b94f42e?auto=format&fit=crop&q=80&w=800',
    bio: 'Dedicated to seeing lives transformed by the power of God.'
  },
  {
    id: '2',
    name: 'Pastor/Mrs Fidelia Aire',
    role: 'Executive Pastor',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    bio: 'Commitment to excellence and spiritual growth.'
  },
  {
    id: '3',
    name: 'Pastor Osahon Aire',
    role: 'Resident Pastor',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    bio: 'Empowering this generation with the truth of God\'s word.'
  }
];
