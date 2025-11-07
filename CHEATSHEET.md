📋 CHEAT SHEET - Copy Paste Code
🖼️ 1. PROFILE PHOTO
File: src/app/page.tsx Line: ~235-242

Copy-paste code ini:

<Image

  src="/images/profile.jpg"

  alt="Profile Photo"

  fill

  className="object-cover transition-transform duration-500 group-hover:scale-110"

  sizes="(max-width: 768px) 100vw, 50vw"

/>
Ganti bagian yang ada text "YN" dengan code di atas.

🖼️ 2. PROJECT IMAGES
File: src/app/page.tsx Line: ~318-330

Copy-paste code ini:

<Image

  src={project.image}

  alt={project.title}

  fill

  className="object-cover transition-transform duration-500 group-hover:scale-110"

  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"

/>
Ganti yang ada angka 1, 2, 3 dengan code di atas.

🖼️ 3. HERO BACKGROUND (Optional)
File: src/app/page.tsx Line: ~155-165

Copy-paste code ini:

<Image

  src="/images/hero-bg.jpg"

  alt="Background"

  fill

  className="object-cover opacity-10"

  priority

/>
📁 Nama File Gambar:
Upload ke folder public/images/:

profile.jpg       <- Foto profil
project1.jpg      <- Project #1
project2.jpg      <- Project #2
project3.jpg      <- Project #3
project4.jpg      <- Project #4
project5.jpg      <- Project #5
project6.jpg      <- Project #6
hero-bg.jpg       <- Background (optional)
⚡ Quick Steps:
Upload gambar ke public/images/
Buka src/app/page.tsx
Ctrl+F cari: FOTO PROFIL → uncomment Image
Ctrl+F cari: GAMBAR PROJECT → uncomment Image
Save → Refresh browser → DONE! ✅
Baca QUICK_START_GAMBAR.md untuk instruksi lengkap!