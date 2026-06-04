import { Component, signal } from '@angular/core';
import { NgStyle } from '@angular/common';

export interface CountryMember {
  name: string;
  role: string;
  initials: string;
  photo?: string;
}

export interface CountryData {
  id: string;
  label: string;
  flag: string;
  members: CountryMember[];
  color: string;
  colorHover: string;
}

const MUTED      = '#1a4a40';
const MUTED_HOV  = '#236b5a';

@Component({
  selector: 'app-latam-map',
  imports: [NgStyle],
  templateUrl: './latam-map.html',
})
export class LatamMap {
  selectedCountry = signal<string | null>(null);
  tooltipX = signal(0);
  tooltipY = signal(0);

  private facePos: Record<string, string> = {
    'Aaron Maldonado.png': '49% 47%', 'Adriana Marcela Martinez Botello.png': '50% 18%',
    'Mariana Cerdas Pérez.png': '49% 27%',
    'Alejandra Cazares.png': '48% 25%', 'Alessia Vasquez.png': '48% 36%',
    'Alonso Segura.png': '44% 28%', 'Ana Minaya De La Peña.png': '48% 37%',
    'Anahi Najera.png': '52% 33%', 'Anaís Caviedes.png': '51% 60%',
    'Andrea Ferrufino.png': '53% 43%', 'Andrea Guallasamin.png': '51% 21%',
    'Andrea Ramos.png': '51% 48%', 'Andrea.png': '49% 28%',
    'Angie Pozo Cedeño.png': '48% 23%', 'Ashley Alban.png': '52% 36%',
    'Asley Caballero.png': '49% 40%', 'Bastián Márquez González.png': '46% 29%',
    'Belén Endara.png': '52% 54%', 'Benjamín Mendoza.png': '51% 49%',
    'Blanzaco Tomas.png': '44% 36%', 'CAMIL ESPINOZA-RAMOS.png': '48% 41%',
    'Camila Naranjo.png': '47% 28%', 'Caren Moreno.png': '48% 41%',
    'Carlos Moya.png': '53% 38%', 'Catalina Serrano Foto.png': '49% 44%',
    'Charlize Badilla Soto.png': '52% 40%', 'Christian Andrade.png': '49% 38%',
    'Debora Parodi.png': '51% 26%', 'Denis Buffa.png': '34% 36%',
    'Fabrizio Flores.png': '46% 46%', 'Gloriana Corrales Masís.png': '48% 42%',
    'Ian Sebastian Teran.png': '55% 39%', 'Intriago Leonel.png': '44% 37%',
    'Javier David-Uzcategui.png': '47% 49%', 'Jeancarla Padilla.png': '31% 26%',
    'Johan Guerra.png': '39% 51%', 'Jorge Luis Barrios.png': '57% 32%',
    'José Manuel Hernández Limón.png': '48% 42%', 'Josue Alvarez.png': '49% 35%',
    'Juan Anaya.png': '53% 44%', 'Katherine Girón.png': '49% 40%',
    'Kimberly Aragón.png': '52% 40%', 'Krister Figueroa.png': '47% 56%',
    'Leonel Anaya.png': '44% 37%', 'Luciana Castro Camavilca foto en blanco.png': '47% 51%',
    'Luis Camilo Díaz-Duarte.png': '52% 33%', 'Mariana Cerdas Pérez.png': '49% 27%',
    'Mariana Valdez Yañez.png': '51% 55%', 'Mariela Escobar.png': '50% 42%',
    'María Belén Terán.png': '50% 31%', 'María Cecilia Merino.png': '48% 44%',
    'María Guadalupe Juárez Hernández.png': '48% 45%', 'Marko Aurelio Zapata.png': '42% 35%',
    'Marcos Nahuel Rios.png': '52% 57%', 'Paula Camila Gonzalez.png': '51% 34%',
    'Estefania Lorena Mansilla.png': '51% 41%',
    'Matias Tosini.png': '51% 42%', 'Mishell Criollo.png': '45% 24%',
    'Nohely Cáceres.png': '48% 29%',
    'Pedro Raul Mendoza.png': '54% 39%', 'Pilar Montealegre Vargas.png': '50% 44%',
    'Rocio Coronel.png': '67% 54%', 'Rodrigo Aguirre.png': '49% 37%',
    'Sebastián Toro.png': '56% 30%', 'Uriel Miralles.png': '51% 38%',
    'Valentina Ramírez.png': '50% 40%', 'Willka Fidel Vargas Peña.png': '50% 43%',
    'Wladimir Tandapilco.png': '60% 33%', 'Xavier García.png': '54% 38%',
    'Nelson Mesías.png': '49% 37%',
    'Jessica Martin.png': '52% 41%', 'Juan David Leon Rojas.png': '52% 36%',
    'Katherine Gabriela Silva.png': '46% 28%',
  };

