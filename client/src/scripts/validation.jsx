const validate = (newRaza, setErrors, errors, oldRazaData) => {
    
    //errors.nombre = "fgdfg";
    //errors.alturas = "2 dfgdfg";
    //errors.pesos = "3 dfgdfg";
    //errors.anios = "4 dfgdfg";
    //errors.temperamento = "5 dfgdfg";
    //errors.imagenUrl = "6 dfgdfgh";

    //Validar nombre:
    if(newRaza.nombre !== oldRazaData.nombre){
        if(/^[^\d]+$/.test(newRaza.nombre)){

            errors.nombre = "";
        }
        else{
            if(/\d/.test(newRaza.nombre)){
                errors.nombre = "El nombre no debe tener numeros";
            } else {
                errors.nombre = "El nombre esta vacio";   
            }
        }
    }

    //Validar Alturas:
    const auxAlturaMin = Number(newRaza.alturaMinima);
    const auxAlturaMax = Number(newRaza.alturaMaxima);
    if(auxAlturaMin !== Number(oldRazaData.alturaMinima) || auxAlturaMax !== Number(oldRazaData.alturaMaxima)){
        if(auxAlturaMin === 0 || auxAlturaMax === 0)
        {
            errors.alturas = "La altura mínima o máxima no pueden ser 0";
        }
        else if(auxAlturaMin > auxAlturaMax) {

            errors.alturas = "La altura mínima no puede ser mayor que la maxima";
        }
        else {
            errors.alturas = "";
        }
    }

    //Validar Peso:
    const auxPesoMin = Number(newRaza.pesoMinimo);
    const auxPesoMax = Number(newRaza.pesoMaximo);
    if(auxPesoMin !== Number(oldRazaData.pesoMinimo) || auxPesoMax !== Number(oldRazaData.pesoMaximo)){
        if(auxPesoMin === 0 || auxPesoMax === 0)
        {
            errors.pesos = "El peso mínimo o máximo no pueden ser 0";
        }
        else if(auxPesoMin > auxPesoMax) {

            errors.pesos = "El peso mínimo no puede ser mayor que el máximo";
        }
        else {
            errors.pesos = "";
        }
    }

    //Validar Años:
    const auxAnioMin = Number(newRaza.aniosMinimo);
    const auxAnioMax = Number(newRaza.aniosMaximo);
    if(auxAnioMin !== Number(oldRazaData.aniosMinimo) || auxAnioMax !== Number(oldRazaData.aniosMaximo)){
        if(auxAnioMin === 0 || auxAnioMax === 0)
        {
            errors.anios = "El año mínimo o máximo no pueden ser 0";
        }
        else if(auxAnioMin > auxAnioMax) {

            errors.anios = "El año mínimo no puede ser mayor que el máximo";
        }
        else {
            errors.anios = "";
        }
    }
    
    //Validar Temperamento:
    if(newRaza.temperamento.length !== oldRazaData.temperamento.length)
    {
        if(newRaza.temperamento.length === 0){
            errors.temperamento = "Debes agregar por lo menos un temperamento";
        }
        else {
            errors.temperamento = "";
        }
    }

    //validar Imagen url:
    if(newRaza.imagenUrl !== oldRazaData.imagenUrl)
    {
        if(newRaza.imagenUrl === ""){
            errors.imagenUrl = "Debes agrega la url de la imagen";
        }
        else {
            errors.imagenUrl = "";
        }
    }

    setErrors(errors);

    /*//Valide email:
    if(!newRaza.email)
    {
        //setErrors({...errors, email: "Email vacio"});
        auxError.email = "Email vacio";
    }
    else
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newRaza.email))
        {
            if(newRaza.email.length <= 35)
            {
                //setErrors({...errors, email: ""});
                auxError.email = "";
            }
            else
            {
                //setErrors({...errors, email: "Email supera los 35 caracteres"});
                auxError.email = "Email supera los 35 caracteres";
            }
        }
        else
        {
            //setErrors({...errors, email: "Email invalido"});
            auxError.email = "Email invalido";
        }
    }

    //Valide password:
    if(!newRaza.password)
    {
        //setErrors({...errors, password: "Password vacio"});
        auxError.password = "Password vacio";
    }
    else
    {
        if(newRaza.password.length >= 6 && newRaza.password.length <= 10)
        {
            if(/(?=.*?[0-9])/.test(razaData.password))
            {
                //setErrors({...errors, password: ""});
                auxError.password = "";
            }
            else
            {
                //setErrors({...errors, password: "Error debe tener al menos un numero"});
                auxError.password = "Error debe tener al menos un numero";
            }
        }
        else if(newRaza.password.length < 6)
        {
            //setErrors({...errors, password: "Error debe tener mínimo 6 caracteres"});
            auxError.password = "Error debe tener mínimo 6 caracteres";
        }
        else if(newRaza.password.length < 6)
        {
            //setErrors({...errors, password: "Error debe tener Maximo 6 caracteres"});
            auxError.password = "Error debe tener Maximo 6 caracteres";
        }
    }

    setErrors(auxError);*/
}

export {
    validate
};