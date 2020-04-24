

export  const required    = (val) => val && val.length
export  const maxLength   = (len) => (val) => val.length <= len
export  const isNumber    = (val) => !isNaN(Number(val))
export  const minLength   = (len) => (val) => val.length >= len
export  const isEmail= (val) => !isEmail(val)
debugger;
export  const emailsMatch = ({emailR,email}) => { return emailR === email; };
