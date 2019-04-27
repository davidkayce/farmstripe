
// import axios from 'axios'
export default {
  state: {
    farms: [
      {
        name: 'Maize',
        id: 'MZ01-KDN',
        description: 'This is a wonderful maize farm located in the city of Kaduna in Northern Nigeria. Maize has proven to be a major cash crop in Nigeria and occupies a major position among the food consumed in the country',
        units: 0,
        time: '6months',
        cost: 50000,
        available: false,
        rate: 30
      },
      {
        name: 'Maize',
        id: 'MZ02-KDN',
        description: 'This is a wonderful maize farm located in the city of Kaduna in Northern Nigeria. Maize has proven to be a major cash crop in Nigeria and occupies a major position among the food consumed in the country',
        units: 0,
        time: '6months',
        cost: 50000,
        available: false,
        rate: 30
      },
      {
        name: 'Soybeans',
        id: 'SB01-KDN',
        description: 'Soybeans is a mojor source of protein and can be grown in major areas in the country. It is also a major cash crop and is highly consumed by the Nigerian populace',
        units: 20,
        time: '6months',
        cost: 50000,
        available: false,
        rate: 30
      }
    ],
    backers: 201
  },

  getters: {
    allFarms: state => state.farms,
    allBackers: state => state.backers
  },
  actions: {
    changeBackers (commit) {
      console.log('reached here!')
      this.commit('changeBackers')
    }
  },
  mutations: {
    changeBackers: (state) => (state.backers = state.backers + 1)
  }
}
