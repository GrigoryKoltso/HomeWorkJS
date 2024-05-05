// Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:
let elems = [
'<div><p class="text">Home</p></div>', 
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 
// Результат: ['Home','About','FAQ','Contacts']
let arr = [];
for(let elem of elems) {
    let start = elem.indexOf('>') +17
    let end = elem.lastIndexOf('<') -4
    let text = elem.slice(start, end);
    arr.push(text)

}

console.log(arr);


// // Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру: 
let words = ['стакан','молоко','табуретка','вода'] 

// // Результат: ['Cтакан','Молоко','Табуретка','Вода']

function initCap(array) {
    let arr = [];
    let big = ''
    for(let elem of words) {
    big = elem[0].toUpperCase()
    big+=elem.slice(1)
    arr.push(big)
    }
    return arr
}

console.log(initCap(words));

// Задан массив names. 
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined 

let names = [ 
'Steven King', 
'Jonh Snow', 
'Oliver', 
'Neena Stich',
 'Grant Laster', 
'Persius Master', 
'Lest' 
] 

// Результат: [ 
// ['Steven','King'], 
// ['Jonh','Snow'], 
// ['Oliver', undefined], 
// ['Neena','Stich'], 
// ['Grant','Laster'], 
// ['Persius','Master'],
// ['Lest', undefined] ]

function getArray() {
    let arr = []
    for(let elem of names) {
    if(elem.split(' ').length === 1){
        arr.push(elem, undefined)
    }else{
        arr.push(elem)
    }
    }
    return arr
}

console.log(getArray(names));