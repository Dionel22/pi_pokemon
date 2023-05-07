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
    error.hp = "tiene que ser mayor a 0 y menor a 100"
   }
   if (arg.attack <= 0 || arg.attack > 100) {
    error.attack = "tiene que ser mayor a 0 y menor a 100"
   }
   if (arg.defense <= 0 || arg.defense > 100) {
    error.defense = "tiene que ser mayor a 0 y menor a 100"
   }
   if (arg.speed <= 0 || arg.speed > 100) {
    error.speed = "tiene que ser mayor a 0 y menor a 100"
   }
   if (arg.height <= 0 || arg.height > 100) {
    error.height = "tiene que ser mayor a 0 y menor a 100"
   }
   if (arg.weight <= 0 || arg.weight > 100) {
    error.weight = "tiene que ser mayor a 0 y menor a 100"
   }
   if (arg.types.length <= 0 || arg.types.length > 2) {
    error.types = "tiene que tener por lo menos 1 a 2 tipos"
   }
   console.log(error)
   return error
}

export default validate;