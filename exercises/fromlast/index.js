// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let firstPointer = list.getFirst();
  let secondPointer = list.getAt(n);

  // If getAt method can't be used then here is a workaround.
  // let secondPointer = list.getFirst();
  // while(n > 0) {
  //   secondPointer = secondPointer.next;
  //   n--;
  // }

  while (secondPointer.next) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  return firstPointer;
}

module.exports = fromLast;
