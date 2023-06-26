document.getElementById("btn-move").addEventListener('click',moveImages);
function moveImages() {
    let temp; /* variable auxiliar*/
    let imageLeft=document.getElementById("Image-left").src;
    let imageRight=document.getElementById("Image-Right").src;

    temp=imageLeft;
    document.getElementById("Image-left").src=imageRight;
    document.getElementById("Image-Right").src=temp;
}