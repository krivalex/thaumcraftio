const all_aspects = {
  ignis: {
    name: 'Ignis',
    image: '@/assets/images/aspects/Ignis.webp',
    description: 'The aspect of fire, heat, and light.',
    type: 'primary',
    craft: null,
  },
  aer: {
    name: 'Aer',
    image: '@/assets/images/aspects/Aer.webp',
    description: 'The aspect of air, wind, and sky.',
    type: 'primary',
    craft: null,
  },
  lux: {
    name: 'Lux',
    image: '@/assets/images/aspects/Lux.png',
    description: 'The aspect of light, vision, and perception.',
    type: 'craft',
    craft: {
      aspects: ['ignis', 'aer'],
    },
  },
}

export default all_aspects
