     //BigInt
 
    /* JavaScrip-ում nambery-ը աշխատում է -+(2-ի 53 աստիճան)-ի դիապազոնում
    այդ դիապազոնից մեծ կամ փոքր թիվը առաջացնում է ճշտության սխալ*/

    const maxNumber=Number.MAX_SAFE_INTEGER
    
    console.log(maxNumber)
    console.log(maxNumber+1);
    console.log(maxNumber+2);
    console.log(maxNumber+3);


    /* JavaScript-ում BigInt-ը  հնարաորություն ստեղծում  աշխատել 
    ավելի բարձր կամ ցածր դիապազոն ունեցող թվերի հետ */

    console.log("--BigInt Examples--")

    let bigIntExample= 100n;
    let bigIntExample2 = BigInt(100);
    console.log( bigIntExample,bigIntExample2);

    let bigIntNumber=BigInt(Number.MAX_SAFE_INTEGER)
    console.log(bigIntNumber);
    console.log(bigIntNumber+1n);
    console.log(bigIntNumber +2n);
    console.log(bigIntNumber +3n);
    console.log(bigIntNumber +4n);


    