import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("XanBZE");
const sortChars = new Sorter(charactersCollection);
sortChars.sort();
console.log(charactersCollection.data);


const linkList = new LinkList();
linkList.add(500);
linkList.add(-10);
linkList.add(-3);
linkList.add(4);

const lSorter = new Sorter(linkList);
lSorter.sort();
linkList.print();