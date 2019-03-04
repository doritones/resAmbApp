const ul = document.getElementById('timepoint');

const createNode = (element) => document.createElement(element); // Create the type of element you pass in the parameters
const append = (parent, el) => parent.appendChild(el); //Append the element to the parent

fetch("https://api.airtable.com/v0/appGU1IvnOZqFFiCh/Table%201?view=Grid%20view", {
    headers: { Authorization: "Bearer "+ process.env.AIRTABLE_API_KEY } //fix authorization exposure
  })
  .then(data => data.json())
  .then(data => {
      data.records.map(record => {
        let div = createNode('div'),
            li = createNode('li'),
            time = createNode('time'),
            p1 = createNode('p'),
            p2 = createNode('p');

        //Setting date element and datelement attribute
        time.innerHTML = record.fields['Publicado'];
        const att = document.createAttribute("datetime");
        att.value = record.fields['Publicado'];
        time.setAttributeNode(att);

        p1.innerHTML = record.fields['Breve descricao'];
        p1.id = "timeline-text";

        p2.innerHTML = record.fields['Canal'];
        append(div, time);
        append(div, p1);
        append(div, p2);
        append(li, div);
        append(ul, li);
  })})
  .catch(err => console.log(err));
