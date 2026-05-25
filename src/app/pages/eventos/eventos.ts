import { Component, signal, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Evento {
  tag: string;
  title: string;
  desc: string;
  flyers: string[];
}

interface FlyerModal {
  title: string;
  src: string;
}

@Component({
  selector: 'app-eventos',
  imports: [RouterLink],
  templateUrl: './eventos.html',
})
export class Eventos {
  organizados: Evento[] = [
    {
      tag: 'Carreras internacionales',
      title: 'SynBio Talks',
      desc: 'Charlas con jóvenes latinoamericanos que abrieron camino en ciencia internacional — posgrados, maestrías, pasantías y research assistant en MIT, Harvard y Erasmus Mundus.',
      flyers: ['eventos/synbio-talks/flyer1.webp'],
    },
    {
      tag: 'Lectura crítica',
      title: 'SynBio Journal Club',
      desc: 'Espacio para compartir y discutir los avances más recientes en biología sintética. Reunimos a la comunidad latinoamericana para explorar publicaciones científicas de vanguardia.',
      flyers: ['eventos/journal-club/flyer1.webp'],
    },
    {
      tag: 'Comunidad y debate',
      title: 'SynBio Match & Discuss',
      desc: 'Aprendizaje y debate en torno a artículos científicos de frontera para conectar a jóvenes de la comunidad synbio latinoamericana y fomentar el pensamiento crítico.',
      flyers: ['eventos/match-discuss/flyer1.webp', 'eventos/match-discuss/flyer2.webp'],
    },
    {
      tag: 'Comunidad regional',
      title: 'SynBio Communities',
      desc: 'Encuentros y actividades que fortalecen los lazos entre comunidades locales de biología sintética en toda Latinoamérica.',
      flyers: [
        'eventos/synbio-communities/flyer1.webp',
        'eventos/synbio-communities/flyer2.webp',
        'eventos/synbio-communities/flyer3.webp',
        'eventos/synbio-communities/flyer4.webp',
      ],
    },
    {
      tag: 'Networking',
      title: 'Networking sin Fronteras',
      desc: 'Espacio de conexión entre profesionales y estudiantes de biología sintética de distintos países de la región para ampliar redes de colaboración.',
      flyers: ['eventos/networking/flyer1.webp'],
    },
    {
      tag: 'Sesión virtual',
      title: 'Conversatorio: Descubre la Biología Sintética en LATAM',
      desc: 'Sesión virtual organizada junto a Embajadores iGEM en América Latina para generar conciencia y entusiasmo sobre el synbio en la región.',
      flyers: ['eventos/conversatorio/flyer1.webp', 'eventos/conversatorio/flyer2.webp'],
    },
  ];

  participamos: Evento[] = [
    {
      tag: 'Formación intensiva',
      title: 'SynBio BootCamp',
      desc: 'Programa intensivo de formación en biología sintética donde SynBio LATAM participó activamente, acercando herramientas clave a jóvenes científicos de la región.',
      flyers: ['eventos/synbio-bootcamp/flyer1.webp', 'eventos/synbio-bootcamp/flyer2.webp'],
    },
    {
      tag: 'Simposio internacional',
      title: 'I Simposio Virtual SynBio — UNMSM',
      desc: 'Primer simposio virtual internacional de biología sintética de la UNMSM, donde SynBio LATAM estuvo presente como parte de la comunidad científica latinoamericana.',
      flyers: ['eventos/simposio-unmsm/flyer1.webp'],
    },
  ];
}
