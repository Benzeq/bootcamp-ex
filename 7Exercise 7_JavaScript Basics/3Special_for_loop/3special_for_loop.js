for (var x = 3; x < 10; x++) {
    x = x + 3;
}
    console.log("x = " + x);

   /*
1. x starting from 3, and stops at 12 (exclude 12!), so the output presumed to
   be 11+3 == 14. BUT NO! the result is 15. WHY?

2. I changed the 12 in 10 (exclude 10!). Presumed it will be 9 + 3 = 12 or like it behaved 
   before and will calculate it like 10 + 3 = 13. BUT NO! the result is 11 .WHY?
 */