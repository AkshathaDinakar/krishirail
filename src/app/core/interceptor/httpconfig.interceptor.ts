import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "../../../environments/environment";


@Injectable({
    providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        let tokenizedReq = request.clone({
            headers: request.headers
                .set("Cache-Control", "no-cache, no-store, must-revalidate")
                .set("Pragma", "no-cache")
                .set("Expires", "0"),
        });

        return next.handle(tokenizedReq).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log("the error in HttpErrorResponse", error);
                return throwError(error);
            })
        );

    }
}
