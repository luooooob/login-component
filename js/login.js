window.addEventListener('load', () => {
  const submitButton = document.getElementById('submit')
  submitButton.addEventListener('click', submit)
})

function submit (e) {
  e.preventDefault()
  const submitButton = document.getElementById('submit')
  if (submitButton.getAttribute('disabled')==="disabled") return
  const tel = document.getElementById('tel')
  if (tel.value.match(/^1\d{10}$/g)) {
    countTime(60)
  } else {
    alert('手机号码错误！')
  }
}

function countTime (time) {
  const submitButton = document.getElementById('submit')
  submitButton.setAttribute('disabled', 'disabled')
  if (time>0) {
    submitButton.innerHTML = `重发验证码(${time}s)`
    setTimeout(() => countTime(--time),1000)
  } else {
    submitButton.innerHTML = `再次获取验证码`
    submitButton.removeAttribute('disabled')
  }
}


