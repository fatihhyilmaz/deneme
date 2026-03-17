/* 
 * Soruları ve cevapları buradan çok kolayca değiştirebilirsin
 * answer listesine olabilecek farklı yazım şekillerini eklemen iyi olur,
 * böylece arkadaşın büyük/küçük harf veya boşluk yüzünden takılmaz.
 */
const questions = [
    {
        type: "image",
        title: "Soru 1: Şaheser ",
        desc: "Bu şaheserin ressamı kimdir",
        questionImage: "bir.png", // Klasördeki çizim.png resmi eklendi
        hints: [
            "İpucu 1: konuşmaya gerek yok görüyorsunuz"
        ],
        successImage: "ben.jpg",
        successText: "Başka kim çizebilirki bu şaheseri",
        answer: ["Fatih", "Fatih Yılmaz"]
    },

    {
        title: "Soru 2: kabus",
        desc: "Leyla'nın en kötü günü(kabus başlangıcı)",
        hints: [
            "İpucu 1: sıradan bir matematik dersiydi.....",
            "İpucu 2: Leyla oh be sonunda yurda dönceğini düşünürken...",
            "İpucu 3: 1 ömür uğraşacağı o gerizekalıyla tanıştı",
            "İpucu 4: hatırlamadıysan yazıklar olsun nc nc nc"

        ],
        successImage: "mat.jpg",
        successText: "nereden biliyorsun hayatının altının üstünden iyi olmadığını",
        answer: ["7 nisan", "7 nisan 2025", "7 Nisan"]
    },
    {
        title: "Soru 3: tatlı bir sohbet",
        desc: "Leylanın en sevdiği tatlı",
        hints: [
            "İpucu 1:Azerbaycana ait bir tatlı",
            "İpucu 2: ben diğerini tercih ederim ama buna da yok demem tabi",
            "İpucu 3: ass desem",
        ],
        successImage: "erkek.jpg",
        successText: "eğer REVANi sevmiyorsan benden başka tatlı isteyebilrisin EMİRin olur",
        answer: ["revani", "Revani"]
    },
    {
        title: "Soru 4: Rüya",
        desc: "Fatihin gelecekteki kızı nasıl olacak",
        hints: [
            "İpucu 1: dünyanın en kirli zihnin ilk ürünü",
            "İpucu 2: Sencer bunu trabzonlusunu arıyor"
        ],
        successImage: "gotik.jpg",
        successText: "O gün o zihnin ne kadar ileri gideceğini anlamalıydım ve kızımın gotik olması benim değil senin zihninin suçu",
        answer: ["Gotik", "gotik", "gotik kız", "Gotik kız"]
    },
    {
        type: "audio",
        title: "Soru 5: PARA PARA PARA",
        desc: "Fatihin değeri kaç dolardır",
        audioSrc: "ses.m4a", // Buraya kendi ses kaydının adını (örneğin "kayit.mp3" veya .m4a) yazacaksın
        hints: [
            "İpucu 1: sen beni kaç dolara satmıştın ",
            "İpucu 2: Yazıklar olsun ya yine aklıma geldi nc nc nc"
        ],
        successImage: "paraaa.jpg",
        successText: "neyse en azından en değerlisi biziz ne yapalım umarım kimse 1 milyon dolar vermez",
        answer: ["1000000", "1 milyon", "1 milyon dolar"]
    },
    {
        type: "multiple-choice",
        title: "Soru 6: Sevgi",
        desc: "Fatih ....",
        hints: [],
        options: [
            "Gerizekalıdır",
            "Aptaldır",
            "Öküzdür",
            "Şerefsizdir"
        ],
        hasOther: true,
        successImage: "dört.png",
        successText: "nc nc nc insan doğru seçenek yok der be hemende işaretlemiş",
        answer: []
    },
    {
        type: "single-choice-strict",
        title: "Soru 7:Kıyamet alameti",
        desc: "Aşağıdakilerden hangisi kıyamet alametidir",
        hints: [
            "İpucu 1:Daha ne gören ne duyan var",
            "İpucu 2: Rivayete göre olduğunda dünyada önce 7 yıllık bolluk sonra 7 yıllıık kıtlık olacak en sonunda ise sonsuz azap başlayacak "
        ],
        options: [
            "Güneşin batıdan doğması",
            "Yeryüzüne meleklerin inmesi",
            "Dünyanın yok olması",
            "Leylanın ilk mesajı atması(Fatihe)"
        ],
        successImage: "mesaj.jpg",
        successText: "yapay zeka bile 4 seferde çizebildi ben hala neyi bekliyorum",
        answer: "Leylanın ilk mesajı atması(Fatihe)" // Tek doğru cevap metni
    },

    {
        type: "single-choice-strict",
        title: "Soru 8:Mutluluk",
        desc: "Leylanın mutluluk grafiğinin zirvesi aşağıdakilerden hangisi",
        hints: [
            "İpucu 1:gülme sayın hangi zamanda çok artıyor",
            "İpucu 2:Günün en sevdiğin zamanı",
            "İpucu 3:Metroya giderken arı kapıya yürürken rektörlük önünde olur"
        ],
        options: [
            "Fatih ile dünyanın en eğlenceli aktivitesini yaparken ",
            "Fatihi döverken",
            "Dünyanın en iyi haberini aldığında",
            "Günün sonunda Fatih ile ayrılırken"
        ],
        successImage: "gotik.jpg",
        successText: "Fotoğraf çok komik olduğu için bir daha kullanmak istedim",
        answer: "Günün sonunda Fatih ile ayrılırken" // Tek doğru cevap metni
    },

    {
        title: "Soru 9: Girl",
        desc: "Fatihin en Favoritesi kim",
        hints: [
            "İpucu 1: bir hediyedeki eksik resim",
            "İpucu 2: bana ilk çiçek veren kişi"

        ],
        successImage: "favori.jpg",
        successText: "bu testi hazırlarken değerimi bir sorguladım ama yapacak bir şey yok sevgi bu atsan atılmaz satsan satılmaz",
        answer: ["Leyla", "Leyla Aliyeva", "Leila", "Leila Alieva"]
    }
];

