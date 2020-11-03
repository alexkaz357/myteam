export const service = {
  query,
  validateEmail
}

function query() {
  return directors;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const directors = [{
    _id: _makeId(),
    img: require('../assets/img/avatar-nikita.jpg'),
    name: 'Nikita Marks',
    position: 'Founder & CEO',
    about: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”'
  },
  {
    _id: _makeId(),
    img: require('../assets/img/avatar-christian.jpg'),
    name: 'Cristian Duncan',
    position: 'Co-founder & COO',
    about: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”'
  },
  {
    _id: _makeId(),
    img: require('../assets/img/avatar-cruz.jpg'),
    name: 'Cruz Hamer',
    position: 'Co-founder & CTO',
    about: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”'
  },
  {
    _id: _makeId(),
    img: require('../assets/img/avatar-drake.jpg'),
    name: 'Drake Heaton',
    position: 'Business Development Lead',
    about: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”'
  },
  {
    _id: _makeId(),
    img: require('../assets/img/avatar-griffin.jpg'),
    name: 'Griffin Wise',
    position: 'Lead Marketing',
    about: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”'
  },
  {
    _id: _makeId(),
    img: require('../assets/img/avatar-aden.jpg'),
    name: 'Aden Allan',
    position: 'Lead Design',
    about: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”'
  },
]

function _makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}