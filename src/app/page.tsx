import Image from "next/image";
export default function Home() {
  return (
    <main style={{textAlign: "center", padding:"40px"}}>
     <h1 className="font-serif text-4xl">Hola!</h1>

     <div className="flex flex-col items-center mt-6 justify-center">
      <img
       src="/snoopy2.gif"
       alt="Snoopy bailando"
       className= "rounded-3xl shadow-lg w-80 mt-8 h-auto "
      />
      <p className="mt-10 text-center font-serif text-xl ">
         Okey, ahora un juego! <br />
         Elegí un boton.
      </p> 
     </div>
     <div className="flex justify-center space-x-6 mt-6">
      <a 
      href="https://youtu.be/dQw4w9WgXcQ?si=uY_3wLKLaQl9ITmO"
      target="_blank"
      rel="noopener noreferrer"
      className=" text-center mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Click acá
      </a>
      <a 
      href="https://github.com/Palodeaza/TPs-Sistemas-Distribuidos.git"
      target="_blank"
      rel="noopener noreferrer"
      className= "mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Click acá
      </a>
     </div> 
     <div className="mt-1000 text-center">
      <p className="text-xs">Chau</p>
     </div>
    </main>
  );
}

