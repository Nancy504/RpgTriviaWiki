function navigate(url) {
    window.location.href = url;
}

// Hover effect for game links
document.querySelectorAll('.game-item a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.title = `Go to ${link.textContent}`;
    });
});

// Function to show or hide filter dropdown options
function showOptions(id) {
    let divOptions = document.getElementById(id);
    divOptions.style.display = divOptions.style.display === "none" || divOptions.style.display === "" ? "inline-block" : "none";
}


// Function to hide filter dropdown options when the mouse leaves the area
function hideOptions(id) {
    let divOptions = document.getElementById(id);
    divOptions.style.display = "none";
}

// Waits for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Selects all checkboxes inside the first filter dropdown
    let checkboxes1 = document.querySelectorAll("#options1 input");
    let inputCheckbox1 = document.getElementById("inputCheckbox1");

     // Selects all checkboxes inside the second filter dropdown
    let checkboxes2 = document.querySelectorAll("#options2 input");
    let inputCheckbox2 = document.getElementById("inputCheckbox2");

    // Function to update the input field with selected checkbox values
    function handleCheckboxChange(checkboxes, inputCheckbox) {
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", (e) => {
                // Collects all checked checkboxes and updates the input field with their values
                let values = Array.from(checkboxes)
                    .filter(cb => cb.checked)
                    .map(cb => cb.value);
                inputCheckbox.value = values.join(", ");// Displays selected options as a comma-separated string
            });
        });
    }

    // Apply checkbox change handlers for both filter dropdowns
    handleCheckboxChange(checkboxes1, inputCheckbox1);
    handleCheckboxChange(checkboxes2, inputCheckbox2);
});

// Hover preview functionality
(function ($) {
    $.fn.linkPreview = function (options) {
        const settings = $.extend({
            previewSelector: '#link-preview',
            frameSelector: '#preview-frame',
            offsetX: 15,
            offsetY: 15,
            hideDelay: 100
        }, options);

        const $preview = $(settings.previewSelector);
        const $frame = $(settings.frameSelector);
        let previewTimeout;

        function showPreview(url) {
            $frame.attr('src', url);
            $preview.show();
        }

        function hidePreview() {
            $frame.attr('src', '');
            $preview.hide();
        }

        function movePreview(x, y) {
            $preview.css({
                top: (y + settings.offsetY) + 'px',
                left: (x + settings.offsetX) + 'px'
            });
        }

        function attachPreviewEvents($el, getUrl) {
            $el.on('mouseover', function (e) {
                clearTimeout(previewTimeout);
                showPreview(getUrl($(this)));
                movePreview(e.pageX, e.pageY);
            });

            $el.on('mousemove', function (e) {
                movePreview(e.pageX, e.pageY);
            });

            $el.on('mouseout', function () {
                previewTimeout = setTimeout(hidePreview, settings.hideDelay);
            });
        }

        return this.each(function () {
            const $el = $(this);
            if ($el.is('a')) {
                attachPreviewEvents($el, el => el.attr('href'));
            } else if ($el.is('button') && $el.data('href')) {
                attachPreviewEvents($el, el => el.data('href'));
            }
        });
    };

    // Optional: initialize it on all matching elements at once
    $(document).ready(function () {
        $('a, button[data-href]').linkPreview();
    });
})(jQuery);

$('a, button[data-href]').linkPreview({
    offsetX: 10,
    offsetY: 20
});

//game-item

