export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  dateTaken: string; // MM/YY format
  category: string;
  uploadTimestamp: number;
  thumbnailSrc?: string;
}

export const galleryCategories = [
  "All",
  "Community Events",
  "Meetings",
  "Fundraisers",
  "Social Gatherings",
  "Volunteer Activities",
  "Special Events"
];

// Enhanced gallery data with new images
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/image1.png",
    alt: "Duluth Civitan members at a social event in Gwinnett County",
    title: "Social Event",
    description: "Members gathering for community fellowship",
    dateTaken: "03/24",
    category: "Social Gatherings",
    uploadTimestamp: Date.now() - 86400000
  },
  {
    id: "2",
    src: "/images/gallery/image2.png",
    alt: "Duluth Civitan members at a meeting in Duluth, Georgia",
    title: "Club Meeting",
    description: "Regular monthly meeting with members",
    dateTaken: "03/24",
    category: "Meetings",
    uploadTimestamp: Date.now() - 172800000
  },
  {
    id: "3",
    src: "/images/gallery/image3.png",
    alt: "Duluth Civitan members with club banner at Gwinnett community event",
    title: "Community Event",
    description: "Representing Duluth Civitan at community gathering",
    dateTaken: "02/24",
    category: "Community Events",
    uploadTimestamp: Date.now() - 259200000
  },
  {
    id: "4",
    src: "/images/gallery/image4.png",
    alt: "Duluth Civitan social gathering for Gwinnett County developmental disabilities support",
    title: "Support Gathering",
    description: "Event supporting developmental disabilities programs",
    dateTaken: "02/24",
    category: "Special Events",
    uploadTimestamp: Date.now() - 345600000
  },
  {
    id: "5",
    src: "/images/gallery/image5.png",
    alt: "Duluth Civitan members at Kids R Kids program in Gwinnett County",
    title: "Kids R Kids Program",
    description: "Supporting local children's programs",
    dateTaken: "01/24",
    category: "Volunteer Activities",
    uploadTimestamp: Date.now() - 432000000
  },
  {
    id: "6",
    src: "/images/gallery/image6.png",
    alt: "Duluth Civitan fundraiser dinner supporting Gwinnett County disability programs",
    title: "Fundraiser Dinner",
    description: "Annual fundraising dinner for disability programs",
    dateTaken: "12/23",
    category: "Fundraisers",
    uploadTimestamp: Date.now() - 518400000
  },
  {
    id: "7",
    src: "/images/gallery/image7.png",
    alt: "Duluth Civitan social dinner with Gwinnett County community leaders",
    title: "Leadership Dinner",
    description: "Dinner with community leaders and officials",
    dateTaken: "12/23",
    category: "Social Gatherings",
    uploadTimestamp: Date.now() - 604800000
  },
  {
    id: "8",
    src: "/images/gallery/image8.png",
    alt: "Duluth Civitan members on a bridge at Gwinnett County park",
    title: "Park Event",
    description: "Team building event at local park",
    dateTaken: "11/23",
    category: "Social Gatherings",
    uploadTimestamp: Date.now() - 691200000
  },
  {
    id: "9",
    src: "/images/gallery/image9.png",
    alt: "Duluth Civitan members with Differently Abled program participants in Gwinnett County",
    title: "Differently Abled Program",
    description: "Working with differently abled community members",
    dateTaken: "11/23",
    category: "Volunteer Activities",
    uploadTimestamp: Date.now() - 777600000
  },
  {
    id: "10",
    src: "/images/gallery/image10.png",
    alt: "Duluth Civitan club banner and members at Gwinnett County community event",
    title: "Community Outreach",
    description: "Outreach event in the community",
    dateTaken: "10/23",
    category: "Community Events",
    uploadTimestamp: Date.now() - 864000000
  },
  {
    id: "11",
    src: "/images/gallery/image11.png",
    alt: "Duluth Civitan bridge event connecting community members in Gwinnett County",
    title: "Community Bridge Event",
    description: "Building connections in our community",
    dateTaken: "10/23",
    category: "Community Events",
    uploadTimestamp: Date.now() - 950400000
  }
];

export const getFilteredImages = (category: string, dateFilter: string, searchTerm: string) => {
  return galleryImages.filter(image => {
    const categoryMatch = category === "All" || image.category === category;
    const dateMatch = !dateFilter || image.dateTaken === dateFilter;
    const searchMatch = !searchTerm || 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.alt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && dateMatch && searchMatch;
  });
};

export const getUniqueDates = () => {
  const dates = [...new Set(galleryImages.map(img => img.dateTaken))];
  return dates.sort((a, b) => {
    const [monthA, yearA] = a.split('/').map(Number);
    const [monthB, yearB] = b.split('/').map(Number);
    return yearB - yearA || monthB - monthA;
  });
};
