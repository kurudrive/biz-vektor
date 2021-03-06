﻿BizVektor
==========
[![Build Status](https://api.travis-ci.org/vektor-inc/biz-vektor.svg)](https://travis-ci.org/vektor-inc/biz-vektor)
Free WordPress Theme for business
* * *
## Theme URI
https://bizvektor.com
## Description
BizVektor（ビズベクトル）テーマは管理画面からの設定のみで高品質なビジネスサイトを構築する事が出来ます。また、テーマ拡張プラグインによって新たに選択出来るデザインを増やす事が出来ます。
## Author
Vektor,Inc.
## Author URI
http://www.vektor-inc.co.jp/
## Version
1.10.0
## License
GNU General Public License

## バージョン名ルール

### 1.0 以降

#### *.+.-

[*] 複数の機能追加があるメジャーバージョンアップ
[+] 機能追加・仕様変更を含むバージョンアップ
[-] 不具合修正のみ

### 1.0 以前

#### 0.*.+.-

[*] 複数の機能追加があるメジャーバージョンアップ
[+] 機能追加・仕様変更を含むバージョンアップ
[-] 不具合修正のみ

## コーディングガイド

利用者・開発者が増えてきたので、より読み易い構成になるように以下のルールになるように調整していくものとします。

### ディレクトリ構成

#### /design_skins
デザインが指定してあるファイル。一つのデザインスキンに対して１つのフォルダ

#### /inc

BizVektor 固有のテーマオプション項目 biz-vektor-options に関する処理

#### /plugins

そのほかの独自機能は機能ごとにディレクトリを作ってこの中に入れる

### 命名ルール

#### 共通命名ルール

* すべて小文字とする。
* module以外はハイフンを使用。アンダーバーは使わない。

#### ディレクトリ命名ルール

* biz-vektor 内のディレクトリはアンダーバーを使用。 ハイフンやキャメルケースは使わない。