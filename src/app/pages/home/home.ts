import { Component, signal } from '@angular/core';
import { LatamMap } from '../../components/latam-map/latam-map';

interface Pilar {
  num: string;
  title: string;
  desc: string;
  icon: string;
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
}

@Component({
  selector: 'app-home',
  imports: [LatamMap],
  templateUrl: './home.html',
})
export class Home {
  statsVisible = signal(false);

  pilares: Pilar[] = [
    {
      num: '01',
      title: 'Divulgación Científica',
      desc: 'Webinars, talleres y capacitaciones que acercan la biología sintética a estudiantes y profesionales de toda la región.',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8l6 4-6 4z',
    },
    {
      num: '02',
      title: 'Colaboraciones y Alianzas',
      desc: 'Construimos puentes con universidades, empresas, gobiernos e instituciones internacionales para amplificar el impacto regional.',
      icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    },
    {
      num: '03',
      title: 'Mapeo del Ecosistema',
      desc: 'Generamos reportes de política y panoramas del ecosistema latinoamericano de synbio para orientar la toma de decisiones.',
      icon: 'M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z',
    },
    {
      num: '04',
      title: 'Matchmaking Profesional',
      desc: 'Conectamos talento con startups, instituciones y redes internacionales para potenciar el desarrollo de carrera en la región.',
      icon: 'M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.53 15.47 0 12.36 0c-1.98 0-3.72 1.02-4.72 2.56L6 5 4.36 2.56C3.36 1.02 1.62 0-.36 0-3.47 0-6 2.53-6 5.64c0 .48.11.92.18 1.36H-8v2h28V6zM4 8v12h2V8H4zm6 0v12h2V8h-2zm6 0v12h2V8h-2z',
    },
  ];

  fundadores: TeamMember[] = [
    { name: 'Alonso', role: 'Fundador', country: 'Costa Rica', flag: '🇨🇷', initials: 'Al' },
    { name: 'Andrea', role: 'Fundadora', country: 'México', flag: '🇲🇽', initials: 'An', photo: 'equipo/Andrea.png' },
  ];

