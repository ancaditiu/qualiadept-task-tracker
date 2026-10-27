// ============================================================
// Sesiunea 3: JavaScript Basics (Business Logic & Validare)
// ============================================================
// Cerințe Tehnice (Acceptance Criteria):
// 1. Array de Obiecte: Declară constanta listaTaskuri cu cele 2 task-uri inițiale (id, nume, completat).
// 2. Funcție Săgeată (Arrow Function): proceseazaTaskNou(taskObj) cu validare strictă if/else.
//    - Dacă numele lipsește ("") sau este undefined: afișează mesaj de eroare în consolă.
//    - Dacă datele sunt valide: adaugă noul task în array (push) și afișează mesaj de succes.
// 3. Buclă de Raportare: Parcurge listaTaskuri cu o buclă for și afișează numele fiecărui task.
// ============================================================

// 1. Baza temporară de date (Array de Obiecte)
const listaTaskuri = [
  {
    id: "#1001",
    nume: "Task 1",
    completat: true
  },
  {
    id: "#1002",
    nume: "task 1",
    completat: true
  }
]

// 2. Funcția de Validare (Arrow Function)
const proceseazaTaskNou = (taskObj) => {
  if (taskObj.nume === "" || taskObj.nume === undefined){
    console.log("Eroare: Task-ul trebuie să aibă un nume!")
  } else {
    listaTaskuri.push(taskObj);
    console.log("Task adăugat cu succes!")
  }
}

// 3. Testează funcția apelând-o cu un task invalid și unul valid
proceseazaTaskNou("");
proceseazaTaskNou("Task 3");

// 4. Bucla for pentru raportarea task-urilor din memorie

for(let i=0; i<= listaTaskuri.length; i++){
  console.log(listaTaskuri.nume);
}

// ============================================================
// Sesiunea 4: JS DOM Manipulation (Task Tracker)
// ============================================================
// Cerințe Tehnice:
// 1. Selectare elemente DOM: formular (#add-task-form), input (#task-name), tbody.
// 2. Ascultător de eveniment 'submit' pe formular cu preventDefault().
// 3. Creare dinamică rând nou (document.createElement('tr')).
// 4. Structura rândului: celule <td> cu numele task-ului și buton cu clasa 'delete-row'.
// 5. Inserare în DOM folosind appendChild() sau append().
// 6. Resetare valoare câmp input (input.value = '').
// 7. Ștergere dinamică din DOM cu .remove() la click pe butonul 'delete-row'.
// ============================================================

// 1. Selectare elemente DOM
const formular = document.querySelector('#add-task-form');
const inputTask = document.querySelector('#task-name');
const listaTaskuri = document.querySelector('#active-tasks-list');

// 2. Ascultător eveniment 'submit' și adăugare dinamică în tabel
formular.addEventListener('submit', (event) => {
    // Oprim reîncărcarea paginii
    event.preventDefault();

    // Extragem valoarea (textul) scrisă de utilizator în input
    const textNou = inputTask.value;

    // 3. Generam structura randului
    const taskNou = document.createElement('tr');
    taskNou.className = 'task-item';
    taskNou.textContent = textNou;
    const randNou = document.createElement('td');
    randNou.className = 'task-item';
    const butonDelete = document.createElement('button');
    butonDelete.className = 'delete-row';
    butonDelete.textContent = 'Delete';

    // 4. Îl injectăm în DOM (în interiorul <ul>)
    listaTaskuri.appendChild(taskNou);

    // 5. Curățăm input-ul pentru a face loc următorului task
    inputTask.value = '';

    console.log("Task adăugat cu succes: " + textNou);
});



// 3. Ștergere dinamică din DOM (Event Delegation pe document sau click pe buton)

document.addEventListener('click', function (e) {
  // Verificăm dacă elementul apăsat are clasa 'delete-row'
  if (e.target.classList.contains('delete-row')) {
    // Căutăm cel mai apropiat părinte de tip <tr> și îl ștergem cu .remove()
    e.target.closest('tr').remove();
  }
  console.log("Task sters cu succes!");

});

const butonSubmit = document.querySelector('#add-task-btn');

butonDelete.addEventListener('input', (event) => {
  event.preventDefault();

  if(inputTask === ""){
    bubutonSubmit.disabled = true;
  } else {
    bubutonSubmit.disabled = false;
  }
});

// ============================================================
// Sesiunea 5: JS Asincron (Fetch API & Task-uri Active)
// ============================================================
// Cerințe Tehnice:
// 1. Declară o Arrow Function asincronă:
//    const incarcaTaskuriInitiale = async () => { ... };
// 2. În interiorul funcției, apelează:
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
// 3. Despachetează răspunsul: const taskuri = await response.json();
// 4. Selectează lista din HTML: const activeTasksList = document.querySelector('#active-tasks-list');
// 5. Iterează prin taskuri (cu forEach sau for):
//    - Creează dinamic un element <li> (document.createElement('li')).
//    - Setează textul cu titlul task-ului (li.textContent = task.title).
//    - Adaugă elementul în listă (activeTasksList.appendChild(li)).
// 6. Apelează funcția la finalul fișierului: incarcaTaskuriInitiale();
// ============================================================

// Adaugă aici funcția asincronă incarcaTaskuriInitiale și apelarea ei:
const incarcaTaskuriInitiale = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  const taskuri = await response.json();
  const activeTasksList = document.querySelector('#active-tasks-list');

for(i = 0; i< taskuri.length; i++){
  document.createElement("li");
  li.textContent = task.title;
  activeTasksList.appendChild(li)
}
 };

incarcaTaskuriInitiale();