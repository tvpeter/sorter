import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("XanBZE");
charactersCollection.sort();
console.log(charactersCollection.data);


const linkList = new LinkList();
linkList.add(500);
linkList.add(-10);
linkList.add(-3);
linkList.add(4);
linkList.sort();
linkList.print();