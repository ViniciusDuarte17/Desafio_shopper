import { IIDGenerator } from "../../../src/ports/Ports";



export class IdGeneratorMock implements IIDGenerator{
    generate(): string {
       return 'uiId'
    }
    
}