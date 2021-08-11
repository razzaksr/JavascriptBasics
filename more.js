//document.writeln("Hai there!");

let tech=[3.456,3234,65.7,633224,3,557.6,8,43,42,4.6,57]

const read=()=>{
    //let check=Array.from(localStorage.getItem("manikandan"))
    const check=JSON.parse(localStorage.getItem("manikandan"))
    check.hai.map((data)=>{
        alert(data);
    })
    document.writeln(check.address+" "+check.contact);
}

const store=()=>{
    //const txt=tech.toString();
    const txt=JSON.stringify({"hai":tech,"address":"Salem","contact":765445678})
    localStorage.setItem("manikandan",txt);
    alert("Stored");
}


const slicing=()=>{
    const n1=parseInt(document.getElementById('num1').value);
    const n2=parseInt(document.getElementById('num2').value);
    let news=tech.slice(n1,n2);
    news.map((ele,ind)=>{
        alert(ele);
    })
}

const get=()=>{
    const n=parseInt(document.getElementById('num').value);
    let news=tech.slice(-n);
    news.map((ele,ind)=>{
        alert(ele);
    })
}

const hai=()=>{
    return "<h1>Zealous</h1>"
}

const loop=()=>{
    for(let num=1;num<=10;num++)
    {
        alert(num*10);
    }
}


const yet=()=>{
    document.writeln(hai());
    loop();
}