/**
 * ============================================================================
 * AASTU Social Science Department - Free FAQ Chatbot Widget
 * File: chatbot.js
 * 
 * Features:
 *  - 100% Free: Pure client-side JavaScript. No backend, no API key needed.
 *  - Rule-based keyword matching with scored relevance.
 *  - English & Amharic (አማርኛ) bilingual support with instant toggle.
 *  - Quick-reply suggestions for one-click answers.
 *  - Full coverage of Department Info, Mission, Vision, Courses, Faculty, 
 *    Blog, Gallery, PHIL 1009 Logic Portal, and MCIE 1012 Civics Portal.
 *  - Polite fallback with direct link to social@aastu.edu.et.
 *  - Mobile responsive with smooth animations.
 * ============================================================================
 */

(function () {
    'use strict';

    // ========================================================================
    // 1. KNOWLEDGE BASE (EASY TO EDIT FOR BEGINNERS)
    // Add, edit, or remove FAQs right inside this array!
    // ========================================================================
    const FAQ_KNOWLEDGE_BASE = [
        {
            id: 'about_department',
            title_en: 'About Department',
            title_am: 'ስለ ትምህርት ክፍሉ',
            keywords_en: ['about', 'department', 'overview', 'who are you', 'social science', 'aastu', 'background', 'intro', 'introduction'],
            keywords_am: ['ስለ', 'ትምህርት ክፍል', 'ማህበራዊ ሳይንስ', 'መግቢያ', 'ማን ናችሁ'],
            answer_en: `
                <p><strong>Department of Social Sciences at AASTU:</strong></p>
                <p>We are an integral department within Addis Ababa Science and Technology University (AASTU), delivering foundational humanities, ethics, critical reasoning, and social inquiry across all science and engineering disciplines.</p>
                <div class="aastu-bot-action-links">
                    <a href="about.html" class="aastu-action-link-btn">Read About Us &rarr;</a>
                    <a href="courses.html" class="aastu-action-link-btn">Explore Courses &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>የአ.አ.ሳ.ቴ.ዩ ማህበራዊ ሳይንስ ትምህርት ክፍል፡</strong></p>
                <p>በትምህርት ክፍላችን በኢንጂነሪንግ እና ሳይንስ ተማሪዎች ዘንድ ሂሳዊ አስተሳሰብን፣ ስነ-ምግባርን፣ እና ማህበራዊ እውቀቶችን ለማዳበር የተቋቋመ የዩኒቨርሲቲው ወሳኝ ክፍል ነው።</p>
                <div class="aastu-bot-action-links">
                    <a href="about.html" class="aastu-action-link-btn">ስለ እኛ ሙሉ መረጃ &rarr;</a>
                    <a href="courses.html" class="aastu-action-link-btn">ኮርሶችን ይመልከቱ &rarr;</a>
                </div>
            `
        },
        {
            id: 'mission_vision',
            title_en: 'Mission & Vision',
            title_am: 'ተልዕኮ እና ራዕይ',
            keywords_en: ['mission', 'vision', 'history', 'values', 'goals', 'objective', 'aim', 'heritage', 'commitment'],
            keywords_am: ['ተልዕኮ', 'ራዕይ', 'ታሪክ', 'እሴት', 'ዓላማ'],
            answer_en: `
                <p><strong>Our Mission & Vision:</strong></p>
                <p><strong>🎯 Mission:</strong> To deliver high-impact humanistic and social education equipping engineers and scientists with critical reasoning, constitutional awareness, and ethical perspectives.</p>
                <p><strong>🌟 Vision:</strong> To be an African center of excellence recognized for integrating social sciences with STEM education, advancing interdisciplinary research, and nurturing globally competitive innovators.</p>
                <div class="aastu-bot-action-links">
                    <a href="about.html" class="aastu-action-link-btn">Full Mission & Heritage &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>ተልዕኮ እና ራዕይ፡</strong></p>
                <p><strong>🎯 ተልዕኮ፡</strong> በኢንጂነሪንግ እና ቴክኖሎጂ ተማሪዎች ዘንድ ሂሳዊ አስተሳሰብን፣ ሕገ-መንግስታዊ ንቃተ-ህሊናን እና ስነ-ምግባራዊ አመራርን ማዳበር።</p>
                <p><strong>🌟 ራዕይ፡</strong> ማህበራዊ ሳይንስን ከቴክኖሎጂ ትምህርት ጋር በማቀናጀት በአፍሪካ ግንባር ቀደም የልህቀት ማዕከል መሆን።</p>
                <div class="aastu-bot-action-links">
                    <a href="about.html" class="aastu-action-link-btn">ሙሉ ዝርዝር ይመልከቱ &rarr;</a>
                </div>
            `
        },
        {
            id: 'logic_phil1009',
            title_en: 'Logic (PHIL 1009)',
            title_am: 'ሎጂክ (PHIL 1009)',
            keywords_en: ['logic', 'phil1009', 'phil 1009', 'philosophy', 'critical thinking', 'fallacy', 'fallacies', 'syllogism', 'venn', 'square of opposition', 'chapter 1', 'chapter 2', 'chapter 3', 'chapter 4', 'chapter 5', 'deductive', 'inductive', 'notes'],
            keywords_am: ['ሎጂክ', 'ፊሎሶፊ', 'አመክንዮ', 'ሂሳዊ አስተሳሰብ', 'ስህተት', 'ስህተቶች', 'ማስታወሻ'],
            answer_en: `
                <p><strong>PHIL 1009: Logic & Critical Thinking:</strong></p>
                <p>Covers basic concepts of logic, deductive vs. inductive arguments, categorical propositions, standard Venn diagrams, traditional square of opposition, and formal/informal fallacies.</p>
                <p>Lecture slides, interactive chapter tests, and comprehensive reading materials are available on the portal.</p>
                <div class="aastu-bot-action-links">
                    <a href="logic.html" class="aastu-action-link-btn">Open Logic Portal &rarr;</a>
                    <a href="ch1phil1009.html" class="aastu-action-link-btn">Chapter 1 Slides &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>PHIL 1009: ሎጂክ እና ሂሳዊ አስተሳሰብ፡</strong></p>
                <p>ይህ ኮርስ ስለ መሰረታዊ የሎጂክ ጽንሰ-ሀሳቦች፣ የአመክንዮ አወቃቀር፣ ምድባዊ አረፍተ-ነገሮች (Categorical Propositions) እና የክርክር ስህተቶች (Fallacies) ያስተምራል።</p>
                <div class="aastu-bot-action-links">
                    <a href="logic.html" class="aastu-action-link-btn">የሎጂክ ፖርታል ይክፈቱ &rarr;</a>
                </div>
            `
        },
        {
            id: 'civics_mcie1012',
            title_en: 'Civics (MCIE 1012)',
            title_am: 'ስነ-ዜጋ (MCIE 1012)',
            keywords_en: ['civic', 'civics', 'mcie1012', 'mcie 1012', 'moral', 'ethics', 'constitution', 'democracy', 'human rights', 'citizenship', 'state', 'quiz', 'quizzes', 'chapter 1', 'chapter 2', 'chapter 3', 'chapter 4', 'chapter 5'],
            keywords_am: ['ስነዜጋ', 'ስነ ዜጋ', 'ስነምግባር', 'ስነ ምግባር', 'ዴሞክራሲ', 'ህገ መንግስት', 'መብት', 'ፈተና'],
            answer_en: `
                <p><strong>MCIE 1012: Moral & Civic Education:</strong></p>
                <p>Explores applied ethics, normative moral theories, constitutional law, human rights frameworks, civic duties, and democratic state-building in Ethiopia.</p>
                <p>Interactive self-test quizzes and chapter study materials are available.</p>
                <div class="aastu-bot-action-links">
                    <a href="mcie1012mainpage.html" class="aastu-action-link-btn">Open Civics Portal &rarr;</a>
                    <a href="mcie1012ch1q.html" class="aastu-action-link-btn">Take Civics Quiz &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>MCIE 1012: ስነ-ምግባር እና የዜግነት ትምህርት፡</strong></p>
                <p>የስነ-ምግባር ፅንሰ-ሀሳቦችን፣ የሕገ-መንግስት መሰረቶችን፣ ሰብአዊ መብቶችን እና በኢትዮጵያ ያለውን የዴሞክራሲ ስርዓት ግንባታ ያብራራል።</p>
                <div class="aastu-bot-action-links">
                    <a href="mcie1012mainpage.html" class="aastu-action-link-btn">የስነ-ዜጋ ፖርታል &rarr;</a>
                    <a href="mcie1012ch1q.html" class="aastu-action-link-btn">የልምምድ ፈተና &rarr;</a>
                </div>
            `
        },
        {
            id: 'all_courses',
            title_en: 'All Courses',
            title_am: 'የኮርሶች ዝርዝር',
            keywords_en: ['courses', 'course', 'curriculum', 'subjects', 'syllabus', 'modules', 'anthropology', 'soc1001', 'history', 'hist1001', 'geography', 'geis1001', 'sociology', 'soci1012', 'global trends', 'gltr1001'],
            keywords_am: ['ኮርሶች', 'ኮርስ', 'ትምህርቶች', 'ካሪኩለም', 'አንትሮፖሎጂ', 'ታሪክ', 'ሶሲዮሎጂ', 'ጂኦግራፊ'],
            answer_en: `
                <p><strong>Department Accredited Courses:</strong></p>
                <ul>
                    <li><strong>PHIL 1009:</strong> Logic & Critical Thinking</li>
                    <li><strong>MCIE 1012:</strong> Moral & Civic Education</li>
                    <li><strong>SOC 1001:</strong> Social Anthropology</li>
                    <li><strong>HIST 1001:</strong> History of Ethiopia & the Horn</li>
                    <li><strong>GEIS 1001:</strong> Geography of Ethiopia & the Horn</li>
                    <li><strong>SOCI 1012:</strong> Sociology & Urban Governance</li>
                    <li><strong>GLTR 1001:</strong> Global Trends & Geopolitics</li>
                </ul>
                <div class="aastu-bot-action-links">
                    <a href="courses.html" class="aastu-action-link-btn">Browse Full Syllabi &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>በትምህርት ክፍሉ የሚሰጡ ኮርሶች፡</strong></p>
                <ul>
                    <li><strong>PHIL 1009:</strong> ሎጂክ እና ሂሳዊ አስተሳሰብ</li>
                    <li><strong>MCIE 1012:</strong> ስነ-ምግባር እና የዜግነት ትምህርት</li>
                    <li><strong>SOC 1001:</strong> ማህበራዊ አንትሮፖሎጂ</li>
                    <li><strong>HIST 1001:</strong> የኢትዮጵያና የቀንድ አፍሪካ ታሪክ</li>
                    <li><strong>GEIS 1001:</strong> የኢትዮጵያና የቀንድ አፍሪካ ጂኦግራፊ</li>
                    <li><strong>SOCI 1012:</strong> ሶሲዮሎጂ እና የከተማ አስተዳደር</li>
                    <li><strong>GLTR 1001:</strong> ዓለም አቀፍ አዝማሚያዎች (Global Trends)</li>
                </ul>
                <div class="aastu-bot-action-links">
                    <a href="courses.html" class="aastu-action-link-btn">ሁሉንም ኮርሶች ይመልከቱ &rarr;</a>
                </div>
            `
        },
        {
            id: 'faculty_directory',
            title_en: 'Faculty Directory',
            title_am: 'የመምህራን ማውጫ',
            keywords_en: ['faculty', 'staff', 'teachers', 'professors', 'instructors', 'lecturers', 'who teaches', 'sophia', 'solomon', 'biruk', 'manaye', 'shumye', 'mohammed', 'teshome'],
            keywords_am: ['መምህራን', 'አስተማሪዎች', 'ፕሮፌሰሮች', 'ሰራተኞች', 'ዶክተር'],
            answer_en: `
                <p><strong>Faculty & Instructors Directory:</strong></p>
                <ul>
                    <li><strong>Mrs. Sophia Kifle:</strong> Federal Studies (0911144142)</li>
                    <li><strong>Dr. Solomon Gebre:</strong> Peace & Security (0911761359)</li>
                    <li><strong>Dr. Biruk Shewadeg:</strong> African Studies (0913714459)</li>
                    <li><strong>Dr. Manaye Zegeye:</strong> Federal Studies (0912351728)</li>
                    <li><strong>Dr. Shumye Getu:</strong> Philosophy (0913966539)</li>
                    <li><strong>Mr. Mohammed Zeinu:</strong> Philosophy (0910517214)</li>
                    <li><strong>Dr. Teshome Abera:</strong> Sociology (0911698564)</li>
                </ul>
                <div class="aastu-bot-action-links">
                    <a href="staff.html" class="aastu-action-link-btn">Open Faculty Profiles &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>የትምህርት ክፍሉ መምህራን፡</strong></p>
                <p>በፍልስፍና፣ ፌዴራል ጥናት፣ ሰላምና ጸጥታ፣ አፍሪካ ጥናት እና ሶሲዮሎጂ ዘርፍ ከፍተኛ ልምድ ያላቸው ምሁራን ያስተምራሉ።</p>
                <div class="aastu-bot-action-links">
                    <a href="staff.html" class="aastu-action-link-btn">ሙሉ የመምህራን ዝርዝር &rarr;</a>
                </div>
            `
        },
        {
            id: 'contact_info',
            title_en: 'Contact & Location',
            title_am: 'አድራሻና ግንኙነት',
            keywords_en: ['contact', 'email', 'phone', 'location', 'where', 'address', 'office', 'kilinto', 'inquiry', 'message'],
            keywords_am: ['አድራሻ', 'ኢሜይል', 'ስልክ', 'ቢሮ', 'የት', 'ካምፓስ', 'ኪሊንጦ', 'መልዕክት'],
            answer_en: `
                <p><strong>Contact Details & Campus Location:</strong></p>
                <p>📍 <strong>Location:</strong> Addis Ababa Science & Technology University (AASTU), Kilinto Campus, Akaki-Kality Sub-city, Addis Ababa, Ethiopia.</p>
                <p>✉️ <strong>Official Email:</strong> <a href="mailto:social@aastu.edu.et">social@aastu.edu.et</a></p>
                <p>You can also submit an official direct inquiry via our web contact form.</p>
                <div class="aastu-bot-action-links">
                    <a href="contact.html" class="aastu-action-link-btn">Go to Contact Form &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>አድራሻ እና የስራ ቦታ፡</strong></p>
                <p>📍 <strong>አድራሻ፡</strong> አዲስ አበባ ሳይንስና ቴክኖሎጂ ዩኒቨርሲቲ (AASTU)፣ ኪሊንጦ ካምፓስ፣ አዲስ አበባ።</p>
                <p>✉️ <strong>ኢሜይል፡</strong> <a href="mailto:social@aastu.edu.et">social@aastu.edu.et</a></p>
                <div class="aastu-bot-action-links">
                    <a href="contact.html" class="aastu-action-link-btn">የመገናኛ ቅጽ ይክፈቱ &rarr;</a>
                </div>
            `
        },
        {
            id: 'blog_essays',
            title_en: 'Academic Blog',
            title_am: 'ብሎግ እና ጥናቶች',
            keywords_en: ['blog', 'essay', 'essays', 'article', 'articles', 'reading', 'ai ethics', 'nile', 'grand narrative', 'post-truth', 'creativity'],
            keywords_am: ['ብሎግ', 'ጽሁፍ', 'ጽሁፎች', 'ጥናት', 'አንቀጽ'],
            answer_en: `
                <p><strong>Academic Blog & Faculty Essays:</strong></p>
                <p>Explore scholarly thought pieces published by our faculty, covering topics like AI & Philosophy, Nile Geopolitics, The Post-Truth Age, Modernity, and Ethics in Technology.</p>
                <div class="aastu-bot-action-links">
                    <a href="blog.html" class="aastu-action-link-btn">Read Department Blog &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>አካዳሚክ ብሎግ እና የጥናት ፅሁፎች፡</strong></p>
                <p>በመምህራኖቻችን የተጻፉ የፍልስፍና፣ የቴክኖሎጂ ስነ-ምግባር፣ ዓባይ እና ጂኦፖለቲክስን የተመለከቱ ምርምሮችና ፅሁፎችን ያንብቡ።</p>
                <div class="aastu-bot-action-links">
                    <a href="blog.html" class="aastu-action-link-btn">ብሎጉን ያንብቡ &rarr;</a>
                </div>
            `
        },
        {
            id: 'campus_gallery',
            title_en: 'Photo Gallery',
            title_am: 'የካምፓስ ፎቶዎች',
            keywords_en: ['gallery', 'photo', 'photos', 'picture', 'pictures', 'campus life', 'library', 'images'],
            keywords_am: ['ጋለሪ', 'ፎቶ', 'ምስል', 'ካምፓስ'],
            answer_en: `
                <p><strong>Campus Life & Media Gallery:</strong></p>
                <p>View high-resolution photo highlights of AASTU lecture halls, academic symposia, university library, graduation ceremonies, and student activities.</p>
                <div class="aastu-bot-action-links">
                    <a href="gallery.html" class="aastu-action-link-btn">View Gallery &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>የፎቶ ጋለሪ፡</strong></p>
                <p>የአ.አ.ሳ.ቴ.ዩ ካምፓስ ህይወት፣ የቤተ-መጽሐፍት፣ የሴሚናር እና የተማሪዎችን ፎቶዎች በጋለሪ ገጻችን ይመልከቱ።</p>
                <div class="aastu-bot-action-links">
                    <a href="gallery.html" class="aastu-action-link-btn">ጋለሪውን ይጎብኙ &rarr;</a>
                </div>
            `
        },
        {
            id: 'tests_and_quizzes',
            title_en: 'Practice Quizzes',
            title_am: 'የልምምድ ፈተናዎች',
            keywords_en: ['quiz', 'quizzes', 'test', 'tests', 'exam', 'practice', 'midterm', 'final', 'review'],
            keywords_am: ['ፈተና', 'ጥያቄዎች', 'ልምምድ'],
            answer_en: `
                <p><strong>Interactive Tests & Quizzes:</strong></p>
                <p>We provide instant self-grading interactive chapter quizzes with immediate score calculation and answer explanations for both <strong>PHIL 1009 Logic</strong> and <strong>MCIE 1012 Civics</strong>.</p>
                <div class="aastu-bot-action-links">
                    <a href="mcie1012ch1q.html" class="aastu-action-link-btn">Civics Ch 1 Quiz &rarr;</a>
                    <a href="logic.html" class="aastu-action-link-btn">Logic Chapter Tests &rarr;</a>
                </div>
            `,
            answer_am: `
                <p><strong>የልምምድ ፈተናዎች፡</strong></p>
                <p>ለሎጂክ (PHIL 1009) እና ለስነ-ዜጋ (MCIE 1012) ራስን መመዘኛ በይነ-መረባዊ ጥያቄዎችና መልሶች ተዘጋጅተዋል።</p>
                <div class="aastu-bot-action-links">
                    <a href="mcie1012ch1q.html" class="aastu-action-link-btn">የስነ-ዜጋ ጥያቄዎች &rarr;</a>
                    <a href="logic.html" class="aastu-action-link-btn">የሎጂክ ፖርታል &rarr;</a>
                </div>
            `
        }
    ];

    // ========================================================================
    // 2. STATE & CONFIGURATION
    // ========================================================================
    const STATE = {
        lang: 'en', // 'en' or 'am'
        isOpen: false,
        isTyping: false
    };

    // UI strings by language
    const UI_STRINGS = {
        en: {
            title: 'AASTU Social Desk',
            subtitle: 'Online • FAQ Assistant',
            greetingPill: 'Need help? Ask here! 💬',
            placeholder: 'Type your question (e.g. logic notes, faculty)...',
            quickTitle: 'Common Topics',
            langToggleText: 'አማ',
            welcome: `
                <p>👋 <strong>Welcome to AASTU Social Science Department!</strong></p>
                <p>I am your automated virtual guide. Ask me about courses, lecture notes, faculty, logic/civics portals, or contact info.</p>
            `,
            fallback: `
                <p>🤔 I'm sorry, I couldn't find a direct match for that question in my database.</p>
                <p>For detailed inquiries, grade issues, or academic advising, please contact the department directly:</p>
                <p>✉️ <a href="mailto:social@aastu.edu.et">social@aastu.edu.et</a></p>
                <div class="aastu-bot-action-links">
                    <a href="contact.html" class="aastu-action-link-btn">Open Inquiry Form &rarr;</a>
                    <a href="courses.html" class="aastu-action-link-btn">View All Courses &rarr;</a>
                </div>
            `
        },
        am: {
            title: 'የማህበራዊ ሳይንስ ረዳት',
            subtitle: 'ኦንላይን • አ.አ.ሳ.ቴ.ዩ',
            greetingPill: 'ጥያቄ አለዎት? ይጠይቁ! 💬',
            placeholder: 'ጥያቄዎን እዚህ ይጻፉ (ምሳሌ፡ ሎጂክ፣ ስነ-ዜጋ፣ መምህራን)...',
            quickTitle: 'ተደጋጋሚ ርዕሶች',
            langToggleText: 'EN',
            welcome: `
                <p>👋 <strong>እንኳን ወደ አ.አ.ሳ.ቴ.ዩ የማህበራዊ ሳይንስ ትምህርት ክፍል በደህና መጡ!</strong></p>
                <p>ስለ ኮርሶች፣ የትምህርት ማስታወሻዎች፣ መምህራን፣ የሎጂክ እና ስነ-ዜጋ ፖርታል ወይም አድራሻችን ማንኛውንም ጥያቄ ይጠይቁኝ።</p>
            `,
            fallback: `
                <p>🤔 ይቅርታ፣ ለጠየቁት ጥያቄ ቀጥተኛ መልስ በዳታቤዛችን ውስጥ ማግኘት አልቻልኩም።</p>
                <p>ለተጨማሪ አካዳሚክ መረጃ ወይም አስተያየት እባክዎን በቀጥታ በኢሜይል ያነጋግሩን፡</p>
                <p>✉️ <a href="mailto:social@aastu.edu.et">social@aastu.edu.et</a></p>
                <div class="aastu-bot-action-links">
                    <a href="contact.html" class="aastu-action-link-btn">የመገናኛ ቅጽ &rarr;</a>
                    <a href="courses.html" class="aastu-action-link-btn">ኮርሶችን ይመልከቱ &rarr;</a>
                </div>
            `
        }
    };

    // ========================================================================
    // 3. WIDGET DOM INJECTION
    // Automatically injects the HTML if not already in document
    // ========================================================================
    function injectWidget() {
        if (document.getElementById('aastu-chatbot-container')) {
            return; // Already present
        }

        const container = document.createElement('div');
        container.id = 'aastu-chatbot-container';
        container.innerHTML = `
            <!-- Floating Greeting Pill -->
            <div id="aastu-chat-greeting-pill">
                <span>Need help? Ask here! 💬</span>
            </div>

            <!-- Floating Launcher Toggle Button -->
            <button id="aastu-chat-toggle-btn" aria-label="Open Social Science Department FAQ Chatbot" title="Chat with Department FAQ">
                <span class="aastu-chat-pulse-badge"></span>
                <span class="aastu-icon-open">
                    <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                </span>
                <span class="aastu-icon-close">
                    <svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </span>
            </button>

            <!-- Chat Window -->
            <div id="aastu-chat-window" role="dialog" aria-modal="true" aria-label="Department FAQ Chat">
                <!-- Header -->
                <div class="aastu-chat-header">
                    <div class="aastu-header-info">
                        <div class="aastu-header-avatar">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            </svg>
                        </div>
                        <div class="aastu-header-text">
                            <h3 id="aastu-header-title">AASTU Social Desk</h3>
                            <p id="aastu-header-subtitle"><span class="aastu-online-indicator"></span> Online • FAQ Assistant</p>
                        </div>
                    </div>
                    <div class="aastu-header-actions">
                        <button type="button" id="aastu-lang-toggle" class="aastu-lang-btn" title="Switch Language / ቋንቋ ቀይር">
                            <span id="aastu-lang-label">አማ</span>
                        </button>
                        <button type="button" id="aastu-chat-close-btn" class="aastu-close-btn" aria-label="Close Chat">
                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Messages Container -->
                <div id="aastu-messages-container" class="aastu-chat-messages">
                    <!-- Bot initial welcome message will be rendered here -->
                </div>

                <!-- Quick Replies Section -->
                <div class="aastu-quick-replies-area">
                    <div class="aastu-quick-title" id="aastu-quick-title">
                        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span>Common Topics</span>
                    </div>
                    <div id="aastu-quick-chips" class="aastu-quick-chips">
                        <!-- Populated dynamically based on language -->
                    </div>
                </div>

                <!-- Input Footer -->
                <div class="aastu-chat-footer">
                    <form id="aastu-chat-form" class="aastu-chat-form">
                        <input 
                            type="text" 
                            id="aastu-chat-input" 
                            class="aastu-chat-input" 
                            placeholder="Type your question..." 
                            autocomplete="off"
                            maxlength="200"
                            required
                        >
                        <button type="submit" id="aastu-chat-send" class="aastu-chat-send-btn" aria-label="Send message" title="Send">
                            <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        `;
        document.body.appendChild(container);
    }

    // ========================================================================
    // 4. SMART RULE-BASED MATCHING ENGINE
    // ========================================================================
    /**
     * Cleans and normalizes query text
     */
    function normalizeQuery(text) {
        return text
            .toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    /**
     * Finds the best matching answer based on keyword matches & scoring
     */
    function findBestAnswer(userQuery, lang) {
        const cleanQuery = normalizeQuery(userQuery);
        if (!cleanQuery) return null;

        const words = cleanQuery.split(' ').filter(w => w.length > 1);

        let bestMatch = null;
        let highestScore = 0;

        FAQ_KNOWLEDGE_BASE.forEach(item => {
            let score = 0;

            const primaryKeywords = lang === 'am' ? item.keywords_am : item.keywords_en;
            const secondaryKeywords = lang === 'am' ? item.keywords_en : item.keywords_am;

            // 1. Check primary keywords (higher weight)
            primaryKeywords.forEach(kw => {
                const cleanKw = normalizeQuery(kw);
                if (cleanQuery === cleanKw) {
                    score += 15; // Exact phrase match
                } else if (cleanQuery.includes(cleanKw)) {
                    score += 8 + (cleanKw.length > 4 ? 3 : 0);
                } else {
                    words.forEach(w => {
                        if (cleanKw === w) {
                            score += 5;
                        } else if (cleanKw.includes(w) && w.length >= 4) {
                            score += 2;
                        }
                    });
                }
            });

            // 2. Check secondary keywords (cross-language tolerance)
            secondaryKeywords.forEach(kw => {
                const cleanKw = normalizeQuery(kw);
                if (cleanQuery.includes(cleanKw)) {
                    score += 4;
                }
            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        });

        // Threshold score: 3 points minimum for a credible match
        if (highestScore >= 3 && bestMatch) {
            return {
                match: bestMatch,
                answer: lang === 'am' ? bestMatch.answer_am : bestMatch.answer_en
            };
        }

        return null;
    }

    // ========================================================================
    // 5. UI CONTROLLER & EVENT LISTENERS
    // ========================================================================
    function initChatbot() {
        injectWidget();

        const container = document.getElementById('aastu-chatbot-container');
        const toggleBtn = document.getElementById('aastu-chat-toggle-btn');
        const closeBtn = document.getElementById('aastu-chat-close-btn');
        const greetingPill = document.getElementById('aastu-chat-greeting-pill');
        const messagesBox = document.getElementById('aastu-messages-container');
        const quickChipsBox = document.getElementById('aastu-quick-chips');
        const form = document.getElementById('aastu-chat-form');
        const input = document.getElementById('aastu-chat-input');
        const langToggleBtn = document.getElementById('aastu-lang-toggle');
        const langLabel = document.getElementById('aastu-lang-label');
        const headerTitle = document.getElementById('aastu-header-title');
        const headerSubtitle = document.getElementById('aastu-header-subtitle');
        const quickTitle = document.getElementById('aastu-quick-title');

        // Render Quick Replies Chips
        function renderQuickReplies() {
            quickChipsBox.innerHTML = '';
            // Display first 6 most common quick queries
            FAQ_KNOWLEDGE_BASE.slice(0, 6).forEach(item => {
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'aastu-quick-chip';
                chip.textContent = STATE.lang === 'am' ? item.title_am : item.title_en;
                chip.addEventListener('click', () => {
                    const queryText = STATE.lang === 'am' ? item.title_am : item.title_en;
                    handleUserSubmission(queryText, item.id);
                });
                quickChipsBox.appendChild(chip);
            });
        }

        // Update UI text on Language Change
        function applyLanguage() {
            const strings = UI_STRINGS[STATE.lang];
            headerTitle.textContent = strings.title;
            headerSubtitle.innerHTML = `<span class="aastu-online-indicator"></span> ${strings.subtitle}`;
            input.placeholder = strings.placeholder;
            langLabel.textContent = strings.langToggleText;
            greetingPill.querySelector('span').textContent = strings.greetingPill;
            quickTitle.querySelector('span').textContent = strings.quickTitle;
            renderQuickReplies();
        }

        // Add Initial Bot Message
        function addWelcomeMessage() {
            messagesBox.innerHTML = '';
            appendMessage('bot', UI_STRINGS[STATE.lang].welcome);
        }

        // Format Current Time
        function getCurrentTime() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return `${hours}:${minutes} ${ampm}`;
        }

        // Append Message Row
        function appendMessage(sender, htmlContent) {
            const row = document.createElement('div');
            row.className = `aastu-msg-row ${sender === 'user' ? 'aastu-msg-user' : 'aastu-msg-bot'}`;

            const bubble = document.createElement('div');
            bubble.className = 'aastu-bubble';
            bubble.innerHTML = htmlContent;

            const time = document.createElement('div');
            time.className = 'aastu-msg-time';
            time.textContent = getCurrentTime();

            row.appendChild(bubble);
            row.appendChild(time);
            messagesBox.appendChild(row);

            // Auto-scroll to bottom
            messagesBox.scrollTop = messagesBox.scrollHeight;
        }

        // Show Temporary Typing Dots
        function showTypingIndicator() {
            const typingRow = document.createElement('div');
            typingRow.id = 'aastu-typing-row';
            typingRow.className = 'aastu-typing-row';
            typingRow.innerHTML = `
                <div class="aastu-dot"></div>
                <div class="aastu-dot"></div>
                <div class="aastu-dot"></div>
            `;
            messagesBox.appendChild(typingRow);
            messagesBox.scrollTop = messagesBox.scrollHeight;
            return typingRow;
        }

        function removeTypingIndicator() {
            const ind = document.getElementById('aastu-typing-row');
            if (ind) ind.remove();
        }

        // Process User Query
        function handleUserSubmission(queryText, forcedId) {
            if (!queryText || !queryText.trim()) return;
            const userText = queryText.trim();

            // 1. Render User Message
            appendMessage('user', `<p>${escapeHtml(userText)}</p>`);
            input.value = '';

            // 2. Simulate brief typing delay for natural feel
            showTypingIndicator();

            setTimeout(() => {
                removeTypingIndicator();

                let botReplyHtml = '';

                if (forcedId) {
                    const matchItem = FAQ_KNOWLEDGE_BASE.find(item => item.id === forcedId);
                    if (matchItem) {
                        botReplyHtml = STATE.lang === 'am' ? matchItem.answer_am : matchItem.answer_en;
                    }
                }

                if (!botReplyHtml) {
                    const result = findBestAnswer(userText, STATE.lang);
                    if (result) {
                        botReplyHtml = result.answer;
                    } else {
                        botReplyHtml = UI_STRINGS[STATE.lang].fallback;
                    }
                }

                appendMessage('bot', botReplyHtml);
            }, 380);
        }

        // Helper to escape basic user inputs
        function escapeHtml(str) {
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        }

        // Toggle Chat Window
        function toggleChat() {
            STATE.isOpen = !STATE.isOpen;
            if (STATE.isOpen) {
                container.classList.add('active');
                greetingPill.classList.add('hidden');
                setTimeout(() => input.focus(), 150);
            } else {
                container.classList.remove('active');
            }
        }

        // Toggle Language
        function switchLanguage() {
            STATE.lang = STATE.lang === 'en' ? 'am' : 'en';
            applyLanguage();
            // Append language switch announcement in chat
            const switchMsg = STATE.lang === 'am' 
                ? 'ቋንቋው ወደ <strong>አማርኛ</strong> ተቀይሯል።' 
                : 'Language switched to <strong>English</strong>.';
            appendMessage('bot', `<p>${switchMsg}</p>`);
        }

        // Event Listeners
        toggleBtn.addEventListener('click', toggleChat);
        closeBtn.addEventListener('click', toggleChat);
        greetingPill.addEventListener('click', toggleChat);
        langToggleBtn.addEventListener('click', switchLanguage);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleUserSubmission(input.value);
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && STATE.isOpen) {
                toggleChat();
            }
        });

        // Initialize display
        applyLanguage();
        addWelcomeMessage();
    }

    // Auto initialize once DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }

})();
