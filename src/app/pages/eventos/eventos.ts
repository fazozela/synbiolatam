import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Evento {
  tag: string;
  title: string;
  desc: string;
  flyer?: string;
  icon: string;
}

@Component({
  selector: 'app-eventos',
  imports: [RouterLink],
  templateUrl: './eventos.html',
})
export class Eventos {
  propios: Evento[] = [
    {
      tag: 'Carreras internacionales',
      title: 'SynBio Talks',
      desc: 'Charlas con jóvenes latinoamericanos que abrieron camino en ciencia internacional — posgrados, maestrías, pasantías y research assistant en MIT, Harvard y Erasmus Mundus. Inspiración y orientación para dar el siguiente paso.',
      icon: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z',
    },
    {
      tag: 'Lectura crítica',
      title: 'SynBio Journal Club',
      desc: 'Espacio para compartir y discutir los avances más recientes en biología sintética. Reunimos a la comunidad latinoamericana para explorar publicaciones científicas de vanguardia.',
      icon: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 14H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V6h8v2z',
    },
    {
      tag: 'Comunidad y debate',
      title: 'SynBio Match & Discuss',
      desc: 'Aprendizaje y debate en torno a artículos científicos de frontera para conectar a jóvenes de la comunidad synbio latinoamericana y fomentar el pensamiento crítico.',
      icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    },
  ];

  participamos: Evento[] = [
    {
      tag: 'IGBM Grand Jamboree',
      title: 'Communities around the World',
      desc: 'En el Grand Jamboree en París, organizaciones de synbio de todo el mundo intercambian conocimientos, exploran mejores prácticas y fortalecen la integración en un ecosistema global más inclusivo.',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
    },
    {
      tag: 'Sesión virtual',
      title: 'Conversatorios',
      desc: 'Sesión virtual organizada junto a Embajadores iGEM en América Latina para generar conciencia y entusiasmo sobre el synbio en la región.',
      icon: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
    },
    {
      tag: 'Formación intensiva',
      title: 'SynBio Bootcamp',
      desc: 'Programa intensivo de formación en biología sintética donde SynBio LATAM participó activamente, acercando herramientas clave a jóvenes científicos de la región.',
      icon: 'M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z',
    },
    {
      tag: 'Simposio internacional',
      title: 'I Simposio Virtual SynBio — UNMSM',
      desc: 'Primer simposio virtual internacional de biología sintética de la UNMSM, donde SynBio LATAM estuvo presente como parte de la comunidad científica latinoamericana.',
      icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    },
  ];
}
