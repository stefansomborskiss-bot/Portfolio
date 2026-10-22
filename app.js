/* Stefan Somborski — portfolio. Vanilla JS build (no framework dependency). */
'use strict';

var EXT = {"05bb3f2c63d86cc95dbdedec00307707": "png", "09fb3b8992f2e6f9795d32b2970f5173": "webp", "0dc27d630c1a59611411f05f79931022": "jpg", "19347d493ec3620e802d2707ce13cf4b": "png", "1a00fe60007267f1760684ccc3dfe867": "jpg", "1c5d2f578d9be1a38a87c2503853e1ca": "webp", "269d501efaed9d68fa59949c076cc00b": "jpg", "27df30ae867e8092c62a0391adbab008": "png", "3e81ba959dec2ff7279afbf559a29e9c": "png", "3f77874e827f3b236c17447deecd410a": "png", "486ef1ea26aae8ac0a44d6d85fd2722a": "png", "4e872451cdf1d49f741095d091a45e73": "jpg", "521e1d16f757a58bf0dbf5e13a1ecb0f": "jpg", "5c59dad772168958d9a34d9e3c70cbea": "jpg", "71d968b40c9213715c4e6b6bb4552eff": "jpg", "7c33024e4d852529c0db572df8c978e3": "jpg", "7efff7e2fd047983d7d719ced6c9c881": "jpg", "850f8319ea81a47f85b9fa3e87dbbe45": "png", "8c4e3dee624fd49ffec7ac023e1d7a08": "png", "95612b96435433be2d2c638f1eaf91cf": "jpg", "a59d96cb97fc25be16faffe336d752bf": "jpg", "a67442478d76d79a3809de92046cffdf": "png", "a97869993fffba88cd1c4805924b4fbe": "jpg", "aaf20388ab0419893ab6a56d907e45ac": "jpg", "b4431896ec55fdb04a6e8e94e7255181": "jpg", "c75cec667fca266b07859fd3489ae8e7": "png", "cf4e339241ca1ba45e5163d4fa3c9b47": "jpg", "d134aae0f7e346c9855ce26e523d599b": "jpg", "d29f69c651a960607e4984d9ae06eb2e": "jpg", "d3fe944e4d3aad57ce1244d7f05cc907": "png", "d4b94dbd70bbd5e1fcdf520acb21eb64": "jpg", "de59cbca98639cd435b04c67c6b01f1e": "jpg", "defe82028e84b76a607f6bd148a19801": "jpg", "df4782256c0e0599afcdc2cdc19a6a50": "png", "e03941b7b5ef68dbd03647cbf5c600af": "png", "e27a96292d365a6a7b2999c8adafa8b8": "jpg", "e4a0dce0ba45482fda8f1be4b3a422c3": "jpg", "e72e8fb19f99b34dbfb4c6935f3bceb1": "jpg", "f487bd776e9f27cf2fa7b1b592519a05": "jpg", "f815a56be6e07140d1fcb2929594d3e7": "jpg", "fd2ad9fb24666f7e233faaf9ad88f986": "jpg"};
function B(hash) { return 'img/' + hash + '.' + EXT[hash]; }