  comiteExperto: TeamMember[] = [
    { name: 'Daniel Domínguez', role: 'Comité Experto', country: '', flag: '', initials: 'DD', org: 'AllBiotech' },
    { name: 'Dra. Michelle', role: 'Comité Experto', country: '', flag: '', initials: 'Mc', org: 'IGBM' },
    { name: 'Camilo', role: 'Comité Experto', country: '', flag: '', initials: 'Ca', org: 'ExiGEM' },
    { name: 'Ana Paula Acevedo', role: 'Comité Experto', country: '', flag: '', initials: 'AP', org: 'Start-ups' },
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

  miembros: TeamMember[] = [
    { name: 'Nohely Cáceres', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'NC', area: 'Financiamiento y Sostenibilidad', photo: 'equipo/Nohely Cáceres.jpg' },
    { name: 'María Belén Terán', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'MT', area: 'Gestión de Proyectos' },
    { name: 'Marko Aurelio Zapata', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'MZ' },
    { name: 'Luis Camilo Díaz-Duarte', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'LD', photo: 'equipo/Luis Camilo Díaz-Duarte.png' },
    { name: 'Marcos Nahuel Rios', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'MR' },
    { name: 'Anaís Caviedes', role: 'Miembro', country: 'Chile', flag: '🇨🇱', initials: 'AC', photo: 'equipo/Anaís Caviedes.jpeg' },
    { name: 'Paula Camila Gonzalez', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'PG' },
    { name: 'Kimberly Aragón', role: 'Miembro', country: 'Guatemala', flag: '🇬🇹', initials: 'KA' },
    { name: 'Andrea Ferrufino', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'AF' },
    { name: 'José Manuel Limón', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'JL', area: 'Política y Regulación', photo: 'equipo/José Manuel Hernández Limón.png' },
    { name: 'María Guadalupe Juárez', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'GJ' },
    { name: 'Javier David Uzcátegui', role: 'Miembro', country: 'Venezuela', flag: '🇻🇪', initials: 'JU' },
    { name: 'Carlos Andrés Moya', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'CM' },
    { name: 'Wilka Fidel Vargas', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'WV', photo: 'equipo/Willka Fidel Vargas Peña.png' },
    { name: 'Alejandro Vallejo', role: 'Miembro', country: 'Rep. Dominicana', flag: '🇩🇴', initials: 'AV' },
    { name: 'Fabrizio Flores', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'FF', area: 'Expansión', photo: 'equipo/Fabrizio Flores.png' },
    { name: 'Estefania Mansilla', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'EM' },
    { name: 'María Cecilia Merino', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'MM' },
    { name: 'Mariela Escobar', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'ME', photo: 'equipo/Mariela Escobar.png' },
    { name: 'Andrea Guallasamin', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AG' },
    { name: 'Xavier García', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'XG' },
    { name: 'Jessica Martin', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'JM', area: 'Capacitación' },
    { name: 'Katherine Silva', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'KS' },
    { name: 'Sebastián Toro', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'ST', photo: 'equipo/Sebastián Toro.jpg' },
    { name: 'Juan David León', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'JL' },
    { name: 'Rocío Coronel', role: 'Miembro', country: 'Paraguay', flag: '🇵🇾', initials: 'RC', photo: 'equipo/Rocio Coronel.jpg' },
    { name: 'Adriana Marcela Martinez', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'AM', photo: 'equipo/Adriana Marcela Martinez Botello.jpeg' },
    { name: 'Gloriana Corrales', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'GC', area: 'Gestión de Actividades' },
    { name: 'Asley Caballero', role: 'Miembro', country: 'Panamá', flag: '🇵🇦', initials: 'AC', photo: 'equipo/Asley Caballero.jpeg' },
    { name: 'Caren Nicole Moreno', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'CN' },
    { name: 'Denis Buffa', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'DB' },
    { name: 'Christian Andrade', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'CA' },
    { name: 'Pedro Raul Mendoza', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'PM' },
    { name: 'Luciana Castro', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'LC', area: 'Diseño', photo: 'equipo/Luciana Castro Camavilca foto en blanco.png' },
    { name: 'Mariana Valdez', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'MV' },
    { name: 'Debora Parodi', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'DP' },
    { name: 'Catalina Serrano', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'CS', photo: 'equipo/Catalina Serrano Foto.png' },
    { name: 'Ashley Alban', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AA' },
    { name: 'Charlize Badilla', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'CB', photo: 'equipo/Charlize Badilla Soto.png' },
    { name: 'Ana Patricia Minaya', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'AM', photo: 'equipo/Ana Minaya De La Peña.jpg' },
    { name: 'Belén Endara', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'BE', area: 'Audiovisual' },
    { name: 'Matias Tosini', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'MT', photo: 'equipo/Matias Tosini.png' },
    { name: 'Aaron Maldonado', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AM', photo: 'equipo/Aaron Maldonado.JPG' },
    { name: 'Katherine Girón', role: 'Miembro', country: 'Guatemala', flag: '🇬🇹', initials: 'KG', area: 'Recursos e Información' },
    { name: 'Andrea Ramos', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'AR', photo: 'equipo/Andrea.jpeg' },
    { name: 'Camil Espinoza', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'CE', photo: 'equipo/CAMIL ESPINOZA-RAMOS.jpeg' },
    { name: 'Johan Kalil Guerra', role: 'Miembro', country: 'Panamá', flag: '🇵🇦', initials: 'JG' },
    { name: 'Jeancarla Padilla', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'JP' },
    { name: 'Ian Sebastian Terán', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'IT' },
    { name: 'Tomas Blanzaco', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'TB', photo: 'equipo/Blanzaco Tomas.png' },
  ];
}
