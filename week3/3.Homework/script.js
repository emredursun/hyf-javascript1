// Q 1- declaring an array that contains 10 strings
let bookId = [
    'the_alchemist',
    'sufism',
    'essentials_of_the_islamic_faith',
    'questions_and_answers_about_islam',
    'love_and_tolerance',
    'speech_and_power_of_expression',
    'from_seed_to_cedar',
    'so_that_others_may_live',
    'towards_the_lost_paradise',
    'inkisar'
];

//  Q 4- object containing information for each book {ID, title, language and author}.
let bookInfo = {
    the_alchemist: {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        language: 'English',
        id: 'the_alchemist'
    },
    sufism: {
        title: 'Sufism',
        author: 'M.Fethullah Gülen',
        language: 'English',
        id: 'sufism'
    },
    essentials_of_the_islamic_faith: {
        title: 'Essentials of the Islamic Faith',
        author: 'M.Fethullah Gülen',
        language: 'English',
        id: 'essentials_of_the_islamic_faith'
    },
    questions_and_answers_about_islam: {
        title: 'Questions Answers About Islam',
        author: 'M.Fethullah Gülen',
        language: 'English',
        id: 'questions_and_answers_about_islam'
    },
    love_and_tolerance: {
        title: 'Love and Tolerance',
        author: 'M.Fethullah Gülen',
        language: 'English',
        id: 'love_and_tolerance'
    },
    speech_and_power_of_expression: {
        title: 'Speech and Power of Expression',
        author: 'M.Fethullah Gülen',
        language: 'English',
        id: 'speech_and_power_of_expression'
    },
    from_seed_to_cedar: {
        title: 'From Seed to Cedar',
        author: 'M.Fethullah Gülen',
        language: 'English',
        id: 'from_seed_to_cedar'
    },
    so_that_others_may_live: {
        title: 'So That Others May Live',
        author: 'M.Fethullah Gülen',
        language: 'English',
        id: 'so_that_others_may_live'
    },
    towards_the_lost_paradise: {
        title: 'Towards the Lost Paradise',
        author: 'Osman Şimşek',
        language: 'English',
        id: 'towards_the_lost_paradise'
    },
    inkisar: {
        title: 'Inkisar',
        author: 'Osman Şimşek',
        language: 'English',
        id: 'inkisar'
    }
};
// Lets add books images.
let bookImg = {
    the_alchemist: 'img/the_alchemist.jpg',
    sufism: 'img/sufism.jpg',
    essentials_of_the_islamic_faith: 'img/essentials_of_the_islamic_faith.jpg',
    questions_and_answers_about_islam: 'img/questions_and_answers_about_islam.jpg',
    love_and_tolerance: 'img/love_and_tolerance.jpg',
    speech_and_power_of_expression: 'img/speech_and_power_of_expression.jpg',
    from_seed_to_cedar: 'img/from_seed_to_cedar.jpg',
    so_that_others_may_live: 'img/so_that_others_may_live.jpg',
    towards_the_lost_paradise: 'img/towards_the_lost_paradise.jpg',
    inkisar: 'img/inkisar.jpg'
};

// Q 3-  generate a ul with li elements for each book ID

// function makeIdFromTitle() {
//     let ul = document.createElement('ul');
//     for (let i = 0; i < bookId.length; i++) {
//         let id = bookId[i];
//         let li = document.createElement('li');
//         li.setAttribute('id', id);
//         ul.appendChild(li);


//     }
//     console.log(ul);
//     //document.body.appendChild(ul);
// }
// makeIdFromTitle();

// Q 4...7
function giveMeUl() {
    let ul = document.createElement('ul');
    ul.setAttribute('id', "listOfBook");

    for (let i = 0; i < bookId.length; i++) {
        const id = bookId[i];
        const title = bookInfo[id].title;
        const language = bookInfo[id].language;
        const author = bookInfo[id].author;
        // create HTML element
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        let img = document.createElement('img');
        const p = document.createElement('p');
        const span = document.createElement('span');
        h1.innerHTML = title;
        p.innerHTML = 'language: ' + language;
        span.innerHTML = "by :" + author;
        // inject the ID insaid  li
        li.setAttribute('id', id);
        li.setAttribute('class', 'bookItem');
        // inject them inside `ul`
        li.appendChild(h1);
        // creat img
        for (let key of Object.keys(bookImg)) {
            let valueOfKeys = bookImg[key];
            //console.log(valueOfKeys);
            //console.log(key);
            if (id == key) {
                img.src = valueOfKeys;
                img.alt = key;
            }
        }
        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(span);
    }
    // Open console
    console.log(ul);
    document.body.appendChild(ul);

}
giveMeUl();