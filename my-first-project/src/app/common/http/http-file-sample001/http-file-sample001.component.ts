import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { concatMap, from, reduce } from 'rxjs';

@Component({
  selector: 'app-http-file-sample001',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './http-file-sample001.component.html',
  styleUrls: ['./http-file-sample001.component.scss'],
})
export class HttpFileSample001Component {
  constructor(private http: HttpClient) {}

  downloadCsv = (blob: Blob): void => {
    const url = (window.URL || window.webkitURL).createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = 'hello.csv';
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    (window.URL || window.webkitURL).revokeObjectURL(url);

    blob.text().then((r) => console.log(r));
  };

  sendRequest = (i?: number) => {
    console.log(i);
    return this.http.get(environment.playSampleApiBase + '/download', {
      responseType: 'arraybuffer',
    });
  };

  download1(): void {
    this.sendRequest().subscribe((data) => {
      const blob = new Blob([data], { type: 'text/csv' });
      this.downloadCsv(blob);
    });
  }

  download2(): void {
    // byte order mark. Unicodeで符号化されていることを示す. 以下はUTF-8.
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    const csvStr = 'abc,def,hij\n123,456,789\n';
    const blob = new Blob([bom, csvStr], { type: 'text/csv' });
    this.downloadCsv(blob);
  }

  // 分割リクエストしてcsvを結合
  download3(): void {
    from([1, 2, 3])
      .pipe(
        concatMap((i) => this.sendRequest(i)),
        reduce((acc, res) => {
          acc.push(res);
          return acc;
        }, [] as ArrayBuffer[])
      )
      .subscribe((data) => {
        const blob = new Blob([...data], { type: 'text/csv' });
        this.downloadCsv(blob);
      });
  }

  file: File | undefined;
  onChangeFile = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.file = target.files[0];
    }
  };
  uploadFile = () => {
    if (!this.file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', this.file);
    this.http
      .post(environment.playSampleApiBase + '/upload', formData)
      .subscribe();
  };

  s3File: File | undefined;
  onChangeS3File = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.s3File = target.files[0];
    }
  };
  uploadS3File = () => {
    if (!this.s3File) {
      return;
    }
    const formData = new FormData();
    formData.append('file', this.s3File);
    this.http
      .post(environment.playSampleApiBase + '/upload-s3', formData)
      .subscribe();
  };

  downloadS3File = () => {
    return this.http
      .get(environment.playSampleApiBase + '/download-s3', {
        responseType: 'arraybuffer',
      })
      .subscribe((data) => {
        const blob = new Blob([data], { type: 'text/csv' });
        this.downloadCsv(blob);
      });
  };
}
