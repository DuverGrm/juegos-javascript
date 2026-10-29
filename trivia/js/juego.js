//Arreglo que contiene las preguntas
const preguntas = [
    {
        id: 1,
        categoria: "medioambiente",
        titulo: "¿Cuál es la acción más efectiva para reducir la cantidad de plásticos en los océanos?",
        opcionA: "Reciclar botellas",
        opcionB: "Usar bolsas reutilizables",
        opcionC: "Reducir el consumo de plásticos de un solo uso",
        opcionD: "Quemar los residuos",
        correcta: "c"
    },
    {
        id: 2,
        categoria: "medioambiente",
        titulo: "Si ves a alguien realizando tala ilegal en un bosque, ¿qué debes hacer?",
        opcionA: "Ignorarlo",
        opcionB: "Confrontarlo directamente",
        opcionC: "Reportarlo a las autoridades competentes con evidencia si es posible",
        opcionD: "Tomar un árbol para ti",
        correcta: "c"
    },
    {
        id: 3,
        categoria: "medioambiente",
        titulo: "¿Qué debes hacer primero durante un terremoto?",
        opcionA: "Correr hacia la calle",
        opcionB: "Protegerte bajo una mesa resistente o junto a un muro estructural",
        opcionC: "Entrar en un ascensor",
        opcionD: "Buscar tu celular",
        correcta: "b"
    },
    {
        id: 4,
        categoria: "medioambiente",
        titulo: "¿Cuál es la principal causa de la deforestación en la Amazonía?",
        opcionA: "Urbanización",
        opcionB: "Ganadería y agricultura extensiva",
        opcionC: "Incendios naturales",
        opcionD: "Turismo",
        correcta: "b"
    },
    {
        id: 5,
        categoria: "medioambiente",
        titulo: "En caso de un incendio forestal cercano, lo correcto es:",
        opcionA: "Intentar apagarlo con agua por tu cuenta",
        opcionB: "Salir rápidamente siguiendo rutas seguras y avisar a emergencias",
        opcionC: "Esconderte en una cabaña",
        opcionD: "Correr en dirección al humo",
        correcta: "b"
    },
    {
        id: 6,
        categoria: "medioambiente",
        titulo: "¿Qué práctica ayuda más a conservar el agua en el hogar?",
        opcionA: "Cerrar la llave mientras te cepillas los dientes",
        opcionB: "Bañarse en tina todos los días",
        opcionC: "Lavar el carro con manguera",
        opcionD: "Dejar gotear el grifo",
        correcta: "a"
    },
    {
        id: 7,
        categoria: "medioambiente",
        titulo: "Si presencias caza ilegal de animales en peligro de extinción, lo más recomendable es:",
        opcionA: "Unirte a la caza",
        opcionB: "Huir y no contar nada",
        opcionC: "Reportar el hecho con ubicación y detalles a las autoridades",
        opcionD: "Tratar de atrapar al cazador por tu cuenta",
        correcta: "c"
    },
    {
        id: 8,
        categoria: "medioambiente",
        titulo: "¿Qué hacer para disminuir la huella de carbono personal?",
        opcionA: "Usar transporte público o bicicleta",
        opcionB: "Dejar las luces encendidas",
        opcionC: "Comprar más productos desechables",
        opcionD: "Viajar en avión frecuentemente",
        correcta: "a"
    },
    {
        id: 9,
        categoria: "medioambiente",
        titulo: "Durante una inundación, lo más seguro es:",
        opcionA: "Caminar por aguas profundas",
        opcionB: "Buscar refugio en lugares altos y esperar indicaciones",
        opcionC: "Quedarse dentro del carro en medio del agua",
        opcionD: "Intentar nadar hasta tu casa",
        correcta: "b"
    },
    {
        id: 10,
        categoria: "medioambiente",
        titulo: "¿Qué es lo más importante al plantar un árbol?",
        opcionA: "Usar especies nativas de la región",
        opcionB: "Sembrar cualquier árbol rápido de crecer",
        opcionC: "Plantar solo en macetas",
        opcionD: "Evitar regarlo",
        correcta: "a"
    }
]

//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// cargar preguntas
const preguntasCategoria = preguntas;

function cargarSiguientePregunta(num) {
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;



    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion => {
        opcion.removeEventListener("click", (e) => { });
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion => {
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e) {
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntasCategoria[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if (e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta) {
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    } else {
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#" + preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click", () => {
    numPreguntaActual++;
    if (numPreguntaActual < preguntasCategoria.length) {
        cargarSiguientePregunta(numPreguntaActual);
    }
    else {
        location.href = "final.html"
    }
})



//Cambiar la pregunta a automatico y distintos niveles 