
// dropdown menu
class Dropdown {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector('.dropdown-button');
      this.content = this.element.querySelector('.dropdown-content');
      this.button.addEventListener('click', () => 
          this.toggleContent())
    }
    toggleContent() {
      this.content.classList.toggle('dropdown-hidden')
    }
  }
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
  
  

//tabs 
class TabLink {
  constructor(element) {
    this.element=element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', (e) => 
    this.select(e));
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(link => link.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    const items = document.querySelectorAll('.tabs-item');
    items.forEach( item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected')

  }
}
const links = document.querySelectorAll('.tabs-link');
links.forEach(function(links){
  return new TabLink(links)
});