const finalMessage = {
    title: "Görüşürüz:)",
    desc: "ne kadar rahatsız edemesem de konuşacak zamanın olmasa da yine de bir şekil ikimizin zaman geçireceği bir şey varmış, ben hazılarken eğlendim umarım sende eğlenmişsindir(biliyorum yine buna maruz kaldım diyorsun ama yapacak bir şey yok o gün hızlı yüreyecektin)"
};

let currentQuestionIndex = -1;
let currentHintIndex = 0;

const appContainer = document.getElementById('app-container');

function renderWelcome() {
    appContainer.innerHTML = `
        <h1 class="step-title welcome">Kim gülmek ister</h1>
        <p class="step-desc">Hiçbir ödül olmayan yarışmamız kim gülmek istere hoşgeldin, toplam 8 soru olacaktır eğer aklına bir şey gelmiyorsa ipucular sana yol gösterecektir ipucun bitttiğinde cevabı gösterle cevaba ulaşabilirsin. bitirdiğinde yine de ödül istersen keyfime göre karar vereceğim iyi eğlenceler</p>
        <button class="btn-primary start-btn" onclick="nextQuestion()">Hazırım, Başlayalım!</button>
    `;
}

function renderQuestion(index) {
    const q = questions[index];
    currentHintIndex = 0;

    let inputHtml = "";
    if (q.type === 'multiple-choice') {
        inputHtml = `
            <div class="multiple-choice-container" style="text-align: left; margin-bottom: 25px; padding: 0 10px;">
                ${q.options.map((opt, i) => `
                    <label class="mc-option" style="display: block; margin-bottom: 12px; background: rgba(0,0,0,0.3); padding: 12px 15px; border-radius: 12px; cursor: pointer; border: 2px solid rgba(255, 255, 255, 0.1); transition: all 0.3s ease;">
                        <input type="checkbox" name="mc-answer" class="regular-mc-cb" value="${i}" style="margin-right: 12px; width: 18px; height: 18px; cursor: pointer;"> 
                        <span style="font-size: 1.1rem; vertical-align: middle;">${opt}</span>
                    </label>
                `).join('')}
            </div>
            <p id="mc-error" style="color: #ff3366; display: none; margin-bottom: 15px; font-weight: bold;">Lütfen en az bir şık seçin!</p>
        `;
    } else if (q.type === 'single-choice-strict') {
        inputHtml = `
            <div class="single-choice-container" style="text-align: left; margin-bottom: 25px; padding: 0 10px;">
                ${q.options.map((opt, i) => `
                    <label class="mc-option" style="display: block; margin-bottom: 12px; background: rgba(0,0,0,0.3); padding: 12px 15px; border-radius: 12px; cursor: pointer; border: 2px solid rgba(255, 255, 255, 0.1); transition: all 0.3s ease;">
                        <input type="radio" name="sc-answer" class="regular-mc-cb" value="${opt}" style="margin-right: 12px; width: 18px; height: 18px; cursor: pointer;"> 
                        <span style="font-size: 1.1rem; vertical-align: middle;">${opt}</span>
                    </label>
                `).join('')}
            </div>
            <p id="sc-error" style="color: #ff3366; display: none; margin-bottom: 15px; font-weight: bold;"></p>
        `;
    } else if (q.type === 'image') {
        inputHtml = `
            <div style="margin-bottom: 20px;">
                <img src="${q.questionImage}" alt="Soru Görseli" style="width: 100%; max-height: 250px; object-fit: contain; border-radius: 12px; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 10px 20px rgba(0,0,0,0.3);">
            </div>
            <input type="text" id="answer-input" placeholder="Cevabını buraya yaz..." autocomplete="off" onkeypress="handleKeyPress(event)">
        `;
    } else {
        inputHtml = `<input type="text" id="answer-input" placeholder="Cevabını buraya yaz..." autocomplete="off" onkeypress="handleKeyPress(event)">`;
    }

    appContainer.innerHTML = `
        <h2 class="step-title">${q.title}</h2>
        <p class="step-desc">${q.desc}</p>
        ${inputHtml}
        <div class="buttons">
            <button id="hint-btn" class="btn-secondary" style="${(q.hints && q.hints.length > 0) ? '' : 'display:none;'}" onclick="showHint()">İpucu İste (<span id="hint-count">${q.hints ? q.hints.length : 0}</span> Kaldı)</button>
            <button id="show-answer-btn" class="btn-primary" style="display:none; background: linear-gradient(45deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%); color:#222; font-weight: 800;" onclick="showAnswer()">Cevabı Göster</button>
            <button class="btn-primary" onclick="checkAnswer()">Cevapla</button>
        </div>
        <div id="hints-container" class="hints-container"></div>
    `;
    setTimeout(() => {
        const inputEle = document.getElementById('answer-input');
        if (inputEle) inputEle.focus();
    }, 100);
}

