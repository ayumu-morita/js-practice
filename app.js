// let hensu = 'Hello World';

// //hensu = 'HEllo world2'

// const bigUnko = 'hello world good';

let inoki = ['イーチ','ニー','さーん','だー']

// let index = 0
// while(index < inoki.length){
//   console.log(inoki[index])
//   index++;
// }



const test = (arg)=> {
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバt！');
  }
};

const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('hello');
  }
};

window.alert('Hello');

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  window.alert('hello ayumu')
})