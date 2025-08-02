const programsMenu = document.querySelectorAll('.program')
const programDetail = document.querySelector('.programDetail')

const removeActiveClass = () => {
    programsMenu.forEach(button => {
        button.classList.remove('active')
    })
}

programsMenu.forEach(program => {
    program.addEventListener('click', () => {
        removeActiveClass()
        if(program.classList.contains('express')) {
            program.classList.add('active')
            programDetail.innerHTML = `<div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Express Lessons</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Magni facere distinctio, quod exercitationem
                    officia asperiores harum labore nemo porro accusantium incidunt quidem.
                    Atque corrupti libero accusantium sit nemo voluptatum cupiditate?</p>
                    <div class="programDetail__images">
                        <div><img src="../asset/32323.jpg" alt=""></div>
                        <div><img src="../asset/graduate2.webp" alt=""></div>
                    </div>
                    <h4>Included in weekday streams</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptate
                        odit provident culpa sequi asperiores architecto!</p>
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>    
                    <article>
                        <h5>Practical Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>        
                    <h4>Included in weekend streams</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptate
                        odit provident culpa sequi asperiores architecto!</p>
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>    
                    <article>
                        <h5>Practical Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article> 
                    <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>       
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Express Without License</h4>
                    <div>
                        <h2>₹1,850</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹1,750</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Standard License</h4>
                    <div>
                        <h2>₹2,500</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹2,300</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Premium License</h4>
                    <div>
                        <h2>₹2,800</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹2,650</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>
        `
        } else if(program.classList.contains('polishing')) {
            program.classList.add('active')
            programDetail.innerHTML = `<div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Polishing Package</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Magni facere distinctio, quod exercitationem
                    officia asperiores harum labore nemo porro accusantium incidunt quidem.
                    Atque corrupti libero accusantium sit nemo voluptatum cupiditate?</p>
                    <div class="programDetail__images">
                        <div><img src="../asset/graduate6.jpg" alt=""></div>
                        <div><img src="../asset/practical10.jpg" alt=""></div>
                    </div>
                    <h4>Included in weekday streams</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptate
                        odit provident culpa sequi asperiores architecto!</p>
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>    
                    <article>
                        <h5>Practical Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>        
                    <h4>Included in weekend streams</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptate
                        odit provident culpa sequi asperiores architecto!</p>
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>    
                    <article>
                        <h5>Practical Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article> 
                    <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>       
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Polishing Without License</h4>
                    <div>
                        <h2>₹1,650</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹1,450</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Polishing With Standard License</h4>
                    <div>
                        <h2>₹2,200</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹2,000</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Polishing With Premium License</h4>
                    <div>
                        <h2>₹2,600</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹2,450</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>
        `
        } else if(program.classList.contains('license')) {
            program.classList.add('active')
            programDetail.innerHTML = `<div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Polishing Package</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Magni facere distinctio, quod exercitationem
                    officia asperiores harum labore nemo porro accusantium incidunt quidem.
                    Atque corrupti libero accusantium sit nemo voluptatum cupiditate?</p>
                    <div class="programDetail__images">
                        <div><img src="../asset/graduate4.jpg" alt=""></div>
                        <div><img src="../asset/practical1.jpg" alt=""></div>
                    </div>
                    <h4>Included in weekday streams</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptate
                        odit provident culpa sequi asperiores architecto!</p>
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>    
                    <article>
                        <h5>Practical Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>        
                    <h4>Included in weekend streams</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptate
                        odit provident culpa sequi asperiores architecto!</p>
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>    
                    <article>
                        <h5>Practical Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article> 
                    <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>       
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Regular License</h4>
                    <div>
                        <h2>₹2,050</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹1,850</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express License</h4>
                    <div>
                        <h2>₹2,100</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹1,900</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Polishing License</h4>
                    <div>
                        <h2>₹2,400</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹2,250</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>   
            `
        } else if(program.classList.contains('regular')) {
            program.classList.add('active')
            programDetail.innerHTML = `<div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Regular Learning</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Magni facere distinctio, quod exercitationem
                    officia asperiores harum labore nemo porro accusantium incidunt quidem.
                    Atque corrupti libero accusantium sit nemo voluptatum cupiditate?</p>
                    <div class="programDetail__images">
                        <div><img src="../asset/graduate3.jpg" alt=""></div>
                        <div><img src="../asset/practical8.jpeg" alt=""></div>
                    </div>
                    <h4>Included in weekday streams</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptate
                        odit provident culpa sequi asperiores architecto!</p>
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>    
                    <article>
                        <h5>Practical Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>        
                    <h4>Included in weekend streams</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptate
                        odit provident culpa sequi asperiores architecto!</p>
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article>    
                    <article>
                        <h5>Practical Lessons</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatum 
                            earum dolorum assumenda aspernatur optio ea. Perferendis porro doloremque corporis 
                            autem soluta praesentium sapiente, quod neque! Similique animi temporibus neque?</p>
                    </article> 
                    <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>       
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Regular Without License</h4>
                    <div>
                        <h2>₹1,990</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹1,840</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Standard License</h4>
                    <div>
                        <h2>₹2,650</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹2,500</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Premium License</h4>
                    <div>
                        <h2>₹2,900</h2>
                        <p>For Non Students</p>
                    </div>
                    <div>
                        <h2>₹2,750</h2>
                        <p>For Students</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>
        `
        }
    })
})