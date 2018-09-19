const validate = values => {
    const errors = {}
    // const unsafeChars = [" ", ";", "/", ":", "@", "=", "&", ">", "<", "#", "%", "^", "~", "`", "\"","\'"]
    if (!values.username) {
      errors.username = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    if (values.bandName){
      //   if (values.bandName.search(" ") !== -1) {
      //     errors.bandName = 'url cannot have spaces'
      // }
      if (values.bandName.search("/") !== -1) {
        errors.bandName = 'cannot have /'
      }
      if (values.bandName.search(";") !== -1) {
        errors.bandName = 'cannot have ;'
      }
      if (values.bandName.search(":") !== -1) {
        errors.bandName = 'cannot have :'
      }
      if (values.bandName.search("@") !== -1) {
        errors.bandName = 'cannot have @'
      }
      if (values.bandName.search("=") !== -1) {
        errors.bandName = 'cannot have ='
      }
      if (values.bandName.search("&") !== -1) {
        errors.bandName = 'cannot have &'
      }
      if (values.bandName.search(">") !== -1) {
        errors.bandName = 'cannot have >'
      }
      if (values.bandName.search("<") !== -1) {
        errors.bandName = 'cannot have <'
      }
      if (values.bandName.search("#") !== -1) {
        errors.bandName = 'cannot have #'
      }
      if (values.bandName.search("%") !== -1) {
        errors.bandName = 'cannot have %'
      }
      // if (values.bandName.search("\^") !== -1) {
      //   errors.bandName = 'cannot have ^'
      // }
      if (values.bandName.search("~") !== -1) {
        errors.bandName = 'cannot have ~'
      }
      if (values.bandName.search("`") !== -1) {
        errors.bandName = 'cannot have `'
      }
      if (values.bandName.search("\"") !== -1) {
        errors.bandName = 'cannot have "'
      }
      if (values.bandName.search("'") !== -1) {
        errors.bandName = 'cannot have \''
      }
      // if (values.bandName.search(".") !== -1) {
      //   errors.bandName = 'cannot have .'
      // }
      if (values.bandName.search(",") !== -1) {
        errors.bandName = 'cannot have ,'
      }
      // if (values.bandName.search("\[") !== -1) {
      //   errors.bandName = 'cannot have ['
      // }
      // if (values.bandName.search("\]") !== -1) {
      //   errors.bandName = 'cannot have ]'
      // }
      if (values.bandName.search("=") !== -1) {
        errors.bandName = 'cannot have ='
      }
      // if (values.bandName.search("+") !== -1) {
      //   errors.bandName = 'cannot have +'
      // }
      // if (values.bandName.search("*") !== -1) {
      //   errors.bandName = 'cannot have *'
      // }
      // if (values.bandName.search("?") !== -1) {
      //   errors.bandName = 'cannot have ?'
      // }
      // if (values.bandName.search("\\") !== -1) {
      //   errors.bandName = 'cannot have \\'
      // }
      // if (values.bandName.search("|") !== -1) {
      //   errors.bandName = 'cannot have |'
      // }
      if (values.bandName.search("{") !== -1) {
        errors.bandName = 'cannot have {'
      }
      if (values.bandName.search("}") !== -1) {
        errors.bandName = 'cannot have }'
      }
      // if (values.bandName.search("(") !== -1) {
      //   errors.bandName = 'cannot have .'
      // }
      // if (values.bandName.search(")") !== -1) {
      //   errors.bandName = 'cannot have .'
      // }

    }
    return errors
  }
  
  export default validate