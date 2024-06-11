function copyPassword(){
    const passwordInput = document.getElementById('password')
    const copyButton = document.getElementById('copy')

    passwordInput.disabled = false
    passwordInput.select()
    document.execCommand('copy')
    passwordInput.disabled = true

    copyButton.textContent = 'Copiado'
    setTimeout(() =>{
        copyButton.textContent = 'Copiar'
    }, 2000)
}