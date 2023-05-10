function validate(arg) {
   let error = {};
   const regexName = /^[A-Za-z]+$/;
   const regexUrl =  /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
  
   if (!regexName.test(arg.name)) {
    error.name = "Por favor ingrese el nombre del pokemon no tiene que tener numero y caracteres"
   }
   if (!regexUrl.test(arg.image)) {
    error.image = "se necesita la URL de una imagen valida"
   }
   if (arg.hp <= 0 || arg.hp > 150) {
    error.hp = "El valor de Hp debe ser mayor que 0 pero no exceder los 150 puntos"
   }
   if (arg.attack <= 0 || arg.attack > 150) {
    error.attack = "El valor de Ataque debe ser mayor que 0 pero no exceder los 150 puntos"
   }
   if (arg.defense <= 0 || arg.defense > 150) {
    error.defense = "El valor de defensa debe ser mayor que 0 pero no exceder los 150 puntos"
   }
   if (arg.speed <= 0 || arg.speed > 150) {
    error.speed = "El valor de velocidad debe ser mayor que 0 pero no exceder los 150 puntos"
   }
   if (arg.height <= 0 || arg.height > 150) {
    error.height = "El valor de peso debe ser mayor que 0 pero no exceder los 150 puntos"
   }
   if (arg.weight <= 0 || arg.weight > 150) {
    error.weight = "El valor de altura debe ser mayor que 0 pero no exceder los 150 puntos"
   }
   if (arg.types.length <= 0 || arg.types.length > 2) {
    error.types = "Elija al menos un tipo maximo dos"
   }
   return error
}

export default validate;