import * as React from 'react';
import Binary from './binary';

export interface BrinaryProps {
  
}

const ARR = [5, 3, 10, 4, 6, 9, 17, 20, 15, 19,16, 2, 1]
 
const Brinary: React.SFC<BrinaryProps> = () => {
  const binaryTree = new Binary(ARR)

  const callback = (key: number) => {
    console.log(key, 111)
  }

  React.useEffect(() => {
    console.log(binaryTree)
    binaryTree.inOrderTraverse(callback)
  }, [binaryTree])

  return (
    <div>
      ccc
    </div>
  );
}
 
export default Brinary;