function renderFinal() {
    appContainer.innerHTML = `
        <h1 class="final-surprise">${finalMessage.title}</h1>
        <p class="step-desc" style="font-size: 1.4rem; margin-top: 25px; color: #ffffff;">${finalMessage.desc}</p>
    `;
}

function nextQuestion() {
    transitionContainer(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            renderQuestion(currentQuestionIndex);
        } else {
            renderGame();
        }
    });
}

function transitionContainer(callback) {
    appContainer.classList.add('fade-out');
    setTimeout(() => {
        callback();
        appContainer.classList.remove('fade-out');
    }, 400); // 0.4s fade out animation
}

function showSuccessScreen() {
    transitionContainer(() => {
        const q = questions[currentQuestionIndex];
        appContainer.innerHTML = `
            <div class="success-screen">
                <img src="${q.successImage}" alt="Başarı Görseli" class="success-image">
                ${q.audioSrc ? `
                <div style="margin-bottom: 20px; margin-top: 15px; text-align: center;">
                    <audio controls style="width: 100%; max-width: 400px; height: 50px; border-radius: 12px; outline: none; background-color: rgba(255,255,255,0.1);">
                        <source src="${q.audioSrc}">
                        Tarayıcınız ses oynatmayı desteklemiyor.
                    </audio>
                </div>
                ` : ""}
                <h2 class="step-title" style="margin-bottom: 15px; font-size: 2rem;">Doğru Cevap! 🎉</h2>
                <p class="step-desc success-text">${q.successText}</p>
                <button class="btn-primary" style="margin-top: 20px;" onclick="skipSuccessScreen()">Geç</button>
            </div>
        `;
    });
}

function skipSuccessScreen() {
    nextQuestion();
}

