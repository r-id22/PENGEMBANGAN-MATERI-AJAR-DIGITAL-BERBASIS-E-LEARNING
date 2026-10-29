/**
 * Logika E-Learning PJOK SDN 2 Ketapang
 * Tahun Ajaran 2026/2027 Semester 1
 */

// Bank Soal PJOK (Kelas 1-3: 20 Soal, Kelas 4-6: 30 Soal)
const questionBank = {
    // KELAS 1-3 (20 Soal Pilihan Ganda A, B, C)
    low: [
        { q: "Berjalan, berlari, dan melompat termasuk jenis gerakan...", options: ["A. Lokomotor", "B. Non-lokomotor", "C. Manipulatif"], answer: 0 },
        { q: "Anggota tubuh yang digunakan untuk menendang bola pada permainan sepak bola adalah...", options: ["A. Tangan", "B. Kaki", "C. Kepala"], answer: 1 },
        { q: "Sebelum melakukan olahraga, sebaiknya kita melakukan...", options: ["A. Pemanasan", "B. Pendinginan", "C. Tidur"], answer: 0 },
        { q: "Mencuci tangan sebelum makan bertujuan untuk menjaga...", options: ["A. Kerapian", "B. Kebersihan dan Kesehatan", "C. Kekuatan"], answer: 1 },
        { q: "Gerakan mengayun lengan di tempat termasuk gerakan...", options: ["A. Lokomotor", "B. Non-lokomotor", "C. Manipulatif"], answer: 1 },
        { q: "Posisi badan saat berjalan tegak yang benar adalah...", options: ["A. Bungkuk", "B. Tegak", "C. Miring"], answer: 1 },
        { q: "Olahraga lari membuat otot kaki kita menjadi...", options: ["A. Lemah", "B. Sakit", "C. Kuat"], answer: 2 },
        { q: "Gigi harus disikat minimal sebanyak ... kali sehari.", options: ["A. 1", "B. 2", "C. 5"], answer: 1 },
        { q: "Saat melempar bola kasti, kita menggunakan...", options: ["A. Kaki", "B. Tangan", "C. Punggung"], answer: 1 },
        { q: "Sikap berdiri menirukan burung elang melatih...", options: ["A. Keseimbangan", "B. Kecepatan", "C. Kelenturan"], answer: 0 },
        { q: "Olahraga sebaiknya dilakukan secara...", options: ["A. Kadang-kadang", "B. Jarang", "C. Teratur"], answer: 2 },
        { q: "Pakaian yang cocok digunakan saat berolahraga adalah...", options: ["A. Seragam pramuka", "B. Baju olahraga", "C. Baju tidur"], answer: 1 },
        { q: "Melompati tali karet melatih kekuatan otot...", options: ["A. Kaki", "B. Tangan", "C. Leher"], answer: 0 },
        { q: "Tidur yang cukup untuk anak-anak adalah sekitar ... jam sehari.", options: ["A. 2-3", "B. 8-9", "C. 15"], answer: 1 },
        { q: "Mengompres bagian tubuh yang memar akibat cedera ringan menggunakan...", options: ["A. Air panas", "B. Es batu", "C. Minyak goreng"], answer: 1 },
        { q: "Mendorong tembok termasuk latihan kekuatan otot...", options: ["A. Kaki", "B. Tangan dan dada", "C. Perut"], answer: 1 },
        { q: "Gerakan meloncat seperti katak dilakukan dengan tumpuan...", options: ["A. Satu kaki", "B. Dua kaki", "C. Dua tangan"], answer: 1 },
        { q: "Makanan gizi seimbang membuat tubuh menjadi...", options: ["A. Lemah", "B. Sehat dan kuat", "C. Cepat lelah"], answer: 1 },
        { q: "Saat menangkap bola, pandangan mata harus tertuju ke...", options: ["A. Bawah", "B. Arah datangnya bola", "C. Atas"], answer: 1 },
        { q: "Manfaat melakukan pendinginan setelah berolahraga adalah...", options: ["A. Mencegah kram otot", "B. Membuat capek", "C. Berkeringat lagi"], answer: 0 }
    ],

    // KELAS 4-6 (30 Soal Pilihan Ganda A, B, C, D)
    high: [
        { q: "Jumlah pemain dalam satu tim sepak bola di lapangan adalah...", options: ["A. 6 orang", "B. 11 orang", "C. 5 orang", "D. 12 orang"], answer: 1 },
        { q: "Teknik dasar permainan bola voli untuk memulai permainan dinamakan...", options: ["A. Smash", "B. Passing", "C. Service", "D. Block"], answer: 2 },
        { q: "Induk organisasi bola basket di Indonesia adalah...", options: ["A. PBVSI", "B. PSSI", "C. PERBASI", "D. PASI"], answer: 2 },
        { q: "Gerakan pukulan sajian pertama pada permainan bulu tangkis disebut...", options: ["A. Drive", "B. Service", "C. Smash", "D. Lop"], answer: 1 },
        { q: "Lari jarak pendek (sprit) menggunakan start...", options: ["A. Jongkok", "B. Berdiri", "C. Melayang", "D. Duduk"], answer: 0 },
        { q: "Induk organisasi pencak silat seluruh Indonesia adalah...", options: ["A. IPSI", "B. PERSANI", "C. PRSI", "D. PSSI"], answer: 0 },
        { q: "Posisi awal badan saat melakukan gerak kayang adalah...", options: ["A. Tengkurap", "B. Telentang", "C. Miring", "D. Jongkok"], answer: 1 },
        { q: "Gaya renang yang paling mudah dan sering diajarkan pertama kali adalah gaya...", options: ["A. Kupu-kupu", "B. Dada (Katak)", "C. Punggung", "D. Bebas"], answer: 1 },
        { q: "Latihan push-up berfungsi untuk melatih kekuatan otot...", options: ["A. Perut", "B. Lengan dan dada", "C. Kaki", "D. Punggung"], answer: 1 },
        { q: "Latihan sit-up berguna untuk melatih kekuatan otot...", options: ["A. Perut", "B. Paha", "C. Tangan", "D. Leher"], answer: 0 },
        { q: "Panjang lintasan atau jarak lari maraton termasuk dalam kategori lari...", options: ["A. Jarak Pendek", "B. Jarak Menengah", "C. Jarak Jauh", "D. Estafet"], answer: 2 },
        { q: "Gaya lompat jauh di mana posisi badan melayang seperti menggantung di udara disebut gaya...", options: ["A. Jongkok", "B. menggantung (hang style)", "C. Walking in the air", "D. Flop"], answer: 1 },
        { q: "Tujuan utama gerakan smash dalam permainan bola voli adalah...", options: ["A. Mengoper teman", "B. Mematikan bola di daerah lawan", "C. Menahan serangan", "D. Mengulur waktu"], answer: 1 },
        { q: "Penyakit menular seksual dapat dicegah dengan cara...", options: ["A. Berganti pasangan", "B. Menjaga pola hidup sehat dan keimanan", "C. Tidak mandi", "D. Kurang tidur"], answer: 1 },
        { q: "Narkoba adalah singkatan dari...", options: ["A. Narkotika, Psikotropika, dan Obat Bertenaga", "B. Narkotika, Psikotropika, dan Bahan Berbahaya", "C. Narkotika, Pendidikan, dan Bahan Alam", "D. Narkotika, Pemuda, dan Obatan Baku"], answer: 1 },
        { q: "Istirahat yang paling baik bagi kesehatan tubuh adalah...", options: ["A. Nonton TV", "B. Main Game", "C. Tidur", "D. Jalan-jalan"], answer: 2 },
        { q: "Pencegahan kram otot sebelum melakukan renang dilakukan dengan...", options: ["A. Makan kenyang", "B. Pemanasan yang cukup", "C. Minum es", "D. Langsung melompat"], answer: 1 },
        { q: "Gerak dasar senam lantai roll depan dilakukan di atas...", options: ["A. Lantai semen", "B. Matras", "C. Rumput", "D. Kasur busa tipis"], answer: 1 },
        { q: "Organisasi atletik di Indonesia dinamakan...", options: ["A. PASI", "B. PSSI", "C. PBSI", "D. PERBASI"], answer: 0 },
        { q: "Dalam ronde permainan kasti, alat yang digunakan untuk memukul bola adalah...", options: ["A. Raket", "B. Kayu pemukul", "C. Bet", "D. Tangan"], answer: 1 },
        { q: "Kemampuan tubuh untuk melakukan aktivitas sehari-hari tanpa kelelahan berlebih dinamakan...", options: ["A. Ketahanan", "B. Kebugaran Jasmani", "C. Kekuatan", "D. Kelenturan"], answer: 1 },
        { q: "Untuk melatih kelenturan persendian tubuh, kita dapat melakukan latihan...", options: ["A. Peregangan (stretching)", "B. Lari cepat", "C. Angkat beban", "D. Push up"], answer: 0 },
        { q: "Jumlah pemain kasti dalam satu tim adalah...", options: ["A. 11 orang", "B. 12 orang", "C. 6 orang", "D. 5 orang"], answer: 1 },
        { q: "Tiga unsur utama gerakan dalam pencak silat adalah...", options: ["A. Kuda-kuda, pukulan, dan tendangan", "B. Lari, lompat, dan lempar", "C. Smash, block, dan pass", "D. Renang, jalan, dan senam"], answer: 0 },
        { q: "Dampak buruk minum minuman beralkohol adalah...", options: ["A. Menyehatkan jantung", "B. Merusak organ hati dan syaraf", "C. Menambah stamina", "D. Otot jadi kuat"], answer: 1 },
        { q: "Zat gizi yang berfungsi sebagai sumber energi utama tubuh adalah...", options: ["A. Protein", "B. Karbohidrat", "C. Vitamin", "D. Mineral"], answer: 1 },
        { q: "Pencegahan penyakit demam berdarah (DBD) dilakukan dengan kegiatan 3M, yaitu...", options: ["A. Menguras, Menutup, Mengubur", "B. Membakar, Membuang, Menyiram", "C. Memasak, Memakan, Meminum", "D. Menapu, Mengepel, Menyiram"], answer: 0 },
        { q: "Renang gaya bebas sering disebut juga dengan istilah...", options: ["A. Breaststroke", "B. Crawl", "C. Butterfly", "D. Backstroke"], answer: 1 },
        { q: "Gerakan melompat dengan melempar bola ke dalam keranjang basket sambil melayang dinamakan...", options: ["A. Lay-up shoot", "B. Dribbling", "C. Passing", "D. Pivot"], answer: 0 },
        { q: "Penghentian bola sepak menggunakan dada efektif digunakan jika bola datang dari...", options: ["A. Menyusur tanah", "B. Melambung tinggi", "C. Samping bawah", "D. Pantulan dekat"], answer: 1 }
    ]
};

