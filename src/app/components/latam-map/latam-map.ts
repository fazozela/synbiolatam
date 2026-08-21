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
    'Aaron Maldonado': '49% 47%',
    'Alejandra Cazares': '48% 25%', 'Alessia Vasquez': '48% 36%',
    'Alejandro Vallejo': '45% 33%',
    'Alonso Segura': '44% 28%', 'Ana Minaya De La Peña': '48% 37%',
    'Anahi Najera': '52% 33%', 'Anaís Caviedes': '51% 60%',
    'Andrea Ferrufino': '53% 43%', 'Andrea Guallasamin': '51% 21%',
    'Andrea Ramos': '51% 48%', 'Andrea': '49% 28%',
    'Angie Pozo Cedeño': '48% 23%', 'Ashley Alban': '52% 36%',
    'Asley Caballero': '49% 40%', 'Bastián Márquez González': '46% 29%',
    'Belén Endara': '52% 54%', 'Benjamín Mendoza': '51% 49%',
    'Blanzaco Tomas': '44% 36%', 'CAMIL ESPINOZA-RAMOS': '48% 41%',
    'Camila Naranjo': '47% 28%', 'Caren Moreno': '48% 41%',
    'Carlos Moya': '53% 38%', 'Catalina Serrano Foto': '49% 44%',
    'Charlize Badilla Soto': '52% 40%', 'Christian Andrade': '49% 38%',
    'Debora Parodi': '51% 26%', 'Denis Buffa': '34% 36%',
    'Fabrizio Flores': '46% 46%', 'Gloriana Corrales Masís': '48% 42%',
    'Ian Sebastian Teran': '55% 39%', 'Intriago Leonel': '44% 37%',
    'Javier David-Uzcategui': '47% 49%', 'Jeancarla Padilla': '31% 26%',
    'Johan Guerra': '39% 51%', 'Jorge Luis Barrios': '57% 32%',
    'José Manuel Hernández Limón': '48% 42%', 'Josue Alvarez': '49% 35%',
    'Katherine Girón': '49% 40%',
    'Kimberly Aragón': '52% 40%', 'Krister Figueroa': '47% 56%',
    'Leonel Anaya': '44% 37%', 'Luciana Castro Camavilca foto en blanco': '47% 51%',
    'Luis Camilo Díaz-Duarte': '52% 33%', 'Mariana Cerdas Pérez': '49% 27%',
    'Mariana Valdez Yañez': '51% 55%', 'Mariela Escobar': '50% 42%',
    'María Belén Terán': '50% 31%', 'María Cecilia Merino': '48% 44%',
    'María Guadalupe Juárez Hernández': '48% 45%', 'Marko Aurelio Zapata': '42% 35%',
    'Marcos Nahuel Rios': '52% 57%', 'Paula Camila Gonzalez': '51% 34%',
    'Estefania Lorena Mansilla': '51% 41%',
    'Matias Tosini': '51% 42%', 'Mishell Criollo': '45% 24%',
    'Nohely Cáceres': '48% 29%',
    'Pedro Raul Mendoza': '54% 39%', 'Pilar Montealegre Vargas': '50% 44%',
    'Rocio Coronel': '46% 23%', 'Rodrigo Aguirre': '49% 37%',
    'Sebastián Toro': '56% 30%', 'Uriel Miralles': '51% 38%',
    'Valentina Ramírez': '50% 40%', 'Willka Fidel Vargas Peña': '50% 43%',
    'Wladimir Tandapilco': '60% 33%',
    'Nelson Mesías': '49% 37%',
    'Jessica Martin': '52% 41%', 'Juan David Leon Rojas': '52% 36%',
    'Katherine Gabriela Silva': '46% 28%',
  };

  getPhotoPos(photo: string): string {
    // ponytail: claves sin extensión — las fotos pasaron de .png a .webp
    const filename = photo.replace('equipo/', '').replace(/\.\w+$/, '');
    return this.facePos[filename] ?? '50% 20%';
  }

  headsFirst(members: CountryMember[]): CountryMember[] {
    const isHead = (m: CountryMember) => m.role.includes('(Head)');
    return [...members].sort((a, b) => Number(isHead(b)) - Number(isHead(a)));
  }

  countries: CountryData[] = [
    {
      id: 'MX', label: 'México', flag: '🇲🇽',
      color: '#F59E0B', colorHover: '#FCD34D',
      members: [
        { name: 'Andrea Sánchez', role: 'Co-Fundadora', initials: 'AS', photo: 'equipo/Andrea.webp' },
        { name: 'Jose Manuel Limón', role: 'Política y Regulación', initials: 'JL', photo: 'equipo/José Manuel Hernández Limón.webp' },
        { name: 'Benjamín Mendoza', role: 'Política y Regulación', initials: 'BM', photo: 'equipo/Benjamín Mendoza.webp' },
        { name: 'María Guadalupe Juárez', role: 'Política y Regulación', initials: 'GJ', photo: 'equipo/María Guadalupe Juárez Hernández.webp' },
        { name: 'Mariana Valdez', role: 'Diseño', initials: 'MV', photo: 'equipo/Mariana Valdez Yañez.webp' },
        { name: 'Anahi Nájera', role: 'Diseño (Head)', initials: 'AN', photo: 'equipo/Anahi Najera.webp' },
        { name: 'Andrea Ramos', role: 'Recursos e Información', initials: 'AR', photo: 'equipo/Andrea Ramos.webp' },
        { name: 'Alejandra Cazares', role: 'Recursos e Información (Head)', initials: 'AC', photo: 'equipo/Alejandra Cazares.webp' },
      ]
    },
    {
      id: 'GT', label: 'Guatemala', flag: '🇬🇹',
      color: '#8B5CF6', colorHover: '#A78BFA',
      members: [
        { name: 'Kimberly Raquel Aragón', role: 'Gestión de Proyectos', initials: 'KA', photo: 'equipo/Kimberly Aragón.webp' },
        { name: 'Katherine Alessandra Girón', role: 'Recursos e Información', initials: 'KG', photo: 'equipo/Katherine Girón.webp' },
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
        { name: 'Alonso Segura', role: 'Co-Fundador', initials: 'AS', photo: 'equipo/Alonso Segura.webp' },
        { name: 'Carlos Andrés Moya', role: 'Política y Regulación', initials: 'CM', photo: 'equipo/Carlos Moya.webp' },
        { name: 'Gloriana Corrales', role: 'Gestión de Actividades', initials: 'GC', photo: 'equipo/Gloriana Corrales Masís.webp' },
        { name: 'Mariana Cerdas', role: 'Gestión de Actividades', initials: 'MC', photo: 'equipo/Mariana Cerdas Pérez.webp' },
        { name: 'Alessia Vásquez', role: 'Diseño (Head)', initials: 'AV', photo: 'equipo/Alessia Vasquez.webp' },
        { name: 'Charlize Badilla', role: 'Diseño', initials: 'CB', photo: 'equipo/Charlize Badilla Soto.webp' },
      ]
    },
    {
      id: 'PA', label: 'Panamá', flag: '🇵🇦',
      color: '#06B6D4', colorHover: '#22D3EE',
      members: [
        { name: 'Asley Caballero', role: 'Gestión de Actividades', initials: 'AC', photo: 'equipo/Asley Caballero.webp' },
        { name: 'Johan Kalil Guerra', role: 'Recursos e Información', initials: 'JG', photo: 'equipo/Johan Guerra.webp' },
      ]
    },
    {
      id: 'CO', label: 'Colombia', flag: '🇨🇴',
      color: '#F97316', colorHover: '#FB923C',
      members: [
        { name: 'Luis Camilo Díaz-Duarte', role: 'Gestión de Proyectos', initials: 'LD', photo: 'equipo/Luis Camilo Díaz-Duarte.webp' },
        { name: 'Sebastián Toro', role: 'Capacitación', initials: 'ST', photo: 'equipo/Sebastián Toro.webp' },
        { name: 'Juan David León Rojas', role: 'Capacitación', initials: 'JL', photo: 'equipo/Juan David Leon Rojas.webp' },
      ]
    },
    {
      id: 'VE', label: 'Venezuela', flag: '🇻🇪',
      color: '#EF4444', colorHover: '#F87171',
      members: [
        { name: 'Javier David Uzcátegui', role: 'Política y Regulación', initials: 'JU', photo: 'equipo/Javier David-Uzcategui.webp' },
      ]
    },
    {
      id: 'EC', label: 'Ecuador', flag: '🇪🇨',
      color: '#3B82F6', colorHover: '#60A5FA',
      members: [
        { name: 'Leonel Intriago', role: 'Financiamiento y Sostenibilidad', initials: 'LI', photo: 'equipo/Intriago Leonel.webp' },
        { name: 'Camila Naranjo', role: 'Financiamiento y Sostenibilidad', initials: 'CN', photo: 'equipo/Camila Naranjo.webp' },
        { name: 'Paula Camila González', role: 'Gestión de Proyectos', initials: 'PG', photo: 'equipo/Paula Camila Gonzalez.webp' },
        { name: 'Valentina Ramírez', role: 'Política y Regulación (Head)', initials: 'VR', photo: 'equipo/Valentina Ramírez.webp' },
        { name: 'Mishell Criollo', role: 'Expansión', initials: 'MC', photo: 'equipo/Mishell Criollo.webp' },
        { name: 'Wladimir Tandapilco', role: 'Expansión', initials: 'WT', photo: 'equipo/Wladimir Tandapilco.webp' },
        { name: 'Andrea Guallasamín', role: 'Expansión', initials: 'AG', photo: 'equipo/Andrea Guallasamin.webp' },
        { name: 'Katherine Gabriela Silva', role: 'Capacitación', initials: 'KS', photo: 'equipo/Katherine Gabriela Silva.webp' },
        { name: 'Krister Figueroa', role: 'Gestión de Actividades (Head)', initials: 'KF', photo: 'equipo/Krister Figueroa.webp' },
        { name: 'Nelson Mesías Rodríguez', role: 'Gestión de Actividades (Head)', initials: 'NR', photo: 'equipo/Nelson Mesías.webp' },
        { name: 'Christian Andrade', role: 'Gestión de Actividades', initials: 'CA', photo: 'equipo/Christian Andrade.webp' },
        { name: 'Catalina Serrano', role: 'Diseño', initials: 'CS', photo: 'equipo/Catalina Serrano Foto.webp' },
        { name: 'Ashley Alban', role: 'Diseño', initials: 'AA', photo: 'equipo/Ashley Alban.webp' },
        { name: 'Belén Endara', role: 'Audiovisual', initials: 'BE', photo: 'equipo/Belén Endara.webp' },
        { name: 'Aaron Maldonado', role: 'Audiovisual', initials: 'AM', photo: 'equipo/Aaron Maldonado.webp' },
        { name: 'Josue Alvarez', role: 'Recursos e Información', initials: 'JA', photo: 'equipo/Josue Alvarez.webp' },
        { name: 'Angie Pozo', role: 'Recursos e Información', initials: 'AP', photo: 'equipo/Angie Pozo Cedeño.webp' },
        { name: 'Jorge Barrios', role: 'Recursos e Información', initials: 'JB', photo: 'equipo/Jorge Luis Barrios.webp' },
        { name: 'María Belén Terán', role: 'Gestión de Proyectos', initials: 'MB', photo: 'equipo/María Belén Terán.webp' },
      ]
    },
    {
      id: 'PE', label: 'Perú', flag: '🇵🇪',
      color: '#10B981', colorHover: '#34D399',
      members: [
        { name: 'Nohely Cáceres', role: 'Financiamiento y Sostenibilidad', initials: 'NC', photo: 'equipo/Nohely Cáceres.webp' },
        { name: 'Marko Aurelio Zapata', role: 'Gestión de Proyectos', initials: 'MZ', photo: 'equipo/Marko Aurelio Zapata.webp' },
        { name: 'Fabrizio Yasuo Flores', role: 'Expansión', initials: 'FF', photo: 'equipo/Fabrizio Flores.webp' },
        { name: 'Pedro Raúl Javier Mendoza', role: 'Gestión de Actividades', initials: 'PM', photo: 'equipo/Pedro Raul Mendoza.webp' },
        { name: 'Luciana Castro', role: 'Diseño', initials: 'LC', photo: 'equipo/Luciana Castro Camavilca foto en blanco.webp' },
        { name: 'Ana Patricia Minaya', role: 'Diseño', initials: 'AP', photo: 'equipo/Ana Minaya De La Peña.webp' },
        { name: 'Camil Lucía Espinoza', role: 'Recursos e Información', initials: 'CE', photo: 'equipo/CAMIL ESPINOZA-RAMOS.webp' },
      ]
    },
    {
      id: 'BO', label: 'Bolivia', flag: '🇧🇴',
      color: '#84CC16', colorHover: '#A3E635',
      members: [
        { name: 'Andrea Ferrufino', role: 'Gestión de Proyectos', initials: 'AF', photo: 'equipo/Andrea Ferrufino.webp' },
        { name: 'Willka Fidel Vargas', role: 'Política y Regulación', initials: 'WV', photo: 'equipo/Willka Fidel Vargas Peña.webp' },
        { name: 'Estefanía Lorena Mansilla', role: 'Expansión', initials: 'EM', photo: 'equipo/Estefania Lorena Mansilla.webp' },
        { name: 'Pilar Montealegre', role: 'Expansión', initials: 'PM', photo: 'equipo/Pilar Montealegre Vargas.webp' },
        { name: 'Rodrigo Aguirre', role: 'Expansión (Head)', initials: 'RA', photo: 'equipo/Rodrigo Aguirre.webp' },
        { name: 'Jeancarla Padilla', role: 'Recursos e Información', initials: 'JP', photo: 'equipo/Jeancarla Padilla.webp' },
        { name: 'Ian Sebastian Terán', role: 'Recursos e Información', initials: 'IT', photo: 'equipo/Ian Sebastian Teran.webp' },
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
        { name: 'Rocío Coronel', role: 'Capacitación', initials: 'RC', photo: 'equipo/Rocio Coronel.webp' },
      ]
    },
    {
      id: 'CL', label: 'Chile', flag: '🇨🇱',
      color: '#A855F7', colorHover: '#C084FC',
      members: [
        { name: 'Anaís Caviedes', role: 'Gestión de Proyectos', initials: 'AC', photo: 'equipo/Anaís Caviedes.webp' },
        { name: 'Bastian Márquez', role: 'Capacitación (Head)', initials: 'BM', photo: 'equipo/Bastián Márquez González.webp' },
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
        { name: 'Mariela Escobar', role: 'Financiamiento y Sostenibilidad', initials: 'ME', photo: 'equipo/Mariela Escobar.webp' },
        { name: 'Marcos Nahuel Ríos', role: 'Gestión de Proyectos', initials: 'MR', photo: 'equipo/Marcos Nahuel Rios.webp' },
        { name: 'María Cecilia Merino', role: 'Expansión', initials: 'MM', photo: 'equipo/María Cecilia Merino.webp' },
        { name: 'Jessica Martin', role: 'Capacitación', initials: 'JM', photo: 'equipo/Jessica Martin.webp' },
        { name: 'Caren Nicole Moreno', role: 'Gestión de Actividades', initials: 'CN', photo: 'equipo/Caren Moreno.webp' },
        { name: 'Denis Buffa', role: 'Gestión de Actividades', initials: 'DB', photo: 'equipo/Denis Buffa.webp' },
        { name: 'Debora Parodi', role: 'Diseño', initials: 'DP', photo: 'equipo/Debora Parodi.webp' },
        { name: 'Matías Tosini', role: 'Audiovisual', initials: 'MT', photo: 'equipo/Matias Tosini.webp' },
        { name: 'Tomas Blanzaco', role: 'Recursos e Información', initials: 'TB', photo: 'equipo/Blanzaco Tomas.webp' },
      ]
    },
    {
      id: 'DO', label: 'Rep. Dominicana', flag: '🇩🇴',
      color: '#6366F1', colorHover: '#818CF8',
      members: [
        { name: 'Alejandro Vallejo', role: 'Política y Regulación', initials: 'AV', photo: 'equipo/Alejandro Vallejo.webp' },
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
