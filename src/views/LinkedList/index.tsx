import * as React from 'react';
import LinkedList from './linkedList'

export interface LinkedListProps {
  
}

// const ARR = [5, 3, 10, 4, 6, 9, 17, 20, 15, 19,16, 2, 1]
 
const LinkedListPage: React.SFC<LinkedListProps> = () => {
  const initList = () => {
    const listed = new LinkedList()

    // for (let i = 0; i<ARR.length;i++) {
    //   const item = LinkedList.createNode(ARR[i])
    //   listed.insert(item)
    // }

    // listed.delete()
    const item1 = LinkedList.createNode(5)
    listed.insert(item1)
    const item2 = LinkedList.createNode(3)
    listed.insert(item2)
    const item3 = LinkedList.createNode(10)
    listed.insert(item3)

    // listed.delete(item2)
    console.log(listed.find(3))

    console.log(listed)
  }

  React.useEffect(() => {
    initList()
  }, [])

  return (
    <div>
      LinkedList
    </div>
  );
}
 
export default LinkedListPage;