var DATA = {
      skills: ['Meta Ads', 'Google Ads', 'CRM & Infobip', 'Brand strategy', 'Creative direction', 'Analytics'],
      kpis: [
        { pre: '', v: 13, suf: '', sr: 'svetskih estetskih brendova', en: 'global aesthetic brands', src: 'MSF Pharm' },
        { pre: '', v: 5, suf: '', sr: 'evropskih tržišta', en: 'European markets', src: 'YoloBook' },
        { pre: '', v: 40000, suf: '+', sr: 'instalacija u prva 3 meseca', en: 'installs in the first 3 months', src: 'FamilyPass' },
        { pre: '+', v: 300, suf: '%', sr: 'rast partnerske mreže za 6 meseci', en: 'partner network growth in 6 months', src: 'FamilyPass' },
        { pre: '+', v: 200, suf: '%', sr: 'promet na Dan zaljubljenih u odnosu na prosek', en: 'revenue on Valentine’s Day vs. average', src: 'YoloBook' }
      ],
      cases: [
        {
          id: 'yolo', n: '01', name: 'YoloBook',
          roleSr: 'Marketing Manager · Yolo Technology', roleEn: 'Marketing Manager · Yolo Technology',
          periodSr: 'Septembar 2022 — avgust 2024 (2 godine)', periodEn: 'September 2022 — August 2024 (2 years)',
          ctxSr: 'Aplikacija za foto-albume i planere na 5 evropskih tržišta. Vodio sam rast i performance marketing zajedno sa internim kreativnim timom i spoljnim IT timom.',
          ctxEn: 'A photo-album and planner app across 5 European markets. I led growth and performance marketing together with an in-house creative team and an external IT team.',
          didSr: 'Postavio sam multi-kanalnu strategiju: Meta i Google Ads uz CRM komunikaciju (Viber, mejl, push preko Infobipa). Kroz stalno A/B testiranje i lokalizovanu kreativu za svako tržište, biralo se šta ostaje u igri.',
          didEn: 'I built a multi-channel strategy: Meta and Google Ads paired with CRM messaging (Viber, email, push via Infobip). Constant A/B testing and localized creative for each market decided what stayed live.',
          budget: '≈ 30.000 €', budSr: 'mesečni marketing budžet', budEn: 'monthly marketing budget',
          results: [
            { val: '+150%', sr: 'rast korisničke baze', en: 'user base growth' },
            { val: '4,5x', sr: 'ROAS', en: 'ROAS' },
            { val: '−22%', sr: 'niži trošak akvizicije (CAC)', en: 'lower acquisition cost (CAC)' },
            { val: '+200%', sr: 'promet na Dan zaljubljenih (2 albuma po ceni 1)', en: 'revenue on Valentine’s Day (2 albums for the price of 1)' }
          ],
          sheet: B('7c33024e4d852529c0db572df8c978e3'), sheetAlt: 'YoloBook vizuelni identitet: logotip, boje i fontovi',
          sheetCapSr: 'Vizuelni identitet brenda.', sheetCapEn: 'The brand’s visual identity.',
          hookSr: 'Rast korisničke baze +150%, ROAS 4,5x.', hookEn: 'User base +150%, 4.5x ROAS.',
          tile: '#C21456',
          theme: { accent: '#B2255C', bg: '#F7DDE7' }
        },
        {
          id: 'fp', n: '02', name: 'FamilyPass',
          roleSr: 'Marketing Manager', roleEn: 'Marketing Manager',
          periodSr: 'Avgust 2024 — avgust 2025 (1 godina)', periodEn: 'August 2024 — August 2025 (1 year)',
          ctxSr: 'Aplikacija koja je krenula od nule. Zajedno sa CEO-om sam od prvog dana postavio i vodio kompletan marketing, u punoj ulozi Marketing Managera.',
          ctxEn: 'An app that started from zero. Together with the CEO, I set up and ran the entire marketing function from day one, in a full Marketing Manager role.',
          didSr: 'Osmislio sam strategiju lansiranja i vodio akviziciju korisnika: B2B partnerstva, influenseri i referral mehanika koji su doveli prve korisnike i partnere.',
          didEn: 'I designed the launch strategy and owned user acquisition: B2B partnerships, influencers and referral mechanics that brought in the first users and partners.',
          budget: '≈ 30.000 €', budSr: 'mesečni marketing budžet', budEn: 'monthly marketing budget',
          results: [
            { val: '40.000+', sr: 'instalacija u prva 3 meseca', en: 'installs in the first 3 months' },
            { val: '+300%', sr: 'rast partnerske mreže za 6 meseci', en: 'partner network growth in 6 months' }
          ],
          sheet: B('f487bd776e9f27cf2fa7b1b592519a05'), sheetAlt: 'FamilyPass vizuelni identitet: logotip, boje i fontovi',
          sheetCapSr: 'Vizuelni identitet brenda.', sheetCapEn: 'The brand’s visual identity.',
          hookSr: '40.000+ instalacija za 3 meseca, od nule.', hookEn: '40,000+ installs in 3 months, from zero.',
          tile: '#5B21B6',
          theme: { accent: '#6A1FA8', bg: '#EBDFF5' }
        },
        {
          id: 'msf', n: '03', name: 'MSF Pharm',
          roleSr: 'Head of Marketing', roleEn: 'Head of Marketing',
          periodSr: 'Avgust 2025 → danas · odgovaram direktno CEO-u', periodEn: 'August 2025 → today · reporting directly to the CEO',
          ctxSr: 'Marketing za 13 vodećih brendova estetske medicine na 6 regionalnih tržišta (Srbija, Hrvatska, Slovenija, BiH, Crna Gora, Severna Makedonija), sa timom od 4 i spoljnim IT timom.',
          ctxEn: 'Marketing for 13 leading aesthetic-medicine brands across 6 regional markets (Serbia, Croatia, Slovenia, Bosnia, Montenegro, North Macedonia), with a team of 4 and an external IT team.',
          didSr: 'Upravljam regionalnim budžetima, kampanjama i društvenim mrežama, koordiniram dobavljače i spoljni IT tim, i vodim razvoj nove mobilne aplikacije za jedan od brendova. Postavio sam GA4 i CRM praćenje tako da se odluke na svim tržištima donose na osnovu podataka.',
          didEn: 'I manage regional budgets, campaigns and social media, coordinate suppliers and an external IT team, and lead the development of a new mobile app for one of the brands. I set up GA4 and CRM tracking so decisions across markets are data-driven.',
          budget: '≈ 15.000 €', budSr: 'mesečni regionalni budžet', budEn: 'monthly regional budget',
          results: [
            { val: '13', sr: 'brendova estetske medicine', en: 'aesthetic-medicine brands' },
            { val: '6', sr: 'regionalnih tržišta', en: 'regional markets' }
          ],
          hookSr: '13 brendova, 6 tržišta, jedan tim.', hookEn: '13 brands, 6 markets, one team.',
          tile: '#0F7A38',
          theme: { accent: '#2E5E50', bg: '#DCE8E1' }
        },
        {
          id: 'zepter', n: '04', name: 'Zepter International',
          roleSr: 'Kreativni zadatak · Head of Creative', roleEn: 'Creative assignment · Head of Creative',
          periodSr: 'Septembar 2026 · konkurs, TherapyAir® Smart', periodEn: 'September 2026 · hiring process, TherapyAir® Smart',
          ctxSr: 'Zadatak iz konkursa za poziciju Head of Creative: kreativni koncept, key visual, print oglas i digitalna primena za prečistač vazduha TherapyAir® Smart, za in-flight magazin Elevate (Air Srbija).',
          ctxEn: 'A hiring-process assignment for the Head of Creative role: a creative concept, key visual, print ad and digital adaptation for the TherapyAir® Smart air purifier, for Air Serbia’s in-flight magazine Elevate.',
          didSr: 'Koncept „Iznad zagađenja“: vazduh na 10.000 metara, prenet u svakodnevni prostor. Pogled kroz avionski prozor iznad oblaka pozicionira proizvod emotivno i premium, umesto kroz specifikaciju. Isti vizuelni sistem sam dosledno prilagodio za print, Instagram objavu i priču.',
          didEn: 'The concept “Above the smog”: air like at 10,000 metres, brought into everyday space. A view through the plane window above the clouds positions the product emotionally and as premium, rather than through specs. I adapted the same visual system consistently for print, an Instagram post and a story.',
          deliverables: [
            { l: 'Key visual', v: '' },
            { l: 'Print oglas · Elevate', v: '192 × 255 mm' },
            { l: 'Instagram Post', v: '1080 × 1350' },
            { l: 'Instagram Story', v: '1080 × 1920' }
          ],
          zshots: [
            { f: 'a59d96cb97fc25be16faffe336d752bf', capSr: 'Key visual', capEn: 'Key visual' },
            { f: '71d968b40c9213715c4e6b6bb4552eff', capSr: 'Print oglas za Elevate', capEn: 'Print ad for Elevate' },
            { f: '7efff7e2fd047983d7d719ced6c9c881', capSr: 'Instagram objava', capEn: 'Instagram post' },
            { f: '5c59dad772168958d9a34d9e3c70cbea', capSr: 'Instagram priča', capEn: 'Instagram story' }
          ],
          hookSr: 'Kreativni zadatak za Head of Creative poziciju.', hookEn: 'A creative assignment for the Head of Creative role.',
          tile: '#0A7A8A',
          theme: { accent: '#1E6B6B', bg: '#DCE9E6' }
        }
      ],
      roles: [
        { id: 'msf', s: 2025.583, e: 3000, w: 1, c: '#0F7A38', org: 'MSF Pharm', dates: '08.2025 → danas', titleSr: 'Head of Marketing', titleEn: 'Head of Marketing',
          sr: 'Vodim marketing za 13 brendova estetske medicine na 6 regionalnih tržišta, u direktnoj saradnji sa CEO-om. Upravljam regionalnim budžetima, kampanjama i društvenim mrežama, koordiniram dobavljače i spoljni IT tim, i vodim razvoj nove mobilne aplikacije. Postavio sam GA4 i CRM praćenje za odlučivanje na osnovu podataka.',
          en: 'I lead marketing for a portfolio of 13 aesthetic medicine brands across six regional markets, working directly with the CEO. I manage regional budgets, campaigns and social media, coordinate suppliers and an external IT team, and lead development of a new mobile app. I set up GA4 and CRM tracking so decisions are based on data.' },
        { id: 'fp', s: 2024.583, e: 2025.583, w: 1, c: '#5B21B6', org: 'FamilyPass', dates: '08.2024 — 08.2025', titleSr: 'Marketing Manager', titleEn: 'Marketing Manager',
          sr: 'Zajedno sa CEO-om, od prvog dana sam postavio i vodio kompletan marketing: 40.000+ instalacija aplikacije u prva 3 meseca i rast partnerske mreže od 300% za 6 meseci kroz B2B saradnju, influensere i referral mehaniku.',
          en: 'Together with the CEO, I set up and ran the entire marketing function from day one: 40,000+ app installs in the first three months, and 300% partner network growth in six months through B2B outreach, influencers and referral mechanics.' },
        { id: 'yolo', s: 2022.667, e: 2024.583, w: 1, c: '#C21456', org: 'YoloBook', dates: '09.2022 — 08.2024', titleSr: 'Marketing Manager · Yolo Technology', titleEn: 'Marketing Manager · Yolo Technology',
          sr: 'Vodio sam rast i performance marketing za YoloBook na 5 tržišta (Srbija, Hrvatska, BiH, Bugarska, Rumunija), uz interni kreativni tim i spoljni IT tim. Rast korisničke baze od 150% kroz Meta, Google i CRM kanale (Viber, mejl, push preko Infobipa), ROAS 4,5x i CAC niži za 22% kroz stalno A/B testiranje i lokalizovanu kreativu.',
          en: 'Led growth and performance marketing for the YoloBook app across 5 markets (Serbia, Croatia, Bosnia, Bulgaria, Romania), together with an in-house creative team and an external IT team. Grew the user base by 150% through Meta, Google and CRM channels (Viber, email, push via Infobip), kept ROAS at 4.5x and cut CAC by 22% through constant A/B testing and localized creatives.' },
        { id: 'raif', s: 2022.0, e: 2022.667, w: 0.5, c: '#8A6A1E', org: 'Raiffeisen banka', dates: '01.2022 — 09.2022', titleSr: 'Brand Specialist', titleEn: 'Brand Specialist',
          sr: 'Jačao sam digitalno prisustvo banke kroz sadržaj za društvene mreže i digitalnu edukaciju klijenata. Izveštavao sam menadžment o angažovanju i zadržavanju klijenata.',
          en: 'Focused on strengthening the bank’s digital presence by producing engaging social media content and educating clients through digital channels. Responsible for reporting engagement and retention insights to management.' },
        { id: 'bombonjera', s: 2018.167, e: 2022.0, w: 1, c: '#9A6207', org: 'Bombonjera', dates: '03.2018 — 01.2022', titleSr: 'Digital Marketing Manager', titleEn: 'Digital Marketing Manager',
          sr: 'Vodio sam digitalnu strategiju od početka do kraja: rast zajednice i sajt-saobraćaja kroz kreativni sadržaj i ciljane kampanje. Upravljao sam saradnjom sa influenserima i optimizacijom plaćenog oglašavanja na osnovu analitike.',
          en: 'Led the end-to-end digital strategy, growing our community and web traffic through creative content and targeted campaigns. Managed influencer relationships and optimized paid advertising spend, using analytics to constantly refine performance and ROI.' },
        { id: 'upw', s: 2015.167, e: 2018.167, w: 0, c: '#0A7A8A', org: 'Upwork', dates: '03.2015 — 03.2018', titleSr: 'Graphic Designer · Freelance', titleEn: 'Graphic Designer · Freelance',
          sr: 'Radio sam kao samostalna agencija: brending i dizajn za raznovrsne međunarodne klijente, od prvog brifa do finalne isporuke, uz strateško vođenje komunikacije i rokova.',
          en: 'Operated as a one-person agency, providing custom branding and design solutions for a diverse range of international clients — managing every project from the initial brief to final delivery, with a strong focus on client communication and deadlines.' },
        { id: 'pan', s: 2012.083, e: 2015.167, w: 0, c: '#71717A', org: 'PAN studio', dates: '02.2012 — 03.2015', titleSr: 'Graphic Designer', titleEn: 'Graphic Designer',
          sr: 'Razvio sam temelje u brendingu, dizajnu ambalaže i pripremi za štampu, uz direktnu saradnju sa štamparijama i visok nivo tačnosti od koncepta do fizičke isporuke.',
          en: 'Built my foundations in branding, packaging design and print production, working directly with printing houses to ensure every brand asset met professional quality standards, from concept to final delivery.' }
      ],
      works: [
        { id: 1, f: 'aaf20388ab0419893ab6a56d907e45ac', cat: 'brand', client: 'KidRide', sr: 'Brendiranje vozila', en: 'Vehicle branding' },
        { id: 2, f: 'e72e8fb19f99b34dbfb4c6935f3bceb1', cat: 'digital', client: 'YoloBook', sr: 'Prikaz aplikacije', en: 'App presentation' },
        { id: 3, f: 'f815a56be6e07140d1fcb2929594d3e7', cat: 'brand', client: 'FamilyPass', sr: 'Dizajn logotipa', en: 'Logo design' },
        { id: 4, f: 'd134aae0f7e346c9855ce26e523d599b', cat: 'product', client: 'YoloBook', sr: 'Dizajn korica', en: 'Cover design' },
        { id: 5, f: '269d501efaed9d68fa59949c076cc00b', cat: 'brand', client: 'MAS Construction', sr: 'Vizuelni identitet', en: 'Visual identity' },
        { id: 6, f: 'e4a0dce0ba45482fda8f1be4b3a422c3', cat: 'brand', client: 'FamilyPass', sr: 'Dizajn nalepnica', en: 'Sticker design' },
        { id: 7, f: '521e1d16f757a58bf0dbf5e13a1ecb0f', cat: 'product', client: 'YoloBook', sr: 'Dizajn foto-albuma', en: 'Photo album design' },
        { id: 9, f: 'd4b94dbd70bbd5e1fcdf520acb21eb64', cat: 'product', client: 'YoloBook', sr: 'Dizajn planera', en: 'Planner design' },
        { id: 11, f: '0dc27d630c1a59611411f05f79931022', cat: 'brand', client: 'Mason Lily', sr: 'Dizajn vizitkarti', en: 'Business card design' },
        { id: 12, f: 'cf4e339241ca1ba45e5163d4fa3c9b47', cat: 'brand', client: 'KidRide', sr: 'Brendiranje vozila', en: 'Vehicle branding' },
        { id: 13, f: 'a97869993fffba88cd1c4805924b4fbe', cat: 'product', client: '', sr: 'Dizajn ambalaže', en: 'Packaging design' },
        { id: 14, f: 'e27a96292d365a6a7b2999c8adafa8b8', cat: 'digital', client: 'FamilyPass', sr: 'Prikaz aplikacije', en: 'App presentation' },
        { id: 16, f: 'de59cbca98639cd435b04c67c6b01f1e', cat: 'product', client: 'YoloBook', sr: 'Dizajn korica', en: 'Cover design' },
        { id: 17, f: 'defe82028e84b76a607f6bd148a19801', cat: 'product', client: 'YoloBook', sr: 'Dizajn planera', en: 'Planner design' },
        { id: 18, f: 'fd2ad9fb24666f7e233faaf9ad88f986', cat: 'product', client: 'YoloBook', sr: 'Dizajn planera', en: 'Planner design' },
        { id: 19, f: '95612b96435433be2d2c638f1eaf91cf', cat: 'product', client: '', sr: 'Dizajn poklon-pakovanja', en: 'Gift packaging design' },
        { id: 20, f: '4e872451cdf1d49f741095d091a45e73', cat: 'product', client: 'Neurogum', sr: 'Dizajn ambalaže', en: 'Packaging design' },
        { id: 21, f: '1a00fe60007267f1760684ccc3dfe867', cat: 'product', client: 'YoloBook', sr: 'Dizajn korica', en: 'Cover design' },
        { id: 23, f: 'b4431896ec55fdb04a6e8e94e7255181', cat: 'product', client: 'YoloBook', sr: 'Dizajn korica', en: 'Cover design' },
        { id: 24, f: '09fb3b8992f2e6f9795d32b2970f5173', cat: 'brand', client: '3-5-2 Football Shop', sr: 'Enterijer i signalizacija radnje', en: 'Store interior and signage' },
        { id: 25, f: '1c5d2f578d9be1a38a87c2503853e1ca', cat: 'brand', client: '3-5-2 Football Shop', sr: 'Radnja u Tržnom centru Galerija', en: 'Store at the Galerija shopping mall' }
      ],
      identities: [
        { img: B('7c33024e4d852529c0db572df8c978e3'), name: 'YoloBook', sr: 'Vizuelni identitet: logotip, boje i tipografija.', en: 'Visual identity: logo, colors and typography.', sw: ['#B2255C', '#FDACCA', '#018FD6'] },
        { img: B('f487bd776e9f27cf2fa7b1b592519a05'), name: 'FamilyPass', sr: 'Vizuelni identitet: logotip, boje i tipografija.', en: 'Visual identity: logo, colors and typography.', sw: ['#4D1186', '#FF9041', '#FFD847'] },
        { img: B('09fb3b8992f2e6f9795d32b2970f5173'), name: '3-5-2 Football Shop', sr: 'Logotip i vizuelni identitet radnje u Tržnom centru Galerija.', en: 'Logo and visual identity for the store at the Galerija shopping mall.', sw: ['#111111', '#FFFFFF'] },
        { img: B('cf4e339241ca1ba45e5163d4fa3c9b47'), name: 'KidRide', sr: 'Logotip i celokupan vizuelni identitet, uključujući brendiranje vozila.', en: 'Logo and full visual identity, including vehicle branding.', sw: ['#7857A4', '#D7BB41'] },
        { img: B('0dc27d630c1a59611411f05f79931022'), name: 'Mason Lily', sr: 'Logotip i celokupan vizuelni identitet, uključujući dizajn vizit karti.', en: 'Logo and full visual identity, including business card design.', sw: ['#171717', '#EDEAE4'] }
      ],
      msfLogos: [
        { f: 'a67442478d76d79a3809de92046cffdf', name: 'Revanesse' },
        { f: 'c75cec667fca266b07859fd3489ae8e7', name: 'SoftFil' },
        { f: '27df30ae867e8092c62a0391adbab008', name: 'Candela' },
        { f: 'e03941b7b5ef68dbd03647cbf5c600af', name: 'Venus' },
        { f: '05bb3f2c63d86cc95dbdedec00307707', name: 'Neogen' },
        { f: '8c4e3dee624fd49ffec7ac023e1d7a08', name: 'Dermapenworld' },
        { f: 'd3fe944e4d3aad57ce1244d7f05cc907', name: 'mesoestetic' },
        { f: '3f77874e827f3b236c17447deecd410a', name: 'Aptos' },
        { f: 'df4782256c0e0599afcdc2cdc19a6a50', name: 'aesPLLA' },
        { f: '19347d493ec3620e802d2707ce13cf4b', name: 'Préime' },
        { f: '486ef1ea26aae8ac0a44d6d85fd2722a', name: 'Neostrata' },
        { f: '850f8319ea81a47f85b9fa3e87dbbe45', name: 'Regenlab' },
        { f: '3e81ba959dec2ff7279afbf559a29e9c', name: 'Canfield' }
      ],
      steps: [
        { id: 'strategy', n: '01', titleSr: 'Prvo publika i cilj.', titleEn: 'Audience and goal first.',
          sr: 'Polazim od toga ko je publika, šta biznis želi da postigne i šta pokazuju podaci. Iz toga se vidi gde brend može da napravi razliku.',
          en: 'I start with who the audience is, what the business wants to achieve and what the data says. That shows where the brand can make a difference.',
          tagsSr: 'Publika · pozicioniranje · plan kanala', tagsEn: 'Audience · positioning · channel plan' },
        { id: 'creative', n: '02', titleSr: 'Zatim ideja i izgled.', titleEn: 'Then the idea and the look.',
          sr: 'Strategiju pretvaram u vizuelni identitet, koncepte kampanja i kreativu prilagođenu svakom kanalu.',
          en: 'I turn the strategy into a visual identity, campaign concepts and creative made for each channel.',
          tagsSr: 'Vizuelni identitet · oglasna kreativa · sadržaj', tagsEn: 'Brand identity · ad creative · content' },
        { id: 'growth', n: '03', titleSr: 'Pa merenje i popravke.', titleEn: 'Then measure and fix.',
          sr: 'Plaćene kanale povezujem sa CRM-om, poredim učinak kreative i po podacima o akviziciji i prihodu biram sledeći potez.',
          en: 'I connect paid channels to CRM, compare creative performance and use acquisition and revenue data to pick the next move.',
          tagsSr: 'Meta i Google · CRM · optimizacija', tagsEn: 'Meta and Google · CRM · optimization' }
      ]
    };

