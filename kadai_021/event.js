const headings = document.getElementById('btn');

headings.addEventListener('click',()=>{
  setTimeout(() => {
    document.getElementById('text').innerHTML = 'ボタンをクリックしました';
  }, 2000);
});