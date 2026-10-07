const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});
/* =========================================
   ZAŠTO PREPELIČJA JAJA MODAL
========================================= */

const openWhyModal = document.getElementById("openWhyModal");
const closeWhyModal = document.getElementById("closeWhyModal");
const whyModal = document.getElementById("whyModal");
const whyModalOverlay = document.getElementById("whyModalOverlay");


openWhyModal.addEventListener("click", () => {

    whyModal.classList.add("active");

    document.body.style.overflow = "hidden";

});


function closeWhy() {

    whyModal.classList.remove("active");

    document.body.style.overflow = "";

}


closeWhyModal.addEventListener("click", closeWhy);

whyModalOverlay.addEventListener("click", closeWhy);


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeWhy();

    }

});
/* =========================================
   DETALJNE TEME O ISHRANI
========================================= */

const topicButtons = document.querySelectorAll(".health-topic-btn");

const topicDetail = document.getElementById("topicDetail");

const topicDetailTitle =
    document.getElementById("topicDetailTitle");

const topicDetailText =
    document.getElementById("topicDetailText");

const topicDetailIcon =
    document.getElementById("topicDetailIcon");

const closeTopicDetail =
    document.getElementById("closeTopicDetail");


const topicData = {


    krv: {

        title: "Krv i važni nutrijenti",

        icon: "fa-solid fa-droplet",

        text: `

            <p>
                Jaja predstavljaju nutritivno bogatu namirnicu
                i mogu biti deo raznovrsne ishrane koja organizmu
                obezbeđuje proteine, vitamine i minerale.
            </p>

            <h4>Vitamin B12</h4>

            <p>
                Vitamin B12 ima važnu ulogu u normalnom stvaranju
                crvenih krvnih ćelija i učestvuje u stvaranju DNK.
            </p>

            <h4>Gvožđe</h4>

            <p>
                Gvožđe je sastavni deo hemoglobina, proteina u
                crvenim krvnim ćelijama koji prenosi kiseonik
                kroz organizam.
            </p>

           

        `
    },



    nervni: {

        title: "Nervni sistem",

        icon: "fa-solid fa-brain",

        text: `

            <p>
                Ishrana obezbeđuje organizmu različite nutrijente
                koji su neophodni za normalno funkcionisanje
                nervnog sistema.
            </p>

            <h4>Vitamin B12</h4>

            <p>
                Vitamin B12 je potreban za normalan razvoj,
                održavanje i funkcionisanje centralnog nervnog
                sistema.
            </p>

            <h4>Holin</h4>

            <p>
                Jaja su jedan od prehrambenih izvora holina.
                Holin je potreban za stvaranje acetilholina,
                neurotransmitera koji učestvuje u funkcijama
                mozga, nervnog sistema i kontroli mišića.
            </p>

           

        `
    },



    imunitet: {

        title: "Imunitet i ishrana",

        icon: "fa-solid fa-shield-heart",

        text: `

            <p>
                Normalno funkcionisanje imunog sistema zavisi
                od velikog broja faktora, među kojima je i
                odgovarajuća i raznovrsna ishrana.
            </p>

            <h4>Selen</h4>

            <p>
                Selen je esencijalni nutrijent koji učestvuje
                u radu različitih proteina u organizmu i ima
                ulogu u zaštiti ćelija od oksidativnog oštećenja.
            </p>

            <h4>Proteini</h4>

            <p>
                Proteini su važan deo ishrane i organizam ih
                koristi za izgradnju i održavanje različitih
                tkiva.
            </p>

           

        `
    },



    misici: {

        title: "Mišići i proteini",

        icon: "fa-solid fa-person-running",

        text: `

            <p>
                Jaja su prirodan izvor proteina.
                Proteini su posebno važni za izgradnju,
                održavanje i obnovu telesnih tkiva.
            </p>

            <h4>Proteini u jajima</h4>

            <p>
                Prepeličja jaja mogu se lako uključiti u obroke
                zajedno sa povrćem, žitaricama i drugim
                namirnicama.
            </p>

            <h4>Praktična namirnica</h4>

            <p>
                Zbog male veličine jednostavna su za serviranje
                i mogu se koristiti u doručku, salatama,
                predjelima i drugim jelima.
            </p>

        `
    },



    kosti: {

        title: "Kosti i fosfor",

        icon: "fa-solid fa-bone",

        text: `

            <p>
                Za održavanje kostiju važna je ukupna ishrana
                koja obezbeđuje dovoljne količine različitih
                vitamina i minerala.
            </p>

            <h4>Fosfor</h4>

            <p>
                Prepeličja jaja su jedan od prehrambenih izvora fosfora.
                Fosfor je važan mineral koji je prisutan u
                kostima, zubima i ćelijama organizma.
            </p>

            <p>
                Kao i kod drugih nutrijenata, cilj nije oslanjati
                se na samo jednu namirnicu, već imati raznovrsnu
                ishranu.
            </p>

        `
    },



    ishrana: {

        title: "Prepeličja jaja u svakodnevnoj ishrani",

        icon: "fa-solid fa-heart-pulse",

        text: `

            <p>
                Prepeličja jaja mogu biti deo raznovrsne
                svakodnevne ishrane.
            </p>

            <h4>Kako ih možete koristiti?</h4>

            <p>
                Mogu se kuvati, pripremati uz doručak,
                dodavati salatama i predjelima ili koristiti
                kao sastojak različitih obroka.
            </p>

            <h4>Koliko jaja treba jesti?</h4>

            <p>
                Ne postoji medicinski propisan broj prepeličjih
                jaja koji bi trebalo jesti zbog određene bolesti.
                Odgovarajuća količina zavisi od ukupne ishrane,
                uzrasta, zdravstvenog stanja i drugih namirnica
                koje osoba jede.
            </p>

           

        `
    }

};



