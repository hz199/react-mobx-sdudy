import * as React from 'react';
import LinkedList from './linkedList'

export interface LinkedListProps {
  
}

const ARR = [5, 3, 10, 4]
 
const LinkedListPage: React.SFC<LinkedListProps> = () => {
  const initList = () => {
    const listed = new LinkedList()

    for (let i = 0; i<ARR.length;i++) {
      const item = LinkedList.createNode(ARR[i])
      listed.insert(item)
    }

    console.log(listed.reverseList(listed.head))
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