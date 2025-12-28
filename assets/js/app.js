// --- DATABASE: PSIKOTES ---
const testDatabase = {
    verbal: {
        title: "Tes Verbal",
        duration: 420, 
        description: "Uji kemampuan bahasa: Sinonim, Antonim, Analogi.",
        questions: [
            { q: "ANALOGI<br>Sikat : Gigi = … : …", options: ["Lampu : Minyak", "Batu : Bata", "Topi : Kepala", "Pesawat : Udara", "Piring : Makan"], correct: 2 },
            { q: "ANALOGI<br>Diabetes : Gula = Stroke : …", options: ["Anemia", "Gondok", "Kelenjar", "Kolesterol", "Lumpuh"], correct: 3 },
            { q: "SINONIM<br>Ekskavasi = ...", options: ["Penggalian", "Pertolongan", "Pengangkutan", "Penyelamatan", "Pemusnahan"], correct: 0 },
            { q: "ANTONIM<br>Nomadik >< ...", options: ["Berpindah", "Menetap", "Liar", "Sesuai Norma", "Mapan"], correct: 1 }
        ]
    },
    numerik: {
        title: "Tes Numerik",
        duration: 900, 
        description: "Uji hitungan: Deret angka dan matematika dasar.",
        questions: [
            { q: "(20 × 2) + 3 = ...", options: ["40", "43", "46", "34", "50"], correct: 1 },
            { q: "Deret: 2, 4, 8, 16, ...", options: ["30", "32", "24", "20", "18"], correct: 1 },
            { q: "Jika A=5 dan B=2, maka 2A - 3B = ...", options: ["2", "3", "4", "5", "6"], correct: 2 }
        ]
    },
    ketelitian: {
        title: "Tes Ketelitian",
        duration: 300,
        description: "Mencari perbedaan data kecil dengan cepat.",
        questions: [
            { q: "Bandingkan: <b>8890123</b> | <b>8890l23</b>", options: ["Sama", "Beda"], correct: 1 },
            { q: "Bandingkan: <b>SukaMaju</b> | <b>SukaMaju</b>", options: ["Sama", "Beda"], correct: 0 },
            { q: "Bandingkan: <b>Rp 50.000</b> | <b>Rp 50,000</b>", options: ["Sama", "Beda"], correct: 1 }
        ]
    }
};

// --- DATABASE: TEMPLATE CV ---
const cvDatabase = [
    {
        title: "CV ATS Friendly",
        category: "Umum",
        desc: "Format teks sederhana, Mudah dibaca mesin ATS.",
        img: "assets/img/cvtwo.jpg",
        link: "https://docs.google.com/document/d/1iPN08HPSVqmEeAtoPLHn0vAgaTbWzbMC/view"
    },
    {
        title: "CV ATS Friendly",
        category: "Umum",
        desc: "Format teks sederhana, Mudah dibaca mesin ATS.",
        img: "assets/img/cvone.jpg",
        link: "https://docs.google.com/document/d/1wTJ9hEq39piMmjzgW8T-rv8-HxC6t3U6/view"
    },
    {
        title: "CV Kreatif Modern",
        category: "Desain / Marketing",
        desc: "CV Kreatif fresh graduate dengan aksen warna dan tempat foto profil besar.",
        img: "assets/img/CVKreatif1.jpg",
        link: "https://docs.google.com/document/d/1NqNG4CmV7zIswTAZkdov6GUxot1SkPbT/view"
    },
    {
        title: "CV Fresh Graduate",
        category: "Umum",
        desc: "Fokus pada pengalaman organisasi dan skill untuk yang belum punya pengalaman kerja.",
        img: "assets/img/cv/cv-3.jpg",
        link: "https://drive.google.com"
    },
    {
        title: "CV Bahasa Inggris",
        category: "Profesional",
        desc: "Format profesional standar internasional untuk melamar ke MNC.",
        img: "assets/img/cv/cv-4.jpg",
        link: "https://drive.google.com" 
    }
];

