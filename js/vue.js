Vue.component('par-item', {
    props: ["paragraph"],
    template: '<textarea>{{ paragraph.text }}</textarea>',
})


new Vue(
    {
    el : '#app',
    data: {
        show : true,
        title : "Type your title",
        yourAdress: "Type your name and personal adress",
        theirAdress : "Type the name and company adress",
        obj:"Object :",

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



    (function () {
                var textFile = null,
                    makeTextFile = function (text) {
                        var data = new Blob([text], {type: 'text/plain' });

                        if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
};


var create = document.getElementById('create'),
textbox = document.getElementsByClassName('textbox');


                create.addEventListener('click', function () {
                    var link = document.getElementById('downloadlink');
                    for (i = 0; i < textbox.length; i++) {
                        textbox[i].style.backgroundColor = "#00bfa5";
                        link.href = makeTextFile(textbox[i].value);
                    }
    link.style.display = 'block';
}, false);
})();

