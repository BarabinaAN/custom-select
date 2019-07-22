export let select = function(){
    let selectWrap = document.querySelectorAll('.custom-select');

    function createSelect() {
        for ( let i = 0; i < selectWrap.length; i++ ) {          
            let newList = createItem( selectWrap[i], null, 'select-list' ), // создаем обертку для списка
                option = selectWrap[i].querySelectorAll('select')[0],
                current = createItem( selectWrap[i], newList, 'current-select' ); // создаем элемент со стандартным значением

            current.innerHTML = 'не написано';
            
            // создаем элементы списка по клику на нужный select
            selectWrap[i].addEventListener('click', function(e) {
                let selectItem = selectWrap[i].querySelectorAll('.select-item'),
                    selectList = document.querySelectorAll('.select-list'),
                    target = e.target;    

                // удаляем элементы списка при клике на один из элементов
                for (let i = 0; i < selectList.length; i++) {
                    if ( target.classList.contains('current-select') || target.classList.contains('select-item') && selectList[i].classList.contains('active') ) {
                        removeItem( selectList[i].querySelectorAll('.select-item') );
                        selectList[i].classList.remove('active');
                        current.innerHTML = target.innerHTML;
                    };
                }

                // создаем элементы списка при клике на select
                if ( selectItem.length == 0 ) {
                    newList.classList.add('active');
                    for ( let i = 0; i < option.length; i++ ) {
                        let item = createItem(newList, null, 'select-item');
                        item.textContent = option[i].innerHTML;
                    }
                }
            });
        }
    }

    // удаляем элементы списка при клике вне списка
    document.addEventListener('click', function(e){
        let selectList = document.querySelectorAll('.select-list'),
            target = e.target;    

        for (let i = 0; i < selectList.length; i++) {
            if ( !target.classList.contains('current-select') && selectList[i].classList.contains('active') ) {
                removeItem( selectList[i].querySelectorAll('.select-item') );
                selectList[i].classList.remove('active');
            };
        }
    });

    createSelect();

    function createItem(wrap, list, cl) {
        let item = document.createElement('div');
        item.classList.add(cl);
        return wrap.insertBefore(item, list);
    }

    function removeItem(par) {
        for ( let i = 0; i < par.length; i++ ) {
            par[i].parentNode.removeChild(par[i]); 
        }
    }
}