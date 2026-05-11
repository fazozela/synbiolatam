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
        { name: 'Andrea Sánchez', role: 'Co-Fundadora', initials: 'AR', photo: 'equipo/Andrea.png' },
        { name: 'Anahí Nájera', role: 'Head Comunicación', initials: 'AN', photo: 'equipo/Anahi Najera.jpg' },
        { name: 'Alejandra Cázares', role: 'Head Recursos', initials: 'AC', photo: 'equipo/Alejandra Cazares.png' },
        { name: 'José Manuel Hernández Limón', role: 'Política y Regulación', initials: 'JL', photo: 'equipo/José Manuel Hernández Limón.png' },
        { name: 'Valentina Ramírez', role: 'Miembro', initials: 'VR', photo: 'equipo/Valentina Ramírez.png' },
        { name: 'Benjamín Mendoza', role: 'Miembro', initials: 'BM' },
        { name: 'María Guadalupe Juárez Hernández', role: 'Miembro', initials: 'GJ', photo: 'equipo/María Guadalupe Juárez Hernández.jpg' },
        { name: 'Mariana Valdez', role: 'Miembro', initials: 'MV', photo: 'equipo/Mariana Valdez Yañez.JPG' },
      ]
    },
    {
      id: 'GT', label: 'Guatemala', flag: '🇬🇹',
      color: '#8B5CF6', colorHover: '#A78BFA',
      members: [
        { name: 'Kimberly Aragón', role: 'Miembro', initials: 'KA', photo: 'equipo/Kimberly Aragón.png' },
        { name: 'Katherine Girón', role: 'Recursos e Información', initials: 'KG' },
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
        { name: 'Alessia Vásquez', role: 'Head de Diseño', initials: 'AV', photo: 'equipo/Alessia Vasquez.jpg' },
        { name: 'Carlos Andrés Moya', role: 'Miembro', initials: 'CM', photo: 'equipo/Carlos Moya.png' },
        { name: 'Gloriana Corrales Masís', role: 'Gestión de Actividades', initials: 'GC', photo: 'equipo/Gloriana Corrales Masís.jpg' },
        { name: 'Mariana Cerdas Pérez', role: 'Miembro', initials: 'MC', photo: 'equipo/Mariana Cerdas Pérez.png' },
        { name: 'Charlize Badilla', role: 'Miembro', initials: 'CB', photo: 'equipo/Charlize Badilla Soto.png' },
      ]
    },
    {
      id: 'PA', label: 'Panamá', flag: '🇵🇦',
      color: '#06B6D4', colorHover: '#22D3EE',
      members: [
        { name: 'Asley Caballero', role: 'Miembro', initials: 'AC', photo: 'equipo/Asley Caballero.jpeg' },
        { name: 'Johan Kalil Guerra', role: 'Miembro', initials: 'JG', photo: 'equipo/Johan Guerra.png' },
      ]
    },
    {
      id: 'CO', label: 'Colombia', flag: '🇨🇴',
      color: '#F97316', colorHover: '#FB923C',
      members: [
        { name: 'Luis Camilo Díaz-Duarte', role: 'Miembro', initials: 'LD', photo: 'equipo/Luis Camilo Díaz-Duarte.png' },
        { name: 'Sebastián Toro', role: 'Miembro', initials: 'ST', photo: 'equipo/Sebastián Toro.jpg' },
        { name: 'Juan Anaya', role: 'Miembro', initials: 'JA', photo: 'equipo/Juan Anaya.jpg' },
        { name: 'Juan David León', role: 'Miembro', initials: 'JL' },
        { name: 'Bastián Márquez', role: 'Miembro', initials: 'BM', photo: 'equipo/Bastián Márquez González.jpeg' },
        { name: 'Adriana Marcela Martínez Botello', role: 'Miembro', initials: 'AM', photo: 'equipo/Adriana Marcela Martinez Botello.jpeg' },
      ]
    },
    {
      id: 'VE', label: 'Venezuela', flag: '🇻🇪',
      color: '#EF4444', colorHover: '#F87171',
      members: [
        { name: 'Javier David Uzcátegui', role: 'Miembro', initials: 'JU', photo: 'equipo/Javier David-Uzcategui.jpg' },
      ]
    },
    {
      id: 'EC', label: 'Ecuador', flag: '🇪🇨',
      color: '#3B82F6', colorHover: '#60A5FA',
      members: [
        { name: 'Leonel Intriago', role: 'Miembro', initials: 'LI', photo: 'equipo/Intriago Leonel.png' },
        { name: 'Camila Naranjo', role: 'Miembro', initials: 'CN', photo: 'equipo/Camila Naranjo.jpg' },
        { name: 'María Belén Terán', role: 'Gestión de Proyectos', initials: 'MB', photo: 'equipo/María Belén Terán.png' },
        { name: 'Paula Camila González', role: 'Miembro', initials: 'PG' },
        { name: 'Mishell Criollo', role: 'Miembro', initials: 'MC', photo: 'equipo/Mishell Criollo.png' },
        { name: 'Wladimir Tandapilco', role: 'Miembro', initials: 'WT', photo: 'equipo/Wladimir Tandapilco.jpg' },
        { name: 'Andrea Guallasamin', role: 'Miembro', initials: 'AG', photo: 'equipo/Andrea Guallasamin.jpg' },
        { name: 'Xavier García', role: 'Miembro', initials: 'XG' },
        { name: 'Katherine Silva', role: 'Miembro', initials: 'KS' },
        { name: 'Catalina Serrano', role: 'Miembro', initials: 'CS', photo: 'equipo/Catalina Serrano Foto.png' },
        { name: 'Ashley Alban', role: 'Miembro', initials: 'AA' },
        { name: 'Belén Endara', role: 'Audiovisual', initials: 'BE', photo: 'equipo/Belén Endara.png' },
        { name: 'Aaron Maldonado', role: 'Miembro', initials: 'AM', photo: 'equipo/Aaron Maldonado.JPG' },
        { name: 'Christian Andrade', role: 'Miembro', initials: 'CA', photo: 'equipo/Christian Andrade.jpeg' },
        { name: 'Krister Figueroa', role: 'Miembro', initials: 'KF', photo: 'equipo/Krister Figueroa.png' },
        { name: 'Nelson Mesías', role: 'Miembro', initials: 'NM', photo: 'equipo/Nelson Mesías.jpg' },
        { name: 'Josué Álvarez', role: 'Miembro', initials: 'JA', photo: 'equipo/Josue Alvarez.jpeg' },
        { name: 'Angie Pozo Cedeño', role: 'Miembro', initials: 'AP', photo: 'equipo/Angie Pozo Cedeño.jpg' },
        { name: 'Jorge Luis Barrios', role: 'Miembro', initials: 'JB', photo: 'equipo/Jorge Luis Barrios.png' },
      ]
    },
    {
      id: 'PE', label: 'Perú', flag: '🇵🇪',
      color: '#10B981', colorHover: '#34D399',
      members: [
        { name: 'Nohely Cáceres', role: 'Financiamiento', initials: 'NC', photo: 'equipo/Nohely Cáceres.jpg' },
        { name: 'Marko Aurelio Zapata', role: 'Miembro', initials: 'MZ' },
        { name: 'Fabrizio Flores', role: 'Expansión', initials: 'FF', photo: 'equipo/Fabrizio Flores.png' },
        { name: 'Luciana Castro', role: 'Diseño', initials: 'LC', photo: 'equipo/Luciana Castro Camavilca foto en blanco.png' },
        { name: 'Ana Patricia Minaya De La Peña', role: 'Miembro', initials: 'AP', photo: 'equipo/Ana Minaya De La Peña.jpg' },
        { name: 'Camil Espinoza', role: 'Miembro', initials: 'CE', photo: 'equipo/CAMIL ESPINOZA-RAMOS.jpeg' },
        { name: 'Pedro Raul Mendoza', role: 'Miembro', initials: 'PM' },
      ]
    },
    {
      id: 'BO', label: 'Bolivia', flag: '🇧🇴',
      color: '#84CC16', colorHover: '#A3E635',
      members: [
        { name: 'Wilka Fidel Vargas Peña', role: 'Miembro', initials: 'WV', photo: 'equipo/Willka Fidel Vargas Peña.png' },
        { name: 'Rodrigo Aguirre', role: 'Miembro', initials: 'RA', photo: 'equipo/Rodrigo Aguirre.jpg' },
        { name: 'Pilar Montealegre Vargas', role: 'Miembro', initials: 'PM', photo: 'equipo/Pilar Montealegre Vargas.jpg' },
        { name: 'Andrea Ferrufino', role: 'Miembro', initials: 'AF' },
        { name: 'Estefanía Mansilla', role: 'Miembro', initials: 'EM' },
        { name: 'Ian Sebastián Terán', role: 'Miembro', initials: 'IT', photo: 'equipo/Ian Sebastian Teran.jpg' },
        { name: 'Jeancarla Padilla', role: 'Miembro', initials: 'JP', photo: 'equipo/Jeancarla Padilla.png' },
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
        { name: 'Rocío Coronel', role: 'Miembro', initials: 'RC', photo: 'equipo/Rocio Coronel.jpg' },
      ]
    },
    {
      id: 'CL', label: 'Chile', flag: '🇨🇱',
      color: '#A855F7', colorHover: '#C084FC',
      members: [
        { name: 'Anaís Caviedes', role: 'Miembro', initials: 'AC', photo: 'equipo/Anaís Caviedes.jpeg' },
        { name: 'Bastián Márquez', role: 'Miembro', initials: 'BM', photo: 'equipo/Bastián Márquez González.jpeg' },
        { name: 'María Cecilia Merino', role: 'Miembro', initials: 'MM' },
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
        { name: 'Mariela Escobar', role: 'Miembro', initials: 'ME', photo: 'equipo/Mariela Escobar.png' },
        { name: 'Marcos Nahuel Rios', role: 'Miembro', initials: 'MR' },
        { name: 'María Cecilia Merino', role: 'Miembro', initials: 'MM' },
        { name: 'Jessica Martin', role: 'Capacitación', initials: 'JM' },
        { name: 'Caren Nicole Moreno', role: 'Miembro', initials: 'CN', photo: 'equipo/Caren Moreno.jpg' },
        { name: 'Denis Buffa', role: 'Miembro', initials: 'DB' },
        { name: 'Uriel Miralles', role: 'Miembro', initials: 'UM', photo: 'equipo/Uriel Miralles.JPG' },
        { name: 'Debora Parodi', role: 'Miembro', initials: 'DP' },
        { name: 'Tomás Blanzaco', role: 'Miembro', initials: 'TB', photo: 'equipo/Blanzaco Tomas.png' },
        { name: 'Matias Tosini', role: 'Miembro', initials: 'MT', photo: 'equipo/Matias Tosini.png' },
      ]
    },
    {
      id: 'DO', label: 'Rep. Dominicana', flag: '🇩🇴',
      color: '#6366F1', colorHover: '#818CF8',
      members: [
        { name: 'Alejandro Vallejo', role: 'Miembro', initials: 'AV' },
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