/* ---------- state ---------- */
var state = {
  lang: 'sr', active: 'yolo', appr: 'strategy', activeRole: 'msf', filter: 'all',
  lb: null, zlb: null, sheetLb: false, topic: 'strategy',
  name: '', company: '', msg: '', copied: false
};

function setState(patch) {
  Object.assign(state, patch);
  render();
}

/* ---------- helpers ---------- */
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function L(sr, en) { return state.lang === 'en' ? en : sr; }
function bi(sr, en) {
  // bilingual inline span pair, matches original <span class="sr">/<span class="en"> pattern
  return '<span class="sr">' + sr + '</span><span class="en">' + en + '</span>';
}
function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }

/* ---------- derived view-model (recomputed on every render) ---------- */
function computeVM() {
  var st = state;
  var en = st.lang === 'en';
  var D = DATA;

  var ac0 = D.cases.find(function (c) { return c.id === st.active; }) || D.cases[0];
  var zshots = (ac0.zshots || []).map(function (z) { return { img: B(z.f), alt: L(z.capSr, z.capEn), capSr: z.capSr, capEn: z.capEn }; });
  var zKey = (ac0.zshots || [])[0];

  var visible = D.works.filter(function (w) { return st.filter === 'all' || w.cat === st.filter; });
  var lbIdx = visible.findIndex(function (w) { return w.id === st.lb; });
  var lbw = lbIdx >= 0 ? visible[lbIdx] : null;

  var zCur = st.zlb != null ? zshots[st.zlb] : null;

  return { en: en, D: D, ac0: ac0, zshots: zshots, zKey: zKey, visible: visible, lbIdx: lbIdx, lbw: lbw, zCur: zCur };
}

