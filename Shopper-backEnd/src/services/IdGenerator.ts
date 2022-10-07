import { v4 } from "uuid";
import { IIDGenerator } from "../ports/Ports";

export class IdGenerator implements IIDGenerator{

    generate(): string{
        return v4();
    }
}
