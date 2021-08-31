let link = document.getElementById("rickroll-ou-bolsonaro");
let mudar = setInterval(() => {
    if(link.href == "https://www.youtube.com/watch?v=dQw4w9WgXcQ") {
        link.href = "https://uploads.metropoles.com/wp-content/uploads/2022/06/02171239/18032020-RF-_-Coronavirus-Jair-Bolsonaro-em-coletiva-com-ministros-18-3_-0491.jpg";
        
    }
    else if(link.href == "https://uploads.metropoles.com/wp-content/uploads/2022/06/02171239/18032020-RF-_-Coronavirus-Jair-Bolsonaro-em-coletiva-com-ministros-18-3_-0491.jpg") {
        link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        
    }
},200);