// --- DATABASE: TIPS WAWANCARA ---
const interviewDatabase = {
    "kasir": {
        label: "Kasir / Pramuniaga",
        qa: [
            {
                q: "Jika ada selisih uang di laci kasir saat tutup toko, apa yang Anda lakukan?",
                a: "Saya akan segera melapor kepada supervisor/kepala toko, melakukan perhitungan ulang transaksi hari itu, dan siap bertanggung jawab mengganti selisih tersebut jika itu adalah kelalaian saya. Kejujuran adalah prioritas utama.",
                tip: "Tunjukkan integritas dan kesiapan bertanggung jawab."
            },
            {
                q: "Bagaimana menghadapi pelanggan yang marah karena antrean panjang?",
                a: "Saya akan tetap tenang, meminta maaf atas ketidaknyamanan, dan berusaha mempercepat proses transaksi tanpa mengurangi ketelitian. Saya juga akan menyapa pelanggan berikutnya agar mereka merasa diperhatikan.",
                tip: "Fokus pada 'Tetap Tenang' dan 'Solusi Cepat'."
            }
        ]
    },
    "satpam": {
        label: "Satpam / Security",
        qa: [
            {
                q: "Apa yang Anda lakukan jika melihat orang mencurigakan di area kerja?",
                a: "Saya akan mengawasi gerak-gerik orang tersebut tanpa menyolok. Jika ia memasuki area terlarang atau melakukan tindakan berbahaya, saya akan menegur dengan sopan namun tegas sesuai SOP, dan meminta identitas jika diperlukan.",
                tip: "Tekankan kewaspadaan dan kepatuhan pada SOP."
            },
            {
                q: "Apakah Anda bersedia bekerja shift malam dan di hari libur?",
                a: "Ya, saya sangat bersedia. Saya memahami bahwa tugas pengamanan bersifat 24 jam dan saya siap mengikuti jadwal roster yang ditetapkan perusahaan.",
                tip: "Jawaban wajib: Ya. Tunjukkan komitmen fisik & waktu."
            }
        ]
    },
    "barista": {
        label: "Barista / F&B",
        qa: [
            {
                q: "Apa yang Anda lakukan jika salah membuat pesanan pelanggan?",
                a: "Saya akan segera meminta maaf, membuang minuman yang salah, dan membuatkan yang baru secepat mungkin. Kepuasan pelanggan lebih penting daripada biaya satu gelas minuman.",
                tip: "Prioritaskan Customer Satisfaction."
            },
            {
                q: "Bagaimana Anda menjaga kebersihan area bar saat ramai?",
                a: "Saya menerapkan prinsip 'clean as you go'. Setiap selesai satu langkah pembuatan kopi, saya langsung membersihkan alat atau meja agar tidak menumpuk kotoran.",
                tip: "Tekankan kebersihan dan kecepatan kerja."
            }
        ]
    },
    "admin": {
        label: "Admin / Staff",
        qa: [
            {
                q: "Aplikasi komputer apa saja yang Anda kuasai?",
                a: "Saya mahir menggunakan Microsoft Excel untuk pengolahan data (VLOOKUP, Pivot Table), Word untuk surat menyurat, dan terbiasa menggunakan Google Workspace untuk kolaborasi tim.",
                tip: "Sebutkan software spesifik, jangan hanya 'Bisa komputer'."
            }
        ]
    }
};

