export let select = function(){
    let selectWrap = document.querySelectorAll('.custom-select');

    function createFirstSelect() {
        for ( let i = 0; i < selectWrap.length; i++ ) {
            let newList = createSelectList( selectWrap[i] ),
                defaultSelect = selectWrap[i].querySelectorAll('select')[0];

                let dsds = document.createElement('div');
                dsds.classList.add('current-select');
                selectWrap[i].insertBefore(dsds, newList).innerHTML = 'не написано';
                
                selectWrap[i].addEventListener('click', function(e) {
                    let selectItem = selectWrap[i].querySelectorAll('.select-item'),
                        addList = document.querySelectorAll('.select-list'),
                        target = e.target;    

                    for (let i = 0; i < addList.length; i++) {
                        if ( addList[i].classList.contains('active') ) {
                            removeSelectItem( addList[i].querySelectorAll('.select-item') );
                            addList[i].classList.remove('active');
                            dsds.innerHTML = target.innerHTML;
                        };
                    }
                    
                    if ( selectItem.length == 0 ) {
                        newList.classList.add('active');
                        for ( let i = 0; i < defaultSelect.length; i++ ) {
                            let optionText = defaultSelect[i].innerHTML;
                            createSelectItem(newList, optionText);
                        }
                    }
                });
        }
    }
    createFirstSelect();
    
    function createSelectList(par) {
        let list = document.createElement('div');
        list.classList.add('select-list');
        return par.appendChild(list);
    }

    function createSelectItem(par_1, par_2) {
        let item = document.createElement('div');
        item.classList.add('select-item');
        item.textContent = par_2;
        par_1.appendChild(item);
    }

    function removeSelectItem(par) {
        for ( let i = 0; i < par.length; i++ ) {
            par[i].parentNode.removeChild(par[i]); 
        }
    }

}