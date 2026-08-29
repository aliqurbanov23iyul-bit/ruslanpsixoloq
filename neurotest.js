(() => {
  const questions = [
    { sphere: 'social', text: 'Gözlənilməz sosial gərginlik anında təmkinimi qoruyub situasiyanı idarə edirəm.' },
    { sphere: 'social', text: 'Yeni mühitlərə tez uyğunlaşır, iş tapmaqda və əlaqə qurmaqda çətinlik çəkmirəm.' },
    { sphere: 'social', text: 'Yaxınlarımla münasibətdə emosional sərhədlərimi qoruyuram.' },
    { sphere: 'social', text: 'Tənqid olunduqda bunu şəxsi hücum kimi yox, obyektiv məlumat kimi qəbul edirəm.' },
    { sphere: 'social', text: "Öz maraqlarımı diplomatiya ilə tələb edə və rahatlıqla 'yox' deyə bilirəm." },

    { sphere: 'economic', text: 'Gəlir imkanları gördükdə qorxu məni saxlamır; lazımi riski hesablayıb addım atıram.' },
    { sphere: 'economic', text: 'Pul qazanmaq prosesini ağır əzab yox, strategiya və həll edilə bilən sistem kimi görürəm.' },
    { sphere: 'economic', text: 'Ani emosional istəklərə qapılmadan büdcəmi düzgün idarə edirəm.' },
    { sphere: 'economic', text: 'Gələcək maliyyə qeyri-müəyyənliyi hiss edəndə panikaya düşmür, ehtiyat planlar qururam.' },
    { sphere: 'economic', text: 'Peşəkar dəyərimi bilirəm və layiq olduğum gəliri tələb etməkdən çəkinmirəm.' },

    { sphere: 'scientific', text: 'Fikirləri kor-koranə yox, elmi və faktiki əsaslarını araşdırdıqdan sonra qəbul edirəm.' },
    { sphere: 'scientific', text: 'Müxtəlif dünyagörüşləri (elm, din, fəlsəfə) arasında ziddiyyət yaratmadan kompleks düşünə bilirəm.' },
    { sphere: 'scientific', text: 'Mürəkkəb məlumatları həzm edərkən dərin fokuslanma (deep work) bacarığım yüksəkdir.' },
    { sphere: 'scientific', text: 'Əldə etdiyim bilikləri sadəcə yadda tutmur, səbəb-nəticə əlaqələrini təhlil edirəm.' },
    { sphere: 'scientific', text: 'Fikrimlə ziddiyyət təşkil edən elmi fakt gördükdə yanılmamı rahatlıqla qəbul edirəm.' },

    { sphere: 'application', text: 'Bir işi nə vaxt və necə etməli olduğumu bilən kimi anında fəaliyyətə keçirəm.' },
    { sphere: 'application', text: 'Nəzəri olaraq bildiyim şeyləri həyatda real nəticəyə (pul, uğur) çevirmək bacarığım yüksəkdir.' },
    { sphere: 'application', text: 'Hadisələrin gedişatına görə davranış taktikamı anında dəyişə bilən situativ zəkaya malikəm.' },
    { sphere: 'application', text: 'Keçmişdə etdiyim səhvlərdən dərs çıxararaq eyni avtomatik reaksiyanı təkrar etmirəm.' },
    { sphere: 'application', text: "Böhran anında beynim 'iflic' olmur; dərhal işlək çıxış yolları tapır." }
  ];

  const optionLabels = [
    'Mənə aid deyil',
    'Bəzən',
    'Neytral',
    'Əksərən',
    'Tamamilə mənə aiddir'
  ];

  const domainConfig = {
    social: {
      title: 'Sosial sahə',
      resultTitle: 'Sosial münasibətlər',
      descriptions: {
        high: 'Sosial situasiyalarda sərhəd, uyğunlaşma və ünsiyyət bacarıqlarınızı yüksək qiymətləndirirsiniz.',
        good: 'Sosial münasibətlərdə ümumən rahat görünürsünüz; bəzi situasiyalarda daha şüurlu sərhəd və ünsiyyət faydalı ola bilər.',
        developing: 'Sosial gərginlik, tənqid və sərhəd qoyma mövzularında inkişaf üçün yer olduğunu düşünürsünüz.',
        attention: 'Sosial situasiyalar sizin üçün çətinləşdirici ola bilər. Konkret situasiyaları müşahidə edib professional dəstək almaq faydalı ola bilər.'
      }
    },
    economic: {
      title: 'İqtisadi sahə',
      resultTitle: 'Maliyyə və qərarvermə',
      descriptions: {
        high: 'Pul, risk və gələcək planlama mövzularında özünüzü planlı və inamlı qiymətləndirirsiniz.',
        good: 'Maliyyə qərarlarında ümumi sabitlik var; emosional qərarlar və risk hesablaması üzərində əlavə diqqət faydalı ola bilər.',
        developing: 'Pul və gələcəklə bağlı qərarlarda tərəddüd və emosional təsir hiss etdiyinizi göstərirsiniz.',
        attention: 'Maliyyə qeyri-müəyyənliyi və qərarvermə sizdə daha çox gərginlik yarada bilər; davranış nümunələrini müşahidə etmək faydalıdır.'
      }
    },
    scientific: {
      title: 'Analitik düşüncə',
      resultTitle: 'Analitik və fakt yönümlü düşüncə',
      descriptions: {
        high: 'Məlumatı araşdırmaq, səbəb-nəticə qurmaq və fikrinizi faktlara görə yeniləmək bacarıqlarınızı yüksək qiymətləndirirsiniz.',
        good: 'Analitik düşüncə bacarığınız güclü görünür; fokus və alternativ baxışları yoxlamaqla daha da inkişaf etdirilə bilər.',
        developing: 'Fokus, məlumatı təhlil etmə və fərqli baxışlara açıq qalmaq sahələrində inkişaf üçün yer görünür.',
        attention: 'Mürəkkəb məlumat və ziddiyyətli fikirlər sizi daha çox yora bilər. Məlumatı kiçik hissələrə bölmək və yoxlama vərdişi faydalıdır.'
      }
    },
    application: {
      title: 'Bilik və tətbiq',
      resultTitle: 'Fəaliyyət və tətbiq',
      descriptions: {
        high: 'Bildiklərinizi praktik addımlara çevirmək və situasiyaya uyğun hərəkət etmək bacarığınızı yüksək qiymətləndirirsiniz.',
        good: 'Fəaliyyətə keçmə bacarığınız yaxşıdır; bəzi hallarda başlanğıc müqavimətini azaltmaq üçün kiçik addımlar faydalı ola bilər.',
        developing: 'Nə etməli olduğunuzu bilsəniz də, bunu praktik addıma çevirmək bəzən çətin ola bilər.',
        attention: 'Başlama, davam etdirmə və böhran anında qərarvermə sahələrində daha çox çətinlik hiss etdiyinizi göstərirsiniz.'
      }
    }
  };

  let currentIndex = 0;
  const answers = new Array(questions.length).fill(null);

  const intro = document.getElementById('quizIntro');
  const stage = document.getElementById('quizStage');
  const results = document.getElementById('quizResults');
  const startBtn = document.getElementById('startQuizBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const progressText = document.getElementById('progressText');
  const progressPercent = document.getElementById('progressPercent');
  const progressFill = document.getElementById('progressFill');
  const domainText = document.getElementById('domainText');

  function scoreBand(score) {
    if (score >= 21) return { key: 'high', label: 'Yüksək səviyyə' };
    if (score >= 16) return { key: 'good', label: 'Yaxşı səviyyə' };
    if (score >= 11) return { key: 'developing', label: 'İnkişaf potensialı' };
    return { key: 'attention', label: 'Diqqət tələb edən sahə' };
  }

  function calculateScores() {
    const scores = { social: 0, economic: 0, scientific: 0, application: 0 };
    questions.forEach((question, index) => {
      const value = answers[index];
      if (Number.isInteger(value) && value >= 1 && value <= 5) scores[question.sphere] += value;
    });
    return scores;
  }

  function renderQuestion() {
    const question = questions[currentIndex];
    const percent = Math.round(((currentIndex + 1) / questions.length) * 100);

    progressText.textContent = `Sual ${currentIndex + 1} / ${questions.length}`;
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;
    domainText.textContent = domainConfig[question.sphere].title;
    questionText.textContent = `${currentIndex + 1}. ${question.text}`;
    optionsContainer.innerHTML = '';

    optionLabels.forEach((label, index) => {
      const score = index + 1;
      const option = document.createElement('button');
      option.type = 'button';
      option.className = 'option-card' + (answers[currentIndex] === score ? ' selected' : '');
      option.setAttribute('aria-pressed', answers[currentIndex] === score ? 'true' : 'false');
      option.innerHTML = `<span class="score-dot">${score}</span><span>${label}</span>`;
      option.addEventListener('click', () => {
        answers[currentIndex] = score;
        renderQuestion();
      });
      optionsContainer.appendChild(option);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = answers[currentIndex] === null;
    nextBtn.innerHTML = currentIndex === questions.length - 1
      ? 'Nəticəni gör <i class="fa-solid fa-chart-simple"></i>'
      : 'Növbəti <i class="fa-solid fa-arrow-right"></i>';
  }

  function showResults() {
    if (answers.some((value) => value === null)) return;

    const scores = calculateScores();
    const entries = Object.entries(scores).map(([key, score]) => ({ key, score, band: scoreBand(score) }));
    const strongest = [...entries].sort((a, b) => b.score - a.score)[0];
    const growth = [...entries].sort((a, b) => a.score - b.score)[0];
    const average = Math.round(entries.reduce((sum, item) => sum + item.score, 0) / entries.length);

    const bars = entries.map(({ key, score, band }) => {
      const cfg = domainConfig[key];
      const pct = Math.round((score / 25) * 100);
      return `
        <div class="result-item">
          <div class="result-head">
            <div><strong>${cfg.resultTitle}</strong><span class="result-status">${band.label}</span></div>
            <span class="result-score">${score} / 25</span>
          </div>
          <div class="result-bar"><span style="width:${pct}%"></span></div>
          <p>${cfg.descriptions[band.key]}</p>
        </div>`;
    }).join('');

    results.innerHTML = `
      <span class="test-kicker">Test tamamlandı</span>
      <h1>Nəticəniz hazırdır.</h1>
      <p class="results-lead">Cavablarınıza əsasən 4 sahə üzrə özünüqiymətləndirmə profiliniz aşağıdadır.</p>
      <div class="result-overview">
        <strong>Ümumi baxış · orta hesab ${average} / 25</strong>
        <p>Ən yüksək balınız <b>${domainConfig[strongest.key].resultTitle}</b> sahəsindədir. Daha çox diqqət ayıra biləcəyiniz sahə isə <b>${domainConfig[growth.key].resultTitle}</b> olaraq görünür. Bu müqayisə yalnız verdiyiniz cavablara əsaslanır.</p>
      </div>
      <div class="result-list">${bars}</div>
      <div class="result-note"><i class="fa-solid fa-circle-info"></i><span>Bu nəticə diaqnoz deyil və klinik qiymətləndirməni əvəz etmir. Davamlı emosional və ya davranış çətinlikləriniz varsa, nəticəni mütəxəssislə müzakirə edə bilərsiniz.</span></div>
      <div class="result-actions">
        <button class="quiz-secondary" id="restartQuizBtn"><i class="fa-solid fa-rotate-right"></i> Yenidən et</button>
        <a class="whatsapp-result" href="https://wa.me/994553034760?text=Neyroxarakter%20testinin%20n%C9%99tic%C9%99sini%20m%C3%BCzakir%C9%99%20etm%C9%99k%20ist%C9%99yir%C9%99m." target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Psixoloqla müzakirə et</a>
      </div>`;

    stage.hidden = true;
    results.hidden = false;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });

    document.getElementById('restartQuizBtn').addEventListener('click', restartQuiz);
  }

  function restartQuiz() {
    currentIndex = 0;
    answers.fill(null);
    results.hidden = true;
    intro.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  startBtn.addEventListener('click', () => {
    intro.hidden = true;
    stage.hidden = false;
    renderQuestion();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderQuestion();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (answers[currentIndex] === null) return;
    if (currentIndex < questions.length - 1) {
      currentIndex += 1;
      renderQuestion();
    } else {
      showResults();
    }
  });

  // Expose a tiny read-only test API for automated sanity checks during development.
  window.NeuroTest = {
    questionCount: questions.length,
    domainCounts: questions.reduce((acc, q) => ({ ...acc, [q.sphere]: (acc[q.sphere] || 0) + 1 }), {}),
    scoreBand
  };
})();
