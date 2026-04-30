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
  color: string;       // base fill
  colorHover: string;  // fill on hover
}

const MUTED      = '#1a4a40';
const MUTED_HOV  = '#236b5a';

@Component({
  selector: 'app-latam-map',
  imports: [NgStyle],
  templateUrl: './latam-map.html',
})
export class LatamMap {
  hoveredCountry = signal<string | null>(null);
  tooltipX = signal(0);
  tooltipY = signal(0);

  countries: CountryData[] = [
    {
      id: 'MX', label: 'México', flag: '🇲🇽',
      color: '#F59E0B', colorHover: '#FCD34D',
      members: [
        { name: 'Andrea Ramos', role: 'Fundadora', initials: 'AR', photo: 'equipo/Andrea.png' },
        { name: 'José Manuel Limón', role: 'Política y Regulación', initials: 'JL', photo: 'equipo/José Manuel Hernández Limón.png' },
        { name: 'María Guadalupe Juárez', role: 'Miembro', initials: 'GJ' },
        { name: 'Mariana Valdez', role: 'Miembro', initials: 'MV' },
      ]
    },
    {
      id: 'GT', label: 'Guatemala', flag: '🇬🇹',
      color: '#8B5CF6', colorHover: '#A78BFA',
      members: [
        { name: 'Kimberly Aragón', role: 'Miembro', initials: 'KA' },
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
        { name: 'Carlos Andrés Moya', role: 'Miembro', initials: 'CM' },
        { name: 'Gloriana Corrales', role: 'Gestión de Actividades', initials: 'GC' },
        { name: 'Charlize Badilla', role: 'Miembro', initials: 'CB', photo: 'equipo/Charlize Badilla Soto.png' },
      ]
    },
    {
      id: 'PA', label: 'Panamá', flag: '🇵🇦',
      color: '#06B6D4', colorHover: '#22D3EE',
      members: [
        { name: 'Asley Caballero', role: 'Miembro', initials: 'AC', photo: 'equipo/Asley Caballero.jpeg' },
        { name: 'Johan Kalil Guerra', role: 'Miembro', initials: 'JG' },
      ]
    },
    {
      id: 'CO', label: 'Colombia', flag: '🇨🇴',
      color: '#F97316', colorHover: '#FB923C',
      members: [
        { name: 'Luis Camilo Díaz-Duarte', role: 'Miembro', initials: 'LD', photo: 'equipo/Luis Camilo Díaz-Duarte.png' },
        { name: 'Sebastián Toro', role: 'Miembro', initials: 'ST', photo: 'equipo/Sebastián Toro.jpg' },
        { name: 'Juan David León', role: 'Miembro', initials: 'JL' },
        { name: 'Adriana Marcela Martínez', role: 'Miembro', initials: 'AM', photo: 'equipo/Adriana Marcela Martinez Botello.jpeg' },
      ]
    },
    {
      id: 'VE', label: 'Venezuela', flag: '🇻🇪',
      color: '#EF4444', colorHover: '#F87171',
      members: [
        { name: 'Javier David Uzcátegui', role: 'Miembro', initials: 'JU' },
      ]
    },
    {
      id: 'EC', label: 'Ecuador', flag: '🇪🇨',
      color: '#3B82F6', colorHover: '#60A5FA',
      members: [
        { name: 'María Belén Terán', role: 'Gestión de Proyectos', initials: 'MT' },
        { name: 'Paula Camila Gonzalez', role: 'Miembro', initials: 'PG' },
        { name: 'Andrea Guallasamin', role: 'Miembro', initials: 'AG' },
        { name: 'Katherine Silva', role: 'Miembro', initials: 'KS' },
        { name: 'Catalina Serrano', role: 'Miembro', initials: 'CS', photo: 'equipo/Catalina Serrano Foto.png' },
        { name: 'Ashley Alban', role: 'Miembro', initials: 'AA' },
        { name: 'Belén Endara', role: 'Audiovisual', initials: 'BE' },
        { name: 'Aaron Maldonado', role: 'Miembro', initials: 'AM', photo: 'equipo/Aaron Maldonado.JPG' },
        { name: 'Christian Andrade', role: 'Miembro', initials: 'CA' },
      ]
    },
    {
      id: 'PE', label: 'Perú', flag: '🇵🇪',
      color: '#10B981', colorHover: '#34D399',
      members: [
        { name: 'Nohely Cáceres', role: 'Financiamiento', initials: 'NC', photo: 'equipo/Nohely Cáceres.jpg' },
        { name: 'Fabrizio Flores', role: 'Expansión', initials: 'FF', photo: 'equipo/Fabrizio Flores.png' },
        { name: 'Luciana Castro', role: 'Diseño', initials: 'LC', photo: 'equipo/Luciana Castro Camavilca foto en blanco.png' },
        { name: 'Ana Patricia Minaya', role: 'Miembro', initials: 'AM', photo: 'equipo/Ana Minaya De La Peña.jpg' },
        { name: 'Camil Espinoza', role: 'Miembro', initials: 'CE', photo: 'equipo/CAMIL ESPINOZA-RAMOS.jpeg' },
        { name: 'Marko Aurelio Zapata', role: 'Miembro', initials: 'MZ' },
        { name: 'Pedro Raul Mendoza', role: 'Miembro', initials: 'PM' },
      ]
    },
    {
      id: 'BO', label: 'Bolivia', flag: '🇧🇴',
      color: '#84CC16', colorHover: '#A3E635',
      members: [
        { name: 'Wilka Fidel Vargas', role: 'Miembro', initials: 'WV', photo: 'equipo/Willka Fidel Vargas Peña.png' },
        { name: 'Andrea Ferrufino', role: 'Miembro', initials: 'AF' },
        { name: 'Estefania Mansilla', role: 'Miembro', initials: 'EM' },
        { name: 'Ian Sebastian Terán', role: 'Miembro', initials: 'IT' },
        { name: 'Jeancarla Padilla', role: 'Miembro', initials: 'JP' },
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
        { name: 'Marcos Nahuel Rios', role: 'Miembro', initials: 'MR' },
        { name: 'Mariela Escobar', role: 'Miembro', initials: 'ME', photo: 'equipo/Mariela Escobar.png' },
        { name: 'Jessica Martin', role: 'Capacitación', initials: 'JM' },
        { name: 'Caren Nicole Moreno', role: 'Miembro', initials: 'CN' },
        { name: 'Denis Buffa', role: 'Miembro', initials: 'DB' },
        { name: 'Debora Parodi', role: 'Miembro', initials: 'DP' },
        { name: 'Tomas Blanzaco', role: 'Miembro', initials: 'TB', photo: 'equipo/Blanzaco Tomas.png' },
        { name: 'Matias Tosini', role: 'Miembro', initials: 'MT', photo: 'equipo/Matias Tosini.png' },
      ]
    },
  ];

  getCountry(id: string): CountryData | undefined {
    return this.countries.find(c => c.id === id);
  }

  getFill(id: string): string {
    const c = this.getCountry(id);
    if (!c) return '#1a4a40';
    return this.hoveredCountry() === id ? c.colorHover : c.color;
  }

  onCountryHover(event: MouseEvent, countryId: string) {
    this.hoveredCountry.set(countryId);
    this.updateTooltipPos(event);
  }

  onCountryLeave() {
    this.hoveredCountry.set(null);
  }

  onMouseMove(event: MouseEvent, countryId: string) {
    if (this.hoveredCountry() === countryId) {
      this.updateTooltipPos(event);
    }
  }

  private updateTooltipPos(event: MouseEvent) {
    const rect = (event.currentTarget as SVGElement).closest('.map-wrapper')?.getBoundingClientRect();
    if (rect) {
      this.tooltipX.set(event.clientX - rect.left + 12);
      this.tooltipY.set(event.clientY - rect.top - 10);
    }
  }

  get activeCountry(): CountryData | undefined {
    const id = this.hoveredCountry();
    return id ? this.getCountry(id) : undefined;
  }
}
