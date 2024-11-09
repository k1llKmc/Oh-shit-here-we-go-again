type Lang = 'ru' | 'uz' | 'en';

type Translation = {
  title: string;
  description: string;
  about: string;
  events: string;
  contacts: string;
  tour: string;
  whyUs: string;
  whyUsArr: {
    title: string;
    description: string;
  }[];
  courses: never[];
};

type Translations = {
  [key in Lang]: Translation;
};

const translations: Translations = {
  ru: {
    title: 'Узнайте, как мы готовим IT специалистов мирового уровня!',
    description: 'Приходите на бесплатную экскурсию по нашей академии и окунитесь в мир современных технологий.',
    about: 'О нас',
    events: 'Ивенты',
    contacts: 'Контакты',
    tour: 'Записаться на экскурсию',
    whyUs: 'Почему именно мы?',
    whyUsArr: [
      {
        title: 'Актуальные и практические знания',
        description: 'Наши преподаватели — это практики с реальным опытом, готовые делиться своими знаниями и навыками. Мы предлагаем дуальное образование, которое позволяет вам начать профессиональную стажировку уже в первый месяц обучения, совмещая теорию с реальной практикой для более глубокого погружения в профессию.'
      },
      {
        title: 'Сообщество единомышленников',
        description: 'Здесь вы найдете не только друзей, которые разделят ваш путь, но и опытных наставников, готовых поддержать, направить и помочь вам развить свои навыки. В этом пространстве каждый шаг – это возможность для личного роста и профессионального совершенствования.'
      },
      {
        title: 'Развитие Soft Skills',
        description: 'Для достижения поставленных целей всем специалистам необходимо прокачивать не только hard skills, а также soft skills: эффективные переговоры, маркетинг и инновационные бизнес модели, финансы для IT, презентация.'
      },
      {
        title: 'Удобный формат обучения',
        description: 'Выбирайте удобное для себя время и обучайтесь по гибкому графику — три раза в неделю по 1,5 часа. Наш подход позволяет вам гармонично сочетать учебу с другими приоритетами и двигаться к своим целям в удобном темпе.'
      },
      {
        title: 'Профориентация на входе',
        description: 'Профориентация — это комплексный процесс, направленный на осознанное построение карьеры. Он помогает человеку выбрать профессиональный путь, опираясь на личный опыт, интересы, внутренние чувства и потребности. Такой подход способствует развитию карьеры, отражающей уникальные качества и стремления каждого.'
      },
      {
        title: 'Трудоустройство',
        description: 'Наши компании-партнеры уже ждут вас! С ними вы сможете начать карьеру и применить свои знания на практике, открывая для себя перспективы в ведущих организациях.'
      },
    ],
    courses: [],
  },
  uz: {
    title: 'Dunyo miqyosidagi IT mutaxassislarini qanday tayyorlayotganimizni bilib oling!',
    description: 'Bizning akademiyamizda bepul ekskursiyaga kelib, zamonaviy texnologiyalar dunyosiga sho\'ng\'ing.',
    about: 'Biz haqimizda',
    events: 'Tadbirlar',
    contacts: 'Aloqa',
    tour: 'Ekskursiyaga yozilish',
    whyUs: 'Nega aynan biz?',
    whyUsArr: [
      {
        title: 'Ahamiyatli va amaliy bilimlar',
        description: 'Bizning o\'qituvchilarimiz – haqiqiy tajribaga ega mutaxassislar bo\'lib, bilim va ko\'nikmalarini bo\'lishishga tayyor. Biz amaliy tajribani birinchi oyda o\'rgatib, nazariyani real amaliyot bilan birlashtirgan dual ta\'limni taklif qilamiz.'
      },
      {
        title: 'O\'xshash fikrli odamlar jamoasi',
        description: 'Bu yerda nafaqat yo\'lingizni bo\'lishadigan do\'stlarni, balki o\'z ko\'nikmalarini rivojlantirishga yordam beradigan tajribali ustozlarni topasiz. Bu muhitda har bir qadam – shaxsiy o\'sish va professional mukammallik imkoniyatidir.'
      },
      {
        title: 'Soft Skillsni rivojlantirish',
        description: 'Belgilangan maqsadlarga erishish uchun har bir mutaxassisga faqat hard skillsni emas, balki soft skillsni ham rivojlantirish zarur: samarali muzokaralar, marketing va innovatsion biznes modellar, IT uchun moliya, taqdimot.'
      },
      {
        title: 'Qulay ta\'lim formati',
        description: 'O\'zingizga qulay bo\'lgan vaqtni tanlab, moslashuvchan jadval bo\'yicha ta\'lim oling — haftasiga 3 marta, har biri 1,5 soatdan. Bizning yondashuvimiz sizga ta\'limni boshqa ustuvorliklar bilan uyg\'unlashtirishga va o\'zingiz uchun qulay tempda maqsadlaringizga erishishga imkon beradi.'
      },
      {
        title: 'Karyera boshlanishida kasbiy yo\'naltirish',
        description: 'Kasbiy yo\'naltirish – bu karyerani ongli ravishda qurishga qaratilgan kompleks jarayon. U shaxsiy tajriba, qiziqishlar, ichki his-tuyg\'ular va ehtiyojlarga asoslanib, professional yo\'nalishni tanlashga yordam beradi. Bu yondashuv har bir kishining noyob xususiyatlari va orzulariga mos keladigan karyerani rivojlantirishga xizmat qiladi.'
      },
      {
        title: 'Ishga joylashish',
        description: 'Bizning hamkorlarimiz sizni kutmoqda! Ular bilan siz karyerangizni boshlashingiz va o\'z bilimlaringizni amaliyotda qo\'llashingiz mumkin, etakchi tashkilotlarda imkoniyatlarni kashf etib.'
      },
    ],
    courses: [],
  },
  en: {
    title: 'Discover how we prepare world-class IT specialists!',
    description: 'Come join our free tour of the academy and dive into the world of modern technologies.',
    about: 'About Us',
    events: 'Events',
    contacts: 'Contacts',
    tour: 'Sign up for a tour',
    whyUs: 'Why Us?',
    whyUsArr: [
      {
        title: 'Relevant and Practical Knowledge',
        description: 'Our instructors are real practitioners with hands-on experience, ready to share their knowledge and skills. We offer dual education that allows you to start professional internships in the first month of your studies, combining theory with real practice for a deeper immersion into the profession.'
      },
      {
        title: 'Community of Like-minded People',
        description: 'Here you will find not only friends who will share your journey but also experienced mentors ready to support, guide, and help you develop your skills. In this space, every step is an opportunity for personal growth and professional improvement.'
      },
      {
        title: 'Development of Soft Skills',
        description: 'To achieve set goals, every specialist needs to develop not only hard skills but also soft skills: effective negotiations, marketing and innovative business models, finance for IT, and presentations.'
      },
      {
        title: 'Convenient Learning Format',
        description: 'Choose a time that works best for you and study according to a flexible schedule — three times a week, 1.5 hours each. Our approach allows you to balance your studies with other priorities and progress towards your goals at a comfortable pace.'
      },
      {
        title: 'Career Orientation at the Start',
        description: 'Career orientation is a comprehensive process aimed at consciously building a career. It helps a person choose a professional path based on personal experience, interests, inner feelings, and needs. This approach fosters career development that reflects each individual’s unique qualities and aspirations.'
      },
      {
        title: 'Employment',
        description: 'Our partner companies are already waiting for you! With them, you can start your career and apply your knowledge in practice, opening up opportunities in leading organizations.'
      },
    ],
    courses: [],
  }
};
