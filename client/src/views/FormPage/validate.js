function validate(arg) {
   let error = {};
   const regexName = /[a-zA-Z]+/;
   const regexUrl =  /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
   if (!regexName.test(arg.name)) {
    error.name = "no tiene que tener numero y caracteres"
   }
   if (!regexUrl.test(arg.image)) {
    error.image = "se necesita la URL de una imagen valida"
   }
   if (arg.hp <= 0 || arg.hp > 100) {
    error.hp = "tiene que ser hp"
   }
   console.log(error)
   return error
}

export default validate;