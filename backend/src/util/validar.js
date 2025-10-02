
const validarEmail = (value)=>{
    const validator = {
        isValid: true,
        errorMessage: null,
    }

    if (isEmpty(value)){
        validator.isValid = false
        validator.errorMessage = 'O email é obrigatorio'
        return validator
    }   

    const regex = new RegExp("/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i")

    if (!regex.test(value)){ 
        validator.isValid = false
        validator.errorMessage = 'O email precisa ser válido'
        return validator
    }

    return validator
}

const validarNome = (value)=>{
    const validator = {
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)){
        validator.isValid = false
        validator.errorMessage = 'O Campo é obrigatorio'
        return validator
    }

    const min = 3

    if (value.length < min){
        validator.isValid = false
        validator.errorMessage = 'O nome deve ter no minimo 3 letras'
        return validator
    }

    const regex = /^[a-zA-Z]/

    if (!regex.test(value)){
        validator.isValid = false
        validator.errorMessage = "O campo deve conter apenas letras"
    }

    return validator
}