const games = [
    {
        title: ".hack (Series)",
        img: "../../Images/hackseries/hachGU/hackGU.png",
        alt:"hackGU.png",
        link: "hackSeries.html",
        genre: ["2-D, 3-D, Action, Adventure, Sci-Fi, MMO"],
        date: "2002-06-20"
    },
    {
        title: "13 Sentinels: Aegis Rim",
        img: "../../Images/13-sentinel/13Sentinels.png",
        alt:"13Sentinels.png",
        link: "../../GameSeries/NumandSym(Series)/GamePage/NumandSym(Page)/13Sentinels.html",
        genre: ["2-D, Mecha, Sci-Fi, Strategy, Visual-Novel"],
        date: "2019-11-28"
        
    },
    {
        title: "AFK (Series)",
        img: "../../Images/AFKSeries/AFKArena/AFK_Arena_cover.png",
        alt:"AFK_Arena_cover.png",
        link: "AFKSeries.html",
        genre: ["Idle, Auto-game, Gacha"],
        date: "2019-04-09"
    },
    {
        title: "Akiba (Series)",
        img: "../../Images/AkibaSeries/AkibaTrip/AkibaTrip.jpg",
        alt:"AkibaTrip.jpg",
        link: "AkibaSeries.html",
        genre: ["Action, Adventure, Beat-'em-up, Cyberpunk, Fantasy"],
        date: "2011-05-19"
    },
    {
        title: "Arknight",
        img: "../../Images/Arknight/Arknights.jpg",
        alt:"Arknights.jpg",
        link: "Arknight.html",
        genre: ["Tower-Defense, Strategy, Gacha"],
        date: "2019-05-01"
    },
    {
        title: "ArTonelico (series)",
        img: "../../Images/ArTonelicoSeries/ArTonelico1/Ar_tonelico-GamePage.jpg",
        alt:"Ar_tonelico-GamePage.jpg",
        link: "ArTonelicoSeries.html",
        genre: ["Fantasy, Sci-Fi, Visual-Novel"],
        date: "2006-01-26"
    },
    {
        title: "Atelier (Series)",
        img: "../../Images/AtelierSeries/AtelierSophie/AtelierSophie.png",
        alt:"AtelierSophie.png",
        link: "AtelierSeries.html",
        genre: ["Fantasy, Crafting. Cozy"],
        date: "1997-05-23"
    },
    {
        title: "Azur Lane",
        img: "../../Images/AzurLane/AzurLane.png",
        alt:"AzurLane.png",
        link: "AzurLane.html",
        genre: ["Gacha, Shoot 'em Up, Side-Scroller"],
        date: "2017-05-25"
    },
    {
        title: "Bloodborne",
        img: "../../Images/BloodBorne/Bloodborne.png",
        alt:"BloodBorne.png",
        link: "Bloodborne.html",
        genre: ["Action, Gothic, Horror, Hack-and-Slash"],
        date: "2015-03-24"
    },
    {
        title: "Blue Reflection (series)",
        img: "../../Images/BlueReflectionSeries/BlueReflection1/BlueReflection1_GameTitle.jpg",
        alt:"BlueReflection1_GameTitle.jpg",
        link: "BlueReflectionSeries.html",
        genre: ["Magical-Girl, Fantasy, lgbtq+, Visual-Novel"],
        date: "2017-03-30"
    },
    {
        title: "Bravely Default (series)",
        img: "../../Images/BravelyDefaultSeries/BravelyDefault1/Bravely_Default_title-jpeg.jpg",
        alt:"Bravely_Default_title-jpeg.jpg",
        link: "BravelyDefaultSeries.html",
        genre: ["Fantasy, Turn-Based"],
        date: "2017-03-30"

    },
    {
        title: "Castlevania (Series)",
        img: "../../Images/CastlevaniaSeries/Castlevania_SymphonyoftheNight/Castlevania_SymphonyoftheNight.png",
        alt:"Castlevania_SymphonyoftheNight.png",
        link: "CastlevaniaSeries.html",
        genre: ["Action, Adventure, Metroidvania, Gothic"],
        date: "1986-09-26"
    },
    {
        title: "Chrono Trigger",
        img: "../../Images/ChronoTrigger/ChronoTrigger.png",
        alt:"ChronoTrigger.png",
        link: "Chrono.html",
        genre: ["Action, Adventure, Fantasy, Turn-Based"],
        date: "1995-03-11"
    },
    {
        title: "Class of Hero (Series)",
        img: "../../Images/classofHeroesSeries/classofHeroes1/ganeTitle1_616x353.jpg",
        alt:"ganeTitle1_616x353.jpg",
        link: "classofHeroesSeries.html",
        genre: ["Class-Based, Dungeon-Crawl, Turn-Based"],
        date: "2008-06-26"
    },
    {
        title: "Code Vein",
        img: "../../Images/codeVein/codeVein_header.jpg",
        alt:"codeVein_header.jpg",
        link: "codeVein.html",
        genre: ["Action, Adventure, Gothic, Hack-and-Slash, Fantasy"],
        date: "2019-09-26"
    },
    {
        title: "Daikaijuu Monogatari (Series)",
        img: "../../Images/DaikaijuuMonogatariSeries/DaikaijuuMonogatari1/Daikaijuu_Monogatari1-title.png",
        alt:"Daikaijuu_Monogatari1-title.png",
        link: "DaikaijuuMonogatariSeries.html",
        genre: ["Fantasy, Adventure, Turn-Based"],
        date: "1994-12-22"
    },
    {
        title: "Dai-JiSuperRobotTaisen (Series)",
        img: "../../Images/Dai-JiSuperRobotTaisenSeries/Dai-1-JiSuperRobotTaisen/775--dai-2-ji-super-robot-taisen.png",
        alt:"775--dai-2-ji-super-robot-taisen.png",
        link: "Dai-JiSuperRobotTaisenSeries.html",
        genre: ["Adventure, Fantasy, Mecha, Turn-Based"],
        date: "1991-04-20"
    },
    {
        title: "Darkest Dungeon",
        img: "../../Images/DarkestDungeon/Darkest-Dungeon_header.jpg",
        alt:"Darkest-Dungeon_header.jpg",
        link: "DarkestDungeon.html",
        genre: ["Dungeon-Crawl, Gothic, Horror, Roguelike"],
        date: "2016-01-19"

    },
    {
        title: "Dark Souls (Series)",
        img: "../../Images/DarkSoulsSeries/DarkSouls1/DarkSoul1-TitlePage.jpg",
        alt:"DarkSoul1-TitlePage.jpg",
        link: "DarkSoulsSeries.html",
        genre: ["Action, Adventure, Gothic, Hack-and-Slash, Fantasy"],
        date: "2011-09-22"
    },
    {
        title: "Digimon (Series)",
        img: "../../Images/DigimonSeries/DigimonSurvive/Digimon_Survive.png",
        alt:"Digimon_Survive.png",
        link: "DigimonSeries.html",
        genre: ["Adventure, Monster-Tamer"],
        date: "1999-01-06"
    },
    {
        title: "Disgaea (Series)",
        img: "../../Images/DisgaeaSeries/Disgaea1/Disgaea_JP-cover.jpg",
        alt:"Disgaea1_JP-cover.jpg",
        link: "Disgaea Series.html",
        genre: ["Action, Comedy, Fantasy, Strategy, Turn-Based"],
        date: "2003-01-30"
    },   
    {
        title: "Dragon Quest (Series)",
        img: "../../Images/DragonQuestSeries/DragonQuestTreasures/DragonQuestTreasures_Title.jpeg",
        alt:"DragonQuestTreasures_Title.jpeg",
        link: "DragonQuestSeries.html",
        genre: ["Adventure, Action, Fantasy, Turn-Based"],
        date: "1986-05-27"
    },
    {
        title: "Drakengard (Series)",
        img: "../../Images/DrakengardSeries/Drakengard1/Drakengard1_US_Cover_art.png",
        alt:"Drakengard1_US_Cover_art.png",
        link: "DrakengardSeries.html",
        genre: ["Action, Fantasy, Gothic, Horror"],
        date: "2003-09-11"
    },
    {
        title: "Elden Ring",
        img: "../../Images/Elden-Ring/Elden-Ring-GamePage.png",
        alt:"Elden-Ring-GamePage.png",
        link: "Elden-Ring.html",
        genre: ["Action, Adventure, Gothic, Hack-and-Slash, Fantasy"],
        date: "2022-02-25"

    },
    {
        title: "Etrian Odyssey (Series)",
        img: "../../Images/EtrianOdysseySeries/EtrianOdyssey1/EtrianOdyssey1_Gamepage.jpg",
        alt:"EtrianOdyssey1_Gamepage.jpg",
        link: "EtrianOdysseySeries.html",
        genre: ["Dungeon-Crawl, Turn-Based"],
        date: "2007-01-18"
    },
    {
        title: "Final Fantasy (Series)",
        img: "../../Images/FinalFantasySeries/FinalFantasy1/FinalFantasy1_Gametitle.jpg",
        alt:"FinalFantasy1_Gametitle.jpg",
        link: "FinalFantasySeries.html",
        genre: ["Adventure, Fantasy, Turn-Based"],
        date: "1987-12-18"
    },
    {
        title: "Fire Emblem (Series)",
        img: "../../Images/FireEmblemSeries/FireEmblemShadowDragonandtheBladeofLight/FireEmblemShadowDragonandtheBladeofLight_GamePage.jpg",
        alt:"FireEmblemShadowDragonandtheBladeofLight_GamePage.jpg",
        link: "FireEmblemSeries.html",
        genre: ["Fantasy,Strategy, Turn-Based"],
        date: "1990-04-20"
    },
];

