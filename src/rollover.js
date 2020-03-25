const items = document.getElementsByClassName('img-btn');
const sliders = document.getElementsByClassName('slider');


console.log(typeof items)
const overHandler = (e) => {
  console.log(e);
  console.log(e.target)
  console.log(e.currentTarget)

   const d = e.target.nextSibling.nextSibling;
    if(d){
      d.classList.add('close');
    }
}

const outHandler = (e) =>{
  console.log(e.target)
  const d = e.target;
    if(d){

     d.classList.remove('close');
    }
}


Array.from(items).forEach((item)=> {
  item.addEventListener('mouseover', overHandler, true);
});

Array.from(sliders).forEach((slider)=> {
  slider.addEventListener('mouseleave', outHandler, false);
});

