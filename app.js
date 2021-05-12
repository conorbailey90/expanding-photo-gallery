const grid = document.querySelector('.grid');
const gridItems = [...document.querySelectorAll('.grid-item')];
const gridRows = [...document.querySelectorAll('.row')];
const images = [...document.querySelectorAll('.img')];

images.forEach((img, idx) => {
    img.style.backgroundImage = `url(./images/${idx + 1}.jpeg)`
})

gridItems.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        let isActive = e.target.classList.contains('active')
        console.log(e.target)
        for(let i = 0; i < gridItems.length; i++){
            gridItems[i].classList.remove('active');
        }
       
        if(isActive){
            gridRows[0].style.height = '50%';
            gridRows[1].style.height = '50%';
            for(let i = 0; i < gridItems.length; i++){
                gridItems[i].classList.remove('expand');
            }
            return;
        }

        gridItems[idx].classList.add('active');

        if(idx == 0 || idx == 3){
            setActive([0, 3]);
        }

        if(idx == 1 || idx == 4){
            setActive([1, 4]);
        }

        if(idx == 2 || idx == 5){
            setActive([2, 5]);
        }

        if(idx <=2){
            gridRows[0].style.height = '70%'
            gridRows[1].style.height = '30%'
        }else{
            gridRows[0].style.height = '30%'
            gridRows[1].style.height = '70%'
        }
    })
})

function setActive(idxArr){
    for(let i = 0; i < gridItems.length; i++){
        if(idxArr.includes(i)){
            gridItems[i].classList.add('expand');
        }else{
            gridItems[i].classList.remove('expand');
        }
    }
}