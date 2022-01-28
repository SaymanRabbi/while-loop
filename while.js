// while loop------
// var dayOne = 0;
// while (dayOne < 8){
//     console.log("Its day" +' ' + dayOne)
//     dayOne++;
// }
// // -------for loop-------
// var item = ['salat', 'goshto', 'chatni', 'dim', 'aluvorta'];
// for (i=0; i < item.length; i++){
//     console.log(item[i])
// }
//  vijorea Number----
// number = 1;
// while (number<=20){
//     console.log(number);
//     number = number +2;
// }
// even number-----
// var number = 0;
// while (number <= 50){
//     console.log('its number'+ " " + number)
//     number = number+2;
// }
// var sayman = "false";
// console.log(typeof(sayman));
// প্রাকটিস চ্যালেঞ্জ-১



// এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো। 
// var num = 0;
// while (num < 10){
//     console.log("রাত ৮ টা বাজে মডিউল আনলক করো"+" "+ num);
//     num++
// }
// var num = 0;
// while (num < 10){
//     console.log("ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো"+" "+ num);
//     num++
// }
// var num = 0;
// while (num < 10){
//     console.log("ভিডিও দেখতে দেখতে নোটস নাও"+" "+ num);
//     num++
// }
// var num = 0;
// while (num < 10){
//     console.log("মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো "+" "+ num);
//     num++
// }

// ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 
// প্রতিদিন তোমার কাজ কি? 



// ১) রাত ৮ টা বাজে মডিউল আনলক করো  

// ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

// ৩) ভিডিও দেখতে দেখতে নোটস নাও 

// ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

// ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 
// var i = 0; 
var bujteaPrci = true;
// for (i = 0; i <10; i++){
//     console.log("রাত ৮ টা বাজে মডিউল আনলক করো"+ " "+i)
//     console.log("ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো"+ " "+i)
//     console.log("ভিডিও দেখতে দেখতে নোটস নাও "+ " "+i)
//     console.log("মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো "+ " "+i)
//     if (bujteaPrci == true){
//         console.log("Bujtea parci"+ " "+i)
//     }
//     else{
//         console.log("Bujtea pari nai"+ " "+i)
//     }
    
// }
// while (i <= 10){
//     console.log("রাত ৮ টা বাজে মডিউল আনলক করো"+ " "+i)
//         console.log("ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো"+ " "+i)
//         console.log("ভিডিও দেখতে দেখতে নোটস নাও "+ " "+i)
//         console.log("মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো "+ " "+i)
//         if (bujteaPrci == true){
//             console.log("Bujtea parci"+ " "+i)
//         }
//         else{
//             console.log("Bujtea pari nai"+ " "+i)
//         }
//         i++;
// }
var bujteaParci=true;
var content = ["রাত ৮ টা বাজে মডিউল আনলক করো", "ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো", "ভিডিও দেখতে দেখতে নোটস নাও", "মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো", bujteaParci]

        // for(i=0; i<content.length;i++){
        //     console.log(content[i])
        //     if (bujteaParci == true){
        //                     console.log("Bujtea parci"+ " "+i)
        //                 }
        //                 else{
        //                     console.log("Bujtea pari nai"+ " "+i)
        //                 }
        // }

        // var random = ['alu', 'sayman', 'vaji', 'sobji', 'need'];
        // var newarry = [];

        // for (i=0; i<random.length ; i++){
        //         if (random[i].length <= 4 ){
        //               console.log(  newarry.push(random[i]))
        //         }
        //         else{
        //          console.log("skip" + " "+ random[i] )
        //         }
        // }
        // console.log(newarry);

var rearray = ["sayman", "rabbi", "allu", "dim", "shutki", "pitha"];
var newarray = [];
for (i = 0; i<rearray.length; i++){
        if (rearray[i].length <= 4){
                console.log(newarray.push(rearray[i]));
        }
        else{
                console.log("skip"+" " + rearray[i])
        }
}
console.log(newarray);