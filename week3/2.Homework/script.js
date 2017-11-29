
let myBooks = [
    'theAlchemist',
    'sufism',
    'essentialsOfTheIslamicFaith',
    'questionsAndAnswersAboutIslam',
    'loveAndTolerance',
    'speechAndPowerOfExpression',
    'fromSeedToCedar',
    'soThatOthersMayLive',
    'towardsTheLostParadise',
    'inkisar'   
];


let myBooksInfo = {
    theAlchemist: ['The Alchemist', 'Paulo Coelho', 'English' ],
    sufism: ['Sufism', 'M.Fethullah Gülen', 'English' ],
    essentialsOfTheIslamicFaith: ['Essentials of the Islamic Faith', 'M.Fethullah Gülen', 'English', ],
    questionsAndAnswersAboutIslam: ['Questions and Answers About Islam', 'M.Fethullah Gülen', 'English' ],
    loveAndTolerance: ['Love and Tolerance', 'M.Fethullah Gülen', 'English' ],
    speechAndPowerOfExpression: ['Speech and Power of Expression', 'M.Fethullah Gülen', 'English' ],
    fromSeedToCedar: ['From Seed to Cedar', 'M.Fethullah Gülen', 'English' ],
    soThatOthersMayLive: ['So That Others May Live', 'M.Fethullah Gülen', 'English' ],
    towardsTheLostParadise: ['Towards the Lost Paradise', 'Osman Şimşek', 'English' ],
    inkisar: ['Inkisar', 'Osman Şimşek', 'English' ]
}

const myBooksCovers = {
    theAlchemist: "images/The_Alchemist.jpg",
    sufism: "images/Sufism.jpg",
    essentialsOfTheIslamicFaith: "images/Essentials_of_the_Islamic_Faith.jpg",
    questionsAndAnswersAboutIslam: "images/Questions_And_Answers_About_Islam.jpg",
    loveAndTolerance: "images/Love_and_Tolerance.jpg",
    speechAndPowerOfExpression: "images/Speech_And_Power_Of_Expression.jpg",
    fromSeedToCedar: "images/From_Seed_to_Cedar.jpg",
    soThatOthersMayLive: "images/So_That_Others_May_Live.jpg",
    towardsTheLostParadise: "images/Towards_The_Lost_Paradise.jpg",
    inkisar: "images/Inkisar.jpg"
}


function generateElements() {

    let container = document.createElement("main");
    document.body.appendChild(container);

    for (let i = 0; i < myBooks.length; i++) {

        let bookId = myBooks[i];

        let list = document.createElement("ul");
        container.appendChild(list);

        let itemOne = document.createElement("h2");
        let title = myBooksInfo[bookId][0];
        itemOne.innerHTML = title;
        list.appendChild(itemOne);

        let itemTwo = document.createElement("li");
        let author = myBooksInfo[bookId][1];
        itemTwo.innerHTML = author;
        list.appendChild(itemTwo);

        let itemThree = document.createElement("li");
        let language = myBooksInfo[bookId][2];
        itemThree.innerHTML = language;
        list.appendChild(itemThree);

        let itemFour = document.createElement("img");
        itemFour.setAttribute("src", myBooksCovers[bookId]);
        list.appendChild(itemFour);
    }
}

generateElements();