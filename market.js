
document.addEventListener('DOMContentLoaded', () => {


    window.addEventListener('scroll', () => {
        console.log("Scroll detected!"); // Check if scrolling is detected
        const header = document.querySelector('.header');
        if (header) {
            console.log("Header found!");
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
                console.log("Class 'scrolled' added");
            } else {
                header.classList.remove("scrolled");
                console.log("Class 'scrolled' removed");
            }
        } else {
            console.log("Header not found!");
        }
    });


   const prodect=document.querySelectorAll('.prod');
   const totalvalue=document.querySelector('.total');

   
   let total =0;


   prodect.forEach((pro , index) => {

        let l=1;

        const okay=pro.querySelector('.okay');
        const cart=pro.querySelector('.add-to-cart');
        const value=pro.querySelector('.value');
        const plus=pro.querySelector('.plus');
        const minus=pro.querySelector('.minus');

        value.textContent=l;
        okay.addEventListener( 'click' , () => {
            okay.style.display='none';
            cart.style.display='flex';

            total+=1;
            totalvalue.textContent=total;
            totalvalue.style.display='grid';

        })

        plus.addEventListener( 'click' , () => {
            l+=1;
            value.textContent=l;
        })

        minus.addEventListener( 'click' , () => {
            l-=1;
            value.textContent=l;
            if(l==0){
                total-=1;
                totalvalue.textContent=total;
                value.textContent=1;
                l=1;
                okay.style.display='block';
                cart.style.display='none';

                if(total==0){
                    totalvalue.style.display='none';
                }
            }
        })
        

        
   })
});

