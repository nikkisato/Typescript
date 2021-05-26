let a = '1';

let hello: string = 'world';

const getFullName = (name: string, surname: string) => {
  return name + ' ' + surname;
};
console.log(getFullName('Nikki', 'Sato'));

const user: { name: string; age: number } = {
  name: 'Monster',
  age: 23,
};

interface UserInterface {
  name: string;
  age: number;
  getMessage(): string;
}

const user2: UserInterface = {
  name: 'Jack',
  age: 21,
  getMessage() {
    return 'Hello' + user2.name;
  },
};
console.log(user2.getMessage());

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
interface UsernameInterface {
  name: string;
  surname: string;
  id: ID;
}
let username: string = 'alex';

let pageNumber: string | number = '1';

let errorMessage: string | null = null;

let users: UsernameInterface | null = null;

let someProp: string | number | null | undefined | string[] | object;

const popularTags: PopularTag[] = ['dragon', 'coffee'];

const dragonsTag: MaybePopularTag = 'dragon';

const doSomething = (): void => {
  console.log('doSomething');
};

let foo: any = 'foo';
console.log(foo);

let page: any = '1';
let pageNumber2 = page as string;

//DOM
const someElement = document.querySelector('.foo') as HTMLInputElement;
console.log('someElement', someElement.value);

someElement.addEventListener('blur', event => {
  const target = event.target as HTMLInputElement;
  console.log('event', target.value);
});

//Classes
class User2 {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName2(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
const user3 = new User2('Nikki', 'Sato');
console.log(user3);
