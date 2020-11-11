var config = {
    style: 'mapbox://styles/elleriesan/ckhdbhpev02a419o7ib9yc8qf',
    accessToken: 'pk.eyJ1IjoiZWxsZXJpZXNhbiIsImEiOiJjaWxzMW5scmcwOHR2dTltMXRlcWF5aWowIn0.aKk86rbJKLoOBbyTDCiv2Q',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Infraestructura en Río Piedras',
    subtitle: 'Resultados de la Auditoría de Seguridad Vial realizada en 2019',
    byline: 'Por Michelle Sánchez, Calles Humanas',
    footer: 'Fuente: Calles Humanas (2020) y Clase de Transportación de la Escuela Graduada de Planificación',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Objetivos y justificación',
            image: './images/camina-libros-rp.jpg',
            description: 'Como parte de los trabajos realizados en el taller de transportación de la Escuela Graduada de Planificación por parte del equipo de Calles Humanas se realizó una auditoría de seguridad vial en el casco urbano de Río Piedras. Una auditoría de seguridad vial es una herramienta utilizada para medir las condiciones de la infraestructura de transportación a través de visitas de campo. En este caso, se realizaron estas visitas de campo para evaluar el estado actual de la infraestructura peatonal, ciclista, para usuarios de transporte colectivo y usuarios de vehículos de motor. A continuación se presentan los datos obtenidos.',
            location: {
                center: [-66.05117, 18.39818],
                zoom: 14.89,
                pitch: 45,
                bearing: -40
            },
            onChapterEnter: [
                {
                    layer: 'Todos',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Todos',
                    opacity: 0
                }
            ]
        },
        {
            id: 'peaton',
            title: 'Peatones',
            //image: './path/to/image/source.png',
            description: 'Los resultados muestran muchos puntos de conflicto para peatones en el área. Especialmente se observa su concentración a lo largo del paseo de Diego y las áreas mayormente frecuentadas por peatones. Entre los problemas más reportados se incluyen las obstrucciones de las aceras y las aceras con desniveles peligrosos.',
            location: {
                center: [-66.05117, 18.39818],
                zoom: 14.89,
                pitch: 45,
                bearing: -40
            },
            onChapterEnter: [
                {
                    layer: 'Peaton',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Peaton',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ciclista',
            title: 'Ciclistas',
            //image: './path/to/image/source.png',
            description: 'Para ciclistas los mayores puntos de conflicto se encuentran en la avenida Gándara y en las calles Añasco y González de Blondet y Santa Rita, respectivamente.',
            location: {
                center: [-66.05117, 18.39818],
                zoom: 14.89,
                pitch: 45,
                bearing: -40
            },
            onChapterEnter: [
                {
                    layer: 'Ciclistas',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Ciclistas',
                    opacity: 0
                }
            ]
        }
    ]
};
