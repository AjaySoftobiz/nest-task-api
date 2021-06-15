import { IsOptional, IsString } from "class-validator";

export class GetTasksFilterDto {
    @IsOptional()
    completed?:boolean;

    @IsOptional()
    @IsString()
    search?:string;
}