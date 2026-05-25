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

  countries: CountryData[] = [
    {
      id: 'MX', label: 'México', flag: '🇲🇽',
      color: '#F59E0B', colorHover: '#FCD34D',
      members: [
        { name: 'Andrea Sánchez', role: 'Co-Fundadora', initials: 'AS', photo: 'equipo/Andrea.png' },
        { name: 'Jose Manuel Limón', role: 'Política y Regulación', initials: 'JL', photo: 'equipo/José Manuel Hernández Limón.png' },
        { name: 'Benjamín Mendoza', role: 'Política y Regulación', initials: 'BM', photo: 'equipo/Benjamín Mendoza.jpg' },
        { name: 'María Guadalupe Juárez', role: 'Política y Regulación', initials: 'GJ', photo: 'equipo/María Guadalupe Juárez Hernández.jpg' },
        { name: 'Mariana Valdéz', role: 'Diseño', initials: 'MV', photo: 'equipo/Mariana Valdez Yañez.JPG' },
        { name: 'Anahí Nájera', role: 'Diseño', initials: 'AN', photo: 'equipo/Anahi Najera.jpg' },
        { name: 'Andrea Ramos', role: 'Recursos e Información', initials: 'AR', photo: 'equipo/Andrea Ramos.webp' },
        { name: 'Alejandra Cazares', role: 'Recursos e Información', initials: 'AC', photo: 'equipo/Alejandra Cazares.png' },
      ]
    },
    {
      id: 'GT', label: 'Guatemala', flag: '🇬🇹',
      color: '#8B5CF6', colorHover: '#A78BFA',
      members: [
        { name: 'Kimberly Raquel Aragón', role: 'Gestión de Proyectos', initials: 'KA', photo: 'equipo/Kimberly Aragón.png' },
        { name: 'Katherine Alessandra Girón', role: 'Recursos e Información', initials: 'KG', photo: 'equipo/Katherine Girón.jpg' },
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
        { name: 'Alonso Segura', role: 'Co-Fundador', initials: 'AS', photo: 'equipo/Alonso Segura.jpg' },
        { name: 'Carlos Andrés Moya', role: 'Política y Regulación', initials: 'CM', photo: 'equipo/Carlos Moya.png' },
        { name: 'Gloriana Corrales', role: 'Capacitación', initials: 'GC', photo: 'equipo/Gloriana Corrales Masís.jpg' },
        { name: 'Maricela Martínez', role: 'Capacitación', initials: 'MM' },
        { name: 'Mariane Córdoba', role: 'Capacitación', initials: 'MC' },
        { name: 'Alessia Vásquez', role: 'Diseño', initials: 'AV', photo: 'equipo/Alessia Vasquez.jpg' },
        { name: 'Charlize Badilla', role: 'Diseño', initials: 'CB', photo: 'equipo/Charlize Badilla Soto.png' },
      ]
    },
    {
      id: 'PA', label: 'Panamá', flag: '🇵🇦',
      color: '#06B6D4', colorHover: '#22D3EE',
      members: [
        { name: 'Ailey Caballero', role: 'Capacitación', initials: 'AC', photo: 'equipo/Asley Caballero.jpeg' },
        { name: 'Johan Kalil Guerra', role: 'Recursos e Información', initials: 'JG', photo: 'equipo/Johan Guerra.png' },
      ]
    },
    {
      id: 'CO', label: 'Colombia', flag: '🇨🇴',
      color: '#F97316', colorHover: '#FB923C',
      members: [
        { name: 'Luis Camilo Díaz-Duarte', role: 'Gestión de Proyectos', initials: 'LD', photo: 'equipo/Luis Camilo Díaz-Duarte.png' },
        { name: 'Sebastian Torres', role: 'Capacitación', initials: 'ST', photo: 'equipo/Sebastián Toro.jpg' },
        { name: 'Juan David León', role: 'Capacitación', initials: 'JL' },
      ]
    },
    {
      id: 'VE', label: 'Venezuela', flag: '🇻🇪',
      color: '#EF4444', colorHover: '#F87171',
      members: [
        { name: 'Javier David Uzcátegui', role: 'Política y Regulación', initials: 'JU', photo: 'equipo/Javier David-Uzcategui.jpg' },
      ]
    },
    {
      id: 'EC', label: 'Ecuador', flag: '🇪🇨',
      color: '#3B82F6', colorHover: '#60A5FA',
      members: [
        { name: 'Leonel Anaya', role: 'Financiamiento y Sostenibilidad', initials: 'LA' },
        { name: 'Camila Naranjo', role: 'Financiamiento y Sostenibilidad', initials: 'CN', photo: 'equipo/Camila Naranjo.jpg' },
        { name: 'Paula Camila González', role: 'Gestión de Proyectos', initials: 'PG' },
        { name: 'Valentina Ramírez', role: 'Política y Regulación (Head)', initials: 'VR', photo: 'equipo/Valentina Ramírez.png' },
        { name: 'Mishell Criollo', role: 'Expansión', initials: 'MC', photo: 'equipo/Mishell Criollo.png' },
        { name: 'Vladimir Tandapiico', role: 'Expansión', initials: 'VT', photo: 'equipo/Wladimir Tandapilco.jpg' },
        { name: 'Andrea Gualtasamin', role: 'Expansión', initials: 'AG', photo: 'equipo/Andrea Guallasamin.jpg' },
        { name: 'Xavier García', role: 'Expansión', initials: 'XG', photo: 'equipo/Xavier García.jpg' },
        { name: 'Katherine Silva', role: 'Capacitación', initials: 'KS' },
        { name: 'Krister Figueroa', role: 'Capacitación', initials: 'KF', photo: 'equipo/Krister Figueroa.png' },
        { name: 'Nelson Rodríguez', role: 'Capacitación', initials: 'NR' },
        { name: 'Christian Andrade', role: 'Gestión de Actividades', initials: 'CA', photo: 'equipo/Christian Andrade.jpeg' },
        { name: 'Catalina Serrano', role: 'Diseño', initials: 'CS', photo: 'equipo/Catalina Serrano Foto.png' },
        { name: 'Ashley Alban', role: 'Diseño', initials: 'AA', photo: 'equipo/Ashley Alban.png' },
        { name: 'Belén Tosini', role: 'Audiovisual', initials: 'BT' },
        { name: 'Aaron Maldonado', role: 'Audiovisual', initials: 'AM', photo: 'equipo/Aaron Maldonado.JPG' },
        { name: 'Josue Alvarez', role: 'Recursos e Información', initials: 'JA', photo: 'equipo/Josue Alvarez.jpeg' },
        { name: 'Angie Pozo', role: 'Recursos e Información', initials: 'AP', photo: 'equipo/Angie Pozo Cedeño.jpg' },
        { name: 'Jorge Barrios', role: 'Recursos e Información', initials: 'JB', photo: 'equipo/Jorge Luis Barrios.png' },
        { name: 'María Belén Terán', role: 'Gestión de Proyectos', initials: 'MB', photo: 'equipo/María Belén Terán.png' },
      ]
    },
    {
      id: 'PE', label: 'Perú', flag: '🇵🇪',
      color: '#10B981', colorHover: '#34D399',
      members: [
        { name: 'Nohely Cáceres', role: 'Financiamiento y Sostenibilidad', initials: 'NC', photo: 'equipo/Nohely Cáceres.jpg' },
        { name: 'Mario Aurelio Zapata', role: 'Gestión de Proyectos', initials: 'MZ' },
        { name: 'Fabrizio Yasuo Flores', role: 'Expansión', initials: 'FF', photo: 'equipo/Fabrizio Flores.png' },
        { name: 'Pedro Raúl Javier Mendoza', role: 'Gestión de Actividades', initials: 'PM', photo: 'equipo/Pedro Raul Mendoza.jpeg' },
        { name: 'Luciana Castro', role: 'Diseño', initials: 'LC', photo: 'equipo/Luciana Castro Camavilca foto en blanco.png' },
        { name: 'Ana Patricia Minaya', role: 'Diseño', initials: 'AP', photo: 'equipo/Ana Minaya De La Peña.jpg' },
        { name: 'Camil Lucía Espinoza', role: 'Recursos e Información', initials: 'CE', photo: 'equipo/CAMIL ESPINOZA-RAMOS.jpeg' },
      ]
    },
    {
      id: 'BO', label: 'Bolivia', flag: '🇧🇴',
      color: '#84CC16', colorHover: '#A3E635',
      members: [
        { name: 'Andrea Ferrufino', role: 'Política y Regulación', initials: 'AF', photo: 'equipo/Andrea Ferrufino.jpg' },
        { name: 'Wilka Fidel Vargas', role: 'Política y Regulación', initials: 'WV', photo: 'equipo/Willka Fidel Vargas Peña.png' },
        { name: 'Estefanía Mansilla', role: 'Expansión', initials: 'EM' },
        { name: 'Pilar Montealegre', role: 'Expansión', initials: 'PM', photo: 'equipo/Pilar Montealegre Vargas.jpg' },
        { name: 'Rodrigo Aguirre', role: 'Expansión', initials: 'RA', photo: 'equipo/Rodrigo Aguirre.jpg' },
        { name: 'Jeancore Padilla', role: 'Recursos e Información', initials: 'JP', photo: 'equipo/Jeancarla Padilla.png' },
        { name: 'Ian Sebastian Terán', role: 'Recursos e Información', initials: 'IT', photo: 'equipo/Ian Sebastian Teran.jpg' },
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
        { name: 'Rocío Coronel', role: 'Capacitación', initials: 'RC', photo: 'equipo/Rocio Coronel.jpg' },
      ]
    },
    {
      id: 'CL', label: 'Chile', flag: '🇨🇱',
      color: '#A855F7', colorHover: '#C084FC',
      members: [
        { name: 'Anaís Caviedes', role: 'Gestión de Proyectos', initials: 'AC', photo: 'equipo/Anaís Caviedes.jpeg' },
        { name: 'Bastian Márquez', role: 'Capacitación (Head)', initials: 'BM', photo: 'equipo/Bastián Márquez González.jpeg' },
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
        { name: 'Marcos Nahuel Ríos', role: 'Gestión de Proyectos', initials: 'MR' },
        { name: 'Estefanía Mansilla', role: 'Expansión', initials: 'EM' },
        { name: 'María Cecilia Merino', role: 'Expansión', initials: 'MM', photo: 'equipo/María Cecilia Merino.jpeg' },
        { name: 'Jessica Martin', role: 'Capacitación', initials: 'JM' },
        { name: 'Caren Nicole Moreno', role: 'Gestión de Actividades', initials: 'CN', photo: 'equipo/Caren Moreno.jpg' },
        { name: 'Denis Buffa', role: 'Gestión de Actividades', initials: 'DB', photo: 'equipo/Denis Buffa.jpeg' },
        { name: 'Debora Parodi', role: 'Diseño', initials: 'DP', photo: 'equipo/Debora Parodi.jpg' },
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
