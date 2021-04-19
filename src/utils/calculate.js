const Calculate=(expression) => {
    var newfn=function(){
      return `${matched[0]}`
    }
    const matched = (new RegExp('([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*')).exec(expression)
  
    if (!matched) {
      return 0;
    }
  
    if (/^[*+]/.test(expression)){
      return () => {
        throw new Error('Cannot start the expression with invalid operators')
      }
    }
    return newfn()
  }
  export default Calculate;