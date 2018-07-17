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
      if (values.bandUrl.search("/") !== -1) {
        errors.bandUrl = 'cannot have /'
      }
      if (values.bandUrl.search(";") !== -1) {
        errors.bandUrl = 'cannot have ;'
      }
      if (values.bandUrl.search(":") !== -1) {
        errors.bandUrl = 'cannot have :'
      }
      if (values.bandUrl.search("@") !== -1) {
        errors.bandUrl = 'cannot have @'
      }
      if (values.bandUrl.search("=") !== -1) {
        errors.bandUrl = 'cannot have ='
      }
      if (values.bandUrl.search("&") !== -1) {
        errors.bandUrl = 'cannot have &'
      }
      if (values.bandUrl.search(">") !== -1) {
        errors.bandUrl = 'cannot have >'
      }
      if (values.bandUrl.search("<") !== -1) {
        errors.bandUrl = 'cannot have <'
      }
      if (values.bandUrl.search("#") !== -1) {
        errors.bandUrl = 'cannot have #'
      }
      if (values.bandUrl.search("%") !== -1) {
        errors.bandUrl = 'cannot have %'
      }
      // if (values.bandUrl.search("\^") !== -1) {
      //   errors.bandUrl = 'cannot have ^'
      // }
      if (values.bandUrl.search("~") !== -1) {
        errors.bandUrl = 'cannot have ~'
      }
      if (values.bandUrl.search("`") !== -1) {
        errors.bandUrl = 'cannot have `'
      }
      if (values.bandUrl.search("\"") !== -1) {
        errors.bandUrl = 'cannot have \"'
      }
      if (values.bandUrl.search("\'") !== -1) {
        errors.bandUrl = 'cannot have \''
      }
      // if (values.bandUrl.search(".") !== -1) {
      //   errors.bandUrl = 'cannot have .'
      // }
      if (values.bandUrl.search(",") !== -1) {
        errors.bandUrl = 'cannot have ,'
      }
      // if (values.bandUrl.search("\[") !== -1) {
      //   errors.bandUrl = 'cannot have ['
      // }
      // if (values.bandUrl.search("\]") !== -1) {
      //   errors.bandUrl = 'cannot have ]'
      // }
      if (values.bandUrl.search("=") !== -1) {
        errors.bandUrl = 'cannot have ='
      }
      // if (values.bandUrl.search("+") !== -1) {
      //   errors.bandUrl = 'cannot have +'
      // }
      // if (values.bandUrl.search("*") !== -1) {
      //   errors.bandUrl = 'cannot have *'
      // }
      // if (values.bandUrl.search("?") !== -1) {
      //   errors.bandUrl = 'cannot have ?'
      // }
      // if (values.bandUrl.search("\\") !== -1) {
      //   errors.bandUrl = 'cannot have \\'
      // }
      // if (values.bandUrl.search("|") !== -1) {
      //   errors.bandUrl = 'cannot have |'
      // }
      if (values.bandUrl.search("{") !== -1) {
        errors.bandUrl = 'cannot have {'
      }
      if (values.bandUrl.search("}") !== -1) {
        errors.bandUrl = 'cannot have }'
      }
      // if (values.bandUrl.search("(") !== -1) {
      //   errors.bandUrl = 'cannot have .'
      // }
      // if (values.bandUrl.search(")") !== -1) {
      //   errors.bandUrl = 'cannot have .'
      // }

    }
    return errors
  }
  
  export default validate