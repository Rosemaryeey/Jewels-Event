import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Plus,
  Trash2,
  Edit3,
  LogOut,
  Save,
  FolderPlus,
  Edit,
  Wrench,
} from "lucide-react";
import {
  authenticateAdmin,
  isAdminAuthenticated,
  signOutAdmin,
  loadGalleryItems,
  saveGalleryItems,
  loadRentalItems,
  saveRentalItems,
  loadSiteContent,
  saveSiteContent,
  type SiteContent,
} from "@/lib/admin";
import type { GalleryItem } from "@/data/gallery";
import type { RentalItem } from "@/data/rentals";
import { galleryCategories } from "@/data/gallery";

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return (crypto as Crypto).randomUUID();
  }
  return `item-${Date.now()}`;
}

const initialGalleryForm: GalleryItem = {
  id: "",
  title: "",
  location: "",
  type: "",
  category: "weddings",
  description: "",
  image: "",
};

const initialRentalForm: RentalItem = {
  id: "",
  name: "",
  description: "",
  category: "Seating",
  price: "",
};

export default function Admin() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"gallery" | "rentals" | "content">("gallery");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => loadGalleryItems());
  const [rentalItems, setRentalItems] = useState<RentalItem[]>(() => loadRentalItems());
  const [galleryForm, setGalleryForm] = useState<GalleryItem>(initialGalleryForm);
  const [rentalForm, setRentalForm] = useState<RentalItem>(initialRentalForm);
  const [contentForm, setContentForm] = useState<SiteContent>(() => loadSiteContent());
  const [isEditingGallery, setIsEditingGallery] = useState(false);
  const [isEditingRental, setIsEditingRental] = useState(false);

  useEffect(() => {
    setAuthenticated(isAdminAuthenticated());
  }, []);

  const galleryCount = useMemo(() => galleryItems.length, [galleryItems]);
  const rentalCount = useMemo(() => rentalItems.length, [rentalItems]);

  const resetGalleryForm = () => setGalleryForm(initialGalleryForm);
  const resetRentalForm = () => setRentalForm(initialRentalForm);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (authenticateAdmin(password)) {
      setAuthenticated(true);
      setPassword("");
      setError("");
      navigate("/admin");
      return;
    }
    setError("Incorrect password. Try again.");
  };

  const handleLogout = () => {
    signOutAdmin();
    setAuthenticated(false);
    navigate("/");
  };

  const persistGallery = (items: GalleryItem[]) => {
    setGalleryItems(items);
    saveGalleryItems(items);
  };

  const persistRentals = (items: RentalItem[]) => {
    setRentalItems(items);
    saveRentalItems(items);
  };

  const handleGallerySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newGallery = { ...galleryForm };
    if (!newGallery.title || !newGallery.image || !newGallery.location) {
      setError("Please fill in title, image URL, and location for gallery items.");
      return;
    }
    if (isEditingGallery && newGallery.id) {
      persistGallery(
        galleryItems.map((item) => (item.id === newGallery.id ? newGallery : item)),
      );
    } else {
      newGallery.id = createId();
      persistGallery([newGallery, ...galleryItems]);
    }
    resetGalleryForm();
    setIsEditingGallery(false);
    setError("");
  };

  const handleRentalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newRental = { ...rentalForm };
    if (!newRental.name || !newRental.category) {
      setError("Please fill in the rental name and category.");
      return;
    }
    if (isEditingRental && newRental.id) {
      persistRentals(
        rentalItems.map((item) => (item.id === newRental.id ? newRental : item)),
      );
    } else {
      newRental.id = createId();
      persistRentals([newRental, ...rentalItems]);
    }
    resetRentalForm();
    setIsEditingRental(false);
    setError("");
  };

  const handleGalleryEdit = (item: GalleryItem) => {
    setGalleryForm(item);
    setIsEditingGallery(true);
    setActiveTab("gallery");
    setError("");
  };

  const handleRentalEdit = (item: RentalItem) => {
    setRentalForm(item);
    setIsEditingRental(true);
    setActiveTab("rentals");
    setError("");
  };

  const handleGalleryDelete = (id: string) => {
    persistGallery(galleryItems.filter((item) => item.id !== id));
    if (galleryForm.id === id) {
      resetGalleryForm();
      setIsEditingGallery(false);
    }
  };

  const handleRentalDelete = (id: string) => {
    persistRentals(rentalItems.filter((item) => item.id !== id));
    if (rentalForm.id === id) {
      resetRentalForm();
      setIsEditingRental(false);
    }
  };

  const handleContentSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveSiteContent(contentForm);
    setError("");
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen pt-20 bg-luxury-black text-white">
        <div className="container-luxury mx-auto py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card border border-white/10 p-10 max-w-xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-8 h-8 text-gold" />
              <div>
                <h1 className="text-3xl font-serif font-bold">Admin Login</h1>
                <p className="text-white/60">Enter your password to access the dashboard.</p>
              </div>
            </div>
            <form onSubmit={handleLogin} className="space-y-5">
              <label className="block text-sm font-medium text-white/80">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mt-3 w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                  placeholder="Enter admin password"
                />
              </label>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button
                type="submit"
                className="w-full py-4 bg-gold text-luxury-black font-semibold rounded-lg transition-all hover:bg-gold-light"
              >
                Unlock Admin Dashboard
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 bg-luxury-black text-white">
      <div className="container-luxury mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card border border-white/10 p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gold">Admin Panel</p>
              <h1 className="text-4xl font-serif font-bold mt-4">Manage Website Content</h1>
              <p className="text-white/60 max-w-2xl mt-3">
                Add, edit, and remove gallery and rental items. You can also update key contact info and social links for the website.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:border-gold hover:text-gold transition-all"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
            <div className="space-y-4">
              <button
                onClick={() => setActiveTab("gallery")}
                className={`w-full text-left rounded-2xl px-5 py-4 transition-all ${
                  activeTab === "gallery"
                    ? "bg-gold text-luxury-black"
                    : "bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FolderPlus className="w-5 h-5" />
                  Gallery Items ({galleryCount})
                </div>
              </button>
              <button
                onClick={() => setActiveTab("rentals")}
                className={`w-full text-left rounded-2xl px-5 py-4 transition-all ${
                  activeTab === "rentals"
                    ? "bg-gold text-luxury-black"
                    : "bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5" />
                  Rental Items ({rentalCount})
                </div>
              </button>
              <button
                onClick={() => setActiveTab("content")}
                className={`w-full text-left rounded-2xl px-5 py-4 transition-all ${
                  activeTab === "content"
                    ? "bg-gold text-luxury-black"
                    : "bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Edit className="w-5 h-5" />
                  Website Content
                </div>
              </button>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-serif font-bold">
                    {activeTab === "gallery"
                      ? "Manage Gallery"
                      : activeTab === "rentals"
                      ? "Manage Rentals"
                      : "Website Content"}
                  </h2>
                  <p className="text-white/60 mt-2">
                    {activeTab === "gallery"
                      ? "Upload new gallery items or edit existing work showcased on the site."
                      : activeTab === "rentals"
                      ? "Manage rental inventory, prices, and item descriptions."
                      : "Update contact info and social links used across the website."}
                  </p>
                </div>
                {activeTab === "gallery" && (
                  <button
                    onClick={() => {
                      resetGalleryForm();
                      setIsEditingGallery(false);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all hover:border-gold hover:text-gold"
                  >
                    <Plus className="w-4 h-4" />
                    Add Gallery Item
                  </button>
                )}
                {activeTab === "rentals" && (
                  <button
                    onClick={() => {
                      resetRentalForm();
                      setIsEditingRental(false);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all hover:border-gold hover:text-gold"
                  >
                    <Plus className="w-4 h-4" />
                    Add Rental Item
                  </button>
                )}
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              {activeTab === "gallery" && (
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-4">
                    {galleryItems.length === 0 ? (
                      <div className="glass-card border border-white/10 p-6 text-white/60">
                        No gallery items available.
                      </div>
                    ) : (
                      galleryItems.map((item) => (
                        <div
                          key={item.id}
                          className="glass-card border border-white/10 p-5 flex flex-col gap-4"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-sm uppercase tracking-[0.24em] text-gold">
                                {item.category}
                              </p>
                              <h3 className="text-xl font-semibold text-white">
                                {item.title}
                              </h3>
                              <p className="text-white/60 text-sm mt-1">
                                {item.type} • {item.location}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleGalleryEdit(item)}
                                className="rounded-full bg-white/5 p-2 text-white/80 hover:bg-gold hover:text-luxury-black transition-all"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleGalleryDelete(item.id)}
                                className="rounded-full bg-red-500/10 p-2 text-red-300 hover:bg-red-500/20 transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-white/60 text-sm line-clamp-3">
                            {item.description}
                          </p>
                          <p className="text-white/50 text-xs">Image: {item.image}</p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="glass-card border border-white/10 p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {isEditingGallery ? "Edit Gallery Item" : "Create Gallery Item"}
                    </h3>
                    <form onSubmit={handleGallerySubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Title"
                        value={galleryForm.title}
                        onChange={(event) =>
                          setGalleryForm((prev) => ({ ...prev, title: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        value={galleryForm.location}
                        onChange={(event) =>
                          setGalleryForm((prev) => ({ ...prev, location: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <input
                        type="text"
                        placeholder="Type"
                        value={galleryForm.type}
                        onChange={(event) =>
                          setGalleryForm((prev) => ({ ...prev, type: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <select
                        value={galleryForm.category}
                        onChange={(event) =>
                          setGalleryForm((prev) => ({
                            ...prev,
                            category: event.target.value as GalleryItem["category"],
                          }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      >
                        {galleryCategories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        placeholder="Image URL"
                        value={galleryForm.image}
                        onChange={(event) =>
                          setGalleryForm((prev) => ({ ...prev, image: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <textarea
                        placeholder="Description"
                        rows={4}
                        value={galleryForm.description}
                        onChange={(event) =>
                          setGalleryForm((prev) => ({ ...prev, description: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <div className="flex items-center gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-luxury-black transition-all hover:bg-gold-light"
                        >
                          <Save className="w-4 h-4" />
                          Save Gallery Item
                        </button>
                        {isEditingGallery && (
                          <button
                            type="button"
                            onClick={() => {
                              resetGalleryForm();
                              setIsEditingGallery(false);
                              setError("");
                            }}
                            className="px-4 py-3 rounded-full border border-white/10 text-sm text-white/80 hover:border-gold hover:text-gold transition-all"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {activeTab === "rentals" && (
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-4">
                    {rentalItems.length === 0 ? (
                      <div className="glass-card border border-white/10 p-6 text-white/60">
                        No rentals currently available.
                      </div>
                    ) : (
                      rentalItems.map((item) => (
                        <div
                          key={item.id}
                          className="glass-card border border-white/10 p-5 flex flex-col gap-4"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-sm uppercase tracking-[0.24em] text-gold">
                                {item.category}
                              </p>
                              <h3 className="text-xl font-semibold text-white">
                                {item.name}
                              </h3>
                              <p className="text-white/60 text-sm mt-1">
                                {item.price}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleRentalEdit(item)}
                                className="rounded-full bg-white/5 p-2 text-white/80 hover:bg-gold hover:text-luxury-black transition-all"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleRentalDelete(item.id)}
                                className="rounded-full bg-red-500/10 p-2 text-red-300 hover:bg-red-500/20 transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-white/60 text-sm line-clamp-3">
                            {item.description}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="glass-card border border-white/10 p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {isEditingRental ? "Edit Rental Item" : "Create Rental Item"}
                    </h3>
                    <form onSubmit={handleRentalSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Rental Name"
                        value={rentalForm.name}
                        onChange={(event) =>
                          setRentalForm((prev) => ({ ...prev, name: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <input
                        type="text"
                        placeholder="Category"
                        value={rentalForm.category}
                        onChange={(event) =>
                          setRentalForm((prev) => ({ ...prev, category: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <input
                        type="text"
                        placeholder="Price"
                        value={rentalForm.price}
                        onChange={(event) =>
                          setRentalForm((prev) => ({ ...prev, price: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <textarea
                        placeholder="Description"
                        rows={4}
                        value={rentalForm.description}
                        onChange={(event) =>
                          setRentalForm((prev) => ({ ...prev, description: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <div className="flex items-center gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-luxury-black transition-all hover:bg-gold-light"
                        >
                          <Save className="w-4 h-4" />
                          Save Rental Item
                        </button>
                        {isEditingRental && (
                          <button
                            type="button"
                            onClick={() => {
                              resetRentalForm();
                              setIsEditingRental(false);
                              setError("");
                            }}
                            className="px-4 py-3 rounded-full border border-white/10 text-sm text-white/80 hover:border-gold hover:text-gold transition-all"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {activeTab === "content" && (
                <div className="glass-card border border-white/10 p-6">
                  <h3 className="text-xl font-semibold mb-4">Website Content Editor</h3>
                  <form onSubmit={handleContentSave} className="space-y-4">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Phone"
                        value={contentForm.phone}
                        onChange={(event) =>
                          setContentForm((prev) => ({ ...prev, phone: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={contentForm.email}
                        onChange={(event) =>
                          setContentForm((prev) => ({ ...prev, email: event.target.value }))
                        }
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Location"
                      value={contentForm.location}
                      onChange={(event) =>
                        setContentForm((prev) => ({ ...prev, location: event.target.value }))
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                    />
                    <input
                      type="text"
                      placeholder="Instagram URL"
                      value={contentForm.instagram}
                      onChange={(event) =>
                        setContentForm((prev) => ({ ...prev, instagram: event.target.value }))
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                    />
                    <input
                      type="text"
                      placeholder="Facebook URL"
                      value={contentForm.facebook}
                      onChange={(event) =>
                        setContentForm((prev) => ({ ...prev, facebook: event.target.value }))
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                    />
                    <input
                      type="text"
                      placeholder="TikTok URL"
                      value={contentForm.tiktok}
                      onChange={(event) =>
                        setContentForm((prev) => ({ ...prev, tiktok: event.target.value }))
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-gold/50"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-luxury-black transition-all hover:bg-gold-light"
                    >
                      <Save className="w-4 h-4" />
                      Save Website Content
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
