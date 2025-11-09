// src/lib/projects.ts
// ============================================================================
// Semua data project lo ngumpul di sini. Tinggal nambah object di array
// `projects` di bawah. Tipe Media udah mendukung:
// - image (lokal / external)
// - video (file lokal mp4/webm di /public/videos)
// - embed (Vimeo/YouTube) biar ringan.
//
// TIP:
// - Gambar simpan di /public/images → pemakaian di kode jadi "/images/xxx.jpg"
// - Video simpan di /public/videos → pemakaian di kode jadi "/videos/xxx.mp4"
// - Vimeo/YouTube pake "id" videonya (bukan full URL).
// ============================================================================

export type ImageMedia = {
  type: "image";
  src: string;       // contoh: "/images/project-1.jpg" (lokal) atau URL eksternal
  alt?: string;      // teks alternatif, optional
};

export type VideoMedia = {
  type: "video";
  src: string;       // contoh: "/videos/demo.mp4"
};

export type EmbedMedia = {
  type: "embed";
  provider: "vimeo" | "youtube"; // pilih salah satu
  id: string;         // ID video (contoh vimeo: "987654321", youtube: "dQw4w9WgXcQ")
};

export type Media = ImageMedia | VideoMedia | EmbedMedia;

export type Project = {
  slug: string;       // akan jadi URL /projects/<slug>, pakai huruf kecil & dash
  title: string;
  description: string;
  image: string;      // cover untuk kartu di homepage
  cover?: string;     // kalau mau cover beda di halaman detail
  tags: string[];     // badge-badge teknologi
  media?: Media[];    // isi gallery di halaman detail (boleh campur image/video/embed)
  theme?: {
    // Opsional: warna kartu khusus halaman detail (pakai HSL "nilai" tanpa hsl())
    card?: string;             // ex: "0 0% 12%"
    cardForeground?: string;   // ex: "0 0% 98%"
    border?: string;           // ex: "0 0% 22%"
  };
};

// ============================================================================
// CONTOH PROJECT (silakan duplikat salah satu, lalu ganti isinya)
// ============================================================================

export const projects: Project[] = [
  // --------------------------------------------------------------------------
  // CONTOH 1: Gambar saja
  // --------------------------------------------------------------------------
  {
    slug: "creative-portfolio-website",
    title: "Creative Portfolio Website",
    description: "Website portfolio interaktif dengan animasi halus dan grid responsif.",
    image: "/images/project2.jpg", // cover untuk list di homepage
    // cover: "/images/project2-alt-cover.jpg", // (opsional) cover khusus detail
    tags: ["React", "Next.js", "Tailwind"],
    media: [
      // NOTE: image lokal → taruh file di /public/images, lalu pakai path "/images/xxx"
      { type: "image", src: "/images/project2.jpg", alt: "Hero preview" },
      { type: "image", src: "/images/project2.jpg", alt: "Detail section" },
    ],
    // NOTE: tema kartu opsional untuk halaman detail (warna card/border)
    theme: { card: "0 0% 12%", cardForeground: "0 0% 98%", border: "0 0% 22%" },
  },

  // --------------------------------------------------------------------------
  // CONTOH 2: Video lokal (mp4) + image
  // --------------------------------------------------------------------------
  {
    slug: "runner-prototype",
    title: "Runner Prototype",
    description: "Prototype game endless runner. Video lokal (mp4) + beberapa screenshot.",
    image: "/images/runner-cover.jpg",
    tags: ["Unity", "C#"],
    media: [
      // NOTE: video lokal → taruh file di /public/videos
      { type: "video", src: "/videos/runner-demo.mp4" },
      { type: "image", src: "/images/runner-cover.jpg", alt: "Gameplay preview" },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTOH 3: Vimeo (paling ringan, streaming dari Vimeo)
  // --------------------------------------------------------------------------
  {
    slug: "motion-reel-2025",
    title: "Motion Reel 2025",
    description: "Reel motion graphics. Player dari Vimeo supaya loading ringan.",
    image: "/images/motion-cover.jpg",
    tags: ["After Effects", "Motion"],
    media: [
      // NOTE: cukup ID videonya, bukan URL penuh
      { type: "embed", provider: "vimeo", id: "987654321" },
      { type: "image", src: "/images/motion-cover.jpg", alt: "Cover" },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTOH 4: YouTube embed
  // --------------------------------------------------------------------------
  {
    slug: "yt-showcase",
    title: "YouTube Showcase",
    description: "Demo singkat via YouTube embed.",
    image: "/images/yt-cover.jpg",
    tags: ["Three.js", "WebGL"],
    media: [{ type: "embed", provider: "youtube", id: "dQw4w9WgXcQ" }],
  },
];

// Utility kecil: cari project by slug
export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/*
  CATATAN EXTERNAL IMAGE:
  Kalau kamu pakai URL gambar eksternal di <Image>, domainnya harus di-whitelist
  di next.config.js (images.domains atau images.remotePatterns).
  Kalau semua gambar pakai /public/images (lokal), kamu aman dan gak perlu config tambahan.
*/