// State Aplikasi
let currentStudent = { name: "", classNum: 1 };
let currentQuestions = [];
let studentAnswers = [];
let currentQuestionIndex = 0;

// Mulai Kuis
function startQuiz() {
    const nameInput = document.getElementById("student-name").value.trim();
    const classInput = document.getElementById("student-class").value;

    if (!nameInput || !classInput) return;

    currentStudent.name = nameInput;
    currentStudent.classNum = parseInt(classInput);

    // Pilih set soal sesuai kelas (1-3: low, 4-6: high)
    currentQuestions = (currentStudent.classNum <= 3) ? questionBank.low : questionBank.high;
    studentAnswers = new Array(currentQuestions.length).fill(null);
    currentQuestionIndex = 0;

    // Update Tampilan UI Header Kuis
    document.getElementById("active-student-name").innerText = currentStudent.name;
    document.getElementById("active-student-class").innerText = `Kelas ${currentStudent.classNum}`;

    // Switch Screen
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    renderQuestion();
}

// Tampilkan Soal
function renderQuestion() {
    const qData = currentQuestions[currentQuestionIndex];
    const totalQ = currentQuestions.length;

    // Update Progress Bar
    document.getElementById("quiz-progress-text").innerText = `Soal ${currentQuestionIndex + 1} dari ${totalQ}`;
    const pct = Math.round(((currentQuestionIndex + 1) / totalQ) * 100);
    document.getElementById("quiz-percentage").innerText = `${pct}% Selesai`;
    document.getElementById("progress-bar").style.width = `${pct}%`;

    // Render Teks Soal
    document.getElementById("question-text").innerText = `${currentQuestionIndex + 1}. ${qData.q}`;

    // Render Pilihan Jawaban
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    qData.options.forEach((opt, idx) => {
        const isSelected = studentAnswers[currentQuestionIndex] === idx;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.onclick = () => selectOption(idx);
        btn.className = `option-btn w-full p-4 rounded-2xl border-2 text-left font-semibold text-sm flex items-center gap-3 transition-all ${
            isSelected 
            ? 'selected border-sky-600 bg-sky-50 text-sky-900 shadow-sm' 
            : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
        }`;

        btn.innerHTML = `
            <span class="option-badge w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'
            }">
                ${String.fromCharCode(65 + idx)}
            </span>
            <span class="flex-1">${opt}</span>
        `;
        optionsContainer.appendChild(btn);
    });

    // Kontrol Tombol Navigasi
    document.getElementById("btn-prev").disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === totalQ - 1) {
        document.getElementById("btn-next").classList.add("hidden");
        document.getElementById("btn-submit").classList.remove("hidden");
    } else {
        document.getElementById("btn-next").classList.remove("hidden");
        document.getElementById("btn-submit").classList.add("hidden");
    }
}