  getPhotoPos(photo: string): string {
    const filename = photo.replace('equipo/', '');
    return this.facePos[filename] ?? '50% 20%';
  }

  countries: CountryData[] = [
    {
      id: 'MX', label: 'México', flag: '🇲🇽',
      color: '#F59E0B', colorHover: '#FCD34D',
      members: [
        { name: 'Andrea Sánchez', role: 'Co-Fundadora', initials: 'AS', photo: 'equipo/Andrea.png' },
        { name: 'Jose Manuel Limón', role: 'Política y Regulación', initials: 'JL', photo: 'equipo/José Manuel Hernández Limón.png' },
        { name: 'Benjamín Mendoza', role: 'Política y Regulación', initials: 'BM', photo: 'equipo/Benjamín Mendoza.png' },
        { name: 'María Guadalupe Juárez', role: 'Política y Regulación', initials: 'GJ', photo: 'equipo/María Guadalupe Juárez Hernández.png' },
        { name: 'Mariana Valdez', role: 'Diseño', initials: 'MV', photo: 'equipo/Mariana Valdez Yañez.png' },
        { name: 'Anahi Nájera', role: 'Diseño', initials: 'AN', photo: 'equipo/Anahi Najera.png' },
        { name: 'Andrea Ramos', role: 'Recursos e Información', initials: 'AR', photo: 'equipo/Andrea Ramos.png' },
        { name: 'Alejandra Cazares', role: 'Recursos e Información', initials: 'AC', photo: 'equipo/Alejandra Cazares.png' },
      ]
    },
    {
      id: 'GT', label: 'Guatemala', flag: '🇬🇹',
      color: '#8B5CF6', colorHover: '#A78BFA',
      members: [
        { name: 'Kimberly Raquel Aragón', role: 'Gestión de Proyectos', initials: 'KA', photo: 'equipo/Kimberly Aragón.png' },
        { name: 'Katherine Alessandra Girón', role: 'Recursos e Información', initials: 'KG', photo: 'equipo/Katherine Girón.png' },
      ]
    },
    {
      id: 'SV', label: 'El Salvador', flag: '🇸🇻',
      color: MUTED, colorHover: MUTED_HOV,
      members: []
    },
    {
      id: 'HN', label: 'Honduras', flag: '🇭🇳',
      color: MUTED, colorHover: MUTED_HOV,
      members: []
    },
    {
      id: 'NI', label: 'Nicaragua', flag: '🇳🇮',
      color: MUTED, colorHover: MUTED_HOV,
      members: []
    },
    {
      id: 'CR', label: 'Costa Rica', flag: '🇨🇷',
      color: '#EC4899', colorHover: '#F472B6',
      members: [
        { name: 'Alonso Segura', role: 'Co-Fundador', initials: 'AS', photo: 'equipo/Alonso Segura.png' },
        { name: 'Carlos Andrés Moya', role: 'Política y Regulación', initials: 'CM', photo: 'equipo/Carlos Moya.png' },
        { name: 'Gloriana Corrales', role: 'Gestión de Actividades', initials: 'GC', photo: 'equipo/Gloriana Corrales Masís.png' },
        { name: 'Mariana Cerdas', role: 'Gestión de Actividades', initials: 'MC', photo: 'equipo/Mariana Cerdas Pérez.png' },
        { name: 'Alessia Vásquez', role: 'Diseño', initials: 'AV', photo: 'equipo/Alessia Vasquez.png' },
        { name: 'Charlize Badilla', role: 'Diseño', initials: 'CB', photo: 'equipo/Charlize Badilla Soto.png' },
      ]
    },
    {
      id: 'PA', label: 'Panamá', flag: '🇵🇦',
      color: '#06B6D4', colorHover: '#22D3EE',
      members: [
        { name: 'Ailey Caballero', role: 'Gestión de Actividades', initials: 'AC', photo: 'equipo/Asley Caballero.png' },
        { name: 'Johan Kalil Guerra', role: 'Recursos e Información', initials: 'JG', photo: 'equipo/Johan Guerra.png' },
      ]
    },
    {
      id: 'CO', label: 'Colombia', flag: '🇨🇴',
      color: '#F97316', colorHover: '#FB923C',
      members: [
        { name: 'Juan Anaya', role: 'Gestión de Proyectos', initials: 'JA', photo: 'equipo/Juan Anaya.png' },
        { name: 'Luis Camilo Díaz-Duarte', role: 'Gestión de Proyectos', initials: 'LD', photo: 'equipo/Luis Camilo Díaz-Duarte.png' },
        { name: 'Sebastián Toro', role: 'Capacitación', initials: 'ST', photo: 'equipo/Sebastián Toro.png' },
        { name: 'Juan David León Rojas', role: 'Capacitación', initials: 'JL', photo: 'equipo/Juan David Leon Rojas.png' },
        { name: 'Adriana Marcela Martínez', role: 'Gestión de Actividades', initials: 'AM', photo: 'equipo/Adriana Marcela Martinez Botello.png' },
      ]
    },
    {
      id: 'VE', label: 'Venezuela', flag: '🇻🇪',
      color: '#EF4444', colorHover: '#F87171',
      members: [
        { name: 'Javier David Uzcátegui', role: 'Política y Regulación', initials: 'JU', photo: 'equipo/Javier David-Uzcategui.png' },
      ]
    },
    {
      id: 'EC', label: 'Ecuador', flag: '🇪🇨',
      color: '#3B82F6', colorHover: '#60A5FA',
      members: [
        { name: 'Leonel Intriago', role: 'Financiamiento y Sostenibilidad', initials: 'LI', photo: 'equipo/Intriago Leonel.png' },
        { name: 'Camila Naranjo', role: 'Financiamiento y Sostenibilidad', initials: 'CN', photo: 'equipo/Camila Naranjo.png' },
        { name: 'Paula Camila González', role: 'Gestión de Proyectos', initials: 'PG', photo: 'equipo/Paula Camila Gonzalez.png' },
        { name: 'Valentina Ramírez', role: 'Política y Regulación (Head)', initials: 'VR', photo: 'equipo/Valentina Ramírez.png' },
        { name: 'Mishell Criollo', role: 'Expansión', initials: 'MC', photo: 'equipo/Mishell Criollo.png' },
        { name: 'Wladimir Tandapilco', role: 'Expansión', initials: 'WT', photo: 'equipo/Wladimir Tandapilco.png' },
        { name: 'Andrea Guallasamín', role: 'Expansión', initials: 'AG', photo: 'equipo/Andrea Guallasamin.png' },
        { name: 'Xavier García', role: 'Expansión', initials: 'XG', photo: 'equipo/Xavier García.png' },
        { name: 'Katherine Gabriela Silva', role: 'Capacitación', initials: 'KS', photo: 'equipo/Katherine Gabriela Silva.png' },
        { name: 'Krister Figueroa', role: 'Gestión de Actividades', initials: 'KF', photo: 'equipo/Krister Figueroa.png' },
        { name: 'Nelson Mesías Rodríguez', role: 'Gestión de Actividades', initials: 'NR', photo: 'equipo/Nelson Mesías.png' },
        { name: 'Christian Andrade', role: 'Gestión de Actividades', initials: 'CA', photo: 'equipo/Christian Andrade.png' },
        { name: 'Catalina Serrano', role: 'Diseño', initials: 'CS', photo: 'equipo/Catalina Serrano Foto.png' },
        { name: 'Ashley Alban', role: 'Diseño', initials: 'AA', photo: 'equipo/Ashley Alban.png' },
        { name: 'Belén Endara', role: 'Audiovisual', initials: 'BE', photo: 'equipo/Belén Endara.png' },
        { name: 'Aaron Maldonado', role: 'Audiovisual', initials: 'AM', photo: 'equipo/Aaron Maldonado.png' },
        { name: 'Josue Alvarez', role: 'Recursos e Información', initials: 'JA', photo: 'equipo/Josue Alvarez.png' },
        { name: 'Angie Pozo', role: 'Recursos e Información', initials: 'AP', photo: 'equipo/Angie Pozo Cedeño.png' },
        { name: 'Jorge Barrios', role: 'Recursos e Información', initials: 'JB', photo: 'equipo/Jorge Luis Barrios.png' },
        { name: 'María Belén Terán', role: 'Gestión de Proyectos', initials: 'MB', photo: 'equipo/María Belén Terán.png' },
      ]
    },
    {
      id: 'PE', label: 'Perú', flag: '🇵🇪',
      color: '#10B981', colorHover: '#34D399',
      members: [
        { name: 'Nohely Cáceres', role: 'Financiamiento y Sostenibilidad', initials: 'NC', photo: 'equipo/Nohely Cáceres.png' },
        { name: 'Marko Aurelio Zapata', role: 'Gestión de Proyectos', initials: 'MZ', photo: 'equipo/Marko Aurelio Zapata.png' },
        { name: 'Fabrizio Yasuo Flores', role: 'Expansión', initials: 'FF', photo: 'equipo/Fabrizio Flores.png' },
        { name: 'Pedro Raúl Javier Mendoza', role: 'Gestión de Actividades', initials: 'PM', photo: 'equipo/Pedro Raul Mendoza.png' },
        { name: 'Luciana Castro', role: 'Diseño', initials: 'LC', photo: 'equipo/Luciana Castro Camavilca foto en blanco.png' },
        { name: 'Ana Patricia Minaya', role: 'Diseño', initials: 'AP', photo: 'equipo/Ana Minaya De La Peña.png' },
        { name: 'Camil Lucía Espinoza', role: 'Recursos e Información', initials: 'CE', photo: 'equipo/CAMIL ESPINOZA-RAMOS.png' },
      ]
    },
    {
      id: 'BO', label: 'Bolivia', flag: '🇧🇴',
      color: '#84CC16', colorHover: '#A3E635',
      members: [
        { name: 'Andrea Ferrufino', role: 'Gestión de Proyectos', initials: 'AF', photo: 'equipo/Andrea Ferrufino.png' },
        { name: 'Wilka Fidel Vargas', role: 'Política y Regulación', initials: 'WV', photo: 'equipo/Willka Fidel Vargas Peña.png' },
        { name: 'Estefanía Lorena Mansilla', role: 'Expansión', initials: 'EM', photo: 'equipo/Estefania Lorena Mansilla.png' },
        { name: 'Pilar Montealegre', role: 'Expansión', initials: 'PM', photo: 'equipo/Pilar Montealegre Vargas.png' },
        { name: 'Rodrigo Aguirre', role: 'Expansión', initials: 'RA', photo: 'equipo/Rodrigo Aguirre.png' },
        { name: 'Jeancarla Padilla', role: 'Recursos e Información', initials: 'JP', photo: 'equipo/Jeancarla Padilla.png' },
        { name: 'Ian Sebastian Terán', role: 'Recursos e Información', initials: 'IT', photo: 'equipo/Ian Sebastian Teran.png' },
      ]
    },
    {
      id: 'BR', label: 'Brasil', flag: '🇧🇷',
      color: MUTED, colorHover: MUTED_HOV,
      members: []
    },
    {
      id: 'PY', label: 'Paraguay', flag: '🇵🇾',
      color: '#F43F5E', colorHover: '#FB7185',
      members: [
        { name: 'Rocío Coronel', role: 'Capacitación', initials: 'RC', photo: 'equipo/Rocio Coronel.png' },
      ]
    },
    {
      id: 'CL', label: 'Chile', flag: '🇨🇱',
      color: '#A855F7', colorHover: '#C084FC',
      members: [
        { name: 'Anaís Caviedes', role: 'Gestión de Proyectos', initials: 'AC', photo: 'equipo/Anaís Caviedes.png' },
        { name: 'Bastian Márquez', role: 'Capacitación (Head)', initials: 'BM', photo: 'equipo/Bastián Márquez González.png' },
      ]
    },
    {
      id: 'UY', label: 'Uruguay', flag: '🇺🇾',
      color: MUTED, colorHover: MUTED_HOV,
      members: []
    },
    {
      id: 'AR', label: 'Argentina', flag: '🇦🇷',
      color: '#0EA5E9', colorHover: '#38BDF8',
      members: [
        { name: 'Mariela Escobar', role: 'Financiamiento y Sostenibilidad', initials: 'ME', photo: 'equipo/Mariela Escobar.png' },
        { name: 'Marcos Nahuel Ríos', role: 'Gestión de Proyectos', initials: 'MR', photo: 'equipo/Marcos Nahuel Rios.png' },
        { name: 'María Cecilia Merino', role: 'Expansión', initials: 'MM', photo: 'equipo/María Cecilia Merino.png' },
        { name: 'Jessica Martin', role: 'Capacitación', initials: 'JM', photo: 'equipo/Jessica Martin.png' },
        { name: 'Caren Nicole Moreno', role: 'Gestión de Actividades', initials: 'CN', photo: 'equipo/Caren Moreno.png' },
        { name: 'Denis Buffa', role: 'Gestión de Actividades', initials: 'DB', photo: 'equipo/Denis Buffa.png' },
        { name: 'Debora Parodi', role: 'Diseño', initials: 'DP', photo: 'equipo/Debora Parodi.png' },
        { name: 'Matías Tosini', role: 'Audiovisual', initials: 'MT', photo: 'equipo/Matias Tosini.png' },
        { name: 'Tomas Blanzaco', role: 'Recursos e Información', initials: 'TB', photo: 'equipo/Blanzaco Tomas.png' },
      ]
    },
    {
      id: 'DO', label: 'Rep. Dominicana', flag: '🇩🇴',
      color: '#6366F1', colorHover: '#818CF8',
      members: [
        { name: 'Alejandro Vallejo', role: 'Política y Regulación', initials: 'AV' },
      ]
    },
  ];

