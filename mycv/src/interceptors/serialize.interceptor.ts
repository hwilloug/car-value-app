import { 
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToInstance } from "class-transformer";
import { nextTick } from "process";

export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto: any) {}
    
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        // Run something here before a request is handled by the request handler
        
        return handler.handle().pipe(
            map((data: any) => {
                // Run something here before the response is send out
                return plainToInstance(this.dto, data, {
                    excludeExtraneousValues: true
                })
            })
        )
    }
}