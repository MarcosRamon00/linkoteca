const eight_ball = {
    results : ['sim','não','talvez','provavelmente sim','provavelmente não',"agora não","meh"],
    throw:function(){
        document.getElementById("area_8ball").innerHTML = this.choose(this.results).toUpperCase();
    },
    choose:function(list){
        return list[Math.round(Math.random() * (list.length - 1))];
    }
}