//filter JS code 
// Show the options dropdown
function showOptions(id) {
    document.getElementById(id).style.display = 'block';
}

// Hide the options dropdown
function hideOptions(id) {
    document.getElementById(id).style.display = 'none';
}

// Function to get selected checkbox values
function getSelectedCheckboxValues(containerId) {
    const container = document.getElementById(containerId);
    const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// Main function to filter and display games
function updateGames() {
    const selectedGenres = getSelectedCheckboxValues('options1');
    const selectedOrder = getSelectedCheckboxValues('options2');

    // Update input boxes with selected values
    document.getElementById('inputCheckbox1').value = selectedGenres.join(', ');
    document.getElementById('inputCheckbox2').value = selectedOrder.join(', ');

    let filteredGames = games.slice(); // Copy the array

    // Filter games by selected genres
    if (selectedGenres.length > 0) {
        filteredGames = filteredGames.filter(game => {
            // Game genres are stored as a *single string* inside an array, so we need to check accordingly
            return selectedGenres.every(genre => game.genre[0].includes(genre));
        });
    }

    // Sort games if any order is selected
    if (selectedOrder.includes('A-Z(ASCENDING)')) {
        filteredGames.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (selectedOrder.includes('Z-A(DESCENDING)')) {
        filteredGames.sort((a, b) => b.title.localeCompare(a.title));
    }
    if (selectedOrder.includes('DATE(ASCENDING)')) {
        filteredGames.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    if (selectedOrder.includes('DATE(DESCENDING)')) {
        filteredGames.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    displayGames(filteredGames);
}

// Function to display games on the page
function displayGames(gamesToDisplay) {
    const gameGrid = document.querySelector('.game-grid');
    gameGrid.innerHTML = ''; // Clear previous results

    gamesToDisplay.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card'); // You can style this class in CSS
        gameCard.innerHTML = `
            <a href="${game.link}">
                <img src="${game.img}" alt="${game.alt}">
                <p>${game.title}</p>
            </a>
        `;
        gameGrid.appendChild(gameCard);
    });
}

// Attach event listeners to checkboxes
document.querySelectorAll('#options1 input[type="checkbox"], #options2 input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateGames);
});

// Initially display all games
document.addEventListener('DOMContentLoaded', () => {
    displayGames(games);
});
//helps organized what each page contains 
//game-grid
let currentPage = 1;
let pageChunkStart = 1;
const pagesPerChunk = 6;
const itemsPerPage = 9;

function renderGameGrid() {
    const grid = document.querySelector(".game-grid");
    grid.innerHTML = ""; // Clear existing grid

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = games.slice(start, end);

    pageItems.forEach(game => {
        const item = document.createElement("div");
        item.classList.add("game-item");

        item.innerHTML = `
            <a href="${game.link}">
                <img src="${game.img}" alt="${game.title}">
                <p>${game.title}</p>
            </a>
        `;
        grid.appendChild(item);
    });

    //  Re-attach hover preview listeners
    setupPreviewListeners();
}

//Pagination
const totalPages = Math.ceil(games.length / itemsPerPage);
function renderPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(filteredGames.length / itemsPerPage);

    // First (<<) and Prev (<)
    pagination.appendChild(createPageButton("«", goToFirstPage));
    pagination.appendChild(createPageButton("<", () => goToPage(currentPage - 1)));

    if (pageChunkStart > 1) {
        pagination.appendChild(createPageButton("...", showPreviousChunk));
    }

    for (let i = pageChunkStart; i < pageChunkStart + pagesPerChunk && i <= totalPages; i++) {
        const pageBtn = createPageButton(i, () => goToPage(i));
        if (i === currentPage) pageBtn.classList.add("active");
        pagination.appendChild(pageBtn);
    }

    if (pageChunkStart + pagesPerChunk <= totalPages) {
        pagination.appendChild(createPageButton("...", showNextChunk));
    }

    pagination.appendChild(createPageButton(">", () => goToPage(currentPage + 1)));
    pagination.appendChild(createPageButton("»", goToLastPage));
}

