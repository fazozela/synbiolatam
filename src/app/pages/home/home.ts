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

  facePos: Record<string, string> = {
    'Aaron Maldonado.png':                      '49% 47%',
    'Alejandra Cazares.png':                    '48% 25%',
    'Alessia Vasquez.png':                      '48% 36%',
    'Alonso Segura.png':                        '44% 28%',
    'Ana Minaya De La Peña.png':                '48% 37%',
    'Anahi Najera.png':                         '52% 33%',
    'Anaís Caviedes.png':                       '51% 60%',
    'Andrea Ferrufino.png':                     '53% 43%',
    'Andrea Guallasamin.png':                   '51% 21%',
    'Andrea Ramos.png':                         '51% 48%',
    'Andrea.png':                               '49% 28%',
    'Angie Pozo Cedeño.png':                    '48% 23%',
    'Ashley Alban.png':                         '52% 36%',
    'Asley Caballero.png':                      '49% 40%',
    'Bastián Márquez González.png':             '46% 29%',
    'Belén Endara.png':                         '52% 54%',
    'Benjamín Mendoza.png':                     '51% 49%',
    'Blanzaco Tomas.png':                       '44% 36%',
    'CAMIL ESPINOZA-RAMOS.png':                 '48% 41%',
    'Camila Naranjo.png':                       '47% 28%',
    'Caren Moreno.png':                         '48% 41%',
    'Carlos Moya.png':                          '53% 38%',
    'Catalina Serrano Foto.png':                '49% 44%',
    'Charlize Badilla Soto.png':                '52% 40%',
    'Christian Andrade.png':                    '49% 38%',
    'Daniel Domínguez.png':                     '50% 16%',
    'Debora Parodi.png':                        '51% 26%',
    'Denis Buffa.png':                          '34% 36%',
    'Estefania Lorena Mansilla.png':             '51% 41%',
    'Fabrizio Flores.png':                      '46% 46%',
    'Gloriana Corrales Masís.png':              '48% 42%',
    'Ian Sebastian Teran.png':                  '55% 39%',
    'Intriago Leonel.png':                      '44% 37%',
    'Javier David-Uzcategui.png':               '47% 49%',
    'Jeancarla Padilla.png':                    '31% 26%',
    'Johan Guerra.png':                         '39% 51%',
    'Jorge Luis Barrios.png':                   '57% 32%',
    'José Manuel Hernández Limón.png':          '48% 42%',
    'Josue Alvarez.png':                        '49% 35%',
    'Katherine Girón.png':                      '49% 40%',
    'Kimberly Aragón.png':                      '52% 40%',
    'Krister Figueroa.png':                     '47% 56%',
    'Leonel Anaya.png':                         '44% 37%',
    'Luciana Castro Camavilca foto en blanco.png': '47% 51%',
    'Luis Camilo Díaz-Duarte.png':              '52% 33%',
    'Mariana Cerdas Pérez.png':                 '49% 27%',
    'Mariana Valdez Yañez.png':                 '51% 55%',
    'Mariela Escobar.png':                      '50% 42%',
    'María Belén Terán.png':                    '50% 31%',
    'María Cecilia Merino.png':                 '48% 44%',
    'María Guadalupe Juárez Hernández.png':     '48% 45%',
    'Marko Aurelio Zapata.png':                 '42% 35%',
    'Marcos Nahuel Rios.png':                   '52% 57%',
    'Paula Camila Gonzalez.png':                '51% 34%',
    'Matias Tosini.png':                        '51% 42%',
    'Mishell Criollo.png':                      '45% 24%',
    'Nohely Cáceres.png':                       '48% 29%',
    'Pedro Raul Mendoza.png':                   '54% 39%',
    'Pilar Montealegre Vargas.png':             '50% 44%',
    'Rocio Coronel.png':                        '46% 23%',
    'Rodrigo Aguirre.png':                      '49% 37%',
    'Sebastián Toro.png':                       '56% 30%',
    'Uriel Miralles.png':                       '51% 38%',
    'Valentina Ramírez.png':                    '50% 40%',
    'Willka Fidel Vargas Peña.png':             '50% 43%',
    'Wladimir Tandapilco.png':                  '60% 33%',
    'Nelson Mesías.png':                         '49% 37%',
    'Jessica Martin.png':                       '52% 41%',
    'Juan David Leon Rojas.png':                '52% 36%',
    'Katherine Gabriela Silva.png':             '46% 28%',
  };

  getPhotoPos(photo: string): string {
    const filename = photo.replace('equipo/', '');
    return this.facePos[filename] ?? '50% 20%';
  }

  headsFirst(miembros: TeamMember[]): TeamMember[] {
    return [...miembros].sort((a, b) => (b.isHead ? 1 : 0) - (a.isHead ? 1 : 0));
  }

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
    { name: 'Alonso Segura', role: 'Co-Fundador', country: 'Costa Rica', flag: '🇨🇷', initials: 'AS', photo: 'equipo/Alonso Segura.png' },
    { name: 'Andrea Sánchez', role: 'Co-Fundadora', country: 'México', flag: '🇲🇽', initials: 'AR', photo: 'equipo/Andrea.png' },
  ];

  comiteExperto: TeamMember[] = [
    { name: 'Daniel Domínguez', role: 'Comité Asesor', country: '', flag: '', initials: 'DD', org: 'AllBiotech', photo: 'equipo/Daniel Domínguez.png' },
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
        { name: 'Leonel Intriago', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'LI', photo: 'equipo/Intriago Leonel.png' },
        { name: 'Camila Naranjo', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'CN', photo: 'equipo/Camila Naranjo.png' },
        { name: 'Mariela Escobar', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'ME', photo: 'equipo/Mariela Escobar.png' },
        { name: 'Nohely Cáceres', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'NC', photo: 'equipo/Nohely Cáceres.png' },
      ],
    },
    {
      nombre: 'Gestión de Proyectos',
      miembros: [
        { name: 'María Belén Terán', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'MB', photo: 'equipo/María Belén Terán.png' },
        { name: 'Marko Aurelio Zapata', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'MZ', photo: 'equipo/Marko Aurelio Zapata.png' },
        { name: 'Luis Camilo Díaz-Duarte', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'LD', photo: 'equipo/Luis Camilo Díaz-Duarte.png' },
        { name: 'Marcos Nahuel Ríos', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'MR', photo: 'equipo/Marcos Nahuel Rios.png' },
        { name: 'Anaís Caviedes', role: 'Miembro', country: 'Chile', flag: '🇨🇱', initials: 'AC', photo: 'equipo/Anaís Caviedes.png' },
        { name: 'Paula Camila González', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'PG', photo: 'equipo/Paula Camila Gonzalez.png' },
        { name: 'Kimberly Raquel Aragón', role: 'Miembro', country: 'Guatemala', flag: '🇬🇹', initials: 'KA', photo: 'equipo/Kimberly Aragón.png' },
        { name: 'Andrea Ferrufino', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'AF', photo: 'equipo/Andrea Ferrufino.png' },
      ],
    },
    {
      nombre: 'Política y Regulación',
      miembros: [
        { name: 'Valentina Ramírez', role: 'Head', country: 'Ecuador', flag: '🇪🇨', initials: 'VR', photo: 'equipo/Valentina Ramírez.png', isHead: true },
        { name: 'Jose Manuel Limón', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'JL', photo: 'equipo/José Manuel Hernández Limón.png' },
        { name: 'Benjamín Mendoza', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'BM', photo: 'equipo/Benjamín Mendoza.png' },
        { name: 'María Guadalupe Juárez', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'GJ', photo: 'equipo/María Guadalupe Juárez Hernández.png' },
        { name: 'Javier David Uzcátegui', role: 'Miembro', country: 'Venezuela', flag: '🇻🇪', initials: 'JU', photo: 'equipo/Javier David-Uzcategui.png' },
        { name: 'Carlos Andrés Moya', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'CM', photo: 'equipo/Carlos Moya.png' },
        { name: 'Willka Fidel Vargas', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'WV', photo: 'equipo/Willka Fidel Vargas Peña.png' },
        { name: 'Alejandro Vallejo', role: 'Miembro', country: 'Rep. Dominicana', flag: '🇩🇴', initials: 'AV', photo: 'equipo/Alejandro Vallejo.png' },
      ],
    },
    {
      nombre: 'Expansión',
      miembros: [
        { name: 'Fabrizio Yasuo Flores', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'FF', photo: 'equipo/Fabrizio Flores.png' },
        { name: 'Estefanía Lorena Mansilla', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'EM', photo: 'equipo/Estefania Lorena Mansilla.png' },
        { name: 'María Cecilia Merino', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'MM', photo: 'equipo/María Cecilia Merino.png' },
        { name: 'Mishell Criollo', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'MC', photo: 'equipo/Mishell Criollo.png' },
        { name: 'Pilar Montealegre', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'PM', photo: 'equipo/Pilar Montealegre Vargas.png' },
        { name: 'Rodrigo Aguirre', role: 'Head', country: 'Bolivia', flag: '🇧🇴', initials: 'RA', photo: 'equipo/Rodrigo Aguirre.png', isHead: true },
        { name: 'Wladimir Tandapilco', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'WT', photo: 'equipo/Wladimir Tandapilco.png' },
        { name: 'Andrea Guallasamín', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AG', photo: 'equipo/Andrea Guallasamin.png' },
      ],
    },
    {
      nombre: 'Capacitación',
      miembros: [
        { name: 'Bastian Márquez', role: 'Head', country: 'Chile', flag: '🇨🇱', initials: 'BM', photo: 'equipo/Bastián Márquez González.png', isHead: true },
        { name: 'Jessica Martin', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'JM', photo: 'equipo/Jessica Martin.png' },
        { name: 'Katherine Gabriela Silva', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'KS', photo: 'equipo/Katherine Gabriela Silva.png' },
        { name: 'Sebastián Toro', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'ST', photo: 'equipo/Sebastián Toro.png' },
        { name: 'Juan David León Rojas', role: 'Miembro', country: 'Colombia', flag: '🇨🇴', initials: 'JL', photo: 'equipo/Juan David Leon Rojas.png' },
        { name: 'Rocío Coronel', role: 'Miembro', country: 'Paraguay', flag: '🇵🇾', initials: 'RC', photo: 'equipo/Rocio Coronel.png' },
      ],
    },
    {
      nombre: 'Gestión de Actividades',
      miembros: [
        { name: 'Caren Nicole Moreno', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'CN', photo: 'equipo/Caren Moreno.png' },
        { name: 'Denis Buffa', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'DB', photo: 'equipo/Denis Buffa.png' },
        { name: 'Christian Andrade', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'CA', photo: 'equipo/Christian Andrade.png' },
        { name: 'Pedro Raúl Javier Mendoza', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'PM', photo: 'equipo/Pedro Raul Mendoza.png' },
        { name: 'Gloriana Corrales', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'GC', photo: 'equipo/Gloriana Corrales Masís.png' },
        { name: 'Asley Caballero', role: 'Miembro', country: 'Panamá', flag: '🇵🇦', initials: 'AC', photo: 'equipo/Asley Caballero.png' },
        { name: 'Krister Figueroa', role: 'Head', country: 'Ecuador', flag: '🇪🇨', initials: 'KF', photo: 'equipo/Krister Figueroa.png', isHead: true },
        { name: 'Nelson Mesías Rodríguez', role: 'Head', country: 'Ecuador', flag: '🇪🇨', initials: 'NR', photo: 'equipo/Nelson Mesías.png', isHead: true },
        { name: 'Mariana Cerdas', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'MC', photo: 'equipo/Mariana Cerdas Pérez.png' },
      ],
    },
    {
      nombre: 'Diseño',
      miembros: [
        { name: 'Luciana Castro', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'LC', photo: 'equipo/Luciana Castro Camavilca foto en blanco.png' },
        { name: 'Mariana Valdez', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'MV', photo: 'equipo/Mariana Valdez Yañez.png' },
        { name: 'Debora Parodi', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'DP', photo: 'equipo/Debora Parodi.png' },
        { name: 'Catalina Serrano', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'CS', photo: 'equipo/Catalina Serrano Foto.png' },
        { name: 'Alessia Vásquez', role: 'Head', country: 'Costa Rica', flag: '🇨🇷', initials: 'AV', photo: 'equipo/Alessia Vasquez.png', isHead: true },
        { name: 'Ashley Alban', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AA', photo: 'equipo/Ashley Alban.png' },
        { name: 'Charlize Badilla', role: 'Miembro', country: 'Costa Rica', flag: '🇨🇷', initials: 'CB', photo: 'equipo/Charlize Badilla Soto.png' },
        { name: 'Ana Patricia Minaya', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'AP', photo: 'equipo/Ana Minaya De La Peña.png' },
        { name: 'Anahi Nájera', role: 'Head', country: 'México', flag: '🇲🇽', initials: 'AN', photo: 'equipo/Anahi Najera.png', isHead: true },
      ],
    },
    {
      nombre: 'Audiovisual',
      miembros: [
        { name: 'Belén Endara', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'BE', photo: 'equipo/Belén Endara.png' },
        { name: 'Matías Tosini', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'MT', photo: 'equipo/Matias Tosini.png' },
        { name: 'Aaron Maldonado', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AM', photo: 'equipo/Aaron Maldonado.png' },
      ],
    },
    {
      nombre: 'Recursos e Información',
      miembros: [
        { name: 'Katherine Alessandra Girón', role: 'Miembro', country: 'Guatemala', flag: '🇬🇹', initials: 'KG', photo: 'equipo/Katherine Girón.png' },
        { name: 'Andrea Ramos', role: 'Miembro', country: 'México', flag: '🇲🇽', initials: 'AR', photo: 'equipo/Andrea Ramos.png' },
        { name: 'Josue Alvarez', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'JA', photo: 'equipo/Josue Alvarez.png' },
        { name: 'Angie Pozo', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'AP', photo: 'equipo/Angie Pozo Cedeño.png' },
        { name: 'Camil Lucía Espinoza', role: 'Miembro', country: 'Perú', flag: '🇵🇪', initials: 'CE', photo: 'equipo/CAMIL ESPINOZA-RAMOS.png' },
        { name: 'Johan Kalil Guerra', role: 'Miembro', country: 'Panamá', flag: '🇵🇦', initials: 'JG', photo: 'equipo/Johan Guerra.png' },
        { name: 'Jeancarla Padilla', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'JP', photo: 'equipo/Jeancarla Padilla.png' },
        { name: 'Ian Sebastian Terán', role: 'Miembro', country: 'Bolivia', flag: '🇧🇴', initials: 'IT', photo: 'equipo/Ian Sebastian Teran.png' },
        { name: 'Alejandra Cazares', role: 'Head', country: 'México', flag: '🇲🇽', initials: 'AC', photo: 'equipo/Alejandra Cazares.png', isHead: true },
        { name: 'Jorge Barrios', role: 'Miembro', country: 'Ecuador', flag: '🇪🇨', initials: 'JB', photo: 'equipo/Jorge Luis Barrios.png' },
        { name: 'Tomas Blanzaco', role: 'Miembro', country: 'Argentina', flag: '🇦🇷', initials: 'TB', photo: 'equipo/Blanzaco Tomas.png' },
      ],
    },
  ];

}
