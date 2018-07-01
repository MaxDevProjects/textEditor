Vue.component('par-item', {
    props: ["paragraph"],
    template: '<textarea>{{ paragraph.text }}</textarea>',
})


new Vue(
    {
    el : '#app',
    data: {
        title : "title",
        yourAdress: "name and personal adress",
        theirAdress : "name and company adress",
        obj:"object",
        addTitle:"add new paragraph",
        deleteTitle:"delete a paragraph",
            paragraphs:[
                {p:0, text: "first paragraph"},
                {p:1, text: "second paragraph"},
                {p:2, text: "third paragraph"},
                {p:3, text: "fourth paragraph"},
            ],
            moreParagraph : 4,
            newParagraph: "new paragraph"
        },

        methods:{
            addPar:function () {
                this.paragraphs.push({
                    p:this.moreParagraph++,
                    text : this.newParagraph
                })
                this.newParagraph = "new paragraph"
            },
            deletePar:function () {
                this.paragraphs.pop({
                    p:this.moreParagraph--,
                })
            }
        }
    }
);


