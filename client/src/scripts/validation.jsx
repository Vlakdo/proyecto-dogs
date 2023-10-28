const validate = (form, setErrors, errors) => {
    
    const auxError = {
        email: "",
        password: ""
    };

    //Valide email:
    if(!form.email)
    {
        //setErrors({...errors, email: "Email vacio"});
        auxError.email = "Email vacio";
    }
    else
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email))
        {
            if(form.email.length <= 35)
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
    if(!form.password)
    {
        //setErrors({...errors, password: "Password vacio"});
        auxError.password = "Password vacio";
    }
    else
    {
        if(form.password.length >= 6 && form.password.length <= 10)
        {
            if(/(?=.*?[0-9])/.test(form.password))
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
        else if(form.password.length < 6)
        {
            //setErrors({...errors, password: "Error debe tener mínimo 6 caracteres"});
            auxError.password = "Error debe tener mínimo 6 caracteres";
        }
        else if(form.password.length < 6)
        {
            //setErrors({...errors, password: "Error debe tener Maximo 6 caracteres"});
            auxError.password = "Error debe tener Maximo 6 caracteres";
        }
    }

    setErrors(auxError);
}

export {
    validate
};