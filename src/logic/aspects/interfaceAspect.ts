interface Aspect {
  name: string
  image: string
  description: string
  type: string
  craft: null | object
}

const all_aspects: { [key: string]: Aspect } = {
  ignis: {
    name: 'Ignis',
    image: require('@/assets/images/aspects/Ignis.webp'),
    description: 'The aspect of fire, heat, and light.',
    type: 'primary',
    craft: null,
  },
  aer: {
    name: 'Aer',
    image: require('@/assets/images/aspects/Aer.webp'),
    description: 'The aspect of air, wind, and sky.',
    type: 'primary',
    craft: null,
  },
  lux: {
    name: 'Lux',
    image: require('@/assets/images/aspects/Lux.png'),
    description: 'The aspect of light, vision, and perception.',
    type: 'craft',
    craft: {
      aspects: ['ignis', 'aer'],
    },
  },
}

export default all_aspects
