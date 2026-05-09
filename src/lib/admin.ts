import type { GalleryItem } from "@/data/gallery";
import { galleryItems as defaultGalleryItems } from "@/data/gallery";
import type { RentalItem } from "@/data/rentals";
import { rentals as defaultRentals } from "@/data/rentals";

export const ADMIN_PASSWORD = "Jewel@21";
const ADMIN_SESSION_KEY = "jewels-event-admin-auth";
const GALLERY_STORAGE_KEY = "jewels-event-gallery-items";
const RENTAL_STORAGE_KEY = "jewels-event-rental-items";
const SITE_CONTENT_KEY = "jewels-event-site-content";

export interface SiteContent {
  phone: string;
  email: string;
  location: string;
  instagram: string;
  facebook: string;
  tiktok: string;
}

const defaultSiteContent: SiteContent = {
  phone: "+234 803 741 9758",
  email: "jewelsheartfoundation06@gmail.com",
  location: "Aba, Nigeria",
  instagram: "https://www.instagram.com/jewels_event?igsh=a3NoOWVzbmJjMTY2",
  facebook: "https://www.facebook.com/share/1BDK1xV2Vc/?mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@jewels.event?_r=1&_t=ZS-96CVlJ3dSNk",
};

function readLocalStorageItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  const raw = window.localStorage.getItem(key);
  if (!raw) {
    return fallback;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

export function authenticateAdmin(password: string): boolean {
  if (password === ADMIN_PASSWORD) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(ADMIN_SESSION_KEY, "true");
    }
    return true;
  }
  return false;
}

export function signOutAdmin() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

export function loadGalleryItems(): GalleryItem[] {
  return readLocalStorageItem<GalleryItem[]>(GALLERY_STORAGE_KEY, defaultGalleryItems);
}

export function saveGalleryItems(items: GalleryItem[]) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(items));
}

export function loadRentalItems(): RentalItem[] {
  return readLocalStorageItem<RentalItem[]>(RENTAL_STORAGE_KEY, defaultRentals);
}

export function saveRentalItems(items: RentalItem[]) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(RENTAL_STORAGE_KEY, JSON.stringify(items));
}

export function loadSiteContent(): SiteContent {
  return readLocalStorageItem<SiteContent>(SITE_CONTENT_KEY, defaultSiteContent);
}

export function saveSiteContent(content: SiteContent) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(SITE_CONTENT_KEY, JSON.stringify(content));
}
