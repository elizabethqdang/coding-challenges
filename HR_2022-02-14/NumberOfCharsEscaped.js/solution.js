function numberOfCharactersEscaped(expression) {

    let open = false;
    let count = 0;
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let i=0; i<expression.length; i++) {
        const char = expression[i];
        const lowerCase = alpha.includes(expression[i]);
        const prevExclamation = expression[i - 1] === '!';
                
        if (char === '#') open = !open;
        if (open && lowerCase && prevExclamation) count++;
    }
    
    return count;
}