function showHint() {
    const q = questions[currentQuestionIndex];
    if (currentHintIndex < q.hints.length) {
        const hintsContainer = document.getElementById('hints-container');
        const hintEl = document.createElement('div');
        hintEl.className = 'hint-box';
        hintEl.textContent = q.hints[currentHintIndex];
        hintEl.style.display = 'block'; // Animasyonla görünecek
        hintsContainer.appendChild(hintEl);

        currentHintIndex++;
        const remaining = q.hints.length - currentHintIndex;
        document.getElementById('hint-count').textContent = remaining;

        if (remaining === 0) {
            document.getElementById('hint-btn').style.display = 'none';
            document.getElementById('show-answer-btn').style.display = 'inline-block';
        }
    }
}

function showAnswer() {
    const q = questions[currentQuestionIndex];
    if (q.type === 'multiple-choice') {
        const checkboxes = document.querySelectorAll('input[name="mc-answer"]');
        if (checkboxes.length > 0) checkboxes[0].checked = true;
    } else if (q.type === 'single-choice-strict') {
        const radioboxes = document.querySelectorAll('input[name="sc-answer"]');
        radioboxes.forEach(rb => {
            if (rb.value === q.answer) rb.checked = true;
        });
    } else {
        const inputEle = document.getElementById('answer-input');
        if (inputEle) {
            inputEle.value = q.answer[0];
            inputEle.focus();
        }
    }
}

function checkAnswer() {
    const q = questions[currentQuestionIndex];
    let isCorrect = false;

    if (q.type === 'multiple-choice') {
        const checkboxes = document.querySelectorAll('input[name="mc-answer"]:checked');

        if (checkboxes.length > 0) {
            isCorrect = true;
            checkboxes.forEach(cb => {
                cb.parentElement.style.borderColor = "#00ff88";
                cb.parentElement.style.boxShadow = "0 0 15px rgba(0, 255, 136, 0.4)";
            });
            setTimeout(() => {
                showSuccessScreen();
            }, 800);
            return;
        } else {
            const errEle = document.getElementById('mc-error');
            if (errEle) {
                errEle.style.display = 'block';
                errEle.classList.add('error-shake');
                setTimeout(() => {
                    errEle.style.display = 'none';
                    errEle.classList.remove('error-shake');
                }, 2000);
            }
            return;
        }
    } else if (q.type === 'single-choice-strict') {
        const checkedRadio = document.querySelector('input[name="sc-answer"]:checked');
        const errEle = document.getElementById('sc-error');

        // Önceki hatalı stilleri temizle
        document.querySelectorAll('input[name="sc-answer"]').forEach(rb => {
            rb.parentElement.style.borderColor = "rgba(255, 255, 255, 0.1)";
            rb.parentElement.style.boxShadow = "none";
        });

        if (!checkedRadio) {
            if (errEle) {
                errEle.textContent = "Lütfen bir şık seçin!";
                errEle.style.display = 'block';
                errEle.classList.add('error-shake');
                setTimeout(() => {
                    errEle.style.display = 'none';
                    errEle.classList.remove('error-shake');
                }, 2000);
            }
            return;
        }

        if (checkedRadio.value === q.answer) {
            checkedRadio.parentElement.style.borderColor = "#00ff88";
            checkedRadio.parentElement.style.boxShadow = "0 0 15px rgba(0, 255, 136, 0.4)";
            if (errEle) errEle.style.display = 'none';
            setTimeout(() => {
                showSuccessScreen();
            }, 800);
        } else {
            // Hatalı cevap
            checkedRadio.parentElement.style.borderColor = "#ff3366";
            checkedRadio.parentElement.style.boxShadow = "0 0 15px rgba(255, 51, 102, 0.4)";
            checkedRadio.parentElement.classList.add('error-shake');

            if (errEle) {
                errEle.textContent = "Yanlış cevap, tekrar dene!";
                errEle.style.display = 'block';
            }

            setTimeout(() => {
                checkedRadio.parentElement.classList.remove('error-shake');
            }, 400);

            // İşaretleme hakkı tanınsın diye seçimi kaldırmıyoruz, 
            // kullanıcı farklı bir şık seçip tekrar "Cevapla" diyebilir.
        }
        return;
    }

    const inputEle = document.getElementById('answer-input');
    if (!inputEle) return;

    let userAns = inputEle.value.trim().toLowerCase();

    // Doğru cevapları tek tek kontrol edelim, içermesi şartını da hafifletebiliriz.
    const exactAnswers = q.answer.map(a => a.toLowerCase());

    for (let ans of exactAnswers) {
        if (userAns === ans || userAns.includes(ans)) {
            isCorrect = true;
            break;
        }
    }

    if (isCorrect) {
        // Yeşil yap ve geçiş yap
        inputEle.style.borderColor = "#00ff88";
        inputEle.style.boxShadow = "0 0 15px rgba(0, 255, 136, 0.4)";
        setTimeout(() => {
            showSuccessScreen();
        }, 800);
    } else {
        // Kırmızı yap ve titret
        inputEle.classList.add('error-shake');
        inputEle.style.borderColor = "#ff3366";
        setTimeout(() => {
            inputEle.classList.remove('error-shake');
            inputEle.style.borderColor = "rgba(255,255,255,0.1)";
        }, 400);
    }
}

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
}

