export let weather = function(){

    console.log('10')

    var newRequest = new XMLHttpRequest();

    newRequest.open('GET', '../phone.json', true);

    newRequest.send();

    newRequest.onreadystatechange = function() {
    if (this.readyState != 4) return;

    // по окончании запроса доступны:
    // status, statusText
    // responseText, responseXML (при content-type: text/xml)

    if (this.status != 200) {
        // обработать ошибку
        alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
        return;
    }

    // получить результат из this.responseText или this.responseXML
    }
}

