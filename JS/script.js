const inputE = document.getElementById('input')
const btnE = document.getElementById('btn')          // метод поиска по id
const listE = document.getElementById('list_container')

btnE.addEventListener('click', onAddTodo)               // отлавливатель возникновения события, обработчик addEventListener (событие, Колбэк-функция)
function onAddTodo (){
    const text = inputE.value                                // value 	указывает значение атрибута
    // if(!text.trim()){                                     // проверка на пустую строку, но list-style-type: none - решает проблему без проверки
    //     alert('please add some text')                     // метод trim() удаляет пробельные символы с начала и конца строки
    //     return
    // }

    const liE = document.createElement('li')        // создание элемента li
    liE.textContent = text                                  // Свойство textContent предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>
    listE.append(liE)                                       // .append - метод вставки получаемого елемента в обект (внутрь и в конец обекта)
    inputE.value = ''                                       // возвращает пустую строку в input
    inputE.focus()                                          // устанавливает фокус на указанный элемент

}