import Text from './Text'

interface ElementList {
  label: string;
  list: Array<any>;
}

let elements: Array<ElementList> = [
  {
    label: '元素',
    list: [
      Text,
    ]
  }
]

export default elements
