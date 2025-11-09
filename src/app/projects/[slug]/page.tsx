// src/app/projects/[slug]/page.tsx
// ============================================================================
// Halaman detail project. Gallery di-render sesuai jenis medianya:
// - image  → <Image />
// - video  → <video controls>
// - embed  → <iframe> (Vimeo/YouTube)
//
// Cara kerja warna card custom:
//   Di file data (projects.ts), kalau `theme` diisi, kita override CSS var:
//   --card, --card-foreground, --border → dipakai Tailwind via hsl(var(--xxx)).
//
// Cukup edit data di lib/projects.ts. Halaman ini otomatis ngikut.
// ============================================================================

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, Media } from "@/lib/projects";

export async function generateStaticParams() {
  // NOTE: Ini supaya semua slug project di-SSG waktu build (App Router).
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  // NOTE: cover fallback → pakai cover khusus, kalau kosong pakai image utama, kalau kosong juga pakai /wlp.png
  const cover = project.cover || project.image || "/wlp.png";

  // NOTE: styleVars dipakai untuk override warna card khusus halaman ini (kalau theme ada).
  // Kita mendorong nilai HSL (tanpa hsl()) ke custom CSS variables yang dipakai Tailwind: hsl(var(--card))
  // NOTE: styleVars dipakai untuk override warna card khusus halaman ini (kalau theme ada).
  // Kita mendorong nilai HSL (tanpa hsl()) ke custom CSS variables yang dipakai Tailwind: hsl(var(--card))
  const styleVars = {
    ["--card"]: project.theme?.card,
    ["--card-foreground"]: project.theme?.cardForeground,
    ["--border"]: project.theme?.border,
  } as React.CSSProperties;

  return (
    <main className="min-h-screen pb-24">
      {/* HEADER ============================================================ */}
      <section className="relative pt-28 pb-12 px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to Home
          </Link>

          <div className="mt-6 flex flex-col md:flex-row items-start gap-8">
            {/* Cover kiri */}
            <div className="relative w-full md:w-2/5 aspect-[16/10] rounded-xl overflow-hidden border border-border">
              <Image src={cover} alt={project.title} fill className="object-cover" />
            </div>

            {/* Judul & deskripsi kanan */}
            <div className="md:flex-1">
              <h1 className="text-4xl md:text-5xl font-black mb-4">{project.title}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-border text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY =========================================================== */}
      {/* NOTE: styleVars di-apply di section ini supaya warna card bisa custom */}
      <section className="py-16 px-6 lg:px-8" style={styleVars}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kalau media kosong, fallback ke 1 gambar cover biar gak blank */}
            {(project.media?.length ? project.media : [{ type: "image" as const, src: cover }]).map((m, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                {/* RENDER SWITCH: image / video / embed */}
                {m.type === "image" && (
                  <div className="relative aspect-[16/10]">
                    {/* NOTE: alt fallback ke judul project kalau alt ga ada */}
                    <Image src={m.src} alt={m.alt || project.title} fill className="object-cover" />
                  </div>
                )}

                {m.type === "video" && (
                  <div className="relative">
                    {/* NOTE: file video lokal (mp4/webm) di /public/videos */}
                    <video controls className="w-full h-auto">
                      <source src={m.src} />
                      {/* Optional: bisa tambah <track> subtitle di sini */}
                    </video>
                  </div>
                )}

                {m.type === "embed" && (
                  <div className="relative aspect-video">
                    {/* NOTE: Provider Vimeo / YouTube pakai iframe.
                               Pastikan embeddable & visible. */}
                    {m.provider === "vimeo" ? (
                      <iframe className="w-full h-full" src={`https://vimeo.com/${m.id}?fl=ip&fe=ec`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={`${project.title} - Vimeo`} />
                    ) : (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${m.id}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title={`${project.title} - YouTube`}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
