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
   if (arg.attack <= 0 || arg.attack > 100) {
    error.attack = "tiene que ser attack"
   }
   if (arg.defense <= 0 || arg.defense > 100) {
    error.defense = "tiene que ser defense"
   }
   if (arg.speed <= 0 || arg.speed > 100) {
    error.speed = "tiene que ser speed"
   }
   if (arg.height <= 0 || arg.height > 100) {
    error.height = "tiene que ser height"
   }
   if (arg.weight <= 0 || arg.weight > 100) {
    error.weight = "tiene que ser weight"
   }
   if (arg.types.length <= 0 || arg.types.length > 2) {
    error.types = "tiene que tener por lo menos 1 genero a dos"
   }
   console.log(error)
   return error
}

export default validate;