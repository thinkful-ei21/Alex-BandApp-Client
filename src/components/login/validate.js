const validate = values => {
    const errors = {}
    const unsafeChars = [" ", ";", "/", ":", "@", "=", "&", ">", "<", "#", "%", "^", "~", "`", "\"","\'"]
    if (!values.username) {
      errors.username = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    if (values.bandUrl){
        if (values.bandUrl.search(" ") !== -1) {
          errors.bandUrl = 'url cannot have spaces'
      }
    }
    return errors
  }
  
  export default validate