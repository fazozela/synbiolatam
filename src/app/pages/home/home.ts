import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LatamMap } from '../../components/latam-map/latam-map';

interface Pilar {
  num: string;
  title: string;
  desc: string;
  icon: string;
  link: string;
}

interface Aliado {
  name: string;
  logo: string;
}

interface TeamMember {
  name: string;
  role: string;
  country: string;
  flag: string;
  initials: string;
  org?: string;
  photo?: string;
  area?: string;
  isHead?: boolean;
}

interface Comision {
  nombre: string;
  miembros: TeamMember[];
}

@Component({
  selector: 'app-home',
  imports: [LatamMap, RouterLink],
  templateUrl: './home.html',
})
export class Home {
  statsVisible = signal(false);

  pilares: Pilar[] = [
    {
      num: '01',
      title: 'Divulgación Científica',
      desc: 'Webinars, talleres y capacitaciones para dar a conocer el potencial de la biología sintética y acercar el conocimiento a estudiantes y profesionales de toda la región.',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8l6 4-6 4z',
      link: '/recursos/cursos',
    },
    {
      num: '02',
      title: 'Colaboraciones y Alianzas',
      desc: 'Construimos puentes con universidades, empresas, gobiernos e instituciones internacionales para amplificar el impacto regional.',
      icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
      link: '#aliados',
    },
    {
      num: '03',
      title: 'Mapeo del Ecosistema',
      desc: 'Reporte de política y panorama del ecosistema latinoamericano de biología sintética para mapear las áreas de oportunidad para la toma de decisiones.',
      icon: 'M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z',
      link: '/mapa',
    },
    {
      num: '04',
      title: 'Matchmaking Profesional',
      desc: 'Conectamos talento con startups, instituciones y redes internacionales para potenciar el desarrollo de carrera en la región.',
      icon: 'M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.53 15.47 0 12.36 0c-1.98 0-3.72 1.02-4.72 2.56L6 5 4.36 2.56C3.36 1.02 1.62 0-.36 0-3.47 0-6 2.53-6 5.64c0 .48.11.92.18 1.36H-8v2h28V6zM4 8v12h2V8H4zm6 0v12h2V8h-2zm6 0v12h2V8h-2z',
      link: '/recursos/base-de-datos',
    },
  ];

  fundadores: TeamMember[] = [
    { name: 'Alonso Segura', role: 'Co-Fundador', country: 'Costa Rica', flag: '🇨🇷', initials: 'AS', photo: 'equipo/Alonso Segura.jpg' },
    { name: 'Andrea Sánchez', role: 'Co-Fundadora', country: 'México', flag: '🇲🇽', initials: 'AR', photo: 'equipo/Andrea.png' },
  ];

  comiteExperto: TeamMember[] = [
    { name: 'Daniel Domínguez', role: 'Comité Asesor', country: '', flag: '', initials: 'DD', org: 'AllBiotech' },
    { name: 'Dra. Michelle', role: 'Comité Asesor', country: '', flag: '', initials: 'Mc', org: 'IGBM' },
    { name: 'Camilo', role: 'Comité Asesor', country: '', flag: '', initials: 'Ca', org: 'ExiGEM' },
    { name: 'Ana Paula Acevedo', role: 'Comité Asesor', country: '', flag: '', initials: 'AP', org: 'Start-ups' },
  ];

  aliados: Aliado[] = [
    { name: 'AllBiotech', logo: 'aliados/images.jpeg' },
    { name: 'Génesis Clúster', logo: 'aliados/GENESIS.png' },
    { name: 'IGBM', logo: 'aliados/IGBM.jpeg' },
    { name: 'Soc. Boliviana de Biología Molecular', logo: 'aliados/SBBM.png' },
    { name: 'BioMASTER', logo: 'aliados/BIOMASTER.png' },
    { name: 'iGEM', logo: 'aliados/iGEM.png' },
    { name: 'MINTA', logo: 'aliados/minta_point.png' },
  ];