// Simpan Jawaban yang Dipilih
function selectOption(index) {
    studentAnswers[currentQuestionIndex] = index;
    renderQuestion();
}

// Navigasi Soal (Sebelumnya / Selanjutnya)
function navigateQuestion(direction) {
    currentQuestionIndex += direction;
    renderQuestion();
}

// Konfirmasi Sebelum Mengumpulkan
function confirmSubmitQuiz() {
    const unanswered = studentAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`Masih ada ${unanswered} soal yang belum dijawab. Yakin ingin mengumpulkan?`)) {
            return;
        }
    }
    finishQuiz();
}

// Hitung Hasil Kuis
function finishQuiz() {
    let correct = 0;
    currentQuestions.forEach((q, idx) => {
        if (studentAnswers[idx] === q.answer) {
            correct++;
        }
    });

    const total = currentQuestions.length;
    const score = Math.round((correct / total) * 100);
    const wrong = total - correct;

    // Set Skor & Feedback
    document.getElementById("final-score").innerText = score;
    document.getElementById("correct-count").innerText = `${correct} / ${total}`;
    document.getElementById("wrong-count").innerText = `${wrong}`;

    let feedback = "Terus Belajar Ya!";
    if (score >= 90) feedback = "Luar Biasa / Sempurna! 🌟";
    else if (score >= 75) feedback = "Bagus Sekali! 👍";
    else if (score >= 60) feedback = "Cukup Bagus, Tingkatkan! 💪";

    document.getElementById("score-feedback").innerText = feedback;

    // Render Evaluasi Jawaban
    const reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";

    currentQuestions.forEach((q, idx) => {
        const studentAns = studentAnswers[idx];
        const isCorrect = studentAns === q.answer;

        const item = document.createElement("div");
        item.className = `p-3.5 rounded-2xl border text-xs leading-relaxed ${
            isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'
        }`;

        item.innerHTML = `
            <div class="font-bold text-slate-800 mb-1">
                ${idx + 1}. ${q.q}
            </div>
            <div class="flex items-center gap-1.5 ${isCorrect ? 'text-emerald-700' : 'text-rose-600'} font-semibold">
                <i class="fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
                <span>Jawaban Kamu: ${studentAns !== null ? q.options[studentAns] : 'Tidak Dijawab'}</span>
            </div>
            ${!isCorrect ? `<div class="text-slate-600 mt-0.5">Kunci Jawaban: <strong>${q.options[q.answer]}</strong></div>` : ''}
        `;
        reviewContainer.appendChild(item);
    });

    // Switch Screen ke Hasil
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
}

// Kirim Hasil Nilai ke WhatsApp Guru
function sendToWhatsApp() {
    let correct = 0;
    currentQuestions.forEach((q, idx) => {
        if (studentAnswers[idx] === q.answer) correct++;
    });
    const total = currentQuestions.length;
    const score = Math.round((correct / total) * 100);

    const message = `*HASIL KUIS E-LEARNING PJOK BDR*%0A` +
        `*SDN 2 KETAPANG (2026/2027)*%0A%0A` +
        `👤 *Nama:* ${currentStudent.name}%0A` +
        `🏫 *Kelas:* Kelas ${currentStudent.classNum}%0A` +
        `📊 *Nilai:* ${score} / 100%0A` +
        `✅ *Benar:* ${correct} dari ${total} soal%0A%0A` +
        `_Dikirim otomatis dari aplikasi E-Learning PJOK SDN 2 Ketapang._`;

    // Buka WhatsApp Web / App
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
}

// Ulangi Kuis
function restartQuiz() {
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
    document.getElementById("student-name").value = "";
    document.getElementById("student-class").selectedIndex = 0;
}
