// console.log("I");

// // This will be shown after 2 seconds

// setTimeout(()=>{
//   console.log("eat");
// },5000)

// console.log("Ice Cream");

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (fruit_name,call_production) =>{

    //console.log("Order placed. Please call production");

    setTimeout(()=>{
      console.log(`${stocks.Fruits[fruit_name]} was selected`);
      
      // order placed . Call production .function 👇 is being called 
      call_production();
    },2000)

    };
    
    let production = () =>{
        setTimeout(()=>{
            console.log("production has started")
            setTimeout(()=>{
              console.log("The fruit has been chopped")
              setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(()=>{
                  console.log("start the machine")
                  setTimeout(()=>{
                    console.log(`Ice cream placed on ${stocks.holder[1]}`)
                    setTimeout(()=>{
                      console.log(`${stocks.toppings[0]} as toppings`)
                      setTimeout(()=>{
                        console.log("serve Ice cream")
                      },2000)
                    },3000)
                  },2000)
                },1000)
              },1000)
            },2000)
          },0000);
    };

    
// Trigger 👇
    order(0,production);
