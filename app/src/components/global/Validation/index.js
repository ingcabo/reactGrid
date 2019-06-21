

export  const required    = (val) => val && val.length
export  const maxLength   = (len) => (val) => val.length <= len
export  const isNumber    = (val) => !isNaN(Number(val))
export  const minLength   = (len) => (val) => val.length >= len
export  const equealEmail = (val) => val ===  "fdsfds"
