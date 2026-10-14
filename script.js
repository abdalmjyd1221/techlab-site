
const searchInput = document.querySelector("#projectSearch");
const projectCards = document.querySelectorAll("#projects article");
const searchStatus = document.querySelector("#searchStatus");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value
        .trim()
        .toLocaleLowerCase("ar");

    let visibleCards = 0;

    projectCards.forEach(function (card) {
        const cardText = card.textContent
            .toLocaleLowerCase("ar");

        const isMatch = cardText.includes(searchText);

        card.hidden = !isMatch;

        if (isMatch) {
            visibleCards++;
        }
    });

    if (searchText === "") {
        searchStatus.textContent = "";
    } else if (visibleCards === 0) {
        searchStatus.textContent =
            "ما لقينا مشروع بهذا الاسم. جرّب كلمة ثانية.";
    } else {
        searchStatus.textContent =
            `عدد المشاريع المطابقة: ${visibleCards}`;
    }
});
