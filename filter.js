const sections = document.querySelectorAll('.section');

const p = document.querySelectorAll('p');

let dragItem = null;

for(let item of p){
      item.addEventListener('dragstart', function ()  {
          dragItem = this;
        setTimeout(() => {
            this.style.display = 'none'
        }, 0)
      });

      item.addEventListener('dragend', function ()  {
      setTimeout(() => {
          this.style.display = 'block'
      }, 0);
      dragItem = null;
    })
}

for(let section of sections){
    section.addEventListener('dragover', dragOver)
    section.addEventListener('dragenter', dragEnter)
    section.addEventListener('dragleave', dragLeave)
    section.addEventListener('drop', drop)
}

function dragOver(e){
    e.preventDefault();
    console.log('drag over');
}

function dragEnter(){
  console.log('drag entered');

}

function dragLeave(){
    console.log('drag left');
  
  }

  function drop(){
   
    this.append(dragItem)
  }