/* ---------- career timeline lane packing (pure function of static data) ---------- */
function computeTimeline() {
  var TL_START = 2012, TL_END = 2026.9;
  var TL_SPAN = TL_END - TL_START;
  var LANE_H = 60, LANE_GAP = 10;
  var byStart = DATA.roles.slice().sort(function (a, b) { return a.s - b.s; });
  var laneEnd = [];
  var laned = byStart.map(function (r) {
    var e = Math.min(r.e, TL_END);
    var lane = laneEnd.findIndex(function (end) { return end <= r.s + 0.03; });
    if (lane === -1) { lane = laneEnd.length; laneEnd.push(e); } else { laneEnd[lane] = e; }
    return { r: r, lane: lane, e: e };
  });
  var laneCount = Math.max(1, laneEnd.length);
  var bars = laned.map(function (o) {
    var r = o.r, lane = o.lane, e = o.e;
    var left = ((r.s - TL_START) / TL_SPAN) * 100;
    var width = Math.max(((e - r.s) / TL_SPAN) * 100, 4);
    var style = 'left:' + left.toFixed(2) + '%;width:' + width.toFixed(2) + '%;top:' + (lane * (LANE_H + LANE_GAP)) + 'px;height:' + LANE_H + 'px;background:' + r.c;
    return { id: r.id, org: r.org, dates: r.dates, style: style };
  });
  var height = (laneCount * LANE_H + (laneCount - 1) * LANE_GAP) + 'px';
  return { bars: bars, height: height };
}

