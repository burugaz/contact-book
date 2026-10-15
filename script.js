//-------------------------------------------------------------------
// Wire up this search pattern app so that inputting a full or partial name brings up the matching contact or contacts
// import { contactsArr } from "./contactsData.js"

// const patternSearchInput = document.getElementById('pattern-search-input')
// const patternSearchSubmit = document.getElementById('pattern-search-submit')
// const contactDisplay = document.getElementById('contact-display')

// function renderContact(contactObj) {
//     const contactCard = `
//     <aside class="contact-card">
//         <p>${contactObj.name}</p>
//         <p>${contactObj.email}</p>
//         <p>${contactObj.phone}</p>
//     </aside>
//     `
//     contactDisplay.innerHTML += (contactCard)
// }

// patternSearchSubmit.addEventListener('click', function(){
//     const pattern = patternSearchInput.value.toLowerCase()
//     contactDisplay.innerHTML = ''
//     const finalArr = contactsArr.filter(function(contact){
//         return contact.name.toLowerCase().includes(pattern)
//     })
//     finalArr.forEach(function(contact){
//         renderContact(contact)
//     })
// })

// Решение препода из видео
import { contactsArr } from "./contactsData.js"
const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

function findMatchingContacts(contactsArr, pattern){
    const regex = new RegExp(pattern, 'i')
    contactsArr.filter(function(contact){
        return regex.test(contact.name)
    })
    .forEach(function(contact){
        renderContact(contact)
    })
}

patternSearchSubmit.addEventListener('click', function(){
    findMatchingContacts(contactsArr, patternSearchInput)
})

function renderContact(contactObj){
    const { name, email, phone } = contactObj

    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')

    const nameEl = document.createElement('p')
    const emailEl = document.createElement('p')
    const phoneEl = document.createElement('p')

    nameEl.innerText = name
    emailEl.innerText = email
    phoneEl.innerText = phone

    contactCard.appendChild(nameEl)
    contactCard.appendChild(emailEl)
    contactCard.appendChild(phoneEl)

    contactDisplay.appendChild(contactCard)
}
