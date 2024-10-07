let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `...`;
   task.innerHTML = `
         <p class="...">${title}</p>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="...">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="...">
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