topicButtons.forEach(button => {

    button.addEventListener("click", () => {

        const topic = button.dataset.topic;

        const data = topicData[topic];


        topicDetailTitle.innerHTML = data.title;

        topicDetailText.innerHTML = data.text;

        topicDetailIcon.innerHTML =
            `<i class="${data.icon}"></i>`;


        topicDetail.classList.add("active");


        setTimeout(() => {

            topicDetail.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        }, 100);

    });

});


closeTopicDetail.addEventListener("click", () => {

    topicDetail.classList.remove("active");

});
/* =========================================
   FAQ
========================================= */

const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");


    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");


        /* ZATVORI SVA PITANJA */

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });


        /* AKO NIJE BILO OTVORENO - OTVORI */

        if (!isOpen) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});
/* =========================================
   BIGULA FARM GALERIJA
========================================= */

const farmGalleryItems =
    document.querySelectorAll(".farm-gallery-item");

const farmGalleryLightbox =
    document.getElementById("farmGalleryLightbox");

const farmGalleryLargeImage =
    document.getElementById("farmGalleryLargeImage");

const farmGalleryClose =
    document.getElementById("farmGalleryClose");

const farmGalleryOverlay =
    document.getElementById("farmGalleryOverlay");

const farmGalleryPrev =
    document.getElementById("farmGalleryPrev");

const farmGalleryNext =
    document.getElementById("farmGalleryNext");

const farmGalleryCounter =
    document.getElementById("farmGalleryCounter");


let currentFarmImage = 0;


const farmGalleryImages = Array.from(
    farmGalleryItems
).map(item => {

    return item.querySelector("img").src;

});


function showFarmGalleryImage(index) {

    if (index < 0) {
        index = farmGalleryImages.length - 1;
    }

    if (index >= farmGalleryImages.length) {
        index = 0;
    }


    currentFarmImage = index;


    farmGalleryLargeImage.src =
        farmGalleryImages[currentFarmImage];


    farmGalleryCounter.textContent =
        `${currentFarmImage + 1} / ${farmGalleryImages.length}`;

}



farmGalleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        showFarmGalleryImage(index);

        farmGalleryLightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});



function closeFarmGallery() {

    farmGalleryLightbox.classList.remove("active");

    document.body.style.overflow = "";

}



farmGalleryClose.addEventListener(
    "click",
    closeFarmGallery
);


farmGalleryOverlay.addEventListener(
    "click",
    closeFarmGallery
);



farmGalleryPrev.addEventListener("click", () => {

    showFarmGalleryImage(
        currentFarmImage - 1
    );

});


farmGalleryNext.addEventListener("click", () => {

    showFarmGalleryImage(
        currentFarmImage + 1
    );

});



document.addEventListener("keydown", event => {

    if (
        !farmGalleryLightbox.classList.contains("active")
    ) {
        return;
    }


    if (event.key === "Escape") {

        closeFarmGallery();

    }


    if (event.key === "ArrowLeft") {

        showFarmGalleryImage(
            currentFarmImage - 1
        );

    }


    if (event.key === "ArrowRight") {

        showFarmGalleryImage(
            currentFarmImage + 1
        );

    }

});