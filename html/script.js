;(function () {
  const button = document.querySelector('.profile button')
  const formInner = document.querySelector('.form__inner')
  const formInputs = document.querySelectorAll('.form input')
  const buttonSend = document.querySelector('.button-mute')

  button.addEventListener('click', (e) => {
    e.preventDefault()
    formInner.removeAttribute('disabled')

    for (let item of formInputs) {
      item.classList.add('is-edit')
    }

    buttonSend.removeAttribute('disabled')
    buttonSend.classList.remove('button-mute')
    buttonSend.classList.add('button-send')
  })
})()
