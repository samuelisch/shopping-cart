import { v4 as uuidv4 } from 'uuid'

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))

const Instruments = [
  {
    id: uuidv4(),
    imgSrc: images['bcxxi-grenadilla.png'],
    name: 'BCXXI Grenadilla',
    price: 10799.00
  },
  {
    id: uuidv4(),
    imgSrc: images['r13-mopane.png'],
    name: 'R13 Mopane',
    price: 4399.00
  },
  {
    id: uuidv4(),
    imgSrc: images['tosca-mopane.png'],
    name: 'Tosca Mopane',
    price: 8259.00
  },
  {
    id: uuidv4(),
    imgSrc: images['legende-mopane.png'],
    name: 'Legende Mopane',
    price: 9759.00
  },
  {
    id: uuidv4(),
    imgSrc: images['legende-boxwood.png'],
    name: 'Legende Boxwood',
    price: 13959.00
  },
  {
    id: uuidv4(),
    imgSrc: images['divine-grenadilla.png'],
    name: 'Divine Grenadilla',
    price: 8959.00
  },
  {
    id: uuidv4(),
    imgSrc: images['festival-grenadilla.png'],
    name: 'Festival Grenadilla',
    price: 4559.00
  },
  {
    id: uuidv4(),
    imgSrc: images['tosca-grenadilla.png'],
    name: 'Tosca Grenadilla',
    price: 7959.00
  },
  {
    id: uuidv4(),
    imgSrc: images['r13-grenadilla.png'],
    name: 'R13 Grenadilla',
    price: 3459.00
  },
  {
    id: uuidv4(),
    imgSrc: images['rc-grenadilla.png'],
    name: 'RC Grenadilla',
    price: 3459.00
  },
];

export default Instruments