function createPageButton(label, onClick) {
    const a = document.createElement("a");
    a.href = "javascript:void(0)";
    a.textContent = label;
    a.addEventListener("click", onClick);
    return a;
}

function goToPage(page) {
    const totalPages = Math.ceil(filteredGames.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;

    if (page < pageChunkStart) {
        pageChunkStart = Math.max(1, page - (page % pagesPerChunk || pagesPerChunk) + 1);
    } else if (page >= pageChunkStart + pagesPerChunk) {
        pageChunkStart = page;
    }

    renderPagination();
    displayGames(); // USE THIS, not renderGameGrid
}

function goToFirstPage() {
    currentPage = 1;
    pageChunkStart = 1;
    renderPagination();
    renderGameGrid(); // <-- Add this line
}

function goToLastPage() {
    currentPage = totalPages;
    pageChunkStart = totalPages - (totalPages % pagesPerChunk || pagesPerChunk) + 1;
    renderPagination();
    renderGameGrid(); // <-- Add this line
}

function showNextChunk() {
    if (pageChunkStart + pagesPerChunk <= totalPages) {
        pageChunkStart += pagesPerChunk;
        currentPage = pageChunkStart;
        renderPagination();
        renderGameGrid(); // <-- You forgot this
    }
}

function showPreviousChunk() {
    if (pageChunkStart - pagesPerChunk >= 1) {
        pageChunkStart -= pagesPerChunk;
    } else {
        pageChunkStart = 1;
    }
    currentPage = pageChunkStart;
    renderPagination();
    renderGameGrid(); // <-- You forgot this
}

let filteredGames = games;

// Function to display the games in the grid, helps with the search function 
function displayGames(gamesToDisplay = filteredGames) {
    const gameGrid = document.querySelector('.game-grid');
    gameGrid.innerHTML = ''; // Clear previous results

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedGames = gamesToDisplay.slice(start, end);

    paginatedGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-item');
        gameCard.innerHTML = `
            <a href="${game.link}">
                <img src="${game.img}" alt="${game.alt}">
                <h3>${game.title}</h3>
                <p>${game.genre.join(', ')}</p>
                <p>${game.date}</p>
            </a>
        `;
        gameGrid.appendChild(gameCard);
    });
}

// Search function
document.getElementById('searchInput').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();

    filteredGames = games.filter(game => {
        const titleMatch = game.title.toLowerCase().includes(searchQuery);
        const genreMatch = game.genre.some(genre => genre.toLowerCase().includes(searchQuery));
        const dateMatch = game.date.includes(searchQuery);
        return titleMatch || genreMatch || dateMatch;
    });

    currentPage = 1;
    pageChunkStart = 1;
    renderPagination();
    displayGames();
});

document.addEventListener('DOMContentLoaded', () => {
    filteredGames = games;
    renderPagination();
    displayGames();
});
