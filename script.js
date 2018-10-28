var elementById1 = document.getElementById('div1');
var elementById2 = document.getElementById('div2');
var elementByName = document.getElementsByName('div2');
var elementByClassName = document.getElementsByClassName('div3')[0];

console.log(elementById1.id);
console.log(elementByName);
console.log(elementByClassName.className);

//We can change id
elementById1.id = 'newId'
console.log(elementById1.id)

// We can add new class
elementByClassName.classList.add('newClass');
console.log(elementByClassName.className);

//We can change text on the website
elementById1.innerHTML = '<p> change text in div1</p>';
elementById2.innerHTML = 'I change text in div2';