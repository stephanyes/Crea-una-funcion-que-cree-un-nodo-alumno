//Crear una función que reciba como parámetro un objeto alumno y devuelva como resultado un nodo <li> con los datos del alumno.
function students (student){
    var studentList = document.createElement('li');
    studentList.className= 'list-group-item';
    studentList.id = student.dni;

    var studenth1 = document.createElement('h1');
    studenth1.textContent = student.firstName + ' ' + student.lastName;
    studentList.append(studenth1);

    var studenth3 = document.createElement('h3');
    studenth3.textContent = student.dni;
    studentList.append(studenth3);

    var studentp = document.createElement('p');
    studentp.textContent = student.email;
    studentList.append(studentp);
    return studentList;
}
/*var student = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
  }*/
function NewStudents(firstName, lastName, dni, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni= dni;
    this.email = email;
}
var caca = new NewStudents ("Josele", "TuVieja", 3543535, "asudhasd@hotmail.com");
  var studentNode = students(caca);
  document.body.append(studentNode);
