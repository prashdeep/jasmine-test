import { greet } from "./greet";
import { async } from '@angular/core/testing';
import { not } from '@angular/compiler/src/output/output_ast';

describe('testing the greet function', async()=>{

    it('test the greet function',()=>{
        const result =  greet('Hi', "Vinay");
        console.log(result)
        expect(result).toEqual('Vinay Hi');
    })

    it('test greet with negative test cases',()=>{
        const result =  greet('Hi', "Vinay");
        console.log(result)
        expect(result).not.toBe('Ravi Hi');
    })
   
})