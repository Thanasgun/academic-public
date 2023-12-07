import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(url: string, model: any): any {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return this.http.post(environment.endpoint.api + url, model, { headers: headers });
  }

  get(url: string): any {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return this.http.get(environment.endpoint.api + url, { headers: headers });
  }

  upload(id: string, fileToUpload: File): any {
    const formData: FormData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    formData.append("id", id);
    return this.http.post(environment.endpoint.api + "upload", formData);
  }

  download(id: string): any {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return this.http.get(environment.endpoint.api + "download/" + id, { headers: headers, responseType: "blob", observe: "response" });
  }

  exportExcel(url: string, model: any): any {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return this.http.post(environment.endpoint.api + url, model, { headers: headers, responseType: "blob", observe: "response" });
  }
}
