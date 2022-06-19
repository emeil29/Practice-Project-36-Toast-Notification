const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

i = 0
const messages = [ 'Hello 1', 'Hello 2', 'Hello 3', 'Hello 4', 'Hello 5']


button.addEventListener('click', () => newNotification()) 

function newNotification (){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerHTML = getRandom()
    toasts.appendChild(notif)
    setTimeout(() =>{
        notif.remove()
    }, 3000)
}
function getRandom(){
    return messages[Math.floor(Math.random() * messages.length)]
}
