function Discount(value) {
    this.element=null;
    this.value=value;
    this.createComponent=function () {
        let div=document.createElement('div');
        let p=document.createElement('p');
        p.setAttribute('class','discountP');
        p.style.cssText="color: white;";
        div.style.cssText="height:20px;background-color: darkred;";
        p.innerText=this.value+'%';
        div.setAttribute('class','discount');
        div.setAttribute('slot','discount');
        div.appendChild(p);
        this.element=div;

    };
    this.createComponent();

}
function Image(value) {
    this.element=null;
    this.value=value;
    this.createComponent=function () {
        let img=document.createElement('img');
        img.setAttribute('src',this.value);
        img.setAttribute('slot','image_src');
        img.style.cssText="width: 40%;height:140px;margin-left:auto;margin-right:auto;display: block;margin-top:10px;";
        this.element=img;

    };
    this.createComponent();

}

function OldPrice(value) {
    this.element=null;
    this.value=value;
    this.createComponent=function () {
        let strike=document.createElement('strike');
        strike.innerText=this.value;
        strike.setAttribute('class','oldPrice');
        strike.setAttribute('slot','oldPrice');
        strike.style.cssText="font-size:15px;font-weight: bold;color: grey;display: inline;";
        this.element=strike;

    };
    this.createComponent();

}
function LikeCount(value) {
    this.element=null;
    this.value=value;
    this.createComponent=function () {
        let div=document.createElement('div');
        let i=document.createElement('i');
        let p=document.createElement('p');
        p.setAttribute('class','likeP');
        div.style.cssText="bottom: 0;position: absolute;";
        p.innerText=this.value;
        p.style.cssText="display: inline;";
        i.setAttribute('class','fa fa-heart');
        i.style.cssText="height: 20px;color: red;display: inline;";
        div.appendChild(i);
        div.appendChild(p);
        div.setAttribute('class','like');
        div.setAttribute('slot','like');
        this.element=div;

    };
    this.createComponent();

}

function CardDiv(id) {
    this.element = null;
    this.id = id;
    this.createCard = function () {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.setAttribute('id', 'card' + this.id.toString());
        this.element = div;
    };
    this.appendComponent = function (comp) {
        this.element.appendChild(comp.element);
    };
    this.appendToBody = function (id) {
        let div = document.createElement('div');
        div.setAttribute('class', 'swiper-slide');
        div.appendChild(this.element);
        document.getElementById('swiper').appendChild(div);
    };
    this.appendSlut = function (name, slutval) {
        let span = document.createElement('span');
        span.setAttribute('slot', name);
        span.innerText = slutval;
        this.element.appendChild(span);
    };
    this.createCard();
}
