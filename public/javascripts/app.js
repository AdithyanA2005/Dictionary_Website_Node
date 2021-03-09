function search_word() {
    let li = '';
    let text = '';
    let pointer = 0;

    const input = document.getElementById("word_entry");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("table");
    const ul = table.getElementsByTagName("ul");
    const length = ul.length;

    for(pointer; pointer < length; pointer++) {
        li = ul[pointer].getElementsByTagName('li')[0];        

        if(li) {
            text = li.textContent || li.innerText;

            if(text.toUpperCase().indexOf(filter) > -1) {
                ul[pointer].style.display = '';
            }
            else {
                ul[pointer].style.display = 'none';
            }
        }
    }
}


