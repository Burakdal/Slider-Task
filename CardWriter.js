function CardWriter(){
    this.html="<li class='glide__slide'>"+document.getElementById("placeholderCard").innerHTML+"</li>";
}
CardWriter.prototype.appendHtml=function (placeholder,value) {
    this.html=this.html.replace(placeholder,value);
};
CardWriter.prototype.release=function(){
    this.html=null;
};
