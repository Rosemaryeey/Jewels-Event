export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  type: string;
  category:
    | "weddings"
    | "birthdays"
    | "corporate"
    | "traditional"
    | "outdoor"
    | "burials";
  description: string;
  image: string;
}

export const galleryCategories = [
  { id: "all", name: "All Events" },
  { id: "weddings", name: "Weddings" },
  { id: "birthdays", name: "Birthdays" },
  { id: "corporate", name: "Corporate" },
  { id: "traditional", name: "Traditional" },
  { id: "burials", name: "Burials" },
  { id: "outdoor", name: "Outdoor" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Royal White Wedding",
    location: "Lagos, Nigeria",
    type: "Wedding Reception",
    category: "weddings",
    description:
      "An elegant all-white wedding reception with gold accents and stunning floral arrangements.",
    image: "/gallery1.jpg",
  },
  {
    id: "2",
    title: "Funeral Ceremony",
    location: "Abuja, Nigeria",
    type: "Burial Service",
    category: "burials",
    description:
      "A dignified funeral ceremony with respectful decorations and floral arrangements.",
    image: "/bg1.jpg",
  },
  {
    id: "3",
    title: "Sweet 16 Celebration",
    location: "Port Harcourt, Nigeria",
    type: "Birthday Party",
    category: "birthdays",
    description: "A glamorous sweet 16 birthday with pink and gold theme.",
    image: "/gallery3.jpg",
  },
  {
    id: "4",
    title: "CEO Birthday Gala",
    location: "Lagos, Nigeria",
    type: "40th Birthday",
    category: "birthdays",
    description:
      "A sophisticated black and gold themed 40th birthday celebration.",
    image: "/gallery4.jpg",
  },
  {
    id: "5",
    title: "Annual Gala Dinner",
    location: "Lagos, Nigeria",
    type: "Corporate Event",
    category: "weddings",
    description:
      "An elegant corporate gala dinner with premium table settings.",
    image: "/pic3.jpeg",
  },
  {
    id: "6",
    title: "Product Launch",
    location: "Abuja, Nigeria",
    type: "Corporate Event",
    category: "corporate",
    description: "A modern product launch event with sleek, minimalist design.",
    image: "pic.jpeg",
  },
  {
    id: "7",
    title: "Traditional Wedding",
    location: "Enugu, Nigeria",
    type: "Traditional Ceremony",
    category: "traditional",
    description:
      "A beautiful traditional wedding ceremony with cultural elements.",
    image: "/gallery7.jpg",
  },
  {
    id: "8",
    title: "Naming Ceremony",
    location: "Ibadan, Nigeria",
    type: "Traditional Event",
    category: "traditional",
    description:
      "A colorful traditional naming ceremony with authentic decorations.",
    image: "/gallery8.jpg",
  },
  {
    id: "9",
    title: "Garden Wedding",
    location: "Lagos, Nigeria",
    type: "Outdoor Wedding",
    category: "outdoor",
    description:
      "A romantic outdoor garden wedding with natural floral arrangements.",
    image: "/gallery9.jpg",
  },
  {
    id: "10",
    title: "Beach Party",
    location: "Lekki, Nigeria",
    type: "Outdoor Event",
    category: "outdoor",
    description: "A stunning beachside celebration with tropical decorations.",
    image: "/gallery10.jpg",
  },
  {
    id: "11",
    title: "Luxury Bridal Shower",
    location: "Lagos, Nigeria",
    type: "Bridal Shower",
    category: "weddings",
    description:
      "An intimate and elegant bridal shower with blush and gold theme.",
    image: "/gallery11.jpg",
  },
  {
    id: "12",
    title: "Memorial Service",
    location: "Lagos, Nigeria",
    type: "Burial Ceremony",
    category: "burials",
    description:
      "A dignified memorial service with elegant floral arrangements and respectful decor.",
    image: "/pic2.jpeg",
  },
  {
    id: "13",
    title: "Funeral Reception",
    location: "Abuja, Nigeria",
    type: "Burial Event",
    category: "burials",
    description:
      "A respectful reception following a funeral service with comforting atmosphere.",
    image: "/gallery13.jpg",
  },
  {
    id: "14",
    title: "Wake Keeping",
    location: "Port Harcourt, Nigeria",
    type: "Burial Ceremony",
    category: "burials",
    description:
      "A traditional wake keeping event with appropriate decorations and lighting.",
    image: "/gallery14.jpg",
  },
];
