
let progress = 0;
let card2 = null;
let card3 = [];
let card4 = null;
let card5 = {
	name: "",
	email: "",
	agree: false,
};
init();


function init () {
    for(let i = 1; i <= 2; i++) {
        hideCard(i);
    }
    showCard(1);
    updateProgress(0);
    init1();
    init2();
    init3();
    init4();
    init5();
    init6();
}

function showCard (n) {
    const card = document.querySelector(`[data-card="${n}"]`)
    card.classList.remove("hide");
}

function hideCard (n) {
    const card = document.querySelector(`[data-card="${n}"]`)
    card.classList.add("hide");
}

function updateProgress () {
    const progressBars = document.querySelectorAll('.progress-bar')
    for(const progressBar of progressBars) {
        progressBar.setAttribute('aria-valuenow', progress);
        progressBar.style.width = `${progress}%`;  

        if (progress === 100) {
			progressBar.classList.add("bg-success");
		} else {
			progressBar.classList.remove("bg-success");
		}
    }
}



//Карточка номер 1
function init1() {
    const card = document.querySelector('[data-card="1"]')
    const button = card.querySelector('button')
    button.addEventListener('click', () => {
        hideCard(1);
        showCard(2);
    });
}

//Карточка номер 2
function init2() {
    const card = document.querySelector('[data-card="2"]')
    const backButton = card.querySelector('button[data-move = "back"]')
    backButton.addEventListener('click', () => {
        hideCard(2);
        showCard(1);
    });
    const forwardButton = card.querySelector('button[data-move = "forward"]')
    forwardButton.addEventListener('click', () => {
        hideCard(2);
        showCard(3);
    });

    const lis = card.querySelectorAll('li')
    
    lis.forEach(li => li.addEventListener('click', () => {
        const input = li.querySelector('input')
        input.checked = true;
        card2 = input.value;
        forwardButton.disabled = false;

        if(progress < 25) {
            progress = 25;
            updateProgress();
        }
    }));
}


//Карточка номер 3
function init3() {
    const card = document.querySelector('[data-card="3"]');
    const items = card.querySelectorAll("[data-item]");
    const backButton = card.querySelector('button[data-move="back"]');
    backButton.addEventListener('click', () => {
        hideCard(3);
        showCard(2);
    });
    const forwardButton = card.querySelector('button[data-move="forward"]');
    forwardButton.addEventListener('click', () => {
        hideCard(3);
        showCard(4);
    });

    // const divs = card.querySelectorAll('[data-check="press"]')
    
    // divs.forEach(div => div.addEventListener('click', () => {
    //     const input = card.querySelectorAll('input')
    //     input.checked = true;
    //     card3 = input.value;
    //     forwardButton.disabled = false;

    //     if(progress = 25) {
    //         progress = 35;
    //         updateProgress();
    //     }
    // }));
    items.forEach((item) =>
		item.addEventListener("click", (e) => {
			const variant = item.dataset.item;
			const input = item.querySelector("input");

			if (card3.includes(variant)) {
				const index = card3.indexOf(variant);
				card3.splice(index, 1);
				input.checked = false;
			} else {
				card3.push(variant);
				input.checked = true;
			}

			if (card3.length === 0) {
				progress = 25;
				forwardButton.disabled = true;
			} else {
				progress = 40;
				forwardButton.disabled = false;
			}

			updateProgress();
		})
	);
}


//Карточка номер 4
function init4() {
    const card = document.querySelector('[data-card="4"]')
    const backButton = card.querySelector('button[data-move = "back"]')
    backButton.addEventListener('click', () => {
        hideCard(4);
        showCard(3);
    });
    const forwardButton = card.querySelector('button[data-move = "forward"]')
    forwardButton.addEventListener('click', () => {
        hideCard(4);
        showCard(5);
    });

    const lis = card.querySelectorAll('li')
    
    lis.forEach(li => li.addEventListener('click', () => {
        const input = li.querySelector('input')
        input.checked = true;
        card4 = input.value;
        forwardButton.disabled = false;

        if(progress = 40) {
            progress = 60;
            updateProgress();
        }
    }));
}

//Карточка номер 5

function init5() {
	const card = document.querySelector('[data-card="5"]');
	const nameInput = card.querySelector('[data-field="name"]');
	const emailInput = card.querySelector('[data-field="email"]');
	const agreeInput = card.querySelector('[data-field="agree"]');

	const update = () => {
		if (card5.name && card5.email && card5.agree) {
			forwardButton.disabled = false;
			progress = 100;
		} else {
			forwardButton.disabled = true;
			progress = 60;
		}

		updateProgress();
	};

	nameInput.addEventListener("keyup", (e) => {
		card5.name = nameInput.value;
		update();
	});

	emailInput.addEventListener("keyup", (e) => {
		card5.email = emailInput.value;
		update();
	});

	agreeInput.addEventListener("change", (e) => {
		card5.agree = agreeInput.checked;
		update();
	});

	const backButton = card.querySelector("button[data-move='back']");
	backButton.addEventListener("click", () => {
		hideCard(5);
		showCard(4);
	});

	const forwardButton = card.querySelector("button[data-move='forward']");
	forwardButton.addEventListener("click", () => {
		hideCard(5);
		showCard(6);
	});
}

//Карточка номер 6
function init6() {}