  getCountry(id: string): CountryData | undefined {
    return this.countries.find(c => c.id === id);
  }

  getFill(id: string): string {
    const c = this.getCountry(id);
    if (!c) return '#1a4a40';
    return this.selectedCountry() === id ? c.colorHover : c.color;
  }

  onCountryClick(event: MouseEvent, countryId: string) {
    const country = this.getCountry(countryId);

    // Toggle off if clicking the same country or one with no members
    if (this.selectedCountry() === countryId || !country || country.members.length === 0) {
      this.selectedCountry.set(null);
      return;
    }

    this.selectedCountry.set(countryId);
    this.positionPanel(event);
  }

  closePanel() {
    this.selectedCountry.set(null);
  }

  private positionPanel(event: MouseEvent) {
    const wrapper = (event.currentTarget as SVGElement).closest('.map-wrapper');
    const rect = wrapper?.getBoundingClientRect();
    if (!rect) return;

    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const PANEL_W = 272;
    const PANEL_H = 320;
    const GAP = 14;

    // Prefer right side; fall back to left
    let left = clickX + GAP;
    if (left + PANEL_W > rect.width) {
      left = clickX - PANEL_W - GAP;
    }
    left = Math.max(4, Math.min(left, rect.width - PANEL_W - 4));

    // Prefer below click; shift up if it would overflow
    let top = clickY - 20;
    if (top + PANEL_H > rect.height) {
      top = rect.height - PANEL_H - 4;
    }
    top = Math.max(4, top);

    this.tooltipX.set(left);
    this.tooltipY.set(top);
  }

  get activeCountry(): CountryData | undefined {
    const id = this.selectedCountry();
    return id ? this.getCountry(id) : undefined;
  }
}
