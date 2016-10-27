//function* getNextChunk() {
  //yield 'Bret\nAntonette\nSamantha\nKarianne\nKamren\nLeopoldo_Corkery\nElwyn.Skiles\nMaxime_Nienow\nDelphine\nMoriah.Stanton\n'
//}

//function* getNextUsername(getNextChunk) {
  //for (let chunk of getNextChunk()) {
    //let lines = chunk.split('\n')

    //for (let l of lines) if (l !== '') yield l
  //}
//}

//let filterIfStartsWithAEOrM = username => {
  //let firstChar = username[0]

  //return 'A' === firstChar || 'E' === firstChar || 'M' === firstChar
//}

//let makeRequest = url => fetch(url).then(response => response.json())

//function* filter(p, a) {
  //for (let x of a)
    //if (p(x)) yield x
//}

//function* map(f, a) {
  //for (let x of a) yield f(x)
//}

//function* zipWith(f, a, b) {
  //let aIterator = a[Symbol.iterator]()
  //let bIterator = b[Symbol.iterator]()
  //let aObj, bObj

  //while (true) {
    //aObj = aIterator.next()
    //if (aObj.done) break
    //bObj = bIterator.next()
    //if (bObj.done) break
    //yield f(aObj.value, bObj.value)
  //}
//}

//function execute(iterator) {
  //for (x of iterator) ;; // drain the iterator
//}

//let makeUrl = username => 'http://jsonplaceholder.typicode.com/users?username=' + username
////let filteredUsernames        = filter(filterIfStartsWithAEOrM, getNextUsername(getNextChunk))
////let urls                     = map(makeUrl, filteredUsernames)

////function itr(item) {
  ////return item;
////}

//let itr = item => item
//const a = [1, 2, 3];


//let b = map(itr, a)
//console.log(b.next())
//
const map = function* (a, itr) {
   for (let v of a) yield itr(v)
};

const filter = function* (a, con) {
  for (let v of a) {
    if (con(v)) yield v;
  }
};

const a = [1, 2, 3];

const itr = item => item;
const con = item => item > 1;

var b = map(a, itr);

var c = filter(a, con);

console.log(b.next());

console.log(c.next());
console.log(c.next());
