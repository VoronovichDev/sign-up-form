const pass = document.querySelector('#password')
const rePass = document.querySelector('#confirm-password')


const errorMsg = document.createElement('p')
errorMsg.innerText = '*Passwords do not match'
errorMsg.style.textTransform = 'none'
errorMsg.style.color = '#ff4141'



if (pass.value === '') {
   pass.classList.add('error')
   pass.after(errorMsg)
   rePass.classList.add('error')
}

pass.onblur = (e) => {
   if (pass.value !== '') {
      pass.classList.remove('error')
      errorMsg.remove()
   } else if (pass.value === '') {
      pass.classList.add('error')
      rePass.classList.add('error')
      pass.after(errorMsg)
   } else if (pass.value === rePass.value && pass.value !== '') {
      pass.classList.remove('error')
      rePass.classList.remove('error')
      errorMsg.remove()
   } else if (pass.value !== rePass.value) {
      pass.classList.add('error')
      rePass.classList.add('error')
      pass.after(errorMsg)
   }

}
rePass.onblur = (e) => {
   if (rePass.value === pass.value && rePass.value !== '') {
      rePass.classList.remove('error')
      pass.classList.remove('error')
      errorMsg.remove()
   } else {
      pass.classList.add('error')
      rePass.classList.add('error')
      pass.after(errorMsg)
   }
}