let dataArra = [

    {
        img: '/images/post-one.png',
        date: 'July 17, 2022',
        title: 'Blog one',
        para: "I'm excited to start a new learning journey as a new coder student! After several months of learning Frontend Development."
    },
    {
        img: '/images/post-two.png',
        date: 'January 13, 2022',
        title: 'Blog two',
        para: "I'm excited to start a new learning journey as a new coder student! After several months of learning Frontend Development."
    },
    {
        img: '/images/post-three.png',
        date: 'December 20, 2022',
        title: 'Blog three',
        para: "I'm excited to start a new learning journey as a new coder student! After several months of learning Frontend Development."
    }
    
]


const morePostData = [
    {
        img: '/images/post-four.png',
        date: 'November 1, 2022',
        title: 'Blog four',
        para: "I'm excited to start a new learning journey as a new coder student! After several months of learning in the Frontend Developer Career Path."
    },
    {
        img: '/images/post-five.png',
        date: 'October 1, 2022',
        title: 'Blog five',
        para: "I'm excited to start a new learning journey as a new coder student! After several months of learning in the Frontend Developer Career Path."
    },
    {
        img: '/images/post-six.png',
        date: 'October 10, 2022',
        title: 'Blog six',
        para: "I'm excited to start a new learning journey as a new coder student! After several months of learning in the Frontend Developer Career Path."
    }
]
const nav = document.querySelector('.navbar');
const closeBtn = document.querySelector('.nav-open-btn');
const openBtn = document.querySelector('.nav-close-btn');
const postSection = document.getElementById('post-section');
const morePostSection = document.getElementById('post-section-two')


closeBtn.addEventListener('click', function(){
    nav.classList.remove('close-nav');
})
openBtn.addEventListener('click', function(){
    nav.classList.add('close-nav');
})

function getPost(){
    let post = ``
    dataArra.forEach(function(item){
        post += `
        <div class="post">
            <img src="${item.img}" alt="" class="post-img">
            <p class="section-two-date">${item.date}</p>
            <h2 class="section-two-title">${item.title}</h2>
            <p class="section-two-para">${item.para}</p>
    </div>
        ` 
    })

    return post;
}

function morePost(){
    let more = ``
    morePostData.forEach(function(item){
        more += `
        <div class="post">
            <img src="${item.img}" alt="" class="post-img">
            <p class="section-two-date">${item.date}</p>
            <h2 class="section-two-title">${item.title}</h2>
            <p class="section-two-para">${item.para}</p>
        </div>
        `
    })
    return more
}


function renderPost(){
    postSection.innerHTML = getPost();
    morePostSection.innerHTML = morePost()
}
renderPost()



