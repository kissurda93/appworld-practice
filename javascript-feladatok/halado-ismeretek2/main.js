import {getUserName} from './toLoadIn.js'

Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/comments'),
    fetch('https://jsonplaceholder.typicode.com/users')
])


.then(async response => {
    const array0 = await response[0].json()
    const array1 = await response[1].json()
    const array2 = await response[2].json()

    return [array0, array1, array2]
})


.then(data => {
    const posts = data[0];
    const comments = data[1];
    const users = data[2];
    // console.log(posts);
    // console.log(comments);
    // console.log(users);
    // console.log(getUserName(2, users));


    const ul = document.querySelector('ul');

    posts.map(element => {
        ul.insertAdjacentHTML('beforeend', 
        `<li>
            <p><strong>ID:</strong> <span>${element.id}</span></p>
            <p><strong>Post Title:</strong> ${element.title}</p>
            <p><strong>User:</strong> <span>${getUserName(element.userId, users)}</span></p>
        </li>`)
    
    });

    const body = document.querySelector('body');

    const listItems = document.querySelectorAll('li');
    listItems.forEach(elem => {
        elem.addEventListener('click', (event) => {

            // e.target.style = 'color: red;'
            // console.log(e.target.firstElementChild.innerText);


            // Dinamikus import ami csak kattintáskor tölti le a neki szükséges kódot:
            import('./toClickEvent.js')
            .then(utils => {
                body.insertAdjacentHTML('afterbegin', 
                `<dialog id="modal">
                    <div>${utils.getPostInfos(event.target, posts)}</div>
                    <div>${utils.getUserInfos(event.target, users, posts)}</div>
                    <div>${utils.getComments(event.target, comments)}</div>
                    <form method="dialog">
                        <button class="exitbtn">Exit</button>
                    </form>
                </dialog>`)

                const modal = document.querySelector('#modal');
                modal.showModal();
            })
        })
    });

    // const teszt = document.querySelector('li:nth-child(1)');
    // console.log(teszt);
    // console.log(getPostInfos(teszt));
    // console.log(getUserInfos(teszt));
    // console.log(getComments(teszt))

});
