import '../sass/main.scss';

// ------------------------------------------------------ Task 3.1 ------------------------------------------------------
console.log('%c -----Task 3.1-----', 'color: tomato')
const markupTask = document.querySelector('.markup-task')

const delay = ms => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(ms)}, ms)
    });
    return promise
};

const logger = time => {
    console.log(`Fulfilled after ${time}ms`);
    markupTask.insertAdjacentHTML('beforeend', `<li>Fulfilled after ${time}ms</li>`)
};

// Tests
delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms

// ------------------------------------------------------ Task 3.2 ------------------------------------------------------

delay(3000).then(() => { markupTask.insertAdjacentHTML('beforeend', `<p class="task">Task 3.2</p> <p>Please check Console --></p>`) });
setTimeout(() => {
    console.log('%c -----Task 3.2-----', 'color: tomato')
}, 3000)

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username) => {
    const updatedUsers = allUsers.map(user =>
        user.name === username ? { ...user, active: !user.active } : user
        );
        
        return Promise.all(updatedUsers)
    };
    
    // Currently the function works like this
    // toggleUserState(users, 'Mango', console.table);
    // toggleUserState(users, 'Ajax', console.table);
    
    // The function should work like this
setTimeout(() => {
        toggleUserState(users, 'Mango').then(console.table);
}, 3000)
setTimeout(() => {
        toggleUserState(users, 'Ajax').then(console.table);
}, 4000)
    
// ------------------------------------------------------ Task 3.3 ------------------------------------------------------

delay(5000).then(() => { markupTask.insertAdjacentHTML('beforeend', `<p class="task">Task 3.3</p> <p>Please check Console --></p>`) });
setTimeout(() => {
    console.log('%c -----Task 3.3-----','color: tomato')
}, 5000)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    return new Promise((resolve, reject) => {
        const delay = randomIntegerFromInterval(200, 500);
    
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
    
        if (canProcess) {
          resolve({ id: transaction.id, time: delay });
        } else {
          reject(transaction.id);
        }
      }, delay);
    })
};

const logSuccess = ({ id, time }) => {
  console.log(`✅Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`❌Error processing transaction ${id}. Please try again later.`);
};

// Currently the function works like this
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);

// The function should work like this
setTimeout(() => {
        makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
}, 5000)
setTimeout(() => {
        makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
}, 6000)