export let readMore = Vue.component('read-more', {
    template: /* html */
        `<div>
            <h2>{{title}}</h2>
            <div>
                <p  id="text" class="mb-3 d-block cut-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa neque odio consectetur impedit tempore modi accusantium! Voluptatem molestiae nemo inventore soluta <span class = "moreText">corrupti. Culpa perferendis sapiente deserunt aperiam maxime consectetur recusandae quasi commodi dicta temporibus pariatur ab repellendus dignissimos natus aliquam odit ullam, quaerat autem non hic, quidem dolore laboriosam.</span></p> 
                
                <button 
                @click="showMore"
                class="btn btn-primary"
                >Show more</button>
            </div>
            <hr class="mb-4">
        </div>`,
    data() {
        return {
            title: 'Read More',
           
        }
    },
    methods: {
        showMore() {    
    
            },
        },
    })


