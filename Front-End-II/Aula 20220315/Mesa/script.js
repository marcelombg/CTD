const initApp = () => {
    const listOfInputs = document.querySelectorAll('input[type="text"]');
    const submit = document.querySelector('input[type="submit"]');
    const form = document.querySelector('form');
  
    styleElements(listOfInputs, form);
    getDataFromInputs(listOfInputs, submit);
  
  }
  
  const styleElements = (listOfInputs, form) => {
  
    document.body.style.padding = '20px';
    form.style.display = 'grid';
    form.style.gridTemplateColumns = 'repeat(3, 1fr)';
    form.style.gap = '25px';
  
    listOfInputs.forEach(input => {
      input.style.borderRadius = '3px';
      input.style.padding = '5px';
    })
  
  }
  
  const getDataFromInputs = ([title, description, img], submit) => {
  
    submit.addEventListener('click', (e) => {
      e.preventDefault();
  
      const obj = {
        title: title.value,
        description: description.value,
        img: img.value,
      }
  
      sendDataToHTML(obj);
  
    })
  
  }
  
  const sendDataToHTML = ({ title, description, img }) => {
    const card =
      `
        <li>
          <img
            src="${img}"
          >
            <p>${title}</p>
            <p>${description}</p>
        </li>
      `
    const container = document.querySelector('ul');
  
    if (!container) {
      const ul = document.createElement('ul');
      document.body.appendChild(ul);
      ul.innerHTML += card
  
    } else {
      container.innerHTML += card
    }
  
    styleCards();
    getDataFromInputs();
    
  }
  
  const styleCards = () => {
    const container = document.querySelector('ul');
    const cards = document.querySelectorAll('li');
  
    cards.forEach(card => {
      card.style.listStyle = 'none';
      card.querySelector('img').style.width = '100%';
    })
  
    container.style.display = 'grid';
    container.style.gridTemplateColumns = '1fr';
    container.style.margin = '25px 0 25px';
    container.style.padding = '0';
  
  }
  
  initApp();
  