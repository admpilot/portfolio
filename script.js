function makeSmallMenu(event){
    if (window.scrollY>(parseInt(getComputedStyle(document.documentElement).fontSize)*15))
    {
        pageRem = parseInt(getComputedStyle(document.documentElement).fontSize);
        //do stuff here to shrink the header
        let docHeader = document.getElementsByTagName('header')[0];
        let docBannerSpan = document.getElementsByClassName('banner_span');
        let docMain = document.querySelector('main');
        document.getElementById('large_menu').style.width = '10%';
        document.getElementById('large_menu_ul').style.display='none';
        document.getElementById('small_menu_img').style.display='block';
        
        docHeader.style.top="0px";
        docHeader.style.height="4rem";
        docHeader.style.position="fixed";
        docMain.style.paddingTop="18rem";
        docHeader.style.boxShadow='0px 0px 10px 1px';
        for (let i = 0; i < docBannerSpan.length; i++)
        {
            docBannerSpan[i].style.fontSize='2rem';
            docBannerSpan[i].style.position='initial';
        }
        document.removeEventListener('scroll', makeSmallMenu);
        document.addEventListener('scroll', makeBigMenu);
    }
}

function makeBigMenu(event){
    if (window.scrollY<=(parseInt(getComputedStyle(document.documentElement).fontSize)*15))
    {
        console.log(getComputedStyle(document.documentElement).fontSize);
        let docHeader = document.getElementsByTagName('header')[0];
        let docMain = document.querySelector('main');
        let docBannerSpan = document.getElementsByClassName('banner_span');
        document.getElementById('large_menu_ul').style.display='block';
        document.getElementById('large_menu').style.width='30%';
        document.getElementById('small_menu_img').style.display='none';
        docHeader.style.boxShadow='0px 0px 0px 0px';
        docBannerSpan[0].style.fontSize='7rem';
        docBannerSpan[1].style.fontSize='4rem';
        docBannerSpan[2].style.fontSize='5rem';

        //docHeader.style.paddingTop = '0px';
        docHeader.style.position="relative";
        docHeader.style.top = '0rem';
        docHeader.style.height = "18rem";
        docMain.style.paddingTop="0rem";

        for (let i = 0; i < docBannerSpan.length; i++)
        {
            docBannerSpan[i].style.position='absolute';
            
        }

        document.removeEventListener('scroll', makeBigMenu);
        document.addEventListener('scroll', makeSmallMenu);
    }
}

document.addEventListener('scroll', makeSmallMenu);