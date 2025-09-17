

async function ListaUsuariosSecuencial(){
    console.log(`---Ejecucion Secuencial---`);
   try{ 
    const respuesta= await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios= await respuesta.json();
    const usuarios_tres= usuarios.filter(u => u.id < 4);
    const cant= await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts=await cant.json();
    const posts_tres= posts.filter(p => p.userId < 4);

    //console.log(usuarios_tres);
    //console.log(posts_tres);

    usuarios_tres.forEach(n => 
        {   const publicaciones=posts_tres.filter(p => p.userId=== n.id).length;
            console.log(`${n.name} tiene ${publicaciones} pubicaciones`);
    })
    }

catch(error){
console.error('Error al obtener los usuarios: ', error.message);
}

}
async function ListaUsuariosConcurrente(){
   console.log('---Ejecucion Paralela---');
   try{
   const response= await fetch('https://jsonplaceholder.typicode.com/users');
   const usuarios= await response.json();
   const usuarios3=usuarios.filter(n=> n.id < 4);
   const promesasPost= usuarios3.map(u => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${u.id}`)
                                     .then(r=>r.json())
                                     .then(posts=>({nombre:u.name, publicaciones:posts.length})));
   
   const results= await Promise.all(promesasPost);  
   results.forEach(r => console.log(`${r.name} tiene ${r.publicaciones} publicaciones`));                           
}
   catch(error){
    console.error('Error al obtener usuarios: ',error.message);
   }
}

ListaUsuariosSecuencial();
ListaUsuariosConcurrente();