// Havai fişek (Konfeti) animasyonu - KALDIRILDI
function startConfetti() {
    // Confetti is disabled as requested
}

// Oyun mantığı
let gameActive = false;
let boyPos = { x: 50, y: 50 };
let girlPos = { x: 250, y: 250 };
let targetPos = { x: 250, y: 250 };

function renderGame() {
    appContainer.innerHTML = `
        <h2 class="step-title" style="margin-bottom: 10px; font-size: 1.8rem;">birde dayak yemeden günü bitiremem</h2>
        <p class="step-desc" style="font-size: 1rem; margin-bottom: 20px;">Leyla Fatihi yakalamaya çalışıyor</p>
        <div id="game-area" style="position: relative; width: 100%; height: 350px; background: rgba(0,0,0,0.3); border: 2px solid rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden; cursor: crosshair; touch-action: none;">
            <div id="boy" style="position: absolute; font-size: 3rem; left: 0; top: 0; transition: transform 0.1s linear; user-select: none;">👦</div>
            <div id="girl" style="position: absolute; font-size: 3rem; left: 0; top: 0; pointer-events: none; transition: transform 0.1s linear; user-select: none; z-index: 5;">👧</div>
            <div id="swear-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10;"></div>
        </div>
    `;

    setTimeout(startGameLoop, 100);
}

