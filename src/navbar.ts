import Alpine from 'https://cdn.skypack.dev/alpinejs';

interface NavbarItem {
  name: string;
  url: string;
  icon: string;
}

const items: NavbarItem[] = [
  {
    name: 'Home',
    url: './',
    icon: 'home',
  },
  {
    name: 'Skills',
    url: './skills',
    icon: 'target',
  },
  {
    name: 'Experience',
    url: './experience',
    icon: 'briefcase',
  },
];

export const setup = () => {
  Alpine.data('navbar', () => ({
    items,
  }));
};
