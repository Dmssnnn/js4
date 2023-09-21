// დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად მიიღებს ისეთ რიცხვებს
// რომლის დახმარებითაც უნდა გამოვითვალო მაგალითად რამდენი წელი გვაკლდება თითოეულს
// პენსიამდე და ეს ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.


const Pensia = (age) => {
    const getPensioner = 60 - age ;
    const result = `
    pensioneri iqnebi ${getPensioner}-wlis asakshi
    `
    return result ;
}
console.log(Pensia(20))


// დავამუშავოთ ეს მასივი შესაბამისად ანუ უნდა შეგვეძლოს რომ მივწვდეთ ამ მასივში მაგალითად name
// და შემდეგ if დავწეროთ რომ თუ მაგალითად ამ მასივში ნამდვილად გვაქვს რომელიმე სახელი დაგვიბეჭდოს
// რომ ნაპოვნია და მისი ასაკიც არის შესაბამისი რაც მასივში გვიწერია, და ასევე მისი თვალის ფერი 
// არის და შესაბამისი eye_color,ამას უკვე template literals მეთოდით გავაკეთებდი.აქ უბრალოდ 
// array ერთერთი მეთოდი დაგეხმარებოდათ და ეცადეთ მასივების დასამუშავბლად რა მეთოდი გამოიყენება 
// ყველაზე ხშირად თქვენით მოძებნოთ მარტივია ძაან.

const characters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: "188",
      mass: "84",
      eye_color: "blue",
      gender: "male",
    },
    
    ]

    const getNames = () =>{
        const result = characters.filter(item => item.name === "Luke Skywalker" && item.mass === "727")
        if(!result.length){
            return "not found"
        }
        return result;
    }
    console.log(getNames())



// დაწერეთ პროგრამა რომელიც მიღებული მასივიდან/სიიდან წაშლის განმეორებით ელემენტებს
// მაგალითად, მოცემული გვაქვს nums = [10, 15, 15, 20] უნდა მივიღოთ [10, 15, 20]
// რა გვჭირდება:
// ერთი სია სადაც შევინახავთ შემოწმებულ ელემენტებს
// მეორე სია სადაც შევინახავტ უნიკალურ ელემენტებს
// ციკლი გამოიყენეთ forEach მეთოდი მასივზე (როგორც sort ვნახეთ ისევე ესეც გვაძლევს წვომას სათითაო ელემენტზე)
// if შედარება თუ ელემენტი რომელსაც ამოწმებტ უკვე არის შემოწმებულების სიაში ესეიგი ეს ელემენტი უნიკალურებში 
// არ უნდა დაემატოს არ ვიყენებთ set ს, ვაწყობთ ლოგიკას ნულიდან და ერთ მითითებას მოგცემთ includes მეთოდი გაარჩიეთ
// რას აკეთებ ზუსტად,ამ დავალებაში გამოგადგებათ



nums = [10, 15, 15, 20] 

const getNotExactNums = () => {

    const arraySet  = new Set(nums)
    const result = Array.from(arraySet);
    return result ; 
}
console.log(getNotExactNums())




// შექმენით შემდეგი პროგრამა
// სახელი, გვარი, ასაკი
// თუ სახელის სიგრძე მეტია 20 ქერექთერზე დალოგეთ მესიჯი, (სახელი დასაშვებზე მეტია) (დაარისერჩეთ მექანიზმი სტრინგის სიგრძის შემოწმების)
// თუ გვარის სიგრძე მეტია 40 ქერექთერზე დალოგეთ მესიჯი (გვარი დასაშვებზე მეტია)
// თუ ასაკი მეტია 18 ტზე, შექმნით ახალი ცვლადი სრული სახელი რომელიც გააერთიანებს
// სახელი, გვარის ცვლადებს და დალოგავს მესიჯს "გამარჯობა <სრული სახელი გვარი>"


const getValidation = (name, surname, age) => {
    if (name.length > 20) {
      return "name is too long";
    } else if (surname.length > 20) {
      return "surname is too long";
    } else if (age > 18) {
      const result = `გამარჯობა ${name} ${surname}, შენ ხარ ${age} წლის `;
      return result;
    } else {
      return `გამარჯობა ${name} ${surname}`;
    }
  };
  
  console.log(getValidation("dmssnnn", "alava", 20));

  
  
  
  
  
  