/* ---------- render: each function returns an HTML string ---------- */

function renderKpis(kp) {
  return DATA.kpis.map(function (k) {
    var text = k.pre + fmt(Math.round(k.v * kp)) + k.suf;
    return '<div class="kpi"><div class="kn">' + esc(text) + '</div>' +
      '<div class="kl">' + bi(esc(k.sr), esc(k.en)) + '</div>' +
      '<div class="ks mono">' + esc(k.src) + '</div></div>';
  }).join('');
}

function renderCaseCards(vm) {
  return DATA.cases.map(function (c) {
    var on = state.active === c.id;
    return '<button class="pcard ' + (on ? 'on' : '') + '" style="background:' + c.tile + '" aria-pressed="' + on + '" data-act="case" data-id="' + c.id + '">' +
      '<span class="pn">' + c.n + '</span>' +
      '<span class="par" aria-hidden="true">↗</span>' +
      '<span class="pname">' + esc(c.name) + '</span>' +
      '<span class="pmeta">' + bi(esc(c.roleSr), esc(c.roleEn)) + '</span>' +
      '<span class="phook">' + bi(esc(c.hookSr), esc(c.hookEn)) + '</span>' +
      '</button>';
  }).join('');
}

function renderCasePanel(vm) {
  var ac0 = vm.ac0;
  var hasBudget = !!ac0.budget;
  var hasResults = !!(ac0.results && ac0.results.length);
  var isMsf = ac0.id === 'msf';
  var isZepter = ac0.id === 'zepter';
  var hasSheet = !!ac0.sheet;
  var caseStyle = '--accent:' + ac0.theme.accent + ';--cbg:' + ac0.theme.bg;

  var html = '<div class="cpanel" role="region" aria-label="' + esc(ac0.name) + '" style="' + caseStyle + '">';
  html += '<div class="chead"><div class="big accent">' + esc(ac0.name) + '</div>' +
    '<div class="who mono">' + bi(esc(ac0.roleSr), esc(ac0.roleEn)) + '<br>' + bi(esc(ac0.periodSr), esc(ac0.periodEn)) + '</div></div>';

  html += '<div>';
  html += '<div class="blk"><span class="lab mono">' + bi('Kontekst', 'Context') + '</span><p>' + bi(esc(ac0.ctxSr), esc(ac0.ctxEn)) + '</p></div>';
  html += '<div class="blk"><span class="lab mono">' + bi('Moj udeo', 'What I did') + '</span><p>' + bi(esc(ac0.didSr), esc(ac0.didEn)) + '</p></div>';
  if (hasBudget) {
    html += '<div class="blk"><span class="lab mono">' + bi('Budžet', 'Budget') + '</span>' +
      '<div class="bud"><span class="bv accent">' + esc(ac0.budget) + '</span><span class="bn">' + bi(esc(ac0.budSr), esc(ac0.budEn)) + '</span></div></div>';
  }
  if (hasResults) {
    html += '<div class="blk"><span class="lab mono">' + bi('Rezultati', 'Results') + '</span><div class="stats">';
    html += ac0.results.map(function (r) {
      return '<div class="stat"><div class="sv accent">' + esc(r.val) + '</div><div class="sl">' + bi(esc(r.sr), esc(r.en)) + '</div></div>';
    }).join('');
    html += '</div></div>';
  }
  if (isZepter) {
    html += '<div class="blk"><span class="lab mono">' + bi('Isporuke', 'Deliverables') + '</span><div class="stats">';
    html += ac0.deliverables.map(function (d) {
      return '<div class="dlv"><span>' + esc(d.l) + '</span><span class="mono">' + esc(d.v) + '</span></div>';
    }).join('');
    html += '</div></div>';
  }
  html += '</div>';

  html += '<div class="vis">';
  if (hasSheet) {
    html += '<button class="sheet" data-act="sheet-open"><img src="' + ac0.sheet + '" alt="' + esc(ac0.sheetAlt) + '"><span class="hint mono">' + bi('Klikni za uvećanje', 'Click to enlarge') + '</span></button>' +
      '<div class="cap">' + bi(esc(ac0.sheetCapSr), esc(ac0.sheetCapEn)) + '</div>';
  }
  if (isMsf) {
    html += '<div class="logowall">' + DATA.msfLogos.map(function (b) {
      return '<div class="logotile"><img src="' + B(b.f) + '" alt="' + esc(b.name) + '"></div>';
    }).join('') + '</div>';
    html += '<div class="cap">' + bi('Deo brendova iz portfolija MSF Pharm.', 'A selection of brands from the MSF Pharm portfolio.') + '</div>';
  }
  if (isZepter) {
    var zKey = vm.zKey;
    var zKeyImg = zKey ? B(zKey.f) : '';
    var zKeyAlt = zKey ? L(zKey.capSr, zKey.capEn) : '';
    html += '<button class="sheet" data-act="zshots-open"><img src="' + zKeyImg + '" alt="' + esc(zKeyAlt) + '"><span class="hint mono">' + bi('Klikni za ceo projekat', 'Click for the full project') + '</span></button>' +
      '<div class="cap">' + bi('Key visual · klikni da vidiš sve materijale.', 'Key visual · click to see all the materials.') + '</div>';
  }
  html += '</div></div>';
  return html;
}

function renderTimeline() {
  var tl = computeTimeline();
  var bars = tl.bars.map(function (b) {
    var on = state.activeRole === b.id;
    return '<a class="tl-bar ' + (on ? 'on' : '') + '" href="#role-' + b.id + '" style="' + b.style + '" data-act="role" data-id="' + b.id + '">' +
      '<span class="tn">' + esc(b.org) + '</span><span class="td">' + esc(b.dates) + '</span></a>';
  }).join('');
  var roles = DATA.roles.map(function (r) {
    var on = state.activeRole === r.id;
    return '<article class="role ' + (on ? 'on' : '') + '" id="role-' + r.id + '">' +
      '<div class="rd mono">' + esc(r.dates) + '</div><h3>' + esc(r.org) + '</h3>' +
      '<div class="rt">' + bi(esc(r.titleSr), esc(r.titleEn)) + '</div>' +
      '<p>' + bi(esc(r.sr), esc(r.en)) + '</p></article>';
  }).join('');
  return '<div class="tl-scroll"><div class="tl-inner" style="--tlh:' + tl.height + '">' +
    '<div class="tl-track">' + bars + '</div>' +
    '<div class="tl-axis mono"><span>2012</span><span>2015</span><span>2018</span><span>2021</span><span>2024</span><span>2026</span></div>' +
    '</div></div><div class="roles">' + roles + '</div>';
}

