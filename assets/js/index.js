let state = false
const toggleButton = document.querySelector('.toggle__button')

function toggle() {
    return state = !state
}

toggleButton.addEventListener('click', () => {
    console.log(toggle())
})
