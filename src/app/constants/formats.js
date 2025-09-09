// Format options and pricing metadata to centralize later.

export const formats = [
  {
    id: "physical",
    label: "📗 Physical Book",
    price: 699,
    details: {
      pages: "32-48 full-color pages",
      paper: "Premium matte paper",
      cover: "Hardcover",
      delivery: "Ships in 5-8 days",
    },
    badge: "Most Popular",
  },
  {
    id: "ebook",
    label: "📱 Soft Book (eBook)",
    price: 199,
    details: {
      pages: "Digital PDF/ePub",
      devices: "Works on phones, tablets, Kindle",
      delivery: "Instant download",
    },
    badge: "Best Value",
  },
  {
    id: "audio",
    label: "🎧 Audio Book",
    price: 399,
    details: {
      length: "10-20 mins narration",
      voice: "Soothing child-friendly voice",
      delivery: "Instant streaming & download",
    },
    badge: "New",
  },
];
