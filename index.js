var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 50,
      breakpoints: {
        599: {
           slidesPerView: 3  
        }
      }
    });




    //Initialize Animate On Scroll
    AOS.init();



    
    
//===================Package Toggle=======================
const packagesButtons = document.querySelectorAll('.packages__buttons button')
const packagesTableBody = document.querySelector('.packages tbody')

const removeActiveClassFromButtons = () => {
    packagesButtons.forEach(button => {
        button.classList.remove('active')
    })
}

packagesButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClassFromButtons()
        if(button.classList.contains('students')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `<tr>
                    <td>Regular with standard license</td>
                    <td>6 weeks</td>
                    <td>2,500</td>
                </tr>
                <tr>
                    <td>Regular with premium license</td>
                    <td>6 weeks</td>
                    <td>2,800</td>
                </tr>
                <tr>
                    <td>Express without license</td>
                    <td>3 weeks</td>
                    <td>2,000</td>
                </tr>
                <tr>
                    <td>Express with standard license</td>
                    <td>3 weeks</td>
                    <td>3,000</td>
                </tr>
                <tr>
                    <td>Express with premium license</td>
                    <td>3 weeks</td>
                    <td>3,200</td>
                </tr>
                <tr>
                    <td>Polishing without license</td>
                    <td>2 - 4 weeks</td>
                    <td>1,500</td>
                </tr>
                <tr>
                    <td>Polishing with standard license</td>
                    <td>2 - 4 weeks</td>
                    <td>1,900</td>
                </tr>
                <tr>
                    <td>Polishing with premium license</td>
                    <td>2 - 4 weeks</td>
                    <td>2,100</td>
                </tr>
                `
        } else if(button.classList.contains('License')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `<tr>
                <td>Regular</td>
                <td>3 months</td>
                <td>1,650</td>
            </tr>
            <tr>
                <td>Express</td>
                <td>3 - 4 weeks</td>
                <td>1,990</td>
            </tr>
            <tr>
                <td>Polishing</td>
                <td>4 weeks</td>
                <td>2000</td>    
            `
        } else if (button.classList.contains('non-students')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `<tr>
                    <td>Regular with standard license</td>
                    <td>6 weeks</td>
                    <td>2,600</td>
                </tr>
                <tr>
                    <td>Regular with premium license</td>
                    <td>6 weeks</td>
                    <td>2,900</td>
                </tr>
                <tr>
                    <td>Express without license</td>
                    <td>3 weeks</td>
                    <td>2,200</td>
                </tr>
                <tr>
                    <td>Express with standard license</td>
                    <td>3 weeks</td>
                    <td>3,200</td>
                </tr>
                <tr>
                    <td>Express with premium license</td>
                    <td>3 weeks</td>
                    <td>3,400</td>
                </tr>
                <tr>
                    <td>Polishing without license</td>
                    <td>2 - 4 weeks</td>
                    <td>1,600</td>
                </tr>
                <tr>
                    <td>Polishing with standard license</td>
                    <td>2 - 4 weeks</td>
                    <td>2,000</td>
                </tr>
                <tr>
                    <td>Polishing with premium license</td>
                    <td>2 - 4 weeks</td>
                    <td>2,300</td>
                </tr>
                `
        }
    })
})