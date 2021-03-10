function replace_special(data_text) {
  data_text = data_text.replace(" ", "");

  // TODO: Make this fucntion respond to all below commented lines

  // data_text = data_text.replace('!', '');
  // data_text = data_text.replace('@', '');
  // data_text = data_text.replace('#', '');
  // data_text = data_text.replace('$', '');
  // data_text = data_text.replace('%', '');
  // data_text = data_text.replace('^', '');
  // data_text = data_text.replace('&', '');
  // data_text = data_text.replace('*', '');
  // data_text = data_text.replace('(', '');
  // data_text = data_text.replace(')', '');
  // data_text = data_text.replace('-', '');
  // data_text = data_text.replace('_', '');
  // data_text = data_text.replace('=', '');
  // data_text = data_text.replace('+', '');
  // data_text = data_text.replace('[', '');
  // data_text = data_text.replace(']', '');
  // data_text = data_text.replace('{', '');
  // data_text = data_text.replace('}', '');
  // data_text = data_text.replace(';', '');
  // data_text = data_text.replace(':', '');
  // data_text = data_text.replace("'", '');
  // data_text = data_text.replace('"', '');
  // data_text = data_text.replace('<', '');
  // data_text = data_text.replace(',', '');
  // data_text = data_text.replace('>', '');
  // data_text = data_text.replace('.', '');
  // data_text = data_text.replace('/', '');
  // data_text = data_text.replace('?', '');
  return data_text;
}

function search_word() {
  let li = "";
  let text = "";
  let pointer = 0;

  const input = document.getElementById("word_entry");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("table");
  const ul = table.getElementsByTagName("ul");
  const length = ul.length;

  for (pointer; pointer < length; pointer++) {
    li = ul[pointer].getElementsByTagName("li")[0];

    if (li) {
      data_text = li.textContent || li.innerText;
      text = replace_special(data_text);

      if (text.toUpperCase().indexOf(filter) > -1) {
        ul[pointer].style.display = "";
      } else {
        ul[pointer].style.display = "none";
      }
    }
  }
}
