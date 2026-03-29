// 🔐 PASSWORD
const correctPassword = "her123";

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const error = document.getElementById("errorMsg");

    if (input === correctPassword) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        error.textContent = "Wrong password";
    }
}

// 🎬 SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// 📜 POEMS DATA (EDIT THIS)
const poems = {
    1: `
            <p>শুভ্র শাড়ির লাল পাড়েতে, মায়ার এক টান,</p>
            <p>বৈশাখী ওই রোদে তুমি, স্নিগ্ধ এক প্রাণ।</p>
            <p>মাথার ওপর বাগানবিলাস, ঝরছে রঙের মেলা,</p>
            <p>তোমার রূপের আবেশে আজ, থমকে যাওয়া বেলা।</p>
            <p>এলোকেশী মেঘবরণ চুলে, বাতাসের ওই ছোঁয়া,</p>
            <p>বাঙালিয়ানার পূর্ণ সাজে, তুমি এক নীল মায়া।</p>
            <p>কপালে ওই ছোট্ট টিপ, নয়নে লাজুক হাসি,</p>
            <p>পথের ধারে দাঁড়িয়ে তুমি, যেন এক রূপসী।</p>
    `,
    2: `
            <p>ঈদের সাজে তুমি যেন এক পূর্ণিমার চাঁদ,</p>
            <p>নয়ন ভরে দেখছি আজ, নেই কোনো প্রমাদ।</p>
            <p>হলুদ জামা আর রেশমি চুলের ওই মেলা,</p>
            <p>তুমি যেন মনের আকাশে এক মিষ্টি ভোরের খেলা।</p>

    `,
    3: `
            <p>রক্তিম সাজে তুমি অপার্থিব সুন্দরী,</p>
            <p>যেন গোধূলির আলোয় এক রূপকথার পরী।</p>
            <p>মেহেদি রাঙা হাতে ফুটেছে নিপুণ কারুকাজ,</p>
            <p>মাথায় ওই ঝুমকো যেন সৌন্দর্যেরই তাজ।</p>
            <p>দুটি গোলাপ হাতে তোমার লাজুক চাহনি,</p>
            <p>তুমি যেন শরতের স্নিগ্ধ কোনো কাহিনী।</p>
            <p>নরম রোদে ঝলমল করছে তোমার হাসি,</p>
            <p>এই রূপের মাঝে যেন মুগ্ধতা রাশি রাশি।</p>
    `,
    4: `
            <p>নীল সীমানার পাড় ঘেরা ঐ গোলাপি শাড়ির ভাঁজ,</p>
            <p>তাতেই যেন খুঁজে পায় পূর্ণতা সব সাজ।</p>
            <p>বেগুনি ব্লাউজের ছোঁয়ায় তুমি শরতের এক ভোর,</p>
            <p>এক পলকের চাহনিতে মন হারানো ঘোর।</p>
            <p>খোলা চুলের অবাধ্য ঢেউ পিঠ ছুঁয়ে যায় নীলে,</p>
            <p>কালো চোখের কাজল যেন স্বপ্ন দেখায় তিলে তিলে।</p>
            <p>হাতের নীল চুড়ির রিনঝিন ওই সুরের মূর্ছনা,</p>
            <p>তোমার মিষ্টি হাসির কাছে হার মানে সব জল্পনা।</p>
            <p>সবুজের ঐ গালিচায় দাঁড়িয়ে এক অনন্য রূপবতী,</p>
            <p>তুমি বিকেলের রোদে মেশা এক স্নিগ্ধ জ্যোতির জ্যোতি।</p>
    `
};

// 🪟 MODAL
const modal = document.getElementById("poemModal");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

// CLICK EVENTS
document.querySelectorAll(".poem-trigger").forEach(item => {
    item.addEventListener("click", () => {
        const id = item.getAttribute("data-poem");
        modalText.innerHTML = poems[id];
        modal.style.display = "flex";
    });
});

// CLOSE
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};