  comisiones: Comision[] = [
    {
      nombre: 'Financiamiento y Sostenibilidad',
      miembros: [
        { name: 'Leonel Anaya', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'LA' },
        { name: 'Camila Naranjo', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'CN', photo: 'equipo/Camila Naranjo.jpg' },
        { name: 'Mariela Escobar', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'ME', photo: 'equipo/Mariela Escobar.png' },
        { name: 'Nohely Cáceres', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'NC', photo: 'equipo/Nohely Cáceres.jpg' },
      ],
    },
    {
      nombre: 'Gestión de Proyectos',
      miembros: [
        { name: 'María Belén Terán', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'MB', photo: 'equipo/María Belén Terán.png' },
        { name: 'Mario Aurelio Zapata', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'MZ' },
        { name: 'Luis Camilo Díaz-Duarte', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'LD', photo: 'equipo/Luis Camilo Díaz-Duarte.png' },
        { name: 'Marcos Nahuel Ríos', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'MR' },
        { name: 'Anaís Caviedes', role: 'Miembro', country: 'Chile', flag: '🇨🇱', initials: 'AC', photo: 'equipo/Anaís Caviedes.jpeg' },
        { name: 'Paula Camila González', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'PG' },
        { name: 'Kimberly Raquel Aragón', role: 'Miembro', country: 'Guatemala', flag: '🇬🇹', initials: 'KA', photo: 'equipo/Kimberly Aragón.png' },
      ],
    },
    {
      nombre: 'Política y Regulación',
      miembros: [
        { name: 'Valentina Ramírez', role: 'Head', country: 'Ecuador', flag: '🇪🇨', initials: 'VR', photo: 'equipo/Valentina Ramírez.png', isHead: true },
        { name: 'Andrea Ferrufino', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'AF', photo: 'equipo/Andrea Ferrufino.jpg' },
        { name: 'Jose Manuel Limón', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'JL', photo: 'equipo/José Manuel Hernández Limón.png' },
        { name: 'Benjamín Mendoza', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'BM', photo: 'equipo/Benjamín Mendoza.jpg' },
        { name: 'María Guadalupe Juárez', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'GJ', photo: 'equipo/María Guadalupe Juárez Hernández.jpg' },
        { name: 'Javier David Uzcátegui', role: 'Miembro', country: 'Venezuela', flag: '🇻🇪', initials: 'JU', photo: 'equipo/Javier David-Uzcategui.jpg' },
        { name: 'Carlos Andrés Moya', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'CM', photo: 'equipo/Carlos Moya.png' },
        { name: 'Wilka Fidel Vargas', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'WV', photo: 'equipo/Willka Fidel Vargas Peña.png' },
        { name: 'Alejandro Vallejo', role: 'Miembro', country: 'Rep. Dominicana', flag: '🇩🇴', initials: 'AV' },
      ],
    },
    {
      nombre: 'Expansión',
      miembros: [
        { name: 'Fabrizio Yasuo Flores', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'FF', photo: 'equipo/Fabrizio Flores.png' },
        { name: 'Estefanía Mansilla', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'EM' },
        { name: 'María Cecilia Merino', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'MM', photo: 'equipo/María Cecilia Merino.jpeg' },
        { name: 'Mishell Criollo', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'MC', photo: 'equipo/Mishell Criollo.png' },
        { name: 'Pilar Montealegre', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'PM', photo: 'equipo/Pilar Montealegre Vargas.jpg' },
        { name: 'Rodrigo Aguirre', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'RA', photo: 'equipo/Rodrigo Aguirre.jpg' },
        { name: 'Vladimir Tandapiico', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'VT', photo: 'equipo/Wladimir Tandapilco.jpg' },
        { name: 'Andrea Gualtasamin', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AG', photo: 'equipo/Andrea Guallasamin.jpg' },
        { name: 'Xavier García', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'XG', photo: 'equipo/Xavier García.jpg' },
      ],
    },
    {
      nombre: 'Capacitación',
      miembros: [
        { name: 'Bastian Márquez', role: 'Head', country: 'Chile', flag: '🇨🇱', initials: 'BM', photo: 'equipo/Bastián Márquez González.jpeg', isHead: true },
        { name: 'Jessica Martin', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'JM' },
        { name: 'Katherine Silva', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'KS' },
        { name: 'Sebastian Torres', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'ST', photo: 'equipo/Sebastián Toro.jpg' },
        { name: 'Juan David León', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'JL' },
        { name: 'Rocío Coronel', role: 'Miembro', country: 'Paraguay', flag: '🇵🇾', initials: 'RC', photo: 'equipo/Rocio Coronel.jpg' },
        { name: 'Maricela Martínez', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'MM' },
        { name: 'Gloriana Corrales', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'GC', photo: 'equipo/Gloriana Corrales Masís.jpg' },
        { name: 'Ailey Caballero', role: 'Miembro', country: 'Panamá', flag: '🇵🇦', initials: 'AC', photo: 'equipo/Asley Caballero.jpeg' },
        { name: 'Krister Figueroa', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'KF', photo: 'equipo/Krister Figueroa.png' },
        { name: 'Nelson Rodríguez', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'NR' },
        { name: 'Mariane Córdoba', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'MC' },
      ],
    },
    {
      nombre: 'Gestión de Actividades',
      miembros: [
        { name: 'Caren Nicole Moreno', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'CN', photo: 'equipo/Caren Moreno.jpg' },
        { name: 'Denis Buffa', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'DB', photo: 'equipo/Denis Buffa.jpeg' },
        { name: 'Christian Andrade', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'CA', photo: 'equipo/Christian Andrade.jpeg' },
        { name: 'Pedro Raúl Javier Mendoza', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'PM', photo: 'equipo/Pedro Raul Mendoza.jpeg' },
      ],
    },
    {
      nombre: 'Diseño',
      miembros: [
        { name: 'Luciana Castro', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'LC', photo: 'equipo/Luciana Castro Camavilca foto en blanco.png' },
        { name: 'Mariana Valdéz', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'MV', photo: 'equipo/Mariana Valdez Yañez.JPG' },
        { name: 'Debora Parodi', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'DP', photo: 'equipo/Debora Parodi.jpg' },
        { name: 'Catalina Serrano', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'CS', photo: 'equipo/Catalina Serrano Foto.png' },
        { name: 'Alessia Vásquez', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'AV', photo: 'equipo/Alessia Vasquez.jpg' },
        { name: 'Ashley Alban', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AA', photo: 'equipo/Ashley Alban.png' },
        { name: 'Charlize Badilla', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'CB', photo: 'equipo/Charlize Badilla Soto.png' },
        { name: 'Ana Patricia Minaya', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'AP', photo: 'equipo/Ana Minaya De La Peña.jpg' },
        { name: 'Anahí Nájera', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'AN', photo: 'equipo/Anahi Najera.jpg' },
      ],
    },
    {
      nombre: 'Audiovisual',
      miembros: [
        { name: 'Belén Tosini', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'BT' },
        { name: 'Matías Tosini', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'MT', photo: 'equipo/Matias Tosini.png' },
        { name: 'Aaron Maldonado', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AM', photo: 'equipo/Aaron Maldonado.JPG' },
      ],
    },
    {
      nombre: 'Recursos e Información',
      miembros: [
        { name: 'Katherine Alessandra Girón', role: 'Miembro', country: 'Guatemala', flag: '🇬🇹', initials: 'KG', photo: 'equipo/Katherine Girón.jpg' },
        { name: 'Andrea Ramos', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'AR', photo: 'equipo/Andrea Ramos.webp' },
        { name: 'Josue Alvarez', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'JA', photo: 'equipo/Josue Alvarez.jpeg' },
        { name: 'Angie Pozo', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AP', photo: 'equipo/Angie Pozo Cedeño.jpg' },
        { name: 'Camil Lucía Espinoza', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'CE', photo: 'equipo/CAMIL ESPINOZA-RAMOS.jpeg' },
        { name: 'Johan Kalil Guerra', role: 'Miembro', country: 'Panamá', flag: '🇵🇦', initials: 'JG', photo: 'equipo/Johan Guerra.png' },
        { name: 'Jeancore Padilla', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'JP', photo: 'equipo/Jeancarla Padilla.png' },
        { name: 'Ian Sebastian Terán', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'IT', photo: 'equipo/Ian Sebastian Teran.jpg' },
        { name: 'Alejandra Cazares', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'AC', photo: 'equipo/Alejandra Cazares.png' },
        { name: 'Jorge Barrios', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'JB', photo: 'equipo/Jorge Luis Barrios.png' },
        { name: 'Tomas Blanzaco', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'TB', photo: 'equipo/Blanzaco Tomas.png' },
      ],
    },
  ];

}