// --- DATABASE: EMAIL TEMPLATES ---
const emailTemplates = {
    formal: `Kepada Yth.
Bapak/Ibu HRD PT XXXXX
Jakarta, Indonesia

Dengan hormat,

Berdasarkan informasi yang saya dapatkan dari [Sumber Info] bahwa perusahaan Bapak/Ibu sedang membutuhkan karyawan sebagai [Posisi], dengan ini saya bermaksud melamar pekerjaan pada posisi tersebut.

Saya [Nama Anda] merupakan lulusan dari [Sekolah/Kampus] jurusan [Jurusan]. Saya memiliki pengalaman kerja sebagai [Posisi Lama] selama [Durasi] tahun yang membuat saya terbiasa dengan [Skill Utama].

Bersama email ini juga saya lampirkan Lamaran Kerja, Curriculum Vitae (CV), serta dokumen pendukung yang dibutuhkan sebagai pertimbangan Bapak/Ibu.

Saya sangat antusias untuk bergabung dengan Perusahaan Bapak/Ibu dan berkontribusi untuk pertumbuhan perusahaan. Saya berharap dapat mengikuti wawancara lebih lanjut.

Terima kasih atas pertimbangan Bapak/Ibu.

Hormat saya,

[Nama Lengkap]
[No. HP/WA]
[Alamat Email]`,

    freshgrad: `Kepada Yth.
Bapak/Ibu HRD PT XXXXX
Di Tempat

Subjek: Lamaran Pekerjaan - [Posisi] - [Nama Anda]

Dengan hormat,

Perkenalkan saya [Nama Anda], lulusan baru (Fresh Graduate) dari [Nama Universitas/Sekolah] jurusan [Jurusan] dengan IPK [Nilai IPK]. Melalui surat ini, saya bermaksud untuk melamar posisi [Posisi yang dilamar] di perusahaan yang Bapak/Ibu pimpin.

Meskipun baru lulus, saya aktif dalam organisasi [Nama Organisasi] selama kuliah yang melatih kemampuan kepemimpinan dan komunikasi saya. Saya juga memiliki kemampuan teknis di bidang [Sebutkan Skill, misal: Desain Grafis / Akuntansi] yang saya yakini dapat memberikan kontribusi positif bagi tim.

Saya adalah pribadi yang cepat belajar, disiplin, dan sangat termotivasi untuk memulai karier profesional saya di [Nama Perusahaan].

Terlampir saya sertakan CV dan portofolio sebagai bahan pertimbangan. Besar harapan saya untuk dapat diberikan kesempatan wawancara.

Terima kasih atas waktu dan perhatian Bapak/Ibu.

Hormat saya,

[Nama Lengkap]
[No. HP/WA]
[Link LinkedIn/Portofolio]`,

    intern: `Kepada Yth.
Manager HRD PT XXXXX
Di Tempat

Subjek: Lamaran Magang - [Posisi Magang] - [Nama Anda]

Dengan hormat,

Saya yang bertanda tangan di bawah ini:
Nama: [Nama Anda]
Kampus: [Nama Universitas]
Jurusan: [Jurusan]
Semester: [Semester Saat Ini]

Bermaksud mengajukan permohonan kerja praktik (Magang / Internship) di perusahaan Bapak/Ibu untuk posisi [Posisi Magang] selama periode [Bulan Mulai] s.d [Bulan Selesai].

Saya memiliki minat besar di bidang industri ini dan ingin menerapkan ilmu [Sebutkan Mata Kuliah/Skill Relevan] yang telah saya pelajari di perkuliahan ke dalam dunia kerja nyata. Saya siap bekerja keras, belajar hal baru, dan mengikuti aturan perusahaan dengan baik.

Sebagai bahan pertimbangan, saya lampirkan CV dan Transkrip Nilai terakhir. Saya sangat berharap dapat berdiskusi lebih lanjut mengenai kesempatan magang ini.

Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.

Hormat saya,

[Nama Lengkap]
[No. HP/WA]
[Alamat Email]`
};

