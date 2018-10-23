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

// 注册元素列表
export const registerMap = {
  Text,
}