function renderGallery(vm) {
  var cats = [
    { id: 'all', sr: 'Sve', en: 'All' },
    { id: 'brand', sr: 'Vizuelni identitet', en: 'Brand identity' },
    { id: 'digital', sr: 'Aplikacije', en: 'Apps' },
    { id: 'product', sr: 'Proizvodi i ambalaža', en: 'Products and packaging' }
  ];
  var filters = cats.map(function (c) {
    var on = state.filter === c.id;
    return '<button class="chip ' + (on ? 'on' : '') + '" aria-pressed="' + on + '" data-act="filter" data-id="' + c.id + '">' + bi(esc(c.sr), esc(c.en)) + '</button>';
  }).join('');
  var items = vm.visible.map(function (w) {
    var alt = (w.client ? w.client + ', ' : '') + L(w.sr, w.en);
    return '<button class="art" data-act="lb-open" data-id="' + w.id + '">' +
      '<span class="im"><img src="' + B(w.f) + '" alt="' + esc(alt) + '" loading="lazy"></span>' +
      '<span class="cp"><span><b>' + esc(w.client) + '</b> ' + bi(esc(w.sr), esc(w.en)) + '</span><span aria-hidden="true">↗</span></span></button>';
  }).join('');
  return '<div class="filters" role="group" aria-label="Filter">' + filters + '</div><div class="masonry">' + items + '</div>';
}

function renderIdentities() {
  return DATA.identities.map(function (i) {
    var sw = i.sw.map(function (c) { return '<span class="sw" style="background:' + c + '"></span>'; }).join('');
    return '<div class="idcard"><div class="idimg"><img src="' + i.img + '" alt="' + esc(i.name) + '" loading="lazy"></div>' +
      '<div class="idname">' + esc(i.name) + '</div>' +
      '<p class="idp">' + bi(esc(i.sr), esc(i.en)) + '</p>' +
      '<div class="swrow">' + sw + '</div></div>';
  }).join('');
}

function renderApproach() {
  return DATA.steps.map(function (s) {
    var on = state.appr === s.id;
    return '<button class="acard ' + (on ? 'on' : '') + '" data-act="appr" data-id="' + s.id + '" aria-expanded="' + on + '">' +
      '<span class="an">' + s.n + '</span><span>' +
      '<span class="ttl">' + bi(esc(s.titleSr), esc(s.titleEn)) + '</span>' +
      '<span class="abody" style="display:block"><span class="pp">' + bi(esc(s.sr), esc(s.en)) + '</span>' +
      '<span class="tags mono">' + bi(esc(s.tagsSr), esc(s.tagsEn)) + '</span></span></span></button>';
  }).join('');
}

function contactSubjectBody() {
  var topicDefs = [
    { id: 'strategy', sr: 'Strategija digitalnog marketinga', en: 'Digital marketing strategy' },
    { id: 'creative', sr: 'Brending i kreativa', en: 'Branding and creative' },
    { id: 'collab', sr: 'Predlog za saradnju', en: 'Collaboration proposal' }
  ];
  var td = topicDefs.find(function (t) { return t.id === state.topic; }) || topicDefs[0];
  var en = state.lang === 'en';
  var subject = L(td.sr, td.en);
  var nm = state.name.trim();
  var co = state.company.trim();
  var body = en
    ? 'Hi Stefan,\n\nMy name is ' + (nm || '[name]') + (co ? ' and I am with ' + co : '') + '.\n\n' + (state.msg.trim() || '[a few sentences on what you need]') + '\n\nBest,\n' + (nm || '')
    : 'Zdravo Stefane,\n\nZovem se ' + (nm || '[ime]') + (co ? ', iz kompanije ' + co : '') + '.\n\n' + (state.msg.trim() || '[nekoliko rečenica o tome šta ti treba]') + '\n\nPozdrav,\n' + (nm || '');
  var mailHref = 'mailto:stefansomborski.ss@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  var preview = L('Predmet: ', 'Subject: ') + subject + '\n\n' + body;
  return { topicDefs: topicDefs, mailHref: mailHref, preview: preview };
}

function renderContact() {
  var cb = contactSubjectBody();
  var chips = cb.topicDefs.map(function (t) {
    var on = state.topic === t.id;
    return '<button class="chip ' + (on ? 'on' : '') + '" aria-pressed="' + on + '" data-act="topic" data-id="' + t.id + '">' + bi(esc(t.sr), esc(t.en)) + '</button>';
  }).join('');
  var copySr = state.copied ? 'Mejl kopiran ✓' : 'Kopiraj mejl adresu';
  var copyEn = state.copied ? 'Email copied ✓' : 'Copy email address';

  return '<div class="wrap cgrid2">' +
    '<div><div class="eyebrow mono"><b style="background:#87868C"></b>06 / ' + bi('Kontakt', 'Contact') + '</div>' +
    '<h2 class="h2">' + bi('Hajde da <em>razgovaramo</em>.', "Let's <em>talk</em>.") + '</h2>' +
    '<p class="sec-note">' + bi('Napiši u dve-tri rečenice šta gradiš i šta ti treba. Ostalo ćemo na razgovoru. Beograd, otvoren za međunarodnu saradnju.', 'Write two or three sentences on what you are building and what you need. We can cover the rest on a call. Based in Belgrade, open to international work.') + '</p>' +
    '<div class="clinks">' +
    '<a href="mailto:stefansomborski.ss@gmail.com"><span>stefansomborski.ss@gmail.com</span><span aria-hidden="true">↗</span></a>' +
    '<a href="tel:+381652895579"><span>+381 65 289 5579</span><span aria-hidden="true">↗</span></a>' +
    '<a href="https://www.linkedin.com/in/stefansomborski/" target="_blank" rel="noreferrer"><span>LinkedIn</span><span aria-hidden="true">↗</span></a>' +
    '<button data-act="copy-mail"><span>' + bi(copySr, copyEn) + '</span><span aria-hidden="true">⧉</span></button>' +
    '</div></div>' +
    '<div class="form">' +
    '<span class="lab mono">' + bi('Na čemu ćemo raditi?', 'What shall we work on?') + '</span>' +
    '<div class="chips">' + chips + '</div>' +
    '<label class="fld"><span class="mono">' + bi('Tvoje ime', 'Your name') + '</span><input type="text" id="fld-name" autocomplete="name"></label>' +
    '<label class="fld"><span class="mono">' + bi('Kompanija', 'Company') + '</span><input type="text" id="fld-company" autocomplete="organization"></label>' +
    '<label class="fld"><span class="mono">' + bi('Poruka', 'Message') + '</span><textarea id="fld-msg"></textarea></label>' +
    '<div class="prev" id="mail-preview"><b>' + bi('Ovako će izgledati mejl', 'Your email will look like this') + '</b>' + esc(cb.preview) + '</div>' +
    '<div class="frow"><a class="btn" id="mail-open-link" href="' + cb.mailHref + '">' + bi('Otvori u mejlu', 'Open in email') + '<span aria-hidden="true">↗</span></a></div>' +
    '</div></div>';
}

