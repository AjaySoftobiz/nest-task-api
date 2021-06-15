import { IsBoolean, IsNotEmpty } from "class-validator";

export class UpdateTaskCompletedDto{
    @IsBoolean()
    @IsNotEmpty()
    completed:boolean;
}