// --- APP LOGIC ---
const app = {
    state: {
        view: 'home',
        answers: [],
        timer: null,
        timeLeft: 0,
        activeTest: null
    },
    
    // VIEWS
    showHome: () => {
        clearInterval(app.state.timer);
        const html = `
            <section class="hero-section fade-in">
                <h1>Satu Platform.<br>Ribuan Peluang Karir.</h1>
                <p>Latihan psikotes, download template CV profesional, dan pelajari rahasia wawancara kerja. Semua gratis.</p>
                
                <div class="feature-grid">
                    <div class="feature-card" onclick="app.showTestMenu()">
                        <div class="feature-icon">📝</div>
                        <div class="feature-title">Simulasi Psikotes</div>
                        <div class="feature-desc">Latih logika, verbal, dan numerik dengan sistem waktu nyata seperti tes asli.</div>
                        <span class="btn btn-sm">Mulai Tes &rarr;</span>
                    </div>

                    <div class="feature-card" onclick="app.showCVs()">
                        <div class="feature-icon">📄</div>
                        <div class="feature-title">Template CV</div>
                        <div class="feature-desc">Kumpulan template CV siap pakai. Cukup download dan edit sesuai kebutuhan.</div>
                        <span class="btn btn-sm">Lihat Template &rarr;</span>
                    </div>

                    <div class="feature-card" onclick="app.showEmailGenerator()">
                        <div class="feature-icon">📧</div>
                        <div class="feature-title">Generator Email</div>
                        <div class="feature-desc">Buat email lamaran kerja otomatis. Pilih template, edit, dan langsung kirim.</div>
                        <span class="btn btn-sm">Buat Email &rarr;</span>
                    </div>

                    <div class="feature-card" onclick="app.showInterviews('kasir')">
                        <div class="feature-icon">💬</div>
                        <div class="feature-title">Tips Wawancara</div>
                        <div class="feature-desc">Contoh pertanyaan dan jawaban interview untuk Kasir, Satpam, Barista, dll.</div>
                        <span class="btn btn-sm">Pelajari &rarr;</span>
                    </div>
                </div>
            </section>
        `;
        document.getElementById('app-content').innerHTML = html;
    },

    // --- FEATURE 1: PSIKOTES ---
    showTestMenu: () => {
        let cards = '';
        for(let key in testDatabase) {
            const t = testDatabase[key];
            cards += `
                <div class="qa-card fade-in" style="cursor:pointer; transition:0.3s;" onmouseover="this.style.borderColor='#6366f1'" onmouseout="this.style.borderColor='rgba(255,255,255,0.05)'">
                    <h3 style="margin-bottom:10px;">${t.title}</h3>
                    <p style="color:var(--text-secondary); margin-bottom:15px;">${t.description}</p>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span class="tag">⏱️ ${Math.floor(t.duration/60)} Menit</span>
                        <button class="btn btn-sm" onclick="app.startTest('${key}')">Mulai</button>
                    </div>
                </div>
            `;
        }
        document.getElementById('app-content').innerHTML = `
            <div class="fade-in">
                <button class="btn btn-outline btn-sm" style="margin-bottom:20px;" onclick="app.showHome()">&larr; Kembali</button>
                <h2 style="margin-bottom:20px;">Pilih Kategori Tes</h2>
                <div style="display:grid; gap:20px;">${cards}</div>
            </div>
        `;
    },

    startTest: (key) => {
        app.state.activeTest = key;
        const test = testDatabase[key];
        app.state.answers = new Array(test.questions.length).fill(null);
        app.state.timeLeft = test.duration;
        app.renderQuestion(0);
        
        app.state.timer = setInterval(() => {
            app.state.timeLeft--;
            const min = Math.floor(app.state.timeLeft/60);
            const sec = app.state.timeLeft%60;
            const timerEl = document.getElementById('timer');
            if(timerEl) timerEl.innerText = `${min}:${sec < 10 ? '0'+sec : sec}`;
            
            if(app.state.timeLeft <= 0) app.finishTest();
        }, 1000);
    },

    renderQuestion: (idx) => {
        const test = testDatabase[app.state.activeTest];
        const q = test.questions[idx];
        
        let opts = '';
        q.options.forEach((opt, i) => {
            const active = app.state.answers[idx] === i ? 'selected' : '';
            opts += `<div class="option-btn ${active}" onclick="app.saveAnswer(${idx}, ${i})">${String.fromCharCode(65+i)}. ${opt}</div>`;
        });

        document.getElementById('app-content').innerHTML = `
            <div class="fade-in" style="max-width:800px; margin:0 auto;">
                <div class="quiz-header">
                    <div>
                        <h3>${test.title}</h3>
                        <span style="color:var(--text-secondary)">Soal ${idx+1} / ${test.questions.length}</span>
                    </div>
                    <div id="timer" style="font-family:monospace; font-size:1.5rem; font-weight:bold; color:var(--accent-primary)">--:--</div>
                </div>
                <div style="margin-bottom:30px; font-size:1.2rem; line-height:1.6;">${q.q}</div>
                <div>${opts}</div>
                <div style="margin-top:30px; display:flex; justify-content:space-between;">
                    <button class="btn btn-outline" ${idx===0?'disabled':''} onclick="app.renderQuestion(${idx-1})">Sebelumnya</button>
                    ${idx === test.questions.length-1 
                        ? `<button class="btn" style="background:var(--success)" onclick="app.finishTest()">Selesai</button>` 
                        : `<button class="btn" onclick="app.renderQuestion(${idx+1})">Selanjutnya</button>`}
                </div>
            </div>
        `;
    },

    saveAnswer: (qIdx, aIdx) => {
        app.state.answers[qIdx] = aIdx;
        app.renderQuestion(qIdx);
    },

    finishTest: () => {
        clearInterval(app.state.timer);
        const test = testDatabase[app.state.activeTest];
        let score = 0;
        app.state.answers.forEach((ans, i) => {
            if(ans === test.questions[i].correct) score++;
        });
        
        const finalScore = Math.round((score / test.questions.length) * 100);
        
        document.getElementById('app-content').innerHTML = `
            <div class="fade-in" style="text-align:center; max-width:500px; margin:40px auto;">
                <div class="qa-card">
                    <h1>Skor Anda: ${finalScore}</h1>
                    <p style="margin:20px 0; color:var(--text-secondary);">Anda menjawab ${score} benar dari ${test.questions.length} soal.</p>
                    <button class="btn" onclick="app.showHome()">Kembali ke Menu Utama</button>
                </div>
            </div>
        `;
    },

    // --- FEATURE 2: CV TEMPLATES ---
    showCVs: () => {
        let html = `
            <div class="fade-in">
                <button class="btn btn-outline btn-sm" style="margin-bottom:20px;" onclick="app.showHome()">&larr; Kembali</button>
                <h2 style="margin-bottom:10px;">Gudang Template CV</h2>
                <p style="color:var(--text-secondary); margin-bottom:30px;">Download template yang sesuai dengan kepribadian dan industri tujuan Anda.</p>
                <div class="cv-grid">
        `;

        cvDatabase.forEach(cv => {
            html += `
                <div class="cv-card">
                    <div class="cv-preview">
                        <img src="${cv.img}" alt="${cv.title}" onerror="this.onerror=null; this.src='https://placehold.co/600x400/1e293b/94a3b8?text=CV+Preview';">
                    </div>
                    <div class="cv-content">
                        <span class="tag">${cv.category}</span>
                        <h3 style="font-size:1.1rem;">${cv.title}</h3>
                        <p style="font-size:0.9rem; color:var(--text-secondary);">${cv.desc}</p>
                        <a href="${cv.link}" target="_blank" class="btn btn-sm" style="width:100%; justify-content:center; margin-top:auto;">
                            Download (G-Drive)
                        </a>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
        document.getElementById('app-content').innerHTML = html;
    },

    // --- FEATURE 3: EMAIL GENERATOR (UPDATED) ---
    showEmailGenerator: () => {
        document.getElementById('app-content').innerHTML = `
            <div class="fade-in" style="max-width:800px; margin:0 auto;">
                <button class="btn btn-outline btn-sm" style="margin-bottom:20px;" onclick="app.showHome()">&larr; Kembali</button>
                <h2 style="margin-bottom:10px;">Generator Email Lamaran</h2>
                <p style="color:var(--text-secondary); margin-bottom:25px;">Isi formulir di bawah ini, lalu klik tombol untuk membuka aplikasi email Anda secara otomatis.</p>
                
                <div class="qa-card">
                    <div class="form-group">
                        <label class="form-label">Jenis Lamaran (Pilih Template)</label>
                        <select id="template-selector" class="form-control" onchange="app.changeEmailTemplate(this.value)">
                            <option value="formal">Lamaran Umum (Formal)</option>
                            <option value="freshgrad">Fresh Graduate (Lulusan Baru)</option>
                            <option value="intern">Magang / Internship</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Email Tujuan (HRD/Perusahaan)</label>
                        <input type="email" id="email-recipient" class="form-control" placeholder="contoh: hrd@perusahaan.com">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Subjek Email</label>
                        <input type="text" id="email-subject" class="form-control" placeholder="Lamaran Pekerjaan - Posisi - Nama Anda">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Isi Email (Body)</label>
                        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:8px;">Silakan edit bagian dalam kurung [ ] sesuai data Anda.</p>
                        <textarea id="email-body" class="form-control">${emailTemplates.formal}</textarea>
                    </div>

                    <div style="display:flex; justify-content:flex-end;">
                        <button class="btn" onclick="app.openEmailApp()">
                            Lanjut ke Email &rarr;
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    changeEmailTemplate: (type) => {
        const textArea = document.getElementById('email-body');
        textArea.value = emailTemplates[type];
        
        // Optional: Update placeholder subject based on type
        const subjectInput = document.getElementById('email-subject');
        if(type === 'intern') {
            subjectInput.value = "Lamaran Magang - [Posisi] - [Nama]";
        } else {
            subjectInput.value = "Lamaran Pekerjaan - [Posisi] - [Nama]";
        }
    },

    openEmailApp: () => {
        const recipient = document.getElementById('email-recipient').value;
        const subject = document.getElementById('email-subject').value;
        const body = document.getElementById('email-body').value;

        if(!recipient) {
            alert('Mohon isi Email Tujuan terlebih dahulu.');
            return;
        }

        // Membuat link mailto dengan encoding agar karakter khusus (spasi, enter) terbaca dengan benar
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Membuka link
        window.location.href = mailtoLink;
    },

    // --- FEATURE 4: INTERVIEW TIPS ---
    showInterviews: (activeRole) => {
        const roles = Object.keys(interviewDatabase);
        const data = interviewDatabase[activeRole];

        // Build Tabs
        let tabsHtml = '';
        roles.forEach(r => {
            const isActive = r === activeRole ? 'active' : '';
            tabsHtml += `<button class="job-tab ${isActive}" onclick="app.showInterviews('${r}')">${interviewDatabase[r].label}</button>`;
        });

        // Build QA List
        let qaHtml = '';
        data.qa.forEach(item => {
            qaHtml += `
                <div class="qa-card fade-in">
                    <div class="qa-question">
                        <span>🗣️</span>
                        <span>${item.q}</span>
                    </div>
                    <div class="qa-answer">${item.a}</div>
                    <div class="qa-tip">
                        <span>💡 Tips:</span>
                        <span>${item.tip}</span>
                    </div>
                </div>
            `;
        });

        document.getElementById('app-content').innerHTML = `
            <div class="fade-in" style="max-width:800px; margin:0 auto;">
                <button class="btn btn-outline btn-sm" style="margin-bottom:20px;" onclick="app.showHome()">&larr; Kembali</button>
                <h2 style="margin-bottom:10px;">Simulasi Pertanyaan Wawancara</h2>
                <p style="color:var(--text-secondary); margin-bottom:25px;">Pelajari cara menjawab pertanyaan sulit sesuai bidang pekerjaan.</p>
                
                <div class="job-tabs">
                    ${tabsHtml}
                </div>

                <div>
                    ${qaHtml}
                </div>
            </div>
        `;
    }
};

// Init

window.addEventListener('DOMContentLoaded', app.showHome);


