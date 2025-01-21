function todoList(todos) {
  
    
    const content = document.getElementById('content')
    const ul = document.createElement('ul')
    todos.forEach(tod => {
      const li = document.createElement('li')
      li.textContent = tod.todo
      li.addEventListener('click', function() {
    
        if (li.style.textDecoration === 'line-through') {
        
          li.style.textDecoration = ''
        } else {
          li.style.textDecoration = 'line-through'
        }
      })
  
      
      ul.append(li);
    })
    content.appendChild(ul);
  }
  
  
  


const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);