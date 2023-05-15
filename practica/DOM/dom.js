const h1_tag = document.getElementsByTagName("h1");
const h1_id = document.getElementById("heading");
const h1_class = document.getElementsByClassName("head_text");

console.log(h1_tag);
console.log(h1_id);
console.log(h1_class)

const list = document.getElementsByClassName("listElement");
console.log(list);
let counter = 1;
for(const li of list){
    console.log(li);
    li.textContent = "Elemento de la lista " + counter;
    counter++;
}

const header = document.getElementsByTagName("header");
const section = document.getElementsByTagName("section");
for(const element of header){
    element.style.backgroundColor = "#C1D0B5";
}

for(const element of section){
    element.style.backgroundColor = "#D6E8DB";
}

for(const element of header){
    console.log(element.childNodes);
    console.log(element.children);
    console.log(element.firstChild);
}

const lenguajes = ["JavaScript","HTML","CSS"];
const listaLenguajes = document.createElement("ul");

/*for(let i =0; i<lenguajes.length; i++){
    const element = document.createElement("li");
    element.textContent = lenguajes[i];
    listaLenguajes.appendChild(element);
}

const nav = document.getElementsByTagName("nav");

for(const element of nav){
    element.appendChild(listaLenguajes);
}*/
const nav = document.getElementsByTagName("nav");
const html = `
    <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
`;
for(const element of nav){
    element.innerHTML = html;
    element.setAttribute("id","menu");
}