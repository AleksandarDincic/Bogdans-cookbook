var users = [
    {
        id: 0,
        name: "Me",
    },
    {
        id: 1,
        name: "Nikola",
    },
    {
        id: 2,
        name: "Paja Patak",
    },
    {
        id: 3,
        name: "Sauron",
    },
];

var types = [
    {
        id: 0,
        nameSRB: "Predjelo",
        nameENG: "Entrée",
        nameSRBP: "Predjela"
    },
    {
        id: 1,
        nameSRB: "Glavno jelo",
        nameENG: "Main dish",
        nameSRBP: "Glavna jela"
    },
    {
        id: 2,
        nameSRB: "Desert",
        nameENG: "Dessert",
        nameSRBP: "Deserti"
    },
    {
        id: 3,
        nameSRB: "Užina",
        nameENG: "Snack",
        nameSRBP: "Užina"
    }
]

var data = [
    {
        id: 0,
        name: "Pepsi rice",
        author: 1,
        grade: [{
            userID: 2,
            grade: 1
        },
        {
            userID: 3,
            grade: 2
        }],
        time: 5,
        difficulty: 1,
        type: 3,
        recipe: "Ingredients \n1 cup cooked rice, warm \n1 pinch salt \n4 oz. Pepsi \n\nInstructions \nSeason rice with salt and pour Pepsi over it.",
        imageLinks: ["../img/recipes/pepsi-rice.jpg"],
        videoLinks: "https://www.youtube.com/embed/3uKTPzQ4eCo",
        comments: [
            {
                userID: 3,
                text: "Ne bih ni kučetu dala",
                date: "11/6/2021"
            }
        ]
    },
    {
        id: 1,
        name: "Sarme",
        author: 2,
        grade: [{
            userID: 1,
            grade: 3
        },
        {
            userID: 3,
            grade: 1
        }],
        time: 300,
        difficulty: 3,
        type: 1,
        recipe: "Potrebno:\n500 g mešanog mlevenog mesa\n2 glavice crnog luka\n2 čena belog luka\n1 šargarepa\n100 g pirinča\n1 i po kašika začinske paprike\n10 bibera u zrnu\n½ kašičice mlevenog bibera\nso\n3 lovorova lista\n200 ml ulja\n200 g mesnate slanine\nglavica kiselog kupusa\nNa ulju propržite iseckan crni i beli luk i rendanu šargarepu. Kada povrće bude uprženo, dodajte meso, polovinu slanine iseckanu na kockice i propržite. Začinite solju i mlevenim biberom i dodajte pirinač i pola kašike začinske paprike. Sve dobro promešajte i po kašiku fila stavljajte na list kupusa i uvijte sarmu . Birajte manje glavice kupusa da bi i listovi bili manji i sarma lepše izgledala.\nNa dno dubljeg suda stavite malo kupusa, a zatim ređajte sarme. Kada sve složite,  preostalu slaninu stavite preko sarme.\nKašiku začinske paprike, biber u zrnu i lovor stavite preko sarme. Pokrijte listovima kupusa i nalijte vodom da pređe preko sarme oko 2 prsta. Stavite poklopac i ostavite da provri, a zatim smanjite temperature i lagano krčkajte 3-4 sata.\nNapomena: Listove kupusa odvojiti i sa svakog nožem odstraniti zadebljani deo koji  ih vezuje za koren. Listove properite i ostavite da se ocede pre uvijanja sarme.",
        imageLinks: ["../img/recipes/sarme-1.jpg", "../img/recipes/sarme-2.jpg"],
        videoLinks: "",
        comments: []
    },
    {
        id: 2,
        name: "Water sausage",
        author: 1,
        grade: [{
            userID: 2,
            grade: 1
        },
        {
            userID: 3,
            grade: 1
        }],
        time: 10,
        difficulty: 1,
        type: 0,
        recipe: "Ingredients \nsausage casing\nwater\n\nInstructions \nPour water in sausage casing then fry.",
        imageLinks: ["../img/recipes/water-sausage.jpg"],
        videoLinks: "https://www.youtube.com/embed/sMk4SPd8wmk",
        comments: [
            {
                userID: 1,
                text: "DA BUDEM ISKREN MORAŠ DA IMAŠ VISOK IQ DA BI RAZUMEO KOBASICU SA VODOM",
                date: "29/5/2020"
            },
            {
                userID: 2,
                text: "Probao sam, ošurio sam se, ne preporučujem.",
                date: "29/5/2020"
            }
        ]
    },
    {
        id: 3,
        name: "Čuros",
        author: 3,
        grade: [{
            userID: 2,
            grade: 5
        },
        {
            userID: 1,
            grade: 1
        }],
        time: 60,
        difficulty: 2,
        type: 3,
        recipe: "Potrebni sastojci\nsveže mleko - 1 šolja\nso - 1 prstohvat\nbrašno - 1 šolja\njaja - 4 komada\nza sos od čokolade\nsveže mleko - 100 ml\nčokolada - 100 g, bio\n\nNačin pripreme\nProključajte mleko sa solju i sipajte brašno. Mešajte, dok se na dnu šerpe ne stvori fini sloj i dok se testo ne homogenizuje i ne počne da se odlepljuje sa dna. Sklonite sa vatre i ostavite da se ohladi u drugoj posudi. Nakon toga dodajte jedno po jedno jaje i mešajte nakon svakog dodatog jajeta.\nZatim zagrejte veliku količinu ulja za prženje i testo stavite u špric sa zvezdastim kalupom. U vruće ulje istisnite čurose koji su nešto duži od tolumbi.\nIspržite čuros sa obe strane, tako što ga okrećete. Dok su još topli, posipajte ih šećerom u prahu.\nPoslužite ih sa sosom od čokolade, koji ste napravili od čokolade otopljene u vrućem svežem mleku. Umačite svaki čuros u čokoladni sos i uživajte.",
        imageLinks: ["../img/recipes/curos-1.jpg", "../img/recipes/curos-2.jpg"],
        videoLinks: "https://www.youtube.com/embed/fk5x-oHzgas",
        comments: [
            {
                userID: 2,
                text: "Odlično!",
                date: "3/3/2021"
            },
            {
                userID: 1,
                text: "ČURO JE UZASAN NE SVIĐA MI SE",
                date: "2/2/2021"
            },
        ]
    },
    {
        id: 4,
        name: "Pileća krilca",
        author: 2,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 3,
            grade: 4
        }],
        time: 40,
        difficulty: 3,
        type: 1,
        recipe: "Potrebni sastojci\npileća krilca - 12 komada\nza pohovanje\njaja - 2 komada\nsveže mleko - 250 ml\nkukuruzno brašno - 200 g\nkornfleks - pola pakovanja\nbujon - pola kocke, pileći\nza sos\nmajonez - 100 g\nkečap - 100 g\nsenf - 1 kašičica\nbiber\n\nNačin pripreme\nPileća krilca se operu i ostave da se ocede od vode. Kukuruzno brašno se sipa u posudu i pomeša sa namrvljenim pilećim bujonom.\nU drugoj posudu se sipa kornfleks samleven na krupne parčiće. U trećoj posudi se umute jaja i pomešaju sa svežim mlekom.\nOsušena krilca se potapaju u smesu od jaja, uvaljaju se u brašno, posle se opet potapaju u jaja i na kraju se uvaljaju u kornfleks. Sva krilca se prže u fritezi.\n",
        imageLinks: ["../img/recipes/chicken-1.jpg", "../img/recipes/chicken-2.jpeg"],
        videoLinks: "",
        comments: [
            {
                userID: 3,
                text: "Super!",
                date: "5/5/2021"
            },
            {
                userID: 1,
                text: "dobra piletina",
                date: "3/3/2021"
            },
        ]
    },
    {
        id: 5,
        name: "Špagete karbonara",
        author: 3,
        grade: [{
            userID: 1,
            grade: 2
        },
        {
            userID: 2,
            grade: 4
        }],
        time: 60,
        difficulty: 4,
        type: 1,
        recipe: `Sastojci:
200 g špageta
2 žumanca
100 g suve mesnate slanine
200 ml sveže tečne pavlake
40 g izrendanog parmezana
50 g izrendanog tvrdog žutog sira
1 kašičica sveže mlevenog bibera
2 čena belog luka
1 kašika maslinovog ulja
1 kašičica soli
1 kašika iseckanog peršuna

Priprema:
Staviti špagete da se kuvaju u skladu sa uputstvom. Taman toliko vremena će biti potrebno da završimo ostale korake iz recepta. Oprati i iseckati peršun. Pomešati žumanca s pavlakom, solju i biberom, pa dodati peršun. Dodati izrendane sireve i lepo promešati, pa ostaviti po strani. Iseckati slaninu. Ugrejati kašiku ulja na srednje jakoj vatri, pa staviti slaninu da se prži, stalno mešajući. Staviti čenove belog luka u komadu, ali prethodno ih blago pritisnuti da bi se raspukli i pustili svoju aromu. Kada slanina postane staklasta skloniti je s vatre i ocediti višak masnoće, a kašika-dve svakako neka ostane. Vruće, oceđene, špagete pomešati s vrućom slaninom i na to sipati već umućen preliv sa žumancima i sirom. Ne kuvati, samo brzo mešati da se žumanca ne bi zgrudvala. Na ovakav način će biti termički obrađena i sigurna za jelo. Sir će se otopiti i dati kremastu strukturu karbonari.`,
        imageLinks: ["../img/recipes/carbonara-1.jpg", "../img/recipes/carbonara-2.jpg", "../img/recipes/carbonara-3.jpg"],
        videoLinks: "https://www.youtube.com/embed/qoHnwOHLiMk",
        comments: [
            {
                userID: 1,
                text: "fuj italijanska hrana",
                date: "1/10/2019"
            },
        ]
    },
    {
        id: 6,
        name: "Pihtije",
        author: 1,
        grade: [{
            userID: 2,
            grade: 4
        },
        {
            userID: 3,
            grade: 3
        }],
        time: 330,
        difficulty: 5,
        type: 0,
        recipe: `Sastojci
        
2 svinjske nožice
2 juneće nogice
6 zrna biber
2 lista lorbera
1 glavica belog luka
1 veza razne zeleni
mleveni biber
so

Priprema

Svinjske i juneće nogice dobro očistiti, ošuriti, opati, staviti u veći lonac, naliti 5 l vode i pristaviti da se kuva na tihoj vatri.
Kada provri skinuti i baciti penu. Kada pena prestane da izbija, dodati biber u zrnu, lorberov list, vezu očišćene razne zeleni i malo soli. Kuvanje treba da traje oko 4-5 časova, odnosno dok se ne počne odvajati meso od kostiju. Voda treba da uvri do polovine i da bude više lepljiva.
Lonac skinuti sa vatre i ostavititi da se sadržina malo staloži. Pokupiti i baciti mast koja pliva po površini. Potom procediti kroz gustu cediljku i odvojiti meso od kostiju.
Meso rasporediti u nekoliko sudova, posuti sitno isečenim belim lukom, naliti proceđenom čorbom, odozgo posuti mlevenim biberom i ostaviti na hladnom mestu da se stegne. Služiti kao predjelo
Napomena:po želji preko mesa mogu se staviti 2 tvrdo obarena jaja i kuvana šargarepa isečena na kolutove, a potom preliti čorbom. Zavisno od ukusa, pored mlevenog bibera može se odozgo posuti i aleva paprika

`,
        imageLinks: ["../img/recipes/pihtije-1.jpg", "../img/recipes/pihtije-2.jpg"],
        videoLinks: "",
        comments: [
        ]
    },
    {
        id: 7,
        name: "Keks sa čokoladom",
        author: 3,
        grade: [{
            userID: 1,
            grade: 3
        },
        {
            userID: 2,
            grade: 4
        }],
        time: 20,
        difficulty: 3,
        type: 3,
        recipe: `Sastojci (za 10 komada)

75 g putera ili margarina
75 g smeđeg šećera (demerara)
1 kašičica arome vanile
1 jaje
1/2 kašičice praška za pecivo
150 g oštrog brašna
100 g čokolade za kuvanje (ili čokoladne kapljice)

Priprema

Omekšali puter sobne temperature i smeđi šećer ubacite u plastičnu posudu pa mikserom izmutite oko 5 minuta da bude penasto. Ne mora sav šećer da se otopi.
Potom dodajte vanilu i jaje i još jednom izmiksajte dok se sve ne poveže. Dodajte i prašak za pecivo i brašno i sve sjednite mikserom u kompaktnu smesu.
Na samom kraju ubacite sitno iseckanu čokoladu na kockice ili čokoladne kapljice, i kašikom sve izmešajte.
Uzmite pleh obložen pek papirom, i kašikom za sladoled uzimajte smesu pa spuštajte svaku kuglicu testa na pek papir, ostavljajući dovoljno mesta između svake. Ovo možete raditi i uz pomoć dve kašike. Imajte samo na umu da se keksi prilikom pečenja rašire, pa vodite računa da vam svaki keks bude dovoljno “bucmast” kako posle pečenja ne bi bili suviše pljosnati.
Keks pecite u prethodno zagrejanoj rerni na 180 stepeni, oko 15 min. Znaćete da su gotovi kad blago porumene. U početku će možda biti mekši ali će se hlađenjem stegnuti i dobiti hrskavu koricu spolja.
`,
        imageLinks: ["../img/recipes/keks-1.jpg"],
        videoLinks: "https://www.youtube.com/embed/Il1Cy4tQCkk",
        comments: [
            {
                userID: 1,
                text: "nije loše nije neloše",
                date: "12/12/2020"
            },
        ]
    },
    {
        id: 8,
        name: "Pita sa sirom",
        author: 2,
        grade: [{
            userID: 1,
            grade: 2
        },
        {
            userID: 3,
            grade: 3
        }],
        time: 20,
        difficulty: 2,
        type: 0,
        recipe: `Sastojci
500 g kora za pitu
oko 650 g svježeg sira
1 jaje
4 kašike kisele pavlake
po ukusu soli

Za premazivanje:
        
1 jaje
4 kašike ulja
4 kašike jogurta
malo soli
        
        

Priprema

Sjediniti svježi sir, umućeno jaje i kiselu pavlaku, pa posoliti, po ukusu. Posebno umutiti sastojke za premazivanje kora. Na radnu plohu staviti kore za pitu, pa prerezati po sredini. Jedan list premazati smjesom za premazivanje (koristiti četku), pa poklopiti drugom korom. Na jedan kraj staviti 2 kašike fila. Preklopiti strane, tako da fil ne izađe van, pa zarolati.

Na isti način pripremiti i ostale kore. Rolnice redati u uljem premazan pleh. Premazati rolnice sa malo ulja. 

Peći u pećnici zagrijanoj na 200 C, dok ne porumene. Pečene ostaviti kratko, prekrivene.
`,
        imageLinks: ["../img/recipes/pita-1.jpg"],
        videoLinks: "",
        comments: [
        ]
    },
    {
        id: 9,
        name: "Bajadera",
        author: 3,
        grade: [{
            userID: 2,
            grade: 3
        },
        {
            userID: 1,
            grade: 3
        }],
        time: 40,
        difficulty: 2,
        type: 2,
        recipe: `Sastojci

650 gr šećera
18 kašika vode
210 gr margarina
250 gr. mlevenih oraha
25o gr. mlevenog keksa
100 gr. čokolade

Glazura
100 gr. čokolade za kuvanje
2o gr margarina
3 kašike mleka
3 kašike ulja
        
Priprema

šećer i vodu staviti da provri, skloniti sa strane i dodati orahe i keks a zatim margarin, dobro sve sjedinitii podeliti na dva dela, u jedan dodati otopljenu čokoladu, a drugi ostaje beo, rastanjiti prvo deo sa čokoladom, ostaviti malo da se prohladi pa preko svetli deo, kada se skroz ohladi i stegne preliti glazurom.
`,
        imageLinks: ["../img/recipes/bajadera-1.jpg", "../img/recipes/bajadera-2.jpg"],
        videoLinks: "",
        comments: [
            {
                userID: 2,
                text: "Bravo, zasladio sam se (❁´◡`❁)",
                date: "3/3/2020"
            }
        ]
    },
    {
        id: 10,
        name: "Lava kolac",
        author: 2,
        grade: [{
            userID: 1,
            grade: 2
        },
        {
            userID: 3,
            grade: 4
        }],
        time: 30,
        difficulty: 3,
        type: 2,
        recipe: `Sastojci
jaja 4
secer 120 grama
margarin za kuvanje 250 grama
cokolada za kuvanje 250 grama
brasno 160 grama
        
Kako pripremiti

Umutiti 4 jaja sa 120 grama secera.
U drugoj posudi pomesati 1 margarin sa 250 grama otopljene cokolade i dobro umutiti.
Sada pomesati ove dve smese dodavanjem smesu sa cokoladom u smesu sa jajima i secerom.
U novonastalu smesu dodati jos 160 grama brasna.
Podmazati modlice i posuti brasnom radi lakseg vadjenja kolacica.
Napuniti modlice do vrha.
Peci 7 minuta u prethodno zagrejanoj pecnici na 200 stepeni C.
`,
        imageLinks: ["../img/recipes/lava-kolac-1.jpg", "../img/recipes/lava-kolac-2.jpg"],
        videoLinks: "https://www.youtube.com/embed/qbMTukAJskQ",
        comments: [
        ]
    },
    {
        id: 11,
        name: "Chocolate Pizza",
        author: 1,
        grade: [{
            userID: 2,
            grade: 4
        },
        {
            userID: 3,
            grade: 4
        }],
        time: 40,
        difficulty: 3,
        type: 2,
        recipe: `Ingredients:
2 teaspoons butter, melted
1/4 cup chocolate-hazelnut spread (recommended: Nutella)
1/2 cup semisweet chocolate chips
2 tablespoons milk chocolate chips
2 tablespoons white chocolate chips
2 tablespoons chopped hazelnuts, toasted
1 pound homeade pizza dough, recipe follows, or purchased pizza dough

Pizza Dough:
1/2 cup warm water (105 to 110 degrees F)
2 teaspoons active dry yeast
2 cups all-purpose flour, plus more for kneading
1 teaspoon salt
3 tablespoons olive oil, plus more for bowl


Directions:

Position the oven rack on the bottom of the oven and preheat to 450 degrees F.

Line a heavy large baking sheet with parchment paper. Roll out the dough to a 9-inch-diameter round. Transfer the dough to the prepared baking sheet. Using your fingers, make indentations all over the dough. Brush the dough with butter, then bake until the crust is crisp and pale golden brown, about 20 minutes. Immediately spread the chocolate-hazelnut spread over the pizza then sprinkle all the chocolate chips over. Bake just until the chocolate begins to melt, about 1 minute. Sprinkle the hazelnuts over the pizza. Cut into wedges and serve.

Pizza Dough:

Mix the warm water and yeast in a small bowl to blend. Let stand until the yeast dissolves, about 5 minutes. Mix the flour and salt in a food processor to blend. Blend in the oil. With the machine running, add the yeast mixture and blend just until the dough forms. Turn the dough out onto lightly floured surface and knead until smooth, about 1 minute. Transfer the dough to a large oiled bowl and turn the dough to coat with the oil. Cover the bowl with plastic wrap and set aside in a warm draft-free area until the dough doubles in volume, about 1 hour. Punch the down dough and form into ball. The dough can be used immediately or stored airtight in the refrigerator for 1 day.
`,
        imageLinks: ["../img/recipes/pizza-1.jpg"],
        videoLinks: "",
        comments: [
            {
                userID: 2,
                text: "Bravo, zasladio sam se opet (❁´◡`❁)",
                date: "4/3/2020"
            }
        ]
    },
];