function renderLightboxes(vm) {
  var html = '';
  if (vm.lbw) {
    var lbw = vm.lbw;
    html += '<div class="lb" role="dialog" aria-modal="true" aria-label="Pregled rada">' +
      '<div class="top mono"><span>' + (vm.lbIdx + 1) + ' / ' + vm.visible.length + '</span><button data-act="lb-close">' + bi('Zatvori ×', 'Close ×') + '</button></div>' +
      '<img src="' + B(lbw.f) + '" alt="' + esc(L(lbw.sr, lbw.en)) + '">' +
      '<div class="bot"><button data-act="lb-prev" aria-label="Prethodna / Previous">←</button>' +
      '<span style="text-align:center"><b>' + esc(lbw.client) + '</b> ' + bi(esc(lbw.sr), esc(lbw.en)) + '</span>' +
      '<button data-act="lb-next" aria-label="Sledeća / Next">→</button></div></div>';
  }
  if (vm.zCur) {
    html += '<div class="lb" role="dialog" aria-modal="true" aria-label="Zepter koncept">' +
      '<div class="top mono"><span>' + (state.zlb + 1) + ' / ' + vm.zshots.length + '</span><button data-act="z-close">' + bi('Zatvori ×', 'Close ×') + '</button></div>' +
      '<img src="' + vm.zCur.img + '" alt="' + esc(vm.zCur.alt) + '">' +
      '<div class="bot"><button data-act="z-prev" aria-label="Prethodna / Previous">←</button>' +
      '<span style="text-align:center">' + bi(esc(vm.zCur.capSr), esc(vm.zCur.capEn)) + '</span>' +
      '<button data-act="z-next" aria-label="Sledeća / Next">→</button></div></div>';
  }
  if (state.sheetLb) {
    html += '<div class="lb" role="dialog" aria-modal="true" aria-label="Uvećan prikaz">' +
      '<div class="top mono"><span></span><button data-act="sheet-close">' + bi('Zatvori ×', 'Close ×') + '</button></div>' +
      '<img src="' + vm.ac0.sheet + '" alt="' + esc(vm.ac0.sheetAlt) + '">' +
      '<div class="bot"><span style="text-align:center;width:100%">' + bi(esc(vm.ac0.sheetCapSr), esc(vm.ac0.sheetCapEn)) + '</span></div></div>';
  }
  return html;
}

/* ---------- master render ---------- */
function render() {
  var vm = computeVM();
  var en = vm.en;

  var html = '<div class="site ' + (en ? 'lang-en' : 'lang-sr') + '" id="top">';

  html += '<header class="hdr"><div class="wrap hdr-in">' +
    '<a class="brand" href="#top" aria-label="Stefan Somborski"><span class="mark" aria-hidden="true">SS</span>Stefan Somborski</a>' +
    '<nav class="nav" aria-label="Glavna navigacija">' +
    '<a href="#projekti">' + bi('Projekti', 'Projects') + '</a>' +
    '<a href="#put">' + bi('Put', 'Journey') + '</a>' +
    '<a href="#radovi">' + bi('Radovi', 'Work') + '</a>' +
    '<a href="#identiteti">' + bi('Identiteti', 'Identities') + '</a>' +
    '<a href="#pristup">' + bi('Pristup', 'Approach') + '</a>' +
    '</nav>' +
    '<div class="hdr-r"><div class="lang" role="group" aria-label="Jezik / Language">' +
    '<button class="' + (en ? '' : 'on') + '" aria-pressed="' + (!en) + '" data-act="lang" data-id="sr">SR</button>' +
    '<button class="' + (en ? 'on' : '') + '" aria-pressed="' + en + '" data-act="lang" data-id="en">EN</button>' +
    '</div><a class="btn sm" href="#kontakt">' + bi('Javi se', 'Get in touch') + '</a></div>' +
    '</div></header>';

  html += '<section class="wrap hero"><div>' +
    '<div class="eyebrow mono"><b></b>' + bi('Beograd · Digitalni marketing i kreativna strategija', 'Belgrade · Digital marketing and creative strategy') + '</div>' +
    '<h1 class="h1">' + bi('Gradim brendove koji <em>rastu</em>.', 'I build brands that <em>grow</em>.') + '</h1>' +
    '<p class="lede">' + bi('Od 2012. radim na tome da brend bude lep i da se zbog toga bolje prodaje. Počeo sam u štampi i dizajnu ambalaže, a danas vodim digitalni marketing za 13 svetskih estetskih brendova.', 'Since 2012 I have been making brands look good and sell better. I started in print and packaging design, and today I lead digital marketing for 13 global aesthetic brands.') + '</p>' +
    '<div class="ctas"><a class="btn" href="#projekti">' + bi('Pogledaj projekte', 'See the projects') + '<span aria-hidden="true">↓</span></a>' +
    '<a class="btn ghost" href="#kontakt">' + bi('Kontakt', 'Contact') + '</a></div></div>' +
    '<div class="portrait"><div class="ring"></div>' +
    '<div class="frame"><img src="' + B('d29f69c651a960607e4984d9ae06eb2e') + '" alt="Stefan Somborski"></div>' +
    '<div class="chip-live"><span class="t"><span class="pulse"></span>Head of Marketing</span><span class="s">MSF Pharm · 2025 →</span></div>' +
    '</div></section>';

  html += '<div class="marq" aria-hidden="true"><div class="track">' +
    DATA.skills.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') +
    DATA.skills.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') +
    '</div></div>';

  html += '<section class="wrap" aria-label="Brojke"><div class="kpis">' + renderKpis(state.kp == null ? 1 : state.kp) + '</div></section>';

  html += '<section class="sec" id="projekti"><div class="wrap">' +
    '<div class="sec-head"><div><div class="eyebrow mono"><b></b>01 / ' + bi('Projekti', 'Projects') + '</div>' +
    '<h2 class="h2">' + bi('Tri posla i <em>jedan</em> zadatak.', 'Three jobs, <em>and</em> one assignment.') + '</h2></div>' +
    '<p class="sec-note">' + bi('Klikni na karticu da otvoriš ceo projekat ispod.', 'Click a card to open the full project below.') + '</p></div>' +
    '<div class="pgrid" role="group" aria-label="Projekti">' + renderCaseCards(vm) + '</div>' +
    renderCasePanel(vm) +
    '</div></section>';

  html += '<section class="wrap sec" id="put">' +
    '<div class="sec-head"><div><div class="eyebrow mono"><b></b>02 / ' + bi('Put', 'Journey') + '</div>' +
    '<h2 class="h2">' + bi('Karijera, iz <em>ptičje</em> perspektive.', "My career, from a <em>bird's-eye</em> view.") + '</h2></div>' +
    '<p class="sec-note">' + bi('Svaka traka je jedna uloga, širina prikazuje koliko je trajala. Klikni na traku da otvoriš njen opis ispod.', 'Each bar is one role, sized by how long it lasted. Click a bar to jump to its description below.') + '</p></div>' +
    renderTimeline() +
    '</section>';

  html += '<section class="wrap sec" id="radovi" style="padding-top:0">' +
    '<div class="sec-head"><div><div class="eyebrow mono"><b></b>03 / ' + bi('Radovi', 'Work') + '</div>' +
    '<h2 class="h2">' + bi('Iz arhive: brendovi, aplikacije, <em>ambalaža</em>.', 'From the archive: brands, apps, <em>packaging</em>.') + '</h2></div>' +
    '<p class="sec-note">' + bi('Radovi za klijente. Klikni na sliku da je otvoriš u punoj veličini.', 'Work for clients. Click an image to open it full size.') + '</p></div>' +
    renderGallery(vm) +
    '</section>';

  html += renderLightboxes(vm);

  html += '<section class="wrap sec" id="identiteti" style="padding-top:0">' +
    '<div class="sec-head"><div><div class="eyebrow mono"><b></b>04 / ' + bi('Identiteti', 'Identities') + '</div>' +
    '<h2 class="h2">' + bi('Logotipi i <em>sistemi</em> koje sam gradio.', "Logos and <em>systems</em> I've built.") + '</h2></div>' +
    '<p class="sec-note">' + bi('Pet brendova, od aplikacija i prodavnice do flote vozila i vizit karti.', 'Five brands, from apps and a storefront to a vehicle fleet and business cards.') + '</p></div>' +
    '<div class="idgrid">' + renderIdentities() + '</div>' +
    '</section>';

  html += '<section class="wrap sec" id="pristup" style="padding-top:0">' +
    '<div class="sec-head"><div><div class="eyebrow mono"><b></b>05 / ' + bi('Pristup', 'Approach') + '</div>' +
    '<h2 class="h2">' + bi('Kako radim, u <em>tri</em> koraka.', 'How I work, in <em>three</em> steps.') + '</h2></div>' +
    '<p class="sec-note">' + bi('Dizajn i marketing nisu dva odvojena posla. Isti proces ih vodi.', 'Design and marketing are not two separate jobs. One process runs both.') + '</p></div>' +
    '<div class="appr">' + renderApproach() + '</div>' +
    '</section>';

  html += '<section class="contact sec" id="kontakt">' + renderContact() + '</section>';

  html += '<footer class="foot mono"><div class="wrap" style="display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;width:100%">' +
    '<span>© 2026 Stefan Somborski</span>' +
    '<a href="#top">' + bi('Nazad na vrh', 'Back to top') + ' ↑</a>' +
    '</div></footer>';

  html += '</div>';

  var root = document.getElementById('app');
  root.innerHTML = html;

  /* restore uncontrolled field values after re-render (lang toggle, topic pick, etc. can blur mid-typing — this keeps the typed text intact even if focus is lost) */
  var fn = document.getElementById('fld-name'); if (fn) fn.value = state.name;
  var fc = document.getElementById('fld-company'); if (fc) fc.value = state.company;
  var fm = document.getElementById('fld-msg'); if (fm) fm.value = state.msg;
}

