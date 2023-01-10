document.querySelector(".theme-toggle").addEventListener('click',()=>{
    let root = document.documentElement;//select all elements
    let newTheme = root.className==='dark'?'light':'dark';//check what is the current class name in root>>>>>>>>>root.className
    root.className=newTheme;
    document.querySelector('.theme-name').textContent=newTheme;
})