function greetings(name, lastName) {

    //console.log(`Merhaba ${name ? name : ""} ${lastName ? lastName : ""}`);
    // name varsa bastır yoksa boş olarak bastır
    let info = `Merhaba ${name} ${lastName}`
    return info
} //default parametre alır

//greetings("hilal", "öztürk"); // 1 kere yazdıracak
//console.log(greetings("hilal","öztürk")); //2 kere yazdıracak 

let info = greetings("hilal", "öztürk");

function domIdWriteInfo(id, info2) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML =`<span style="color:red">${info2}</span>` 

}

domIdWriteInfo('greeting', info)


