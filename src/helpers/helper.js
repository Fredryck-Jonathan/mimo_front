export const verifPassword = (value, setError) => {
    // Regex : min 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre, 1 spécial
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!value) {
        setError("Le mot de passe est requis");
        return false;
    }

    if (!passwordRegex.test(value)) {
        setError(
            "Le mot de passe doit contenir : 8 caractères minimum, une majuscule, une minuscule, un chiffre et un caractère spécial"
        );
        return false;
    }

    setError(""); // pas d'erreur
    return true;
}


export const verifEmail =(value, setError) => {
    // Regex simple pour email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!value) {
        setError("L'email est requis");
        return false;
    }

    if (!emailRegex.test(value)) {
        setError("L'email n'est pas valide");
        return false;
    }

    setError(""); // pas d'erreur
    return true;
}