function startGameLoop() {
    gameActive = true;
    const gameArea = document.getElementById('game-area');
    const boyEl = document.getElementById('boy');
    const girlEl = document.getElementById('girl');
    const gameRect = gameArea.getBoundingClientRect();

    boyPos = { x: gameRect.width * 0.2, y: gameRect.height * 0.2 };
    girlPos = { x: gameRect.width * 0.8, y: gameRect.height * 0.8 };
    targetPos = { x: girlPos.x, y: girlPos.y };

    girlEl.style.transform = `translate(${girlPos.x}px, ${girlPos.y}px)`;
    boyEl.style.transform = `translate(${boyPos.x}px, ${boyPos.y}px)`;

    function updateTarget(clientX, clientY) {
        const rect = gameArea.getBoundingClientRect();
        targetPos.x = clientX - rect.left - 24;
        targetPos.y = clientY - rect.top - 24;
    }

    gameArea.addEventListener('mousemove', (e) => updateTarget(e.clientX, e.clientY));
    gameArea.addEventListener('touchmove', (e) => {
        e.preventDefault();
        updateTarget(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });

    const swearInterval = setInterval(() => {
        if (!gameActive) {
            clearInterval(swearInterval);
            return;
        }
        createSwearWord(girlPos.x, girlPos.y);
    }, 1500);

    let animationFrame;
    function loop() {
        if (!gameActive) return;

        const dx = targetPos.x - girlPos.x;
        const dy = targetPos.y - girlPos.y;
        girlPos.x += dx * 0.08;
        girlPos.y += dy * 0.08;

        girlPos.x = Math.max(0, Math.min(gameRect.width - 48, girlPos.x));
        girlPos.y = Math.max(0, Math.min(gameRect.height - 48, girlPos.y));

        const bdx = boyPos.x - girlPos.x;
        const bdy = boyPos.y - girlPos.y;
        const dist = Math.hypot(bdx, bdy);

        // Erkeğin kızdan kaçma hızı ve mesafe limiti artırıldı (hız biraz düşürüldü)
        if (dist < 220) {
            boyPos.x += (bdx / dist) * 5.5; // Hız 7 den 5.5 a düşürüldü
            boyPos.y += (bdy / dist) * 5.5;
        } else {
            // Rastgele dolaşma katsayısı biraz artırıldı
            boyPos.x += (Math.random() - 0.5) * 5;
            boyPos.y += (Math.random() - 0.5) * 5;
        }

        // --- KENARLARDAN KAÇIŞ YARDIMI ---
        // Eğer köşeye veya kenara fazla yaklaşırsa, ters yöne hafif bir ivme ver
        const edgeMargin = 30; // Kenarlardan ne kadar uzaklaşacağı
        if (boyPos.x < edgeMargin) boyPos.x += 3;
        if (boyPos.y < edgeMargin) boyPos.y += 3;
        if (boyPos.x > gameRect.width - 48 - edgeMargin) boyPos.x -= 3;
        if (boyPos.y > gameRect.height - 48 - edgeMargin) boyPos.y -= 3;
        // ------------------------------------

        boyPos.x = Math.max(0, Math.min(gameRect.width - 48, boyPos.x));
        boyPos.y = Math.max(0, Math.min(gameRect.height - 48, boyPos.y));

        girlEl.style.transform = `translate(${girlPos.x}px, ${girlPos.y}px)`;
        boyEl.style.transform = `translate(${boyPos.x}px, ${boyPos.y}px)`;

        // Yakalanma mesafesi küçültüldü, çok daha yakın olmak gerekiyor (gerçek hitbox)
        if (dist < 25) {
            gameActive = false;
            cancelAnimationFrame(animationFrame);
            handleCollision(girlPos, boyPos, gameArea);
            return;
        }

        animationFrame = requestAnimationFrame(loop);
    }

    animationFrame = requestAnimationFrame(loop);
}

function createSwearWord(x, y) {
    const swears = ["gerizekalı!", "mal!", "aptal!", "öküz!", "salak!", "Bitch!", "bitch"];
    const swear = swears[Math.floor(Math.random() * swears.length)];

    const container = document.getElementById('swear-container');
    const el = document.createElement('div');
    el.className = 'swear-word';
    el.textContent = swear;
    el.style.left = (x + 30) + 'px';
    el.style.top = (y - 20) + 'px';

    container.appendChild(el);

    void el.offsetWidth;
    el.style.transform = 'translateY(-40px)';
    el.style.opacity = '0';

    setTimeout(() => {
        if (el.parentElement) el.remove();
    }, 1200);
}

function handleCollision(girlPos, boyPos, gameArea) {
    const boyEl = document.getElementById('boy');
    const girlEl = document.getElementById('girl');

    boyEl.textContent = '🤕';
    girlEl.textContent = '🤬';

    let ticks = 0;
    let punchInterval = setInterval(() => {
        ticks++;

        const jx = (Math.random() - 0.5) * 30;
        const jy = (Math.random() - 0.5) * 30;
        boyEl.style.transform = `translate(${boyPos.x + jx}px, ${boyPos.y + jy}px)`;
        girlEl.style.transform = `translate(${girlPos.x - jx * 0.5}px, ${girlPos.y - jy * 0.5}px)`;

        const punchWords = ["salak", "aptal", "mal", "gerizekalı", "öküz", "bitch"];
        const word = punchWords[Math.floor(Math.random() * punchWords.length)];

        const el = document.createElement('div');
        el.className = 'game-action';
        el.textContent = word;
        el.style.left = (boyPos.x + (Math.random() - 0.5) * 60 + 20) + 'px';
        el.style.top = (boyPos.y + (Math.random() - 0.5) * 60) + 'px';
        gameArea.appendChild(el);

        setTimeout(() => {
            el.style.opacity = '0';
            setTimeout(() => {
                if (el.parentElement) el.remove();
            }, 300);
        }, 300);

        if (ticks % 2 === 0) createSwearWord(girlPos.x, girlPos.y);

    }, 250);

    setTimeout(() => {
        clearInterval(punchInterval);
        transitionContainer(() => {
            renderFinal();
        });
    }, 4500);
}

// Uygulamayı başlat
renderWelcome();
