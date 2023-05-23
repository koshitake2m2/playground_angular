# playground_angular

## setup

```bash
# プロジェクト作成
ng new my-first-project

# スタンドアロンなコンポーネント作成
ng g c --standalone home/home-index

# マルチプロジェクト
ng new my-workspace --no-create-application
ng generate application my-first-app
ng generate library my-lib

```

## update

```bash

ng update @angular/core@16 @angular/cli@16 --force
ng update @angular/material@16 --force
ng update @angular-eslint/builder @angular-eslint/schematics --force

```

## tips

- standaloneで何をimportsすればいいか困った時
  - @angular/materialなら該当componentのAPIページにModule書いてある
