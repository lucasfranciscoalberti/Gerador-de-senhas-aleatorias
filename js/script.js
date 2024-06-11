const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbersChars = '0123456789'
const symbolsChars = '!-$^+%#@)(*&=?.!-$^+%#@)(*&=?.'
const charsRange = document.getElementById('textInput')

function updateTextInput(val) {
    charsRange.value=val; 
}

function getRandomChars(chars){
    const index = Math.floor(Math.random() * chars.length)
    return chars[index]
}

function generatePassword(){
    const passwordInput =  document.getElementById('password')
    const lowercaseCheckbox = document.getElementById('lowercase')
    const uppercaseCheckbox = document.getElementById('uppercase')
    const numberCheckbox = document.getElementById('numbers')
    const symbolsCheckbox = document.getElementById('symbols')
    const excludeDuplicateCheckbox = document.getElementById('exc-duplicate')

    let characters = ''

    if (lowercaseCheckbox.checked) characters += lowercaseChars
    if (uppercaseCheckbox.checked) characters += uppercaseChars
    if (numberCheckbox.checked) characters += numbersChars
    if (symbolsCheckbox.checked) characters += symbolsChars

    if(characters === ''){
        passwordInput.value = ''
        return
    }

    let password = ''
    let length = charsRange.value

    while (password.length < length){
        let char = getRandomChars(characters)
        if (excludeDuplicateCheckbox.checked && password.includes(char)) continue 
        password += char
    }

    passwordInput.value = password
}