/* ---------- live contact preview (no full re-render while typing, so focus/cursor is preserved) ---------- */
function updateContactPreview() {
  var cb = contactSubjectBody();
  var prev = document.getElementById('mail-preview');
  var link = document.getElementById('mail-open-link');
  if (prev) {
    var label = L('Ovako će izgledati mejl', 'Your email will look like this');
    prev.innerHTML = '<b>' + bi('Ovako će izgledati mejl', 'Your email will look like this') + '</b>' + esc(cb.preview);
  }
  if (link) link.setAttribute('href', cb.mailHref);
}

/* ---------- event delegation ---------- */
document.addEventListener('click', function (e) {
  var el = e.target.closest('[data-act]');
  if (!el) return;
  var act = el.getAttribute('data-act');
  var id = el.getAttribute('data-id');
  var vm; // computed lazily where needed

  switch (act) {
    case 'lang':
      if (state.lang !== id) setState({ lang: id });
      break;
    case 'case':
      if (state.active !== id) setState({ active: id, sheetLb: false, zlb: null });
      break;
    case 'sheet-open':
      setState({ sheetLb: true });
      break;
    case 'sheet-close':
      setState({ sheetLb: false });
      break;
    case 'zshots-open':
      setState({ zlb: 0 });
      break;
    case 'z-close':
      setState({ zlb: null });
      break;
    case 'z-prev':
    case 'z-next': {
      vm = computeVM();
      if (!vm.zshots.length) break;
      var dz = act === 'z-prev' ? -1 : 1;
      var iz = ((state.zlb == null ? 0 : state.zlb) + dz + vm.zshots.length) % vm.zshots.length;
      setState({ zlb: iz });
      break;
    }
    case 'role':
      setState({ activeRole: id });
      break;
    case 'filter':
      if (state.filter !== id) setState({ filter: id, lb: null });
      break;
    case 'lb-open':
      setState({ lb: Number(id) });
      break;
    case 'lb-close':
      setState({ lb: null });
      break;
    case 'lb-prev':
    case 'lb-next': {
      vm = computeVM();
      if (!vm.visible.length) break;
      var d = act === 'lb-prev' ? -1 : 1;
      var i = vm.lbIdx < 0 ? 0 : (vm.lbIdx + d + vm.visible.length) % vm.visible.length;
      setState({ lb: vm.visible[i].id });
      break;
    }
    case 'appr':
      if (state.appr !== id) setState({ appr: id });
      break;
    case 'topic':
      setState({ topic: id });
      break;
    case 'copy-mail':
      try {
        navigator.clipboard.writeText('stefansomborski.ss@gmail.com').then(function () { setState({ copied: true }); }, function () {});
      } catch (err) { /* clipboard unavailable */ }
      break;
  }
});

document.addEventListener('mouseenter', function (e) {
  var el = e.target && e.target.closest ? e.target.closest('[data-act="appr"]') : null;
  if (el) {
    var id = el.getAttribute('data-id');
    if (state.appr !== id) setState({ appr: id });
  }
}, true);

document.addEventListener('input', function (e) {
  var id = e.target.id;
  if (id === 'fld-name') { state.name = e.target.value; updateContactPreview(); }
  else if (id === 'fld-company') { state.company = e.target.value; updateContactPreview(); }
  else if (id === 'fld-msg') { state.msg = e.target.value; updateContactPreview(); }
});

/* ---------- KPI count-up animation (direct DOM update, no full re-render for smoothness) ---------- */
function animateKpis() {
  state.kp = 0;
  render();
  var t0 = Date.now();
  var kpisEl = document.querySelector('.kpis');
  var timer = setInterval(function () {
    var x = Math.min(1, (Date.now() - t0) / 1500);
    var eased = 1 - Math.pow(1 - x, 3);
    state.kp = eased;
    if (kpisEl) kpisEl.innerHTML = renderKpis(eased);
    if (x >= 1) clearInterval(timer);
  }, 40);
}

/* ---------- mount ---------- */
state.kp = 1;
render();
animateKpis();
